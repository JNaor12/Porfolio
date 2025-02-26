import React, { useRef, useState, useEffect } from "react";
import {
  Box,
  Heading,
  Highlight,
  keyframes,
  SimpleGrid,
} from "@chakra-ui/react";
import ComponenteNavLink from "../../ComponenteNavLink.tsx";
import CardTecnologias from "./componentes/CardTecnologias.tsx";
import Card2Tecnologias from "./componentes/Card2Tecnologias.tsx";

// Animación entrada cards
const rightToLeft = keyframes`
  0% {
    transform: translateX(75vw); /* Empieza fuera de la pantalla a la derecha */
  }
  100% {
    transform: translateX(0); /* Termina justo al lado derecho, centrada verticalmente */
  }
`;

const leftToRight = keyframes`
  0% {
    transform: translateX(-75vw); /* Empieza fuera de la pantalla a la derecha */
  }
  100% {
    transform: translateX(0); /* Termina justo al lado derecho, centrada verticalmente */
  }
`;

// Animación entrada con difuminación
const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-20px); /* Puedes ajustar la posición si deseas que suba un poco */
  }

  25%{
    opacticy: 0.5;
  }

  50% {
    opacity: 0.75;

  }

  75%{
    opacity: 0.85;
  }

  100% {
    opacity: 1;
    transform: none; /* Elimina cualquier transformación al finalizar */
  }
`;

// // Animación de máquina de escribir Aun no implementado
// const typewriter = keyframes`
//   from {
//     width: 0;
//   }
//   to {
//     width: 100%;
//   }
// `;

const Tecnologias = () => {
  const [isInView, setIsInView] = useState(false);
  const observerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    // Guardamos el valor actual de observerRef en una variable para evitar cambios durante la limpieza
    const currentRef = observerRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    // Cleanup function
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []); // Dependencias vacías para que solo se ejecute una vez

  return (
    <>
      <ComponenteNavLink />

      {/* Box principal */}
      <Box
        bgImage={"recursos/fondo_dark.jpg"}
        backgroundPosition={"center"}
        color={"white"}
        minH="200vh" // Aumentar la altura para dar más espacio vertical
        paddingTop="2%"
        overflowX="hidden"
        position="relative"
      >
        <Heading
          lineHeight="tall"
          paddingTop={"0.2%"}
          textAlign={"center"}
          className="Orbitron"
          textShadow="1px 1px grey"
          marginBottom={"25px"}
        >
          <Highlight
            query={["Lenguajes y Frameworks"]}
            styles={{
              px: "2",
              py: "1",
              rounded: "full",
              backgroundImage: "url('recursos/Fondo_blanco.jpg')", // Imagen de fondo en el título
              backgroundSize: "cover",
              backgroundPosition: "center",
              boxShadow: "0px 4px 15px #A1A5AC", // Sombra gris suave
              fontFamily: "Orbitron",
            }}
          >
            Lenguajes y Frameworks
          </Highlight>
        </Heading>

        <CardTecnologias
          animacion={`${rightToLeft} 2s ease-out forwards`}
          bgColor={"#F4E11E"}
          imagen={"Tecnologias/JS.png"}
          titulo={"JavaScript"}
          subtitulo={
            "Lenguaje de programación que los desarrolladores utilizan para hacer páginas web interactivas. Desde actualizar fuentes de redes sociales a mostrar animaciones y mapas interactivos, las funciones de JavaScript pueden mejorar la experiencia del usuario de un sitio web."
          }
        />

        <CardTecnologias
          animacion={`${leftToRight} 2s ease-out forwards`}
          bgColor={"#007ACC"}
          imagen={"Tecnologias/ts.png"}
          titulo={"TypeScript"}
          subtitulo={
            "Es un lenguaje de programación libre y de código abierto desarrollado y mantenido por Microsoft. Es un superconjunto de JavaScript, que esencialmente añade tipos estáticos y objetos basados en clases."
          }
        />

        <CardTecnologias
          animacion={`${rightToLeft} 2s ease-out forwards`}
          bgColor={"white"}
          imagen={"Tecnologias/Java.png"}
          titulo={"Java"}
          subtitulo={
            "Java es un lenguaje de programación multiplataforma orientado a objetos que se ejecuta en miles de millones de dispositivos de todo el mundo. Sustenta aplicaciones, sistemas operativos de smartphones, software empresarial y muchos programas conocidos."
          }
        />

        <CardTecnologias
          animacion={`${leftToRight} 2s ease-out forwards`}
          bgColor={"white"}
          imagen={"Tecnologias/xml.png"}
          titulo={"XML"}
          subtitulo={
            "Es un formato simple basado en texto para representar la información de manera estructurada: documentos, datos, configuraciones, libros, transacciones, facturas, y mucho más. Permite definir y almacenar datos de forma compartible. XML admite el intercambio de información entre sistemas de computación, como sitios web, bases de datos y aplicaciones de terceros."
          }
        />

        <CardTecnologias
          animacion={`${rightToLeft} 2s ease-out forwards`}
          bgColor={"transparent"}
          imagen={"img/logo512.png"}
          titulo={"React.JS"}
          subtitulo={
            "Es una biblioteca Javascript de código abierto diseñada para crear interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola página. También tengo conocimientos sobre ReactDOM y ReactBOM"
          }
        />

        <CardTecnologias
          animacion={`${leftToRight} 2s ease-out forwards`}
          bgColor={"transparent"}
          imagen={"Tecnologias/redux.png"}
          titulo={"Redux"}
          subtitulo={
            "Es una librería JavaScript de código abierto para el manejo del estado de las aplicaciones. Es comúnmente usada con otras librerías como React o Angular para la construcción de Interfaces de Usuario."
          }
        />

        <CardTecnologias
          animacion={`${rightToLeft} 2s ease-out forwards`}
          bgColor={"transparent"}
          imagen={"Tecnologias/html5.png"}
          titulo={"HTML 5"}
          subtitulo={
            "Es un estándar que sirve para definir la estructura, el diseño y el contenido de una página web. En realidad, se trata de un código, un lenguaje (HTML) que define los contenidos que forman parte de una página web, como imágenes, texto, vídeos, juegos, marcos, estilo de letra, etc."
          }
        />

        <CardTecnologias
          animacion={`${leftToRight} 2s ease-out forwards`}
          bgColor={"transparent"}
          imagen={"Tecnologias/css3.png"}
          titulo={"CSS 3"}
          subtitulo={
            "Es un lenguaje de diseño gráfico que permite definir y crear la presentación de un documento estructurado escrito en un lenguaje de marcado. Es muy usado para establecer el diseño visual de los documentos web e interfaces de usuario escritas en HTML."
          }
        />

        <CardTecnologias
          animacion={`${rightToLeft} 2s ease-out forwards`}
          bgColor={"transparent"}
          imagen={"Tecnologias/sql.png"}
          titulo={"SQL"}
          subtitulo={
            "Es un lenguaje gestor para el manejo de la información en las bases de datos relacionales. Este tipo de lenguaje de programación permite comunicarse con la base de datos y realizar operaciones de acceso y manipulación de la información almacenada."
          }
        />

        <CardTecnologias
          animacion={`${leftToRight} 2s ease-out forwards`}
          bgColor={"transparent"}
          imagen={"Tecnologias/pl-sql.webp"}
          titulo={"PL/SQL"}
          subtitulo={
            "Lenguaje de programación que proporciona Oracle para extender el SQL estándar con otro tipo de instrucciones y elementos propios de los lenguajes de programación. Con PL/SQL vamos a poder programar las unidades de programa de la base de datos Oracle."
          }
        />

        <CardTecnologias
          animacion={`${rightToLeft} 2s ease-out forwards`}
          bgColor={"transparent"}
          imagen={"Tecnologias/angular.png"}
          titulo={"Angular"}
          marginRight={"10px"}
          subtitulo={
            "Framework de JavaScript de código abierto escrito en TypeScript. Su objetivo principal es desarrollar aplicaciones de una sola página."
          }
        />

        <CardTecnologias
          animacion={`${leftToRight} 2s ease-out forwards`}
          bgColor={"transparent"}
          imagen={"Tecnologias/jquery.png"}
          titulo={"JQuery"}
          subtitulo={
            "Es una biblioteca de JavaScript minificada de código abierto creada para simplificar las operaciones de JavaScript. Puedes utilizar jQuery para codificar rápidamente una serie de comandos diferentes que te llevarían mucho más tiempo si utilizaras código HTML."
          }
        />

        <CardTecnologias
          animacion={`${rightToLeft} 2s ease-out forwards`}
          bgColor={"transparent"}
          imagen={"Tecnologias/SaSS.png"}
          titulo={"SaSS"}
          subtitulo={
            "Es un preprocesador de CSS compatible con todas sus versiones. Por lo tanto, se trata de una herramienta utilizada por los desarrolladores web para traducir un código de hojas de estilo no estándar a un código CSS estándar, legible por la mayoría de los navegadores"
          }
        />

        <CardTecnologias
          animacion={`${leftToRight} 2s ease-out forwards`}
          bgColor={"transparent"}
          imagen={"Tecnologias/sequialize.png"}
          titulo={"Sequialize"}
          marginRight={"26px"}
          subtitulo={
            "Es un ORM que permite a los usuarios llamar a funciones javascript para interactuar con SQL DB sin escribir consultas reales. Es bastante útil para acelerar el tiempo de desarrollo."
          }
        />

        <CardTecnologias
          animacion={`${rightToLeft} 2s ease-out forwards`}
          bgColor={"transparent"}
          imagen={"Tecnologias/python.png"}
          titulo={"Python"}
          marginRight={"26px"}
          subtitulo={
            "Python es un lenguaje de alto nivel de programación interpretado cuya filosofía hace hincapié en la legibilidad de su código. Se trata de un lenguaje de programación multiparadigma, ya que soporta parcialmente la orientación a objetos, programación imperativa y, en menor medida, programación funcional."
          }
        />

        <CardTecnologias
          animacion={`${leftToRight} 2s ease-out forwards`}
          bgColor={"transparent"}
          imagen={"Tecnologias/nextjs.svg"}
          titulo={"Next.JS"}
          marginRight={"26px"}
          subtitulo={
            "Next.js es un marco web de desarrollo front-end de React de código abierto creado por Vercel que habilita funcionalidades como la representación del lado del servidor y la generación de sitios web estáticos para aplicaciones web basadas en React."
          }
        />

        {/* ARREGLAR VISUAL */}

        <CardTecnologias
          animacion={`${rightToLeft} 2s ease-out forwards`}
          bgColor={"transparent"}
          imagen={"Tecnologias/php.png"}
          titulo={"PHP"}
          subtitulo={
            "Es un lenguaje de «scripting» que puede ser embebido en HTML. Gran parte de su sintaxis se toma prestada de C, Java y Perl con un par de características específicas propias de PHP. El objetivo del lenguaje es permitir a los desarrolladores web escribir con rapidez páginas generadas dinámicamente."
          }
        />

        <CardTecnologias
          animacion={`${leftToRight} 2s ease-out forwards`}
          bgColor={"transparent"}
          imagen={"Tecnologias/LESS_Logo.svg.png"}
          titulo={"Less"}
          subtitulo={
            "Funciona como un lenguaje de programación, permitiendo el uso de variables, funciones, operaciones aritméticas, entre otras, para acelerar y enriquecer los estilos en un sitio web."
          }
        />
      </Box>

      <Box
        ref={observerRef} // Referencia para el observer
        bgImage={"recursos/fondo_dark.jpg"}
        backgroundPosition={"center"}
        color={"white"}
        minH="200vh"
        paddingTop="2%"
        position="relative"
        overflowX="hidden"
      >
        <Heading
          lineHeight="tall"
          paddingTop={"0.2%"}
          textAlign={"center"}
          className="Orbitron"
          textShadow="1px 1px grey"
          marginBottom={"25px"}
        >
          <Highlight
            query={["Softwares y Tecnologías"]}
            styles={{
              px: "2",
              py: "1",
              rounded: "full",
              backgroundImage: "url('recursos/Fondo_blanco.jpg')", // Imagen de fondo en el título
              backgroundSize: "cover",
              backgroundPosition: "center",
              boxShadow: "0px 4px 15px #A1A5AC", // Sombra gris suave
              fontFamily: "Orbitron",
            }}
          >
            Softwares y Tecnologías
          </Highlight>
        </Heading>

        <SimpleGrid columns={3} spacing={10}>
          <Box
            overflowX="hidden"
            animation={isInView ? `${fadeIn} 2s ease-out forwards` : ""}
            opacity={0}
          >
            <Card2Tecnologias
              etiqueta={"Linux"}
              titulo={"Linux"}
              subtitulo={
                "Sistema operativo open source, se lanza en virtud de la GPL."
              }
              imagen={"Tecnologias/linux.png"}
            />
          </Box>

          <Box
            opacity={0}
            overflowX="hidden"
            animation={isInView ? `${fadeIn} 2s ease-out forwards` : ""}
          >
            <Card2Tecnologias
              etiqueta={"Linux"}
              titulo={"Ubuntu Server"}
              subtitulo={
                "Edición especializada para servidores con herramientas y servicios."
              }
              imagen={"Tecnologias/Ubuntu.png"}
            />
          </Box>

          <Box
            animation={isInView ? `${fadeIn} 2s ease-out forwards` : ""}
            opacity={0}
          >
            <Card2Tecnologias
              etiqueta={"Git"}
              titulo={"GitHub"}
              subtitulo={
                "GitHub es una plataforma de desarrollo colaborativo para alojar proyectos utilizando el sistema de control de versiones Git."
              }
              imagen={"Tecnologias/Github.png"}
            />
          </Box>

          <Box
            opacity={0}
            animation={isInView ? `${fadeIn} 2s ease-out forwards` : ""}
          >
            <Card2Tecnologias
              etiqueta={"Git"}
              titulo={"Git"}
              subtitulo={
                "Sistema de control de versiones distribuido Opensource que administra códigos de programación"
              }
              imagen={"Tecnologias/Git.png"}
            />
          </Box>

          <Box
            opacity={0}
            animation={isInView ? `${fadeIn} 2s ease-out forwards` : ""}
          >
            <Card2Tecnologias
              etiqueta={"Nginx"}
              titulo={"Nginx"}
              subtitulo={
                "Servidor web que también actúa como proxy de correo electrónico, proxy inverso y balanceador de carga."
              }
              imagen={"Tecnologias/nginx.png"}
            />
          </Box>

          <Box
            opacity={0}
            animation={isInView ? `${fadeIn} 2s ease-out forwards` : ""}
          >
            <Card2Tecnologias
              etiqueta={"Apache"}
              titulo={"Apache Server"}
              subtitulo={
                "Servidor web de código abierto, el más popular de los que encontramos en el mundo de la web."
              }
              imagen={"Tecnologias/apacheserver.png"}
            />
          </Box>

          <Box
            opacity={0}
            animation={isInView ? `${fadeIn} 2s ease-out forwards` : ""}
          >
            <Card2Tecnologias
              etiqueta={"Oracle"}
              titulo={"Oracle Sql Developer"}
              subtitulo={
                "IDE que permite desarrollar y gestionar implementaciones de las bases de datos de Oracle."
              }
              imagen={"Tecnologias/oracle.png"}
            />
          </Box>

          <Box
            opacity={0}
            animation={isInView ? `${fadeIn} 2s ease-out forwards` : ""}
          >
            <Card2Tecnologias
              etiqueta={"Oracle"}
              titulo={"MySql"}
              subtitulo={
                "Sistema de gestión de bases de datos relacional con modelo cliente-servidor."
              }
              imagen={"Tecnologias/mysql.png"}
            />
          </Box>

          <Box
            opacity={0}
            animation={isInView ? `${fadeIn} 2s ease-out forwards` : ""}
          >
            <Card2Tecnologias
              etiqueta={"Oracle"}
              titulo={"NetBeans"}
              subtitulo={
                "IDE integrado libre, orientado principalmente al desarrollo de aplicaciones Java."
              }
              imagen={"Tecnologias/netbeans.png"}
            />
          </Box>

          <Box
            opacity={0}
            animation={isInView ? `${fadeIn} 2s ease-out forwards` : ""}
          >
            <Card2Tecnologias
              etiqueta={"Microsoft"}
              titulo={"Visual Studio Code"}
              subtitulo={"IDE compatible con varios lenguajes de programación."}
              imagen={"Tecnologias/visualstudiocode.png"}
            />
          </Box>

          <Box
            opacity={0}
            animation={isInView ? `${fadeIn} 2s ease-out forwards` : ""}
          >
            <Card2Tecnologias
              etiqueta={"Oracle"}
              titulo={"Oracle Virtual Box"}
              subtitulo={
                "Es un software de virtualización para arquitecturas x86/amd64. Actualmente es desarrollado por Oracle Corporation como parte de su familia de productos de virtualización."
              }
              imagen={"Tecnologias/oracleVirtualBox.png"}
            />
          </Box>

          <Box
            opacity={0}
            animation={isInView ? `${fadeIn} 2s ease-out forwards` : ""}
          >
            <Card2Tecnologias
              etiqueta={"Adobe"}
              titulo={"Photoshop"}
              subtitulo={
                "También tengo algunos conocimientos en esta App para editar y crear imagenes"
              }
              imagen={"Tecnologias/photoshop.png"}
            />
          </Box>
        </SimpleGrid>
      </Box>
    </>
  );
};

export default Tecnologias;
