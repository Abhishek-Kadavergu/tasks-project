# 🚀 Scalable REST API with Authentication & Role-Based Access

This project is a full-stack application built as part of a **Backend Developer Intern** assignment. It demonstrates secure authentication, role-based access control (RBAC), CRUD operations, and frontend integration using modern web technologies.

---

## 🛠 Tech Stack

### Backend
* **Node.js & Express.js** - Server framework
* **MongoDB + Mongoose** - Database and ODM
* **JWT (JSON Web Token)** - Secure authentication
* **bcrypt** - Password hashing
* **CORS** - Cross-Origin Resource Sharing

### Frontend
* **React.js** - UI Library
* **Axios** - HTTP client for API calls
* **React Router DOM** - Navigation and protected routes

---

## ✨ Features

### 🔐 Authentication & Authorization
* User Registration & Login with password hashing.
* JWT-based authentication (stateless).
* **Role-Based Access Control (RBAC):** `USER` and `ADMIN` roles.

### 👤 User Roles & Permissions
* **USER:** Can create, view, update, and delete their **own** tasks.
* **ADMIN:** Can view, update, and delete **all** tasks across the system.

### 📦 Task Management (CRUD)
* Create tasks with title and description.
* View tasks (filtered by ownership for users).
* Update and Delete tasks with ownership/admin verification.

### 🛡 Security
* JWT token verification middleware.
* Ownership-based data isolation (preventing users from accessing other users' data).
* Protected frontend routes and Axios interceptors for automatic token handling.

---

## 📂 Project Structure

### Backend
```text
backend/
 ├── src/
 │   ├── config/       # Database configuration
 │   ├── controllers/  # Request logic
 │   ├── models/       # Mongoose schemas
 │   ├── routes/       # API endpoints
 │   ├── middlewares/  # Auth & Role validation
 │   ├── app.js        # App configuration
 │   └── server.js     # Entry point
 ├── .env              # Environment variables
 └── package.json
```

## ⚙️ Setup Instructions
### 1️⃣ Clone the Repository
```code
git clone https://github.com/Abhishek-Kadavergu/tasks-project
cd backend
```

## 2️⃣ Backend Setup
### Install dependencies:
```code
Bash

npm install
```
## Create a .env file in the backend root:

### Code snippet
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```
### Start the server:
```
npm start
```
### Backend runs on: http://localhost:5000

## 3️⃣ Frontend Setup
### Navigate to the frontend directory:
```
Bash

cd ../frontend
npm install
```

### Start the React app:
```
Bash

npm start
```
## Frontend runs on: http://localhost:5173

## 🔑 API Endpoints

### Auth

| Method | Endpoint                | Description               |
|------|-------------------------|---------------------------|
| POST | `/api/v1/auth/register` | Register a new user       |
| POST | `/api/v1/auth/login`    | Login and receive JWT     |

---

### Tasks

| Method | Endpoint                   | Access Level        |
|------|----------------------------|---------------------|
| GET  | `/api/v1/tasks`            | User (Own tasks)    |
| POST | `/api/v1/tasks`            | User                |
| PUT  | `/api/v1/tasks/:id`        | Owner / Admin       |
| DELETE | `/api/v1/tasks/:id`      | Owner / Admin       |
| GET  | `/api/v1/tasks/admin/all`  | Admin Only          |
