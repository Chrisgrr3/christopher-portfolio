"use client";
import { Box } from "@chakra-ui/react";

export default function RootComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box bg="custom.softwhite" w="100%" h="100%">
      {children}
    </Box>
  );
}
