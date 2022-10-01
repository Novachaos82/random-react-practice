import Board from "./Board";
import { useLocalStorageState } from "./utils";

const Game = () => {
  const [currentStep, setCurrentStep] = useLocalStorageState("tictacSteps", 0);
  const [history, setHistory] = useLocalStorageState("tictacHistory", [
    Array(9).fill(null),
  ]);

  console.log(history);

  function calculateStatus(winner, squares, nextValue) {
    return winner
      ? `Winner: ${winner}`
      : squares.every(Boolean)
      ? `Scratch: Cat's game`
      : `Next player: ${nextValue}`;
  }

  // eslint-disable-next-line no-unused-vars
  function calculateNextValue(squares) {
    console.log(squares.filter(Boolean).length + "length");
    return squares.filter(Boolean).length % 2 === 0 ? "X" : "O";
  }

  // eslint-disable-next-line no-unused-vars
  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }

  const currentSquares = history[currentStep];
  const nextValue = calculateNextValue(currentSquares);
  const winner = calculateWinner(currentSquares);
  const status = calculateStatus(winner, currentSquares, nextValue);

  const selectSquare = (square) => {
    if (winner || currentSquares[square] !== null) {
      return;
    }

    const newHistory = history.slice(0, currentStep + 1);
    const squaresCopy = [...currentSquares];
    squaresCopy[square] = nextValue;

    setHistory([...newHistory, squaresCopy]);
    //console.log('\n' + newHistory + 'current sqr')
    console.log(currentStep + "currStep");
    setCurrentStep(newHistory.length);
  };

  const restart = () => {
    setHistory([Array(9).fill(null)]);
    setCurrentStep(0);
  };

  const moves = history.map((stepSquares, step) => {
    const desc = step === 0 ? "go to game start " : `go to move #${step}`;
    const isCurrentStep = step === currentStep;
    return (
      <li key={step}>
        <button
          disabled={isCurrentStep}
          className="bg-red-500 text-white p-2 disabled:opacity-40 "
          onClick={() => setCurrentStep(step)}
        >
          {desc}
          {isCurrentStep ? "(current)" : null}
        </button>
      </li>
    );
  });
  return (
    <div className="game">
      <div className="game-board">
        <Board onClick={selectSquare} squares={currentSquares} />
        <button
          className="bg-green-500 font-semibold p-2 text-white"
          onClick={restart}
        >
          restart
        </button>
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
};

export { Game };
