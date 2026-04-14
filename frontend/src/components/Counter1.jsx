import { useCounterStore } from "../store/CounterStore";

function Counter1() {
    let newCounter1 = useCounterStore(state => state.newCounter1);
    let incrementCounter1 = useCounterStore(state => state.incrementCounter1);
    let decrementCounter1 = useCounterStore(state => state.decrementCounter1);

    return (
        <div className="p-4 bg-amber-100 rounded-xl shadow-md">
            <h1 className="bg-amber-300 text-center font-bold p-2 rounded-t-lg">Counter 1 (Zustand)</h1>
            <div className="flex flex-col items-center justify-center gap-4 mt-4">
                <h1 className="text-2xl">Value: {newCounter1}</h1>
                <div className="flex gap-2">
                    <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition" onClick={incrementCounter1}>+</button>
                    <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition" onClick={decrementCounter1}>-</button>
                </div>
            </div>
        </div>
    )
}

export default Counter1;
