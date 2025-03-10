import express from "express";
import React from "react";
import { renderToPipeableStream, renderToStaticMarkup } from "react-dom/server";
import { StaticRouter } from "react-router";
import App from "../src/App.js";
import ProductsContext from "../src/components/useProducts/ProductsContext.jsx";
import { QueryClient, QueryClientProvider, dehydrate } from "@tanstack/react-query";
import ErrorBoundary from "../src/components/errorboundary/ErrorBoundary.jsx";
import path from "path";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import fs from "fs"; // To serve static index.html
import userRouter from "./userRoutes.js";
import { openProductDatabase } from "../src/apis/indexedDB.js";
import HydratedMarkup from "../src/components/hydratedmarkup/HydratedMarkup.jsx";
import cors from 'cors';
import Unsubscribe from "../src/components/unsubscribe/Unsubscribe.jsx";
import mongoose from "mongoose";

const server = express();

const uri = process.env.MONGO_URI

mongoose.connect(uri, {useNewUrlParser: true});
const db = mongoose.connection
db.on('error', (error) => {
  console.error(error)
})
db.once('open', () => {
  console.log("Connected successfully to database")
})

const allowedOrigins = ['http://localhost:3200', 'http://localhost:3000', '*']

const corsOptions = {
  origin: function(origin, callback) {
      if (allowedOrigins.indexOf(origin) !== -1 || (!origin)){
        return callback(null, true);
      } else {
        return callback("Domain not supported", false)
      }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}

const buildPath = path.resolve(__dirname, "../build");

server.use(express.static(buildPath)); // Serve client assets
server.use(cors(corsOptions));
server.use(express.json());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: false}));
server.use('/users', userRouter)

// server.get("/*", async (req, res) => {
//   const queryClient = new QueryClient();

//   // Preload data for SSR (optional)
//   await queryClient.prefetchQuery(["products"], openProductDatabase);

//   const dehydratedState = dehydrate(queryClient);

//   const { pipe } = renderToPipeableStream(
//     <StaticRouter location={req.url}>
//       {/* Shell - Initial UI for users with JavaScript disabled */}
//       <h1>Welcome to Kelechi's SSR App</h1>
//       <div>
//         <Unsubscribe />
//       </div>
      
//       {/* Main Application for Hydration */}
//       <ErrorBoundary>
//         <ProductsContext>
//           <QueryClientProvider client={queryClient}>
//             <App />
//           </QueryClientProvider>
//         </ProductsContext>
//       </ErrorBoundary>
//     </StaticRouter>,
//     {
//       onShellReady() {
//         res.statusCode = 200;
//         res.setHeader("Content-Type", "text/html");
//         res.write(`
//           <!DOCTYPE html>
//           <html lang="en">
//           <head>
//             <meta charset="UTF-8">
//             <meta name="viewport" content="width=device-width, initial-scale=1.0">
//             <title>My SSR React App</title>
//             <script>window.__REACT_QUERY_STATE__ = ${JSON.stringify(dehydratedState)}</script>
//             <script>
//               // When JS is enabled, load the client-side app
//               document.addEventListener("DOMContentLoaded", function () {
//                 fetch("/build-index").then(response => response.text()).then(html => {
//                   document.open();
//                   document.write(html);
//                   document.close();
//                 });
//               });
//             </script>
//           </head>
//           <body>
//             <div id="root">`);
//         pipe(res);
//         res.write(`</div>
//           </body>
//           </html>`);
//       },
//       onShellError() {
//         res.statusCode = 500;
//         res.send("<!doctype html><p>Server Error</p>");
//       },
      
//     }
//   );
// });

// ✅ Serve the full client-side React build when JavaScript is enabled
server.get("/*", (req, res) => {
  const indexFile = path.join(buildPath, "index.html");
  fs.readFile(indexFile, "utf8", (err, data) => {
    if (err) {
      res.status(500).send("Error loading client-side application.");
      return;
    }
    res.send(data); // Serve the full React SPA
  });
});

server.listen(3200, () => console.log("Server running on http://localhost:3200"));

