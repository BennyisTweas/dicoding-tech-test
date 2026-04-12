# Dicoding Jobs App

A web application to display Dicoding job vacancy listings using Laravel as the backend API and Next.js as the frontend.
Note: I apologize for not being able to meet all the website requirements as I'm experiencing some issues, including:
* Needing to update PHP, Laravel, & Laragon because my XAMPP software isn't stable enough
* First time using Next.js and Tailwind CSS
* Memory leak issues while running the front-end website and causing my PC to freeze, crash, & restart automatically

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

### 1. Navigate to your project folder

```bash
cd your-project-folder
```

### 2. Create Project Laravel 

```bash
composer create-project laravel/laravel backend
cd backend
composer require laravel/breeze --dev
php artisan breeze:install
```
Question will pop up: "Which Breeze stack would you like to install?"
Choose: "API only".
Other question choose default or just enter.

### 3. Configure database

Create a database in MySQL, then update `.env`:

```
DB_DATABASE=your_database_name
DB_USERNAME=root
DB_PASSWORD=
```

### 4. Start the server

```bash
php artisan serve
```

Backend will run at:

```
http://127.0.0.1:8000
```

---

## 💻 Frontend Setup (Next.js)

### 1. Navigate to your project folder

```bash
cd your-project-folder
```

### 2. Install Next.js

```bash
npx create-next-app@latest
```

After that, there will be question about your project name, etc. Other than your front-end project name, you can use default answer.

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

To see API response in browser:

Table name: vacancies
```
http://http://127.0.0.1:8000/api/vacancies
```

---

## 📌 Features

* Display job vacancy listings
* Show job details preview (company, location, experience, etc.)
* Indonesian date formatting
* Active navbar state
* Conditional salary display

---

## 📝 Notes

* Make sure the backend server is running before opening the frontend
* If you use this source code:
* Use Node.js >= 16.2.3
* Use React >= 19.2.4
* Use PHP >= 8.3
* Use Laravel >= 13.*

---
