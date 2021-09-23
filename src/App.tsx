import { createContext, useState, useEffect } from "react";
import Board from "./components/Board";

type AppContextType = number[];

export const AppContext = createContext<AppContextType>(null!);

function App() {
  const [knightPosition, setKnightPosition] = useState([0, 0]);

  useEffect(() => {
    moveKnight(1, 2);
  }, []);

  const moveKnight = (toX: number, toY: number) => {
    setKnightPosition([toX, toY]);
  };

  return (
    <AppContext.Provider value={knightPosition}>
      <Board moveKnight={moveKnight} />
    </AppContext.Provider>
  );
}

export default App;
