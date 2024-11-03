import { Carousel, Embla, useAnimationOffsetEffect } from "@mantine/carousel";
import React, { useRef } from "react";
import { useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import { DisplayCard } from "./DisplayCard";

const cards = [
  {
    image:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-1.png",
    header: "Super Portfolio Ball",
    subheader: "Try It Out",
    buttontext: "Play Now",
    buttonlink: "string",
  },

  {
    image:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-2.png",
    header: "Mimicologist",
    subheader: "Currently In Development",
    buttontext: "See More",
    buttonlink: "string",
  },
];

interface Props {
  h: number;
}

export function MainDisplay(props: React.PropsWithoutRef<Props>) {
  const autoplay = useRef(Autoplay({ delay: 3000 }));
  const TRANSITION_DURATION = 400;
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
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
      getEmblaApi={setEmbla}
    >
      {slides}
    </Carousel>
  );
}
