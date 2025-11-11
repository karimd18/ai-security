"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";

export default function Privacy() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="relative pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge className="mb-6 bg-[hsl(var(--brand-accent-1))]/10 text-[hsl(var(--brand-accent-1))] border-[hsl(var(--brand-accent-1))]/30">
            Legal
          </Badge>
          <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
          <div className="prose prose-invert max-w-none space-y-6 text-[hsl(var(--brand-muted))]">
            <p>Last updated: November 10, 2025</p>
            <p>AI Security is committed to protecting your privacy and handling your data with transparency and security.</p>
            <h2 className="text-2xl font-semibold text-white mt-8">Data Collection</h2>
            <p>We collect only necessary information required to provide our security services, including system logs, access records, and incident data.</p>
            <h2 className="text-2xl font-semibold text-white mt-8">Data Protection</h2>
            <p>All data is encrypted at rest and in transit using AES-256 encryption. We maintain ISO 27001 certification and full GDPR compliance.</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
