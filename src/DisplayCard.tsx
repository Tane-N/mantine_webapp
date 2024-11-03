import { Button, Image, Title, Box, Stack } from "@mantine/core";

interface Props {
  image: string;
  header: string;
  subheader: string;
  buttontext: string;
  buttonlink: string;
}
export function DisplayCard(props: React.PropsWithoutRef<Props>) {
  return (
    <Box style={{ height: "100%", overflow: "hidden" }}>
      <Image src={props.image} fit="cover" h="100%" />
      <Stack
        align="center"
        justify="center"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Title
          order={5}
          ta="center"
          c="white"
          style={{ textShadow: "0.1rem 0.1rem 0.2rem rgba(0, 0, 0, 0.8)" }}
        >
          {props.subheader}
        </Title>
        <Title
          order={1}
          ta="center"
          c="white"
          style={{ textShadow: "0.1rem 0.1rem 0.2rem rgba(0, 0, 0, 0.8)" }}
        >
          {props.header}
        </Title>

        <Button variant="filled" w={120}>
          {props.buttontext}
        </Button>
      </Stack>
    </Box>
  );
}
