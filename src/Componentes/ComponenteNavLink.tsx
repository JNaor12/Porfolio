import React from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom"; // Importamos el componente Link de react-router-dom

const Links = [
  { name: "Inicio", path: "/inicio" },
  { name: "Proyectos", path: "/proyectos" },
  { name: "Tecnologías", path: "/tecnologias" },
];

const ComponenteNavLink = ({ name, path }) => (
  <Box
    as="div"
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("#282c34", "#15171c"),
    }}
  >
    {/* Usar Link para redirigir a las rutas */}
    <Link to={path}>{name}</Link>
  </Box>
);

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bgImage={"recursos/Banner.jpg"} px={4} color={"white"}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <ComponenteNavLink
                  key={link.name}
                  name={link.name}
                  path={link.path}
                />
              ))}
            </HStack>
          </HStack>

          <Flex alignItems={"center"} zIndex={"1"}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar size={"md"} src={"FA/Perfil Juan2.png"} />
              </MenuButton>
              <MenuList color={"white"} bg={"#474955"}>
                <MenuItem bg={"#474955"} as={Link} to="/sobremi">
                  Sobre mí
                </MenuItem>
                <MenuDivider />
                <MenuItem bg={"#474955"} as={Link} to="/contacto">Contacto</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <ComponenteNavLink
                  key={link.name}
                  name={link.name}
                  path={link.path}
                />
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
