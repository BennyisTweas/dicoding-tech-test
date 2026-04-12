# Dicoding Jobs App

A web application to display Dicoding job vacancy listings using Laravel as the backend API and Next.js as the frontend.

---

## Tech Stack

* Backend: Laravel
* Frontend: Next.js
* Database: MySQL
* Styling: Tailwind CSS

---

## 📦 Project Structure

* `/backend` → Laravel API
* `/frontend` → Next.js Application

---

## ⚙️ Backend Setup (Laravel)

### 1. Navigate to backend folder

```bash
cd backend
```

### 2. Install dependencies

```bash
composer install
```

### 3. Copy environment file

```bash
cp .env.example .env
```

### 4. Generate application key

```bash
php artisan key:generate
```

### 5. Configure database

Create a database in MySQL, then update `.env`:

```
DB_DATABASE=your_database_name
DB_USERNAME=root
DB_PASSWORD=
```

### 6. Run migrations

```bash
php artisan migrate
```

### 7. Start the server

```bash
php artisan serve
```

Backend will run at:

```
http://127.0.0.1:8000
```

---

## 💻 Frontend Setup (Next.js)

### 1. Navigate to frontend folder

```bash
cd frontend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Setup environment variables

Create `.env.local` file:

```
APP_URL=http://127.0.0.1:8000/api
```

### 4. Run the development server

```bash
npm run dev
```

Frontend will run at:

```
http://localhost:3000
```

---

## 🔄 How to Run the Project

1. Start the Laravel backend:

```bash
cd backend
php artisan serve
```

2. Start the Next.js frontend:

```bash
cd frontend
npm run dev
```

3. Open in browser:

```
http://localhost:3000
```

---

## 📌 Features

* Display job vacancy listings
* Show job details (company, location, experience, etc.)
* Indonesian date formatting
* Active navbar state
* Conditional salary display

---

## 📝 Notes

* Make sure the backend server is running before opening the frontend
* Use Node.js (latest version recommended)
* Use PHP >= 8.x

---
