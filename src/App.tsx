import "@mantine/core/styles.css";
import { Flex, MantineProvider, createTheme } from "@mantine/core";
import { Header } from "./Header.tsx";

const theme = createTheme({
  fontFamily: "Nunito Sans, sans-serif",
});

export default function App() {
  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <Flex justify="center">
        <Header></Header>
      </Flex>
    </MantineProvider>
  );
}
