import React, { useState, useEffect } from "react";
import { Text, Image, Box, Container, keyframes, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; 

// Definir los keyframes para la animación
const animationKeyframes = keyframes`
  0% { transform: scale(1) rotate(0); border-radius: 20%; }
  25% { transform: scale(1) rotate(180deg); border-radius: 20%; }
  50% { transform: scale(1) rotate(180deg); border-radius: 50%; }
  75% { transform: scale(1) rotate(360deg); border-radius: 50%; }
  100% { transform: scale(1) rotate(360deg); border-radius: 100%; }
`;

// Definir la animación
const animation = `${animationKeyframes} 2s ease-in-out`;

export default function ComponenteLogo() {
  // Estado para controlar la animación y el estilo final
  const [isAnimating, setIsAnimating] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const navigate = useNavigate(); // Hook para navegar entre rutas

  const handleClick = () => {
    setIsAnimating(!isAnimating);
  };

  // useEffect para manejar la animación y la redirección
  useEffect(() => {
    let timeout1;
    let timeout2;
    if (isAnimating) {
      // Tiempo de espera para finalizar la animación
      timeout1 = setTimeout(() => {
        setHasAnimated(true);
      }, 2000); // Duración de la animación

      // Tiempo de espera para redirigir
      timeout2 = setTimeout(() => {
        navigate("/inicio"); // Redirigir a la página "Inicio"
      }, 3500); // 2000ms de animación + 1000ms de espera adicional
    }
    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, [isAnimating, navigate]);

  return (
    <>
      <Container
        h="50vh"
        w="50vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        zIndex={1}
      >
        <Box
          as={motion.div}
          animation={isAnimating ? animation : "none"} // Aplicar la animación si isAnimating es true
          padding="2"
          bg={"transparent"}
          width="320"
          height="320"
          display="flex"
          onClick={handleClick} // Iniciar animación al hacer clic
          cursor="pointer" // Cambiar el cursor para indicar que es interactivo
          borderRadius={hasAnimated ? "100%" : "20%"} // Aplicar el border-radius final
          opacity={hasAnimated ? 0 : 1} // Desvanecer el elemento después de la animación
          transition="opacity 2s ease-in-out" //
        >
          <Image src={hasAnimated ? "img/Boton_Verde.png" : "img/Boton_Rojo.png"} />
        </Box>
      </Container>

      {isAnimating && ( // Mostrar el texto solo si se hace clic
        <Flex color="white" zIndex={1}>
          <Text
            opacity={hasAnimated ? 0 : 1} // Disminuir opacidad a la vez que la imagen
            transition="opacity 2s ease-in-out"
            as="b"
          >
            Cargando porfolio
          </Text>
          <Box>
            <Text
              marginTop={"12px"}
              marginLeft={"5px"}
              className="loading loading-dots loading-lg"
              opacity={hasAnimated ? 0 : 1} // Disminuir opacidad a la vez que la imagen
              transition="opacity 2s ease-in-out"
            ></Text>
          </Box>
        </Flex>
      )}
    </>
  );
}
