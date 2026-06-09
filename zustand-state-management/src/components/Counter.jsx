import { useRef } from "react";
import { useCounterStore } from "../store/counterStore";

const Counter = () => {
  const { count, increase, decrease, reset, bumpOther } = useCounterStore();

  const renders = useRef(0);
  renders.current += 1;
  console.log("Counter render", renders.current);

  return (
    <div>
      <p>Counter (no selector) — renders: {renders.current}</p>
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
      <button onClick={reset}>Reset</button>
      <button onClick={bumpOther}>Bump other</button>
    </div>
  );
};

export default Counter;
