import { Button, Image, Title, Text, Box } from "@mantine/core";

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
      <Title
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
        }}
      >
        {props.header}
      </Title>
    </Box>
  );
}
