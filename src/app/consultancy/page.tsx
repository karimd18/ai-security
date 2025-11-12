"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, PenTool, Rocket, GraduationCap, HeadphonesIcon, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const phases = [
  {
    icon: Search,
    title: "Assessment",
    description: "Comprehensive security audit using AI-powered risk modeling",
    deliverables: ["Threat landscape analysis", "Vulnerability assessment", "AI coverage simulation", "Risk prioritization matrix"]
  },
  {
    icon: PenTool,
    title: "Design",
    description: "Custom system architecture optimized for your environment",
    deliverables: ["System architecture blueprint", "Technology recommendations", "Integration roadmap", "ROI projections"]
  },
  {
    icon: Rocket,
    title: "Deployment",
    description: "Phased implementation with minimal operational disruption",
    deliverables: ["Installation & configuration", "System integration", "Testing & validation", "Performance optimization"]
  },
  {
    icon: GraduationCap,
    title: "Training",
    description: "Comprehensive knowledge transfer for your team",
    deliverables: ["Operator training", "Admin certifications", "AI dashboard workshops", "Best practices documentation"]
  },
  {
    icon: HeadphonesIcon,
    title: "Support",
    description: "Ongoing maintenance and continuous improvement",
    deliverables: ["24/7 technical support", "Predictive maintenance", "Software updates", "Performance reporting"]
  },
];

export default function Consultancy() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="relative pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-[hsl(var(--brand-accent-1))]/10 text-[hsl(var(--brand-accent-1))] border-[hsl(var(--brand-accent-1))]/30">
            Security Consultancy
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Strategic Security
            <br />
            <span className="text-[hsl(var(--brand-accent-1))]">From Assessment to Excellence</span>
          </h1>
          <p className="text-xl text-[hsl(var(--brand-muted))] max-w-3xl mx-auto leading-relaxed">
            Expert guidance powered by AI analytics to transform your security infrastructure.
          </p>
        </div>
      </section>

      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Consultancy Process</h2>
            <p className="text-[hsl(var(--brand-muted))] max-w-2xl mx-auto">
              A proven methodology that combines technical expertise with AI-powered insights
            </p>
          </div>

          <div className="space-y-8">
            {phases.map((phase, index) => (
              <Card key={index} className="p-8 bg-gradient-to-r from-[hsl(var(--brand-surface))] to-transparent border-[hsl(var(--brand-border))] hover:border-[hsl(var(--brand-accent-1))]/50 transition-all">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-[hsl(var(--brand-accent-1))]/20 to-[hsl(var(--brand-accent-2))]/20 flex items-center justify-center">
                      <phase.icon className="h-8 w-8 text-[hsl(var(--brand-accent-1))]" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <Badge className="border-[hsl(var(--brand-accent-1))] text-[hsl(var(--brand-accent-1))]">
                        Phase {index + 1}
                      </Badge>
                      <h3 className="text-2xl font-bold">{phase.title}</h3>
                    </div>
                    <p className="text-[hsl(var(--brand-muted))] mb-4">{phase.description}</p>
                    <div>
                      <div className="text-sm font-semibold text-[hsl(var(--brand-accent-2))] uppercase tracking-wider mb-3">
                        Key Deliverables
                      </div>
                      <ul className="grid md:grid-cols-2 gap-2">
                        {phase.deliverables.map((item, i) => (
                          <li key={i} className="flex items-center space-x-2 text-sm">
                            <CheckCircle2 className="h-4 w-4 text-[hsl(var(--brand-accent-1))]" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button className="bg-[hsl(var(--brand-accent-1))] hover:bg-[hsl(var(--brand-accent-1))]/90 text-[hsl(var(--brand-bg))] px-8 py-3 text-lg box-glow" asChild>
              <Link href="/contact">
                Schedule Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
