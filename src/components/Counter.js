import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
   increment,
   decrement,
   incrementByAmount,
} from "../redux/counter/counterSlice";
import "../App.css";

function Counter() {
   const counterValue = useSelector((state) => state.counter.value);
   const dispatch = useDispatch();
   console.log(counterValue);

   const [amount, setAmount] = useState(3);

   return (
      <div>
         <div className="desen">
            <h1>{counterValue}</h1>

            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(increment())}>Increment</button>

            <br />
            <br />
            <input
               type="number"
               value={amount}
               onChange={(e) => setAmount(e.target.value)}
            />
            <button onClick={() => dispatch(incrementByAmount(amount))}>
               Increment by Amount
            </button>
         </div>
      </div>
   );
}

export default Counter;
