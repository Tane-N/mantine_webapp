import { Button, Paper, Title, Text } from "@mantine/core";

interface Props {
  image: string;
  header: string;
  subheader: string;
  buttontext: string;
  buttonlink: string;
}
export function DisplayCard(props: React.PropsWithoutRef<Props>) {
  return (
    <Paper
      shadow="md"
      p="xl"
      radius={0}
      style={{
        backgroundImage: `url(${props.image})`,
        height: "100%",
        paddingBottom: "56.25%",
      }}
    >
      <div>
        <Text size="xs"> {props.subheader}</Text>
        <Title order={3}> {props.header}</Title>
      </div>
      <Button variant="white" color="dark">
        {props.buttontext}
      </Button>
    </Paper>
  );
}
