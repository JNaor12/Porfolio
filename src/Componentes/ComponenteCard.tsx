import React from 'react';
import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
} from '@chakra-ui/react';

import { useNavigate } from 'react-router-dom'; // Importar useNavigate

// Definir el tipo de props que va a recibir el componente
interface ComponenteCardProps {
  imagen: string;
  titulo: string;
  categoria: string;
  ruta: string;
}

export default function ComponenteCard({ imagen, titulo, categoria, ruta }: ComponenteCardProps) {  
    const navigate = useNavigate(); // Hook para la navegación

  return (
    <Center py={12} zIndex={0} >
      <Box
        role={'group'}
        p={6}
        maxW={'330px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        _hover={{ cursor: 'pointer' }} // Añadir cursor pointer para indicar que es clickeable
        onClick={() => navigate(ruta)} // Navegar a la ruta al hacer clic

      >
        <Box
          rounded={'lg'}
          mt={-12}
          pos={'relative'}
          height={'230px'}
          overflow={'hidden'} // Asegura que la imagen no se salga del borde al hacer hover
        >
          <Image
            rounded={'lg'}
            height={230}
            width={282}
            objectFit={'cover'}
            src={imagen}
            alt={titulo}
            transition="transform 0.3s ease" // Tiempo de transición para el efecto
            _groupHover={{ transform: 'scale(1.1)' }} // Efecto hover: agrandar un 10%
          />
        </Box>
        <Stack pt={10} align={'center'}>
          <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
            {categoria}
          </Text>
          <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
            {titulo}
          </Heading>
          {/* Opcional: puedes agregar más información aquí */}
        </Stack>
      </Box>
    </Center>
  );
}
