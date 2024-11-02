import { useState } from "react";
import { Group, Image, Button } from "@mantine/core";

const links = [
  { link: "/home", label: "Home" },
  { link: "/about", label: "About" },
  { link: "/projects", label: "Projects" },
  { link: "/contact", label: "Contact" },
];

export function Header() {
  const [active, setActive] = useState(links[0].link);

  const buttons = links.map((link) => (
    <Button
      key={link.link}
      color="orange"
      size={"xs"}
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
      w={800}
      px={5}
      style={{ backgroundColor: "#000000" }}
    >
      <Image
        h={40}
        w="auto"
        fit="contain"
        src="./logo_no_text.jpg"
        alt="Company logo"
      ></Image>
      <Group gap={5} justify="flex-end">
        {buttons}
      </Group>
    </Group>
  );
}
