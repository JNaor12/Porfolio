import { Box, Heading } from "@chakra-ui/react";
import React, { useState, useEffect, useCallback, useRef } from "react";

const SnakeGame = () => {
  const boardSize = 20;
  const initialSnake = [{ x: 10, y: 10 }];

  // Guardar initialSnake en un ref para que no se considere como dependencia
  const initialSnakeRef = useRef(initialSnake);

  const generateRandomPosition = () => ({
    x: Math.floor(Math.random() * boardSize),
    y: Math.floor(Math.random() * boardSize),
  });

  const [snake, setSnake] = useState(initialSnake);
  const [direction, setDirection] = useState({ x: 0, y: -1 });
  const [food, setFood] = useState(generateRandomPosition());

  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.key) {
        case "ArrowUp":
          setDirection({ x: 0, y: -1 });
          break;
        case "ArrowDown":
          setDirection({ x: 0, y: 1 });
          break;
        case "ArrowLeft":
          setDirection({ x: -1, y: 0 });
          break;
        case "ArrowRight":
          setDirection({ x: 1, y: 0 });
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Usamos useRef para mantener una referencia al initialSnake
  const resetGame = useCallback(() => {
    setSnake(initialSnakeRef.current); // Usamos el ref para acceder a initialSnake
    setDirection({ x: 0, y: -1 });
    setFood(generateRandomPosition());
  }, []); // No necesitamos agregar initialSnake a las dependencias

  const moveSnake = useCallback(() => {
    setSnake((prevSnake) => {
      const newSnake = [...prevSnake];
      const head = newSnake[0];
      const newHead = { x: head.x + direction.x, y: head.y + direction.y };

      if (checkCollision(newHead, newSnake)) {
        alert("¡Game Over!");
        resetGame();
        return prevSnake;
      }

      newSnake.unshift(newHead);

      if (newHead.x === food.x && newHead.y === food.y) {
        setFood(generateRandomPosition());
      } else {
        newSnake.pop();
      }

      return newSnake;
    });
  }, [direction, food, resetGame]);

  useEffect(() => {
    const interval = setInterval(() => {
      moveSnake();
    }, 200);

    return () => clearInterval(interval);
  }, [moveSnake]);

  const checkCollision = (head, snake) => {
    if (
      head.x < 0 ||
      head.x >= boardSize ||
      head.y < 0 ||
      head.y >= boardSize
    ) {
      return true;
    }
    return snake.some(
      (segment) => segment.x === head.x && segment.y === head.y
    );
  };

  return (
    <div>
      <Box bgColor={"#282C34"} alignItems="start" pt={"25px"}>
        <Heading
          bgColor={"#282C34"}
          size="2xl"
          textAlign={"center"}
          color={"white"}
        >
          🍎 Snake Game 🐍
        </Heading>
      </Box>

      <Box
        bgColor={"#282C34"}
        height="100vh"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        color={"white"}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${boardSize}, 20px)`,
            gridGap: "1px",
          }}
        >
          {Array.from({ length: boardSize * boardSize }).map((_, index) => {
            const x = index % boardSize;
            const y = Math.floor(index / boardSize);
            const isSnake = snake.some(
              (segment) => segment.x === x && segment.y === y
            );
            const isFood = food.x === x && food.y === y;

            return (
              <div
                key={index}
                style={{
                  width: "20px",
                  height: "20px",
                  backgroundColor: isSnake
                    ? "green"
                    : isFood
                    ? "red"
                    : "lightgrey",
                }}
              />
            );
          })}
        </div>
      </Box>
    </div>
  );
};

export default SnakeGame;
