import { useContext } from "react";
import { CounterContextObj } from "../contexts/ContextProvider";

function Counter4() {
    const { counter, changeCounterP, changeCounterM } = useContext(CounterContextObj);

    return (
        <div className="p-4 bg-rose-100 rounded-xl shadow-md">
            <h1 className="bg-rose-300 text-center font-bold p-2 rounded-t-lg">Counter 4 (Context)</h1>
            <div className="flex flex-col items-center justify-center gap-4 mt-4">
                <h1 className="text-2xl">Value: {counter}</h1>
                <div className="flex gap-2">
                    <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition" onClick={changeCounterP}>+</button>
                    <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition" onClick={changeCounterM}>-</button>
                </div>
            </div>
        </div>
    )
}

export default Counter4;
