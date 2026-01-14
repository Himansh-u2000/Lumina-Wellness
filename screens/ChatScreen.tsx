import React, { useState, useRef, useEffect } from 'react';

interface ChatScreenProps {
  isDarkMode: boolean;
}

const ChatScreen: React.FC<ChatScreenProps> = ({ isDarkMode }) => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ id: number; text: string; isAi: boolean }[]>([
    { id: 1, text: "Hello. The night is quiet, and I'm here to listen. How is your mind feeling right now?", isAi: true },
    { id: 2, text: "I can't stop thinking about tomorrow.", isAi: false },
    { id: 3, text: "It's understandable that tomorrow feels heavy. Let's focus on this moment. Would you like to try a breathing exercise or just talk it through?", isAi: true },
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    const newMsg = { id: Date.now(), text: input, isAi: false };
    setMessages(prev => [...prev, newMsg]);
    setInput('');
    
    // Simulate AI response
    setTimeout(() => {
        setMessages(prev => [...prev, { id: Date.now() + 1, text: "I hear you. Tell me more about that feeling.", isAi: true }]);
    }, 1500);
  };

  // Dynamic Styles based on Theme
  const bgClass = isDarkMode 
    ? "bg-gradient-to-b from-[#1E233E] to-[#2A254D]" 
    : "bg-gradient-to-br from-[#f1f5f6] to-[#fbfaf9]";
  
  const textClass = isDarkMode ? "text-white" : "text-slate-900";
  const subTextClass = isDarkMode ? "text-slate-400" : "text-slate-500";
  const bubbleAiClass = isDarkMode 
    ? "bg-[#3A3F50] text-[#E0E5F0] border border-white/5" 
    : "bg-white text-slate-800 shadow-sm border border-primary/5";
  const bubbleUserClass = isDarkMode
    ? "bg-[#4A4F60] text-white border border-white/5"
    : "bg-[#E0B0A7] text-[#5e2c24] border border-[#d6a197]";

  return (
    <div className={`flex flex-col h-full ${bgClass} transition-colors duration-500`}>
      {/* Header */}
      <header className={`shrink-0 flex items-center justify-between px-6 py-4 ${isDarkMode ? 'bg-[#1E233E]/70 backdrop-blur-md border-b border-white/5' : ''}`}>
        <div className="flex items-center gap-3">
            <button className={`p-2 rounded-full ${isDarkMode ? 'hover:bg-white/10' : 'hover:bg-black/5'}`}>
                <span className={`material-symbols-outlined ${textClass}`}>arrow_back_ios_new</span>
            </button>
            <div className="flex flex-col">
                <h1 className={`text-lg font-bold ${textClass}`}>Lumina</h1>
                <div className="flex items-center gap-1.5">
                    <span className="size-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span className={`text-[11px] font-bold tracking-widest uppercase ${subTextClass}`}>Listening</span>
                </div>
            </div>
        </div>
        <button className={`px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 
            ${isDarkMode ? 'bg-primary/20 text-[#E0B0D0] border border-primary/20' : 'bg-white shadow-sm text-slate-700'}`}>
            <span className="material-symbols-outlined text-sm">favorite</span>
            Get Help
        </button>
      </header>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-6 py-4 space-y-6">
        <div className="flex justify-center mb-4">
             <span className={`text-[10px] font-bold uppercase tracking-wider opacity-60 ${subTextClass}`}>Tonight, 11:42 PM</span>
        </div>

        {messages.map((msg) => (
          <div key={msg.id} className={`flex w-full ${msg.isAi ? 'justify-start' : 'justify-end'}`}>
            <div className={`flex max-w-[85%] ${msg.isAi ? 'flex-row' : 'flex-row-reverse'} gap-3 items-end`}>
                {msg.isAi && (
                    <div className="size-8 rounded-full bg-cover bg-center shrink-0 border border-white/10" style={{backgroundImage: 'url(https://picsum.photos/seed/luminaai/100/100)'}}></div>
                )}
                
                <div className={`p-4 rounded-2xl leading-relaxed text-[15px] ${msg.isAi ? 'rounded-bl-none ' + bubbleAiClass : 'rounded-br-none ' + bubbleUserClass}`}>
                    {msg.text}
                </div>
            </div>
          </div>
        ))}
        {/* Typing Indicator */}
        <div className="flex justify-start gap-3 items-end">
            <div className="size-8 rounded-full bg-cover bg-center shrink-0 border border-white/10" style={{backgroundImage: 'url(https://picsum.photos/seed/luminaai/100/100)'}}></div>
            <div className={`p-4 rounded-2xl rounded-bl-none flex gap-1 ${bubbleAiClass} bg-opacity-50`}>
                <div className="w-1.5 h-1.5 bg-current rounded-full animate-bounce opacity-60"></div>
                <div className="w-1.5 h-1.5 bg-current rounded-full animate-bounce delay-100 opacity-60"></div>
                <div className="w-1.5 h-1.5 bg-current rounded-full animate-bounce delay-200 opacity-60"></div>
            </div>
        </div>
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className={`shrink-0 p-4 pb-8 ${isDarkMode ? 'bg-gradient-to-t from-[#1E233E] via-[#1E233E]/90 to-transparent' : 'bg-white/80 backdrop-blur-md border-t border-gray-100'}`}>
        
        {/* Suggestion Chips */}
        <div className="flex gap-2 mb-4 overflow-x-auto no-scrollbar">
            {['Breathing exercise', 'Just talk', 'Distract me'].map(chip => (
                <button key={chip} className={`whitespace-nowrap px-4 py-2 rounded-xl text-xs font-medium border transition-colors
                    ${isDarkMode 
                        ? 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10' 
                        : 'bg-white border-gray-200 text-slate-600 hover:bg-gray-50'}`}>
                    {chip}
                </button>
            ))}
        </div>

        <div className="flex items-center gap-3">
             <button className={`size-12 rounded-full flex items-center justify-center transition-transform active:scale-95
                ${isDarkMode ? 'bg-white/10 text-slate-300 hover:bg-white/20' : 'bg-gray-100 text-slate-600'}`}>
                 <span className="material-symbols-outlined">mic</span>
             </button>
             
             <div className="flex-1 relative">
                 <input 
                    type="text" 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type a message..."
                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                    className={`w-full h-12 rounded-full pl-5 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all
                        ${isDarkMode 
                            ? 'bg-[#1a1f36] border border-white/10 text-white placeholder-slate-500' 
                            : 'bg-white border border-gray-200 text-slate-900 placeholder-slate-400 shadow-sm'}`}
                 />
                 <button 
                    onClick={handleSend}
                    className="absolute right-1.5 top-1.5 size-9 rounded-full bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/30 hover:bg-primary-dark transition-colors">
                    <span className="material-symbols-outlined text-xl">arrow_upward</span>
                 </button>
             </div>
        </div>
      </div>
    </div>
  );
};

export default ChatScreen;