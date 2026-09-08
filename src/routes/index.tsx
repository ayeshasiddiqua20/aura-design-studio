import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Header } from "@/components/site/Header";
import { BookingModal } from "@/components/site/BookingModal";
import { Hero } from "@/components/site/Hero";
import { Portfolio } from "@/components/site/Portfolio";
import { StyleQuiz } from "@/components/site/StyleQuiz";
import { CaseStudy } from "@/components/site/CaseStudy";
import { Pricing } from "@/components/site/Pricing";
import { Process } from "@/components/site/Process";
import { Testimonials } from "@/components/site/Testimonials";
import { Footer } from "@/components/site/Footer";

const TITLE = "Aura Design Studio — Interior Design & Turnkey Execution, Mumbai";
const DESC =
  "Spaces designed for living, executed without the friction. Modern interiors delivered on budget and on schedule. 50+ homes, 100% on-time, zero hidden fees.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "InteriorDesigner",
          name: "Aura Design Studio",
          description: DESC,
          address: { "@type": "PostalAddress", addressLocality: "Mumbai", addressCountry: "IN" },
          telephone: "+91 98200 12345",
          email: "hello@auradesign.studio",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  const [booking, setBooking] = useState(false);
  const openBooking = () => setBooking(true);

  return (
    <div className="min-h-screen">
      <Header onBook={openBooking} />
      <main>
        <Hero />
        <Portfolio />
        <StyleQuiz />
        <CaseStudy />
        <Pricing onBook={openBooking} />
        <Process />
        <Testimonials />
      </main>
      <Footer />
      <BookingModal open={booking} onOpenChange={setBooking} />
      <Toaster position="bottom-center" />
    </div>
  );
}
