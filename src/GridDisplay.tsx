import { SimpleGrid, Box } from "@mantine/core";
import { GridCard } from "./GridCard";

const cards = [
  {
    image: "boing_odyssey_capsule.webp",
    alt: "Illustration of a ball getting punched by a boxing glove, along with the game title",
    content: "Contraption building puzzle game",
    link: "https://store.steampowered.com/app/2587960/Boing_Odyssey/",
  },

  {
    image: "together_we_die_capsule.webp",
    alt: "Illustration of a solemn templar holding a shotgun, along with the game title",
    content: "Co-op horror shooter",
    link: "",
  },

  {
    image: "project_godspeed_capsule.webp",
    alt: "Pixel art of a sci-fi warrior fighting a wraith, along with game title",
    content: "Roguelike run-and-gun platformer",
    link: "https://teamdatavi.itch.io/project-godspeed",
  },

  {
    image: "coffer_quest_capsule.webp",
    alt: "Render of a modest medieval house in a serene forest, along with game title",
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
