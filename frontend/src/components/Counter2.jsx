import { useCounterStore } from "../store/CounterStore";

function Counter2() {
    let newCounter = useCounterStore(state => state.newCounter);
    let incrementCounter = useCounterStore(state => state.incrementCounter);
    let decrementCounter = useCounterStore(state => state.decrementCounter);

    return (
        <div className="p-4 bg-emerald-100 rounded-xl shadow-md">
            <h1 className="bg-emerald-300 text-center font-bold p-2 rounded-t-lg">Counter 2 (Zustand)</h1>
            <div className="flex flex-col items-center justify-center gap-4 mt-4">
                <h1 className="text-2xl">Value: {newCounter}</h1>
                <div className="flex gap-2">
                    <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition" onClick={incrementCounter}>+</button>
                    <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition" onClick={decrementCounter}>-</button>
                </div>
            </div>
        </div>
    )
}

export default Counter2;
