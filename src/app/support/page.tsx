"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { HeadphonesIcon, FileText, Clock, Shield, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    question: "How accurate is your AI threat detection?",
    answer: "Our AI systems achieve 99.3% accuracy in threat classification with continuous learning that improves over time. False positive rates are reduced by 45% compared to traditional systems."
  },
  {
    question: "How do you handle data privacy and compliance?",
    answer: "All systems are designed with privacy-by-default principles, full GDPR compliance, and ISO 27001 certification. Data is encrypted at rest and in transit, with configurable retention policies."
  },
  {
    question: "What is the typical ROI timeline?",
    answer: "Most clients see positive ROI within 18-24 months through reduced false alarms, improved incident response times, and predictive maintenance savings."
  },
  {
    question: "Can your AI integrate with our existing security systems?",
    answer: "Yes, our solutions are designed for seamless integration with major VMS platforms, access control systems, and alarm panels through open APIs and standard protocols."
  },
  {
    question: "How do you handle false alarms?",
    answer: "Our machine learning algorithms continuously learn from your environment, reducing false alarms by 45-65% through behavior pattern recognition and multi-sensor correlation."
  },
  {
    question: "What kind of training do you provide?",
    answer: "Comprehensive operator and administrator training is included, covering system operation, AI dashboard interpretation, and best practices. Ongoing workshops and certifications available."
  },
  {
    question: "How is our data stored and protected?",
    answer: "Data is stored in geo-redundant cloud infrastructure with AES-256 encryption, role-based access control, and full audit trails. On-premise options also available."
  },
  {
    question: "Can the system be customized for our specific needs?",
    answer: "Absolutely. Every deployment begins with a comprehensive assessment and is tailored to your unique requirements, environment, and operational workflows."
  },
];

export default function Support() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="relative pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-[hsl(var(--brand-accent-1))]/10 text-[hsl(var(--brand-accent-1))] border-[hsl(var(--brand-accent-1))]/30">
            Customer Support
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            We're Here to Help
            <br />
            <span className="text-[hsl(var(--brand-accent-1))]">24/7 Support Available</span>
          </h1>
          <p className="text-xl text-[hsl(var(--brand-muted))] max-w-3xl mx-auto">
            Enterprise-grade support with guaranteed SLAs and dedicated technical teams.
          </p>
        </div>
      </section>

      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <Card className="p-6 text-center border-[hsl(var(--brand-border))]">
              <Clock className="h-10 w-10 text-[hsl(var(--brand-accent-1))] mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">24/7 Availability</h3>
              <p className="text-sm text-[hsl(var(--brand-muted))]">Round-the-clock technical support for critical issues</p>
            </Card>
            <Card className="p-6 text-center border-[hsl(var(--brand-border))]">
              <Shield className="h-10 w-10 text-[hsl(var(--brand-accent-1))] mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">SLA Guarantee</h3>
              <p className="text-sm text-[hsl(var(--brand-muted))]">Response times from 15 minutes to 4 hours based on priority</p>
            </Card>
            <Card className="p-6 text-center border-[hsl(var(--brand-border))]">
              <FileText className="h-10 w-10 text-[hsl(var(--brand-accent-1))] mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Documentation Hub</h3>
              <p className="text-sm text-[hsl(var(--brand-muted))]">Comprehensive guides, tutorials, and best practices</p>
            </Card>
          </div>

          <div className="max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-[hsl(var(--brand-border))] rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:text-[hsl(var(--brand-accent-1))] transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[hsl(var(--brand-muted))] leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Still Need Help?</h2>
            <p className="text-[hsl(var(--brand-muted))] mb-8">Our support team is ready to assist you</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button className="bg-[hsl(var(--brand-accent-1))] hover:bg-[hsl(var(--brand-accent-1))]/90 text-lg text-[hsl(var(--brand-bg))]" asChild>
                <Link href="/contact">Open Support Ticket</Link>
              </Button>
              <Button className="border-[hsl(var(--brand-accent-1))] text-lg text-[hsl(var(--brand-accent-1))]" asChild>
                <a href="tel:+971123456789">Call Support</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
