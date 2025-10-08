import { HStack, Input, InputElement, InputGroup } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  return (
    <InputGroup startElement={<BsSearch />}>
      <Input borderRadius={20} placeholder="Search Games..." variant="subtle" />
    </InputGroup>
  );
};

export default SearchInput;
