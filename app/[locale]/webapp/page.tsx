import WebAppNav from "./components/web-app-nav";

export default function WebAppPage() {
  return (
    <div className="flex flex-col min-h-dvh">
      <div className="flex-1 flex items-center justify-center">
        {/* Page content goes here */}
      </div>
      <WebAppNav />
    </div>
  );
}
