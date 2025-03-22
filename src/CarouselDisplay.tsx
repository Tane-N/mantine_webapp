import { Carousel, Embla, useAnimationOffsetEffect } from "@mantine/carousel";
import React, { useRef, useEffect } from "react";
import { useState } from "react";
import { DisplayCard } from "./CarouselCard";
import classes from "./tweens.module.css";
import Autoplay from "embla-carousel-autoplay";

const cards = [
  {
    image: "house_of_mimics_carousel.webp",
    alt: "Screenshot of a horror game",
    tagline: "Latest Release",
    header: "House of Mimics Demo",
    description: "Multiplayer Anomaly Horror",
    buttonText: "Play Now",
    buttonLink:
      "https://store.steampowered.com/app/3452950/House_of_Mimics_Demo/",
  },
  {
    image: "together_we_die_carousel.webp",
    alt: "Capsule art for a fps game",
    tagline: "In Development",
    header: "Together We Die",
    description: "Co-op Shooter",
    buttonText: "",
    buttonLink: "",
  },
  {
    image: "super_portfolio_ball_carousel.webp",
    alt: "Screenshot of a low poly ball game",
    tagline: "Playable Portfolio",
    header: "Super Portfolio Ball",
    description: "Find All Trophies",
    buttonText: "play now",
    buttonLink: "super_portfolio_ball/index.html",
  },
];

interface Props {
  h: number;
}

export function CarouselDisplay(props: React.PropsWithoutRef<Props>) {
  const [embla, setEmbla] = useState<Embla | null>(null);
  const SLIDE_GAP = 44;
  const DEAD_ZONE_PERCENTAGE = 0.1;

  const autoplay = useRef(
    Autoplay({ delay: 3000, stopOnMouseEnter: false, stopOnInteraction: true })
  );

  useAnimationOffsetEffect(embla, 0);

  useEffect(() => {
    const firstImage = cards[0].image;

    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = firstImage;

    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!embla) return;

    const width = window.innerWidth;
    const clickX = event.clientX;

    if (clickX > width / 2 + width * DEAD_ZONE_PERCENTAGE) {
      embla.scrollNext();
    } else if (clickX < width / 2 - width * DEAD_ZONE_PERCENTAGE) {
      embla.scrollPrev();
    }
  };

  const slides = cards.map((card, index) => (
    <Carousel.Slide key={card.header}>
      <DisplayCard
        {...card}
        centerOffset={-SLIDE_GAP / 2}
        preload={index === 0}
      />
    </Carousel.Slide>
  ));

  return (
    <Carousel
      withIndicators
      height={props.h}
      maw="100%"
      w="100%"
      slideSize="90%"
      slideGap={SLIDE_GAP}
      mt="xl"
      mb="xl"
      loop
      align="center"
      withControls={false}
      getEmblaApi={setEmbla}
      className={classes.scale}
      plugins={[autoplay.current]}
      onClick={(event) => {
        handleClick(event);
      }}
    >
      {slides}
    </Carousel>
  );
}
