import { GlobalStyles, TipBar, Container } from "./styles/globalStyles";
import { Helmet } from "react-helmet";
import { ThemeProvider } from "styled-components";
import Theme from "./theme/theme";
import BoxComponent from "./components/Box";
export default function App() {
  return (
    <>
      <Helmet>
        <link
          href="https://fonts.google.com/specimen/Space+Mono"
          rel="stylesheet"
        />
      </Helmet>
      <ThemeProvider theme={Theme}>
        <GlobalStyles />
        <Container>
          <TipBar>
            Spli
            <br />
            tter
          </TipBar>
          <BoxComponent />
        </Container>
      </ThemeProvider>
    </>
  );
}
