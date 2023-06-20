import { loadCart } from "../src/lib/data";

const submit = async (e: any) => {
    const database = await fetch('/supabaseSubmit', {
        method: "POST",
        body: JSON.stringify(loadCart()),
    });

    console.log("database: ", database);
}

export default submit;