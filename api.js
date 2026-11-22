import {useEffect,useState} from 'react';
export function useProducts(){const [products,setProducts]=useState([]),[loading,setLoading]=useState(true),[error,setError]=useState(''),[attempt,setAttempt]=useState(0);
 useEffect(()=>{const controller=new AbortController();let active=true;const timeout=setTimeout(()=>controller.abort(),15000);setLoading(true);setError('');
 fetch('https://fakestoreapi.com/products',{signal:controller.signal}).then(r=>{if(!r.ok)throw new Error('Unable to load products.');return r.json();}).then(data=>{if(!Array.isArray(data)||data.some(p=>!Number.isFinite(p.price)||!p.title))throw new Error('Unexpected product data.');if(active)setProducts(data);}).catch(()=>{if(active)setError('We couldn’t load the collection. Check your connection and try again.');}).finally(()=>{clearTimeout(timeout);if(active)setLoading(false);});return()=>{active=false;clearTimeout(timeout);controller.abort();};},[attempt]);
 return {products,loading,error,retry:()=>setAttempt(n=>n+1)};}
export const money = n => new Intl.NumberFormat('en-US',{style:'currency',currency:'USD'}).format(n);
