import { SimpleGrid, Box } from "@mantine/core";
import { GridCard } from "./GridCard";

const cards = [
  {
    image: "./public/coffer_quest.jpg",
    header: "Coffer Quest",
    subheader: "Medieval management game",
  },

  {
    image: "./public/together_we_die.jpg",
    header: "Together We Die",
    subheader: "Co-op horror fps",
  },

  {
    image: "./public/boing_odyssey.jpg",
    header: "Boing Odyssey",
    subheader: "Physics puzzler",
  },

  {
    image: "./public/project_godspeed.jpg",
    header: "Project Godspeed",
    subheader: "Run-and-gun platformer",
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
