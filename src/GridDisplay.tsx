import { SimpleGrid, Box } from "@mantine/core";
import { GridCard } from "./GridCard";

const cards = [
  {
    image: "house_of_mimics_capsule.webp",
    alt: "Capsule art for a game called House of Mimics",
    content: "Multiplayer anomaly horror",
    link: "https://store.steampowered.com/app/3450150/House_of_Mimics/",
  },

  {
    image: "camera_tenebris_capsule.webp",
    alt: "Capsule art for a game called Camera Tenebris",
    content: "Horror game about perspectives",
    link: "https://jorava.itch.io/camera-tenebris",
  },

  {
    image: "boing_odyssey_capsule.webp",
    alt: "Capsule art for a game called Boing Odyssey",
    content: "Contraption building puzzle game",
    link: "https://store.steampowered.com/app/2587960/Boing_Odyssey/",
  },

  {
    image: "project_godspeed_capsule.webp",
    alt: "Capsule art for a game called Project Godspeed",
    content: "Roguelike run-and-gun platformer",
    link: "https://teamdatavi.itch.io/project-godspeed",
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
