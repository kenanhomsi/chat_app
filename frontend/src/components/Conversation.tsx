import { ConversationType } from "../types";
import useConversation from "../zustand/useConversation";


const Conversation = (data: ConversationType) => {
    const { selectedConversation, setSelectedConversation } = useConversation();
    const isSelected = selectedConversation?._id == data.data._id
    return (
        <>
            <div key={data.data._id} className={` ${isSelected ? 'bg-sky-500' : ''} flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer`}
                onClick={() => setSelectedConversation(data.data)}>
                <div className="avatar online ">
                    <div className="w-12 rounded-full">
                        <img src={data.data.profileImage} alt="user avatar" />
                    </div>
                </div>
                <div className=" flex flex-col flex-1">
                    <div className="flex gap-3 justify-between">
                        <p className="font-bold text-gray-200 ">{data.data.username}</p>
                        <span className=" text-xl">{data.emojie}</span>
                    </div>
                </div>
            </div>
            {
                !data.lastIndex &&
                <div className=" divider my-0 py-0 h-1" />
            }
        </>
    )
}

export default Conversation