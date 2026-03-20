This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## STEP 1: Create Project
- npx create-next-app@latest product-catalog
- cd product-catalog
- npm run dev

## STEP 2: Structure
app/
 ├── components/
 │     ├── Navbar.jsx
 │     └── AddToCartButton.jsx
 ├── context/
 │     └── CartContext.jsx
 ├── products/
 │     └── [id]/
 │           └── page.js
 ├── layout.js
 └── page.js

## STEP 3: Fetch & Show Products -  Product List (/)
📄 app/page.js
Fetch products from:
GET https://dummyjson.com/products
- Display each product's:
- Title
- Thumbnail image
- Price

## STEP 4: Show  Product Detail Page (/products/:productId)
app/products/[id]/page.js
Fetch a single product from:
GET https://dummyjson.com/products/{id}
- Product title
- Image
- Description
- Price
- Include an "Add to Cart" button:

## STEP 5: Create AddToCartButton component
app/components/AddToCartButton.jsx

## STEP 6: Create UseContext (CartContext)
app/context/CartContext.jsx
- Create global cart state using createContext
- Store cart items in state
- Persist cart using localStorage
Provide:
- cart
- addToCart

## STEP 7: Use Hooks

- Use useContext to access cart anywhere
- useState → manage cart
- useEffect → persist cart to localStorage

## FINAL RESULT

✔ Product list page (/)
✔ Product detail page (/products/[id])
✔ Add to cart button
✔ Global cart state
✔ Cart count in navbar
✔ Cart persists after refresh