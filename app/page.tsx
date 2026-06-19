import Nav from "@/components/nav";
import Hero from "@/components/hero";
import AlexandraShowcase from "@/components/alexandra-showcase";
import ServicesPreview from "@/components/services-preview";
import ServiceMenu from "@/components/service-menu";
import BookingCta from "@/components/booking-cta";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <AlexandraShowcase />
      <ServicesPreview />
      <ServiceMenu />
      <BookingCta />
      <Footer />
    </main>
  );
}
