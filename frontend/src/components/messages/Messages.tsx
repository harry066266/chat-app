import MessageSkeleton from "../skeletons/MessageSkeleton";
import useGetMessages from "../../hooks/useGetMessages";
import Message from "./Message";
import { useEffect, useRef } from "react";
import useListenMessage from "../../hooks/useListenMessage";
const Messages = () => {
  const { loading, messages } = useGetMessages();
  const lastMessageRef = useRef<HTMLDivElement | null>(null);
  useListenMessage();
  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);
  return (
    <div className="px-4 flex-1 overflow-auto">
      {!loading &&
        messages.length > 0 &&
        messages.map((message) => (
          <div key={message._id} ref={lastMessageRef}>
            <Message message={message} />
          </div>
        ))}
      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
      {!loading && messages.length === 0 && (
        <p className="text-center">Send a message to start the conversation</p>
      )}
    </div>
  );
};

export default Messages;
