import React, { useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:5000"); // Backend URL

function App() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setChat((prev) => [...prev, data]);
    });

    return () => {
      socket.off("receive_message");
    };
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    if (name && message) {
      const msgData = { name, message };
      socket.emit("send_message", msgData);
      setMessage("");
    }
  };

  return (
    <div
      style={{
        border: "2px solid black",
        width: "400px",
        margin: "50px auto",
        textAlign: "center",
        padding: "20px",
        borderRadius: "10px",
        background: "#f7f7f7"
      }}
    >
      <h2>💬 Real-Time Chat App</h2>
      <input
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <form onSubmit={sendMessage}>
        <input
          placeholder="Type a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>

      <div
        style={{
          border: "1px solid #333",
          marginTop: "20px",
          textAlign: "left",
          padding: "10px",
          height: "200px",
          overflowY: "auto",
          background: "white",
        }}
      >
        {chat.map((msg, index) => (
          <p key={index}>
            <strong>{msg.name}:</strong> {msg.message}
          </p>
        ))}
      </div>
    </div>
  );
}

export default App;
