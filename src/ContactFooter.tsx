import { Text, Container, ActionIcon, Group, Image, Box } from "@mantine/core";

interface Props {
  h: number;
  pt: number;
}

const data = [
  {
    title: "About",
    links: [
      { label: "Features", link: "#" },
      { label: "Pricing", link: "#" },
      { label: "Support", link: "#" },
      { label: "Forums", link: "#" },
    ],
  },
  {
    title: "Project",
    links: [
      { label: "Contribute", link: "#" },
      { label: "Media assets", link: "#" },
      { label: "Changelog", link: "#" },
      { label: "Releases", link: "#" },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "Join Discord", link: "#" },
      { label: "Follow on Twitter", link: "#" },
      { label: "Email newsletter", link: "#" },
      { label: "GitHub discussions", link: "#" },
    ],
  },
];

export function ContactFooter(props: React.PropsWithoutRef<Props>) {
  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text<"a">
        key={index}
        component="a"
        href={link.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </Text>
    ));

    return (
      <div key={group.title}>
        <Text>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <Box
      h={props.h}
      mt={props.pt}
      style={{ backgroundColor: "#000000", borderRadius: 8 }}
    >
      <Container>
        <div>
          <Image src="./public/logo_no_text.jpg" h={20} w="auto" />
          <Text size="xs" c="dimmed">
            Build fully functional accessible web applications faster than ever
          </Text>
        </div>
        <div>{groups}</div>
      </Container>
      <Container>
        <Text c="dimmed" size="sm">
          © 2020 mantine.dev. All rights reserved.
        </Text>

        <Group gap={0} justify="flex-end" wrap="nowrap">
          <ActionIcon size="lg" color="gray" variant="subtle">
            <Image src="./public/mail.svg" h={20} w="auto" />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <Image src="./public/github.svg" h={20} w="auto" />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <Image src="./public/linkedin.svg" h={20} w="auto" />
          </ActionIcon>
        </Group>
      </Container>
    </Box>
  );
}
