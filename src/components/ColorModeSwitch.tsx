import { HStack, Text } from "@chakra-ui/react";
import { ColorModeButton, DarkMode, useColorMode } from "./ui/color-mode";

const ColorModeSwitch = () => {
  const { colorMode } = useColorMode();
  return (
    <HStack spaceX={0} >
      <ColorModeButton />
      <Text fontSize={14} >{colorMode === "dark" ? "Dark Mode" : "Light Mode"}</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
