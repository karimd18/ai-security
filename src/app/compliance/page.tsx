"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

export default function Compliance() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="relative pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge className="mb-6 bg-[hsl(var(--brand-accent-1))]/10 text-[hsl(var(--brand-accent-1))] border-[hsl(var(--brand-accent-1))]/30">
            Certifications
          </Badge>
          <h1 className="text-4xl font-bold mb-6">Compliance & Certifications</h1>
          <p className="text-xl text-[hsl(var(--brand-muted))] mb-12">
            AI Security maintains the highest standards of compliance and security certifications.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { name: "ISO 27001", desc: "Information Security Management" },
              { name: "SOC 2 Type II", desc: "Security and Availability Controls" },
              { name: "GDPR Compliant", desc: "Data Protection Regulation" },
              { name: "NIST Framework", desc: "Cybersecurity Framework Aligned" },
            ].map((cert, index) => (
              <Card key={index} className="p-6 border-[hsl(var(--brand-border))]">
                <div className="flex items-start space-x-4">
                  <CheckCircle2 className="h-6 w-6 text-[hsl(var(--brand-accent-1))] mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{cert.name}</h3>
                    <p className="text-sm text-[hsl(var(--brand-muted))]">{cert.desc}</p>
                  </div>
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
