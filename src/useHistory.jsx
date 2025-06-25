import { useEffect, useState } from "react";

function Timer() {
  const [count, setCount] = useState(0);

  // componentDidMount
  useEffect(() => {
    console.log("Timer component mounted");
  }, []);

  // componentDidUpdate for count
  useEffect(() => {
    console.log("Count changed:", count);
  }, [count]);

  // componentWillUnmount
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
      console.log("Timer component unmounted");
    };
  }, []);

  return <h2>Count: {count}</h2>;
}
export default Timer