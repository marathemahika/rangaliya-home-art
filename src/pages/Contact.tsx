import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in all required fields.");
      return;
    }
    toast.success("Message sent! I'll respond within 24-48 hours.");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12">
          <p className="text-xs tracking-widest uppercase text-muted-foreground mb-2">Get In Touch</p>
          <h1 className="text-4xl md:text-5xl mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}>
            Contact
          </h1>
          <p className="text-muted-foreground leading-relaxed max-w-xl">
            Questions about a piece, shipping, or pricing? Interested in purchasing? Drop me a message and I'll get back to you promptly.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="text-xs tracking-wider uppercase text-muted-foreground mb-2 block">Name *</label>
              <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} maxLength={100} />
            </div>
            <div>
              <label className="text-xs tracking-wider uppercase text-muted-foreground mb-2 block">Email *</label>
              <Input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} maxLength={255} />
            </div>
          </div>
          <div>
            <label className="text-xs tracking-wider uppercase text-muted-foreground mb-2 block">Subject</label>
            <Input value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} placeholder="e.g. Purchase inquiry, Shipping question" maxLength={200} />
          </div>
          <div>
            <label className="text-xs tracking-wider uppercase text-muted-foreground mb-2 block">Message *</label>
            <Textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows={6}
              placeholder="How can I help?"
              maxLength={2000}
            />
          </div>
          <Button type="submit" size="lg" className="tracking-wider uppercase text-xs">
            Send Message
          </Button>
        </form>

        <div className="mt-16 pt-12 border-t border-border grid sm:grid-cols-2 gap-8">
          <div>
            <h3 className="text-sm tracking-wider uppercase mb-2 text-foreground">Email</h3>
            <p className="text-sm text-muted-foreground">hello@rangaliya.com</p>
          </div>
          <div>
            <h3 className="text-sm tracking-wider uppercase mb-2 text-foreground">Social</h3>
            <p className="text-sm text-muted-foreground">Instagram · Pinterest</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
