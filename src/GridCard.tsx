import { BackgroundImage, Overlay, Image, Flex } from "@mantine/core";
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
      <BackgroundImage src={props.image} h="100%" p="lg" radius="md">
        <Flex h="100%" justify="flex-end" align="flex-end">
          <Image
            src="./public/maximize-2.svg"
            h="10%"
            w="auto"
            style={{ zIndex: 202 }}
          />
        </Flex>
      </BackgroundImage>
      <Overlay
        gradient="linear-gradient(-45deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 40%)"
        radius="md"
        style={{ pointerEvents: "none" }}
      />
    </div>
  );
}
