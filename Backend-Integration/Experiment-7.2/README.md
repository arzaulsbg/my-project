# 💬 Real-Time Chat Application -Experiment-7.2

A simple real-time chat application built using **React**, **Node.js**, **Express**, and **Socket.io**.  
This project demonstrates how to implement bi-directional communication between client and server using WebSockets.

---

## 🚀 Features

- Real-time messaging between multiple users
- Lightweight Express + Socket.io backend
- React frontend with functional components and hooks
- Simple and responsive UI
- CORS enabled for local and remote access

---

## 🏗️ Project Structure

```
Experiment-7.2
├─ chat-backend
│  ├─ package-lock.json
│  ├─ package.json
│  └─ server.js
├─ chat-frontend
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ public
│  │  ├─ favicon.ico
│  │  ├─ index.html
│  │  ├─ logo192.png
│  │  ├─ logo512.png
│  │  ├─ manifest.json
│  │  └─ robots.txt
│  ├─ README.md
│  └─ src
│     ├─ App.css
│     ├─ App.js
│     ├─ App.test.js
│     ├─ index.css
│     ├─ index.js
│     ├─ logo.svg
│     ├─ reportWebVitals.js
│     └─ setupTests.js
├─ outputs
│  ├─ Screenshot 2025-10-16 211813.png
│  └─ Screenshot 2025-10-16 211857.png
└─ README.md

```

---

## ⚙️ Installation Steps

### 🔧 Backend Setup

```bash
# Navigate to backend folder
cd backend

# Initialize Node.js project
npm init -y

# Install dependencies
npm install express socket.io cors

# (Optional) Install nodemon globally
npm install -g nodemon

# Run the backend
nodemon server.js
```
> Server runs on **http://localhost:5000**

### 💻 Frontend Setup

```bash
# Navigate to frontend folder
cd frontend

# Create React app (if not already created)
npx create-react-app frontend

# Install socket.io client
npm install socket.io-client

# Start frontend
npm start
```
> React app runs on **http://localhost:3000**

---

## 🧩 How It Works

1. User enters name and message in the React UI.  
2. On submit, message is sent via Socket.io (`send_message` event).  
3. Backend receives and emits it to all clients (`receive_message` event).  
4. Every connected user sees the new message instantly.

---

## 📚 Learning Outcomes

Through this project, you will learn:

- ✅ How to set up **Socket.io** with **Express**
- ✅ How to use **socket.io-client** in React
- ✅ How to handle real-time data using **events**
- ✅ How to manage state in React using `useState` and `useEffect`
- ✅ How to prevent port conflicts and debug common Node.js issues
- ✅ How to design a basic real-time app architecture

---

## 🧠 Future Enhancements

- Add typing indicators (`Arzaul is typing...`)
- Add user join/leave notifications
- Save chat history in MongoDB
- Display timestamps and online users
- Improve UI with Tailwind or Material UI

---

## 🪪 Author

**John**  
🎓 B.Tech AI & Data Science  
🧠 Passionate about real-time web development

---

## 🏁 License

This project is open-source and available for educational purposes.

```