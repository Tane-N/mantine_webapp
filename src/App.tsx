import "@mantine/core/styles.css";
import {
  AppShell,
  Group,
  MantineProvider,
  Stack,
  createTheme,
  Divider,
} from "@mantine/core";
import { Header } from "./Header.tsx";
import { CarouselDisplay } from "./CarouselDisplay.tsx";
import { About } from "./About.tsx";
import { GridDisplay } from "./GridDisplay.tsx";

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
                <CarouselDisplay h={500} />
              </div>
              <Divider my="md" />
              <div id="projects">
                <GridDisplay />
              </div>
              <Divider my="md" />
            </Stack>
          </Group>
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
}
