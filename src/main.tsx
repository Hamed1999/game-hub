import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import App from "./App";
import "./index.css";
import { customSystem } from "./theme/theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider value={customSystem || defaultSystem}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
