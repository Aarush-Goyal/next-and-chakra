import { Flex, Heading, Image } from "@chakra-ui/react";
const Hero = () => {
  return (
    <Flex
      width="100%"
      height="100vh"
      backgroundColor="back.800"
      // backgroundImage="linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('/back.png')"
      // backgroundPosition="top"
      align="center"
      justify="center"
      direction="column"
    >
      <Heading color="white" fontSize={["3xl", "5xl"]}>
        Konichiwa 👋
      </Heading>
    </Flex>
  );
};

export default Hero;
