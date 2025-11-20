"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Shield, Target, Eye, Users, Award, TrendingUp } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="relative pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-[hsl(var(--brand-accent-1))]/10 text-[hsl(var(--brand-accent-1))] border-[hsl(var(--brand-accent-1))]/30">
            About AI Security
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Building the Future of
            <br />
            <span className="text-[hsl(var(--brand-accent-1))]">Intelligent Security</span>
          </h1>
          <p className="text-xl text-[hsl(var(--brand-muted))] max-w-3xl mx-auto leading-relaxed">
            Leading security systems integrator combining cutting-edge AI with proven protection methodologies across MENA.
          </p>
        </div>
      </section>

      <section className="relative py-20 bg-gradient-to-b from-transparent to-[hsl(var(--brand-surface))]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative order-2 lg:order-1">
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-[hsl(var(--brand-accent-1))]/20 to-[hsl(var(--brand-accent-2))]/20 border border-[hsl(var(--brand-border))] overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-[hsl(var(--brand-bg))]/40 backdrop-blur-sm"></div>
                <div className="relative z-10 text-center p-8">
                  <Shield className="h-24 w-24 text-[hsl(var(--brand-accent-1))] mx-auto mb-4" />
                  <p className="text-sm text-[hsl(var(--brand-muted))]">Headquarters Image</p>
                  <p className="text-xs text-[hsl(var(--brand-muted))]/60 mt-1">Coming Soon</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <Badge className="mb-6 bg-[hsl(var(--brand-accent-2))]/10 text-[hsl(var(--brand-accent-2))] border-[hsl(var(--brand-accent-2))]/30">
                Our Story
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Leading Security Innovation
                <br />
                <span className="text-[hsl(var(--brand-accent-1))]">Since 2010</span>
              </h2>
              <p className="text-[hsl(var(--brand-muted))] mb-6 leading-relaxed">
                Founded with a vision to transform security through technology, we've grown from a small team to the region's most trusted AI security integrator.
              </p>
              <p className="text-[hsl(var(--brand-muted))] leading-relaxed">
                Today, our solutions protect critical infrastructure, government facilities, healthcare centers, and commercial properties across the MENA region, with a track record of zero breaches in secured facilities.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            <Card className="p-8 text-center bg-gradient-to-br from-[hsl(var(--brand-surface))] to-transparent border-[hsl(var(--brand-border))]">
              <Target className="h-12 w-12 text-[hsl(var(--brand-accent-1))] mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-3">Mission</h3>
              <p className="text-[hsl(var(--brand-muted))] leading-relaxed">
                To deliver AI-powered security solutions that prevent threats before they escalate, protecting people and assets across critical infrastructure.
              </p>
            </Card>
            <Card className="p-8 text-center bg-gradient-to-br from-[hsl(var(--brand-surface))] to-transparent border-[hsl(var(--brand-border))]">
              <Eye className="h-12 w-12 text-[hsl(var(--brand-accent-1))] mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-3">Vision</h3>
              <p className="text-[hsl(var(--brand-muted))] leading-relaxed">
                To be the region's leading security partner, where artificial intelligence transforms reactive monitoring into proactive prevention.
              </p>
            </Card>
            <Card className="p-8 text-center bg-gradient-to-br from-[hsl(var(--brand-surface))] to-transparent border-[hsl(var(--brand-border))]">
              <Award className="h-12 w-12 text-[hsl(var(--brand-accent-1))] mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-3">Values</h3>
              <p className="text-[hsl(var(--brand-muted))] leading-relaxed">
                Innovation, Trust, Excellence, and Customer-First approach guide every solution we design and deploy.
              </p>
            </Card>
          </div>

          <div className="max-w-4xl mx-auto mb-20">
            <h2 className="text-3xl font-bold mb-6 text-center">Why Choose AI Security</h2>
            <div className="space-y-6">
              <Card className="p-6 border-[hsl(var(--brand-border))]">
                <h3 className="text-xl font-semibold mb-2 text-[hsl(var(--brand-accent-1))]">AI-First Approach</h3>
                <p className="text-[hsl(var(--brand-muted))]">
                  Every system we deploy integrates artificial intelligence from day one, not as an afterthought but as a core capability.
                </p>
              </Card>
              <Card className="p-6 border-[hsl(var(--brand-border))]">
                <h3 className="text-xl font-semibold mb-2 text-[hsl(var(--brand-accent-1))]">Proven Track Record</h3>
                <p className="text-[hsl(var(--brand-muted))]">
                  250+ successful deployments across government, healthcare, retail, and critical infrastructure with measurable outcomes.
                </p>
              </Card>
              <Card className="p-6 border-[hsl(var(--brand-border))]">
                <h3 className="text-xl font-semibold mb-2 text-[hsl(var(--brand-accent-1))]">End-to-End Expertise</h3>
                <p className="text-[hsl(var(--brand-muted))]">
                  From initial assessment to deployment, training, and ongoing support, we manage every aspect of your security transformation.
                </p>
              </Card>
              <Card className="p-6 border-[hsl(var(--brand-border))]">
                <h3 className="text-xl font-semibold mb-2 text-[hsl(var(--brand-accent-1))]">Compliance & Certification</h3>
                <p className="text-[hsl(var(--brand-muted))]">
                  Full GDPR, SOC 2, and NIST compliance built into every solution.
                </p>
              </Card>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-[hsl(var(--brand-accent-1))] mb-2">15+</div>
              <div className="text-sm text-[hsl(var(--brand-muted))]">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[hsl(var(--brand-accent-1))] mb-2">250+</div>
              <div className="text-sm text-[hsl(var(--brand-muted))]">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[hsl(var(--brand-accent-1))] mb-2">98%</div>
              <div className="text-sm text-[hsl(var(--brand-muted))]">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[hsl(var(--brand-accent-1))] mb-2">24/7</div>
              <div className="text-sm text-[hsl(var(--brand-muted))]">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
