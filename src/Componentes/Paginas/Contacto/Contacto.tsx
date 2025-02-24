import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { ReactElement } from "react";
import { VscGithubInverted } from "react-icons/vsc";
import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import ComponenteNavLink from "../../ComponenteNavLink.tsx";

interface CardProps {
  heading: string;
  description: string;
  icon: ReactElement;
  href: string;
  enlace: string; // Asegúrate de que `enlace` esté incluido aquí
}

const Card = ({ heading, description, icon, href, enlace }: CardProps) => {
  return (
    <Box
      maxW={{ base: "full", md: "275px" }}
      w={"full"}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}
      bgImage={"fondo_dark.jpg"}
    >
      <Stack align={"start"} spacing={2}>
        <Flex
          w={16}
          h={16}
          align={"center"}
          justify={"center"}
          color={"white"}
          rounded={"full"}
          bg={useColorModeValue("gray.100", "gray.700")}
        >
          {icon}
        </Flex>
        <Box mt={2}>
          <Heading size="md">{heading}</Heading>
          <Text mt={1} fontSize={"sm"}>
            {description}
          </Text>
        </Box>
        <Button
          as="a"
          href={href}
          variant={"link"}
          colorScheme={"blue"}
          size={"sm"}
          target="_blank"
          rel="noopener noreferrer"
        >
          {enlace}
        </Button>
      </Stack>
    </Box>
  );
};

const Contacto = () => {
  return (
    <>
      <ComponenteNavLink />
      <Box
        bgImage={"fondo_dark.jpg"}
        w={"100%"}
        minH={"93vh"}
        overflow="hidden"
        display="flex"
        flexDirection="column"
      >
        <Box
          bgImage={"recursos/purpleBorder.png"}
          backgroundPosition={"center"}
          backgroundSize={'70%'}
          backgroundRepeat={"no-repeat"}
          w={"100%"}
          minH={"93vh"}
        >
          <Box>
            <Text
              bgClip="text"
              fontSize="6xl"
              fontWeight="extrabold"
              textAlign={"center"}
              className="inter"
              bgGradient="linear(to-r, white, #481FE9)"
              textShadow={"#FE76FF 1px 0 5px"}
            >
              ¡ Contacta conmigo !
            </Text>
          </Box>

          <Box paddingTop={"20px"}>
            <Container maxW={"5xl"} mt={100}>
              <Flex flexWrap="wrap" gridGap={6} justify="center">
                {/* <Card
                  heading={"Teléfono"}
                  icon={
                    <Icon as={MdPhoneAndroid} w={10} h={10} color={"black"} />
                  }
                  description={"+34 622 38 39 38"}
                  href={"tel:+34622383938"} // Enlace para llamar
                  enlace={"¡ Llámame !"}
                /> */}
                <Card
                  heading={"Currículum"}
                  icon={<Icon as={IoMdDownload} w={10} h={10} color={"grey"} />}
                  description={"Descarga mi CV aquí"}
                  href={"Currículum Vitae CV Carnet.pdf"} // Enlace para descargar
                  enlace={"Descargar"}
                />
                <Card
                  heading={"Linkedin"}
                  icon={
                    <Icon as={FaLinkedin} w={10} h={10} color={"#0A63BC"} />
                  }
                  description={"¡Accede a mi perfil de Linkedin!"}
                  href={"https://www.linkedin.com/in/juan-naor-k-a8b9292aa/"} // Enlace a Linkedin
                  enlace={"Juan Naor Kadosh Peña"}
                />
                <Card
                  heading={"Correo Electrónico"}
                  icon={<Icon as={SiGmail} w={10} h={10} color={"red"} />}
                  description={"guannaor@gmail.com"}
                  href={"mailto:guannaor@gmail.com"} // Enlace para enviar correo
                  enlace={"¡ Mandame un correo !"}
                />
                <Card
                  heading={"Git Hub"}
                  icon={
                    <Icon
                      as={VscGithubInverted}
                      w={10}
                      h={10}
                      color={"black"}
                    />
                  }
                  description={"Git Hub"}
                  href={"https://github.com/JNaor12"} // Enlace a GitHub
                  enlace={"Visíta mi Git Hub"}
                />
              </Flex>
            </Container>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Contacto;
