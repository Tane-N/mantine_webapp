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
  header: string;
  subheader: string;
  description: string;
  buttontext: string;
  buttonlink: string;
  centeroffset: number;
}
export function DisplayCard(props: React.PropsWithoutRef<Props>) {
  return (
    <Box style={{ height: "100%", overflow: "hidden" }}>
      <div style={{ position: "relative", height: "100%" }}>
        <Image src={props.image} fit="cover" h="100%" radius="md" />
        <Overlay
          gradient="linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 80%)"
          radius="md"
          style={{ pointerEvents: "none" }}
        />
      </div>

      <Center
        style={{
          position: "absolute",
          height: "100%",
          width: "100%",
          top: 0,
          left: props.centeroffset,
          zIndex: 201,
        }}
      >
        <Stack align="center" justify="center" w="80%">
          <Title
            size={25}
            ta="center"
            c="white"
            style={{
              textShadow: "0.1rem 0.1rem 0.2rem rgba(0, 0, 0, 0.8)",
              pointerEvents: "none",
              userSelect: "none",
            }}
          >
            {props.subheader}
          </Title>
          <Title
            size={50}
            ta="center"
            c="white"
            style={{
              textShadow: "0.1rem 0.1rem 0.2rem rgba(0, 0, 0, 0.8)",
              pointerEvents: "none",
              userSelect: "none",
            }}
          >
            {props.header}
          </Title>
          <Title
            size={10}
            ta="center"
            c="white"
            style={{
              textShadow: "0.1rem 0.1rem 0.2rem rgba(0, 0, 0, 0.8)",
              pointerEvents: "none",
              userSelect: "none",
            }}
          >
            {props.description}
          </Title>
          <Button variant="filled" w={120} className={classes.scale}>
            {props.buttontext}
          </Button>
        </Stack>
      </Center>
    </Box>
  );
}
