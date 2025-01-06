import React, { useState, useEffect } from "react";
import { Button, Icon, useColorMode } from "@chakra-ui/react";
import { FaArrowUp } from "react-icons/fa";
import { motion } from "framer-motion";

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const { colorMode } = useColorMode();

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 1200); // Aparece após rolar 1200px
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Rolagem suave
    });
  };

  const MotionButton = motion(Button);

  return (
    <>
      {isVisible && (
        <MotionButton
          position="fixed"
          bottom="20px"
          right="20px"
          bgColor={colorMode === "dark" ? "messenger.800" : "messenger.500"}
          color={colorMode === "dark" ? "" : "white"}
          borderRadius="full"
          size="md"
          onClick={scrollToTop}
          zIndex="1000"
          shadow="md"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5, 
            ease: "easeInOut",
          }}
          _hover={{
            transform: "translateY(-5px) scale(1.1)", // Eleva e aumenta o botão no hover
            bgColor: colorMode === "dark" ? "messenger.900" : "messenger.600",
          }}
        >
          <Icon as={FaArrowUp} />
        </MotionButton>
      )}
    </>
  );
}
