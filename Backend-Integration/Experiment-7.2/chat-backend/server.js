const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
app.use(cors());

// Create HTTP server
const server = http.createServer(app);

// Initialize socket.io on that server
const io = new Server(server, {
  cors: {
    origin: "*", // allow frontend from any origin (for local dev)
    methods: ["GET", "POST"],
  },
});

// Socket connection logic
io.on("connection", (socket) => {
  console.log("🟢 User connected:", socket.id);

  // When a client sends a message
  socket.on("send_message", (data) => {
    console.log("📩 Message received:", data);
    // Broadcast to all connected clients
    io.emit("receive_message", data);
  });

  // When a client disconnects
  socket.on("disconnect", () => {
    console.log("🔴 User disconnected:", socket.id);
  });
});

// Start the server
const PORT = 5000;
server.listen(PORT, () => console.log(`🚀 Chat Server running on port ${PORT}`));
