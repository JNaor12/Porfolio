import React from "react";
import { Box } from "@chakra-ui/react";
import ComponenteNavLink from "../../../ComponenteNavLink.tsx";

const CardPrincipal = () => {
  return (
    <>
      <ComponenteNavLink />

      <Box bgColor={"#474955"} color={'white'}>Sobre mí</Box>
    </>
  );
};

export default CardPrincipal;
