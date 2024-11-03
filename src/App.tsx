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
        <Stack w={1100} justify="flex-start" align="stretch" gap={0}>
          <Header h={50}></Header>
          <MainDisplay h={500}></MainDisplay>
        </Stack>
      </Group>
    </MantineProvider>
  );
}
