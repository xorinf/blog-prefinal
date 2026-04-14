import { useState, useEffect } from 'react'

function Users({ onAdd }) {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
  }, [])

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {users.map((user) => (
        <div key={user.id} className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">{user.name}</h3>
            <div className="space-y-1 text-sm text-gray-600">
              <p className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                {user.email}
              </p>
              <p className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                {user.phone}
              </p>
              <p className="font-semibold mt-2 text-gray-700">{user.company.name}</p>
            </div>
          </div>
          <button
            onClick={onAdd}
            className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-xl transition-colors shadow-sm active:translate-y-0.5"
          >
            Add User
          </button>
        </div>
      ))}
    </div>
  )
}

export default Users