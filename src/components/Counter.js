import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";
import { counterAction } from "../Store";

const Counter = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector((state) => state.counter1.counter);
  const show = useSelector((state) => state.counter1.showCounter);

  const toggleCounterHandler = () => {
    dispatch(counterAction.toggle());
  };

  const incrementHandler = () => {
    dispatch(counterAction.increment());
  };
  const decrementHandler = () => {
    dispatch(counterAction.decrement());
  };
  const increseHandler = () => {
    dispatch(counterAction.increase(5));
  };
  const decreaseHandler = () => {
    dispatch(counterAction.decrease(5));
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <p className={classes.value}>{counterValue}</p>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={increseHandler}>Increment 5</button>
        <button onClick={decreaseHandler}>Decrement 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
