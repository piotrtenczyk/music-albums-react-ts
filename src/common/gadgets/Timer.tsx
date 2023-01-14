import React, { useEffect, useState } from "react";

interface TimerProps {
  onReset?: (valueBeforeReset: number) => void;
}

const Timer = (props: TimerProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((count) => {
        return count + 1;
      });
    }, 1000);

    const effectCleanup = () => clearInterval(intervalId);
    return effectCleanup;
  }, []);

  const resetTimer = () => {
    props.onReset?.(count);
    setCount(0);
  };

  return (
    <div className="timer" onClick={resetTimer}>
      {count}
    </div>
  );
};

export default Timer;
