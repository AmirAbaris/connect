import CTASection from "./components/cta-section";
import Hero from "./components/hero";
import UserVisibility from "./components/user-visibility";

export default function HomePage() {
  return (
    <div className="bg-background pt-16">
      <Hero />
      <UserVisibility />
      <CTASection />
    </div>
  );
}
