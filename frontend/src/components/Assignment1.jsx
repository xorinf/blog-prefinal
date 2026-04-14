import RootElement from "./RootElement"

function Assignment1() {
  return (
    <div className="space-y-8">
      <div className="bg-blue-600 text-white p-8 rounded-3xl shadow-xl">
        <h1 className="text-4xl font-extrabold mb-2 text-center">Assignment 1</h1>
        <p className="text-blue-100 text-center text-lg opacity-90">Implementing Counter Logic with Zustand and Context API</p>
      </div>
      <RootElement />
    </div>
  )
}

export default Assignment1;
