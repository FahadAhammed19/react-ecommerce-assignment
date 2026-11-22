import React from 'react';
import {Link} from 'react-router-dom';
import {money} from './api';
export default function ProductCard({product,add}){return <article className="product"><Link to={'/products/'+product.id} className="product-image"><img src={product.image} alt={product.title} loading="lazy"/></Link><div className="product-copy"><p className="eyebrow">{product.category}</p><Link to={'/products/'+product.id}><h3>{product.title}</h3></Link><div className="product-bottom"><strong>{money(product.price)}</strong><button className="add" onClick={()=>add(product)} aria-label={'Add '+product.title+' to cart'}>Add to bag <span>+</span></button></div></div></article>;}
