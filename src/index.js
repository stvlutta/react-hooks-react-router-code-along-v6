import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes.js"; // Import routes from routes.js

const router = createBrowserRouter(routes); // Pass imported routes

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);