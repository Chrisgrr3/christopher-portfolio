"use client";
import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Spacer,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";
import Link from "next/link";

export function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex
      as="nav"
      p="10px"
      alignItems="center"
      bg={useColorModeValue("#ffffff0", "#20202380")}
      backdropFilter="auto"
      backdropBlur="8px"
      position="fixed"
      w="100%"
    >
      <Heading as="h1">
        <Link href="/">Portfolio</Link>
      </Heading>
      <Spacer />

      <HStack spacing="20px">
        <Link href="/">
          <Button p="10px" colorScheme="red" boxShadow="dark-lg" rounded="md">
            About
          </Button>
        </Link>
        <Link href="/projects">
          <Button p="10px" colorScheme="red" boxShadow="dark-lg" rounded="md">
            Projects
          </Button>
        </Link>
        <a href="https://github.com/Chrisgrr3/christopher-portfolio">
          <Button p="10px" colorScheme="red" boxShadow="dark-lg" rounded="md">
            Source
          </Button>
        </a>
        <Button
          onClick={toggleColorMode}
          p="10px"
          colorScheme="red"
          boxShadow="dark-lg"
          rounded="md"
        >
          Toggle Color Mode
        </Button>
      </HStack>
    </Flex>

    // <Flex bg="gray.200" justify="space-around">
    //   <Box w="150px" h="50px" bg="red"></Box>
    //   <Box w="150px" h="50px" bg="green"></Box>
    //   <Box w="150px" h="50px" bg="orange"></Box>
    //   <Box w="150px" h="50px" bg="blue"></Box>
    // </Flex>
  );
}
