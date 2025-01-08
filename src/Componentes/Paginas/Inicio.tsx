import React, { useEffect, useState } from "react";
import { Box, Image, SimpleGrid, Text } from "@chakra-ui/react";
import ComponenteNavLink from "../ComponenteNavLink.tsx";

const Inicio = () => {
  const [displayedTexts, setDisplayedTexts] = useState(["", "", ""]);
  const fullTexts = [
    "Naor Kadosh es un apasionado desarrollador de aplicaciones web con una insaciable curiosidad por aprender y crecer junto a sus compañeros de trabajo. Desde sus inicios en el mundo del desarrollo, ha demostrado un fuerte compromiso con la mejora continua y la adquisición de experiencia práctica.",
    "Realizó sus prácticas en Unknown Gravity, donde tuvo la oportunidad de aplicar sus conocimientos y aprender de profesionales experimentados en el campo. Su enfoque colaborativo, resolutivo, su creatividad y su deseo de enfrentar nuevos desafíos lo han llevado a explorar diferentes aspectos del desarrollo web.",
    "Con una sólida base en programación y diseño, Naor está listo para dar el siguiente paso en su carrera, buscando constantemente oportunidades para expandir sus habilidades y contribuir al éxito de su equipo."
  ];

  useEffect(() => {
    let currentParagraph = 0;
    let currentChar = 0;

    const typeEffect = () => {
      if (currentParagraph < fullTexts.length) {
        if (currentChar < fullTexts[currentParagraph].length) {
          setDisplayedTexts((prev) => {
            const newTexts = [...prev];
            newTexts[currentParagraph] = fullTexts[currentParagraph].slice(0, currentChar + 1);
            return newTexts;
          });
          currentChar++;
          setTimeout(typeEffect, 15);
        } else {
          currentParagraph++;
          currentChar = 0;
          setTimeout(typeEffect, 500);
        }
      }
    };

    typeEffect();
  }, []);

  // Función para resaltar palabras en negrita
  const highlightWords = (text) => {
    const wordsToHighlight = ["Naor", "Kadosh", "Unknown Gravity"];
    const regex = new RegExp(`(${wordsToHighlight.join("|")})`, "gi");

    return text.split(regex).map((part, index) =>
      wordsToHighlight.includes(part) ? (
        <Text as="span" fontWeight="bold" key={index}>
          {part}
        </Text>
      ) : (
        part
      )
    );
  };

  return (
    <>
      <ComponenteNavLink />

      <Box bgImage={"fondo_dark.jpg"} height="93vh">
        <SimpleGrid columns={2} spacing={10} height="100%" alignItems="center">
          <Box display="flex" justifyContent="right" alignItems="center">
            <Image
              boxSize="500px"
              src="Perfil Juan2.png"
              alt="Perfil"
              borderRadius="lg"
              boxShadow="0px 0px 30px 15px grey"
            />
          </Box>

          <Box paddingRight={"200px"} color={"white"}>
            <Text width="100%" maxWidth="600px">
              {highlightWords(displayedTexts[0])}
            </Text>
            <br />
            <Text width="100%" maxWidth="610px">
              {highlightWords(displayedTexts[1])}
            </Text>
            <br />
            <Text width="100%" maxWidth="600px">
              {highlightWords(displayedTexts[2])}
            </Text>
          </Box>
        </SimpleGrid>
      </Box>
    </>
  );
};

export default Inicio;
