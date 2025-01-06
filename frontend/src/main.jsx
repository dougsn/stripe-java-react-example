import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, ColorModeScript, CSSReset } from "@chakra-ui/react";
import { theme } from "./styles/theme.ts";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { SpeedInsights } from "@vercel/speed-insights/react";

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <HelmetProvider>
      <ChakraProvider theme={theme}>
        <CSSReset />
        <ColorModeScript
          options={{
            useSystemColorMode: true,
            initialColorMode: "light",
          }}
        />
        <Helmet titleTemplate="Stripe Example" />
        <SpeedInsights />
        <App />
      </ChakraProvider>
    </HelmetProvider>
  </React.StrictMode>
);
