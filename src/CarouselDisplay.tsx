import { Carousel, Embla, useAnimationOffsetEffect } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import React, { useRef } from "react";
import { useState } from "react";
import { DisplayCard } from "./CarouselCard";
import classes from "./tweens.module.css";
import Autoplay from "embla-carousel-autoplay";

const cards = [
  {
    image: "camera_tenebris_carousel.jpg",
    alt: "Screenshot of a retro top-down horror game",
    tagline: "Latest Release",
    header: "Camera Tenebris",
    description: "Puzzles About Perspectives",
    buttonText: "Play Now",
    buttonLink: "https://jorava.itch.io/camera-tenebris",
  },

  {
    image: "mimicologist_placeholder_carousel.jpg",
    alt: "Stock image of a haunting interior",
    tagline: "Currently In Development",
    header: "Mimicologist",
    description: "Co-op Horror Deduction",
    buttonText: "Learn More",
    buttonLink: "",
  },

  {
    image: "super_portfolio_ball_carousel.jpg",
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

  const slides = cards.map((card) => (
    <Carousel.Slide key={card.header}>
      <DisplayCard {...card} centerOffset={-SLIDE_GAP / 2} />
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
