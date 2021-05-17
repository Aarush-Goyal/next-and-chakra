import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import Fonts from "../fonts";
import { theme } from "../theme";
const MyApp = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />

      <Component {...pageProps} />

    </ChakraProvider>
  );
};

export default MyApp;
