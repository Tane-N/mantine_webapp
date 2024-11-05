import "@mantine/core/styles.css";
import {
  AppShell,
  Group,
  MantineProvider,
  Stack,
  createTheme,
  Divider,
} from "@mantine/core";
import { StickyHeader } from "./StickyHeader.tsx";
import { CarouselDisplay } from "./CarouselDisplay.tsx";
import { GridDisplay } from "./GridDisplay.tsx";
import { SimpleFooter } from "./SimpleFooter.tsx";

const theme = createTheme({
  fontFamily: "Nunito Sans, sans-serif",
  primaryColor: "orange",
});

export default function App() {
  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <AppShell withBorder={false}>
        <AppShell.Header>
          <StickyHeader h={50} />
        </AppShell.Header>
        <AppShell.Main mt={50}>
          <Group justify="center">
            <Stack justify="flex-start" align="stretch" gap={0}>
              <div
                id="home"
                style={{
                  overflow: "hidden",
                  maxWidth: "100%",
                }}
              >
                <CarouselDisplay h={600} />
              </div>

              <Divider my="md" />
              <div id="projects">
                <GridDisplay />
              </div>
              <Divider my="md" />
              <div id="contact">
                <SimpleFooter h={100} pt={35} />
              </div>
            </Stack>
          </Group>
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
}
