"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Network, Brain, Zap, Shield, TrendingUp, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function SystemIntegration() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="relative pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-[hsl(var(--brand-accent-1))]/10 text-[hsl(var(--brand-accent-1))] border-[hsl(var(--brand-accent-1))]/30">
                Unified Security Platform
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Security Systems
                <br />
                <span className="text-[hsl(var(--brand-accent-1))]">Integration</span>
              </h1>
              <p className="text-xl text-[hsl(var(--brand-muted))] mb-8 leading-relaxed">
                Central AI brain for unified system coordination, cross-system event correlation, and automated response orchestration.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-[hsl(var(--brand-accent-1))] hover:bg-[hsl(var(--brand-accent-1))]/90 text-lg text-[hsl(var(--brand-bg))]" asChild>
                  <Link href="/contact">Request Integration Plan</Link>
                </Button>
                <Button className="border-[hsl(var(--brand-accent-1))] text-lg text-[hsl(var(--brand-accent-1))]" asChild>
                  <Link href="/projects">View Integrations</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-[hsl(var(--brand-accent-1))]/20 to-[hsl(var(--brand-accent-2))]/20 border border-[hsl(var(--brand-border))] flex items-center justify-center">
                <Network className="h-32 w-32 text-[hsl(var(--brand-accent-1))]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 bg-gradient-to-b from-transparent to-[hsl(var(--brand-surface))]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Unified Intelligence Layer</h2>
            <p className="text-xl text-[hsl(var(--brand-muted))] max-w-3xl mx-auto">
              Break down silos between security systems with AI-powered integration that makes all systems work together intelligently.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Brain,
                title: "Central AI Coordination",
                description: "Single AI brain orchestrates all security systems, sharing intelligence and coordinating responses automatically."
              },
              {
                icon: Zap,
                title: "Event Correlation",
                description: "Cross-system analysis identifies relationships between events that individual systems would miss."
              },
              {
                icon: Shield,
                title: "Unified Threat Intelligence",
                description: "Aggregate threat data from all sources into a single intelligence feed with priority-based alerting."
              },
              {
                icon: Network,
                title: "Automated Response",
                description: "Pre-defined workflows trigger coordinated actions across all systems based on threat scenarios."
              }
            ].map((feature, index) => (
              <Card key={index} className="p-6 border-[hsl(var(--brand-border))] hover:border-[hsl(var(--brand-accent-1))]/50 transition-all">
                <feature.icon className="h-10 w-10 text-[hsl(var(--brand-accent-1))] mb-4" />
                <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                <p className="text-sm text-[hsl(var(--brand-muted))] leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Integration Capabilities</h2>
              <div className="space-y-4">
                {[
                  { label: "Video Management", value: "All major VMS platforms" },
                  { label: "Access Control", value: "HID, Lenel, Gallagher, etc." },
                  { label: "Intrusion Alarms", value: "Honeywell, Bosch, DSC" },
                  { label: "Fire Systems", value: "Notifier, Simplex, Edwards" },
                  { label: "Building Automation", value: "BMS/BAS integration" },
                  { label: "IT Systems", value: "Active Directory, SIEM" },
                  { label: "Emergency", value: "Mass notification, PA" },
                  { label: "APIs", value: "RESTful, SOAP, MQTT" }
                ].map((spec, index) => (
                  <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-[hsl(var(--brand-surface))] border border-[hsl(var(--brand-border))]">
                    <span className="font-medium">{spec.label}</span>
                    <span className="text-[hsl(var(--brand-muted))]">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Key Benefits</h2>
              <div className="space-y-4">
                {[
                  "Single dashboard for all security systems",
                  "Automated workflows reduce response time by 50%",
                  "Cross-system event correlation finds hidden threats",
                  "Unified reporting and compliance documentation",
                  "Eliminate manual data entry between systems",
                  "Reduce false alarms through multi-system verification",
                  "Maximize ROI from existing security investments",
                  "Future-proof with open architecture"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle2 className="h-6 w-6 text-[hsl(var(--brand-accent-1))] flex-shrink-0 mt-0.5" />
                    <span className="text-[hsl(var(--brand-muted))]">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 bg-gradient-to-br from-[hsl(var(--brand-accent-1))]/5 via-[hsl(var(--brand-accent-2))]/5 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Integration Scenarios</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Unauthorized Access Attempt",
                description: "Access denied → CCTV records → Guard alerted → Door reinforced → Security dispatched → Log created",
                metrics: ["Multi-system trigger", "Automated escalation", "Full audit trail"]
              },
              {
                title: "Fire Emergency",
                description: "Fire detected → Elevators recalled → Access doors unlock → PA announces → HVAC shuts down → 911 called",
                metrics: ["Life safety priority", "Coordinated response", "Regulatory compliance"]
              },
              {
                title: "After Hours Intrusion",
                description: "Motion detected → Lights activate → CCTV focuses → Guard alerted → Two-way audio → Police dispatch",
                metrics: ["Deterrent actions", "Evidence collection", "Rapid response"]
              }
            ].map((scenario, index) => (
              <Card key={index} className="p-6 border-[hsl(var(--brand-border))] hover:border-[hsl(var(--brand-accent-1))]/50 transition-all">
                <h3 className="text-xl font-semibold mb-3">{scenario.title}</h3>
                <p className="text-sm text-[hsl(var(--brand-muted))] mb-4 leading-relaxed">{scenario.description}</p>
                <div className="space-y-2">
                  {scenario.metrics.map((metric, i) => (
                    <div key={i} className="flex items-center space-x-2 text-sm">
                      <TrendingUp className="h-4 w-4 text-[hsl(var(--brand-accent-1))]" />
                      <span>{metric}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Unify Your Security Systems</h2>
          <p className="text-xl text-[hsl(var(--brand-muted))] mb-10 max-w-3xl mx-auto">
            Get a comprehensive integration assessment and discover how AI can orchestrate your security infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button className="bg-[hsl(var(--brand-accent-1))] hover:bg-[hsl(var(--brand-accent-1))]/90 text-lg text-[hsl(var(--brand-bg))] px-8" asChild>
              <Link href="/contact">Request Assessment</Link>
            </Button>
            <Button className="border-[hsl(var(--brand-accent-1))] text-lg text-[hsl(var(--brand-accent-1))] px-8" asChild>
              <Link href="/solutions">View All Solutions</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
