import { useState } from "react"
import { Link } from "react-router-dom"
import useLogin from "../hooks/useLogin"

const Login = () => {
    const { loading, login } = useLogin()
    const [loginInputs, setloginInputs] = useState({
        username: '',
        password: ''
    })
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setloginInputs({
            ...loginInputs,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await login({
            username: loginInputs.username,
            password: loginInputs.password
        })
    }
    return (
        <div className=" flex flex-col items-center justify-center min-w-96 mx-auto">

            <div className=" w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding  backdrop-filter backdrop-blur-lg bg-opacity-0">
                <h1 className=" text-3xl font-semibold text-center  text-gray-300">
                    Login
                    <span className="  text-blue-500"> ChatApp</span>
                </h1>
                <form onSubmit={handleSubmit} >
                    <div className="">
                        <label className="label p-2">
                            <span className=" text-base label-text">userName</span>
                        </label>
                        <input name="username" value={loginInputs.username} onChange={handleInputChange} type="text" placeholder="enter username" className="w-full input  input-bordered h-10" />
                    </div>
                    <div className="">
                        <label className="label p-2">
                            <span className=" text-base label-text">Password</span>
                        </label>
                        <input name="password" value={loginInputs.password} onChange={handleInputChange} type="password" placeholder="enter password" className="w-full input  input-bordered h-10" />
                    </div>
                    <Link to='/signup' className=" text-sm hover:underline hover:text-blue-600 mt-2 inline-block">
                        {"Don't"} have an account?
                    </Link>
                    <div className="">
                        <button className="btn btn-block btn-sm  mt-2" disabled={loading}>
                            {
                                loading ? <span className=" loading loading-spinner"></span> : 'Login'
                            }
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login