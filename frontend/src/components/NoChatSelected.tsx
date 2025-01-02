import { TiMessages } from "react-icons/ti"
import { useAuthContext } from "../context/AuthContext"

const NoChatSelected = () => {
    const { authUser } = useAuthContext();
    return (
        <div className="flex items-center justify-center h-full w-full">
            <div className="px-4 items-center sm:text-lg md:text-xl text-gray-200  font-semibold flex flex-col text-center gap-2">
                <p>Welcome 👋 {authUser?.fullname} ❄</p>
                <p>Select a chat to start Messaging</p>
                <TiMessages className=" text-3xl md:text-6xl text-center" />
            </div>
        </div>
    )
}

export default NoChatSelected