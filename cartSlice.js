import { createSlice } from '@reduxjs/toolkit';
export const cartSlice = createSlice({ name: 'cart', initialState: { items: [] }, reducers: {
 addToCart(state, {payload: product}) { const item = state.items.find(i => i.id === product.id); if(item) item.quantity += 1; else state.items.push({...product, quantity: 1}); },
 removeFromCart(state, {payload: id}) { state.items = state.items.filter(i => i.id !== id); },
 increaseQuantity(state, {payload: id}) { const item = state.items.find(i => i.id === id); if(item) item.quantity += 1; },
 decreaseQuantity(state, {payload: id}) { const item = state.items.find(i => i.id === id); if(item && item.quantity > 1) item.quantity -= 1; },
 clearCart(state) { state.items = []; }
}});
export const {addToCart,removeFromCart,increaseQuantity,decreaseQuantity,clearCart} = cartSlice.actions;
export const selectCount = state => state.cart.items.reduce((n,i)=>n+i.quantity,0);
export const selectSubtotal = state => state.cart.items.reduce((n,i)=>n+Math.round(i.price*100)*i.quantity,0)/100;
export default cartSlice.reducer;
