// This is equivalent to pages/_app.js
"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "./theme";

import "../_css/fonts.css";

export function Chakra({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        <ColorModeScript type="cookie" />
        {children}
      </ChakraProvider>
    </CacheProvider>
  );
}
