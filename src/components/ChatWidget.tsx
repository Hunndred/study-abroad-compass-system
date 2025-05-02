
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { MessageSquare, X, Send } from "lucide-react";
import { cn } from "@/lib/utils";

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{text: string, isUser: boolean}[]>([
    { text: "Hello! How can I help you with your study abroad journey today?", isUser: false },
  ]);
  const [userInput, setUserInput] = useState("");

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    // Add user message
    setMessages(prev => [...prev, { text: userInput, isUser: true }]);
    
    // Simulate response after a delay
    setTimeout(() => {
      const responses = [
        "Thanks for your message! One of our education consultants will get back to you shortly.",
        "Would you like to know more about our services or specific study destinations?",
        "You can schedule a free consultation to discuss your study abroad options in detail.",
        "We have partnerships with over 200 universities worldwide. Is there a specific country you're interested in?"
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      setMessages(prev => [...prev, { text: randomResponse, isUser: false }]);
    }, 1000);
    
    setUserInput("");
  };

  return (
    <div className="chat-widget">
      {/* Chat Button */}
      <div 
        className={cn(
          "chat-button bg-edu-accent-600 dark:bg-edu-accent-500 text-white",
          isOpen && "scale-0 opacity-0"
        )}
        onClick={toggleChat}
      >
        <MessageSquare size={24} />
      </div>
      
      {/* Chat Container */}
      <div 
        className={cn(
          "chat-container",
          isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
        )}
        style={{ transition: "all 0.3s ease" }}
      >
        {/* Chat Header */}
        <div className="chat-header bg-edu-accent-600 dark:bg-edu-accent-700 text-white">
          <div className="flex items-center">
            <div className="w-2 h-2 rounded-full bg-green-400 mr-2"></div>
            <h3 className="font-medium">Live Chat Support</h3>
          </div>
          <button onClick={toggleChat} className="focus:outline-none">
            <X size={18} />
          </button>
        </div>
        
        {/* Chat Body */}
        <div className="chat-body bg-white dark:bg-gray-800 overflow-y-auto">
          {messages.map((msg, idx) => (
            <div 
              key={idx}
              className={cn(
                "mb-4 max-w-[80%] p-3 rounded-lg",
                msg.isUser 
                  ? "ml-auto bg-edu-accent-500 text-white"
                  : "mr-auto bg-gray-100 dark:bg-gray-700 dark:text-white"
              )}
            >
              {msg.text}
            </div>
          ))}
        </div>
        
        {/* Chat Input */}
        <div className="chat-footer bg-white dark:bg-gray-800 border-t-gray-200 dark:border-t-gray-700">
          <form onSubmit={handleSendMessage} className="chat-input">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-1 p-2 bg-transparent border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-edu-accent-500 dark:bg-gray-700 dark:text-white"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
            />
            <Button 
              type="submit" 
              className="bg-edu-accent-600 hover:bg-edu-accent-700 dark:bg-edu-accent-500 dark:hover:bg-edu-accent-600 text-white"
              size="icon"
            >
              <Send size={18} />
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChatWidget;
