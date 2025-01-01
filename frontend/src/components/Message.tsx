import { useAuthContext } from "../context/AuthContext"
import { MessageProps } from "../types";
import { extractTime } from "../utils/functions"
import useConversation from "../zustand/useConversation"



const Message = ({ data }: { data: MessageProps }) => {
    const { authUser } = useAuthContext();
    const { selectedConversation } = useConversation();
    const isFromMy = authUser?.id === data.senderId; // Use triple equals '===' for comparison
    const ProfilePic = isFromMy ? authUser.profileImage : selectedConversation?.profileImage;

    return (
        <div key={data._id} className={`chat ${isFromMy ? 'chat-end' : 'chat-start'} `}>
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img
                        alt="Tailwind CSS chat bubble component"
                        src={ProfilePic} />
                </div>
            </div>
            <div className={`chat-bubble text-white ${isFromMy ? 'bg-blue-500' : ' bg-gray-700'} `}>{data.message}</div>
            <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
                <time className="text-xs text-gray-200 opacity-50">{extractTime(data.createdAt)}</time>
            </div>
        </div>
    )
}

export default Message;
