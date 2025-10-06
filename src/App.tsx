import { Button, HStack } from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
      Hello World
      <HStack>
        <Button colorScheme="blue">Click me</Button>
        <Button colorScheme="blue">Click me</Button>
      </HStack>
    </div>
  );
}

export default App;
