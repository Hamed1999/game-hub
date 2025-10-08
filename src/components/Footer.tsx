// Footer.tsx
import {
  Box,
  Container,
  Flex,
  Heading,
  Link,
  Stack,
  Text,
  HStack,
  Icon,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useColorMode } from "./ui/color-mode";

const Footer = () => {
  const { colorMode } = useColorMode();
  const bg = colorMode === "light" ? "gray.100" : "gray.900";
  const text = colorMode === "light" ? "gray.700" : "gray.300";
  const headingColor = colorMode === "light" ? "gray.900" : "white";
  const borderColor = colorMode === "light" ? "gray.200" : "gray.700";

  return (
    <Box as="footer" bg={bg} color={text} py={8}>
      <Container maxW="container.lg">
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align="flex-start"
          mb={6}
        >
          {/* Branding / About */}
          <Box mb={{ base: 6, md: 0 }}>
            <Heading as="h3" size="md" mb={2} color={headingColor}>
              Game Land
            </Heading>
            <Text fontSize="sm" maxW="sm" lineHeight="taller">
              Discover and track your favorite video games. Browse by genre,
              platform, and more.
            </Text>
          </Box>

          {/* Navigation Links */}
          <HStack direction={{ base: "column", sm: "row" }} spaceX={8}>
            <Stack spaceX={2}>
              <Heading as="h4" size="sm" color={headingColor}>
                Company
              </Heading>
              <Link href="/about">About Us</Link>
              <Link href="/careers">Careers</Link>
              <Link href="/contact">Contact</Link>
            </Stack>

            <Stack spaceX={2}>
              <Heading as="h4" size="sm" color={headingColor}>
                Support
              </Heading>
              <Link href="/help">Help Center</Link>
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/terms">Terms of Use</Link>
            </Stack>
          </HStack>
        </Flex>

        <Flex
          justify="space-between"
          align="center"
          borderTop="1px solid"
          borderColor={borderColor}
          pt={4}
        >
          <Text fontSize="sm">
            &copy; {new Date().getFullYear()} Game Land. All rights reserved.
            Developed by Hamed Salmanizadegan.
          </Text>

          <HStack spaceX={4}>
            <Link href="https://github.com/hamed1999" target="_blank">
              <Icon as={FaGithub} boxSize={5} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/hamed-salmanizadegan1999/"
              target="_blank"
            >
              <Icon as={FaLinkedin} boxSize={5} />
            </Link>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
