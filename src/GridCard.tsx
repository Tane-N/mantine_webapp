import { Text, Title, Button, BackgroundImage } from "@mantine/core";
import classes from "./tweens.module.css";

interface Props {
  image: string;
  header: string;
  subheader: string;
}

export function GridCard(props: React.PropsWithoutRef<Props>) {
  return (
    <BackgroundImage
      src={props.image}
      h={250}
      p="lg"
      radius="md"
      className={classes.scale}
    >
      <div>
        <Text size="xs">{props.subheader}</Text>
        <Title order={3}>{props.header}</Title>
      </div>
      <Button variant="filled" className={classes.scale}>
        More Info
      </Button>
    </BackgroundImage>
  );
}
