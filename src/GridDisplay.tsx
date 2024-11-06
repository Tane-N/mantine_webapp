import { SimpleGrid, Box } from "@mantine/core";
import { GridCard } from "./GridCard";

const cards = [
  {
    image: "boing_odyssey.jpg",
    content: "Contraption building puzzle game",
    link: "https://store.steampowered.com/app/2587960/Boing_Odyssey/",
  },

  {
    image: "together_we_die.jpg",
    content: "Co-op horror shooter",
    link: "",
  },

  {
    image: "project_godspeed.jpg",
    content: "Roguelike run-and-gun platformer",
    link: "https://teamdatavi.itch.io/project-godspeed",
  },

  {
    image: "coffer_quest.jpg",
    content: "Management simulation",
    link: "",
  },
];

export function GridDisplay() {
  const cardsSortedByLink = cards.sort((a, b) => {
    if (!a.link && b.link) return 1;
    if (!b.link && a.link) return -1;
    return 0;
  });
  const displays = cardsSortedByLink.map((card) => (
    <GridCard {...card} key={card.image} />
  ));

  return (
    <Box p={"xl"}>
      <SimpleGrid spacing="xl" cols={{ base: 1, sm: 2, lg: 3 }}>
        {displays}
      </SimpleGrid>
    </Box>
  );
}
