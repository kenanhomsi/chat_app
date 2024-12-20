import GenderCheckBox from "../components/GenderCheckBox"

const SignUp = () => {
    return (
        <div className=" flex flex-col  items-center justify-center  min-w-96 mx-auto">
            <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding  backdrop-filter backdrop-blur-lg bg-opacity-0">
                <h1 className=" text-3xl font-semibold text-center text-gray-300">
                    SignUp <span className=" text-blue-500">ChatApp</span>
                </h1>
                <form >
                    <div className="">
                        <label className="label p-2">
                            <span className="label-text text-base">FullName</span>
                        </label>
                        <input type="text" placeholder="Kenan Al Homsi" className="w-full input input-bordered h-10" />
                    </div>
                    <div className="">
                        <label className="label p-2">
                            <span className="label-text text-base">userName</span>
                        </label>
                        <input type="text" placeholder="KenanAlHomsi" className="w-full input input-bordered h-10" />
                    </div>
                    <div className="">
                        <label className="label p-2">
                            <span className="label-text text-base">Password</span>
                        </label>
                        <input type="Password" placeholder="Enter Password" className="w-full input input-bordered h-10" />
                    </div>
                    <div className="">
                        <label className="label p-2">
                            <span className="label-text text-base">Confirm Password</span>
                        </label>
                        <input type="Password" placeholder="Enter Confirm Password" className="w-full input input-bordered h-10" />
                    </div>
                    <GenderCheckBox />
                    <a href="#" className=" text-sm  hover:underline hover:text-blue-500 mt-2 inline-block">Already have an account?</a>
                    <div className="">
                        <button className="btn btn-block btn-sm mt-2 border border-slate-700">Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp