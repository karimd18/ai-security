"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Flame, AlertTriangle, Bell, Shield, TrendingUp, CheckCircle2, Clock } from "lucide-react";
import Link from "next/link";

export default function FireAlarmSystems() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="relative pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-[hsl(var(--brand-accent-1))]/10 text-[hsl(var(--brand-accent-1))] border-[hsl(var(--brand-accent-1))]/30">
                Fire Detection & Safety
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                AI-Enhanced
                <br />
                <span className="text-[hsl(var(--brand-accent-1))]">Fire Alarm Systems</span>
              </h1>
              <p className="text-xl text-[hsl(var(--brand-muted))] mb-8 leading-relaxed">
                Intelligent fire detection with smoke pattern recognition, predictive maintenance, and rapid emergency response for life-critical protection.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-[hsl(var(--brand-accent-1))] hover:bg-[hsl(var(--brand-accent-1))]/90 text-lg text-[hsl(var(--brand-bg))]" asChild>
                  <Link href="/contact">Request Consultation</Link>
                </Button>
                <Button className="border-[hsl(var(--brand-accent-1))] text-lg text-[hsl(var(--brand-accent-1))]" asChild>
                  <Link href="/compliance">View Compliance</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-[hsl(var(--brand-accent-1))]/20 to-[hsl(var(--brand-accent-2))]/20 border border-[hsl(var(--brand-border))] flex items-center justify-center">
                <Flame className="h-32 w-32 text-[hsl(var(--brand-accent-1))]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 bg-gradient-to-b from-transparent to-[hsl(var(--brand-surface))]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">AI-Powered Fire Safety</h2>
            <p className="text-xl text-[hsl(var(--brand-muted))] max-w-3xl mx-auto">
              Advanced algorithms analyze smoke patterns, temperature gradients, and environmental factors for earlier detection and fewer false alarms.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: AlertTriangle,
                title: "Smoke Pattern Analysis",
                description: "AI identifies true fire signatures versus cooking smoke, steam, or dust, reducing false alarms by 65%."
              },
              {
                icon: Clock,
                title: "Early Detection",
                description: "Detect fire conditions 40% faster than traditional systems through multi-sensor data fusion and predictive algorithms."
              },
              {
                icon: Shield,
                title: "Predictive Maintenance",
                description: "AI monitors sensor health and predicts failures before they occur, ensuring system reliability when it matters most."
              },
              {
                icon: Bell,
                title: "Auto Escalation",
                description: "Automatic notification to fire departments, building management, and emergency contacts with precise location data."
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
              <h2 className="text-3xl font-bold mb-6">System Components</h2>
              <div className="space-y-4">
                {[
                  { label: "Smoke Detectors", value: "Optical, Ionization, Multi-Sensor" },
                  { label: "Heat Detectors", value: "Fixed & Rate-of-Rise" },
                  { label: "Flame Detectors", value: "UV, IR, Multi-Spectrum" },
                  { label: "Manual Call Points", value: "Break-Glass Stations" },
                  { label: "Sounders & Strobes", value: "Visual & Audible Alarms" },
                  { label: "Control Panels", value: "Addressable, Networked" },
                  { label: "Integration", value: "BMS, Sprinklers, HVAC" },
                  { label: "Compliance", value: "NFPA, FM, UL Certified" }
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
                  "65% reduction in false alarms through AI filtering",
                  "40% faster fire detection than traditional systems",
                  "Predictive maintenance prevents 95% of system failures",
                  "Automatic emergency service notification",
                  "Compliance with all international fire safety codes",
                  "Integration with building evacuation systems",
                  "Remote monitoring and system health diagnostics",
                  "Voice evacuation with AI-optimized routing"
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
                title: "Commercial Buildings",
                description: "Office complexes, shopping malls, and high-rises with advanced smoke detection and mass notification.",
                metrics: ["Multi-zone coverage", "Voice evacuation", "Emergency lighting control"]
              },
              {
                title: "Healthcare Facilities",
                description: "Hospitals and clinics with patient-safe alerts, staged evacuation, and critical area protection.",
                metrics: ["Gentle alarm tones", "Defend-in-place capability", "Integration with nurse call"]
              },
              {
                title: "Industrial Sites",
                description: "Warehouses, factories, and data centers with specialized detection for unique fire risks.",
                metrics: ["VESDA aspirating systems", "Explosion-proof devices", "Pre-action suppression"]
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
          <h2 className="text-4xl font-bold mb-6">Protect What Matters Most</h2>
          <p className="text-xl text-[hsl(var(--brand-muted))] mb-10 max-w-3xl mx-auto">
            Get a comprehensive fire safety assessment and compliance review from our certified experts.
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
