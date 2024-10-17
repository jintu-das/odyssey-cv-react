import Back from "@/components/back";
import Download from "@/features/preview/components/download";
import ResumeForm from "@/features/preview/components/form";
import ResumePreview from "@/features/preview/components/resume-preview";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/app")({
  component: About,
});

function About() {
  return (
    <main className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      <section className="p-3 space-y-3 w-full max-w-3xl mx-auto">
        <Back />
        <ResumeForm />
      </section>

      <section className="hidden lg:block sticky top-0 bg-muted p-3 h-full max-h-screen">
        <div className="max-w-2xl mx-auto h-full flex flex-col gap-3">
          <div className="flex justify-end items-center gap-2">
            <Download />
          </div>
          <ResumePreview />
        </div>
      </section>
    </main>
  );
}
