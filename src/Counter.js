import React, { useState } from "react";
import Button from "./Button";

var counter = 0;

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setState(state + 1);
  const decrement = () => setState(state - 1);
  const trackCount = () => console.log(counter);

  return (
    <div>
      <Button onClick={increment} label="+" />

      <h2>{count}</h2>

      <Button onClick={decrement} label="-" />

      <Button onClick={trackCount} label="Track Count" />
      <div>Daisies Here</div>
    </div>
  );
}

export default Counter;
