// ---------------------------------------------------------------
// 🔥 SINGLE FILE - BASIC SUPABASE PROJECT INTEGRATION (CRUD)
// ---------------------------------------------------------------

// Step 1: Install before use → npm i @supabase/supabase-js
import { createClient } from "@supabase/supabase-js";

// Step 2: Connect Supabase (paste your credentials here)
const SUPABASE_URL = "https://your-project-url.supabase.co";     // <-- replace
const SUPABASE_KEY = "your-public-api-key";                      // <-- replace

// Creating Supabase Client — this gives access to DB, Auth, Storage...
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);


// ================  INSERT (CREATE) ===================
export async function addUser(name, email) {
  const { data, error } = await supabase
    .from("users")            // table name
    .insert([{ name, email }]);

  if (error) return console.log("❌ Insert Error:", error);
  console.log("✅ User Added:", data);
}


// ================  READ ===================
export async function getUsers() {
  const { data, error } = await supabase
    .from("users")
    .select("*");             // get everything

  if (error) return console.log("❌ Fetch Error:", error);
  console.log("📄 Available Users:", data);
}


// ================  UPDATE ===================
export async function updateUser(id, newName) {
  const { data, error } = await supabase
    .from("users")
    .update({ name: newName })   // field to update
    .eq("id", id);               // condition for update

  if (error) return console.log("❌ Update Error:", error);
  console.log("🔄 Updated User:", data);
}


// ================  DELETE ===================
export async function deleteUser(id) {
  const { error } = await supabase
    .from("users")
    .delete()
    .eq("id", id);

  if (error) return console.log("❌ Delete Error:", error);
  console.log("🗑️ User Deleted");
}


// -----------------------------------------------------
// 🏁 Quick Usage Example (Uncomment to test)
// -----------------------------------------------------

// addUser("Fearless", "fearless@mail.com");
// getUsers();
// updateUser(1, "New Updated Name");
// deleteUser(1);

