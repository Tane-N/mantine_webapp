import { Text, Group, Image, Box, Flex } from "@mantine/core";
import classes from "./tweens.module.css";

interface Props {
  mt: number;
  logoHeight: number;
  buttonHeight: number;
}

const links = [
  {
    image: "mail.svg",
    alt: "Icon that links to mail",
    link: "mailto:taneli.i.nieminen@gmail.com?subject=Inquiry%20Regarding%20Your%20Work",
  },
  {
    image: "github.svg",
    alt: "Icon that links to Github",
    link: "https://github.com/Tane-N",
  },
  {
    image: "linkedin.svg",
    alt: "Icon that links to LinkedIn",
    link: "https://www.linkedin.com/in/taneli-nieminen-73a3092b9/",
  },
];

export function ContactFooter(props: React.PropsWithoutRef<Props>) {
  const buttons = links.map((button) => (
    <Image
      key={button.link}
      src={button.image}
      alt={button.alt}
      h={props.buttonHeight}
      w="auto"
      onClick={() => {
        window.open(button.link);
      }}
      className={classes.scaleL}
    />
  ));

  return (
    <Box
      mt={props.mt}
      p="xl"
      style={{ backgroundColor: "#000000", borderRadius: 8 }}
      w="100%"
    >
      <Flex
        direction="column"
        align="flex-start"
        w="100%"
        p="xl"
        gap="xs"
        style={{ borderBottom: "solid rgb(30, 30, 30)" }}
      >
        <Group pt="xs" pb="xs">
          <Image
            src="logo_no_text.jpg"
            h={props.logoHeight}
            w="auto"
            alt="Company logo of a firelit cabin"
          />
          <Image
            src="logo_text_only.jpg"
            h={props.logoHeight}
            w="auto"
            alt="Logo of the company, name Tuonele"
          />
        </Group>
        <Text c="rgb(90, 90, 90)" size="xs" maw={300} lh={1.5}>
          Taneli Nieminen, professional game- and web-developer from Finland.
          Don't hesitate to email me or message me on socials if you're
          interested in my work.
        </Text>
      </Flex>
      <Group justify="space-between" p="xl" w="100%" gap="xl">
        <Text size="sm" c="rgb(90, 90, 90)">
          © 2024 Tuonele. All rights reserved.
        </Text>
        <Group justify="flex-end" gap="xl">
          {buttons}
        </Group>
      </Group>
    </Box>
  );
}
