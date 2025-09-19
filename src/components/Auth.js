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
    await supabase
      .from("profiles")
      .upsert([{ 
        id: data.user.id, 
        Email: data.user.email,   // 🔄 CHANGED from "email" → "Email"
        role 
      }]);
  }

  return data.user;
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

  return data;
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
