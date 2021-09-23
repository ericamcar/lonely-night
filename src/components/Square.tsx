import React from "react";

type SquareProps = {
  black: boolean;
};

const Square = ({ black, children }: React.PropsWithChildren<SquareProps>) => {
  const fill = black ? "black" : "white";
  const stroke = black ? "white" : "black";
  return (
    <div
      style={{
        color: stroke,
        backgroundColor: fill,
        width: "100%",
        height: "100%",
        border: "1px solid black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
    </div>
  );
};

export default Square;
