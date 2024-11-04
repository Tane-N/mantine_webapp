import { Button, Image, Title, Box, Stack, Center } from "@mantine/core";
import classes from "./tweens.module.css";

interface Props {
  image: string;
  header: string;
  subheader: string;
  buttontext: string;
  buttonlink: string;
  centeroffset: number;
}
export function DisplayCard(props: React.PropsWithoutRef<Props>) {
  return (
    <Box style={{ height: "100%", overflow: "hidden" }}>
      <Image src={props.image} fit="cover" h="100%" radius="md" />
      <Center
        style={{
          position: "absolute",
          height: "100%",
          width: "100%",
          top: 0,
          left: props.centeroffset,
        }}
      >
        <Stack align="center" justify="center" w="80%">
          <Title
            size={25}
            ta="center"
            c="white"
            style={{ textShadow: "0.1rem 0.1rem 0.2rem rgba(0, 0, 0, 0.8)" }}
          >
            {props.subheader}
          </Title>
          <Title
            size={50}
            ta="center"
            c="white"
            style={{ textShadow: "0.1rem 0.1rem 0.2rem rgba(0, 0, 0, 0.8)" }}
          >
            {props.header}
          </Title>

          <Button variant="filled" w={110} className={classes.scale}>
            {props.buttontext}
          </Button>
        </Stack>
      </Center>
    </Box>
  );
}