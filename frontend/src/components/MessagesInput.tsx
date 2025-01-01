import { useState } from "react";
import { BsSend } from "react-icons/bs"
import useSendMessage from "../hooks/useSendMessage";

const MessagesInput = () => {
    const [message, setmessage] = useState('');
    const { sendMessage, loading } = useSendMessage();
    const handLeFormInput = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!message) return
        await sendMessage(message)
        setmessage('')
    }
    return (
        <form className="px-4 my-3" onClick={handLeFormInput}>
            <div className=" w-full relative">
                <input value={message} onChange={(e) => setmessage(e.target.value)} type="text" placeholder=" just send a message !!" className=" border  text-sm rounded-lg block w-full p-2.5  bg-gray-700  border-gray-600 text-white" />
                <button type="submit" className=" text-white absolute inset-y-0 end-0 flex items-center pe-3">
                    {
                        loading ? <span className="loading loading-spinner"></span>
                            : <BsSend />
                    }
                </button>
            </div>
        </form>
    )
}

export default MessagesInput