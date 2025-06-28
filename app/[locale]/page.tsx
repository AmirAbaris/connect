import Hero from "./components/hero";
import UserVisibility from "./components/user-visibility";

export default function HomePage() {
  return (
    <div className="bg-background">
      <Hero />
      <UserVisibility />
    </div>
  );
}
