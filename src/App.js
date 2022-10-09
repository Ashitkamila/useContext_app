import logo from './logo.svg';
import './App.css';
import MyCounter from './components/MyCounter';
import CounterContextProvider from './contexts/CounterContext';
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';

function App() {
  return (
    <div className="App">
      <CounterContextProvider>
        <MyCounter />
        <ComponentA/>
        <ComponentB/>
      </CounterContextProvider>
    </div>
  );
}

export default App;
