// "use client";

// import { Navbar } from "@/components/navbar";
// import { Footer } from "@/components/footer";
// import { Badge } from "@/components/ui/badge";
// import { Card } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Briefcase, Heart, TrendingUp, Users, Zap, GraduationCap } from "lucide-react";
// import Link from "next/link";

// const openRoles = [
//   { title: "Senior AI Engineer", department: "Engineering", location: "Dubai", type: "Full-time" },
//   { title: "Security Systems Designer", department: "Design", location: "Abu Dhabi", type: "Full-time" },
//   { title: "Solutions Architect", department: "Pre-Sales", location: "Dubai", type: "Full-time" },
//   { title: "Field Service Technician", department: "Operations", location: "Multiple Locations", type: "Full-time" },
//   { title: "Customer Success Manager", department: "Customer Success", location: "Dubai", type: "Full-time" },
// ];

// export default function Careers() {
//   return (
//     <div className="min-h-screen">
//       <Navbar />

//       <section className="relative pt-32 pb-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <Badge className="mb-6 bg-[hsl(var(--brand-accent-1))]/10 text-[hsl(var(--brand-accent-1))] border-[hsl(var(--brand-accent-1))]/30">
//             Join Our Team
//           </Badge>
//           <h1 className="text-5xl md:text-6xl font-bold mb-6">
//             Build the Future of
//             <br />
//             <span className="text-[hsl(var(--brand-accent-1))]">AI-Powered Security</span>
//           </h1>
//           <p className="text-xl text-[hsl(var(--brand-muted))] max-w-3xl mx-auto">
//             Join a team of innovators transforming physical security across MENA.
//           </p>
//         </div>
//       </section>

//       <section className="relative py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl font-bold mb-12 text-center">Why AI Security?</h2>
//           <div className="grid md:grid-cols-3 gap-8 mb-20">
//             {[
//               { icon: Zap, title: "Cutting-Edge Technology", desc: "Work with the latest AI and security technologies" },
//               { icon: TrendingUp, title: "Career Growth", desc: "Continuous learning and advancement opportunities" },
//               { icon: Heart, title: "Meaningful Work", desc: "Protect people and critical infrastructure" },
//               { icon: Users, title: "Great Culture", desc: "Collaborative, innovative, and supportive environment" },
//               { icon: GraduationCap, title: "Training & Development", desc: "Certifications, workshops, and skill development" },
//               { icon: Briefcase, title: "Competitive Benefits", desc: "Health insurance, bonuses, and work-life balance" },
//             ].map((benefit, index) => (
//               <Card key={index} className="p-6 text-center border-[hsl(var(--brand-border))] hover:border-[hsl(var(--brand-accent-1))]/50 transition-all">
//                 <benefit.icon className="h-10 w-10 text-[hsl(var(--brand-accent-1))] mx-auto mb-4" />
//                 <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
//                 <p className="text-sm text-[hsl(var(--brand-muted))]">{benefit.desc}</p>
//               </Card>
//             ))}
//           </div>

//           <div className="max-w-4xl mx-auto">
//             <h2 className="text-3xl font-bold mb-8 text-center">Open Positions</h2>
//             <div className="space-y-4">
//               {openRoles.map((role, index) => (
//                 <Card key={index} className="p-6 border-[hsl(var(--brand-border))] hover:border-[hsl(var(--brand-accent-1))]/50 transition-all">
//                   <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
//                     <div>
//                       <h3 className="text-xl font-semibold mb-2">{role.title}</h3>
//                       <div className="flex flex-wrap gap-3 text-sm text-[hsl(var(--brand-muted))]">
//                         <span>{role.department}</span>
//                         <span>•</span>
//                         <span>{role.location}</span>
//                         <span>•</span>
//                         <Badge className="border-[hsl(var(--brand-accent-1))] text-[hsl(var(--brand-accent-1))]">
//                           {role.type}
//                         </Badge>
//                       </div>
//                     </div>
//                     <Button className="border-[hsl(var(--brand-accent-1))] text-[hsl(var(--brand-accent-1))] hover:bg-[hsl(var(--brand-accent-1))]/10" asChild>
//                       <Link href="/contact">Apply Now</Link>
//                     </Button>
//                   </div>
//                 </Card>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// }
