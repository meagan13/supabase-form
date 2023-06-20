export interface Order {
    fname: string
    lname: string
    email: string
}

export function loadCart() : Order {
    try {
        return JSON.parse(localStorage.order) as Order
    } catch(_) {
        return {
            fname: '',
            lname: '',
            email: '',
        }
    }
}

export function storeCart(o: Order) {
    localStorage.order = JSON.stringify(o);
}