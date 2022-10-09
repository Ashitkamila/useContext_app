import React, { useContext } from 'react'
import { CounterContext } from '../contexts/CounterContext'

const ComponentA = () => {
   const {count,resetCount} = useContext(CounterContext); 
  return (
    <div style={{backgroundColor:'green'}}>
      <h1>CounterA-{count}</h1>
      <button onClick={resetCount}>reset</button>
    </div>
  )
}

export default ComponentA
