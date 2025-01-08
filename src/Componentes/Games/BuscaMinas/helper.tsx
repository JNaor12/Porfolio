import { TSquare } from "./types";

export const createBoard = (rows: number, cols: number): TSquare[][] => {
  return Array.from({ length: rows }, () => 
    Array.from({ length: cols }, () => ({
      isRevealed: false,
      isFlagged: false,
      hasBomb: false,
      neighborBombs: 0,
    }))
  );
};

export const randomizeMines = (squares: TSquare[][], mines: number): TSquare[][] => {
  let rows = squares.length;
  let cols = squares[0].length;

  let mineCount = 0;
  while (mineCount < mines) {
    const row = Math.floor(Math.random() * rows);
    const col = Math.floor(Math.random() * cols);
    if (!squares[row][col].hasBomb) {
      squares[row][col].hasBomb = true;
      mineCount++;
    }
  }
  return squares;
};

export const getMinesAround = (squares: TSquare[][]) => {
  for (let i = 0; i < squares.length; i++) {
    for (let j = 0; j < squares[0].length; j++) {
      if (squares[i][j].hasBomb) continue;

      let bombs = 0;
      for (let k = i - 1; k <= i + 1; k++) {
        for (let l = j - 1; l <= j + 1; l++) {
          if (squares?.[k]?.[l]?.hasBomb) bombs++;
        }
      }
      squares[i][j].neighborBombs = bombs;
    }
  }
  return squares;
};
