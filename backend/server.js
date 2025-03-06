
// import express from "express";
// import React from "react";
// import { renderToPipeableStream } from "react-dom/server";
// import { StaticRouter } from "react-router"; // Correct import for SSR routing
// import App from "../src/App.js";
// import HydratedMarkup from "../src/components/hydratedmarkup/HydratedMarkup.jsx";
// import ProductsContext from "../src/components/useProducts/ProductsContext.jsx"; // Import context
// import { QueryClient, QueryClientProvider, dehydrate } from "@tanstack/react-query"; // React Query for SSR
// import ErrorBoundary from "../src/components/errorboundary/ErrorBoundary.jsx"; // Ensure you have an error boundary
// import path from "path";
// import { openProductDatabase } from "../src/apis/indexedDB.js";
// import Product from "../src/components/products/Product.jsx";
// import DividerII from "../src/components/dividerII/DividerII.jsx";

// const app = express();

// // Serve static files from the build folder
// app.use(express.static(path.resolve("../build")));

// async function fetchDataFunction() {
//   return new Promise((resolve) =>
//     setTimeout(() => resolve({ message: "Preloaded data from server!" }), 1000)
//   );
// }

// app.get("/*", async (req, res) => {
//   const queryClient = new QueryClient(); // Create QueryClient for SSR

//   // Preload any server-side data if needed
//   // await queryClient.prefetchQuery(['products'], fetchDataFunction); 

//   const dehydratedState = dehydrate(queryClient); // Dehydrate state for hydration

//   const { pipe, abort } = renderToPipeableStream(
//     <StaticRouter location={req.url}>
//       <ErrorBoundary>
//         <ProductsContext>
//           <QueryClientProvider client={queryClient}>
//             {/* <App /> */}
//             <DividerII />
//           </QueryClientProvider>
//         </ProductsContext>
//       </ErrorBoundary>
//     </StaticRouter>,
//     {
//       onShellReady() {
//         res.statusCode = 200;
//         res.setHeader("Content-Type", "text/html");
//         res.write(`<!DOCTYPE html>
//           <html lang="en">
//           <head>
//             <meta charset="UTF-8">
//             <meta name="viewport" content="width=device-width, initial-scale=1.0">
//             <title>My SSR React App</title>
//             <script>window.__REACT_QUERY_STATE__ = ${JSON.stringify(dehydratedState)}</script>
//           </head>
//           <body>
//             <div id="root">`);
//         pipe(res);
//         res.write(`</div>
//             <script src="/index.js"></script> 
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

// app.listen(3200, () => console.log("Server running on http://localhost:3200"));

// LAST SSR IMPLEMENTATION


// import express from "express";
// import React from "react";
// import { renderToPipeableStream } from "react-dom/server";
// import { StaticRouter } from "react-router";
// import App from "../src/App.js";
// import ProductsContext from "../src/components/useProducts/ProductsContext.jsx";
// import { QueryClient, QueryClientProvider, dehydrate } from "@tanstack/react-query";
// import ErrorBoundary from "../src/components/errorboundary/ErrorBoundary.jsx";
// import path from "path";
// import fs from "fs"; // To serve static index.html
// import { openProductDatabase } from "../src/apis/indexedDB.js";

// const app = express();

// // Serve static assets from the build folder
// const buildPath = path.resolve(__dirname, "../build");
// // app.use(express.static(buildPath));

// // // Serve the static `index.html` for client-side rendering (fallback)
// // app.get("/", (req, res) => {
// //   const indexFile = path.join(buildPath, "index.html");
// //   fs.readFile(indexFile, "utf8", (err, data) => {
// //     if (err) {
// //       res.status(500).send("Error loading client-side application.");
// //       return;
// //     }
// //     res.send(data); // Send the client-rendered HTML
// //   });
// // });

// // ✅ Server-Side Rendering Route
// app.get("/*", async (req, res) => {
//   const queryClient = new QueryClient();

//   // Preload data for SSR (optional)
//   await queryClient.prefetchQuery(["products"], openProductDatabase);

//   const dehydratedState = dehydrate(queryClient);

//   const { pipe } = renderToPipeableStream(
//     <StaticRouter location={req.url}>
//       {/* Shell Enviroment */}
//       <h1>Well done Kelechi</h1>
//       {/* Non-shell environment/data fetching environment that asynchronously loads data. Can implement Suspense here. */}
//       <ErrorBoundary>
//         <ProductsContext>
//           <QueryClientProvider client={queryClient}>
//             <App />
//           </QueryClientProvider>
//         </ProductsContext>
//       </ErrorBoundary>
//     </StaticRouter>,
//     {
//       // bootstrapScripts: ["/static/js/main.ae4cacda.js"],
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
//           </head>
//           <body>
//             <div id="root">`);
//             pipe(res);
//           res.write(`</div>
//           </body>
//           </html>`);
//       },
//       onShellError() {
//         res.statusCode = 500;
//         res.send("<!doctype html><p>Server Error</p>");
//       },
//       onError(error) {
//         console.error(error);
//         // logServerCrashReport(error);
//       },
//       onAllReady(){
//         const indexFile = path.join(buildPath, "index.html");
//         fs.readFile(indexFile, "utf8", (err, data) => {
//           // if (err) {
//           //   res.status(500).send("Error loading client-side application.");
//           //   return;
//           // }
//           res.send(data); // Send the client-rendered HTML
//         });
//       }
//     }
//   );
// });

// app.use(express.static(buildPath));

// app.listen(3200, () => console.log("Server running on http://localhost:3200"));




import express from "express";
import React from "react";
import { renderToPipeableStream, renderToStaticMarkup } from "react-dom/server";
import { StaticRouter } from "react-router";
import App from "../src/App.js";
import ProductsContext from "../src/components/useProducts/ProductsContext.jsx";
import { QueryClient, QueryClientProvider, dehydrate } from "@tanstack/react-query";
import ErrorBoundary from "../src/components/errorboundary/ErrorBoundary.jsx";
import path from "path";
import fs from "fs"; // To serve static index.html
import { openProductDatabase } from "../src/apis/indexedDB.js";
import HydratedMarkup from "../src/components/hydratedmarkup/HydratedMarkup.jsx";

const app = express();
const buildPath = path.resolve(__dirname, "../build");

app.use(express.static(buildPath)); // Serve client assets

app.get("/*", async (req, res) => {
  const queryClient = new QueryClient();

  // Preload data for SSR (optional)
  await queryClient.prefetchQuery(["products"], openProductDatabase);

  const dehydratedState = dehydrate(queryClient);

  const { pipe } = renderToPipeableStream(
    <StaticRouter location={req.url}>
      {/* Shell - Initial UI for users with JavaScript disabled */}
      <h1>Welcome to Kelechi's SSR App</h1>
      
      {/* Main Application for Hydration */}
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
        res.write(`
          <!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>My SSR React App</title>
            <script>window.__REACT_QUERY_STATE__ = ${JSON.stringify(dehydratedState)}</script>
            <script>
              // When JS is enabled, load the client-side app
              document.addEventListener("DOMContentLoaded", function () {
                fetch("/build-index").then(response => response.text()).then(html => {
                  document.open();
                  document.write(html);
                  document.close();
                });
              });
            </script>
          </head>
          <body>
            <div id="root">`);
        pipe(res);
        res.write(`</div>
          </body>
          </html>`);
      },
      onShellError() {
        res.statusCode = 500;
        res.send("<!doctype html><p>Server Error</p>");
      },
      onAllReady(){
        const markup = renderToStaticMarkup(<HydratedMarkup/>);
        res.send(markup)
      }
    }
  );
});

// ✅ Serve the full client-side React build when JavaScript is enabled
app.get("/build-index", (req, res) => {
  const indexFile = path.join(buildPath, "index.html");
  fs.readFile(indexFile, "utf8", (err, data) => {
    if (err) {
      res.status(500).send("Error loading client-side application.");
      return;
    }
    res.send(data); // Serve the full React SPA
  });
});

app.listen(3200, () => console.log("Server running on http://localhost:3200"));


// import express from "express";
// import fs from "fs";
// import path from "path";
// import React from "react";
// import ProductsContext from "../src/components/useProducts/ProductsContext.jsx";
// import { QueryClient, QueryClientProvider, dehydrate } from "@tanstack/react-query";
// import ErrorBoundary from "../src/components/errorboundary/ErrorBoundary.jsx";
// import { renderToString } from "react-dom/server";
// import App from "../src/App.js"; // Your main React App component
// import { StaticRouter } from "react-router"; // For SSR routing

// const app = express();

// // ✅ Serve static assets (CSS, JS, images, but NOT index.html)
// // app.use(express.static(path.resolve("build"), { index: false }));

// app.get("*", async (req, res) => {
//   const queryClient = new QueryClient();

//   // ✅ OPTIONAL: Preload data for SSR
//   // await queryClient.prefetchQuery(["products"], openProductDatabase);
//   // const dehydratedState = dehydrate(queryClient);

//   // ✅ Convert the React App to a static HTML string
//   const appHtml = renderToString(
//     <StaticRouter location={req.url}>
//       <h1>Thanks</h1>
//       <ErrorBoundary>
//         <ProductsContext>
//           <QueryClientProvider client={queryClient}>
//             <App />
//           </QueryClientProvider>
//         </ProductsContext>
//       </ErrorBoundary>
//     </StaticRouter>
//   );

//   const indexFile = path.resolve("./build/index.html");
//   fs.readFile(indexFile, "utf8", (err, data) => {
//     if (err) {
//       return res.status(500).send("Error loading index file");
//     }
//     return res.send(
//       data.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)
//     );
//   });

// });

// // Start the server
// const PORT = process.env.PORT || 3200;
// app.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}`);
// });
