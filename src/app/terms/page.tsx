"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";

export default function Terms() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="relative pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge className="mb-6 bg-[hsl(var(--brand-accent-1))]/10 text-[hsl(var(--brand-accent-1))] border-[hsl(var(--brand-accent-1))]/30">
            Legal
          </Badge>
          <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>
          <div className="prose prose-invert max-w-none space-y-6 text-[hsl(var(--brand-muted))]">
            <p>Last updated: November 10, 2025</p>
            <p>These Terms of Service govern your use of AI Security's products and services.</p>
            <h2 className="text-2xl font-semibold text-white mt-8">Service Agreement</h2>
            <p>By engaging AI Security services, you agree to our standard service level agreements and operational procedures.</p>
            <h2 className="text-2xl font-semibold text-white mt-8">Warranties</h2>
            <p>All systems are backed by comprehensive warranties and 24/7 support agreements.</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
