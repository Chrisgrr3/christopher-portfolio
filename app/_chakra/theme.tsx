// Specify custom them for site
import { theme as base } from "@chakra-ui/react";

const siteTheme = {
  colors: {
    custom: {
      transparent: "transparent",
      softwhite: "#f9f1f1",
      yellow: "#eeba30",
      orange: "#fa7e1e",
    },
  },
  fonts: {
    heading: `Noto Sans, ${base.fonts?.heading}`,
    body: `Montserrat, ${base.fonts?.body}`,
  },
};

export default siteTheme;
