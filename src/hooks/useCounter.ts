import { useState } from 'react';

export const useCounter = () => {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount((prev) => prev + 1);
  }

  function handleDecrement() {
    setCount((prev) => (prev >= 1 ? prev - 1 : 0));
  }

  return { count, handleIncrement, handleDecrement };
};
