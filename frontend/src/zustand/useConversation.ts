import { create } from "zustand";
import { MessageProps } from "../types";
export interface selectedConversationType {
  fullname: string;
  username: string;
  gender: string;
  profileImage: string;
  createdAt: string;
  updatedAt: string;
  _id: string;
}
interface ConversationState {
  selectedConversation: selectedConversationType | null;
  setSelectedConversation: (
    selectedConversation: selectedConversationType | null
  ) => void;

  messages: MessageProps[];
  setMessages: (messages: MessageProps[]) => void;
}
const useConversation = create<ConversationState>((set) => ({
  selectedConversation: null,
  setSelectedConversation: (
    selectedConversation: selectedConversationType | null
  ) => set({ selectedConversation }),
  messages: [],
  setMessages: (messages: MessageProps[]) => set({ messages }),
}));
export default useConversation;
