import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router'
function ListOfEmployee() {
  const [emps, setEmps] = useState([]);
  const navigate = useNavigate()

  const gotoEmployee = (empObj) => {
    navigate("/employee", { state: empObj });
  };
  const gotoEditEmployee = (empObj) => {
    navigate("/edit-emp", { state: empObj })
  }
  const deleteById = async (id) => {
    let res = await axios.delete(`${import.meta.env.VITE_API_URL}/emp/employee/${id}`)
    if (res.status == 200) { getEmps(); }
  }
  async function getEmps() {
    let res = await fetch(`${import.meta.env.VITE_API_URL}/emp/employee`);
    if (res.status === 200) {
      let resObj = await res.json();
      setEmps(resObj.payload);
    }
  }
  useEffect(() => {
    getEmps();
  }, []);

  return (
    <div className="space-y-8">
      <h1 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800">List Of Employees</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {emps.map((empObj) => (
          <div key={empObj._id} className="bg-white p-6 rounded-3xl shadow-lg border border-gray-100 flex flex-col items-center text-center group hover:shadow-2xl transition-all duration-300">
            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors duration-300">
              <span className="text-2xl font-bold text-blue-600 group-hover:text-white">{empObj.name.charAt(0)}</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-1">{empObj.name}</h3>
            <p className="text-sm text-gray-500 mb-6">{empObj.email}</p>
            
            <div className="mt-auto w-full grid grid-cols-1 gap-2">
              <button 
                onClick={() => gotoEmployee(empObj)} 
                className="w-full bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white font-bold py-2.5 rounded-xl transition-all duration-200"
              >
                View
              </button>
              <div className="flex gap-2">
                <button 
                  onClick={() => gotoEditEmployee(empObj)} 
                  className="flex-1 bg-amber-50 text-amber-600 hover:bg-amber-500 hover:text-white font-bold py-2.5 rounded-xl transition-all duration-200 text-sm"
                >
                  Edit
                </button>
                <button 
                  onClick={() => deleteById(empObj._id)} 
                  className="flex-1 bg-red-50 text-red-600 hover:bg-red-500 hover:text-white font-bold py-2.5 rounded-xl transition-all duration-200 text-sm"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListOfEmployee;