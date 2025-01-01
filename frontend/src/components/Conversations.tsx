import useGetConversations from "../hooks/useGetConversations"
import { getRandomEmoji } from "../utils/emojis";
import Conversation from "./Conversation"

const Conversations = () => {
    const { loading, Conversation: ConversationList } = useGetConversations();
    return (
        <div className="py-2 flex flex-col overflow-auto">
            {loading && <span className=" loading loading-spinner"></span>}
            {
                ConversationList.map((ele, index) => {
                    return <Conversation
                        key={index}
                        data={ele}
                        emojie={getRandomEmoji()}
                        lastIndex={index == ConversationList.length - 1}
                    />
                })
            }
        </div>
    )
}

export default Conversations