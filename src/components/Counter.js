import {useState} from "react";
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement, incrementByAmount, decrementByAmount} from '../redux/counter/counterSlice';

function Counter() {
    const [amount, setAmount] = useState();
    const countValue = useSelector(state => state.counter.value);
    const dispatch = useDispatch();
    return (
        <div>
            <h1>{countValue}</h1>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <br/><br/>
            <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)}/>
            <br/>
            <button onClick={() => dispatch(decrementByAmount(amount))}>Decrement by Amount</button>
            <button onClick={() => dispatch(incrementByAmount(amount))}>Increment by Amount</button>
            
        </div>
    )
}

export default Counter