import React from "react";
import { Box, Grid } from "@chakra-ui/react";
import ComponenteNavLink from "../../ComponenteNavLink.tsx";
import ComponenteCard from "../../ComponenteCard.tsx";

const Proyectos = () => {
  return (
    <>
      <ComponenteNavLink/>

      <Box bgColor={"#5A5C5B"} height="100vh" overflowY="hidden">
        <Box p={4} bgColor={"#5A5C5B"} color={"black"} height="100%">
          <Grid
            templateColumns="repeat(3, 1fr)"
            gap={1.5}
            w={"100%"}
            height="100%"
          >
            <ComponenteCard
              imagen="Calculadora.jpg"
              titulo="Calculadora 🖩"
              categoria="App"
              ruta="/calculadora"
            />

            <ComponenteCard
              imagen="busca.webp"
              titulo="💣Busca Minas💣"
              categoria="Juego"
              ruta="/buscaminas"
            />

            <ComponenteCard
              imagen="serpienteBien.jpg"
              titulo="🍎Snake🐍"
              categoria="Juego"
              ruta="/snake"
            />

            <ComponenteCard
              imagen="recursos/commingSoon.jpg"
              titulo="Comming Soon"
              categoria="App"
            />

            <ComponenteCard
              imagen="recursos/commingSoon.jpg"
              titulo="Comming Soon"
              categoria="App"
            />

            <ComponenteCard
              imagen="recursos/commingSoon.jpg"
              titulo="Comming Soon"
              categoria="Juego"
            />
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Proyectos;
