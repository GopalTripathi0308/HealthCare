"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  Send,
  Bot,
  User,
  Mic,
  MicOff,
  Minimize2,
  Maximize2,
  X,
  Heart,
  Brain,
  Activity,
  Stethoscope,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Message {
  id: string;
  content: string;
  sender: "user" | "bot";
  timestamp: Date;
  typing?: boolean;
}

interface QuickAction {
  id: string;
  label: string;
  icon: React.ElementType;
  message: string;
}

export function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickActions: QuickAction[] = [
    {
      id: "symptoms",
      label: "Check Symptoms",
      icon: Activity,
      message: "I'd like to check my symptoms",
    },
    {
      id: "appointment",
      label: "Book Appointment",
      icon: Heart,
      message: "I want to book an appointment",
    },
    {
      id: "medication",
      label: "Medication Info",
      icon: Stethoscope,
      message: "Tell me about my medications",
    },
    {
      id: "emergency",
      label: "Emergency Help",
      icon: Brain,
      message: "I need emergency assistance",
    },
  ];

  const botResponses = {
    greeting: "Hello! I'm your AI health assistant. How can I help you today?",
    symptoms:
      "I can help you understand your symptoms. Please describe what you're experiencing, and I'll provide some guidance. Remember, this is not a substitute for professional medical advice.",
    appointment:
      "I'd be happy to help you book an appointment. What type of specialist would you like to see, and do you have any preferred dates?",
    medication:
      "I can provide information about medications, including dosages, side effects, and interactions. What medication would you like to know about?",
    emergency:
      "If this is a medical emergency, please call 911 immediately. For urgent but non-emergency situations, I can help you find the nearest urgent care facility.",
    default:
      "I understand you're asking about health-related topics. Could you please be more specific so I can provide better assistance?",
  };

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Add initial greeting message
      const greetingMessage: Message = {
        id: "greeting",
        content: botResponses.greeting,
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages([greetingMessage]);
    }
  }, [isOpen]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const generateBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();

    if (
      message.includes("symptom") ||
      message.includes("pain") ||
      message.includes("hurt")
    ) {
      return botResponses.symptoms;
    } else if (
      message.includes("appointment") ||
      message.includes("book") ||
      message.includes("schedule")
    ) {
      return botResponses.appointment;
    } else if (
      message.includes("medication") ||
      message.includes("medicine") ||
      message.includes("drug")
    ) {
      return botResponses.medication;
    } else if (
      message.includes("emergency") ||
      message.includes("urgent") ||
      message.includes("help")
    ) {
      return botResponses.emergency;
    } else {
      return botResponses.default;
    }
  };

  const sendMessage = async (content: string) => {
    if (!content.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate bot typing delay
    setTimeout(() => {
      const botResponse = generateBotResponse(content);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: botResponse,
        sender: "bot",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleQuickAction = (action: QuickAction) => {
    sendMessage(action.message);
  };

  const toggleVoice = () => {
    setIsListening(!isListening);
    // In a real implementation, you would integrate with Web Speech API
  };

  if (!isOpen) {
    return (
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <Button
          onClick={() => setIsOpen(true)}
          size="lg"
          className="rounded-full w-16 h-16 shadow-lg hover:shadow-xl transition-shadow"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
      className={`fixed bottom-6 right-6 z-50 ${
        isMinimized ? "w-80" : "w-96"
      } ${isMinimized ? "h-16" : "h-[600px]"}`}
    >
      <Card className="h-full flex flex-col shadow-2xl border border-border bg-background">
        {/* Header */}
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-t-lg border-b border-border">
          <div className="flex items-center gap-3">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center"
            >
              <Bot className="w-4 h-4" />
            </motion.div>
            <div>
              <CardTitle className="text-sm">AI Health Assistant</CardTitle>
              <p className="text-xs text-white/80">Online • Ready to help</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMinimized(!isMinimized)}
              className="text-white hover:bg-white/20 h-8 w-8 p-0"
            >
              {isMinimized ? (
                <Maximize2 className="w-4 h-4" />
              ) : (
                <Minimize2 className="w-4 h-4" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20 h-8 w-8 p-0"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </CardHeader>

        <AnimatePresence>
          {!isMinimized && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="flex flex-col flex-1"
            >
              {/* Messages */}
              <CardContent className="flex-1 overflow-y-auto p-4 space-y-4 max-h-[400px] min-h-0 bg-background/50 scrollbar-thin scrollbar-thumb-muted scrollbar-track-transparent">
                <AnimatePresence>
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className={`flex ${
                        message.sender === "user"
                          ? "justify-end"
                          : "justify-start"
                      }`}
                    >
                      <div
                        className={`max-w-[80%] p-3 rounded-lg ${
                          message.sender === "user"
                            ? "bg-blue-500 text-white"
                            : "bg-muted text-foreground border border-border"
                        }`}
                      >
                        <div className="flex items-start gap-2">
                          {message.sender === "bot" && (
                            <Bot className="w-4 h-4 mt-0.5 flex-shrink-0" />
                          )}
                          <p className="text-sm">{message.content}</p>
                          {message.sender === "user" && (
                            <User className="w-4 h-4 mt-0.5 flex-shrink-0" />
                          )}
                        </div>
                        <p className="text-xs opacity-70 mt-1">
                          {message.timestamp.toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>

                {/* Typing Indicator */}
                <AnimatePresence>
                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="flex justify-start"
                    >
                      <div className="bg-muted text-foreground p-3 rounded-lg border border-border">
                        <div className="flex items-center gap-2">
                          <Bot className="w-4 h-4" />
                          <div className="flex gap-1">
                            <motion.div
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{
                                duration: 0.6,
                                repeat: Infinity,
                                delay: 0,
                              }}
                              className="w-2 h-2 bg-muted-foreground rounded-full"
                            />
                            <motion.div
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{
                                duration: 0.6,
                                repeat: Infinity,
                                delay: 0.2,
                              }}
                              className="w-2 h-2 bg-muted-foreground rounded-full"
                            />
                            <motion.div
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{
                                duration: 0.6,
                                repeat: Infinity,
                                delay: 0.4,
                              }}
                              className="w-2 h-2 bg-muted-foreground rounded-full"
                            />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div ref={messagesEndRef} />
              </CardContent>

              {/* Quick Actions */}
              {messages.length <= 1 && (
                <div className="p-4 border-t border-border bg-muted/30">
                  <p className="text-xs text-muted-foreground mb-3">
                    Quick actions:
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {quickActions.map((action) => (
                      <motion.button
                        key={action.id}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleQuickAction(action)}
                        className="flex items-center gap-2 p-2 text-xs bg-muted hover:bg-muted/80 border border-border rounded-lg transition-colors"
                      >
                        <action.icon className="w-3 h-3" />
                        {action.label}
                      </motion.button>
                    ))}
                  </div>
                </div>
              )}

              {/* Input */}
              <div className="p-4 border-t border-border bg-background">
                <div className="flex gap-2">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) =>
                      e.key === "Enter" && sendMessage(inputValue)
                    }
                    placeholder="Type your message..."
                    className="flex-1"
                    disabled={isTyping}
                  />
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={toggleVoice}
                    className={`p-2 ${
                      isListening ? "text-red-500" : "text-muted-foreground"
                    }`}
                  >
                    {isListening ? (
                      <MicOff className="w-4 h-4" />
                    ) : (
                      <Mic className="w-4 h-4" />
                    )}
                  </Button>
                  <Button
                    onClick={() => sendMessage(inputValue)}
                    disabled={!inputValue.trim() || isTyping}
                    size="sm"
                    className="p-2"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Card>
    </motion.div>
  );
}
