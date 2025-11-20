"use client";

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, hsl(var(--brand-accent-1)) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-[hsl(var(--brand-accent-1))]/10 text-[hsl(var(--brand-accent-1))] border-[hsl(var(--brand-accent-1))]/30">
            Get In Touch
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Request a Design Audit
            <br />
            <span className="text-[hsl(var(--brand-accent-1))]">Let's Build Something Secure</span>
          </h1>
          <p className="text-xl text-[hsl(var(--brand-muted))] max-w-3xl mx-auto leading-relaxed">
            Share your security challenges and we'll design an AI-powered solution tailored to your needs.
          </p>
        </div>
      </section>

      <section className="relative py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="p-8 bg-gradient-to-br from-[hsl(var(--brand-surface))] to-transparent border-[hsl(var(--brand-border))]">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        required
                        className="bg-[hsl(var(--brand-surface))] border-[hsl(var(--brand-border))]"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company *</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Your Company"
                        required
                        className="bg-[hsl(var(--brand-surface))] border-[hsl(var(--brand-border))]"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@company.com"
                        required
                        className="bg-[hsl(var(--brand-surface))] border-[hsl(var(--brand-border))]"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+971 XX XXX XXXX"
                        required
                        className="bg-[hsl(var(--brand-surface))] border-[hsl(var(--brand-border))]"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="projectType">Project Type *</Label>
                      <Select value={formData.projectType} onValueChange={(value) => setFormData({ ...formData, projectType: value })}>
                        <SelectTrigger className="bg-[hsl(var(--brand-surface))] border-[hsl(var(--brand-border))]">
                          <SelectValue placeholder="Select project type" />
                        </SelectTrigger>
                        <SelectContent className="bg-[hsl(var(--brand-bg))] border-[hsl(var(--brand-border))]">
                          <SelectItem value="cctv">CCTV Systems</SelectItem>
                          <SelectItem value="access">Access Control</SelectItem>
                          <SelectItem value="fire">Fire Alarm</SelectItem>
                          <SelectItem value="intrusion">Intrusion Alarm</SelectItem>
                          <SelectItem value="automation">Home Automation</SelectItem>
                          <SelectItem value="robotics">Robotics</SelectItem>
                          <SelectItem value="integration">System Integration</SelectItem>
                          <SelectItem value="consultancy">Consultancy</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    {/* <div className="space-y-2">
                      <Label htmlFor="budget">Budget Range</Label>
                      <Select value={formData.budget} onValueChange={(value) => setFormData({ ...formData, budget: value })}>
                        <SelectTrigger className="bg-[hsl(var(--brand-surface))] border-[hsl(var(--brand-border))]">
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent className="bg-[hsl(var(--brand-bg))] border-[hsl(var(--brand-border))]">
                          <SelectItem value="50k-100k">$50K - $100K</SelectItem>
                          <SelectItem value="100k-250k">$100K - $250K</SelectItem>
                          <SelectItem value="250k-500k">$250K - $500K</SelectItem>
                          <SelectItem value="500k+">$500K+</SelectItem>
                          <SelectItem value="enterprise">Enterprise (Custom)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div> */}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Project Details *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your security requirements, current challenges, and what you hope to achieve..."
                      required
                      rows={6}
                      className="bg-[hsl(var(--brand-surface))] border-[hsl(var(--brand-border))]"
                    />
                  </div>

                  <Button type="submit" className="w-full bg-[hsl(var(--brand-accent-1))] text-lg hover:bg-[hsl(var(--brand-accent-1))]/90 text-[hsl(var(--brand-bg))]">
                    <Send className="mr-2 h-5 w-5" />
                    Submit Request
                  </Button>

                  <p className="text-xs text-[hsl(var(--brand-muted))] text-center">
                    By submitting this form, you agree to our Privacy Policy and Terms of Service.
                  </p>
                </form>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="p-6 bg-gradient-to-br from-[hsl(var(--brand-surface))] to-transparent border-[hsl(var(--brand-border))]">
                <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Mail className="h-5 w-5 text-[hsl(var(--brand-accent-1))] mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">Email</p>
                      <a href="mailto:aismail@ai-security.pro" className="text-sm text-[hsl(var(--brand-muted))] hover:text-[hsl(var(--brand-accent-1))]">
                        aismail@ai-security.pro
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Phone className="h-5 w-5 text-[hsl(var(--brand-accent-1))] mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">Phone</p>
                      <a href="tel:+96170213718" className="text-sm text-[hsl(var(--brand-muted))] hover:text-[hsl(var(--brand-accent-1))]">
                        +961 70 213 718
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-[hsl(var(--brand-accent-1))] mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">Location</p>
                      <p className="text-sm text-[hsl(var(--brand-muted))]">
                        Beirut, Lebanon
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-[hsl(var(--brand-accent-1))]/10 to-transparent border-[hsl(var(--brand-accent-1))]/30">
                <div className="flex items-center space-x-3 mb-3">
                  <MessageCircle className="h-6 w-6 text-[hsl(var(--brand-accent-1))]" />
                  <h3 className="text-lg font-semibold">WhatsApp</h3>
                </div>
                <p className="text-sm text-[hsl(var(--brand-muted))] mb-4">
                  Need immediate assistance? Chat with our team on WhatsApp.
                </p>
                <Button className="w-full border-[hsl(var(--brand-accent-1))] text-[hsl(var(--brand-accent-1))] hover:bg-[hsl(var(--brand-accent-1))]/10" asChild>
                  <a href="https://wa.me/96170213718" target="_blank" rel="noopener noreferrer">
                    Start WhatsApp Chat
                  </a>
                </Button>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-[hsl(var(--brand-surface))] to-transparent border-[hsl(var(--brand-border))]">
                <h3 className="text-lg font-semibold mb-3">Schedule a Demo</h3>
                <p className="text-sm text-[hsl(var(--brand-muted))] mb-4">
                  See our AI security solutions in action with a personalized demo.
                </p>
                <Button className="w-full" asChild>
                  <a href="https://calendly.com/aisecurity" target="_blank" rel="noopener noreferrer">
                    Book Demo Slot
                  </a>
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-12 bg-[hsl(var(--brand-surface))]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl overflow-hidden h-96 bg-[hsl(var(--brand-bg))] border border-[hsl(var(--brand-border))] flex items-center justify-center">
            <p className="text-[hsl(var(--brand-muted))]">Map Embed Placeholder</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
