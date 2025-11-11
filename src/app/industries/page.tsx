"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Building2, Hospital, ShoppingBag, GraduationCap, Shield, Factory, TrendingUp, Clock, AlertTriangle } from "lucide-react";

const industries = [
  {
    icon: Building2,
    name: "Government",
    projects: "45+",
    description: "Securing government facilities, critical infrastructure, and public spaces with AI-powered threat detection.",
    outcomes: [
      "65% reduction in false alarms",
      "< 90s average incident response",
      "100% audit trail compliance"
    ],
    useCase: "Ministry facility equipped with 200+ AI cameras, facial recognition access, and predictive analytics reduced security incidents by 78%."
  },
  {
    icon: Hospital,
    name: "Healthcare",
    projects: "32+",
    description: "Protecting patients, staff, and sensitive medical data with intelligent access control and monitoring.",
    outcomes: [
      "60% faster emergency response",
      "Zero unauthorized access incidents",
      "HIPAA compliance maintained"
    ],
    useCase: "Hospital campus deployed AI-based patient flow monitoring, reducing wait times and improving staff allocation by 40%."
  },
  {
    icon: ShoppingBag,
    name: "Retail",
    projects: "58+",
    description: "Loss prevention, customer analytics, and staff safety with computer vision and behavior analysis.",
    outcomes: [
      "42% reduction in theft incidents",
      "25% improvement in customer flow",
      "Real-time inventory monitoring"
    ],
    useCase: "Retail chain implemented AI surveillance across 12 locations, detecting theft patterns and reducing losses by $2.3M annually."
  },
  {
    icon: Building2,
    name: "Real Estate",
    projects: "89+",
    description: "Smart building security with automated access, predictive maintenance, and tenant safety.",
    outcomes: [
      "70% reduction in maintenance calls",
      "Enhanced tenant satisfaction",
      "Predictive equipment failure alerts"
    ],
    useCase: "High-rise residential tower uses AI to predict elevator maintenance needs, preventing 95% of unexpected outages."
  },
  {
    icon: GraduationCap,
    name: "Education",
    projects: "27+",
    description: "Campus safety with AI-powered intrusion detection, visitor management, and emergency response.",
    outcomes: [
      "100% visitor tracking compliance",
      "45% faster emergency alerts",
      "Safe learning environment"
    ],
    useCase: "University campus deployed 150 AI cameras with behavior analysis, preventing 12 potential security incidents in first year."
  },
  {
    icon: Shield,
    name: "Critical Infrastructure",
    projects: "18+",
    description: "Protecting power plants, water facilities, and telecommunications with AI-driven perimeter security.",
    outcomes: [
      "99.9% perimeter breach detection",
      "Zero false positive evacuations",
      "Multi-layer threat intelligence"
    ],
    useCase: "Power station implemented AI patrol robots and thermal imaging, detecting unauthorized access attempts 3 minutes faster than human guards."
  },
];

export default function Industries() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, hsl(var(--brand-accent-1)) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-[hsl(var(--brand-accent-1))]/10 text-[hsl(var(--brand-accent-1))] border-[hsl(var(--brand-accent-1))]/30">
            Industry Expertise
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Securing Critical Infrastructure
            <br />
            <span className="text-[hsl(var(--brand-accent-1))]">Across MENA</span>
          </h1>
          <p className="text-xl text-[hsl(var(--brand-muted))] max-w-3xl mx-auto leading-relaxed">
            Tailored AI security solutions for every sector, backed by proven outcomes and measurable results.
          </p>
        </div>
      </section>

      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="p-8 bg-gradient-to-br from-[hsl(var(--brand-surface))] to-transparent border-[hsl(var(--brand-border))] hover:border-[hsl(var(--brand-accent-1))]/50 transition-all duration-300 hover:box-glow">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-gradient-to-br from-[hsl(var(--brand-accent-1))]/20 to-[hsl(var(--brand-accent-2))]/20 flex items-center justify-center">
                    <industry.icon className="h-7 w-7 text-[hsl(var(--brand-accent-1))]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-1">{industry.name}</h3>
                    <p className="text-sm text-[hsl(var(--brand-muted))]">{industry.projects} Projects Completed</p>
                  </div>
                </div>

                <p className="text-[hsl(var(--brand-muted))] mb-6 leading-relaxed">
                  {industry.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-[hsl(var(--brand-accent-2))] uppercase tracking-wider mb-3">
                    Key Outcomes
                  </h4>
                  <ul className="space-y-2">
                    {industry.outcomes.map((outcome, i) => (
                      <li key={i} className="flex items-center space-x-2 text-sm">
                        <TrendingUp className="h-4 w-4 text-[hsl(var(--brand-accent-1))]" />
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-lg bg-[hsl(var(--brand-surface))] border border-[hsl(var(--brand-border))]">
                  <p className="text-xs text-[hsl(var(--brand-muted))] uppercase tracking-wider mb-2">Use Case</p>
                  <p className="text-sm leading-relaxed">{industry.useCase}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
