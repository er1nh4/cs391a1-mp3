import {useState} from "react";

export function useCalculator() {
    const [num1, setNum1] = useState("0");
    const [num2, setNum2] = useState("0");
    const [output, setOutput] = useState("0");
    const [color, setColor] = useState("black"); // for negative numbers

    const updateOutput = (value : string) => {
        setOutput(value);
        setColor(Number(value) < 0 ? "red" : "black");
    };


    const doAdd = () => {
        const result = Number(num1) + Number(num2);
        updateOutput(result.toString());
    };

    const doSubtract = () => {
        const result = Number(num1) - Number(num2);
        updateOutput(result.toString());
    };

    const doMultiply = () => {
        const result = Number(num1) * Number(num2);
        updateOutput(result.toString());
    };

    const doDivide = () => {
        const b = Number(num2);
        if (b === 0) {
            updateOutput("Invalid. Cannot divide by zero.");
            return;
        }
        const result = Number(num1) / b;
        updateOutput(result.toString());
    };

    const doPow = () => {
        const result = Math.pow(Number(num1), Number(num2));
        updateOutput(result.toString());
    };

    const clear = () => {
        setNum1("0");
        setNum2("0");
        setOutput("0");
        setColor("black");
    };

    return {
        num1,
        num2,
        setNum1,
        setNum2,
        output,
        color,
        doAdd,
        doSubtract,
        doMultiply,
        doDivide,
        doPow,
        clear,
    };
}