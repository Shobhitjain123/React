import { useRef } from "react";
import { useCounterStore } from "../store/counterStore";

const CounterValue = () => {
  const count = useCounterStore((state) => state.count);

  const renders = useRef(0);
  renders.current += 1;
  console.log("CounterValue render", renders.current);

  return (
    <div>
      <p>CounterValue (selector) — renders: {renders.current}</p>
      <h2>{count}</h2>
    </div>
  );
};

export default CounterValue;
