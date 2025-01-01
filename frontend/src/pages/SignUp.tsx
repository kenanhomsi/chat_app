import { Link } from "react-router-dom"
import GenderCheckBox from "../components/GenderCheckBox"
import { useState } from "react"
import useSignUp from "../hooks/useSignUp";

const SignUp = () => {
    const [inputs, setinputs] = useState({
        fullname: '',
        username: '',
        password: '',
        confirmpassword: '',
        gender: ''
    });
    const { signup, loading } = useSignUp();
    const handleInputchange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setinputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        await signup(inputs)
    }
    return (
        <div className=" flex flex-col  items-center justify-center  min-w-96 mx-auto">
            <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding  backdrop-filter backdrop-blur-lg bg-opacity-0">
                <h1 className=" text-3xl font-semibold text-center text-gray-300">
                    SignUp <span className=" text-blue-500">ChatApp</span>
                </h1>
                <form onSubmit={handleSubmit} >
                    <div className="">
                        <label className="label p-2">
                            <span className="label-text text-base">FullName</span>
                        </label>
                        <input type="text" placeholder="Kenan Al Homsi" name="fullname" value={inputs.fullname} onChange={handleInputchange} className="w-full input input-bordered h-10" />
                    </div>
                    <div className="">
                        <label className="label p-2">
                            <span className="label-text text-base">userName</span>
                        </label>
                        <input type="text" placeholder="KenanAlHomsi" name="username" value={inputs.username} onChange={handleInputchange} className="w-full input input-bordered h-10" />
                    </div>
                    <div className="">
                        <label className="label p-2">
                            <span className="label-text text-base">Password</span>
                        </label>
                        <input type="Password" placeholder="Enter Password" name="password" value={inputs.password} onChange={handleInputchange} className="w-full input input-bordered h-10" />
                    </div>
                    <div className="">
                        <label className="label p-2">
                            <span className="label-text text-base">confirm Password</span>
                        </label>
                        <input type="Password" placeholder="Enter Confirm Password" name="confirmpassword" value={inputs.confirmpassword} onChange={handleInputchange} className="w-full input input-bordered h-10" />
                    </div>
                    <GenderCheckBox
                        handleInputchange={handleInputchange} />
                    <Link to='/login' className=" text-sm  hover:underline hover:text-blue-500 mt-2 inline-block">Already have an account?</Link>
                    <div >
                        {
                            <button disabled={loading} className="btn btn-block btn-sm mt-2 border border-slate-700">{loading ? <span className=" loading loading-spinner"></span> : 'Sign Up'}</button>
                        }
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp