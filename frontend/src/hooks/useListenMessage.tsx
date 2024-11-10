import { useEffect } from "react";
import { useSocketContext } from "../context/SocketContent";
import useConversation from "../zustand/useConversation";
import notificationSound from "../assets/sound/notification.mp3";
const useListenMessage = () => {
  const { socket } = useSocketContext();
  const { messages, setMessages } = useConversation();
  useEffect(() => {
    socket?.on("newMessage", (newMessage: MessageType) => {
      newMessage.shouldShake = true;
      const sound = new Audio(notificationSound);
      sound.play();
      setMessages([...messages, newMessage]);
    });

    return () => {
      socket?.off("newMessage"); // 修正清理函数
    };
  }, [socket, messages, setMessages]); // 添加依赖项
};

export default useListenMessage;
