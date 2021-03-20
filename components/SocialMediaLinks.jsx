import { Flex, Link } from "@chakra-ui/react";
import {
  FaGithub,
  FaDev,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
const SocialMediaLinks = () => {
  return (
    <Flex
      position="fixed"
      display={["none", "flex"]}
      bottom="0"
      justify="space-evenly"
      align="center"
      zIndex="11"
      direction="column"
      height="35vh"
      padding="4"
    >
      <Link href="https://www.github.com/Aarush-Goyal">
        <FaGithub m="2" p="2" size="25" color="white" />
      </Link>
      <Link href="https://dev.to/aarushgoyal">
        <FaDev m="2" p="2" size="25" color="white" />
      </Link>
      <Link href="https://linkedin.com/in/aarush-goyal">
        <FaLinkedin m="2" p="2" size="25" color="white" />
      </Link>
      <Link href="https://twitter.com/aarushgoyal_">
        <FaTwitter m="2" p="2" size="25" color="white" />
      </Link>
      <Link href="https://instagram.com/aarushgoyal_">
        <FaInstagram m="2" p="2" size="25" color="white" />
      </Link>
    </Flex>
  );
};

export default SocialMediaLinks;
