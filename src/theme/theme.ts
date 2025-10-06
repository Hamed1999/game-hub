import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        brand: {
          "500": { value: "tomato" },
          // define whatever color scale you want
        },
      },
      // you can define typography, space, sizes tokens etc
    },
    // optionally recipes (component style variants), etc
  }
});

export const customSystem = createSystem(defaultConfig, config);

