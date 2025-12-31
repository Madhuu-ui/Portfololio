

import { Box, Typography, Paper, TextField, Button } from "@mui/material";
import { useState, useEffect, useRef } from "react";
import askAI from "./askAI";

export default function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    setMessages((prev) => [...prev, { role: "user", text: input }]);
    setInput("");

    const prompt = `
      You are a portfolio assistant.
      Skills: React, Redux, REST APIs, 5+ years experience.
      Question: ${input}
    `;

    const reply = await askAI(prompt);

    setMessages((prev) => [...prev, { role: "ai", text: reply }]);
  };

  return (
    <Paper
      sx={{
        position: "fixed",
        bottom: 80,
        right: 90,
        width: 320,
        minHeight: 200,   // 👈 initial height
        maxHeight: 500,   // 👈 stops growing here
        display: "flex",
        flexDirection: "column",
        p: 2,
      }}
    >
      <Typography variant="h6" color="white" mb={1}>
        AI Assistance
      </Typography>

      {/* 🔽 Scrollable messages */}
      <Box
        sx={{
          flex: 1,
          overflowY: "auto",      // ✅ scrollbar
          display: "flex",
          flexDirection: "column",
          gap: 1,
          pr: 1,
        }}
      >
        {messages.map((m, i) => (
          <Box
            key={i}
            sx={{
              display: "flex",
              justifyContent: m.role === "ai" ? "flex-start" : "flex-end",
            }}
          >
            <Typography
              variant="body2"
              sx={{
                maxWidth: "85%",
                p: "8px 12px",
                borderRadius: 2,
                bgcolor: m.role === "ai" ? "#2a2a2a" : "#1976d2",
                color: "white",
                whiteSpace: "pre-wrap",
                wordBreak: "break-word",
              }}
            >
              {m.text}
            </Typography>
          </Box>
        ))}

        {/* 👇 auto-scroll target */}
        <div ref={bottomRef} />
      </Box>

      {/* 🔽 Input */}
      <TextField
        size="small"
        fullWidth
        placeholder="Ask about my skills..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        sx={{ mt: 1, bgcolor: "white", borderRadius: 1 }}
      />

      <Button
        variant="contained"
        sx={{ mt: 1 }}
        onClick={handleSend}
      >
        Send
      </Button>
    </Paper>
  );
}
