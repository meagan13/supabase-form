import { Component, createSignal, onMount } from 'solid-js'
import { Order, loadCart } from '../lib/data'
import submit from '../../supabase/formSubmitFunction';
import { post } from '../../supabase/supabaseSubmit';

export const OrderForm: Component = () => {
    const [order, setOrder] = createSignal<Order>(loadCart());

    onMount(() => {
        if(window.localStorage.order) {
            const orderData = JSON.parse(window.localStorage.order);
            setOrder(orderData);
        }
    })

    const update = (p: Partial<Order>) => {
        setOrder({ ...order(), ...p});
        window.localStorage.order = JSON.stringify(order());
    }

    const checkout = (e: any) => {
        e.preventDefault();
        submit(e);
        post(e);
        // location.href="/pay";
    }

    return (
        <div>
            <form class="flex flex-col">
                <div class="py-2">
                    <label for="fname">First Name</label>
                    <input
                        id="fname"
                        class="rounded mx-2"
                        type="text"
                        value={ order().fname }
                        onChange={ (e) => update({ fname: e.currentTarget.value })}
                        required
                    />
                </div>

                <div class="py-2">
                    <label for="lname">Last Name</label>
                    <input
                        id="lname"
                        class="rounded mx-2"
                        type="text"
                        value={ order().lname }
                        onChange={ (e) => update({ lname: e.currentTarget.value })}
                        required
                    />
                </div>

                <div class="py-2">
                    <label for="email">Email</label>
                    <input
                        id="email"
                        class="rounded mx-2"
                        type="email"
                        value={ order().email }
                        onChange={ (e) => update({ email: e.currentTarget.value })}
                        required
                    />
                </div>

                <button
                    id="checkout"
                    class="bg-gray-300 rounded-full py-1 my-2"
                    onclick={ checkout }
                >
                Checkout
                </button>
            </form>
        </div>
    )
}