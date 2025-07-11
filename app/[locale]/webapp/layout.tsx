import "../../globals.css";
import WebAppNav from "./components/web-app-nav";

export default async function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      {children}
      <WebAppNav />
    </main>
  );
}
