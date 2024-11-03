import { useState } from "react";
import { Group, Image, Button } from "@mantine/core";

const links = [
  { link: "/home", label: "Home" },
  { link: "/about", label: "About" },
  { link: "/projects", label: "Projects" },
];

interface Props {
  h: number;
}

export function Header(props: React.PropsWithoutRef<Props>) {
  const [active, setActive] = useState(links[0].link);

  const buttons = links.map((link) => (
    <Button
      key={link.link}
      color="orange"
      h={props.h / 1.9}
      variant={active === link.link ? "filled" : "outline"}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
      }}
    >
      {link.label}
    </Button>
  ));

  return (
    <Group
      justify="space-between"
      h={props.h}
      px={5}
      style={{ backgroundColor: "#000000" }}
    >
      <Image
        h={props.h}
        w="auto"
        fit="contain"
        src="./logo_no_text.jpg"
        alt="Company logo"
      />
      <Group gap={5} justify="flex-end">
        {buttons}
      </Group>
    </Group>
  );
}
