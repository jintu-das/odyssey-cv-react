import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { createLazyFileRoute, Link } from "@tanstack/react-router";
import { MoveRightIcon } from "lucide-react";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <Navbar />

      <main className="relative  px-6  lg:px-8">
        <div className="mx-auto max-w-3xl py-32 sm:py-48">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Announcing our next round of funding.{" "}
              <a href="#" className="font-semibold text-primary">
                <span aria-hidden="true" className="absolute inset-0" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-balance text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Your Journey to the Perfect Resume Starts Here
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Odyssey Sv makes it easy to create professional, impactful CVs.
              Whether you're beginning your career or advancing it, our
              intuitive platform helps you highlight your skills and experience
              effectively.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-4">
              <Button size="lg" asChild>
                <Link to="/app">Get started</Link>
              </Button>
              <Button size="lg" variant="ghost">
                Learn more <MoveRightIcon className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
