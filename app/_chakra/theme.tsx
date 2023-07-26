import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const customTheme: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({ customTheme });

export default theme;
