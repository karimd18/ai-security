"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MessageCircle, X, Send, Bot } from "lucide-react";

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "bot", text: "Hello! I'm your AI Security Assistant. How can I help you today?" }
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleSend = () => {
    if (!inputValue.trim()) return;

    setMessages([...messages, { role: "user", text: inputValue }]);

    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        {
          role: "bot",
          text: "Thank you for your message. Our AI incident triage system has received your inquiry. For immediate assistance, please contact our 24/7 support line at +971 12 345 6789."
        }
      ]);
    }, 1000);

    setInputValue("");
  };

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        size="lg"
        className="fixed bottom-6 right-6 h-16 w-16 rounded-full bg-[hsl(var(--brand-accent-1))] hover:bg-[hsl(var(--brand-accent-1))]/90 text-[hsl(var(--brand-bg))] shadow-2xl box-glow z-50"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    );
  }

  return (
    <Card className="fixed bottom-6 right-6 w-96 h-[500px] flex flex-col bg-[hsl(var(--brand-bg))] border-[hsl(var(--brand-accent-1))] shadow-2xl box-glow z-50">
      <div className="flex items-center justify-between p-4 border-b border-[hsl(var(--brand-border))] bg-gradient-to-r from-[hsl(var(--brand-accent-1))]/10 to-transparent">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[hsl(var(--brand-accent-1))]/20 to-[hsl(var(--brand-accent-2))]/20 flex items-center justify-center">
            <Bot className="h-5 w-5 text-[hsl(var(--brand-accent-1))]" />
          </div>
          <div>
            <h3 className="font-semibold">AI Security Assistant</h3>
            <p className="text-xs text-[hsl(var(--brand-muted))]">Incident Triage & Support</p>
          </div>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsOpen(false)}
          className="hover:bg-[hsl(var(--brand-surface))]"
        >
          <X className="h-5 w-5" />
        </Button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[80%] rounded-lg p-3 ${
                message.role === "user"
                  ? "bg-[hsl(var(--brand-accent-1))] text-[hsl(var(--brand-bg))]"
                  : "bg-[hsl(var(--brand-surface))] border border-[hsl(var(--brand-border))]"
              }`}
            >
              <p className="text-sm">{message.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 border-t border-[hsl(var(--brand-border))]">
        <div className="flex space-x-2">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
            placeholder="Type your message..."
            className="bg-[hsl(var(--brand-surface))] border-[hsl(var(--brand-border))]"
          />
          <Button
            onClick={handleSend}
            size="icon"
            className="bg-[hsl(var(--brand-accent-1))] hover:bg-[hsl(var(--brand-accent-1))]/90 text-[hsl(var(--brand-bg))]"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
}
