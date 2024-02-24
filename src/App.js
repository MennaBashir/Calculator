import './App.css';
import { useReducer } from 'react';
import DigitButton from "./DigitButton";
import OperationButton from "./OperationButton";
import { THEMES1,THEMES2,THEMES3 } from "./Theme";


export const ACTIONS = {
  ADD_DIGIT: "add-digit",
  CHOOSE_OPERATION: "choose-operation",
  CLEAR: "clear",
  DELETE_DIGIT: "delete-digit",
  EVALUATE: "evaluate"
}

function reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      if (state.overWrite) {
        return {
          ...state,
          currentOperand: payload.digit,
          overWrite: false,
        }
      }
      if (payload.digit === "0" && state.currentOperand === "0")
        return state;
      if (payload.digit === "." && state.currentOperand.includes("."))
        return state;
      return {
        ...state,
        currentOperand: `${state.currentOperand || ""}${payload.digit}`,
      }
    case ACTIONS.CLEAR:
      return {};
    case ACTIONS.DELETE_DIGIT:
      if (state.overWrite) {
        return {
          ...state,
          overWrite: false,
          currentOperand: null
        }
      }
      if (state.currentOperand == null)
        return state;
      if (state.currentOperand.length === 1)
        return { ...state, currentOperand: null };
      return {
        ...state,
        currentOperand: state.currentOperand.substr(0, state.currentOperand.length - 2)
      }
    case ACTIONS.CHOOSE_OPERATION:
      if (state.currentOperand == null && state.previousOperand == null)
        return state;
      if (state.previousOperand == null) {
        return {
          ...state,
          operation: payload.operation,
          previousOperand: state.currentOperand,
          currentOperand: null,
        }
      }
      if (state.currentOperand == null) {
        return {
          ...state,
          operation: payload.operation
        }
      }
      return {
        ...state,
        previousOperand: evaluate(state),
        operation: payload.operation,
        currentOperand: null
      }
    case ACTIONS.EVALUATE:
      if (state.operation == null || state.currentOperand == null || state.previousOperand == null)
        return state;
      return {
        ...state,
        overWrite: true,
        previousOperand: null,
        operation: null,
        currentOperand: evaluate(state)
      }
  }
}
function evaluate({ currentOperand, previousOperand, operation }) {
  const prev = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);
  if (isNaN(prev) || isNaN(current))
    return "";
  let computation = "";
  switch (operation) {
    case "+":
      computation = prev + current;
      break;
    case "/":
      computation = prev / current;
      break;
    case "-":
      computation = prev - current;
      break;
    case "×":
      computation = prev * current;
      break;
  }
  return computation.toString();
}
function App() {
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(reducer, {});

  return (
    <div className="calculator">
      <header>
        <h2>calc</h2>
        <div className="theme">
          <h4>THEME</h4>
          <ul>
            <li className="active1" onClick={() => THEMES1()}>1</li>
            <li className="active2" onClick={() => THEMES2()}>2</li>
            <li className="active3" onClick={() => THEMES3()}>3</li>
          </ul>
        </div>
      </header>
      <aside>

        <div className="previous">{previousOperand} {operation}</div>
        <div className="current">{currentOperand}</div>
      </aside>
      <main>
        <div className="body">

          <DigitButton digit="7" dispatch={dispatch} />
          <DigitButton digit="8" dispatch={dispatch} />
          <DigitButton digit="9" dispatch={dispatch} />
          <button className="del" onClick={() => dispatch({ type: ACTIONS.DELETE_DIGIT })}>DEL</button>
          <DigitButton digit="4" dispatch={dispatch} />
          <DigitButton digit="5" dispatch={dispatch} />
          <DigitButton digit="6" dispatch={dispatch} />
          <OperationButton operation="+" dispatch={dispatch} />
          <DigitButton digit="1" dispatch={dispatch} />
          <DigitButton digit="2" dispatch={dispatch} />
          <DigitButton digit="3" dispatch={dispatch} />
          <OperationButton operation="-" dispatch={dispatch} />
          <DigitButton digit="." dispatch={dispatch} />
          <DigitButton digit="0" dispatch={dispatch} />
          <OperationButton operation="/" dispatch={dispatch} />
          <OperationButton operation="×" dispatch={dispatch} />
          <button className="reset" onClick={() => dispatch({ type: ACTIONS.CLEAR })}>RESET</button>
          <button className="equal" onClick={() => dispatch({ type: ACTIONS.EVALUATE })}>=</button>
        </div>
      </main>

    </div>

  );
}

export default App;
