import {
  BackgroundImage,
  Overlay,
  Image,
  Flex,
  Modal,
  Title,
  Center,
  Button,
  Stack,
  Group,
} from "@mantine/core";
import { useDisclosure, useMediaQuery, useViewportSize } from "@mantine/hooks";
import classes from "./tweens.module.css";

interface Props {
  image: string;
  content: string;
  buttonText: string;
  buttonLink: string;
}

export function GridCard(props: React.PropsWithoutRef<Props>) {
  const [opened, { open, close }] = useDisclosure(false);

  const MIN_DESKTOP_WIDTH = 1280;
  const { width, height } = useViewportSize();
  const isDesktop = useMediaQuery("(min-width: 1280px)");

  const MODAL_GAP_MULTIPLIER = isDesktop ? 0.7 : 0.9;

  const aspectRatio = 16 / 9;
  const modalWidth = width * MODAL_GAP_MULTIPLIER;
  const modalHeight = Math.min(
    modalWidth / aspectRatio,
    height * MODAL_GAP_MULTIPLIER
  );

  const MAX_TEXT_SIZE = 35;

  const setTextSize = (): number => {
    if (isDesktop) return MAX_TEXT_SIZE;

    return MAX_TEXT_SIZE * Math.min(Math.max(width / MIN_DESKTOP_WIDTH, 0), 1);
  };

  return (
    <div>
      <Modal
        opened={opened}
        onClose={close}
        withCloseButton={false}
        zIndex={300}
        centered
        radius="md"
        size={modalWidth}
        transitionProps={{
          duration: 150,
          transition: "scale",
          timingFunction: "ease",
        }}
        padding={0}
        onClick={close}
      >
        <BackgroundImage src={props.image} h={modalHeight} p="lg" radius="md">
          <Flex h="100%" w="100%" justify="flex-end" align="flex-end">
            <Image
              src="./public/minimize-2.svg"
              h="5%"
              w="auto"
              style={{ zIndex: 301 }}
            />
          </Flex>
          <Center
            style={{
              position: "absolute",
              height: "100%",
              width: "100%",
              top: 0,
              left: 0,
              zIndex: 300,
            }}
          >
            <Title
              size={setTextSize()}
              ta="left"
              c="white"
              p="xl"
              lh="xl"
              style={{
                textShadow: "0.1rem 0.1rem 0.2rem rgba(0, 0, 0, 0.8)",
                pointerEvents: "none",
                userSelect: "none",
              }}
            >
              {props.content}
            </Title>
          </Center>
        </BackgroundImage>
        <Overlay color="#000" backgroundOpacity={0.6} radius="md" />
      </Modal>
      <div
        style={{ position: "relative", height: 250 }}
        className={classes.scale}
      >
        <BackgroundImage
          src={props.image}
          h="100%"
          p="lg"
          radius="md"
          onClick={open}
        >
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
          gradient="linear-gradient(-45deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 40%)"
          radius="md"
          style={{ pointerEvents: "none" }}
        />
      </div>
    </div>
  );
}
