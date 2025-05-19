# 🛍️ Marketplace

**Marketplace** is a full-stack e-commerce platform built with **React**, **NestJS**, **TailwindCSS**, and **Headless UI**. It supports multiple user roles (`admin`, `seller`, `buyer`) and provides distinct capabilities for each role, such as product management, filtering, and cart operations.

🔗 **Live Demo**: [https://market-pro-front-ajoz.vercel.app/](https://market-pro-front-ajoz.vercel.app/)  
🔗 **API Server**: [https://marketpro-api.onrender.com/api-docs](https://marketpro-api.onrender.com/api-docs)

---

## 📦 Tech Stack

- **Frontend**: React, Tailwind CSS, Headless UI
- **Backend**: NestJS
- **Deployment**: Vercel (Front-End) & Render (Back-End)

---

## 🧑‍💼 User Roles & Features

## 📦 Tech Stack
Initial users in the system, but registering new users is working.
- **Admin**: 
  - admin@admin.com
  - A12345678
- **Seller**: : 
  - seller@seller.com
  - S12345678
- **Buyer**: : 
  - buyer@buyer.com
  - B12345678

---

### 👤 Authentication (`/auth`)

#### Login
Requires the followind data to allow user access:
```json
{
  "email": string,
  "password": string
}
```

#### Register
Requires the followind data to create a new user:
```json
{
  "email": string,
  "name": string,
  "password": string,
  "confirmPassword": string,
  "role": "admin" | "seller" | "buyer"
}
```
### 🏠 Home (/home)

Depending on the logged-in user's role:

#### 👑 Admin

- View all products in the system  
- Filter products by seller

#### 🛍️ Seller

- View your own products
- Create, update, and delete products

##### Product creation request:

```json
{  
    "sku": string,  
    "name": string,  
    "price": number,  
    "rating": number,  
    "image": File,  
    "featured": boolean,  
    "stock": number,  
    "sellerId": number  
}
```

⚠️ Only users with role `seller` can create, update or delete products. The logged-in user’s id must match the `product.sellerId`.

#### 🧍 Buyer

- View all products  
- Add products to the cart for purchasing

---

## 🚀 Getting Started (Development)

### 1. Clone the repository

```bash
git clone https://github.com/kathy128/marketPro-front.git
cd marketPro-front
```
### 2. Install dependencies:

```bash
npm install
```

### 3. Start the development server:

```bash
npm run dev
```

## 📁 Folder Structure (Frontend)
```bash
/src
  /assets
  /components
    /input
    /modal
  /hooks
  /pages
    /auth
    /home
    /products
  /services
  /store
  /types
```
---

## 🔒 API Security

- Authenticated routes require a valid **JWT token** (mostly to retrieve data from the endpoints)
- **Role-based access control** is enforced on frontend

## Improvement Ideas

- Implement dark mode.
- Implement i18n (spanish and english).
- Implement aria-label to improve SEO and accessibility.
- Implement payment gateway for the products inside the cart.
- Implement remember password functionality.
- Products pagination and filtering from Back-End.
