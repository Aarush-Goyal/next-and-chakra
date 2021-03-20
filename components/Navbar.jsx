import React from "react";
import {
  Link as ChakraLink,
  Box,
  Flex,
  Text,
  Button,
  Stack,
  Spacer,
} from "@chakra-ui/react";
import Link from "next/link";
import {
  FaDev,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const Logo = (props) => {
  return (
    <Box {...props}>
      <Text fontSize="lg" fontWeight="bold">
        Aarush Goyal
      </Text>
    </Box>
  );
};

const NavBar = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavBarContainer {...props}>
      <Logo color="white" />
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
    </NavBarContainer>
  );
};

const CloseIcon = () => (
  <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <title>Close</title>
    <path
      fill="white"
      d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
    />
  </svg>
);

const MenuIcon = () => (
  <svg
    width="24px"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    fill="white"
  >
    <title>Menu</title>
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  </svg>
);

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <CloseIcon /> : <MenuIcon />}
    </Box>
  );
};

const MenuItem = ({ children, link, ...rest }) => {
  return (
    <ChakraLink>
      <Link href={link}>
        <Text display="block" {...rest}>
          {children}
        </Text>
      </Link>
    </ChakraLink>
  );
};

const MenuLinks = ({ isOpen }) => {
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
        <MenuItem link="#hero">Home</MenuItem>
        <MenuItem link="#about">About </MenuItem>
        <MenuItem link="#projects">Projects </MenuItem>
        <Flex display={["flex", "none"]}>
          <MenuItem p="4" link="https://instagram.com/aarushgoyal_">
            <FaInstagram />
          </MenuItem>
          <Spacer />
          <MenuItem p="4" link="https://twitter.com/aarushgoyal_">
            <FaTwitter />
          </MenuItem>
          <Spacer />
          <MenuItem p="4" link="https://www.github.com/Aarush-Goyal">
            <FaGithub />
          </MenuItem>
          <Spacer />
          <MenuItem p="4" link="https://linkedin.com/in/aarush-goyal">
            <FaLinkedin />
          </MenuItem>
          <Spacer />
          <MenuItem p="4" link="https://dev.to/aarushgoyal">
            <FaDev />
          </MenuItem>
        </Flex>
        {/* <MenuItem component="event">
          <Button
            size="sm"
            rounded="md"
            color="primary.500"
            bg="white"
            _hover={{
              bg: ["cyan.100", "cyan.100", "cyan.600", "cyan.600"],
            }}
          >
            Connect with Me
          </Button>
        </MenuItem> */}
        <Spacer />
      </Stack>
    </Box>
  );
};

const NavBarContainer = ({ children, ...props }) => {
  return (
    <Flex
      as="nav"
      position={["fixed", "absolute"]}
      top="0"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      zIndex="100"
      // mb={8}
      p={4}
      bg={["back.800", "back.800", "transparent", "transparent"]}
      color="white"
      {...props}
    >
      {children}
    </Flex>
  );
};

export default NavBar;
