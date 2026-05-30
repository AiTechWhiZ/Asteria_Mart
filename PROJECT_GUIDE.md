# Project Guide

## Root

- `package.json`: Monorepo commands for installing, running frontend, running backend, or both together.
- `package-lock.json`: Root dependency lockfile.
- `README.md`: Quick start and setup notes.
- `PROJECT_GUIDE.md`: This file-by-file explanation.

## Frontend: `client`

- `client/package.json`: React, Vite, Tailwind, Router, Framer Motion, toast, and icon dependencies.
- `client/package-lock.json`: Frontend dependency lockfile.
- `client/index.html`: Vite HTML entry and Razorpay checkout script.
- `client/vite.config.js`: Vite React setup, dev server port, and `/api` proxy to Express.
- `client/tailwind.config.js`: Tailwind content paths, dark mode, fonts, and custom shadow token.
- `client/postcss.config.js`: Tailwind and Autoprefixer PostCSS setup.
- `client/src/main.jsx`: React entrypoint; mounts app with Router and global providers.
- `client/src/App.jsx`: Route table for public, protected, and admin screens.
- `client/src/styles.css`: Tailwind imports plus premium UI utilities, glassmorphism, gradients, buttons, inputs, cards, and skeletons.
- `client/src/lib/api.js`: Fetch helper with JWT headers, currency formatter, and fallback demo products.
- `client/src/context/AuthContext.jsx`: Login, signup, logout, JWT persistence, and current-user state.
- `client/src/context/CartContext.jsx`: Cart state, quantity changes, local persistence, and API syncing.
- `client/src/context/WishlistContext.jsx`: Wishlist state, local persistence, and API syncing.
- `client/src/context/ThemeContext.jsx`: Dark mode state and `html.dark` class management.
- `client/src/components/Navbar.jsx`: Responsive navbar, search, cart badge, auth/admin links, and theme toggle.
- `client/src/components/Footer.jsx`: Store footer.
- `client/src/components/ProtectedRoute.jsx`: Guards user-only pages.
- `client/src/components/AdminRoute.jsx`: Guards admin-only pages.
- `client/src/components/ProductCard.jsx`: Animated product card with wishlist and add-to-cart actions.
- `client/src/components/SkeletonGrid.jsx`: Loading skeleton cards.
- `client/src/components/AdminLayout.jsx`: Shared admin sidebar and page frame.
- `client/src/pages/Home.jsx`: Landing page, hero, categories, featured products, and premium visual treatment.
- `client/src/pages/Products.jsx`: Product listing with search, category, price, and rating filters.
- `client/src/pages/ProductDetails.jsx`: Product details, add-to-cart, wishlist, shipping and secure checkout highlights.
- `client/src/pages/Cart.jsx`: Cart line items, remove item, quantity controls, and order summary.
- `client/src/pages/Wishlist.jsx`: Saved products page.
- `client/src/pages/Checkout.jsx`: Shipping form, order creation, Razorpay order creation, and payment launch.
- `client/src/pages/Login.jsx`: JWT login screen.
- `client/src/pages/Signup.jsx`: User registration screen.
- `client/src/pages/ForgotPassword.jsx`: Forgot-password token request screen.
- `client/src/pages/Profile.jsx`: User profile and order history.
- `client/src/pages/admin/AdminDashboard.jsx`: Sales analytics, counts, recent orders, and inventory alerts.
- `client/src/pages/admin/AdminProducts.jsx`: Add, edit, delete, and list products.
- `client/src/pages/admin/AdminOrders.jsx`: Admin order management list.
- `client/src/pages/admin/AdminUsers.jsx`: Admin user management list.

## Backend: `server`

- `server/package.json`: Express, MongoDB, JWT, bcrypt, Cloudinary, Razorpay, and server scripts.
- `server/package-lock.json`: Backend dependency lockfile.
- `server/.env.example`: Required environment variables for MongoDB Atlas, JWT, Cloudinary, Razorpay, and CORS.
- `server/src/server.js`: Express app setup, middleware, route mounting, DB connection, and listener.
- `server/src/seed.js`: Seeds demo products and an admin account.
- `server/src/config/db.js`: MongoDB Atlas connection helper.
- `server/src/config/cloudinary.js`: Cloudinary SDK configuration.
- `server/src/config/razorpay.js`: Razorpay SDK factory.
- `server/src/middleware/auth.js`: JWT protection and admin authorization middleware.
- `server/src/middleware/error.js`: 404 and centralized error responses.
- `server/src/models/User.js`: User schema with bcrypt password hashing and reset-token fields.
- `server/src/models/Product.js`: Product schema with search index, category, pricing, stock, ratings, and images.
- `server/src/models/Cart.js`: Per-user cart schema.
- `server/src/models/Wishlist.js`: Per-user wishlist schema.
- `server/src/models/Order.js`: Order, shipping, payment, and status schema.
- `server/src/utils/token.js`: JWT signing helper.
- `server/src/utils/slugify.js`: Product slug helper.
- `server/src/routes/auth.routes.js`: Signup, login, profile, forgot-password, and reset-password APIs.
- `server/src/routes/product.routes.js`: Product listing, filtering, details, create, update, and delete APIs.
- `server/src/routes/cart.routes.js`: Cart read, add, update quantity, remove item, and clear APIs.
- `server/src/routes/wishlist.routes.js`: Wishlist read, add, and remove APIs.
- `server/src/routes/order.routes.js`: User order creation and order-history APIs.
- `server/src/routes/admin.routes.js`: Admin dashboard, order management, user management, and analytics APIs.
- `server/src/routes/upload.routes.js`: Admin Cloudinary image upload API.
- `server/src/routes/payment.routes.js`: Razorpay order creation and signature verification APIs.
