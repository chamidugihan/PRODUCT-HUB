# 🛒 PRODUCT HUB

<div align="center">

![Product Hub Banner](https://img.shields.io/badge/PRODUCT%20HUB-Live%20Store-blueviolet?style=for-the-badge&logo=shopify&logoColor=white)

[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org)
[![MongoDB](https://img.shields.io/badge/MongoDB-Database-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://mongodb.com)
[![Chakra UI](https://img.shields.io/badge/Chakra%20UI-Design-319795?style=for-the-badge&logo=chakraui&logoColor=white)](https://chakra-ui.com)
[![Vite](https://img.shields.io/badge/Vite-Build-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)

<br/>

> ✦ A full-stack MERN product management app with a luxury dark/light UI

<br/>

![Demo](https://img.shields.io/badge/Status-Live-success?style=flat-square&logo=vercel)
![License](https://img.shields.io/badge/License-MIT-purple?style=flat-square)
![Made with Love](https://img.shields.io/badge/Made%20with-❤️-FF0080?style=flat-square)

</div>

---

## 🌐 Live Demo

<div align="center">

[![Live Demo](https://img.shields.io/badge/PRODUCT%20HUB-Live%20Demo-blueviolet?style=for-the-badge&logo=render&logoColor=white)](https://product-hub-apb9.onrender.com/)

### 🔗 [https://product-hub-apb9.onrender.com](https://product-hub-apb9.onrender.com/)

> ⚠️ The app is hosted on Render's free tier — it may take **30–60 seconds** to wake up on first load.

</div>

---

## ✨ Features

- 🛍️ **Create** — Add new products with name, price & image
- 📦 **Read** — View all products in a beautiful grid layout
- ✏️ **Update** — Edit products via a styled modal
- 🗑️ **Delete** — Remove products instantly without page refresh
- 🌙 **Dark / Light Mode** — Full theme support with Chakra UI
- 💜 **Luxury UI** — Purple/pink gradient design system
- ⚡ **Real-time state** — Zustand for instant UI updates
- 📱 **Responsive** — Works on mobile, tablet and desktop

---

## 🖥️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | React 18, Vite, Chakra UI, Zustand |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB, Mongoose |
| **Styling** | Chakra UI, Custom Gradients |
| **State** | Zustand |
| **Icons** | Chakra Icons, React Icons |

---

## 🚀 Getting Started

### Prerequisites

- Node.js `v18+`
- MongoDB Atlas account or local MongoDB
- Git

### Installation

**1. Clone the repository**
```bash
git clone https://github.com/chamidugihan/PRODUCT_HUB.git
cd PRODUCT_HUB
```

**2. Install backend dependencies**
```bash
cd backend
npm install
```

**3. Install frontend dependencies**
```bash
cd frontend
npm install
```

**4. Set up environment variables**

Create a `.env` file in the `backend` folder:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Create a `.env.development` file in the `frontend` folder:
```env
VITE_API_URL=http://localhost:5000/api
```

**5. Run the app**

Backend (Terminal 1):
```bash
cd backend
npm run dev
```

Frontend (Terminal 2):
```bash
cd frontend
npm run dev
```

**6. Open in browser**
```
http://localhost:5173
```

---

## 📁 Project Structure

```
PRODUCT_HUB/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   └── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   └── ProductCard.jsx
│   │   ├── pages/
│   │   │   ├── HomePage.jsx
│   │   │   └── CreatePage.jsx
│   │   ├── store/
│   │   │   └── product.js
│   │   └── main.jsx
│   └── package.json
│
└── README.md
```

---

## 🌐 Deployment

### Backend — Render

1. Push code to GitHub
2. Create new **Web Service** on [Render](https://render.com)
3. Set **Build Command:** `npm install`
4. Set **Start Command:** `node src/server.js`
5. Add environment variables:
   - `MONGO_URI` = your MongoDB URI
   - `PORT` = 5000

### Frontend — Vercel

1. Create new project on [Vercel](https://vercel.com)
2. Connect your GitHub repo
3. Set **Root Directory** to `frontend`
4. Add environment variable:
   - `VITE_API_URL` = `https://your-render-backend.onrender.com/api`

---

## 📸 Screenshots

| Dark Mode | Light Mode |
|-----------|------------|
| <img width="1910" height="1070" alt="Dark Mode" src="https://github.com/user-attachments/assets/b733b018-951c-49cd-8463-e001bcfd221a" /> | <img width="1919" height="1067" alt="Light Mode" src="https://github.com/user-attachments/assets/0bcafbc4-f72c-4db0-88fe-1b2c148a2fe8" /> |

---

## 🔗 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/products` | Get all products |
| `POST` | `/api/products` | Create a product |
| `PUT` | `/api/products/:id` | Update a product |
| `DELETE` | `/api/products/:id` | Delete a product |

---

## 🛠️ Environment Variables

### Backend `.env`
```env
PORT=5000
MONGO_URI=mongodb+srv://...
```

### Frontend `.env.development`
```env
VITE_API_URL=http://localhost:5000/api
```

### Frontend `.env.production`
```env
VITE_API_URL=https://your-backend.onrender.com/api
```

---

## 📄 License

This project is licensed under the **MIT License**.

---

<div align="center">

**✦ Built with 💜 by Chamidu Gihan ✦**

[![GitHub](https://img.shields.io/badge/GitHub-chamidugihan-181717?style=flat-square&logo=github)](https://github.com/chamidugihan)
[![Live Demo](https://img.shields.io/badge/Live%20Demo-Product%20Hub-blueviolet?style=flat-square&logo=render)](https://product-hub-apb9.onrender.com/)

</div>
