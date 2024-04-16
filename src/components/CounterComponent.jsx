import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../redux/slice/CounterSlice';

const CounterComponent = () => {
    const count = useSelector((state)=> state.counter.value);

    const dispatch = useDispatch();
  return (
    <div>
        <h1>Counter Details</h1>
        <h1>Counter Current Value {count} </h1>

        <button style={{ background: 'red' }} onClick={()=> dispatch(increment())}>Increment</button>
        <button style={{ background: 'green' }} onClick={()=> dispatch(decrement())}>decrement</button>
    </div>
  )
}

export default CounterComponent