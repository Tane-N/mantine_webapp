import { BackgroundImage, Overlay } from "@mantine/core";
import classes from "./tweens.module.css";

interface Props {
  image: string;
  header: string;
  subheader: string;
}

export function GridCard(props: React.PropsWithoutRef<Props>) {
  return (
    <div
      style={{ position: "relative", height: 250 }}
      className={classes.scale}
    >
      <BackgroundImage
        src={props.image}
        h={250}
        p="lg"
        radius="md"
      ></BackgroundImage>
      <Overlay
        gradient="linear-gradient(-10deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 15%)"
        radius="md"
        style={{ pointerEvents: "none" }}
      />
    </div>
  );
}
