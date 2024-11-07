import {
  Button,
  Image,
  Title,
  Box,
  Stack,
  Center,
  Overlay,
} from "@mantine/core";
import classes from "./tweens.module.css";

interface Props {
  image: string;
  alt: string;
  tagline: string;
  header: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  centerOffset: number;
}
export function DisplayCard(props: React.PropsWithoutRef<Props>) {
  const handleClick = () => {
    if (!props.buttonLink) return;
    window.open(props.buttonLink);
  };

  return (
    <Box style={{ height: "100%", overflow: "hidden" }}>
      <div style={{ position: "relative", height: "100%" }}>
        <Image
          src={props.image}
          fit="cover"
          h="100%"
          radius="md"
          alt={props.alt}
        />
        <Overlay
          gradient="linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 80%)"
          radius="md"
          style={{ pointerEvents: "none" }}
          zIndex={1}
        />
      </div>

      <Center
        style={{
          position: "absolute",
          height: "100%",
          width: "100%",
          top: 0,
          left: props.centerOffset,
          zIndex: 2,
        }}
      >
        <Stack align="center" justify="center" w="80%">
          <Title size={25} ta="center" tt="capitalize">
            {props.tagline}
          </Title>
          <Title size={50} ta="center" tt="capitalize">
            {props.header}
          </Title>
          <Title size={10} ta="center" tt="capitalize">
            {props.description}
          </Title>
          {props.buttonLink && (
            <Button
              variant="gradient"
              w={120}
              onClick={handleClick}
              className={classes.scale}
            >
              {props.buttonText}
            </Button>
          )}
        </Stack>
      </Center>
    </Box>
  );
}
