import { Group, Stack, Image, Title, Text, Box } from "@mantine/core";

interface Props {
  h: number;
}

export function About(props: React.PropsWithoutRef<Props>) {
  return (
    <Box h={props.h} w={1200}>
      <Group grow justify="center" align="center" p="lg">
        <Stack>
          <Title
            c="white"
            style={{ textShadow: "0.1rem 0.1rem 0.2rem rgba(0, 0, 0, 0.8)" }}
          >
            Hi, I'm Taneli Nieminen
          </Title>
          <Text
            c="white"
            style={{ textShadow: "0.1rem 0.1rem 0.2rem rgba(0, 0, 0, 0.8)" }}
          >
            I do game- and web development. Blah blah my vision blah blah my
            journey not only do I want fat stacks of money I'm in it for the
            love of THE GAME and I can't survive a job interview because I have
            AUTISM and I fucking hate JAVASCRIPT but I tolerate it in the hopes
            that it gets me MONEY
          </Text>
        </Stack>
        <Image
          src="./public/logo_with_text.jpg"
          fit="cover"
          h={props.h * 0.7}
          w="auto"
          radius="md"
        />
      </Group>
    </Box>
  );
}
