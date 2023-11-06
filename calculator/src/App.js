import { useReducer } from "react/cjs/react.development";
import "./styles.css";

function App() {
  const ACTIONS={
    ADD_DIGIT : 'add-digit',
    CLEAR : 'clear',
    REMOVE_DIGIT:'delete-digit',
    CHOOSE_OPERATION :'choose',
    EVALUATE:'evaluate'
  }
  function reducer(state,{type,payload}){

  }
  const [{currentOperand, previousOperand, operation}, dispatch] = useReducer(reducer,{})
  return (
    <div className="calculator-grid">
      <div className="result-output">
        <div className ="previous-typed-input">{previousOperand} {operation}</div>
        <div className ="current-typed-input">{currentOperand}</div>
      </div>
      <button className="span-two">AC</button>
      <button >DEL</button>
      <button>/</button>
      <button >1</button>
      <button >2</button>
      <button >3</button>
      <button >*</button>
      <button >4</button>
      <button >5</button>
      <button >6</button>
      <button >+</button>
      <button >7</button>
      <button >8</button>
      <button >9</button>
      <button >-</button>
      <button >.</button>
      <button >0</button>
      <button className="span-two">=</button>      
    </div>
  );
}

export default App;
