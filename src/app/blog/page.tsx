"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Brain, Eye, Bot, Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";

const posts = [
  {
    title: "The Future of AI in Physical Security",
    excerpt: "How artificial intelligence is transforming traditional security from reactive monitoring to proactive prevention.",
    category: "AI Technology",
    date: "November 5, 2025",
    readTime: "8 min read",
    icon: Brain
  },
  {
    title: "Predictive Monitoring: Preventing Incidents Before They Happen",
    excerpt: "Explore how machine learning algorithms analyze patterns to predict and prevent security incidents.",
    category: "Best Practices",
    date: "October 28, 2025",
    readTime: "6 min read",
    icon: Eye
  },
  {
    title: "Security Robotics: The New Perimeter Guards",
    excerpt: "Autonomous patrol robots are revolutionizing perimeter security with 24/7 coverage and AI-powered threat detection.",
    category: "Innovation",
    date: "October 15, 2025",
    readTime: "7 min read",
    icon: Bot
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="relative pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-[hsl(var(--brand-accent-1))]/10 text-[hsl(var(--brand-accent-1))] border-[hsl(var(--brand-accent-1))]/30">
            Insights & Thought Leadership
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Security Intelligence
            <br />
            <span className="text-[hsl(var(--brand-accent-1))]">Insights & Updates</span>
          </h1>
          <p className="text-xl text-[hsl(var(--brand-muted))] max-w-3xl mx-auto">
            Expert perspectives on AI security, industry trends, and best practices.
          </p>
        </div>
      </section>

      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <Card key={index} className="p-6 border-[hsl(var(--brand-border))] hover:border-[hsl(var(--brand-accent-1))]/50 transition-all group cursor-pointer">
                <post.icon className="h-10 w-10 text-[hsl(var(--brand-accent-1))] mb-4" />
                <Badge className="mb-3 bg-[hsl(var(--brand-accent-2))]/10 text-[hsl(var(--brand-accent-2))] border-[hsl(var(--brand-accent-2))]/30">
                  {post.category}
                </Badge>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-[hsl(var(--brand-accent-1))] transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-[hsl(var(--brand-muted))] mb-4 leading-relaxed">{post.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-[hsl(var(--brand-muted))]">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-3 w-3" />
                    <span>{post.date}</span>
                  </div>
                  <span>{post.readTime}</span>
                </div>
                <div className="mt-4 flex items-center text-sm text-[hsl(var(--brand-accent-1))] group-hover:gap-2 transition-all">
                  <span>Read More</span>
                  <ArrowRight className="h-4 w-4" />
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
