import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";

function App() {
  return (
    <div className="App">
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area={"nav"}>
          <NavBar />
        </GridItem>

        <GridItem area={"aside"} display={{ base: "none", lg: "block" }}>
          Aside
        </GridItem>

        <GridItem area={"main"}>
          <GameGrid />
        </GridItem>
      </Grid>
    </div>
  );
}

export default App;
