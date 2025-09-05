// src/components/Auth.js
import { supabase } from "../supabase-clients";

// -------------------
// Sign Up
// -------------------
export async function signUp(email, password, role = "user") {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    console.error("Error signing up:", error.message);
    return null;
  }

  if (data.user) {
    // Save profile in "profiles" table with role
    await supabase.from("profiles").insert([
      { id: data.user.id, email: data.user.email, role },
    ]);
  }

  console.log("User signed up:", data.user);
  return data.user; // still return the user object
}

// -------------------
// Log In
// -------------------
export async function logIn(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    console.error("Error logging in:", error.message);
    return null;
  }

  if (!data.user) return null;

  // Fetch profile including role
  const { data: profile, error: profileError } = await supabase
    .from("profiles")
    .select("id, email, role")
    .eq("id", data.user.id)
    .maybeSingle();

  if (profileError) {
    console.error("Error fetching profile:", profileError.message);
    return null;
  }

  console.log("User logged in with profile:", profile);
  return profile; // return the profile including role
}

// -------------------
// Log Out
// -------------------
export async function logOut() {
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.error("Error logging out:", error.message);
    return false;
  }
  console.log("User logged out");
  return true;
}

// -------------------
// Get Current Session
// -------------------
export async function getSession() {
  const { data, error } = await supabase.auth.getSession();
  if (error) {
    console.error("Error getting session:", error.message);
    return null;
  }
  return data.session;
}

// -------------------
// (Optional) Refresh Session
// -------------------
export async function refreshSession() {
  const { data, error } = await supabase.auth.refreshSession();
  if (error) {
    console.error("Error refreshing session:", error.message);
    return null;
  }
  console.log("Session refreshed:", data.session);
  return data.session;
}
