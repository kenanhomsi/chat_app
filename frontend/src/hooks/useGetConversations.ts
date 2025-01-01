import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { SingleConversation } from "../types";

const useGetConversations = () => {
  const [loading, setloading] = useState(false);
  const [Conversation, setConversation] = useState<SingleConversation[]>([]);
  useEffect(() => {
    const getConversations = async () => {
      setloading(true);
      try {
        const res = await fetch("/api/users");
        const data = await res.json();
        if (data.error) {
          throw new Error(data.error);
        }
        setConversation(data);
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
    getConversations();
  }, []);
  return { loading, Conversation };
};

export default useGetConversations;
