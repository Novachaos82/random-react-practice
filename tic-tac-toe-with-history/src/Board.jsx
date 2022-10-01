function Board({ onClick, squares }) {
  function renderSquare(i) {
    return (
      <button
        className="w-5 cursor-pointer h-5 border border-black flex justify-center items-center"
        onClick={() => onClick(i)}
      >
        {squares[i]}
      </button>
    );
  }

  return (
    <div>
      <div className="flex flex-row gap-2 mb-2">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="flex flex-row gap-2 mb-2">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="flex flex-row gap-2 mb-2">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}

export default Board;
