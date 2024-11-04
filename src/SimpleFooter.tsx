import { Group, Image, Stack, Text } from "@mantine/core";

interface Props {
  h: number;
  pt: number;
}

export function SimpleFooter(props: React.PropsWithoutRef<Props>) {
  return (
    <Group
      justify="space-between"
      h={props.h}
      px={5}
      mt={props.pt}
      style={{ backgroundColor: "#000000", borderRadius: 8 }}
    >
      <Image
        h={props.h}
        w="auto"
        fit="contain"
        src="./logo_no_text.jpg"
        ml="xs"
      />

      <Stack mr="md" justify="center" gap="xs">
        <Text size="xs" c="dimmed">
          © 2024 Tuonele
        </Text>
        <Text size="xs" c="dimmed">
          Made by Taneli Nieminen
        </Text>
      </Stack>
    </Group>
  );
}
