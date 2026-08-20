import { Outlet, ScrollRestoration } from "react-router";
import { Navigation } from "../components/navigation";
import { Footer } from "../components/footer";
import { ScrollToTop } from "../components/scroll-to-top";

export function Root() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 pt-16 md:pt-20">
        <Outlet />
      </main>
      <Footer />
      <ScrollToTop />
      <ScrollRestoration />
    </div>
  );
}