import { Functions } from "./functions";
import Nature from "./nature.jpeg"

export default function Counter() {
  const { count, Increment, Decrement } = Functions();

  return (
    <div className="container flex flex-col items-center">
      <img 
        src={Nature}
        alt="img"
        className="w-1/4 h-1/4"
        />
      <h1>Count: {count}</h1>
      <div>
        <button
          onClick={() => Increment()}
          className="bg-red-600 m-2 px-2 py-1"
        >
          incr +{" "}
        </button>
        <button
          onClick={() => Decrement()}
          className="bg-blue-600 m-2 px-2 py-1"
        >
          decr -{" "}
        </button>
      </div>
    </div>
  );
}
