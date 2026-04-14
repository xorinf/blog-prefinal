# Employee Management Dashboard (MERN)

A modern, full-stack Employee Management system built with the **MERN** (MongoDB, Express, React, Node.js) stack. This repository is configured dynamically to be easily deployed on Vercel as two separate microservices: a static frontend and a serverless backend.

## 🚀 Features
- **Dynamic Frontend**: Built with Vite and React, leveraging Tailwind CSS for a sleek, responsive design.
- **Robust API Backend**: Node.js & Express API with MongoDB integration for persistent CRUD operations.
- **Vercel Serverless Ready**: Configured explicitly to deploy the Express backend as a Vercel Serverless Function without complex configurations.
- **Full CRUD Support**: Effortlessly Create, Read, Update, and Delete employee records.

## 📁 Directory Structure
```
.
├── backend                 # Node.js + Express API
│   ├── emp-api             # API Routes
│   ├── models              # Mongoose Schemas (EmployeeModel)
│   ├── vercel.json         # Vercel Configuration for API
│   └── server.js           # Server Entry & DB Connections
└── frontend                # React + Vite UI
    ├── src                 # Components, Contexts, Hooks
    ├── index.html
    └── package.json
```

## 🛠 Prerequisites
You need **Node.js** and **npm** installed on your machine. You will also need a **MongoDB cluster URL** string (e.g. MongoDB Atlas) or a local MongoDB database to run the server.

## 💻 Running Locally

### Backend Setup
1. Navigate to the backend directory: `cd backend`
2. Install dependencies: `npm install`
3. Create a `.env` file with your variables (or use the one provided for local tests).
   ```env
   DB_URL=mongodb://localhost:27017/mern_test
   PORT=6767
   FRONTEND_URL=http://localhost:5173
   ```
4. Start the backend: `npm start` (or `node server.js`)

### Frontend Setup
1. Navigate to the frontend directory: `cd frontend`
2. Install dependencies: `npm install`
3. Check the `.env` configuration (sets connection strictly to backend port):
   ```env
   VITE_API_URL=http://localhost:6767
   ```
4. Start the Vite server: `npm run dev`

## 🌍 Vercel Deployment Instructions

Deploying this app is a breeze. See the instructions on how to use Vercel's multi-project mapping from one repository.

### Backend/API
- Go to Vercel and create a **New Project**.
- Select this repository.
- Framework Preset: **Other**. Root Directory: **`backend`**.
- Configure Environment Variables (`DB_URL`, `FRONTEND_URL`).
- **Deploy**. Copy the API’s domain once finished.

### Frontend
- Go to Vercel and create another **New Project**.
- Select this repository again.
- Framework Preset: **Vite**. Root Directory: **`frontend`**.
- Configure Environment Variables (`VITE_API_URL` = _Your API Domain_ from above).
- **Deploy**. Your GUI is now live!