import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <div>
      <HStack paddingY="10px">
        <Image src={logo} alt="Game Hub Logo" boxSize="60px" />
        <SearchInput  />
        <ColorModeSwitch />
      </HStack>
    </div>
  );
};

export default NavBar;
