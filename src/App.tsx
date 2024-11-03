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

const theme = createTheme({
  fontFamily: "Nunito Sans, sans-serif",
  primaryColor: "orange",
});

export default function App() {
  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <AppShell withBorder={false}>
        <AppShell.Header>
          <Header h={50} />
        </AppShell.Header>
        <AppShell.Main mt={50}>
          <Group justify="center">
            <Stack justify="flex-start" align="stretch" gap={0}>
              <div id="home">
                <MainDisplay h={500} />
              </div>
              <div id="about">
                <About h={500} />
              </div>
              <div id="projects">
                <ProjectDisplay />
              </div>
            </Stack>
          </Group>
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
}
