import { useEffect } from "react"
import useConversation from "../zustand/useConversation"
import Messages from "./Messages"
import MessagesInput from "./MessagesInput"
import NoChatSelected from "./NoChatSelected"

const MessageContainer = () => {
    const { selectedConversation, setSelectedConversation } = useConversation();
    useEffect(() => {
        //this function only execute when this page is closed for clean up
        return () => {
            setSelectedConversation(null)
        }
    }, [setSelectedConversation])
    return (
        <div className=" md:min-w-[450px] flex flex-col">
            {
                selectedConversation &&
                <>
                    <div className=" bg-slate-500 px-4 py-2 mb-2">
                        <span className="label-text">To:</span>
                        <span className=" text-gray-900 font-bold">{selectedConversation.username}</span>
                    </div>
                    <Messages />
                    <MessagesInput />
                </>
            }
            {
                !selectedConversation && <NoChatSelected />
            }

        </div>
    )
}

export default MessageContainer