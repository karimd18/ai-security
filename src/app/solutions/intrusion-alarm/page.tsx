"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bell, AlertTriangle, Shield, Zap, TrendingUp, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function IntrusionAlarm() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="relative pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-[hsl(var(--brand-accent-1))]/10 text-[hsl(var(--brand-accent-1))] border-[hsl(var(--brand-accent-1))]/30">
                Perimeter & Intrusion Detection
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Intelligent
                <br />
                <span className="text-[hsl(var(--brand-accent-1))]">Intrusion Alarms</span>
              </h1>
              <p className="text-xl text-[hsl(var(--brand-muted))] mb-8 leading-relaxed">
                Machine learning-powered intrusion detection with false alarm prevention, behavior analysis, and intelligent threat prioritization.
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
                <Bell className="h-32 w-32 text-[hsl(var(--brand-accent-1))]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 bg-gradient-to-b from-transparent to-[hsl(var(--brand-surface))]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">AI-Enhanced Detection</h2>
            <p className="text-xl text-[hsl(var(--brand-muted))] max-w-3xl mx-auto">
              Advanced algorithms that distinguish real threats from environmental factors, dramatically reducing false alarms while improving security.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Shield,
                title: "Behavior Analysis",
                description: "AI learns normal patterns and detects anomalies that indicate genuine intrusion attempts versus environmental factors."
              },
              {
                icon: AlertTriangle,
                title: "False Alarm Reduction",
                description: "Machine learning reduces false alarms by 55% through pattern recognition and multi-sensor correlation."
              },
              {
                icon: Zap,
                title: "Multi-Sensor Fusion",
                description: "Combines PIR, microwave, glass break, and door/window contacts for comprehensive intrusion detection."
              },
              {
                icon: Bell,
                title: "Threat Prioritization",
                description: "AI ranks alerts by severity and context, ensuring security teams respond to real threats first."
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
              <h2 className="text-3xl font-bold mb-6">Sensor Technology</h2>
              <div className="space-y-4">
                {[
                  { label: "PIR Motion Detectors", value: "Pet-immune up to 40kg" },
                  { label: "Dual-Tech Sensors", value: "PIR + Microwave" },
                  { label: "Glass Break Detectors", value: "Acoustic & shock analysis" },
                  { label: "Door/Window Contacts", value: "Magnetic & recessed" },
                  { label: "Vibration Sensors", value: "Wall & fence detection" },
                  { label: "Beam Detectors", value: "Perimeter protection" },
                  { label: "Panic Buttons", value: "Duress & emergency alerts" },
                  { label: "Environmental", value: "Flood, temperature, gas" }
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
                  "55% reduction in false alarms with AI filtering",
                  "Pet-friendly sensors for residential applications",
                  "24/7 monitoring with instant alert notifications",
                  "Battery backup ensures continuous protection",
                  "Integration with CCTV for visual verification",
                  "Mobile app control and real-time status",
                  "Geo-fencing for automatic arm/disarm",
                  "Environmental monitoring included"
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
          <h2 className="text-3xl font-bold mb-12 text-center">Applications</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Residential Security",
                description: "Protect homes with pet-immune sensors, smartphone control, and professional monitoring integration.",
                metrics: ["Pet-friendly detection", "Smart home integration", "Automatic police dispatch"]
              },
              {
                title: "Commercial Buildings",
                description: "Secure offices, warehouses, and retail spaces with zoned detection and after-hours protection.",
                metrics: ["Zone-based arming", "Scheduled automation", "Employee app access"]
              },
              {
                title: "Critical Infrastructure",
                description: "High-security perimeter protection for power plants, telecom facilities, and government buildings.",
                metrics: ["Multi-layer detection", "Redundant systems", "Integration with barriers"]
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
          <h2 className="text-4xl font-bold mb-6">Secure Your Perimeter</h2>
          <p className="text-xl text-[hsl(var(--brand-muted))] mb-10 max-w-3xl mx-auto">
            Get a comprehensive security assessment and custom intrusion detection design.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button className="bg-[hsl(var(--brand-accent-1))] hover:bg-[hsl(var(--brand-accent-1))]/90 text-lg text-[hsl(var(--brand-bg))] px-8" asChild>
              <Link href="/contact">Schedule Assessment</Link>
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
