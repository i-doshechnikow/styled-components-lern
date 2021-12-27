import { useState } from "react";
import { ThemeProvider } from "styled-components";
import Card from "./components/Card";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Container } from "./components/styles/Container.styled";
import GlobalStyles from "./components/styles/Global";
import content from "./content";

const theme = {
  colors: {
    header: "#ebfbff",
    body: "#fff",
    footer: "#003333",
    textColor: "black",
  },
  mobile: "768px",
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
        {content.map((item, index) => (
          <Card item={item} key={index} />
        ))}
        {/* <h1
          onClick={() => {
            setDark(!dark);
          }}
        >
          Hello
        </h1> */}
      </Container>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
