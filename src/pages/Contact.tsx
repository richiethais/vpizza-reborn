import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import fatboyLogo from "@/assets/fatboy-logo-new.png";
import { Mail, Send, CheckCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      toast({ title: "Please fill out all fields", variant: "destructive" });
      return;
    }

    if (trimmedName.length > 100 || trimmedEmail.length > 255 || trimmedMessage.length > 2000) {
      toast({ title: "Input too long", variant: "destructive" });
      return;
    }

    setSubmitting(true);
    const { error } = await supabase.from("contact_submissions").insert({
      name: trimmedName,
      email: trimmedEmail,
      message: trimmedMessage,
    });
    setSubmitting(false);

    if (error) {
      toast({ title: "Something went wrong. Please try again.", variant: "destructive" });
      return;
    }

    setSubmitted(true);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="md:ml-[200px] flex-1 mt-[56px] md:mt-0">
        {/* Hero */}
        <section className="bg-primary py-4 md:py-6 px-4 text-center">
          <img src={fatboyLogo} alt="Fatboy Fried Rice" className="h-24 md:h-32 w-auto mx-auto mb-2" />
          <h1
            className="text-primary-foreground text-4xl md:text-6xl font-bold tracking-wide mb-1"
            style={{ fontFamily: "var(--font-display)" }}
          >
            CONTACT US
          </h1>
          <p className="text-primary-foreground/80 text-base md:text-lg tracking-wider uppercase font-bold" style={{ fontFamily: "var(--font-display)" }}>
            We'd love to hear from you
          </p>
        </section>

        {/* Form */}
        <section className="py-12 md:py-16 px-4 md:px-8" style={{ backgroundColor: "#fdf2e9" }}>
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Mail size={28} className="text-primary" />
              <h2 className="section-heading">SEND US A MESSAGE</h2>
            </div>

            {submitted ? (
              <div className="border-2 border-primary rounded-lg p-10 text-center">
                <CheckCircle size={48} className="text-primary mx-auto mb-4" />
                <p className="text-primary text-xl font-bold tracking-wide mb-2" style={{ fontFamily: "var(--font-display)" }}>
                  MESSAGE SENT!
                </p>
                <p className="text-muted-foreground text-sm mb-6">
                  Thanks for reaching out. We'll get back to you soon.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-primary rounded-full"
                >
                  SEND ANOTHER MESSAGE
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-primary text-sm font-bold tracking-wider mb-2 uppercase" style={{ fontFamily: "var(--font-display)" }}>
                    Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    maxLength={100}
                    required
                    className="w-full border-2 border-primary/30 rounded-lg px-4 py-3 text-foreground bg-background focus:outline-none focus:border-primary transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-primary text-sm font-bold tracking-wider mb-2 uppercase" style={{ fontFamily: "var(--font-display)" }}>
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    maxLength={255}
                    required
                    className="w-full border-2 border-primary/30 rounded-lg px-4 py-3 text-foreground bg-background focus:outline-none focus:border-primary transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-primary text-sm font-bold tracking-wider mb-2 uppercase" style={{ fontFamily: "var(--font-display)" }}>
                    Message
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    maxLength={2000}
                    required
                    rows={5}
                    className="w-full border-2 border-primary/30 rounded-lg px-4 py-3 text-foreground bg-background focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="What's on your mind?"
                  />
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-primary rounded-full inline-flex items-center gap-2 disabled:opacity-50"
                >
                  <Send size={16} />
                  {submitting ? "SENDING..." : "SEND MESSAGE"}
                </button>
              </form>
            )}
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
};

export default Contact;
