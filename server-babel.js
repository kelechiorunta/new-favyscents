// server-babel.js
require("ignore-styles"); // Ignore CSS imports in Node.js
require("@babel/register")({
  ignore: [/(node_modules)/],
  extensions: [".js", ".cjs", ".jsx"],
  presets: ["@babel/preset-env", "@babel/preset-react"], // Enable JSX support
});

require("./backend/server"); // Run the actual server file


// // server.js (Node.js + Express Example)

// import "ignore-styles";

// import { createRequire } from "module";
// const require = createRequire(import.meta.url); // Enable CommonJS require in ES6 module

// require("@babel/register")({
//   ignore: [/(node_modules)/], // Ignore transpiling node_modules
//   extensions: [".js", ".jsx"], // Apply Babel to these file extensions
//   presets: ["@babel/preset-env", "@babel/preset-react"], // Use modern JS and React JSX transpilation
// });

// import "./backend/server.js";