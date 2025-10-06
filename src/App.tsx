import { Grid, GridItem } from "@chakra-ui/react";

function App() {

  return (
    <div className="App">
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "main aside"`,
        }}
      >
        <GridItem area={"nav"} bg={"coral"}>
          Navigation
        </GridItem>
        <GridItem
          area={"aside"}
          bg={"gold"}
          display={{ base: "none", lg: "block" }}
        >
          Aside
        </GridItem>
        <GridItem area={"main"} bg={"dodgerblue"}>
          Main Content
        </GridItem>
      </Grid>
    </div>
  );
}

export default App;
