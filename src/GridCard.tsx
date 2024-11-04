import { Text, Title, Button, BackgroundImage, Overlay } from "@mantine/core";
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
      <BackgroundImage src={props.image} h={250} p="lg" radius="md">
        {/* <Text size="xs">{props.subheader}</Text>
        <Title order={3}>{props.header}</Title>
        <Button variant="filled" className={classes.scale}>
          More Info
        </Button> */}
      </BackgroundImage>
      <Overlay
        gradient="linear-gradient(-3deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 60%)"
        radius="md"
        style={{ pointerEvents: "none" }}
      />
    </div>
  );
}
