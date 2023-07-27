"use client";
import {
  Button,
  Flex,
  HStack,
  Heading,
  Spacer,
  Box,
  useColorMode,
} from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";
import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle";

export function Navbar() {
  return (
    <Box w="100%" h="64.79px" bg={useColorModeValue("#e0a899", "202023")}>
      <Flex
        as="nav"
        w="100%"
        position="fixed"
        alignItems="center"
        bg={useColorModeValue("#ffffff30", "#00000030")}
      >
        <Heading display="inline-block" pb=".3em" pt=".3em" pl="1em">
          Portfolio
        </Heading>
        <Spacer />
        <Link href="/">
          <Button bg={useColorModeValue("#ffffff30", "#00000030")}>
            About
          </Button>
        </Link>
        <Link href="/projects">
          <Button bg={useColorModeValue("#ffffff30", "#00000030")}>
            Projects
          </Button>
        </Link>
        <a href="https://github.com/Chrisgrr3/christopher-portfolio">
          <Button bg={useColorModeValue("#ffffff30", "#00000030")}>
            Source
          </Button>
        </a>
        <Spacer />
        <DarkModeToggle />
      </Flex>
    </Box>
  );
}
