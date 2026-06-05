"use client";

import { useState, useRef, useEffect } from "react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const services = [
  "Tez Danışmanlığı",
  "Makale Yazımı",
  "SPSS Analizi",
  "Editörlük",
  "Özgünlük Kontrolü",
  "Sunum Hazırlama",
];

type Step = "name" | "service" | "chat";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<Step>("name");
  const [userName, setUserName] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [nameInput, setNameInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (open && step === "chat") inputRef.current?.focus();
  }, [open, step]);

  const handleNameSubmit = () => {
    const name = nameInput.trim();
    if (!name) return;
    setUserName(name);
    setStep("service");
  };

  const handleServiceSelect = (service: string) => {
    setSelectedService(service);
    setMessages([
      {
        role: "assistant",
        content: `Merhaba ${userName}, ${service.toLowerCase()} konusunda size yardımcı olabiliriz. Çalışmanız hakkında biraz bilgi verir misiniz? Hangi seviyede (lisans, yüksek lisans, doktora) ve hangi aşamadasınız?`,
      },
    ]);
    setStep("chat");
  };

  const getWhatsAppLink = () => {
    const text = encodeURIComponent(
      `Merhaba, siteniz üzerinden yazıyorum.\nAd: ${userName}\nHizmet: ${selectedService}\nDestek almak istiyorum.`
    );
    return `https://wa.me/905384164676?text=${text}`;
  };

  const sendMessage = async () => {
    const text = input.trim();
    if (!text || loading) return;

    const userMsg: Message = { role: "user", content: text };
    const updated = [...messages, userMsg];
    setMessages(updated);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: updated,
          userName,
          selectedService,
        }),
      });

      if (!res.ok) throw new Error("API error");

      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.reply },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Şu an bağlantıda bir sorun var. WhatsApp üzerinden bize ulaşabilirsiniz.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-navy-900 text-white rounded-full shadow-2xl shadow-navy-900/30 flex items-center justify-center hover:bg-navy-800 transition-all hover:scale-105"
          aria-label="Sohbeti aç"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        </button>
      )}

      {open && (
        <div className="fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-2rem)] h-[520px] bg-navy-800 border border-slate-700/50 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
          <div className="flex items-center justify-between px-5 py-4 bg-navy-900 border-b border-slate-700/50">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gold-500 flex items-center justify-center text-navy-900 font-bold text-sm">
                ÖD
              </div>
              <div>
                <div className="text-white font-semibold text-sm">
                  Ödevime Destek
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-green-400 rounded-full" />
                  <span className="text-xs text-slate-400">Çevrimiçi</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="p-1.5 text-slate-400 hover:text-white transition-colors"
              aria-label="Sohbeti kapat"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
            {step === "name" && (
              <div className="space-y-4">
                <div className="bg-navy-700 text-slate-200 px-4 py-3 rounded-2xl rounded-bl-md text-sm leading-relaxed">
                  Ödevime Destek ekibinden merhaba! Sizi tanıyabilmemiz için
                  adınızı ve soyadınızı yazabilir misiniz?
                </div>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleNameSubmit();
                  }}
                  className="flex gap-2"
                >
                  <input
                    type="text"
                    value={nameInput}
                    onChange={(e) => setNameInput(e.target.value)}
                    placeholder="Ad Soyad"
                    className="flex-1 bg-navy-700 border border-slate-600 text-white placeholder-slate-400 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold-500/50 transition-colors"
                    autoFocus
                  />
                  <button
                    type="submit"
                    disabled={!nameInput.trim()}
                    className="px-4 py-3 bg-gold-500 text-navy-900 rounded-xl font-semibold text-sm hover:bg-gold-400 transition-colors disabled:opacity-40"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </button>
                </form>
              </div>
            )}

            {step === "service" && (
              <div className="space-y-3">
                <div className="bg-navy-700 text-slate-200 px-4 py-3 rounded-2xl rounded-bl-md text-sm leading-relaxed">
                  Merhaba {userName}, hoş geldiniz! Hangi hizmetimizle
                  ilgileniyorsunuz?
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {services.map((service) => (
                    <button
                      key={service}
                      onClick={() => handleServiceSelect(service)}
                      className="px-3 py-3 bg-navy-700 border border-slate-600 text-slate-200 rounded-xl text-sm font-medium hover:bg-gold-500/20 hover:border-gold-500/50 hover:text-gold-400 transition-all text-left"
                    >
                      {service}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === "chat" && (
              <>
                {messages.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                        msg.role === "user"
                          ? "bg-gold-500 text-navy-900 rounded-br-md"
                          : "bg-navy-700 text-slate-200 rounded-bl-md"
                      }`}
                    >
                      {msg.content.split("\n").map((line, li) => (
                        <span key={li}>
                          {line.includes("wa.me") ? (
                            <a
                              href={getWhatsAppLink()}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 mt-2 px-4 py-2 bg-green-600 text-white rounded-lg font-medium text-sm hover:bg-green-500 transition-colors"
                            >
                              <svg
                                className="w-4 h-4"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                              </svg>
                              WhatsApp ile Devam Et
                            </a>
                          ) : (
                            <>
                              {line}
                              {li < msg.content.split("\n").length - 1 && <br />}
                            </>
                          )}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
                {loading && (
                  <div className="flex justify-start">
                    <div className="bg-navy-700 text-slate-400 px-4 py-3 rounded-2xl rounded-bl-md text-sm">
                      <span className="inline-flex gap-1">
                        <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" />
                        <span
                          className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.1s" }}
                        />
                        <span
                          className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        />
                      </span>
                    </div>
                  </div>
                )}
              </>
            )}
            <div ref={messagesEndRef} />
          </div>

          {step === "chat" && (
            <div className="px-4 py-3 border-t border-slate-700/50 bg-navy-900/50">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  sendMessage();
                }}
                className="flex gap-2"
              >
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Mesajınızı yazın..."
                  className="flex-1 bg-navy-700 border border-slate-600 text-white placeholder-slate-400 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold-500/50 transition-colors"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || loading}
                  className="px-4 py-3 bg-gold-500 text-navy-900 rounded-xl font-semibold text-sm hover:bg-gold-400 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                </button>
              </form>
            </div>
          )}
        </div>
      )}
    </>
  );
}
