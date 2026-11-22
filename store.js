import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
function loadCart(){try{const items=JSON.parse(localStorage.getItem('fahad-market-cart') || '[]'); return Array.isArray(items)?items.filter(i=>Number.isInteger(i.id)&&typeof i.title==='string'&&Number.isFinite(i.price)&&i.price>=0&&Number.isInteger(i.quantity)&&i.quantity>0):[];}catch{return [];}}
export const store = configureStore({reducer:{cart:cartReducer},preloadedState:{cart:{items:loadCart()}}});
store.subscribe(()=>{try{localStorage.setItem('fahad-market-cart',JSON.stringify(store.getState().cart.items));}catch{/* Cart remains usable when browser storage is unavailable. */}});
