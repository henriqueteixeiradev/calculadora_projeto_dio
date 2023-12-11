// ## Styles Imports
import * as S from "./styled";

// ## Compoments Imports
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { useState } from "react";

function App() {
  const [currentNumber, setCurrentNumber] = useState("0");
  const [firstNumber, setFirstNumber] = useState("0");
  const [operation, setOperation] = useState("");

  function handleAddNumber(num) {
    setCurrentNumber((prev) => `${prev === "0" ? "" : prev}${num}`);
  }

  function handleOnClear() {
    setCurrentNumber("0");
    setFirstNumber("0");
    setOperation("");
  }

  function handleSumNumber() {
    if (firstNumber === "0") {
      setFirstNumber(currentNumber);
      setCurrentNumber("0");
      setOperation("+");
    } else {
      const sum = parseFloat(firstNumber) + parseFloat(currentNumber);
      setCurrentNumber(String(sum));
      setOperation("");
    }
  }

  function handleMinusNumber() {
    if (firstNumber === "0") {
      setFirstNumber(currentNumber);
      setCurrentNumber("0");
      setOperation("-");
    } else {
      const sum = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation("");
    }
  }

  function handleMultNumber() {
    if (firstNumber === "0") {
      setFirstNumber(currentNumber);
      setCurrentNumber("0");
      setOperation("x");
    } else {
      const sum = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation("");
    }
  }

  function handleDivNumber() {
    if (firstNumber === "0") {
      setFirstNumber(currentNumber);
      setCurrentNumber("0");
      setOperation("/");
    } else {
      const sum = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation("");
    }
  }

  function handleEquals() {
    if (firstNumber !== "0" && operation !== "" && currentNumber !== "0") {
      switch (operation) {
        case "+":
          handleSumNumber();
          break;
        case "-":
          handleMinusNumber();
          break;
        case "x":
          handleMultNumber();
          break;
        case "/":
          handleDivNumber();
          break;
        default:
          break;
      }
    }
  }

  return (
    <S.Container>
      <S.Content>
        <Input value={currentNumber} />
        <S.Row>
          <Button label="x" onClick={handleMultNumber} />
          <Button label="/" onClick={handleDivNumber} />
          <Button label="c" onClick={handleOnClear} />
          <Button label="0" onClick={() => handleAddNumber("0")} />
        </S.Row>
        <S.Row>
          <Button label="7" onClick={() => handleAddNumber("7")} />
          <Button label="8" onClick={() => handleAddNumber("8")} />
          <Button label="9" onClick={() => handleAddNumber("9")} />
          <Button label="-" onClick={handleMinusNumber} />
        </S.Row>
        <S.Row>
          <Button label="4" onClick={() => handleAddNumber("4")} />
          <Button label="5" onClick={() => handleAddNumber("5")} />
          <Button label="6" onClick={() => handleAddNumber("6")} />
          <Button label="+" onClick={handleSumNumber} />
        </S.Row>
        <S.Row>
          <Button label="1" onClick={() => handleAddNumber("1")} />
          <Button label="2" onClick={() => handleAddNumber("2")} />
          <Button label="3" onClick={() => handleAddNumber("3")} />
          <Button label="=" onClick={handleEquals} />
        </S.Row>
      </S.Content>
    </S.Container>
  );
}

export default App;
