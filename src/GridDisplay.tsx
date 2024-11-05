import { SimpleGrid, Box } from "@mantine/core";
import { GridCard } from "./GridCard";

const cards = [
  {
    image: "./public/coffer_quest.jpg",
    content: "Coffer Quest",
    buttonText: "",
    buttonLink: "",
  },

  {
    image: "./public/together_we_die.jpg",
    content: "Together We Die",
    buttonText: "",
    buttonLink: "",
  },

  {
    image: "./public/boing_odyssey.jpg",
    content: "Boing Odyssey",
    buttonText: "Store Page",
    buttonLink: "",
  },

  {
    image: "./public/project_godspeed.jpg",
    content: "Project Godspeed",
    buttonText: "Play Now",
    buttonLink: "",
  },
];

export function GridDisplay() {
  const displays = cards.map((card) => <GridCard {...card} key={card.image} />);

  return (
    <Box p={"xl"}>
      <SimpleGrid spacing="xl" cols={{ base: 1, sm: 2, lg: 4 }}>
        {displays}
      </SimpleGrid>
    </Box>
  );
}
