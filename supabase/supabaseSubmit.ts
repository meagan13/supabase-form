import supabase from "./supabaseClient";
import type { APIRoute } from "astro";

export const post: APIRoute = async({ request }) => {
    const formData = await request.json();
    const id = formData.id;
    const fname = formData.fname;
    const lname = formData.lname;
    const email = formData.email;

    if (!fname || !lname || !email ) {
        return new Response(
            JSON.stringify({
                message: "Missing required field",
            }),
            { status: 400 }
        );
    }

    let orderEntry: any = {};

    orderEntry.id = id;
    orderEntry.fname = fname;
    orderEntry.lname = lname;
    orderEntry.email = email;

    const { error, data } = await supabase.from('form').insert([orderEntry]).select();

    if(error) {
        return new Response (
            JSON.stringify({
                message: "Error posting customer information",
            }),
            { status: 500}
        );
    } else if (!data) {
        return new Response(
            JSON.stringify({ 
                message: "No customer data",
            }),
            { status: 500 }
        );
    } else {
        const order_number = data[0].order_number;

        console.log("Order Number: ", order_number);

        return new Response(
            JSON.stringify({
                message: "Success!",
                order_number: order_number,
            }),
            { status: 200 }
        );
    }
}