import { useState } from "react";
import { Container, Group, Image } from "@mantine/core";
import classes from "./Header.module.css";

const links = [
  { link: "/home", label: "Home" },
  { link: "/about", label: "About" },
  { link: "/projects", label: "Projects" },
  { link: "/contact", label: "Contact" },
];

export function Header() {
  const [active, setActive] = useState(links[0].link);

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <Container className={classes.container}>
      <Image
        src="./logo_no_text.jpg"
        alt="Company logo"
        visibleFrom="xs"
        className={classes.logo}
      ></Image>
      <Group gap={7}>{items}</Group>
    </Container>
  );
}
