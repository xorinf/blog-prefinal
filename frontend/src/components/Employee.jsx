import { useLocation } from "react-router";

function Employee() {
    const { state } = useLocation()

  return (
    <div className="max-w-2xl mx-auto py-10 px-4">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 transition-all hover:shadow-blue-100/50">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-8 text-center text-white">
                <div className="w-24 h-24 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-white/30">
                    <span className="text-4xl font-bold uppercase">{state.name.charAt(0)}</span>
                </div>
                <h1 className="text-3xl font-bold">{state.name}</h1>
                <p className="text-blue-100 opacity-90">{state.designation}</p>
            </div>
            
            <div className="p-8 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-1">
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Email Address</p>
                        <p className="text-lg text-gray-800 font-medium break-all">{state.email}</p>
                    </div>
                    <div className="space-y-1">
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Phone Number</p>
                        <p className="text-lg text-gray-800 font-mono">{state.mobile}</p>
                    </div>
                    <div className="space-y-1 md:col-span-2 border-t border-gray-50 pt-6">
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Company</p>
                        <p className="text-2xl font-bold text-blue-600">{state.companyName}</p>
                    </div>
                </div>
                
                <div className="pt-8 text-center">
                    <button 
                        onClick={() => window.history.back()}
                        className="px-8 py-3 bg-gray-100 text-gray-600 font-bold rounded-xl hover:bg-gray-200 transition-colors"
                    >
                        Back to List
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Employee