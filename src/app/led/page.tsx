"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { MonitorPlay, AlertTriangle, Workflow, Eye } from "lucide-react";

export default function LED() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="relative pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-[hsl(var(--brand-accent-1))]/10 text-[hsl(var(--brand-accent-1))] border-[hsl(var(--brand-accent-1))]/30">
            LED Display Systems
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Intelligent Alert Displays
            <br />
            <span className="text-[hsl(var(--brand-accent-1))]">AI-Driven Content</span>
          </h1>
          <p className="text-xl text-[hsl(var(--brand-muted))] max-w-3xl mx-auto">
            Smart LED screens with AI-based content adaptation and priority routing.
          </p>
        </div>
      </section>

      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: AlertTriangle, title: "Intelligent Alerts", desc: "Automated priority-based message display" },
              { icon: MonitorPlay, title: "Content Adaptation", desc: "AI adjusts content based on incident severity" },
              { icon: Workflow, title: "Priority Routing", desc: "Critical messages override standard content" },
              { icon: Eye, title: "Situational Awareness", desc: "Real-time status displays and KPI visualization" },
            ].map((feature, index) => (
              <Card key={index} className="p-8 border-[hsl(var(--brand-border))] hover:border-[hsl(var(--brand-accent-1))]/50 transition-all">
                <feature.icon className="h-12 w-12 text-[hsl(var(--brand-accent-1))] mb-4" />
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-[hsl(var(--brand-muted))]">{feature.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
