import { Link } from "react-router";

function Home() {
  return (
    <div className="flex flex-col gap-10">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-12 rounded-3xl shadow-2xl">
        <h1 className="text-5xl font-extrabold mb-4">Employee Management</h1>
        <p className="text-xl text-blue-100 max-w-2xl mb-8 opacity-90">
          Create delete employees, also context and zustand
        </p>
        <div className="flex gap-4">
          <Link 
            to="/ListOfEmployee" 
            className="px-8 py-4 bg-white text-blue-600 font-bold rounded-2xl transition transform shadow-lg"
          >
            View Employee List
          </Link>
          <Link 
            to="/CreateEmployee" 
            className="px-8 py-4 bg-blue-500 text-white font-bold rounded-2xl border-blue-400 transition transform shadow-lg"
          >
            + Create New Employee
          </Link>
        </div>
      </div>

      {/* Quick Access Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Link to="/Assignment1" className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:border-orange-300 transition group">
          <h2 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-orange-600">Assignment 1</h2>
          <p className="text-gray-500">Implementing Counter Logic with Zustand and Context API</p>
        </Link>
        <Link to="/Assignment2" className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:border-purple-300 transition group">
          <h2 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-purple-600">Assignment 2</h2>
          <p className="text-gray-500">Implementing User Management with API fetching and updating count dynamically</p>
        </Link>
        <Link to="/Assignment3" className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:border-blue-300 transition group">
          <h2 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-blue-600">Assignment 3</h2>
          <p className="text-gray-500">User creating with dynamic table rendering.</p>
        </Link>
      </div>
    </div>
  )
}

export default Home;