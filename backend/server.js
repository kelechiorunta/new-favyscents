
// server.js (Node.js + Express Example)
import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
// import App from "../src/App.js";

const app = express();

app.get("/", (req, res) => {
  const appHtml = `<div className="App">Thank you Kelechi</div>`//renderToString(<App />);

  const fullHtml = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>My SSR React App</title>
    </head>
    <body>
      <div id="root">${appHtml}</div>
      <script src="/client.bundle.js"></script>
    </body>
    </html>
  `;

  res.send(fullHtml);
});

app.listen(7700, () => console.log("Server running on http://localhost:7700"));
