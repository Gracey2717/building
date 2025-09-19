// src/components/UploadProject.js
import React, { useEffect, useState } from "react";
import { supabase } from "../supabase-clients";
import { useNavigate } from "react-router-dom";

export default function UploadProject() {
  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    client: "",
    location: "",
    service: "",
    date: "",
    overview: "",
    benefits: "",
  });
  const [files, setFiles] = useState([]);
  const [previews, setPreviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [role, setRole] = useState(null);
  const navigate = useNavigate();

  // 🔒 Check user role on mount
  useEffect(() => {
    (async () => {
      try {
        const { data: userData } = await supabase.auth.getUser();
        const user = userData?.user;
        if (!user) {
          alert("Please sign in to upload projects.");
          navigate("/login");
          return;
        }

        const { data: profile, error } = await supabase
          .from("profiles")
          .select("id, Email, role")
          .eq("id", user.id)
          .maybeSingle();

        if (error) {
          console.error("Fetching profile error:", error.message);
        } else if (!profile) {
          console.warn("No profile found for user:", user.id);
        } else {
          console.log("Profile found:", profile);
        }

        setRole(profile?.role);
        if (profile?.role !== "admin") {
          alert("Only admins are allowed to upload projects.");
          navigate("/projects");
        }
      } catch (err) {
        console.error("Error checking user:", err);
      }
    })();

    // cleanup previews on unmount
    return () => previews.forEach((p) => URL.revokeObjectURL(p));
    // eslint-disable-next-line
  }, []); // run once

  const handleChange = (e) => {
    setFormData((s) => ({ ...s, [e.target.name]: e.target.value }));
  };

  const handleFileChange = (e) => {
    const selected = Array.from(e.target.files || []);
    setFiles(selected);
    const urls = selected.map((f) => URL.createObjectURL(f));
    setPreviews(urls);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data: userData } = await supabase.auth.getUser();
      const user = userData?.user;
      if (!user) throw new Error("User not authenticated.");

      const { data: profile } = await supabase
        .from("profiles")
        .select("id, Email, role")
        .eq("id", user.id)
        .maybeSingle();

      if (profile?.role !== "admin") {
        throw new Error("You must be an admin to upload projects.");
      }

      // 1️⃣ Insert project first
      const projectPayload = {
        title: formData.title,
        subtitle: formData.subtitle,
        client: formData.client,
        location: formData.location,
        service: formData.service,
        date: formData.date,
        overview: formData.overview,
        benefits: formData.benefits
          .split(",")
          .map((s) => s.trim())
          .filter(Boolean),
        uploaded_by: user.id,
      };

      const { data: inserted, error: insertError } = await supabase
        .from("projects")
        .insert([projectPayload])
        .select()
        .single();

      if (insertError) throw insertError;

      // 2️⃣ Upload files to storage and insert project_id + url + title
      if (files.length > 0) {
        const imageRows = [];

        for (const file of files) {
          const path = `projects/${inserted.id}/${Date.now()}-${file.name}`;

          const { data: uploadData, error: uploadError } =
            await supabase.storage.from("project_images").upload(path, file);

          if (uploadError) throw uploadError;

          // getPublicUrl returns an object with data.publicUrl
          const { data: publicData } = supabase.storage
            .from("project_images")
            .getPublicUrl(uploadData.path);

          imageRows.push({
            project_id: inserted.id,   // ✅ keep project link
            url: publicData.publicUrl, // ✅ image URL
            title: file.name,          // ✅ image title (filename)
          });
        }

        const { error: imageError } = await supabase
          .from("project_images")
          .insert(imageRows);

        if (imageError) throw imageError;
      }

      alert("Project uploaded successfully!");
      navigate(`/projects/${inserted.id}`);
    } catch (err) {
      console.error("Upload failed:", err);
      alert("Upload failed: " + (err.message || JSON.stringify(err)));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="upload-form" style={{ maxWidth: 760, margin: "0 auto", padding: 16 }}>
      <h2>Upload New Project</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          placeholder="Title"
          onChange={handleChange}
          required
          style={{ display: "block", width: "100%", marginBottom: 8 }}
        />
        <input
          name="subtitle"
          placeholder="Subtitle"
          onChange={handleChange}
          style={{ display: "block", width: "100%", marginBottom: 8 }}
        />
        <input
          name="client"
          placeholder="Client"
          onChange={handleChange}
          style={{ display: "block", width: "100%", marginBottom: 8 }}
        />
        <input
          name="location"
          placeholder="Location"
          onChange={handleChange}
          style={{ display: "block", width: "100%", marginBottom: 8 }}
        />
        <input
          name="service"
          placeholder="Service"
          onChange={handleChange}
          style={{ display: "block", width: "100%", marginBottom: 8 }}
        />
        <input
          name="date"
          placeholder="Year (e.g. 2025)"
          onChange={handleChange}
          style={{ display: "block", width: "100%", marginBottom: 8 }}
        />
        <textarea
          name="overview"
          placeholder="Overview"
          onChange={handleChange}
          style={{ display: "block", width: "100%", minHeight: 100, marginBottom: 8 }}
        />
        <input
          name="benefits"
          placeholder="Benefits (comma separated)"
          onChange={handleChange}
          style={{ display: "block", width: "100%", marginBottom: 8 }}
        />

        <label style={{ display: "block", marginBottom: 8 }}>
          Project images (multiple)
          <input type="file" accept="image/*" multiple onChange={handleFileChange} />
        </label>

        {/* preview thumbnails */}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 8 }}>
          {previews.map((p, i) => (
            <img
              key={i}
              src={p}
              alt={`preview-${i}`}
              style={{
                width: 100,
                height: 70,
                objectFit: "cover",
                borderRadius: 6,
                boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
              }}
            />
          ))}
        </div>

        <button
          type="submit"
          disabled={loading}
          style={{
            marginTop: 12,
            padding: "10px 16px",
            borderRadius: 6,
            cursor: loading ? "not-allowed" : "pointer",
          }}
        >
          {loading ? "Uploading..." : "Upload Project"}
        </button>
      </form>
    </div>
  );
}
