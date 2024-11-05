import { SimpleGrid, Box } from "@mantine/core";
import { GridCard } from "./GridCard";

const cards = [
  {
    image: "./public/boing_odyssey.jpg",
    content: "Contraption building puzzle game",
    link: "",
  },

  {
    image: "./public/together_we_die.jpg",
    content: "Co-op horror shooter",
    link: "",
  },

  {
    image: "./public/project_godspeed.jpg",
    content: "Roguelike run-and-gun platformer",
    link: "",
  },

  {
    image: "./public/coffer_quest.jpg",
    content: "Management simulation",
    link: "",
  },
];

export function GridDisplay() {
  const displays = cards.map((card) => <GridCard {...card} key={card.image} />);

  return (
    <Box p={"xl"}>
      <SimpleGrid spacing="xl" cols={{ base: 1, sm: 2, lg: 3 }}>
        {displays}
      </SimpleGrid>
    </Box>
  );
}
