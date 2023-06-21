import { createClient } from "@supabase/supabase-js";

const supabaseURL = () => import.meta.env.PUBLIC_VITE_SUPABASE_URL;
const supabaseKEY = () => import.meta.env.PUBLIC_VITE_SUPABASE_ANON_KEY;

// console.log("check supabase: ", supabaseURL());

const supabase = createClient(supabaseURL(), supabaseKEY());

export default supabase;