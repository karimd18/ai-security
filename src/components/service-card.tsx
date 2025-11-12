import { LucideIcon } from "lucide-react";
import Link from "next/link";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  aiFeatures: string[];
  href: string;
}

export function ServiceCard({ icon: Icon, title, description, aiFeatures, href }: ServiceCardProps) {
  return (
    <Link href={href} className="group block">
      <div className="relative h-full p-6 rounded-xl border border-[hsl(var(--brand-border))] bg-gradient-to-br from-[hsl(var(--brand-surface))] to-transparent hover:border-[hsl(var(--brand-accent-1))]/50 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,191,255,0.2)]">
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[hsl(var(--brand-accent-1))]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        <div className="relative">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-[hsl(var(--brand-accent-1))]/20 to-[hsl(var(--brand-accent-2))]/20 mb-4 group-hover:scale-110 transition-transform duration-300">
            <Icon className="h-6 w-6 text-[hsl(var(--brand-accent-1))] group-hover:text-[hsl(var(--brand-accent-2))] transition-colors" />
          </div>

          <h3 className="text-xl font-semibold mb-3 group-hover:text-[hsl(var(--brand-accent-1))] transition-colors">
            {title}
          </h3>

          <p className="text-[hsl(var(--brand-muted))] text-sm mb-4 leading-relaxed">
            {description}
          </p>

          <div className="space-y-2">
            <div className="text-xs font-semibold text-[hsl(var(--brand-accent-2))] uppercase tracking-wider mb-2">
              AI-Powered Features
            </div>
            <ul className="space-y-1.5">
              {aiFeatures.map((feature, index) => (
                <li key={index} className="flex items-start space-x-2 text-xs text-[hsl(var(--brand-muted))]">
                  <span className="text-[hsl(var(--brand-accent-1))] mt-0.5">▸</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Link>
  );
}
