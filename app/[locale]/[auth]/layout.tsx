import "../../globals.css";
import Footer from "../(landing)/components/footer";
import Navbar from "../(landing)/components/navbar";

export default async function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </div>
  );
}
