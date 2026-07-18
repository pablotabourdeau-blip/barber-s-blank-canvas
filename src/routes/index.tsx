import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Gallery } from "@/components/Gallery";
import { Team } from "@/components/Team";
import { Reviews } from "@/components/Reviews";
import { BookingCTA } from "@/components/BookingCTA";
import { Location } from "@/components/Location";
import { Footer } from "@/components/Footer";
import { StickyBooking } from "@/components/StickyBooking";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Team />
        <Reviews />
        <Location />
        <BookingCTA />
      </main>
      <Footer />
      <StickyBooking />
    </div>
  );
}


