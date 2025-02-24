import {
  Image,
  Card,
  CardBody,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

interface CardTecnologiasProps {
  imagen: string;
  titulo: string;
  subtitulo: string;
  bgColor: string;
  animacion: string;
  marginRight: string;
}

export default function CardTecnologias({ imagen, titulo, subtitulo, bgColor, animacion, marginRight }: CardTecnologiasProps) {
  return (
    <>
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
        backgroundColor={'transparent'}
        bgImage={'fondo_dark.jpg'}
        left={'25%'}
        color={'white'}
        width={'50%'}
        marginBottom={'25px'}
        animation={animacion} // Añadir la animación
      >
        <Image
          objectFit="contain"
          maxW={{ base: "100%", sm: "200px" }}
          maxH={{ base: "100%", sm: "200px" }}
          marginRight={marginRight}
          src={imagen}
          bgColor={bgColor}
        />

        <Stack>
          <CardBody>
            <Heading size="md">{titulo}</Heading>

            <Text py="2">
              {subtitulo}
            </Text>
          </CardBody>

        </Stack>
      </Card>
    </>
  );
}
