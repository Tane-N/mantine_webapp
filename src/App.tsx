import "@mantine/core/styles.css";
import { Group, MantineProvider, Stack, createTheme } from "@mantine/core";
import { Header } from "./Header.tsx";
import { MainDisplay } from "./MainDisplay.tsx";

const theme = createTheme({
  fontFamily: "Nunito Sans, sans-serif",
});

export default function App() {
  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <Group justify="center">
        <Stack justify="flex-start" align="stretch" gap={0}>
          <Header h={50} />
          <MainDisplay h={500} />
        </Stack>
      </Group>
    </MantineProvider>
  );
}
