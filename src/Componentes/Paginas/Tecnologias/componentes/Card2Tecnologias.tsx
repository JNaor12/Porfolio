import React from "react";

import { useState } from "react";
import {
  Box,
  Heading,
  Text,
  Img,
  Center,
  useColorModeValue,
} from "@chakra-ui/react";

interface Card2TecnologiasProps {
  imagen: string;
  titulo: string;
  subtitulo: string;
  animacion: string;
  etiqueta: string;
}

export default function Card2Tecnologias({
  etiqueta,
  imagen,
  titulo,
  subtitulo,
  animacion,
}: Card2TecnologiasProps) {
  return (
    <Center py={6}>
      <Box
        w="xs"
        rounded={"sm"}
        my={5}
        mx={[0, 5]}
        overflow={"hidden"}
        bgImage={'Fondo_blanco.jpg'}
        border={"1px"}
        borderColor="black"
        boxShadow={useColorModeValue("6px 6px 0 black", "6px 6px 0 cyan")}
      >
        <Box h={"200px"} borderBottom={"1px"} borderColor="black" >
          <Img
            src={imagen}
            roundedTop={"sm"}
            objectFit="contain"
            h="full"
            w="full"
            alt={"Blog Image"}
          />
        </Box>
        <Box p={4} bg='white'>
          <Box
            bg="black"
            display={"inline-block"}
            px={2}
            py={1}
            color="white"
            mb={2}
          >
            <Text fontSize={"xs"} fontWeight="medium">
              {etiqueta}
            </Text>
          </Box>
          <Heading color={"black"} fontSize={"2xl"} noOfLines={1}>
            {titulo}
          </Heading>
          <Text color={"gray.500"} noOfLines={2}>
            {subtitulo}
          </Text>
        </Box>
      </Box>
    </Center>
  );
}
