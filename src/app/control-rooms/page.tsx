"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { MonitorPlay, Layout, Workflow, Shield } from "lucide-react";

export default function ControlRooms() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="relative pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-[hsl(var(--brand-accent-1))]/10 text-[hsl(var(--brand-accent-1))] border-[hsl(var(--brand-accent-1))]/30">
            Control Rooms
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Command Centers
            <br />
            <span className="text-[hsl(var(--brand-accent-1))]">Built for Intelligence</span>
          </h1>
          <p className="text-xl text-[hsl(var(--brand-muted))] max-w-3xl mx-auto">
            Ergonomic control room design with AI-powered dashboards and redundancy planning.
          </p>
        </div>
      </section>

      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: Layout, title: "Ergonomic Design", desc: "AI-optimized layouts for operator efficiency and reduced fatigue" },
              { icon: MonitorPlay, title: "Intelligent Dashboards", desc: "Real-time data visualization with automated insights" },
              { icon: Workflow, title: "Workflow Automation", desc: "Predictive workload distribution and incident routing" },
              { icon: Shield, title: "Redundancy Planning", desc: "Failover systems and business continuity architecture" },
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
