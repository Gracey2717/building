// src/supabase-client.js
import { createClient } from "@supabase/supabase-js";

// Debug: print env vars
console.log("Supabase URL:", process.env.REACT_APP_SUPABASE_URL);
console.log(
  "Supabase Anon Key:",
  process.env.REACT_APP_SUPABASE_ANON_KEY?.substring(0, 15) + "..."
); // only show first 15 chars for safety

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  },
});
