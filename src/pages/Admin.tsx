import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { LogOut, Mail, Calendar, Plus, Trash2, Eye, EyeOff, X, Reply } from "lucide-react";
import type { Session } from "@supabase/supabase-js";

type EventType = "event" | "closure" | "announcement";

interface EventRow {
  id: string;
  title: string;
  description: string | null;
  event_date: string | null;
  event_end_date: string | null;
  location: string | null;
  event_type: string;
  is_active: boolean;
  created_at: string;
}

interface ContactRow {
  id: string;
  name: string;
  email: string;
  message: string;
  is_read: boolean;
  created_at: string;
}

const Admin = () => {
  const [session, setSession] = useState<Session | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authLoading, setAuthLoading] = useState(false);
  const [tab, setTab] = useState<"events" | "contacts">("events");
  const [events, setEvents] = useState<EventRow[]>([]);
  const [contacts, setContacts] = useState<ContactRow[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [newEvent, setNewEvent] = useState({ title: "", description: "", event_date: "", event_end_date: "", location: "", event_type: "event" as EventType });
  const { toast } = useToast();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      if (session) {
        checkAdmin(session.user.id);
      } else {
        setIsAdmin(false);
        setLoading(false);
      }
    });
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      if (session) {
        checkAdmin(session.user.id);
      } else {
        setLoading(false);
      }
    });
    return () => subscription.unsubscribe();
  }, []);

  const checkAdmin = async (userId: string) => {
    const { data } = await supabase.from("user_roles").select("role").eq("user_id", userId).eq("role", "admin");
    const admin = !!(data && data.length > 0);
    setIsAdmin(admin);
    setLoading(false);
    if (admin) {
      fetchEvents();
      fetchContacts();
    }
  };

  const fetchEvents = async () => {
    const { data } = await supabase.from("events").select("*").order("created_at", { ascending: false });
    if (data) setEvents(data as EventRow[]);
  };

  const fetchContacts = async () => {
    const { data } = await supabase.from("contact_submissions").select("*").order("created_at", { ascending: false });
    if (data) setContacts(data as ContactRow[]);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email: email.trim(), password });
    setAuthLoading(false);
    if (error) {
      toast({ title: "Login failed", description: error.message, variant: "destructive" });
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setSession(null);
    setIsAdmin(false);
  };

  const handleAddEvent = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newEvent.title.trim()) return;
    const { error } = await supabase.from("events").insert({
      title: newEvent.title.trim(),
      description: newEvent.description.trim() || null,
      event_date: newEvent.event_date || null,
      event_end_date: newEvent.event_end_date || null,
      location: newEvent.location.trim() || null,
      event_type: newEvent.event_type,
    });
    if (error) {
      toast({ title: "Failed to add event", variant: "destructive" });
      return;
    }
    toast({ title: "Event added!" });
    setNewEvent({ title: "", description: "", event_date: "", event_end_date: "", location: "", event_type: "event" });
    setShowForm(false);
    fetchEvents();
  };

  const toggleEventActive = async (id: string, current: boolean) => {
    await supabase.from("events").update({ is_active: !current }).eq("id", id);
    fetchEvents();
  };

  const deleteEvent = async (id: string) => {
    await supabase.from("events").delete().eq("id", id);
    fetchEvents();
  };

  const toggleRead = async (id: string, current: boolean) => {
    await supabase.from("contact_submissions").update({ is_read: !current }).eq("id", id);
    fetchContacts();
  };

  const deleteContact = async (id: string) => {
    await supabase.from("contact_submissions").delete().eq("id", id);
    fetchContacts();
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center bg-background"><p className="text-primary text-lg font-bold">Loading...</p></div>;
  }

  // Login screen
  if (!session) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4" style={{ backgroundColor: "#fdf2e9" }}>
        <div className="bg-background border-2 border-primary rounded-xl p-8 w-full max-w-md shadow-lg">
          <h1 className="text-primary text-3xl font-bold tracking-wide text-center mb-6" style={{ fontFamily: "var(--font-display)" }}>
            ADMIN LOGIN
          </h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border-2 border-primary/30 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full border-2 border-primary/30 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary"
            />
            <button type="submit" disabled={authLoading} className="btn-primary rounded-full w-full disabled:opacity-50">
              {authLoading ? "SIGNING IN..." : "SIGN IN"}
            </button>
          </form>
        </div>
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4" style={{ backgroundColor: "#fdf2e9" }}>
        <div className="text-center">
          <p className="text-primary text-xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>ACCESS DENIED</p>
          <p className="text-muted-foreground text-sm mb-4">You don't have admin permissions.</p>
          <button onClick={handleLogout} className="btn-primary rounded-full">SIGN OUT</button>
        </div>
      </div>
    );
  }

  // Admin dashboard
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#fdf2e9" }}>
      {/* Top bar */}
      <div className="bg-primary px-4 py-3 flex items-center justify-between">
        <h1 className="text-primary-foreground text-xl font-bold tracking-wide" style={{ fontFamily: "var(--font-display)" }}>
          FATBOY ADMIN
        </h1>
        <button onClick={handleLogout} className="text-primary-foreground/80 hover:text-primary-foreground flex items-center gap-2 text-sm">
          <LogOut size={16} /> Sign Out
        </button>
      </div>

      {/* Tabs */}
      <div className="flex border-b-2 border-primary/20">
        <button
          onClick={() => setTab("events")}
          className={`flex-1 py-3 text-sm font-bold tracking-wider text-center transition-colors ${tab === "events" ? "text-primary" : "bg-primary text-primary-foreground"}`}
          style={{ fontFamily: "var(--font-display)", backgroundColor: tab === "events" ? "#fdf2e9" : undefined }}
        >
          <Calendar size={16} className="inline mr-2" />
          EVENTS
        </button>
        <button
          onClick={() => setTab("contacts")}
          className={`flex-1 py-3 text-sm font-bold tracking-wider text-center transition-colors relative ${tab === "contacts" ? "text-primary" : "bg-primary text-primary-foreground"}`}
          style={{ fontFamily: "var(--font-display)", backgroundColor: tab === "contacts" ? "#fdf2e9" : undefined }}
        >
          <Mail size={16} className="inline mr-2" />
          MESSAGES
          {contacts.filter(c => !c.is_read).length > 0 && (
            <span className="ml-2 bg-secondary text-secondary-foreground text-xs px-2 py-0.5 rounded-full">
              {contacts.filter(c => !c.is_read).length}
            </span>
          )}
        </button>
      </div>

      <div className="p-4 md:p-8 max-w-4xl mx-auto">
        {tab === "events" && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-primary text-xl font-bold tracking-wide" style={{ fontFamily: "var(--font-display)" }}>MANAGE EVENTS</h2>
              <button onClick={() => setShowForm(!showForm)} className="btn-primary rounded-full text-xs inline-flex items-center gap-1">
                {showForm ? <><X size={14} /> CANCEL</> : <><Plus size={14} /> ADD EVENT</>}
              </button>
            </div>

            {showForm && (
              <form onSubmit={handleAddEvent} className="bg-background border-2 border-primary/20 rounded-xl p-6 mb-6 space-y-4">
                <div>
                  <label className="block text-primary text-xs font-bold tracking-wider mb-1 uppercase" style={{ fontFamily: "var(--font-display)" }}>Title *</label>
                  <input type="text" value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} maxLength={200} required className="w-full border-2 border-primary/20 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary" />
                </div>
                <div>
                  <label className="block text-primary text-xs font-bold tracking-wider mb-1 uppercase" style={{ fontFamily: "var(--font-display)" }}>Description</label>
                  <textarea value={newEvent.description} onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })} maxLength={1000} rows={3} className="w-full border-2 border-primary/20 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary resize-none" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-primary text-xs font-bold tracking-wider mb-1 uppercase" style={{ fontFamily: "var(--font-display)" }}>Start Date</label>
                    <input type="date" value={newEvent.event_date} onChange={(e) => setNewEvent({ ...newEvent, event_date: e.target.value })} className="w-full border-2 border-primary/20 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary" />
                  </div>
                  <div>
                    <label className="block text-primary text-xs font-bold tracking-wider mb-1 uppercase" style={{ fontFamily: "var(--font-display)" }}>End Date <span className="font-normal">(optional)</span></label>
                    <input type="date" value={newEvent.event_end_date} onChange={(e) => setNewEvent({ ...newEvent, event_end_date: e.target.value })} className="w-full border-2 border-primary/20 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary" />
                  </div>
                  <div>
                    <label className="block text-primary text-xs font-bold tracking-wider mb-1 uppercase" style={{ fontFamily: "var(--font-display)" }}>Location</label>
                    <input type="text" value={newEvent.location} onChange={(e) => setNewEvent({ ...newEvent, location: e.target.value })} maxLength={200} className="w-full border-2 border-primary/20 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary" placeholder="e.g. Southside" />
                  </div>
                  <div>
                    <label className="block text-primary text-xs font-bold tracking-wider mb-1 uppercase" style={{ fontFamily: "var(--font-display)" }}>Type</label>
                    <select value={newEvent.event_type} onChange={(e) => setNewEvent({ ...newEvent, event_type: e.target.value as EventType })} className="w-full border-2 border-primary/20 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary">
                      <option value="event">Event</option>
                      <option value="closure">Closure / Closed Today</option>
                      <option value="announcement">Announcement</option>
                    </select>
                  </div>
                </div>
                <button type="submit" className="btn-primary rounded-full text-xs">SAVE EVENT</button>
              </form>
            )}

            {events.length === 0 ? (
              <p className="text-muted-foreground text-sm text-center py-8">No events yet. Click "Add Event" to create one.</p>
            ) : (
              <div className="space-y-3">
                {events.map((ev) => (
                  <div key={ev.id} className={`bg-background border-2 rounded-xl p-4 flex items-start justify-between gap-4 ${ev.is_active ? "border-primary/20" : "border-muted opacity-60"}`}>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className={`text-xs px-2 py-0.5 rounded-full font-bold tracking-wider uppercase ${ev.event_type === "closure" ? "bg-primary text-primary-foreground" : ev.event_type === "announcement" ? "bg-secondary text-secondary-foreground" : "bg-muted text-muted-foreground"}`} style={{ fontFamily: "var(--font-display)" }}>
                          {ev.event_type}
                        </span>
                        {!ev.is_active && <span className="text-xs text-muted-foreground">(Hidden)</span>}
                      </div>
                      <p className="text-primary font-bold text-sm mt-1">{ev.title}</p>
                      {ev.description && <p className="text-muted-foreground text-xs mt-1">{ev.description}</p>}
                      <div className="flex gap-3 mt-1 text-xs text-muted-foreground">
                        {ev.event_date && <span>📅 {new Date(ev.event_date).toLocaleDateString()}{ev.event_end_date ? ` – ${new Date(ev.event_end_date).toLocaleDateString()}` : ""}</span>}
                        {ev.location && <span>📍 {ev.location}</span>}
                      </div>
                    </div>
                    <div className="flex items-center gap-1 shrink-0">
                      <button onClick={() => toggleEventActive(ev.id, ev.is_active)} className="p-2 text-primary hover:bg-primary/10 rounded-lg" title={ev.is_active ? "Hide" : "Show"}>
                        {ev.is_active ? <Eye size={16} /> : <EyeOff size={16} />}
                      </button>
                      <button onClick={() => deleteEvent(ev.id)} className="p-2 text-primary hover:bg-primary/10 rounded-lg" title="Delete">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {tab === "contacts" && (
          <div>
            <h2 className="text-primary text-xl font-bold tracking-wide mb-6" style={{ fontFamily: "var(--font-display)" }}>CONTACT MESSAGES</h2>
            {contacts.length === 0 ? (
              <p className="text-muted-foreground text-sm text-center py-8">No messages yet.</p>
            ) : (
              <div className="space-y-3">
                {contacts.map((c) => (
                  <div key={c.id} className={`bg-background border-2 rounded-xl p-4 ${c.is_read ? "border-muted" : "border-primary/30"}`}>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          {!c.is_read && <span className="w-2 h-2 bg-primary rounded-full shrink-0" />}
                          <p className="text-primary font-bold text-sm">{c.name}</p>
                        </div>
                        <p className="text-muted-foreground text-xs">{c.email}</p>
                        <p className="text-foreground text-sm mt-2">{c.message}</p>
                        <div className="flex items-center gap-3 mt-3">
                          <a
                            href={`mailto:${encodeURIComponent(c.email)}?subject=${encodeURIComponent("Re: Your message to Fatboy Fried Rice")}&body=${encodeURIComponent(`Hi ${c.name},\n\nThank you for reaching out!\n\n---\nOriginal message:\n${c.message}`)}`}
                            className="btn-primary rounded-full text-xs inline-flex items-center gap-1 px-4 py-2"
                          >
                            <Reply size={14} /> REPLY
                          </a>
                          <p className="text-muted-foreground text-xs">{new Date(c.created_at).toLocaleString()}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 shrink-0">
                        <button onClick={() => toggleRead(c.id, c.is_read)} className="p-2 text-primary hover:bg-primary/10 rounded-lg" title={c.is_read ? "Mark unread" : "Mark read"}>
                          {c.is_read ? <EyeOff size={16} /> : <Eye size={16} />}
                        </button>
                        <button onClick={() => deleteContact(c.id)} className="p-2 text-primary hover:bg-primary/10 rounded-lg" title="Delete">
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;
