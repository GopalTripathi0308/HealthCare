import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, Bot, User } from 'lucide-react';

// Components
import PageTitle from '../components/ui/PageTitle';
import Button from '../components/ui/Button';

// Types
import { Message } from '../types';

// Mock data
import { botResponses } from '../data/mockData';

const InstantHelp: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      text: "Hello! I'm your health assistant. How can I help you today?",
      timestamp: new Date().toISOString(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!input.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      text: input,
      timestamp: new Date().toISOString(),
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    
    // Simulate bot typing
    setIsTyping(true);
    
    // Simulate response time
    setTimeout(() => {
      // Get a random bot response or a default one
      const userQuery = input.toLowerCase();
      let botResponse = "I'm not sure I understand. Could you please rephrase your question?";
      
      for (const response of botResponses) {
        if (response.triggers.some(trigger => userQuery.includes(trigger))) {
          botResponse = response.text;
          break;
        }
      }
      
      const botMessage: Message = {
        id: Date.now().toString(),
        type: 'bot',
        text: botResponse,
        timestamp: new Date().toISOString(),
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const formatTime = (timestamp: string) => {
    return new Date(timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-3xl mx-auto"
    >
      <PageTitle 
        title="Instant Help" 
        description="Get immediate answers from our AI health assistant"
        icon={<Bot className="text-purple-600" size={28} />}
      />

      <div className="mt-8 bg-white rounded-xl shadow-sm overflow-hidden flex flex-col h-[600px]">
        <div className="flex-1 overflow-y-auto p-4">
          <div className="space-y-4">
            {messages.map((message) => (
              <div 
                key={message.id}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex max-w-[80%] ${
                    message.type === 'user' ? 'flex-row-reverse' : 'flex-row'
                  }`}
                >
                  <div 
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      message.type === 'user' ? 'bg-blue-600 ml-2' : 'bg-purple-600 mr-2'
                    }`}
                  >
                    {message.type === 'user' ? (
                      <User size={16} className="text-white" />
                    ) : (
                      <Bot size={16} className="text-white" />
                    )}
                  </div>
                  <div 
                    className={`px-4 py-3 rounded-2xl ${
                      message.type === 'user' 
                        ? 'bg-blue-100 text-gray-800' 
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                    <p className="text-right text-xs text-gray-500 mt-1">
                      {formatTime(message.timestamp)}
                    </p>
                  </div>
                </motion.div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex flex-row">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 bg-purple-600 mr-2">
                    <Bot size={16} className="text-white" />
                  </div>
                  <div className="px-4 py-3 rounded-2xl bg-gray-100">
                    <div className="flex space-x-1">
                      <motion.div 
                        animate={{ y: [0, -5, 0] }}
                        transition={{ 
                          repeat: Infinity, 
                          duration: 1,
                          times: [0, 0.5, 1]
                        }}
                        className="w-2 h-2 bg-gray-400 rounded-full"
                      />
                      <motion.div 
                        animate={{ y: [0, -5, 0] }}
                        transition={{ 
                          repeat: Infinity, 
                          duration: 1,
                          times: [0, 0.5, 1],
                          delay: 0.2
                        }}
                        className="w-2 h-2 bg-gray-400 rounded-full"
                      />
                      <motion.div 
                        animate={{ y: [0, -5, 0] }}
                        transition={{ 
                          repeat: Infinity, 
                          duration: 1,
                          times: [0, 0.5, 1],
                          delay: 0.4
                        }}
                        className="w-2 h-2 bg-gray-400 rounded-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>
        </div>
        
        <form 
          onSubmit={handleSubmit}
          className="border-t border-gray-200 p-4 bg-gray-50"
        >
          <div className="flex">
            <input
              type="text"
              value={input}
              onChange={handleInputChange}
              placeholder="Type your health question..."
              className="flex-1 rounded-l-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Button 
              type="submit" 
              className="rounded-l-none"
              disabled={!input.trim()}
            >
              <Send size={18} />
            </Button>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            Ask about symptoms, medications, or general health advice.
          </p>
        </form>
      </div>
    </motion.div>
  );
};

export default InstantHelp;