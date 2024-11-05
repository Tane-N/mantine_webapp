import { BackgroundImage, Overlay, Image, Flex, Text } from "@mantine/core";
import classes from "./tweens.module.css";
import { AspectRatio } from "@mantine/core";

interface Props {
  image: string;
  content: string;
  link: string;
}

export function GridCard(props: React.PropsWithoutRef<Props>) {
  const ASPECT_RATIO = 16 / 9;

  return (
    <div
      style={{
        position: "relative",
        height: "40%",
      }}
      className={classes.scale}
    >
      <AspectRatio ratio={ASPECT_RATIO}>
        <BackgroundImage src={props.image} h="100%" radius="md">
          <Flex h="100%" justify="space-between" align="flex-end" p="sm">
            <Text
              c="white"
              size="sm"
              style={{
                textShadow: "0.1rem 0.1rem 0.2rem rgba(0, 0, 0, 0.8)",
                pointerEvents: "none",
                userSelect: "none",
                zIndex: 202,
              }}
            >
              {props.content}
            </Text>
            <Image
              src="./public/external-link.svg"
              h="10%"
              w="auto"
              style={{ zIndex: 202 }}
            />
          </Flex>
        </BackgroundImage>
        <Overlay
          gradient="linear-gradient(0deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 30%)"
          radius="md"
          style={{ pointerEvents: "none" }}
        />
      </AspectRatio>
    </div>
  );
}
