import Hero from "./components/hero";
import UserVisibility from "./components/user-visibility";
import CTASection from "./components/cta-section";

export default function HomePage() {
  return (
    <div className="bg-background">
      <Hero />
      <UserVisibility />
      <CTASection />
    </div>
  );
}
