import React from "react";
import ReactDOM from "react-dom/client";
import { router } from "./routes";
import App from "./App";
import "./index.css";
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(<RouterProvider router={router} />);
