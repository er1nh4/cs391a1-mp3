import {useCalculator} from "./useCalculator.tsx";

export default function Calculator() {
    const {
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
    } = useCalculator();

    return (
        <>
            <input type="num" value={num1} onChange={(e) => setNum1(e.target.value)}/>
            <input type="num" value={num2} onChange={(e) => setNum2(e.target.value)}/>

            <div id="buttons">
                <button onClick={doAdd}> + </button>
                <button onClick={doSubtract}> - </button>
                <button onClick={doMultiply}> * </button>
                <button onClick={doDivide}> / </button>
                <button onClick={doPow}> ** </button>
                <button onClick={clear}> clear </button>
            </div>

            <h3 style={{color}}> {output} </h3>
        </>
    )
}