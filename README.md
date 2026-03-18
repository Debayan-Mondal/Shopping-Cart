# E-Shop: FakeStore Cart App

A modern, responsive e-commerce storefront built using the **FakeStore API**. This application allows users to browse products, filter by categories, and manage a persistent shopping cart with real-time price calculations.

---

## Features

* **Product Catalog:** Fetches and displays real-time data including titles, prices, descriptions, and high-quality images.
* **Category Filtering:** Quickly sort products by Electronics, Jewelry, Men's Clothing, or Women's Clothing.
* **Persistent Shopping Cart:** Add or remove items and adjust quantities. The cart state is saved to `localStorage` to persist across page refreshes.
* **Dynamic Search:** Filter products instantly using a search bar.
* **Responsive Design:** Optimized for mobile, tablet, and desktop viewing.

---

## 🛠️ Tech Stack

* **Frontend:** React.js / Next.js
* **Styling:** Tailwind CSS / Styled Components
* **State Management:** Context API / Redux Toolkit
* **API:** [FakeStoreAPI](https://fakestoreapi.com/)
* **Icons:** Lucide-React / FontAwesome

---

## 📦 Installation & Setup

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/your-username/shopping-cart-api.git](https://github.com/your-username/shopping-cart-api.git)
    cd shopping-cart-api
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Run the development server**
    ```bash
    npm run dev
    ```

4.  **Open the app**
    Navigate to `http://localhost:3000` (or your local port) to see the app in action.

---

## 🔧 Core Implementation Logic

### Fetching Data
The app utilizes the `useEffect` hook to fetch products from the API endpoint:
`https://fakestoreapi.com/products`

### Cart Logic
The cart is managed via a global state. When an item is added, the app checks if the item already exists in the cart:
* **If yes:** Increment the quantity.
* **If no:** Add the new product object with a `quantity: 1` property.

### Total Calculation
```javascript
const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
