import { Types } from "mongoose";
import { create } from "zustand";
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
  messages: Types.ObjectId[];
  setMessages: (messages: Types.ObjectId[]) => void;
}
const useConversation = create<ConversationState>((set) => ({
  selectedConversation: null,
  setSelectedConversation: (
    selectedConversation: selectedConversationType | null
  ) => set({ selectedConversation }),
  messages: [],
  setMessages: (messages: Types.ObjectId[]) => set({ messages }),
}));
export default useConversation;
