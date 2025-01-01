

const MessageSkeleton = ({ index }: { index: number }) => {
    return (
        <div key={index} dir={index % 2 == 0 ? 'ltr' : 'rtl'} className={`chat chat-end `}>
            <div className="chat-image avatar">
                <div className=" skeleton w-10 rounded-full ">
                </div>
            </div>
            <div className={` skeleton chat-bubble min-w-[40%] text-white bg-blue-500`}></div>
            <div className="skeleton  chat-footer opacity-50 text-xs flex gap-1 items-center">
            </div>
        </div>
    )
}

export default MessageSkeleton