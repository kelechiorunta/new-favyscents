

// // server.js (Node.js + Express Example)

// import "ignore-styles";

// import { createRequire } from "module";
// const require = createRequire(import.meta.url); // Enable CommonJS require in ES6 module

// require("@babel/register")({
//   ignore: [/(node_modules)/], // Ignore transpiling node_modules
//   extensions: [".js", ".jsx"], // Apply Babel to these file extensions
//   presets: ["@babel/preset-env", "@babel/preset-react"], // Use modern JS and React JSX transpilation
// });


import express from "express";
import React from "react";
import { renderToPipeableStream } from "react-dom/server";
import { StaticRouter } from "react-router"; // Correct import for SSR routing
import App from "../src/App.js";
import HydratedMarkup from "../src/components/hydratedmarkup/HydratedMarkup.jsx";
import ProductsContext from "../src/components/useProducts/ProductsContext.jsx"; // Import context
import { QueryClient, QueryClientProvider, dehydrate } from "@tanstack/react-query"; // React Query for SSR
import ErrorBoundary from "../src/components/errorboundary/ErrorBoundary.jsx"; // Ensure you have an error boundary
import path from "path";

const app = express();

// Serve static files from the build folder
app.use(express.static(path.resolve("../build")));

async function fetchDataFunction() {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ message: "Preloaded data from server!" }), 1000)
  );
}

app.get("/*", async (req, res) => {
  const queryClient = new QueryClient(); // Create QueryClient for SSR

  // Preload any server-side data if needed
  await queryClient.prefetchQuery(["someData"], fetchDataFunction); 

  const dehydratedState = dehydrate(queryClient); // Dehydrate state for hydration

  const { pipe, abort } = renderToPipeableStream(
    <StaticRouter location={req.url}>
      <ErrorBoundary>
        <ProductsContext>
          <QueryClientProvider client={queryClient}>
            <App />
          </QueryClientProvider>
        </ProductsContext>
      </ErrorBoundary>
    </StaticRouter>,
    {
      onShellReady() {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        res.write(`<!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>My SSR React App</title>
            <script>window.__REACT_QUERY_STATE__ = ${JSON.stringify(dehydratedState)}</script>
          </head>
          <body>
            <div id="root">`);
        pipe(res);
        res.write(`</div>
            <script src="/main.js"></script> 
          </body>
          </html>`);
      },
      onShellError() {
        res.statusCode = 500;
        res.send("<!doctype html><p>Server Error</p>");
      },
    }
  );
});

app.listen(3200, () => console.log("Server running on http://localhost:3200"));


// const express = require("express");
// const { renderToString } = require("react-dom/server");
// const { StaticRouter } = require("react-router-dom/server");
// const React = require("react");
// const App = require("../src/App").default; // Ensure App is exported with "export default App"

// const app = express();
// app.use(express.static("public"));

// app.get("*", (req, res) => {
//   const appHtml = renderToString(
//     React.createElement(StaticRouter, { location: req.url }, React.createElement(App))
//   );

//   const html = `
//     <!DOCTYPE html>
//     <html lang="en">
//     <head>
//       <meta charset="UTF-8">
//       <meta name="viewport" content="width=device-width, initial-scale=1.0">
//       <title>Server Rendered App</title>
//     </head>
//     <body>
//       <div id="root">${appHtml}</div>
//       <script src="/bundle.js"></script>
//     </body>
//     </html>
//   `;

//   res.send(html);
// });

// const PORT = process.env.PORT || 7700;
// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });

