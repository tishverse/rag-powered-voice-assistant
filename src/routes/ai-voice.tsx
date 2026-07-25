import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Mic, Sparkles, MessageCircle, Send, User, Bot } from "lucide-react";
import { ConversationProvider, useConversation } from "@elevenlabs/react";

export const Route = createFileRoute("/ai-voice")({
  head: () => ({
    meta: [
      { title: "AI Voice Assistant — Aetherix" },
      { name: "description", content: "Meet Aetherix AI — a voice-powered assistant that helps you with your devices, orders, and everyday questions." },
      { property: "og:title", content: "Aetherix AI Voice Assistant" },
      { property: "og:description", content: "Talk to the smartest voice assistant, built by Aetherix." },
    ],
  }),
  component: AiVoicePage,
});

function AiVoicePage() {
  return (
    <ConversationProvider>
      <AiVoice />
    </ConversationProvider>
  );
}

const examples = [
  "Track my recent order",
  "How do I reset my PulseWatch?",
  "Compare AeroBook X14 and VisionPad 11",
  "Recommend earbuds for running",
  "Is my device under warranty?",
];

const AGENT_ID = "agent_6501ky44xffcffj9mdk2kr8qfzy5";

type Msg = { id: string; role: "user" | "assistant"; text: string };

function makeId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

function AiVoice() {
  const [messages, setMessages] = useState<Msg[]>([]);
  const [mode, setMode] = useState<"listening" | "speaking" | "idle">("idle");
  const [ended, setEnded] = useState(false);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  const appendMessage = useCallback((role: "user" | "assistant", text: string) => {
    if (!text?.trim()) return;
    setMessages((prev) => [...prev, { id: makeId(), role, text }]);
  }, []);

  const conversation = useConversation({
    onConnect: () => setEnded(false),
    onDisconnect: () => {
      setMode("idle");
      setEnded(true);
    },
    onError: (e) => console.error("ElevenLabs error:", e),
    onModeChange: ({ mode }: { mode: string }) => {
      if (mode === "speaking") setMode("speaking");
      else if (mode === "listening") setMode("listening");
      else setMode("idle");
    },
    onMessage: (msg: any) => {
      // The SDK emits different shapes; handle common ones.
      const type = msg?.type;
      if (type === "user_transcript") {
        const text = msg?.user_transcription_event?.user_transcript ?? msg?.message;
        if (text) appendMessage("user", text);
        return;
      }
      if (type === "agent_response") {
        const text = msg?.agent_response_event?.agent_response ?? msg?.message;
        if (text) appendMessage("assistant", text);
        return;
      }
      if (type === "agent_response_correction") {
        const text = msg?.agent_response_correction_event?.corrected_agent_response;
        if (text) {
          setMessages((prev) => {
            // Replace last assistant with correction
            for (let i = prev.length - 1; i >= 0; i--) {
              if (prev[i].role === "assistant") {
                const next = [...prev];
                next[i] = { ...next[i], text };
                return next;
              }
            }
            return [...prev, { id: makeId(), role: "assistant", text }];
          });
        }
        return;
      }
      // Fallback: SDK also emits { source, message } for user/ai
      const source = msg?.source;
      const text = msg?.message;
      if (text && (source === "user" || source === "ai")) {
        appendMessage(source === "user" ? "user" : "assistant", text);
      }
    },
  });

  const status = conversation.status;
  const connected = status === "connected";

  // Fallback mode detection via isSpeaking
  useEffect(() => {
    if (!connected) return;
    setMode(conversation.isSpeaking ? "speaking" : "listening");
  }, [conversation.isSpeaking, connected]);

  // Auto-scroll
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, mode]);

  const toggle = useCallback(async () => {
    try {
      if (connected) {
        await conversation.endSession();
      } else {
        await navigator.mediaDevices.getUserMedia({ audio: true });
        setMessages([]);
        setEnded(false);
        await conversation.startSession({
          agentId: AGENT_ID,
          connectionType: "webrtc",
        });
      }
    } catch (err) {
      console.error("Failed to toggle conversation:", err);
    }
  }, [conversation, connected]);

  const sendText = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      const text = input.trim();
      if (!text || !connected) return;
      try {
        conversation.sendUserMessage(text);
        appendMessage("user", text);
        setInput("");
      } catch (err) {
        console.error("Failed to send message:", err);
      }
    },
    [conversation, input, connected, appendMessage],
  );

  const statusLabel = useMemo(() => {
    if (!connected) return ended ? "Conversation Ended" : "Tap to Talk";
    if (mode === "speaking") return "Speaking...";
    if (mode === "listening") return "Listening...";
    return "Thinking...";
  }, [connected, ended, mode]);

  const statusSub = useMemo(() => {
    if (!connected) return ended ? "Tap the mic to start a new conversation" : "Or type your question below";
    if (mode === "speaking") return "Aetherix AI is responding";
    if (mode === "listening") return "Say something like 'track my order'";
    return "Processing your request";
  }, [connected, ended, mode]);

  return (
    <div>
      <section className="text-white" style={{ background: "var(--gradient-hero)" }}>
        <div className="mx-auto max-w-5xl px-6 py-20 text-center">
          <div className="inline-flex items-center gap-2 glass-dark rounded-full px-4 py-1.5 text-xs font-medium">
            <Sparkles className="h-3.5 w-3.5 text-electric-glow" /> Aetherix AI · Beta
          </div>
          <h1 className="mt-6 text-5xl md:text-6xl font-bold">Talk to our AI Assistant</h1>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto text-lg">
            Voice-first support that actually understands you. Ask anything about your device, orders, or the Aetherix universe.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          {/* Mic panel */}
          <div className="card-premium p-10 text-center relative overflow-hidden">
            <div className="absolute inset-0 -z-10 opacity-40" style={{ backgroundImage: "radial-gradient(circle at 50% 40%, oklch(0.62 0.24 258 / 0.25), transparent 60%)" }} />
            <div className="relative inline-grid place-items-center">
              {connected && mode === "listening" && (
                <>
                  <span className="absolute inset-0 rounded-full animate-pulse-ring" style={{ background: "var(--gradient-electric)" }} />
                  <span className="absolute inset-0 rounded-full animate-pulse-ring" style={{ background: "var(--gradient-electric)", animationDelay: "0.5s" }} />
                </>
              )}
              <button
                onClick={toggle}
                className="relative grid place-items-center h-36 w-36 rounded-full btn-electric text-white transition-transform active:scale-95"
                aria-label={connected ? "End conversation" : "Talk to assistant"}
              >
                {connected && mode === "speaking" ? (
                  <div className="flex items-end gap-1.5 h-14">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <span
                        key={i}
                        className="w-1.5 bg-white rounded-full"
                        style={{
                          animation: `eq-bar 0.9s ease-in-out ${i * 0.12}s infinite`,
                          height: "20%",
                        }}
                      />
                    ))}
                  </div>
                ) : (
                  <Mic className="h-14 w-14" strokeWidth={2.2} />
                )}
              </button>
            </div>
            <div className="mt-8 font-display text-xl font-semibold">{statusLabel}</div>
            <p className="mt-2 text-sm text-muted-foreground">{statusSub}</p>

            <div className="mt-8 text-left">
              <div className="text-xs uppercase tracking-wider font-semibold text-electric mb-3">Try asking</div>
              <div className="flex flex-wrap gap-2">
                {examples.map((e) => (
                  <button
                    key={e}
                    onClick={() => connected && conversation.sendUserMessage(e) && appendMessage("user", e)}
                    className="text-xs rounded-full bg-muted hover:bg-electric/10 hover:text-electric transition-colors px-3 py-1.5"
                  >
                    {e}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Chat history */}
          <div className="card-premium flex flex-col overflow-hidden">
            <div className="p-5 border-b border-border flex items-center gap-2">
              <MessageCircle className="h-4 w-4 text-electric" />
              <div className="font-semibold text-sm">Conversation</div>
              <span className="ml-auto text-xs text-muted-foreground">
                {connected ? (mode === "speaking" ? "Speaking" : mode === "listening" ? "Listening" : "Live") : ended ? "Ended" : "Idle"}
              </span>
            </div>
            <div ref={scrollRef} className="flex-1 p-5 space-y-4 min-h-[400px] max-h-[500px] overflow-y-auto">
              {messages.length === 0 && (
                <div className="h-full grid place-items-center text-center text-sm text-muted-foreground py-16">
                  <div>
                    <Bot className="h-8 w-8 mx-auto mb-3 text-electric" />
                    {connected ? "Say something to get started" : "Tap the mic or send a message to start the conversation"}
                  </div>
                </div>
              )}
              {messages.map((m) => (
                <div key={m.id} className={`flex gap-3 ${m.role === "user" ? "flex-row-reverse" : ""}`}>
                  <div className={`grid place-items-center h-8 w-8 rounded-full shrink-0 ${m.role === "user" ? "bg-muted" : "btn-electric"}`}>
                    {m.role === "user" ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4 text-white" />}
                  </div>
                  <div className={`max-w-[75%] rounded-2xl px-4 py-2.5 text-sm ${m.role === "user" ? "bg-electric text-white" : "bg-muted"}`}>
                    {m.text}
                  </div>
                </div>
              ))}
              {connected && (mode === "speaking" || mode === "listening") && (
                <div className="flex gap-3">
                  <div className="grid place-items-center h-8 w-8 rounded-full shrink-0 btn-electric">
                    <Bot className="h-4 w-4 text-white" />
                  </div>
                  <div className="rounded-2xl px-4 py-3 text-sm bg-muted">
                    <div className="flex gap-1">
                      <span className="h-2 w-2 rounded-full bg-electric animate-bounce" style={{ animationDelay: "0s" }} />
                      <span className="h-2 w-2 rounded-full bg-electric animate-bounce" style={{ animationDelay: "0.15s" }} />
                      <span className="h-2 w-2 rounded-full bg-electric animate-bounce" style={{ animationDelay: "0.3s" }} />
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="p-4 border-t border-border">
              <form className="flex gap-2 items-center bg-muted rounded-full pl-4 pr-1 py-1" onSubmit={sendText}>
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={connected ? "Type a message..." : "Start the conversation to send a message"}
                  className="flex-1 bg-transparent text-sm outline-none py-2 disabled:opacity-60"
                  disabled={!connected}
                />
                <button
                  type="submit"
                  disabled={!connected || !input.trim()}
                  className="grid place-items-center h-9 w-9 rounded-full btn-electric text-white disabled:opacity-50"
                  aria-label="Send"
                >
                  <Send className="h-4 w-4" />
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {[
            { title: "Natural voice", desc: "Understands accents, follow-ups, and interruptions." },
            { title: "Private by default", desc: "Voice processing happens on-device wherever possible." },
            { title: "Instant answers", desc: "Trained on every Aetherix manual, spec, and support doc." },
          ].map((f) => (
            <div key={f.title} className="card-premium p-6">
              <h3 className="font-bold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        @keyframes eq-bar {
          0%, 100% { height: 20%; }
          50% { height: 100%; }
        }
      `}</style>
    </div>
  );
}
