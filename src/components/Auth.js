// src/components/Auth.js
import { supabase } from "../supabase-clients";

// -------------------
// Sign Up
// -------------------
export async function signUp(email, password) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    console.error("Error signing up:", error.message);
    return null;
  }

  // Save profile in "profiles" table
  if (data.user) {
    await supabase.from("profiles").insert([
      { id: data.user.id, email: data.user.email },
    ]);
  }

  console.log("User signed up:", data.user);
  return data.user; // return only the user
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

  // Ensure profile exists (insert or update)
  if (data.user) {
    await supabase.from("profiles").upsert([
      { id: data.user.id, email: data.user.email },
    ]);
  }

  console.log("User logged in:", data.user);
  return data.user; // return only the user
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
