"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Bot, Eye, Navigation, Shield, Zap, Clock } from "lucide-react";

export default function Robotics() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="relative pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-[hsl(var(--brand-accent-1))]/10 text-[hsl(var(--brand-accent-1))] border-[hsl(var(--brand-accent-1))]/30">
            Security Robotics
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Autonomous Patrol Robots
            <br />
            <span className="text-[hsl(var(--brand-accent-1))]">AI-Powered 24/7 Protection</span>
          </h1>
          <p className="text-xl text-[hsl(var(--brand-muted))] max-w-3xl mx-auto">
            Intelligent mobile units that patrol, detect, and respond to threats autonomously.
          </p>
        </div>
      </section>

      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Navigation, title: "Autonomous Navigation", desc: "Self-guided patrol routes with obstacle avoidance" },
              { icon: Eye, title: "Visual Threat Detection", desc: "AI-powered object and behavior recognition" },
              { icon: Shield, title: "Perimeter Security", desc: "24/7 continuous monitoring of boundaries" },
              { icon: Zap, title: "Real-Time Alerts", desc: "Instant notifications to control centers" },
              { icon: Bot, title: "VMS Integration", desc: "Seamless connection with existing systems" },
              { icon: Clock, title: "Always Active", desc: "No breaks, no shifts, constant vigilance" },
            ].map((feature, index) => (
              <Card key={index} className="p-6 border-[hsl(var(--brand-border))] hover:border-[hsl(var(--brand-accent-1))]/50 transition-all">
                <feature.icon className="h-10 w-10 text-[hsl(var(--brand-accent-1))] mb-4" />
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-[hsl(var(--brand-muted))]">{feature.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
