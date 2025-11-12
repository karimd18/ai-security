"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Building2, TrendingDown, Clock, Shield, CheckCircle2 } from "lucide-react";

const caseStudies = [
  {
    title: "Government Facility Transformation",
    client: "Ministry of Interior",
    industry: "Government",
    challenge: "High false alarm rates causing staff fatigue and delayed response to real threats.",
    solution: "Deployed 200+ AI-powered cameras with behavior analytics, facial recognition access control, and predictive incident detection across a 45-hectare facility.",
    results: [
      { metric: "False Alarm Reduction", value: "45%", description: "AI filtering eliminated non-threat alerts" },
      { metric: "Response Time", value: "< 90 sec", description: "Automated threat classification and routing" },
      { metric: "Security Incidents", value: "78% ↓", description: "Proactive detection prevented escalation" },
    ],
    technologies: ["Computer Vision", "Facial Recognition", "Predictive Analytics", "Multi-Sensor Fusion"],
    duration: "6 months deployment",
    image: "government-facility"
  },
  {
    title: "Retail Chain Loss Prevention",
    client: "Major Retail Group",
    industry: "Retail",
    challenge: "Significant inventory shrinkage and theft across 12 locations with limited security staff.",
    solution: "Implemented AI surveillance network with behavior pattern recognition, point-of-sale integration, and automated theft detection alerts.",
    results: [
      { metric: "Theft Incidents", value: "42% ↓", description: "Proactive detection and deterrence" },
      { metric: "Incident Response", value: "30% faster", description: "Automated alert prioritization" },
      { metric: "Annual Savings", value: "$2.3M", description: "Reduced losses and improved efficiency" },
    ],
    technologies: ["Behavior Analysis", "POS Integration", "Real-Time Alerts", "Incident Analytics"],
    duration: "4 months deployment",
    image: "retail-chain"
  },
  {
    title: "Healthcare Campus Security",
    client: "Regional Hospital Network",
    industry: "Healthcare",
    challenge: "Patient safety concerns, unauthorized access to sensitive areas, and slow emergency response.",
    solution: "Deployed AI-based access control, patient flow monitoring, emergency panic buttons with location tracking, and predictive maintenance for critical equipment.",
    results: [
      { metric: "Emergency Response", value: "60% faster", description: "AI-powered incident triage and routing" },
      { metric: "Equipment Downtime", value: "60% ↓", description: "Predictive maintenance prevented failures" },
      { metric: "Unauthorized Access", value: "Zero", description: "Facial verification with liveness detection" },
    ],
    technologies: ["AI Access Control", "Patient Flow Analytics", "Predictive Maintenance", "Emergency Response System"],
    duration: "8 months deployment",
    image: "healthcare-campus"
  },
  {
    title: "Critical Infrastructure Protection",
    client: "National Power Authority",
    industry: "Energy",
    challenge: "Vast perimeter requiring 24/7 monitoring with high risk of unauthorized access and sabotage.",
    solution: "Implemented autonomous patrol robots, thermal imaging, AI perimeter analytics, and integrated command center with digital twin visualization.",
    results: [
      { metric: "Perimeter Detection", value: "99.9%", description: "Multi-sensor AI fusion" },
      { metric: "False Positives", value: "85% ↓", description: "Machine learning pattern recognition" },
      { metric: "Detection Speed", value: "3 min faster", description: "Automated threat classification" },
    ],
    technologies: ["Patrol Robotics", "Thermal Imaging", "Digital Twin", "AI Perimeter Analytics"],
    duration: "12 months deployment",
    image: "critical-infrastructure"
  },
  {
    title: "University Campus Safety",
    client: "Major University",
    industry: "Education",
    challenge: "Large campus with multiple entry points, visitor management complexity, and emergency notification challenges.",
    solution: "Deployed 150 AI cameras with behavior analysis, automated visitor management, emergency notification system, and integrated mobile safety app.",
    results: [
      { metric: "Visitor Compliance", value: "100%", description: "Automated tracking and verification" },
      { metric: "Emergency Alerts", value: "45% faster", description: "AI-powered mass notification" },
      { metric: "Prevented Incidents", value: "12", description: "Behavior analysis early warning" },
    ],
    technologies: ["Behavior Analytics", "Visitor Management", "Mass Notification", "Mobile Integration"],
    duration: "5 months deployment",
    image: "university-campus"
  },
];

export default function Projects() {
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
            Proven Results
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Case Studies
            <br />
            <span className="text-[hsl(var(--brand-accent-1))]">Real Outcomes, Real Impact</span>
          </h1>
          <p className="text-xl text-[hsl(var(--brand-muted))] max-w-3xl mx-auto leading-relaxed">
            Discover how our AI-powered security solutions deliver measurable improvements across industries.
          </p>
        </div>
      </section>

      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {caseStudies.map((study, index) => (
            <Card key={index} className="overflow-hidden bg-gradient-to-br from-[hsl(var(--brand-surface))] to-transparent border-[hsl(var(--brand-border))] hover:border-[hsl(var(--brand-accent-1))]/50 transition-all duration-300">
              <div className="p-8 lg:p-12">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <Badge className="mb-3 bg-[hsl(var(--brand-accent-2))]/10 text-[hsl(var(--brand-accent-2))] border-[hsl(var(--brand-accent-2))]/30">
                      {study.industry}
                    </Badge>
                    <h2 className="text-3xl font-bold mb-2">{study.title}</h2>
                    <p className="text-[hsl(var(--brand-muted))]">{study.client}</p>
                  </div>
                  <Building2 className="h-12 w-12 text-[hsl(var(--brand-accent-1))] opacity-50" />
                </div>

                {index === 0 && (
                  <div className="mb-8">
                    <div className="aspect-video rounded-xl bg-gradient-to-br from-[hsl(var(--brand-accent-1))]/20 to-[hsl(var(--brand-accent-2))]/20 border border-[hsl(var(--brand-border))] overflow-hidden flex items-center justify-center">
                      <div className="absolute inset-0 bg-[hsl(var(--brand-bg))]/40 backdrop-blur-sm"></div>
                      <div className="relative z-10 text-center">
                        <Building2 className="h-16 w-16 text-[hsl(var(--brand-accent-1))] mx-auto mb-3" />
                        <p className="text-sm text-[hsl(var(--brand-muted))]">Project Image</p>
                        <p className="text-xs text-[hsl(var(--brand-muted))]/60 mt-1">Coming Soon</p>
                      </div>
                    </div>
                  </div>
                )}

                <div className="grid lg:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-sm font-semibold text-[hsl(var(--brand-accent-1))] uppercase tracking-wider mb-3">
                      Challenge
                    </h3>
                    <p className="text-[hsl(var(--brand-muted))] leading-relaxed">{study.challenge}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[hsl(var(--brand-accent-1))] uppercase tracking-wider mb-3">
                      Solution
                    </h3>
                    <p className="text-[hsl(var(--brand-muted))] leading-relaxed">{study.solution}</p>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-sm font-semibold text-[hsl(var(--brand-accent-1))] uppercase tracking-wider mb-4">
                    Measurable Results
                  </h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    {study.results.map((result, i) => (
                      <div key={i} className="p-6 rounded-lg bg-[hsl(var(--brand-surface))] border border-[hsl(var(--brand-border))]">
                        <div className="text-3xl font-bold text-[hsl(var(--brand-accent-1))] mb-2">{result.value}</div>
                        <div className="text-sm font-semibold mb-1">{result.metric}</div>
                        <div className="text-xs text-[hsl(var(--brand-muted))]">{result.description}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-[hsl(var(--brand-border))]">
                  <div>
                    <h4 className="text-xs font-semibold text-[hsl(var(--brand-muted))] uppercase tracking-wider mb-2">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech, i) => (
                        <Badge key={i} className="border-[hsl(var(--brand-border))] text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-[hsl(var(--brand-muted))]">
                    <Clock className="h-4 w-4" />
                    <span>{study.duration}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
