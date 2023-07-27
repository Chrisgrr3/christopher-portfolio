"use client";
import { Box, Text, useColorModeValue } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box bg={useColorModeValue("#e0a899", "202023")} textAlign="center">
      <h1>This is a bunch of text, kinda.</h1>
    </Box>
  );
}
