import React, { useContext } from 'react'
import { CounterContext } from '../contexts/CounterContext';

const MyCounter = () => {
   const {count,increaseCount,decreaseCount} = useContext(CounterContext); 
  return (
    <div style={{backgroundColor:'brown'}}>
        <h2>Counter-{count}</h2> 
        <button onClick={increaseCount}>increase</button>
        <button onClick={decreaseCount}>decrease</button>
    </div>
  )
}

export default MyCounter
