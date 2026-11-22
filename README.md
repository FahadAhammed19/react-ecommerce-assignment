# Fahad Market — React E-commerce Assignment

A responsive shopping application by Fahad Ahammed for Batch 10, Module 28. Browse products from Fake Store API, explore product details and manage a Redux shopping cart.

## Technologies
React, React Router, Redux Toolkit, React Redux, Vite, JavaScript and CSS.

## Main features
- Product grid with image, title, price, category and Add to Cart.
- API loading state, 15-second timeout, error message and retry.
- Product details at `/products/:id`, including description and rating.
- Search by product name, category filters, ascending/descending price sort.
- Redux cart with addToCart, removeFromCart, increaseQuantity, decreaseQuantity and clearCart reducers.
- Automatically updated navbar quantity count; subtotal and total calculated in cents.
- Empty states, accessible labels, keyboard focus, responsive mobile/tablet/desktop layout.
- Bonuses: LocalStorage cart persistence, add-to-cart feedback, removal confirmation, demo checkout and order summary.

## Installation and running
Use Node.js 20.19+ or 22.12+.

```sh
npm ci
npm run dev
```

Production:
```sh
npm test
npm run build
npm run preview
```

## Data and architecture
`api.js` fetches https://fakestoreapi.com/products. Categories are derived from the returned products. `cartSlice.js` defines the required reducers with createSlice. `store.js` uses configureStore and persists cart changes. Components use useDispatch and useSelector. Home, Details, Cart and Checkout are separate functional components; React Router handles navigation.

The main cart is managed entirely in Redux. Search/filter controls and form state are local UI concerns. Quantity has a minimum of one; Remove deletes an item. Delivery is free; total equals subtotal. Checkout is a simulation: no payment, fulfillment, or server-side form submission occurs.

## Deployment
Create a new public GitHub repository named `react-ecommerce-assignment`, upload source files and package-lock.json, and exclude node_modules and dist. Connect the repository in Netlify or Vercel. Build: `npm run build`; output: `dist`. SPA route fallback configurations are included for both hosts.

Live project link: https://merry-palmier-cd3318.netlify.app/

## Manual verification
- Load products, simulate an offline API request and retry after reconnecting.
- Search, filter and sort together; test no matching products and Clear filters.
- Open product details directly and refresh the URL.
- Add the same item twice; check navbar count and row total.
- Increase/decrease quantities, cancel/confirm removal, and clear the cart.
- Reload the browser to confirm persistence.
- Submit empty checkout fields, then complete a demo order; verify cart is cleared.
- Check keyboard navigation and mobile widths.

## Submission
Required: public GitHub repository URL. Deployment is recommended by the assignment. Review and understand the source before submission.
