"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ServiceCard } from "@/components/service-card";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Video,
  Flame,
  Lock,
  Bell,
  Home as HomeIcon,
  Users,
  Bot,
  MonitorPlay,
  Settings,
  Lightbulb,
  Building2,
  Network,
  CheckCircle2,
  XCircle,
} from "lucide-react";

const allServices = [
  {
    icon: Video,
    title: "CCTV Systems",
    description: "Intelligent video surveillance with real-time threat detection and predictive analytics.",
    aiFeatures: [
      "Smart anomaly detection via computer vision",
      "Predictive incident alerts before escalation",
      "Facial recognition with privacy compliance",
      "Automated threat classification"
    ],
    href: "/solutions/cctv"
  },
  {
    icon: Flame,
    title: "Fire Alarm Systems",
    description: "AI-enhanced fire detection with smoke pattern recognition and rapid emergency response.",
    aiFeatures: [
      "Smoke pattern analysis for early detection",
      "Predictive maintenance alerts",
      "Auto escalation to emergency services",
      "False alarm reduction up to 65%"
    ],
    href: "/solutions/fire-alarm"
  },
  {
    icon: Lock,
    title: "Access Control",
    description: "Advanced access management with facial verification and behavior analytics.",
    aiFeatures: [
      "Facial verification and liveness detection",
      "Tailgating detection via AI",
      "Adaptive permission logic based on context",
      "Real-time identity analytics dashboard"
    ],
    href: "/solutions/access-control"
  },
  {
    icon: Bell,
    title: "Intrusion Alarm",
    description: "Machine learning-powered intrusion detection with false alarm prevention.",
    aiFeatures: [
      "Behavior analysis for threat assessment",
      "False alarm reduction via ML patterns",
      "Multi-sensor data fusion",
      "Intelligent threat prioritization"
    ],
    href: "/solutions/intrusion-alarm"
  },
  {
    icon: HomeIcon,
    title: "Home Automation",
    description: "Smart home integration with AI-learned user behavior and secure routines.",
    aiFeatures: [
      "AI-learned user behavior patterns",
      "Remote monitoring with anomaly alerts",
      "Secure automated routines",
      "Energy optimization intelligence"
    ],
    href: "/solutions/home-automation"
  },
  {
    icon: Users,
    title: "Consultancy Services",
    description: "AI-powered security assessment, digital twin simulation, and compliance optimization.",
    aiFeatures: [
      "AI-powered security assessment",
      "Digital twin simulation",
      "Compliance optimization",
      "Risk prediction modeling"
    ],
    href: "/consultancy"
  },
  {
    icon: Lock,
    title: "Access Control Systems",
    description: "Cloud dashboards with real-time AI identity analytics and adaptive permissions.",
    aiFeatures: [
      "Cloud-based management dashboards",
      "Real-time AI identity analytics",
      "Behavioral access patterns",
      "Automated credential management"
    ],
    href: "/solutions#access-systems"
  },
  {
    icon: Building2,
    title: "Large Scale Projects",
    description: "Multi-site orchestration with predictive analytics and intelligent redundancy.",
    aiFeatures: [
      "Multi-site orchestration",
      "Predictive analytics across locations",
      "Intelligent redundancy planning",
      "Unified threat intelligence"
    ],
    href: "/solutions/large-scale"
  },
  {
    icon: MonitorPlay,
    title: "Control Rooms Design & Build",
    description: "Ergonomic layouts with intelligent monitoring dashboards and redundancy planning.",
    aiFeatures: [
      "Ergonomic AI-optimized layouts",
      "Intelligent monitoring dashboards",
      "Predictive workload distribution",
      "Automated incident workflows"
    ],
    href: "/control-rooms"
  },
  {
    icon: Network,
    title: "Security Systems Integrator",
    description: "Central AI brain for unified system coordination and intelligent orchestration.",
    aiFeatures: [
      "Central AI coordination layer",
      "Cross-system event correlation",
      "Unified threat intelligence",
      "Automated response orchestration"
    ],
    href: "/solutions/integration"
  },
  {
    icon: Bot,
    title: "Robotics",
    description: "Autonomous patrol robots with visual AI and threat detection capabilities.",
    aiFeatures: [
      "Autonomous navigation and patrol",
      "Visual threat detection",
      "Integration with VMS and alarms",
      "24/7 perimeter monitoring"
    ],
    href: "/robotics"
  },
  {
    icon: MonitorPlay,
    title: "LED Screens",
    description: "Intelligent alert displays with AI-based content adaptation and priority routing.",
    aiFeatures: [
      "Intelligent alert displays",
      "AI-based content adaptation",
      "Priority-based message routing",
      "Real-time situational awareness"
    ],
    href: "/led"
  },
  {
    icon: Settings,
    title: "System Designs",
    description: "End-to-end system planning using AI coverage simulation and efficiency modeling.",
    aiFeatures: [
      "AI coverage simulation",
      "Efficiency modeling",
      "Predictive capacity planning",
      "Optimization recommendations"
    ],
    href: "/solutions/system-designs"
  },
];

const comparisonFeatures = [
  { feature: "Manual Monitoring", traditional: true, ai: false },
  { feature: "Real-Time Anomaly Detection", traditional: false, ai: true },
  { feature: "False Alarm Management", traditional: false, ai: true },
  { feature: "Predictive Maintenance", traditional: false, ai: true },
  { feature: "24/7 Video Recording", traditional: true, ai: true },
  { feature: "Automated Threat Classification", traditional: false, ai: true },
  { feature: "Behavior Analysis", traditional: false, ai: true },
  { feature: "Multi-Sensor Data Fusion", traditional: false, ai: true },
  { feature: "Natural Language Reporting", traditional: false, ai: true },
  { feature: "Incident Triage Assistant", traditional: false, ai: true },
];

export default function Solutions() {
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
            Complete Security Portfolio
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            AI-Augmented Security
            <br />
            <span className="text-[hsl(var(--brand-accent-1))]">For Every Challenge</span>
          </h1>
          <p className="text-xl text-[hsl(var(--brand-muted))] max-w-3xl mx-auto leading-relaxed">
            Comprehensive security solutions enhanced with artificial intelligence to deliver prevention, not just detection.
          </p>
        </div>
      </section>

      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allServices.map((service, index) => (
              <div key={index}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 bg-gradient-to-b from-transparent to-[hsl(var(--brand-surface))]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-[hsl(var(--brand-accent-2))]/10 text-[hsl(var(--brand-accent-2))] border-[hsl(var(--brand-accent-2))]/30">
              Feature Comparison
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Traditional vs AI-Augmented
            </h2>
            <p className="text-xl text-[hsl(var(--brand-muted))]">
              See how artificial intelligence transforms security capabilities
            </p>
          </div>

          <Card className="overflow-hidden bg-gradient-to-br from-[hsl(var(--brand-surface))] to-transparent border-[hsl(var(--brand-border))]">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[hsl(var(--brand-border))]">
                    <th className="text-left p-4 font-semibold">Feature</th>
                    <th className="text-center p-4 font-semibold">Traditional Systems</th>
                    <th className="text-center p-4 font-semibold text-[hsl(var(--brand-accent-1))]">AI-Augmented</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((item, index) => (
                    <tr key={index} className="border-b border-[hsl(var(--brand-border))] hover:bg-[hsl(var(--brand-surface))] transition-colors">
                      <td className="p-4 text-sm">{item.feature}</td>
                      <td className="p-4 text-center">
                        {item.traditional ? (
                          <CheckCircle2 className="h-5 w-5 text-[hsl(var(--brand-muted))] mx-auto" />
                        ) : (
                          <XCircle className="h-5 w-5 text-[hsl(var(--brand-muted))]/30 mx-auto" />
                        )}
                      </td>
                      <td className="p-4 text-center">
                        {item.ai ? (
                          <CheckCircle2 className="h-5 w-5 text-[hsl(var(--brand-accent-1))] mx-auto" />
                        ) : (
                          <XCircle className="h-5 w-5 text-[hsl(var(--brand-muted))]/30 mx-auto" />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}
