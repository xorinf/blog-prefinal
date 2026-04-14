import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

function CreateEmployee() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const { register, handleSubmit } = useForm();

    const onSubmit = async (newEmployee) => {
        try {
            setLoading(true);
            let res = await fetch(`${import.meta.env.VITE_API_URL}/emp/employee`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newEmployee)
            });

            if (res.status === 201) {
                navigate("/ListOfEmployee");
            } else {
                let errorRes = await res.json();
                console.log("error response is ", errorRes);
                throw new Error(errorRes.message || errorRes.error || "Submission Failed");
            }
        } catch (err) {
            console.log("err in catch", err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };
  if (loading) {
    return <p className="text-center text-4xl">Loading....</p>;
  }
  if (error) {
    return <p className="text-red-500 text-center text-3xl">{error}</p>;
  }

  return (
    <div className="max-w-2xl mx-auto space-y-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-gray-800 leading-tight">Create New Employee!</h1>
        {/* form */}
        <form className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 mt-10 space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-1">
                <label className="text-sm font-bold text-gray-500 ml-2">Full Name</label>
                <input type="text" placeholder="John Doe" {...register("name")} className="border-2 border-gray-100 p-4 w-full rounded-2xl focus:border-blue-500 focus:outline-none transition-colors" />
            </div>
            <div className="space-y-1">
                <label className="text-sm font-bold text-gray-500 ml-2">Email Address</label>
                <input type="email" placeholder="john@example.com" {...register("email")} className="border-2 border-gray-100 p-4 w-full rounded-2xl focus:border-blue-500 focus:outline-none transition-colors" />
            </div>
            <div className="space-y-1">
                <label className="text-sm font-bold text-gray-500 ml-2">Mobile Number</label>
                <input type="number" placeholder="1234567890" {...register("mobile")} className="border-2 border-gray-100 p-4 w-full rounded-2xl focus:border-blue-500 focus:outline-none transition-colors" />
            </div>
            <div className="space-y-1">
                <label className="text-sm font-bold text-gray-500 ml-2">Designation</label>
                <input type="text" placeholder="Software Engineer" {...register("designation")} className="border-2 border-gray-100 p-4 w-full rounded-2xl focus:border-blue-500 focus:outline-none transition-colors" />
            </div>
            <div className="space-y-1">
                <label className="text-sm font-bold text-gray-500 ml-2">Company Name</label>
                <input type="text" placeholder="Tech Corp" {...register("companyName")} className="border-2 border-gray-100 p-4 w-full rounded-2xl focus:border-blue-500 focus:outline-none transition-colors" />
            </div>
            <button type="submit" className="w-full text-xl font-bold rounded-2xl bg-blue-600 hover:bg-blue-700 text-white p-4 transition-all transform active:scale-95 shadow-lg mt-6">
                Create Employee
            </button>
        </form>
    </div>
  )
}

export default CreateEmployee