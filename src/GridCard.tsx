import { BackgroundImage, Overlay, Image, Flex, Modal } from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import classes from "./tweens.module.css";

interface Props {
  image: string;
  content: string;
  buttonText: string;
  buttonLink: string;
}

export function GridCard(props: React.PropsWithoutRef<Props>) {
  const [opened, { open, close }] = useDisclosure(false);
  const isMobile = useMediaQuery("(max-width: 1000px)");

  return (
    <div>
      <Modal
        opened={opened}
        onClose={close}
        withCloseButton={false}
        zIndex={300}
        centered
        radius="md"
        size={isMobile ? "100%" : "70%"}
        transitionProps={{ duration: 150, transition: "scale" }}
        padding={0}
        onClick={close}
      >
        <BackgroundImage src={props.image} h={600} p="lg" radius="md">
          <Flex h="100%" justify="flex-end" align="flex-end">
            <Image
              src="./public/minimize-2.svg"
              h="5%"
              w="auto"
              style={{ zIndex: 301 }}
            />
          </Flex>
        </BackgroundImage>
        <Overlay color="#000" backgroundOpacity={0.5} radius="md" />
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
