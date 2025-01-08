import React from "react";
import { Box, SimpleGrid, Image, Text, Flex, Tag } from "@chakra-ui/react";
import ComponenteNavLink from "../../ComponenteNavLink.tsx";
import CarrouselFA from "./componentes/CarrouselFA.tsx";
import CarrouselHobby from "./componentes/CarrouselHobby.tsx";

const SobreMi = () => {
  return (
    <>
      <ComponenteNavLink />

      <Box bgImage={"fondo_dark.jpg"}>
        <Box
          bgImage={"recursos/decorao.png"}
          backgroundSize={"100%"}
          backgroundRepeat="no-repeat"
        >
          <Text
            bgClip="text"
            fontSize="6xl"
            fontWeight="extrabold"
            textAlign={"center"}
            paddingTop={"25px"}
            className="inter"
            bgGradient="linear(to-r, white, gray)"
          >
            Algo sobre mí
          </Text>

          <Box className="inter" marginTop={"0.5rem"} textAlign={"center"}>
            <Text fontSize="xl" color={"gray.200"}>
              Una breve introducción de mis gustos y aficiones
            </Text>
          </Box>

          <SimpleGrid
            columns={[2]}
            paddingTop={"6rem"}
            padding={"6rem"}
            spacingY="6rem"
          >
            <Box
              height="36rem"
              maxH={"36rem"}
              width={"50%"}
              maxW={"50%"}
              marginRight={"1rem"}
              marginLeft={"1rem"}
              justifySelf="end" // Alinea el box a la derecha
              boxShadow={"2px 2px 6px 4px grey"} //sombra drcha
            >
              <CarrouselFA></CarrouselFA>
            </Box>

            <Box
              height="36rem"
              width={"50%"}
              justifySelf="start" // Alinea el box a la derecha
              color="white"
              justifyContent="center" // Alinea verticalmente al centro
              alignItems="flex-start" // Alinea el contenido al inicio horizontalmente (izquierda)
              paddingTop={"6rem"}
              className="inter"
            >
              <Flex
                direction="column" // Mantiene los elementos en columna
                height="100%" // Hace que el Flex ocupe toda la altura del Box
                justifyContent="center" // Alinea verticalmente al centro
                alignItems="flex-start" // Alinea el contenido al inicio horizontalmente (izquierda)
                marginLeft={"1rem"}
              >
                <Tag fontSize="lg" color={"#ada497"} as="b" colorScheme="green">
                  Deporte
                </Tag>

                <Text fontSize="3xl" color={"#e5dfd3"} as="b">
                  Fútbol Americano
                </Text>

                <Text fontSize="lg" color={"white"}>
                  El fútbol americano es mi gran pasión y ha sido una parte
                  fundamental de mi vida durante los últimos 8 años
                  convirtiendome en deportista de alto rendimiento. He tenido la
                  oportunidad de competir tanto en ligas andaluzas como en ligas
                  nacionales en España, siempre buscando dar lo mejor de mí en
                  cada partido. Para mí, cada entrenamiento es una oportunidad
                  para crecer y disfrutar de este deporte que me ha enseñado
                  tanto.
                </Text>
              </Flex>
            </Box>

            {/* -- */}

            <Box
              height="36rem"
              width={"50%"}
              marginRight={"1rem"}
              marginLeft={"1rem"}
              justifySelf="end" // Alinea el box a la derecha
              className="inter"
            >
              <Flex
                direction="column" // Mantiene los elementos en columna
                height="100%" // Hace que el Flex ocupe toda la altura del Box
                justifyContent="center" // Alinea verticalmente al centro
                alignItems="flex-start" // Alinea el contenido al inicio horizontalmente (izquierda)
                marginLeft={"1rem"}
              >
                <Tag fontSize="lg" color={"#ada497"} as="b" colorScheme="red">
                  Entretenimiento
                </Tag>

                <Text fontSize="3xl" color={"#e5dfd3"} as="b">
                  Series
                </Text>

                <Text fontSize="lg" color={"white"}>
                  Cuando no estoy ganando yardas en el campo, me encanta
                  perderme en el mundo de las series. Soy un fanático de las
                  risas con The Office (porque, ¿quién no querría trabajar con
                  un jefe como Michael Scott?), y me fascinan las historias de
                  The Umbrella Academy (aunque nunca podré ser amigo de un mono
                  que habla). También tengo un cariño especial por Cómo conocí a
                  vuestra madre, donde cada episodio me recuerda que los amigos
                  son como una buena cerveza: siempre saben mejor cuando se
                  comparten. ¡Las series son mi escape perfecto, y siempre estoy
                  listo para recomendar alguna o discutir el último giro
                  inesperado!.
                </Text>
              </Flex>
            </Box>

            <Box
              height="36rem"
              width={"50%"}
              marginRight={"1rem"}
              marginLeft={"1rem"}
              justifySelf="start" // Alinea el box a la izquierda
              boxShadow={"-2px 2px 6px 4px grey"} //sombra izq
            >
              <CarrouselHobby />
            </Box>

            {/* -- */}

            <Box
              height="36rem"
              width={"50%"}
              marginRight={"1rem"}
              marginLeft={"1rem"}
              justifySelf="end" // Alinea el box a la derecha
              boxShadow={"2px 2px 6px 4px grey"} //sombra drcha
            >
              <Image
                src="FA/dalle.webp"
                alt="Dan Abramov"
                w={"100%"}
                h={"100%"}
                borderRadius={"0.25rem"}
                objectFit="cover"
              />
            </Box>

            <Box
              height="36rem"
              width={"50%"}
              justifySelf="start" // Alinea el box a la derecha
              color="white"
              justifyContent="center" // Alinea verticalmente al centro
              alignItems="flex-start" // Alinea el contenido al inicio horizontalmente (izquierda)
              paddingTop={"6rem"}
              className="inter"
            >
              <Flex
                direction="column" // Mantiene los elementos en columna
                height="100%" // Hace que el Flex ocupe toda la altura del Box
                justifyContent="center" // Alinea verticalmente al centro
                alignItems="flex-start" // Alinea el contenido al inicio horizontalmente (izquierda)
                marginLeft={"1rem"}
              >
                <Tag fontSize="lg" color={"#ada497"} as="b" colorScheme="cyan">
                  Ambición
                </Tag>

                <Text fontSize="3xl" color={"#e5dfd3"} as="b">
                  Master Developer
                </Text>

                <Text fontSize="lg" color={"white"}>
                  Mi principal ambición a día de hoy es convertirme en un gran
                  desarrollador web. Cada línea de código es como una jugada
                  estratégica en el fútbol: hay que planearla bien para que
                  funcione. Me encanta aprender y enfrentar nuevos retos, ya sea
                  dominando un nuevo lenguaje de programación o explorando las
                  últimas tendencias en diseño web. Mi objetivo es crear
                  experiencias digitales que sean tan memorables como mis
                  momentos favoritos en la pantalla. ¡Estoy decidido a dejar mi
                  huella en el mundo del desarrollo web!
                </Text>
              </Flex>
            </Box>
          </SimpleGrid>
        </Box>
      </Box>
    </>
  );
};

export default SobreMi;
