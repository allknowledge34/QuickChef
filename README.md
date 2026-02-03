# 🍳 QuickChef – Full Stack Chef Booking Platform

A hackathon-ready full-stack platform that allows users to book professional chefs & nutritionists for in-home cooking, live interaction, and real-time tracking.

Built with modern production technologies for web & mobile.

---
![Demo App](/frontend/src/assets/maxresdefault-3.jpg)

---

## 🚀 Key Features

✅ Book chefs & nutritionists instantly  
📍 Live GPS tracking (real-time location updates)  
💬 In-app chat & live interaction  
💳 Secure online payments (Razorpay integration)  
⭐ Verified professionals with ratings  
📅 Smart scheduling & rescheduling  
🧠 Nutrition insights & recommendations  
📊 Admin dashboard for full system control  

---

## 🏗 Tech Stack

### 🌐 Web Platform
- React.js
- Tailwind CSS
- Node.js
- Express.js
- MongoDB

### 📱 Android App
- Kotlin (MVVM Architecture)
- Firebase Authentication
- Firebase Realtime Database
- Firebase Storage

### 🧠 Integrations
- Google Maps (Live tracking)
- Razorpay API (Payments)
- Chat & notification services

---

## 📐 System Architecture

- Mobile App ↔ Backend API ↔ Database
- Admin Panel for verification & monitoring
- Live GPS flow for booked professionals

---

## 🎯 Hackathon Background

This project was developed and presented at **HACKAMANIA 2025** under the Open Innovation theme by Team *The Food Coders*.

Focus:
> Real-time chef booking with tracking, communication, and payments in a single platform.

---

## 📁 .env Setup

### ⚙️ Backend (`/backend`)

```bash
CURRENCY = "INR"
JWT_SECRET="YOUR_JWT_SECRET"

# Admin Panel Credentials
ADMIN_EMAIL = "YOUR_ADMIN_EMAIL"
ADMIN_PASSWORD = "YOUR_ADMIN_PASSWORD"

# MongoDB Setup ( required )
MONGODB_URI = "YOUR_MONGO_DB_URI"

# Cloudinary Setup ( required )
CLOUDINARY_NAME = "YOUR_CLOUDINARY_NAME"
CLOUDINARY_API_KEY = "YOUR_CLOUDINARY_API_KEY"
CLOUDINARY_SECRET_KEY = "YOUR_CLOUDINARY_SECRET_KEY"

# Razorpay Payment Integration
RAZORPAY_KEY_ID = "YOUR_RAZORPAY_KEY_ID"
RAZORPAY_KEY_SECRET = "YOUR_RAZORPAY_KEY_SECRET"
```

## ⚙️ Run the backend

```bash
cd backend
npm install
npm start

```

## 📱 Run the frontend

```bash
cd frontend
npm install
npm run dev
```
## 📱 Run the admin

```bash
cd frontend
npm install
npm run dev
```

📲 Android Setup
```bash
Open in Android Studio → Sync Gradle → Run on Emulator/Device
```

🌟 Use Cases
✔ Hackathons
✔ College major projects
✔ Startup MVP
✔ Resume portfolio
📜 License
Open-source for educational use.

---
