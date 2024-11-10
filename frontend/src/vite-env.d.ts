/// <reference types="vite/client" />
type Gender = "male" | "female" | "";
interface InputFields {
  fullName: string;
  username: string;
  password: string;
  confirmPassword: string;
  gender: Gender; // 初始状态为空字符串
}
interface GenderCheckboxProps {
  onCheckboxChange: (gender: Gender) => void;
  selectedGender: Gender;
}
// 定义 AuthUser 类型，假设它有 id 和 name 等字段，你可以根据实际情况修改
type ConversationType = {
  selectedConversation: UserType | null;
  setSelectedConversation: (selectedConversation: UserType|null) => void;
  messages: MessageType[];
  setMessages: (messages: MessageType[]) => void;
};

interface UserType {
  _id: string;
  username: string;
  fullName: string;
  gender: "male" | "female"; // 假设只有 "male" 和 "female" 两个值
  profilePic: string;
  createdAt: string; // 或者 Date，如果在程序中需要处理 Date 对象
  updatedAt: string;
  __v: number;
}

interface ConType {
  conversation: UserType;
  emoji: string;
  lastIdx: boolean;
}

interface MessageType {
  senderId: string;
  receiverId: string;
  message: string;
  _id: string;
  createdAt: string; // or Date if you plan to parse it
  updatedAt: string; // or Date if you plan to parse it
  __v: number;
  shouldShake?: boolean
};

