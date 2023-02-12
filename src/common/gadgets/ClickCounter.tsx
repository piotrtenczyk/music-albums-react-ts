import { MouseEventHandler, useState } from "react";

const style = {
  borderRadius: "30%",
  border: "2px solid white",
  padding: "11px",
  fontSize: "21px",
  lineHeight: "8px",
  height: "30px",
  cursor: "pointer",
  userSelect: "none" as "none",
};

const ClickCounter: React.FC = () => {
  const [counter, setCounter] = useState<number>(0);

  const increaseCounter: MouseEventHandler = (e) => {
    setCounter(counter + 1);
  };

  return (
    <div data-testid="clickCounter" style={style} onClick={increaseCounter}>
      {counter}
    </div>
  );
};

export default ClickCounter;
