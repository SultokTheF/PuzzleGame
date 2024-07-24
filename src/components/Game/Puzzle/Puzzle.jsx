import { FilledTile, EmptyTile } from "../Tile/Tile";

const Puzzle = ({ shuffledArray, dragOver, dragStart, dropped }) => {
  return (
    <div className="grid grid-cols-4 gap-8 mt-6 px-6 rounded">
      {shuffledArray.map((value, index) => {
        if (value === "")
          return (
            <div key={index}>
              <EmptyTile dragOver={dragOver} dropped={dropped} index={index} />
            </div>
          );
        return (
          <div key={index}>
            <FilledTile index={index} value={value} dragStart={dragStart} />
          </div>
        );
      })}
    </div>
  );
}

export default Puzzle