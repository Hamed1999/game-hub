import { Menu, Button, VStack, HStack, Portal } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { useColorMode } from "./ui/color-mode";
import usePlatforms from "../hooks/usePlatforms";

const PlatformSelector = () => {
  const { data, error } = usePlatforms();
  const { colorMode } = useColorMode();
  const bgColorMap: { [key: string]: string } = {
    light: "gray.200",
    dark: "gray.500",
  };
  const colorMap: { [key: string]: string } = {
    light: "black",
    dark: "white",
  };
  if (error) return null;
  return (
    <Menu.Root>
      <Menu.Trigger
        as={Button}
        bgColor={bgColorMap[colorMode]}
        color={colorMap[colorMode]}
      >
        <VStack>
          <HStack>
            Platforms
            <BsChevronDown />
          </HStack>
          <Portal>
            <Menu.Positioner>
              <Menu.Content borderRadius={6}>
                {data.map((platform) => (
                  <Menu.Item key={platform.id} value={platform.name}>
                    {platform.name}
                  </Menu.Item>
                ))}
              </Menu.Content>
            </Menu.Positioner>
          </Portal>
        </VStack>
      </Menu.Trigger>
    </Menu.Root>
  );
};

export default PlatformSelector;
