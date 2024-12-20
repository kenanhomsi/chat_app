import Conversation from "./Conversation"

const Conversations = () => {
    return (
        <div className="py-2 flex flex-col overflow-auto">
            {
                Array.from(Array(5).keys()).map(() => {
                    return <Conversation />
                })
            }
        </div>
    )
}

export default Conversations