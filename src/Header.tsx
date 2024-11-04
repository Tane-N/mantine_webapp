import { useState, useEffect } from "react";
import { Group, Image, Button } from "@mantine/core";

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
  const [isScrolling, setIsScrolling] = useState(false);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;
    var elementPosition = element.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.scrollY - props.h;

    setIsScrolling(true);

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });

    setTimeout(() => {
      setIsScrolling(false);
    }, 500);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (isScrolling) return;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            setActive(sectionId);
          }
        });
      },
      {
        rootMargin: `-${props.h}px 0px 0px 0px`,
        threshold: 0.8,
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
  }, [props.h, isScrolling]);

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
