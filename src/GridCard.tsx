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

  const handleClick = () => {
    if (!props.link) return;
    window.open(props.link);
  };

  return (
    <div
      style={{
        position: "relative",
        height: "40%",
      }}
      className={props.link ? classes.scale : classes.darken}
      onClick={handleClick}
    >
      <AspectRatio ratio={ASPECT_RATIO}>
        <BackgroundImage src={props.image} h="100%" radius="md">
          <Flex h="100%" justify="space-between" align="flex-end" p="sm">
            <Text
              size="xs"
              fs="italic"
              tt="uppercase"
              style={{ zIndex: 2, userSelect: "none" }}
            >
              {props.content}
            </Text>
            {props.link && (
              <Image
                src="external-link.svg"
                h="10%"
                w="auto"
                style={{ zIndex: 2 }}
              />
            )}
          </Flex>
        </BackgroundImage>
        <Overlay
          gradient="linear-gradient(0deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 30%)"
          radius="md"
          style={{ pointerEvents: "none" }}
          zIndex={1}
        />
      </AspectRatio>
    </div>
  );
}
