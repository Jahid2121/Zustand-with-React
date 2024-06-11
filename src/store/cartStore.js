import { create } from "zustand";




export const useCartStore = create((set) => ({
    cart: [], 
    // the initial value for the cart
    addToCart: (product) => set((state) => ({cart: [...state.cart, product]})),
    removeFromCart: (productId) => set((state) => ({cart:  state.cart.filter(product => product.id !== productId)})),
    clearCart: () => set({cart: []})
}))