import { Button, Image, Title, Text } from "@mantine/core";

interface Props {
  image: string;
  header: string;
  subheader: string;
  buttontext: string;
  buttonlink: string;
}
export function DisplayCard(props: React.PropsWithoutRef<Props>) {
  return <Image src={props.image} fit="cover" h="auto" w="100%"></Image>;
}
