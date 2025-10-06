import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";

const NavBar = () => {
  return (
    <div>
      <HStack>
        <Image src={logo} alt="Game Hub Logo" boxSize="60px" />
        <Text>Nav Bar</Text>
      </HStack>
    </div>
  );
};

export default NavBar;
