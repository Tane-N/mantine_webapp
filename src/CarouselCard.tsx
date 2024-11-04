import { Button, Image, Title, Box, Stack, Center } from "@mantine/core";

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
      <Image src={props.image} fit="cover" h="100%" radius="md" />
      <Stack
        align="center"
        justify="center"
        style={{
          position: "absolute",
          left: "50",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
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

        <Button variant="filled" w={110}>
          {props.buttontext}
        </Button>
      </Stack>
    </Box>
  );
}
