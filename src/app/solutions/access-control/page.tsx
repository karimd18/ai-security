"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Lock, Fingerprint, User, Shield, TrendingUp, CheckCircle2, Key } from "lucide-react";
import Link from "next/link";

export default function AccessControl() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="relative pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-[hsl(var(--brand-accent-1))]/10 text-[hsl(var(--brand-accent-1))] border-[hsl(var(--brand-accent-1))]/30">
                Identity & Access Management
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                AI-Driven
                <br />
                <span className="text-[hsl(var(--brand-accent-1))]">Access Control</span>
              </h1>
              <p className="text-xl text-[hsl(var(--brand-muted))] mb-8 leading-relaxed">
                Advanced access management with facial verification, behavior analytics, and adaptive permissions that secure your premises intelligently.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-[hsl(var(--brand-accent-1))] hover:bg-[hsl(var(--brand-accent-1))]/90 text-lg text-[hsl(var(--brand-bg))]" asChild>
                  <Link href="/contact">Request Demo</Link>
                </Button>
                <Button className="border-[hsl(var(--brand-accent-1))] text-lg text-[hsl(var(--brand-accent-1))]" asChild>
                  <Link href="/projects">View Case Studies</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-[hsl(var(--brand-accent-1))]/20 to-[hsl(var(--brand-accent-2))]/20 border border-[hsl(var(--brand-border))] flex items-center justify-center">
                <Lock className="h-32 w-32 text-[hsl(var(--brand-accent-1))]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 bg-gradient-to-b from-transparent to-[hsl(var(--brand-surface))]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Intelligent Access Management</h2>
            <p className="text-xl text-[hsl(var(--brand-muted))] max-w-3xl mx-auto">
              AI-powered systems that adapt to user behavior, detect anomalies, and provide seamless yet secure access control.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Fingerprint,
                title: "Facial Verification",
                description: "Contactless biometric authentication with liveness detection prevents spoofing and ensures genuine user verification."
              },
              {
                icon: Shield,
                title: "Tailgating Detection",
                description: "AI vision detects unauthorized individuals following authorized users through access points, preventing security breaches."
              },
              {
                icon: Key,
                title: "Adaptive Permissions",
                description: "Context-aware access rules adjust based on time, location, threat level, and user behavior patterns."
              },
              {
                icon: User,
                title: "Identity Analytics",
                description: "Real-time dashboard tracks access patterns, identifies anomalies, and provides predictive security insights."
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
              <h2 className="text-3xl font-bold mb-6">Authentication Methods</h2>
              <div className="space-y-4">
                {[
                  { label: "Facial Recognition", value: "3D liveness detection" },
                  { label: "Fingerprint", value: "Capacitive & optical sensors" },
                  { label: "Card Readers", value: "RFID, NFC, Smart Cards" },
                  { label: "PIN/Password", value: "Multi-factor options" },
                  { label: "Mobile Credentials", value: "Bluetooth & NFC phones" },
                  { label: "Iris Recognition", value: "High-security areas" },
                  { label: "QR Code", value: "Visitor management" },
                  { label: "Voice Recognition", value: "Hands-free access" }
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
                  "Zero unauthorized access with multi-factor authentication",
                  "99.7% facial recognition accuracy with anti-spoofing",
                  "Tailgating detection prevents piggybacking",
                  "Cloud-based management from anywhere",
                  "Audit trail of all access events with video verification",
                  "Integration with HR systems for auto provisioning",
                  "Mobile app for remote access management",
                  "Lockdown capability for emergency situations"
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
                title: "Corporate Offices",
                description: "Secure employee access, visitor management, and executive floor protection with seamless user experience.",
                metrics: ["Touchless entry", "Visitor pre-registration", "VIP escort automation"]
              },
              {
                title: "Data Centers",
                description: "Multi-layer authentication for mission-critical infrastructure with full audit trails and compliance.",
                metrics: ["Biometric + card + PIN", "Man-trap vestibules", "Thermal imaging"]
              },
              {
                title: "Healthcare",
                description: "Patient privacy protection, medication room security, and staff credential management.",
                metrics: ["HIPAA compliant", "Emergency override", "Role-based access"]
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
          <h2 className="text-4xl font-bold mb-6">Secure Your Access Points</h2>
          <p className="text-xl text-[hsl(var(--brand-muted))] mb-10 max-w-3xl mx-auto">
            Experience the future of access control with a personalized demonstration at your facility.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button className="bg-[hsl(var(--brand-accent-1))] hover:bg-[hsl(var(--brand-accent-1))]/90 text-lg text-[hsl(var(--brand-bg))] px-8" asChild>
              <Link href="/contact">Book Live Demo</Link>
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
