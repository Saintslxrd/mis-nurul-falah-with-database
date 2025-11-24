"use client";

import { usePathname } from "next/navigation";
import { ChatBot } from "./chat-bot";

export default function ChatBotWrapper() {
  const pathname = usePathname();

  const hideChat =
    pathname.startsWith("/admin") ||
    pathname.startsWith("/login");

  if (hideChat) return null;

  return <ChatBot />;
}
