import { useEffect, useState, useCallback } from "react";
import "../../../App.css";
import { TSquare } from "./types";
import { createBoard, randomizeMines, getMinesAround } from "./helper.tsx";
import React from "react";
import {
  Box,
  Center,
  Heading,
  Button,
  Text,
  Flex,
  Spacer,
} from "@chakra-ui/react";

export default function BuscaMinas() {
  const [rows, setRows] = useState(10);
  const [cols, setCols] = useState(10);
  const [mines, setMines] = useState(10);
  const [squares, setSquares] = useState<TSquare[][]>([]);
  const [isGameOver, setIsGameOver] = useState(false);

  const init = useCallback(() => {
    let squares = createBoard(rows, cols);
    squares = randomizeMines(squares, mines);
    squares = getMinesAround(squares);
    setSquares(squares);
  }, [rows, cols, mines]);

  useEffect(() => {
    init();
  }, [init]);

  const reveal = (rowIdx: number, colIdx: number) => {
    if (squares[rowIdx][colIdx].isRevealed || squares[rowIdx][colIdx].isFlagged)
      return;

    if (squares[rowIdx][colIdx].hasBomb) {
      const updatedSquares = squares.map((row) =>
        row.map((cell) => ({
          ...cell,
          isRevealed: cell.hasBomb ? true : cell.isRevealed,
        }))
      );
      setSquares(updatedSquares);
      setIsGameOver(true);
      setTimeout(() => {
        alert("Game Over!");
        init();
        setIsGameOver(false);
      }, 500);
      return;
    }

    const stack = [{ rowIdx, colIdx }];
    const newSquares = squares.map((row) => row.map((cell) => ({ ...cell }))); // Crear nueva copia del estado

    while (stack.length > 0) {
      const { rowIdx, colIdx } = stack.pop()!;
      const currentCell = newSquares[rowIdx][colIdx];

      if (!currentCell.isRevealed) {
        currentCell.isRevealed = true;
        if (!currentCell.hasBomb && currentCell.neighborBombs === 0) {
          for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
              const newRow = rowIdx + i;
              const newCol = colIdx + j;
              if (
                newRow >= 0 &&
                newRow < rows &&
                newCol >= 0 &&
                newCol < cols &&
                !newSquares[newRow][newCol].hasBomb &&
                !newSquares[newRow][newCol].isRevealed
              ) {
                stack.push({ rowIdx: newRow, colIdx: newCol });
              }
            }
          }
        }
      }
    }
    setSquares(newSquares); // Actualizar el estado con una nueva referencia
  };

  const setFlag = (
    e: React.MouseEvent<HTMLDivElement>,
    rowIdx: number,
    colIdx: number
  ) => {
    e.preventDefault();
    if (squares[rowIdx][colIdx].isRevealed) return;

    const newSquares = [...squares];
    newSquares[rowIdx][colIdx].isFlagged =
      !newSquares[rowIdx][colIdx].isFlagged;

    setSquares(newSquares);
  };

  useEffect(() => {
    const revealed = squares.reduce((acc, row) => {
      return acc + row.reduce((acc2, sq) => acc2 + (sq.isRevealed ? 1 : 0), 0);
    }, 0);

    if (revealed === rows * cols - mines) {
      setTimeout(() => {
        alert("You won!");
        init(); // Reiniciar el juego solo cuando ganas
      }, 300);
    }
  }, [squares, init, rows, cols, mines]); // 🔥 Ahora incluimos todas las dependencias necesarias

  return (
    <>
      <Box>
        <Box bgColor={"#282C34"}>
          <Heading
            bgColor={"#282C34"}
            size="lg"
            fontSize="50px"
            textAlign={"center"}
            color={"white"}
          >
            💣 Busca Minas 💣
          </Heading>
        </Box>

        <Box bgColor={"#282C34"} pt={"20"}>
          <Flex alignItems="center" paddingLeft={"20"} paddingRight={"20"}>
            <Button
              onClick={() => setMines(mines > 1 ? mines - 1 : 1)}
              variant={"solid"}
            >
              {" "}
              - Bombas{" "}
            </Button>

            <Text color="white" mx="2">
              Bombas: {mines}
            </Text>

            <Button
              onClick={() =>
                setMines(mines < rows * cols - 1 ? mines + 1 : mines)
              }
            >
              {" "}
              + Bombas{" "}
            </Button>

            <Spacer />

            <Button
              variant="solid"
              onClick={() => setRows(rows > 5 ? rows - 1 : 5)}
            >
              {" "}
              - Filas{" "}
            </Button>
            <Text color="white" mx="2">
              Filas: {rows}
            </Text>
            <Button variant="solid" onClick={() => setRows(rows + 1)}>
              {" "}
              + Filas{" "}
            </Button>

            <Spacer />

            <Button onClick={() => setCols(cols > 5 ? cols - 1 : 5)}>
              {" "}
              - Columnas{" "}
            </Button>
            <Text color="white" mx="2">
              Columnas: {cols}
            </Text>
            <Button onClick={() => setCols(cols + 1)}> + Columnas </Button>
          </Flex>
        </Box>

        <Box
          bgColor={"#282C34"}
          height="80.4vh"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Center bgColor={"#282C34"}>
            <div className="Buscaminas">
              {squares.map((row, rowIdx) => (
                <div key={rowIdx} className="row">
                  {row.map((square, colIdx) => (
                    <div
                      key={colIdx}
                      className={`square square--${
                        square.isRevealed && "revealed"
                      }`}
                      data-value={square.neighborBombs}
                      onClick={() => reveal(rowIdx, colIdx)}
                      onContextMenu={(e) => setFlag(e, rowIdx, colIdx)}
                    >
                      {isGameOver && square.hasBomb ? (
                        <img
                          src="img/bomba.png"
                          alt="bomba"
                          style={{ width: "100%", height: "100%" }}
                        />
                      ) : (
                        <>
                          {square.isRevealed && square.neighborBombs !== 0
                            ? square.neighborBombs
                            : ""}
                          {square.isFlagged ? "🚩" : ""}
                        </>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </Center>
        </Box>
      </Box>
    </>
  );
}
