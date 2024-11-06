import "@mantine/core/styles.css";
import {
  AppShell,
  MantineProvider,
  createTheme,
  Divider,
  Flex,
  Text,
  Title,
  Button,
} from "@mantine/core";
import { StickyHeader } from "./StickyHeader.tsx";
import { CarouselDisplay } from "./CarouselDisplay.tsx";
import { GridDisplay } from "./GridDisplay.tsx";
import { ContactFooter } from "./ContactFooter.tsx";

const theme = createTheme({
  fontFamily: "Nunito Sans, sans-serif",

  primaryColor: "orange",
  defaultRadius: "md",
  defaultGradient: {
    from: "orange",
    to: "red",
    deg: 45,
  },

  components: {
    Title: Title.extend({
      defaultProps: {
        c: "white",
        style: {
          textShadow: "0.1rem 0.1rem 0.1rem rgba(0, 0, 0, 0.8)",
          pointerEvents: "none",
          userSelect: "none",
        },
      },
    }),
    Text: Text.extend({
      defaultProps: {
        c: "gray",
        fw: 500,
        style: {
          textShadow: "0.1rem 0.1rem 0.1rem rgba(0, 0, 0, 0.8)",
          pointerEvents: "none",
          userSelect: "none",
        },
      },
    }),
    Button: Button.extend({
      defaultProps: {
        variant: "gradient",
        style: {
          textTransform: "capitalize",
          textShadow: "0.1rem 0.1rem 0.1rem rgba(0, 0, 0, 0.8)",
        },
      },
    }),
  },
});

export default function App() {
  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <AppShell withBorder={false}>
        <AppShell.Header>
          <StickyHeader h={50} />
        </AppShell.Header>

        <AppShell.Main mt={50}>
          <Flex direction="column" justify="center" align="stretch" gap={0}>
            <div
              id="home"
              style={{
                overflow: "hidden",
                maxWidth: "100%",
              }}
            >
              <CarouselDisplay h={500} />
            </div>

            <Divider my="md" />

            <div id="projects">
              <GridDisplay />
            </div>

            <Divider my="md" />

            <div id="contact">
              <ContactFooter mt={35} logoHeight={40} buttonHeight={28} />
            </div>
          </Flex>
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
}
