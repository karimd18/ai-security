"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Lightbulb, Thermometer, Lock, Zap, CheckCircle2, Smartphone } from "lucide-react";
import Link from "next/link";

export default function HomeAutomation() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="relative pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-[hsl(var(--brand-accent-1))]/10 text-[hsl(var(--brand-accent-1))] border-[hsl(var(--brand-accent-1))]/30">
                Smart Home Integration
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                AI-Powered
                <br />
                <span className="text-[hsl(var(--brand-accent-1))]">Home Automation</span>
              </h1>
              <p className="text-xl text-[hsl(var(--brand-muted))] mb-8 leading-relaxed">
                Intelligent home integration with AI-learned behavior patterns, remote monitoring, and secure automated routines for ultimate comfort and security.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-[hsl(var(--brand-accent-1))] hover:bg-[hsl(var(--brand-accent-1))]/90 text-lg text-[hsl(var(--brand-bg))]" asChild>
                  <Link href="/contact">Get Started</Link>
                </Button>
                <Button className="border-[hsl(var(--brand-accent-1))] text-lg text-[hsl(var(--brand-accent-1))]" asChild>
                  <Link href="/projects">View Projects</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-[hsl(var(--brand-accent-1))]/20 to-[hsl(var(--brand-accent-2))]/20 border border-[hsl(var(--brand-border))] flex items-center justify-center">
                <Home className="h-32 w-32 text-[hsl(var(--brand-accent-1))]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 bg-gradient-to-b from-transparent to-[hsl(var(--brand-surface))]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Intelligent Living</h2>
            <p className="text-xl text-[hsl(var(--brand-muted))] max-w-3xl mx-auto">
              AI learns your preferences and routines to create a home that anticipates your needs while maintaining security.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Lightbulb,
                title: "Smart Lighting",
                description: "AI-optimized lighting scenes that adapt to time of day, occupancy, and your preferences for energy efficiency."
              },
              {
                icon: Thermometer,
                title: "Climate Control",
                description: "Intelligent HVAC management learns your schedule and preferences while optimizing energy consumption."
              },
              {
                icon: Lock,
                title: "Security Integration",
                description: "Seamless connection with access control, CCTV, and alarm systems for comprehensive home protection."
              },
              {
                icon: Smartphone,
                title: "Remote Control",
                description: "Monitor and control your entire home from anywhere using our secure mobile app with real-time alerts."
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
              <h2 className="text-3xl font-bold mb-6">Smart Devices</h2>
              <div className="space-y-4">
                {[
                  { label: "Smart Lighting", value: "Dimming, color, scenes" },
                  { label: "Thermostats", value: "Zone control, scheduling" },
                  { label: "Door Locks", value: "Keyless, auto-lock" },
                  { label: "Window Shades", value: "Motorized, solar tracking" },
                  { label: "Cameras", value: "Indoor/outdoor, AI detection" },
                  { label: "Speakers", value: "Multi-room audio" },
                  { label: "Sensors", value: "Motion, door, water, smoke" },
                  { label: "Appliances", value: "Smart plugs, switches" }
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
                  "30% energy savings through AI optimization",
                  "Voice control with Alexa, Google, Siri",
                  "Automated security routines when away",
                  "Remote monitoring from anywhere",
                  "Scheduled scenes for daily routines",
                  "Geo-fencing for automatic welcome home",
                  "Integration with security systems",
                  "Elderly care monitoring capabilities"
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
          <h2 className="text-3xl font-bold mb-12 text-center">Automation Scenarios</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Good Morning",
                description: "Lights gradually brighten, thermostat adjusts, blinds open, coffee maker starts, security disarms.",
                metrics: ["Sunrise simulation", "Climate pre-heating", "News briefing"]
              },
              {
                title: "Away Mode",
                description: "Security arms, lights simulate occupancy, thermostats adjust for efficiency, cameras activate recording.",
                metrics: ["Random light patterns", "Energy savings mode", "Motion alerts"]
              },
              {
                title: "Good Night",
                description: "Doors lock, security arms, lights dim gradually, temperature adjusts, smart plugs turn off.",
                metrics: ["Bedtime routine", "Energy optimization", "Security verification"]
              }
            ].map((scenario, index) => (
              <Card key={index} className="p-6 border-[hsl(var(--brand-border))] hover:border-[hsl(var(--brand-accent-1))]/50 transition-all">
                <h3 className="text-xl font-semibold mb-3">{scenario.title}</h3>
                <p className="text-sm text-[hsl(var(--brand-muted))] mb-4 leading-relaxed">{scenario.description}</p>
                <div className="space-y-2">
                  {scenario.metrics.map((metric, i) => (
                    <div key={i} className="flex items-center space-x-2 text-sm">
                      <Zap className="h-4 w-4 text-[hsl(var(--brand-accent-1))]" />
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
          <h2 className="text-4xl font-bold mb-6">Transform Your Home</h2>
          <p className="text-xl text-[hsl(var(--brand-muted))] mb-10 max-w-3xl mx-auto">
            Experience intelligent living with a personalized smart home consultation and demo.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button className="bg-[hsl(var(--brand-accent-1))] hover:bg-[hsl(var(--brand-accent-1))]/90 text-lg text-[hsl(var(--brand-bg))] px-8" asChild>
              <Link href="/contact">Book Consultation</Link>
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
