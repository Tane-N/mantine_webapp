import { Carousel, Embla, useAnimationOffsetEffect } from "@mantine/carousel";
import React, { useRef } from "react";
import { useState } from "react";
import { DisplayCard } from "./CarouselCard";
import classes from "./tweens.module.css";
import Autoplay from "embla-carousel-autoplay";

const cards = [
  {
    image: "./public/camera_tenebris.jpg",
    header: "Camera Tenebris",
    subheader: "Latest Release",
    description: "Puzzles About Perspectives",
    buttontext: "Play Now",
    buttonlink: "https://jorava.itch.io/camera-tenebris",
  },

  {
    image: "./public/mimicologist_placeholder.jpg",
    header: "Mimicologist",
    subheader: "Currently In Development",
    description: "Co-op Horror Deduction",
    buttontext: "Learn More",
    buttonlink: "",
  },

  {
    image: "./public/super_portfolio_ball.jpg",
    header: "Super Portfolio Ball",
    subheader: "Playable Portfolio",
    description: "Find All Trophies",
    buttontext: "play now",
    buttonlink: "./Public/super_portfolio_ball/index.html",
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
    Autoplay({ delay: 5000, stopOnMouseEnter: true, stopOnInteraction: false })
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
      <DisplayCard {...card} centeroffset={-SLIDE_GAP / 2} />
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
