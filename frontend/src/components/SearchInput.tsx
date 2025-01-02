import { useState } from "react";
import toast from "react-hot-toast";
import { IoSearchSharp } from "react-icons/io5";
import useConversation from "../zustand/useConversation";
import useGetConversations from "../hooks/useGetConversations";
const SearchInput = () => {
    const [search, setsearch] = useState('')
    const { setSelectedConversation } = useConversation();
    const { Conversation } = useGetConversations();
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!search) return
        if (search.length <= 3) {
            return toast.error('must have more than 3 character to search')
        }
        const SearchResult = Conversation.find((conv) => conv.username.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
        if (SearchResult) {
            setSelectedConversation(SearchResult!)
            setsearch('')
        } else {
            toast.error(' no such user found')
        }
    }
    return (
        <div onSubmit={handleSubmit}>
            <form className="flex items-center gap-2">
                <input type="text" placeholder="Search..."
                    value={search}
                    onChange={(e) => setsearch(e.target.value)}
                    className=" input  input-bordered rounded-full" />
                <button type='submit' className="btn btn-circle bg-sky-500 text-white">
                    <IoSearchSharp className="w-6 h-6 outline-none" />
                </button>
            </form>
        </div>
    )
}

export default SearchInput