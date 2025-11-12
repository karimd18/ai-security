"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Settings, PenTool, Eye, TrendingUp, CheckCircle2, Layers } from "lucide-react";
import Link from "next/link";

export default function SystemDesigns() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="relative pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-[hsl(var(--brand-accent-1))]/10 text-[hsl(var(--brand-accent-1))] border-[hsl(var(--brand-accent-1))]/30">
                Security Architecture
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                AI-Optimized
                <br />
                <span className="text-[hsl(var(--brand-accent-1))]">System Designs</span>
              </h1>
              <p className="text-xl text-[hsl(var(--brand-muted))] mb-8 leading-relaxed">
                End-to-end system planning using AI coverage simulation, efficiency modeling, and predictive capacity planning for optimal security architecture.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-[hsl(var(--brand-accent-1))] hover:bg-[hsl(var(--brand-accent-1))]/90 text-lg text-[hsl(var(--brand-bg))]" asChild>
                  <Link href="/contact">Start Design Process</Link>
                </Button>
                <Button className="border-[hsl(var(--brand-accent-1))] text-lg text-[hsl(var(--brand-accent-1))]" asChild>
                  <Link href="/consultancy">View Process</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-[hsl(var(--brand-accent-1))]/20 to-[hsl(var(--brand-accent-2))]/20 border border-[hsl(var(--brand-border))] flex items-center justify-center">
                <Settings className="h-32 w-32 text-[hsl(var(--brand-accent-1))]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 bg-gradient-to-b from-transparent to-[hsl(var(--brand-surface))]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">AI-Powered Design Process</h2>
            <p className="text-xl text-[hsl(var(--brand-muted))] max-w-3xl mx-auto">
              Leverage artificial intelligence to create optimal security architecture that maximizes coverage while minimizing costs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Eye,
                title: "AI Coverage Simulation",
                description: "3D modeling simulates camera coverage, blind spots, and optimal placement using AI-powered visual analysis."
              },
              {
                icon: TrendingUp,
                title: "Efficiency Modeling",
                description: "AI calculates optimal sensor density, bandwidth requirements, and storage needs for cost-effective protection."
              },
              {
                icon: Layers,
                title: "Capacity Planning",
                description: "Predictive modeling ensures system can scale with growth and handle peak loads without degradation."
              },
              {
                icon: PenTool,
                title: "Optimization Recommendations",
                description: "AI suggests improvements to existing designs, identifying redundancies and coverage gaps automatically."
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
              <h2 className="text-3xl font-bold mb-6">Design Deliverables</h2>
              <div className="space-y-4">
                {[
                  { label: "Site Survey", value: "3D floor plans & models" },
                  { label: "Coverage Analysis", value: "Heat maps & blind spot reports" },
                  { label: "Equipment List", value: "Bill of materials with specs" },
                  { label: "Network Design", value: "Topology & bandwidth planning" },
                  { label: "Power Requirements", value: "PoE budget & UPS sizing" },
                  { label: "Installation Plans", value: "Cable runs & mounting locations" },
                  { label: "Integration Design", value: "System architecture diagrams" },
                  { label: "ROI Analysis", value: "Cost-benefit projections" }
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
                  "30% cost savings through optimal equipment placement",
                  "Zero blind spots with AI coverage validation",
                  "Right-sized infrastructure prevents over-provisioning",
                  "Future-proof design accommodates expansion",
                  "Vendor-neutral recommendations for best value",
                  "Compliance verification against standards",
                  "Digital twin for ongoing optimization",
                  "As-built documentation for facility management"
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
          <h2 className="text-3xl font-bold mb-12 text-center">Design Process</h2>
          <div className="space-y-6">
            {[
              {
                step: "Site Assessment",
                description: "Comprehensive facility survey including floor plans, building materials, lighting conditions, and existing infrastructure.",
                duration: "1-2 weeks"
              },
              {
                step: "Requirements Analysis",
                description: "Define security objectives, threat scenarios, compliance needs, and budget parameters with stakeholders.",
                duration: "1 week"
              },
              {
                step: "AI Modeling",
                description: "Create 3D digital twin and run AI simulations for coverage, capacity, and efficiency optimization.",
                duration: "2-3 weeks"
              },
              {
                step: "Design Documentation",
                description: "Generate detailed technical specifications, drawings, equipment lists, and implementation plans.",
                duration: "2-3 weeks"
              },
              {
                step: "Review & Approval",
                description: "Present design to stakeholders, incorporate feedback, and finalize documentation for implementation.",
                duration: "1-2 weeks"
              }
            ].map((item, index) => (
              <Card key={index} className="p-6 border-[hsl(var(--brand-border))] hover:border-[hsl(var(--brand-accent-1))]/50 transition-all">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Badge className="bg-[hsl(var(--brand-accent-1))]/10 text-[hsl(var(--brand-accent-1))] border-[hsl(var(--brand-accent-1))]/30">
                        Step {index + 1}
                      </Badge>
                      <h3 className="text-xl font-semibold">{item.step}</h3>
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
          <h2 className="text-4xl font-bold mb-6">Start Your Design Project</h2>
          <p className="text-xl text-[hsl(var(--brand-muted))] mb-10 max-w-3xl mx-auto">
            Begin with a complimentary site assessment and discover how AI can optimize your security architecture.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button className="bg-[hsl(var(--brand-accent-1))] hover:bg-[hsl(var(--brand-accent-1))]/90 text-lg text-[hsl(var(--brand-bg))] px-8" asChild>
              <Link href="/contact">Request Site Assessment</Link>
            </Button>
            <Button className="border-[hsl(var(--brand-accent-1))] text-[hsl(var(--brand-accent-1))] text-lg px-8" asChild>
              <Link href="/solutions">View All Solutions</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
