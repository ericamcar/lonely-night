import React, { useContext } from "react";
import Knight from "./Knight";
import Square from "./Square";
import { AppContext } from "../App";

const Board = ({
  moveKnight,
}: React.PropsWithChildren<{
  moveKnight: (toX: number, toY: number) => void;
}>) => {
  const knightPosition = useContext(AppContext);
  const squares = [];

  const renderSquare = (i: number, [knightX, knightY]: number[]) => {
    const x = i % 8;
    const y = Math.floor(i / 8);
    const black = (x + y) % 2 === 1;
    const isKnightHere = knightX === x && knightY === y;
    const piece = isKnightHere ? <Knight /> : null;

    const handleClick = (event: React.MouseEvent, x: number, y: number) => {
      moveKnight(x, y);
    };

    return (
      <div
        onClick={(e) => handleClick(e, x, y)}
        style={{
          width: "12.5%",
          height: "12.5%",
          border: "1px solid black",
        }}
        key={i}
      >
        <Square black={black} key={i}>
          {piece}
        </Square>
      </div>
    );
  };

  for (let i = 0; i < 64; i++) {
    squares.push(renderSquare(i, knightPosition));
  }

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {squares}
    </div>
  );
};

export default Board;
