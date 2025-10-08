import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import App from "./App";
import customSystem from "./theme";
import { Provider } from "./components/ui/provider";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    {/* <ChakraProvider value={customSystem || defaultSystem}> */}
    <Provider >
      <App />
    </Provider>
    {/* </ChakraProvider> */}
  </React.StrictMode>
);
