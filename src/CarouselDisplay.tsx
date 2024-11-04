import { Carousel, Embla, useAnimationOffsetEffect } from "@mantine/carousel";
import React from "react";
import { useState } from "react";
import { DisplayCard } from "./CarouselCard";
import classes from "./tweens.module.css";

const cards = [
  {
    image: "./public/camera_tenebris.jpg",
    header: "Camera Tenebris",
    subheader: "Latest Release",
    buttontext: "Play Now",
    buttonlink: "string",
  },

  {
    image: "./public/mimicologist_placeholder.jpg",
    header: "Mimicologist",
    subheader: "Currently In Development",
    buttontext: "More Info",
    buttonlink: "string",
  },

  {
    image: "./public/super_portfolio_ball.jpg",
    header: "Super Portfolio Ball",
    subheader: "Playable Portfolio",
    buttontext: "Play Now",
    buttonlink: "string",
  },
];

interface Props {
  h: number;
}

export function CarouselDisplay(props: React.PropsWithoutRef<Props>) {
  const TRANSITION_DURATION = 1000;
  const [embla, setEmbla] = useState<Embla | null>(null);
  const GAP = 44;
  useAnimationOffsetEffect(embla, TRANSITION_DURATION);

  const slides = cards.map((card) => (
    <Carousel.Slide key={card.header}>
      <DisplayCard {...card} centeroffset={-GAP / 2} />
    </Carousel.Slide>
  ));

  return (
    <Carousel
      withIndicators
      height={props.h}
      maw="100%"
      w="100%"
      slideSize="90%"
      slideGap={GAP}
      pt="xl"
      loop
      align="center"
      withControls={false}
      getEmblaApi={setEmbla}
      className={classes.scale}
    >
      {slides}
    </Carousel>
  );
}
