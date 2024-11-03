import { Carousel, Embla, useAnimationOffsetEffect } from "@mantine/carousel";
import React, { useRef } from "react";
import { useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import { DisplayCard } from "./DisplayCard";

const cards = [
  {
    image: "./public/camera_tenebris.jpg",
    header: "Camera Tenebris",
    subheader: "Latest Release",
    buttontext: "View Page",
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

export function MainDisplay(props: React.PropsWithoutRef<Props>) {
  //const autoplay = useRef(Autoplay({ delay: 4000 }));
  const TRANSITION_DURATION = 1000;
  const [embla, setEmbla] = useState<Embla | null>(null);
  useAnimationOffsetEffect(embla, TRANSITION_DURATION);

  const slides = cards.map((card) => (
    <Carousel.Slide key={card.header}>
      <DisplayCard {...card} />
    </Carousel.Slide>
  ));

  return (
    <Carousel
      withIndicators
      height={props.h}
      maw="100%"
      w="100%"
      slideSize="100%"
      slideGap={0}
      loop
      align="center"
      //plugins={[autoplay.current]}
      //onMouseEnter={autoplay.current.stop}
      //onMouseLeave={autoplay.current.reset}
      getEmblaApi={setEmbla}
    >
      {slides}
    </Carousel>
  );
}
