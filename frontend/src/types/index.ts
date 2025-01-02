export interface signupProps {
  fullname: string;
  username: string;
  password: string;
  confirmpassword: string;
  gender: string;
}

// export interface MessageProps {
//   shouldShake?: boolean;
//   createdAt: string;
//   message: string;
//   receiverId: string;
//   senderId: string;
//   updatedAt: string;
//   _id: string;
//   __v: number;
// }
export interface MessageProps {
  shouldShake?: boolean;
  createdAt: string;
  message: string;
  receiverId: string;
  senderId: string;
  updatedAt: string;
  _id: string;
  __v: number;
}
export interface SingleConversation {
  createdAt: string;
  fullname: string;
  gender: string;
  profileImage: string;
  updatedAt: string;
  username: string;
  _id: string;
}
export interface ConversationType {
  data: SingleConversation;
  emojie: string;
  lastIndex: boolean;
}
