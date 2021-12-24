import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header";
import { Container } from "./components/styles/Container.styled";
import GlobalStyles from "./components/styles/Global";

const theme = {
  colors: {
    header: "#ebfbff",
    body: "#fff",
    footer: "#003333",
    textColor: "black",
  },
};

const darkTheme = {
  colors: {
    header: "#ebfbff",
    body: "black",
    footer: "#003333",
    textColor: "white",
  },
};

function App() {
  const [dark, setDark] = useState(false);

  return (
    <ThemeProvider theme={dark ? darkTheme : theme}>
      <GlobalStyles />
      <Header />
      <Container>
        <h1
          onClick={() => {
            setDark(!dark);
          }}
        >
          Hello
        </h1>
      </Container>
    </ThemeProvider>
  );
}

export default App;
