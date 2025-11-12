"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { AIGridBackground } from "@/components/ai-grid-background";
import { ServiceCard } from "@/components/service-card";
import {
  Shield,
  Video,
  Flame,
  Lock,
  Bell,
  Home as HomeIcon,
  Users,
  Bot,
  MonitorPlay,
  Settings,
  TrendingUp,
  Clock,
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Brain,
  Eye,
  Zap,
  Building2,
  GraduationCap,
  ShoppingBag,
  Hospital,
  ChevronRight,
} from "lucide-react";

const services = [
  {
    icon: Video,
    title: "CCTV Systems",
    description:
      "Intelligent video surveillance with real-time threat detection and predictive analytics.",
    aiFeatures: [
      "Smart anomaly detection via computer vision",
      "Predictive incident alerts before escalation",
      "Facial recognition with privacy compliance",
      "Automated threat classification",
    ],
    href: "/services/cctv",
  },
  {
    icon: Flame,
    title: "Fire Alarm",
    description:
      "AI-enhanced fire detection systems with smoke pattern recognition and rapid response.",
    aiFeatures: [
      "Smoke pattern analysis for early detection",
      "Predictive maintenance alerts",
      "Auto escalation to emergency services",
      "False alarm reduction up to 65%",
    ],
    href: "/services/fire-alarm",
  },
  {
    icon: Lock,
    title: "Access Control",
    description:
      "Advanced access management with facial verification and behavior analytics.",
    aiFeatures: [
      "Facial verification and liveness detection",
      "Tailgating detection via AI",
      "Adaptive permission logic based on context",
      "Real-time identity analytics dashboard",
    ],
    href: "/services/access-control",
  },
  {
    icon: Bell,
    title: "Intrusion Alarm",
    description:
      "Machine learning-powered intrusion detection with false alarm prevention.",
    aiFeatures: [
      "Behavior analysis for threat assessment",
      "False alarm reduction via ML patterns",
      "Multi-sensor data fusion",
      "Intelligent threat prioritization",
    ],
    href: "/services/intrusion-alarm",
  },
  {
    icon: HomeIcon,
    title: "Home Automation",
    description:
      "Smart home integration with AI-learned user behavior and secure routines.",
    aiFeatures: [
      "AI-learned user behavior patterns",
      "Remote monitoring with anomaly alerts",
      "Secure automated routines",
      "Energy optimization intelligence",
    ],
    href: "/services/home-automation",
  },
  {
    icon: Bot,
    title: "Security Robotics",
    description:
      "Autonomous patrol robots with visual AI and threat detection capabilities.",
    aiFeatures: [
      "Autonomous navigation and patrol",
      "Visual threat detection and classification",
      "Integration with VMS and alarm systems",
      "24/7 perimeter monitoring",
    ],
    href: "/robotics",
  },
];

const industries = [
  { icon: Building2, name: "Government", count: "45+ Projects" },
  { icon: Hospital, name: "Healthcare", count: "32+ Projects" },
  { icon: ShoppingBag, name: "Retail", count: "58+ Projects" },
  { icon: Building2, name: "Real Estate", count: "89+ Projects" },
  { icon: GraduationCap, name: "Education", count: "27+ Projects" },
  { icon: Shield, name: "Critical Infrastructure", count: "18+ Projects" },
];

const stats = [
  { value: "250+", label: "Projects Deployed", icon: CheckCircle2 },
  { value: "45%", label: "False Alarm Reduction", icon: TrendingUp },
  { value: "< 2min", label: "Average Response Time", icon: Clock },
  { value: "99.8%", label: "System Uptime", icon: AlertTriangle },
];

const aiCapabilities = [
  {
    icon: Eye,
    title: "Real-Time Anomaly Detection",
    description:
      "Computer vision analyzes video feeds 24/7, instantly identifying unusual behavior patterns.",
  },
  {
    icon: Brain,
    title: "Predictive Maintenance",
    description:
      "AI predicts sensor failures before they occur, reducing downtime by 60%.",
  },
  {
    icon: Zap,
    title: "Automated Incident Triage",
    description:
      "Intelligent classification and prioritization of security events for faster response.",
  },
  {
    icon: Sparkles,
    title: "Intelligent Reporting",
    description:
      "Auto-generated insights and KPI dashboards with natural language summaries.",
  },
];

export default function Home() {
  const [statsInView, setStatsInView] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setStatsInView(true);
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <AIGridBackground />

        {/* Watermark logo (subtle, non-interactive, above grid & under content) */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-[2] flex items-center justify-center"
        >
          <Image
            src="/logo.png" // place your logo in /public/logo.png
            alt=""
            width={900}
            height={900}
            priority
            className="
              select-none object-contain
              w-[60vw] max-w-[560px]
              opacity-[0.08] md:opacity-[0.10]
              mix-blend-screen
              blur-[0.3px]
            "
          />
        </div>

        {/* soft vertical gradient veil to keep text legible */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-transparent via-[hsl(var(--brand-bg))]/50 to-[hsl(var(--brand-bg))]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <Badge className="mb-6 bg-[hsl(var(--brand-accent-1))]/10 text-[hsl(var(--brand-accent-1))] border-[hsl(var(--brand-accent-1))]/30 hover:bg-[hsl(var(--brand-accent-1))]/20">
            <Sparkles className="h-3 w-3 mr-1" />
            AI-Powered Security Intelligence
          </Badge>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-[hsl(var(--brand-accent-1))] to-[hsl(var(--brand-accent-2))] bg-clip-text text-transparent leading-tight">
            Intelligent Protection
            <br />
            Built on AI
          </h1>

          <p className="text-xl md:text-2xl text-[hsl(var(--brand-muted))] mb-12 max-w-3xl mx-auto leading-relaxed">
            End-to-end security systems engineered with built-in AI for
            prevention, detection, and rapid response across MENA.
          </p>

          {/* CTAs – fixed outline text visibility */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button
              className="bg-[hsl(var(--brand-accent-1))] hover:bg-[hsl(var(--brand-accent-1))]/90 text-lg text-[hsl(var(--brand-bg))] px-8 box-glow"
              asChild
              aria-label="Request Design Audit"
            >
              <Link href="/contact">
                Request Design Audit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>

            {/* IMPORTANT: outline variant so text shows; explicit text color to match brand */}
            <Button
              variant="outline"
              className="border-[hsl(var(--brand-accent-1))] text-[hsl(var(--brand-accent-1))] hover:bg-[hsl(var(--brand-accent-1))]/10 text-lg px-8"
              asChild
              aria-label="Explore services"
            >
              <Link href="/services">Explore services</Link>
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
            <div className="text-sm text-[hsl(var(--brand-muted))]">
              Trusted By:
            </div>
            {["ISO 27001", "SOC 2", "GDPR", "NIST"].map((cert) => (
              <Badge
                key={cert}
                className="border-[hsl(var(--brand-border))] text-[hsl(var(--brand-muted))] bg-[hsl(var(--brand-surface))]/50 hover:bg-[hsl(var(--brand-surface))]/70 transition-colors text-sm"
              >
                {cert}
              </Badge>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronRight className="h-6 w-6 text-[hsl(var(--brand-accent-1))] rotate-90" />
        </div>
      </section>

      {/* STATS */}
      <section
        ref={statsRef}
        className="relative py-20 border-y border-[hsl(var(--brand-border))]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <stat.icon className="h-8 w-8 text-[hsl(var(--brand-accent-1))] mx-auto mb-4" />
                <div className="text-4xl md:text-5xl font-bold text-glow mb-2">
                  {statsInView ? stat.value : "—"}
                </div>
                <div className="text-sm text-[hsl(var(--brand-muted))]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEMO */}
      <section className="relative py-24 bg-gradient-to-b from-[hsl(var(--brand-surface))] to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-[hsl(var(--brand-accent-2))]/10 text-[hsl(var(--brand-accent-2))] border-[hsl(var(--brand-accent-2))]/30">
                See It In Action
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                AI Security Systems
                <br />
                <span className="text-[hsl(var(--brand-accent-1))]">
                  In Real-Time
                </span>
              </h2>
              <p className="text-lg text-[hsl(var(--brand-muted))] mb-8 leading-relaxed">
                Watch how our AI-powered security platform detects threats,
                analyzes patterns, and responds automatically to keep your
                assets protected 24/7.
              </p>
              <div className="space-y-4">
                {[
                  "Real-time threat detection visualization",
                  "Automated response workflows",
                  "Cross-system intelligence coordination",
                  "Predictive analytics dashboard",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="h-2 w-2 rounded-full bg-[hsl(var(--brand-accent-1))]" />
                    <span className="text-[hsl(var(--brand-muted))]">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-2xl overflow-hidden border border-[hsl(var(--brand-border))] group hover:border-[hsl(var(--brand-accent-1))] transition-all">
                <video
                  src="/video.mp4"
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  playsInline
                  controls
                  poster="/thumbnail.jpg" // optional preview image
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[hsl(var(--brand-accent-2))]/10 text-[hsl(var(--brand-accent-2))] border-[hsl(var(--brand-accent-2))]/30">
              AI-Enhanced services
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Security Systems
              <span className="text-[hsl(var(--brand-accent-1))]">
                {" "}
                Reimagined with AI
              </span>
            </h2>
            <p className="text-xl text-[hsl(var(--brand-muted))] max-w-3xl mx-auto">
              Every system is augmented with artificial intelligence to deliver
              prevention, not just detection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ServiceCard {...service} />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              variant="outline"
              className="border-[hsl(var(--brand-accent-1))] text-lg text-[hsl(var(--brand-accent-1))] hover:bg-[hsl(var(--brand-accent-1))]/10"
              asChild
            >
              <Link href="/services">
                View All services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="relative py-24 bg-gradient-to-b from-transparent to-[hsl(var(--brand-surface))]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[hsl(var(--brand-accent-1))]/10 text-[hsl(var(--brand-accent-1))] border-[hsl(var(--brand-accent-1))]/30">
              Core AI Capabilities
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              The Intelligence Layer
            </h2>
            <p className="text-xl text-[hsl(var(--brand-muted))] max-w-3xl mx-auto">
              Our AI engine runs across all systems, delivering insights and
              automation that traditional security cannot match.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aiCapabilities.map((capability, index) => (
              <Card
                key={index}
                className="p-6 bg-gradient-to-br from-[hsl(var(--brand-surface))] to-transparent border-[hsl(var(--brand-border))] hover:border-[hsl(var(--brand-accent-1))]/50 transition-all duration-300 hover:box-glow"
              >
                <capability.icon className="h-10 w-10 text-[hsl(var(--brand-accent-1))] mb-4" />
                <h3 className="text-lg font-semibold mb-2">
                  {capability.title}
                </h3>
                <p className="text-sm text-[hsl(var(--brand-muted))]">
                  {capability.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[hsl(var(--brand-accent-2))]/10 text-[hsl(var(--brand-accent-2))] border-[hsl(var(--brand-accent-2))]/30">
              Industries We Serve
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Securing Critical Infrastructure
              <br />
              <span className="text-[hsl(var(--brand-accent-1))]">
                Across MENA
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => (
              <Link
                key={index}
                href="/industries"
                className="group p-6 rounded-xl border border-[hsl(var(--brand-border))] bg-[hsl(var(--brand-surface))] hover:border-[hsl(var(--brand-accent-1))]/50 transition-all duration-300 hover:scale-105 text-center"
              >
                <industry.icon className="h-10 w-10 text-[hsl(var(--brand-accent-1))] mx-auto mb-4 group-hover:text-[hsl(var(--brand-accent-2))] transition-colors" />
                <h3 className="font-semibold mb-2 text-sm">{industry.name}</h3>
                <p className="text-xs text-[hsl(var(--brand-muted))]">
                  {industry.count}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative py-24 bg-gradient-to-br from-[hsl(var(--brand-accent-1))]/5 via-[hsl(var(--brand-accent-2))]/5 to-transparent border-y border-[hsl(var(--brand-border))]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Upgrade Your Security Infrastructure?
          </h2>
          <p className="text-xl text-[hsl(var(--brand-muted))] mb-10 max-w-3xl mx-auto">
            Schedule a comprehensive security assessment and discover how AI can
            transform your protection strategy.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              className="bg-[hsl(var(--brand-accent-1))] hover:bg-[hsl(var(--brand-accent-1))]/90 text-lg text-[hsl(var(--brand-bg))] px-8 box-glow"
              asChild
            >
              <Link href="/contact">Request Design Audit</Link>
            </Button>
            <Button
              variant="outline"
              className="border-[hsl(var(--brand-accent-1))] text-[hsl(var(--brand-accent-1))] text-lg hover:bg-[hsl(var(--brand-accent-1))]/10 px-8"
              asChild
            >
              <Link href="/projects">View Case Studies</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
