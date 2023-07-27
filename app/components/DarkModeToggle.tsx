"use client";
import { Box, Button, useColorMode, useColorModeValue } from "@chakra-ui/react";

// 40 tall, 120 wide
export default function DarkModeToggle() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button
      onClick={toggleColorMode}
      bg={useColorModeValue("#800080", "#ffd700")}
      w="7em"
      h="2.65em"
      display="flex"
      justifyContent="center"
      alignItems="center"
      borderRadius="30px"
      justifySelf="flex-end"
      mr="1em"
    ></Button>
  );
}
