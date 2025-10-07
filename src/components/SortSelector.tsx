import { Menu, Button, VStack, HStack, Portal } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { useColorMode } from "./ui/color-mode";
import usePlatforms, { Platform } from "../hooks/usePlatforms";

const SortSelector = () => {
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
            {"Order by: Relevance"}
            <BsChevronDown />
          </HStack>
          <Portal>
            <Menu.Positioner>
              <Menu.Content borderRadius={6}>
                <Menu.Item key={1} value="Relevance">
                  Relevance
                </Menu.Item>
                <Menu.Item key={2} value="Date Adedd">
                  Date Adedd
                </Menu.Item>
                <Menu.Item key={3} value="Name">
                  Name
                </Menu.Item>
                <Menu.Item key={4} value="Release Date">
                  Release Date
                </Menu.Item>
                <Menu.Item key={5} value="Popularity">
                  Popularity
                </Menu.Item>
                <Menu.Item key={6} value="Average rating">
                  Average rating
                </Menu.Item>
              </Menu.Content>
            </Menu.Positioner>
          </Portal>
        </VStack>
      </Menu.Trigger>
    </Menu.Root>
  );
};

export default SortSelector;
