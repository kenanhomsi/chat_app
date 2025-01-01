import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import useConversation from "../zustand/useConversation";

const useGetMessages = () => {
  const [loading, setloading] = useState(false);
  const { selectedConversation, setMessages, messages } = useConversation();
  useEffect(() => {
    const getMessages = async () => {
      setloading(true);
      try {
        const res = await fetch(`/api/messages/${selectedConversation?._id}`);
        const data = await res.json();
        if (data.error) {
          throw new Error(data.error);
        }
        setMessages(data);
      } catch (error) {
        if (error instanceof Error) {
          toast.error(error.message);
        } else {
          toast.error("unknown error");
        }
      } finally {
        setloading(false);
      }
    };
    if (selectedConversation?._id) getMessages();
  }, [selectedConversation?._id, setMessages]);
  return { loading, messages };
};

export default useGetMessages;
