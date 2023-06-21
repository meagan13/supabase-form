import { loadCart } from "../src/lib/data";

const submit = async (e: any) => {
    console.log("in the submit function")

    const database = await fetch('/supabaseSubmit', {
        method: "POST",
        body: JSON.stringify(loadCart()),
    });

    console.log("database: ", database);
}

export default submit;