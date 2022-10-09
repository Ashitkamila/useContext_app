
import { useCounter } from '../contexts/CounterContext'

const ComponentB = () => {
   const {count,increaseCount} = useCounter();
  return (
    <div style={{backgroundColor:'pink'}}>
      <h1>CounterA-{count}</h1>
      <button onClick={increaseCount}>increase</button>
    </div>
  )
}

export default ComponentB
