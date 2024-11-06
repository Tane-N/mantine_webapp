import { useState, useEffect } from "react";
import { Group, Image, Button } from "@mantine/core";
import classes from "./tweens.module.css";

const links = [
  { link: "home", label: "Home" },
  { link: "projects", label: "Projects" },
  { link: "contact", label: "Contact" },
];

interface Props {
  h: number;
}

export function StickyHeader(props: React.PropsWithoutRef<Props>) {
  const [active, setActive] = useState(links[0].link);
  const [isAutoScrolling, setIsAutoScrolling] = useState(false);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;
    var elementPosition = element.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.scrollY - props.h;

    setIsAutoScrolling(true);

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });

    setTimeout(() => {
      setIsAutoScrolling(false);
    }, 800);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (isAutoScrolling) return;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: `-${props.h}px 0px 0px 0px`,
        threshold: 0.7,
      }
    );

    links.forEach((link) => {
      const section = document.getElementById(link.link);
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      links.forEach((link) => {
        const section = document.getElementById(link.link);
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, [props.h, isAutoScrolling]);

  const buttons = links.map((link) => (
    <Button
      key={link.link}
      variant="transparent"
      color={active === link.link ? "orange" : "grey"}
      className={classes.scale}
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
      style={{ backgroundColor: "#000000", borderRadius: 8 }}
    >
      <Image
        h={props.h}
        w="auto"
        fit="contain"
        src="./logo_no_text.jpg"
        ml="xs"
      />
      <Group gap={5} justify="flex-end">
        {buttons}
      </Group>
    </Group>
  );
}
