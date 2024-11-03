import { useRef, useState } from "react";
import { Group, Image, Button } from "@mantine/core";
import { useScrollIntoView } from "@mantine/hooks";

const links = [
  { link: "home", label: "Home" },
  { link: "about", label: "About" },
  { link: "projects", label: "Projects" },
];

interface Props {
  h: number;
}

export function Header(props: React.PropsWithoutRef<Props>) {
  const [active, setActive] = useState(links[0].link);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;
    var elementPosition = element.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.scrollY - props.h;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  const buttons = links.map((link) => (
    <Button
      key={link.link}
      variant="transparent"
      color={active === link.link ? "orange" : "grey"}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
        handleClick(link.link);
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
      <Image h={props.h} w="auto" fit="contain" src="./logo_no_text.jpg" />
      <Group gap={5} justify="flex-end">
        {buttons}
      </Group>
    </Group>
  );
}
