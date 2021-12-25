import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');

* {
    box-sizing: border-box;
}

body {
    background: ${(props) => {
      return props.theme.colors.body;
    }};
    // color: hsl(192, 100%, 9%);
    color: ${(props) => {
      return props.theme.colors.textColor;
    }};
    font-family: 'Poppins', sans-serif;
    font-size: 1.15em;
    margin: 0;
    transition: 0.3s;
}

p {
    opacity: 0.6;
    line-height: 1.5;
}

img { 
    max-width: 100%;
}
`;

export default GlobalStyles;
