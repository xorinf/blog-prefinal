import { useEffect } from "react"
import { useForm, } from "react-hook-form"
import { useLocation, useNavigate } from "react-router"
import axios from 'axios'
function EditEmployee() {
    const { register, handleSubmit, setValue } = useForm()
    const { state } = useLocation()
    const navigate = useNavigate()
    const onsSave = async (modifiedEmp) => {
        modifiedEmp._id = state._id
        const res = await axios.put(`${import.meta.env.VITE_API_URL}/emp/employee`, modifiedEmp)
        if (res.status === 201) {

            navigate("/ListOfEmployee");
        }

    }
    useEffect(() => {
        setValue("name", state.name)
        setValue("email", state.email)
        setValue("mobile", state.mobile)
        setValue("designation", state.designation)
        setValue("companyName", state.companyName)
    }, [])

    return (
        <div className="max-w-2xl mx-auto space-y-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-gray-800 leading-tight">Edit Employee!</h1>
            {/* form */}
            <form className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 mt-10 space-y-4" onSubmit={handleSubmit(onsSave)}>
                <div className="space-y-1">
                    <label className="text-sm font-bold text-gray-500 ml-2">Full Name</label>
                    <input type="text" placeholder="enter name" {...register("name")} className="border-2 border-gray-100 p-4 w-full rounded-2xl focus:border-blue-500 focus:outline-none transition-colors" />
                </div>
                <div className="space-y-1">
                    <label className="text-sm font-bold text-gray-500 ml-2">Email Address (Read-only)</label>
                    <input type="email" placeholder="enter email" {...register("email")} className="border-2 border-gray-50 p-4 w-full rounded-2xl bg-gray-50 text-gray-400 cursor-not-allowed" disabled />
                </div>
                <div className="space-y-1">
                    <label className="text-sm font-bold text-gray-500 ml-2">Mobile Number</label>
                    <input type="number" placeholder="enter mobile" {...register("mobile")} className="border-2 border-gray-100 p-4 w-full rounded-2xl focus:border-blue-500 focus:outline-none transition-colors" />
                </div>
                <div className="space-y-1">
                    <label className="text-sm font-bold text-gray-500 ml-2">Designation</label>
                    <input type="text" placeholder="enter designation" {...register("designation")} className="border-2 border-gray-100 p-4 w-full rounded-2xl focus:border-blue-500 focus:outline-none transition-colors" />
                </div>
                <div className="space-y-1">
                    <label className="text-sm font-bold text-gray-500 ml-2">Company Name</label>
                    <input type="text" placeholder="enter company name" {...register("companyName")} className="border-2 border-gray-100 p-4 w-full rounded-2xl focus:border-blue-500 focus:outline-none transition-colors" />
                </div>
                <button type="submit" className="w-full text-xl font-bold rounded-2xl bg-blue-600 hover:bg-blue-700 text-white p-4 transition-all transform active:scale-95 shadow-lg mt-6">
                    Save Changes
                </button>
            </form>
        </div>
    )
}

export default EditEmployee