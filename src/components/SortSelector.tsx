import { Menu, Button, VStack, HStack, Portal } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { useColorMode } from "./ui/color-mode";

interface Props {
  sortOrder: string;
  onSelectOrder: (sortOrder: string) => void;
}

const SortSelector = ({ sortOrder, onSelectOrder }: Props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date Added" },
    { value: "name", label: "Name" },
    { value: "-release", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
  ];
  const currentOrder = sortOrders.find(
    (order) => order.value === sortOrder
  )?.label;
  const { colorMode } = useColorMode();
  const bgColorMap: { [key: string]: string } = {
    light: "gray.200",
    dark: "gray.500",
  };
  const colorMap: { [key: string]: string } = {
    light: "black",
    dark: "white",
  };
  return (
    <Menu.Root>
      <Menu.Trigger
        as={Button}
        bgColor={bgColorMap[colorMode]}
        color={colorMap[colorMode]}
      >
        <VStack>
          <HStack>
            Order by: {currentOrder || "Relevance"}
            <BsChevronDown />
          </HStack>
          <Portal>
            <Menu.Positioner>
              <Menu.Content borderRadius={6}>
                {sortOrders.map((order) => (
                  <Menu.Item
                    key={order.value}
                    value={order.value}
                    onClick={() => onSelectOrder(order.value)}
                    fontWeight={order.value === sortOrder ? "bold" : "normal"}
                    color={
                      order.value === sortOrder ? "rgba(92, 58, 151, 1)" : ""
                    }
                  >
                    {order.label}
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

export default SortSelector;
