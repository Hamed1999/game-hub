import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatforms";

function App() {
  const [selectedGenre, setSelecteGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectePlatform] = useState<Platform | null>(
    null
  );
  return (
    <div className="App">
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area={"nav"}>
          <NavBar />
        </GridItem>

        <GridItem
          area={"aside"}
          display={{ base: "none", lg: "block" }}
          paddingX={2}
        >
          <GenreList
            selectedGenre={selectedGenre}
            onSelectGenre={(genre) => setSelecteGenre(genre)}
          />
        </GridItem>

        <GridItem area={"main"}>
          <PlatformSelector
            selectedPlatform={selectedPlatform}
            onSelectPlatform={(platform) => setSelectePlatform(platform)}
          />
          <GameGrid
            selectedGenre={selectedGenre}
            selectedPlatform={selectedPlatform}
          />
        </GridItem>
      </Grid>
    </div>
  );
}

export default App;
