import "@mantine/core/styles.css";
import {
  AppShell,
  Group,
  MantineProvider,
  Stack,
  createTheme,
} from "@mantine/core";
import { Header } from "./Header.tsx";
import { MainDisplay } from "./MainDisplay.tsx";
import { About } from "./About.tsx";
import { ProjectDisplay } from "./ProjectDisplay.tsx";
import { useRef } from "react";

const theme = createTheme({
  fontFamily: "Nunito Sans, sans-serif",
  primaryColor: "orange",
});

export default function App() {
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (section: string) => {
    const sectionRefs: { [key: string]: React.RefObject<HTMLDivElement> } = {
      home: homeRef,
      about: aboutRef,
      projects: projectsRef,
    };

    sectionRefs[section]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <AppShell withBorder={false}>
        <AppShell.Header>
          <Header h={50} onScrollToSection={scrollToSection} />
        </AppShell.Header>
        <AppShell.Main mt={50}>
          <Group justify="center">
            <Stack justify="flex-start" align="stretch" gap={0}>
              <div ref={homeRef}>
                <MainDisplay h={500} />
              </div>
              <div ref={aboutRef}>
                <About h={200} />
              </div>
              <div ref={projectsRef}>
                <ProjectDisplay />
              </div>
            </Stack>
          </Group>
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
}
