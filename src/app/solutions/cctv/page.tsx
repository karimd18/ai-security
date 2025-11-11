"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Video, Eye, Brain, AlertTriangle, Clock, Shield, TrendingUp, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function CCTVSystems() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="relative pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-[hsl(var(--brand-accent-1))]/10 text-[hsl(var(--brand-accent-1))] border-[hsl(var(--brand-accent-1))]/30">
                Video Surveillance
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                AI-Powered
                <br />
                <span className="text-[hsl(var(--brand-accent-1))]">CCTV Systems</span>
              </h1>
              <p className="text-xl text-[hsl(var(--brand-muted))] mb-8 leading-relaxed">
                Intelligent video surveillance with real-time threat detection, facial recognition, and predictive analytics that transform passive recording into active prevention.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-[hsl(var(--brand-accent-1))] hover:bg-[hsl(var(--brand-accent-1))]/90 text-lg text-[hsl(var(--brand-bg))]" asChild>
                  <Link href="/contact">Request Quote</Link>
                </Button>
                <Button className="border-[hsl(var(--brand-accent-1))] text-lg text-[hsl(var(--brand-accent-1))]" asChild>
                  <Link href="/projects">View Case Studies</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-[hsl(var(--brand-accent-1))]/20 to-[hsl(var(--brand-accent-2))]/20 border border-[hsl(var(--brand-border))] flex items-center justify-center">
                <Video className="h-32 w-32 text-[hsl(var(--brand-accent-1))]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 bg-gradient-to-b from-transparent to-[hsl(var(--brand-surface))]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">AI-Enhanced Capabilities</h2>
            <p className="text-xl text-[hsl(var(--brand-muted))] max-w-3xl mx-auto">
              Beyond traditional recording, our CCTV systems use artificial intelligence to understand, predict, and prevent security incidents.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Eye,
                title: "Smart Anomaly Detection",
                description: "Computer vision algorithms identify unusual behavior patterns in real-time, alerting operators to potential threats before they escalate."
              },
              {
                icon: Brain,
                title: "Facial Recognition",
                description: "Privacy-compliant facial verification with liveness detection for access control integration and watchlist matching."
              },
              {
                icon: AlertTriangle,
                title: "Predictive Incident Alerts",
                description: "Machine learning predicts potential incidents based on behavior patterns, crowd density, and historical data analysis."
              },
              {
                icon: Clock,
                title: "Automated Threat Classification",
                description: "AI instantly categorizes threats by severity, automatically routing high-priority alerts to appropriate responders."
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
              <h2 className="text-3xl font-bold mb-6">Technical Specifications</h2>
              <div className="space-y-4">
                {[
                  { label: "Resolution", value: "4K to 8K Ultra HD" },
                  { label: "Frame Rate", value: "Up to 60 FPS" },
                  { label: "Night Vision", value: "IR up to 100m, Starlight Technology" },
                  { label: "Storage", value: "Cloud + On-premise hybrid with 30-90 day retention" },
                  { label: "Analytics", value: "Real-time AI processing at camera edge" },
                  { label: "Integration", value: "VMS, Access Control, Alarm Systems" },
                  { label: "Weatherproof", value: "IP67/IP68 rated for harsh environments" },
                  { label: "Power", value: "PoE, PoE+, 12V DC options" }
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
                  "Reduce false alarms by 45% through AI filtering",
                  "Detect threats 3x faster than human monitoring",
                  "24/7 automated monitoring with zero fatigue",
                  "Searchable video database with natural language queries",
                  "Automatic incident reports with video evidence",
                  "Privacy protection with configurable blur zones",
                  "Scalable from single location to enterprise networks",
                  "Predictive maintenance prevents 60% of camera failures"
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
          <h2 className="text-3xl font-bold mb-12 text-center">Use Cases</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Perimeter Security",
                description: "AI-powered intrusion detection along boundaries with automatic tracking and alert escalation.",
                metrics: ["99.8% detection rate", "< 5 second alert time", "85% false alarm reduction"]
              },
              {
                title: "Retail Loss Prevention",
                description: "Behavior analysis identifies shoplifting patterns, suspicious activity, and POS transaction monitoring.",
                metrics: ["42% theft reduction", "Real-time alerts", "Automatic evidence collection"]
              },
              {
                title: "Traffic & Parking",
                description: "License plate recognition, traffic flow analysis, parking occupancy monitoring, and violation detection.",
                metrics: ["100% plate accuracy", "Real-time availability", "Automated enforcement"]
              }
            ].map((useCase, index) => (
              <Card key={index} className="p-6 border-[hsl(var(--brand-border))] hover:border-[hsl(var(--brand-accent-1))]/50 transition-all">
                <h3 className="text-xl font-semibold mb-3">{useCase.title}</h3>
                <p className="text-sm text-[hsl(var(--brand-muted))] mb-4 leading-relaxed">{useCase.description}</p>
                <div className="space-y-2">
                  {useCase.metrics.map((metric, i) => (
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
          <h2 className="text-4xl font-bold mb-6">Ready to Upgrade Your Video Surveillance?</h2>
          <p className="text-xl text-[hsl(var(--brand-muted))] mb-10 max-w-3xl mx-auto">
            Schedule a site assessment and discover how AI-powered CCTV can transform your security operations.
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
