import { useEffect, useState } from "react";

const newTime = () => {
  return new Date().toLocaleTimeString();
};

const Clock = () => {
  const [timeString, setTimeString] = useState<string>(newTime());

  useEffect(() => {
    setInterval(() => {
      setTimeString(newTime());
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <span>{timeString}</span>;
};

export default Clock;
