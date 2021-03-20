import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import Fonts from "../fonts";
import { theme } from "../theme";
import Main from "../layouts/Main";
const MyApp = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Main>
        <Component {...pageProps} />
      </Main>
    </ChakraProvider>
  );
};

export default MyApp;
