import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const CustomOrders = () => {
  const [form, setForm] = useState({ name: "", email: "", medium: "", size: "", details: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.details.trim()) {
      toast.error("Please fill in all required fields.");
      return;
    }
    toast.success("Your custom order request has been sent! I'll get back to you soon.");
    setForm({ name: "", email: "", medium: "", size: "", details: "" });
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12">
          <p className="text-xs tracking-widest uppercase text-muted-foreground mb-2">Bespoke Art</p>
          <h1 className="text-4xl md:text-5xl mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}>
            Custom Orders
          </h1>
          <p className="text-muted-foreground leading-relaxed max-w-xl">
            Have a specific vision? I'd love to bring it to life. Share your ideas below — from color schemes to themes, size preferences to style — and I'll create a one-of-a-kind piece just for you.
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
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="text-xs tracking-wider uppercase text-muted-foreground mb-2 block">Preferred Medium</label>
              <Input value={form.medium} onChange={(e) => setForm({ ...form, medium: e.target.value })} placeholder="e.g. Oil, Watercolor, Acrylic" maxLength={100} />
            </div>
            <div>
              <label className="text-xs tracking-wider uppercase text-muted-foreground mb-2 block">Desired Size</label>
              <Input value={form.size} onChange={(e) => setForm({ ...form, size: e.target.value })} placeholder='e.g. 24" × 36"' maxLength={50} />
            </div>
          </div>
          <div>
            <label className="text-xs tracking-wider uppercase text-muted-foreground mb-2 block">Describe Your Vision *</label>
            <Textarea
              value={form.details}
              onChange={(e) => setForm({ ...form, details: e.target.value })}
              rows={6}
              placeholder="Tell me about the colors, mood, theme, or room you'd like this piece for..."
              maxLength={2000}
            />
          </div>
          <Button type="submit" size="lg" className="tracking-wider uppercase text-xs">
            Submit Request
          </Button>
        </form>
      </div>
    </div>
  );
};

export default CustomOrders;
