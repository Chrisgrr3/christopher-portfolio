// This is equivalent to pages/_app.js
"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";

import theme from "./theme";
import { extendTheme } from "@chakra-ui/react";

export const myTheme = extendTheme(theme);

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={myTheme}>{children}</ChakraProvider>
    </CacheProvider>
  );
}
