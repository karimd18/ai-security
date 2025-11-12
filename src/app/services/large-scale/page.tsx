"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, Network, Shield, TrendingUp, CheckCircle2, Globe } from "lucide-react";
import Link from "next/link";

export default function LargeScaleProjects() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="relative pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-[hsl(var(--brand-accent-1))]/10 text-[hsl(var(--brand-accent-1))] border-[hsl(var(--brand-accent-1))]/30">
                Enterprise Solutions
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Large Scale
                <br />
                <span className="text-[hsl(var(--brand-accent-1))]">Security Projects</span>
              </h1>
              <p className="text-xl text-[hsl(var(--brand-muted))] mb-8 leading-relaxed">
                Multi-site orchestration with predictive analytics, intelligent redundancy, and unified threat intelligence for enterprise-wide protection.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-[hsl(var(--brand-accent-1))] hover:bg-[hsl(var(--brand-accent-1))]/90 text-lg text-[hsl(var(--brand-bg))]" asChild>
                  <Link href="/contact">Discuss Your Project</Link>
                </Button>
                <Button className="border-[hsl(var(--brand-accent-1))] text-lg text-[hsl(var(--brand-accent-1))]" asChild>
                  <Link href="/projects">View Case Studies</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-[hsl(var(--brand-accent-1))]/20 to-[hsl(var(--brand-accent-2))]/20 border border-[hsl(var(--brand-border))] flex items-center justify-center">
                <Building2 className="h-32 w-32 text-[hsl(var(--brand-accent-1))]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 bg-gradient-to-b from-transparent to-[hsl(var(--brand-surface))]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Enterprise-Grade Orchestration</h2>
            <p className="text-xl text-[hsl(var(--brand-muted))] max-w-3xl mx-auto">
              Unified security management across multiple locations with centralized intelligence and local resilience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Network,
                title: "Multi-Site Orchestration",
                description: "Centralized management platform coordinates security operations across unlimited locations with real-time synchronization."
              },
              {
                icon: TrendingUp,
                title: "Predictive Analytics",
                description: "Cross-location data analysis identifies patterns and predicts threats before they spread across your enterprise."
              },
              {
                icon: Shield,
                title: "Intelligent Redundancy",
                description: "AI-optimized failover ensures continuous protection even during network outages or system maintenance."
              },
              {
                icon: Globe,
                title: "Unified Threat Intelligence",
                description: "Share threat data and behavioral patterns across all sites for coordinated response to emerging risks."
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
              <h2 className="text-3xl font-bold mb-6">Project Capabilities</h2>
              <div className="space-y-4">
                {[
                  { label: "Locations", value: "Unlimited sites" },
                  { label: "Cameras", value: "10,000+ networked" },
                  { label: "Access Points", value: "50,000+ doors" },
                  { label: "Users", value: "100,000+ credentials" },
                  { label: "Monitoring", value: "24/7 SOC integration" },
                  { label: "Bandwidth", value: "Adaptive streaming" },
                  { label: "Storage", value: "Hybrid cloud + edge" },
                  { label: "Uptime", value: "99.99% SLA" }
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
                  "Single pane of glass for all locations",
                  "Centralized policy management and updates",
                  "Cross-site threat correlation and analysis",
                  "Scalable architecture grows with your organization",
                  "Phased deployment with minimal disruption",
                  "Standardized security protocols across sites",
                  "Consolidated reporting and compliance",
                  "Expert project management and implementation"
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
          <h2 className="text-3xl font-bold mb-12 text-center">Project Phases</h2>
          <div className="space-y-6">
            {[
              {
                phase: "Discovery & Assessment",
                description: "Comprehensive audit of all locations, existing systems, and requirements with AI-powered risk modeling.",
                duration: "2-4 weeks"
              },
              {
                phase: "Design & Architecture",
                description: "Custom enterprise architecture with redundancy planning, bandwidth optimization, and integration roadmap.",
                duration: "4-8 weeks"
              },
              {
                phase: "Pilot Implementation",
                description: "Deploy and validate solution at representative locations before enterprise-wide rollout.",
                duration: "6-12 weeks"
              },
              {
                phase: "Phased Deployment",
                description: "Systematic rollout across all sites with minimal operational disruption and dedicated support.",
                duration: "3-24 months"
              },
              {
                phase: "Training & Handover",
                description: "Comprehensive training for administrators, operators, and management with ongoing support.",
                duration: "2-4 weeks"
              }
            ].map((item, index) => (
              <Card key={index} className="p-6 border-[hsl(var(--brand-border))] hover:border-[hsl(var(--brand-accent-1))]/50 transition-all">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Badge className="bg-[hsl(var(--brand-accent-1))]/10 text-[hsl(var(--brand-accent-1))] border-[hsl(var(--brand-accent-1))]/30">
                        Phase {index + 1}
                      </Badge>
                      <h3 className="text-xl font-semibold">{item.phase}</h3>
                    </div>
                    <p className="text-[hsl(var(--brand-muted))] text-sm">{item.description}</p>
                  </div>
                  <div className="text-[hsl(var(--brand-accent-1))] font-medium whitespace-nowrap">{item.duration}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready for Enterprise Security?</h2>
          <p className="text-xl text-[hsl(var(--brand-muted))] mb-10 max-w-3xl mx-auto">
            Schedule a discovery session to discuss your multi-site security requirements.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button className="bg-[hsl(var(--brand-accent-1))] hover:bg-[hsl(var(--brand-accent-1))]/90 text-lg text-[hsl(var(--brand-bg))] px-8" asChild>
              <Link href="/contact">Schedule Discovery</Link>
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
