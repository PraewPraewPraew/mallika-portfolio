import { Link } from "react-router";
import { Home } from "lucide-react";
import { Button } from "../components/button";

export function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto">
        <h1
          className="text-6xl md:text-8xl lg:text-9xl mb-6"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          404
        </h1>
        <h2
          className="text-2xl md:text-3xl lg:text-4xl mb-4"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Page Not Found
        </h2>
        <p className="text-base md:text-lg text-muted mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button variant="primary" size="lg" asChild>
          <Link to="/">
            <Home size={20} />
            Back to Home
          </Link>
        </Button>
      </div>
    </div>
  );
}
