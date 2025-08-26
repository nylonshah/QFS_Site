import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, LineChart, GraduationCap, ChevronRight, MapPin, Clock, ExternalLink, Mail } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Events", href: "#events" },
  { label: "Apply Now", href: "#apply" },
  { label: "Contact", href: "#contact" },
];

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* NAVBAR */}
      <header className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? "backdrop-blur supports-[backdrop-filter]:bg-neutral-900/70 border-b border-white/10" : "bg-transparent"}`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <a href="#home" className="flex items-center gap-3">
              <img src="/assets/qfs-logo.png" alt="QFS @ IU" className="h-9 w-9 object-contain" onError={(e)=>{e.currentTarget.style.display='none'}}/>
              <span className="font-semibold tracking-tight">Quantitative Finance Society</span>
            </a>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              {NAV_LINKS.map((n)=> (
                <a key={n.href} href={n.href} className="hover:text-white/90 text-neutral-300">{n.label}</a>
              ))}
              <a href="#apply">
                <Button size="sm" className="bg-red-700 hover:bg-red-600 rounded-xl">Apply Now</Button>
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* HOME */}
      <section id="home" className="relative isolate overflow-hidden pt-28">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-red-900/40 via-neutral-900 to-neutral-950"/>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Left: headline & CTAs */}
            <div>
              <Badge className="bg-white/10 text-white border-white/10">Indiana University</Badge>
              <h1 className="mt-4 text-4xl/tight sm:text-5xl/tight font-semibold tracking-tight">
                Learn markets. Build models. <span className="text-red-400">Trade ideas.</span>
              </h1>
              <p className="mt-4 text-neutral-300 max-w-xl">
                Welcome to the home for all things Quantitative Research, Development, and Trading at Indiana University. We host skill-building sessions, guest speakers from top firms, and trading simulations.
              </p>

              {/* CTAs */}
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a href="#apply"><Button size="lg" className="bg-red-700 hover:bg-red-600 rounded-2xl">Apply Now</Button></a>
                <a href="https://beinvolved.indiana.edu/organization/quantfiniu" target="_blank" className="inline-flex items-center gap-2 text-neutral-300 hover:text-white">
                  <ExternalLink className="h-4 w-4"/> RSVP / beINvolved
                </a>
              </div>

              {/* Stats */}
              <div className="mt-8 grid grid-cols-3 gap-6 max-w-md text-sm">
                <Stat icon={<Users className="h-4 w-4"/>} label="Mentorship" value="Peer & Alumni"/>
                <Stat icon={<LineChart className="h-4 w-4"/>} label="Meetings" value="Bi‑weekly"/>
                <Stat icon={<GraduationCap className="h-4 w-4"/>} label="Placements" value="S&T • QR • ER"/>
              </div>
            </div>

            {/* Right: next event card */}
            <div className="lg:justify-self-end w-full max-w-md">
              <Card className="bg-white/5 border-white/10">
                <CardHeader className="pb-0">
                  <CardTitle className="text-lg text-neutral-200">Next Up</CardTitle>
                </CardHeader>
                <CardContent className="pt-4 text-sm text-neutral-300 space-y-2">
                  <div className="font-medium text-white">QFS Callout — Fall 2025</div>
                  <div className="flex items-center gap-2"><Calendar className="h-4 w-4"/> September 2</div>
                  <div className="flex items-center gap-2"><Clock className="h-4 w-4"/> 7:00–8:00 PM</div>
                  <div className="flex items-center gap-2"><MapPin className="h-4 w-4"/> Hodge Hall 2046</div>
                  <a href="https://beinvolved.indiana.edu/organization/quantfiniu" target="_blank" className="inline-flex items-center gap-2 text-red-400 hover:text-red-300">RSVP / Details</a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-16 lg:py-24 border-t border-white/10 bg-neutral-900/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-semibold tracking-tight">About Us</h2>
          <p className="mt-4 text-neutral-300 max-w-4xl mx-auto text-justify leading-relaxed">
            The Quantitative Finance Society (QFS) at Indiana University is a student-led organization dedicated to fostering a community of learners passionate about quantitative research, trading, and financial modeling.
          </p>
          <p className="mt-4 text-neutral-300 max-w-4xl mx-auto text-justify leading-relaxed">
            We provide members with opportunities to develop technical skills, engage with industry professionals, and participate in real-world trading simulations.
          </p>
          <p className="mt-4 text-neutral-300 max-w-4xl mx-auto text-justify leading-relaxed">
            Our mission is to bridge the gap between academic theory and practical application, preparing students for successful careers in quantitative finance and related fields.
          </p>
        </div>
      </section>

      {/* EVENTS */}
      <section id="events" className="py-16 lg:py-24 border-t border-white/10 bg-neutral-900/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">Upcoming</h2>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <EventCard
              title="Callout Meeting"
              date="September 2"
              time="4:00–5:00 PM"
              location="Hodge Hall 2048"
              details="Overview of QFS, curriculum highlights, and Q&A."
            />
          </div>
        </div>
      </section>

      {/* APPLY */}
      <section id="apply" className="py-16 lg:py-24 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">Apply to QFS</h2>
              <p className="mt-2 text-neutral-300 max-w-xl">We welcome curious, consistent builders from any major. Submit your resume and a brief market take. Interviews are invite‑only.</p>
              <div className="mt-6 flex items-center gap-3">
                <a href="https://forms.gle/" target="_blank"><Button size="lg" className="bg-red-700 hover:bg-red-600 rounded-2xl">Open Application</Button></a>
                <a href="https://beinvolved.indiana.edu/organization/quantfiniu" target="_blank" className="inline-flex items-center gap-2 text-neutral-300 hover:text-white"><ExternalLink className="h-4 w-4"/> beINvolved Page</a>
              </div>
            </div>
            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle className="text-base text-neutral-200">What you'll submit</CardTitle>
              </CardHeader>
              <CardContent className="grid sm:grid-cols-2 gap-3 text-sm text-neutral-300">
                <Check item="Resume (PDF)"/>
                <Check item="Why QFS? (≤150 words)"/>
                <Check item="Short market take (≤125 words)"/>
                <Check item="Optional: GitHub/project link"/>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-16 lg:py-24 border-t border-white/10 bg-neutral-900/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-semibold tracking-tight">Contact Us</h2>
          <p className="mt-2 text-neutral-300 max-w-2xl mx-auto">Have questions about QFS, want to get involved, or are interested in speaking/recruiting? Reach out to us.</p>
          <div className="mt-6 flex justify-center">
            <a href="mailto:qfs@iu.edu" className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 text-lg">
              <Mail className="h-5 w-5"/> qfsatiu@gmail.com
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
            <div className="flex items-center gap-3">
              <img src="/assets/qfs-logo.png" alt="QFS @ IU" className="h-8 w-8 object-contain" onError={(e)=>{e.currentTarget.style.display='none'}}/>
              <div>
                <div className="font-medium">Quantitative Finance Society</div>
                <div className="text-sm text-neutral-400">Indiana University</div>
              </div>
            </div>
            <div className="text-sm text-neutral-400">
              {new Date().getFullYear()} QFS @ IU. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Stat({ icon, label, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <div className="flex items-center gap-2 text-neutral-300">{icon}<span className="text-xs">{label}</span></div>
      <div className="mt-2 text-lg font-semibold text-white">{value}</div>
    </div>
  );
}

function EventCard({ title, date, time, location, details }) {
  return (
    <Card className="bg-white/5 border-white/10">
      <CardHeader className="pb-0">
        <CardTitle className="text-lg flex items-center gap-2 text-neutral-200"><Calendar className="h-5 w-5"/>{title}</CardTitle>
      </CardHeader>
      <CardContent className="pt-4 text-sm text-neutral-300 space-y-2">
        <div className="flex items-center gap-2"><Clock className="h-4 w-4"/>{date} • {time}</div>
        <div className="flex items-center gap-2"><MapPin className="h-4 w-4"/>{location}</div>
        {details && <p className="text-neutral-400">{details}</p>}
      </CardContent>
    </Card>
  );
}

function Check({ item }) {
  return (
    <div className="flex items-center gap-2 text-neutral-300"><span className="h-1.5 w-1.5 rounded-full bg-red-500"/> <span>{item}</span></div>
  );
}