import {useState,createContext, useContext} from 'react';

export const CounterContext = createContext();

export const useCounter = ()=>useContext(CounterContext);//create custom counter hook

function CounterContextProvider (props){
 const[count,setCount] = useState(0);
    const increaseCount = ()=>{
      setCount(count+1)
    }
    const decreaseCount = ()=>{
        setCount(count-1)
      }
     const resetCount = ()=>{
        setCount(0)
     } 
    // destructure
    const allValues = {count,increaseCount,decreaseCount,resetCount};
    return(
        <CounterContext.Provider value={allValues}>
          {props.children}
        </CounterContext.Provider>
    );
}
export default CounterContextProvider