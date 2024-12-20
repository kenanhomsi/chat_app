import Message from "./Message"

const Messages = () => {
    return (
        <div className="px-4 flex-1 overflow-auto ">
            {
                Array.from(Array(12).keys()).map(() => (
                    <Message />
                ))
            }
        </div>
    )
}

export default Messages