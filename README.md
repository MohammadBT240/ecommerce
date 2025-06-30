# MBT Stores Ecommerce Platform

A modern, full-stack ecommerce web application built with **Next.js** and **Sanity.io**. This project features a beautiful storefront, shopping cart, Stripe-powered checkout, and a real-time CMS for product and banner management.

---

## 🚀 Features

- **Product Catalog**: Browse products with images, details, and prices.
- **Product Details**: View detailed product pages with image gallery and reviews.
- **Cart & Quantity Management**: Add, remove, and update product quantities in a persistent cart.
- **Stripe Checkout**: Secure payments with Stripe integration (NGN currency by default).
- **Order Success Animation**: Confetti fireworks on successful order.
- **Sanity Studio CMS**: Real-time admin panel for managing products and banners.
- **Responsive Design**: Fully responsive and mobile-friendly UI.
- **Social Links**: Instagram and Twitter links in the footer.

---

## 🛠️ Tech Stack

- [Next.js](https://nextjs.org/) (App Router)
- [React](https://react.dev/)
- [Sanity.io](https://www.sanity.io/) (Headless CMS)
- [Stripe](https://stripe.com/) (Payments)
- [Styled Components](https://styled-components.com/)
- [React Hot Toast](https://react-hot-toast.com/) (Notifications)
- [React Icons](https://react-icons.github.io/react-icons/)

---

## 📦 Monorepo Structure

- `/src` — Next.js frontend (storefront, cart, checkout, etc.)
- `/sanity_ecommerce` — Sanity Studio (CMS for products and banners)

---

## ⚙️ Environment Variables

Create a `.env.local` file in the project root with the following variables:

```
# Next.js frontend
NEXT_PUBLIC_SANITY_TOKEN=your_sanity_read_token
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key

# API route (backend)
STRIPE_SECRET_KEY=your_stripe_secret_key
```

> **Note:** You can generate Sanity tokens in your [Sanity.io project settings](https://www.sanity.io/docs/api-tokens). Stripe keys are available in your [Stripe dashboard](https://dashboard.stripe.com/apikeys).

---

## 🏗️ Local Development

### 1. Install Dependencies

```bash
npm install
cd sanity_ecommerce && npm install
```

### 2. Start the Sanity Studio (CMS)

```bash
cd sanity_ecommerce
npm run dev
```

- The studio will be available at [http://localhost:3333](http://localhost:3333) by default.
- You can also access it via the Next.js app at `/studio` (e.g., [http://localhost:3000/studio](http://localhost:3000/studio)).

### 3. Start the Next.js Frontend

```bash
npm run dev
```

- The store will be available at [http://localhost:3000](http://localhost:3000)

---

## 🗂️ Sanity Studio (CMS) Usage

- **Products**: Add/edit products with images, name, slug, price, and details.
- **Banners**: Manage homepage banners with images, text, and links.
- All changes are reflected in real-time on the frontend.

### Product Schema Example

```js
{
  name: 'product',
  fields: [
    { name: 'image', type: 'array', of: [{type: 'image'}] },
    { name: 'name', type: 'string' },
    { name: 'slug', type: 'slug', options: { source: 'name' } },
    { name: 'price', type: 'number' },
    { name: 'details', type: 'string' },
  ]
}
```

---

## 🌐 Deployment

- **Vercel** is recommended for deploying the Next.js frontend.
- **Sanity Studio** can be deployed via [Sanity CLI](https://www.sanity.io/docs/deployment).
- Set all required environment variables in your deployment platform.

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## 📬 Contact & Social

- Linkedin: [@Mohammad-Bashir](https://www.linkedin.com/in/mohammad-bashir-7545a3212/)
- GitHub: [@MohammadBT240](https://github.com/MohammadBT240)
- Email: bashtukus@gmail.com

---

## 📄 License

This project is for educational/demo purposes. Contact the author for commercial use.
