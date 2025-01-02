import { useEffect, useRef } from "react";
import useGetMessages from "../hooks/useGetMessages"
import Message from "./Message"
import MessageSkeleton from "./skeleton/MessageSkeleton";
import useListenMessages from "../hooks/useListenMessages";
const Messages = () => {
    const { loading, messages } = useGetMessages();
    useListenMessages();
    const lastMessageRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        setTimeout(() => {
            lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' }); // Fix typo in 'scrollIntoView'
        }, 100)
    }, [messages])
    return (
        <div className="px-4 flex-1 overflow-auto ">
            {
                loading && <div className="">
                    {[...Array(3)].map((_, index) => (
                        <MessageSkeleton key={index} index={index} />
                    ))}
                </div>
            }
            {!loading && messages.length == 0 &&
                <p className=" text-center text-gray-300">Send a message to start the conversation</p>
            }
            {!loading && messages.length > 0 &&
                messages.map((ele, index) => {
                    const isLastMessage = index === messages.length - 1
                    return <div key={index} ref={isLastMessage ? lastMessageRef : null}>
                        <Message data={ele} />
                    </div>
                })
            }
        </div>
    )
}

export default Messages
