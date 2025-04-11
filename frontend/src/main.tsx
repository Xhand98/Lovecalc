// main.tsx or main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import {HeroUIProvider} from "@heroui/react";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <HeroUIProvider>
      <main className="text-foreground bg-background ">
        <App />
      </main>
    </HeroUIProvider>
   </React.StrictMode>,
);