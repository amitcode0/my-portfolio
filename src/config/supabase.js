import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://mklipmxwzgadbgeohhme.supabase.co";
const supabaseKey = "sb_publishable_5SzpneSOQcNMdd5Y3Kvr2g_8I0L_SlK";

console.log("Initializing Supabase with URL:", supabaseUrl);
console.log("Supabase Key:", supabaseKey ? "Present" : "Missing");

let supabase;

try {
  supabase = createClient(supabaseUrl, supabaseKey);
  console.log("Supabase client created successfully");
} catch (error) {
  console.error("Error initializing Supabase:", error);
  // Create a mock supabase object to prevent app crashes
  supabase = {
    from: () => ({
      insert: () =>
        Promise.resolve({
          data: null,
          error: { message: "Supabase not initialized" },
        }),
    }),
  };
}

export default supabase;
