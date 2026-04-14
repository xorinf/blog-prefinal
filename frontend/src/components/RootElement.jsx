import Counter1 from "./Counter1"
import Counter2 from "./Counter2"
import Counter3 from "./Counter3"
import Counter4 from "./Counter4"

function RootElement() {
    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 p-6 bg-white rounded-2xl shadow-lg border border-gray-200">
            <Counter1 />
            <Counter2 />
            <Counter3 />
            <Counter4 />
        </div>
    )
}

export default RootElement;
