import { useResumeStore } from "@/store/resume-store";
import { commaSeparatedList } from "@/utils/helpers";

export default function ResumePreview() {
  const resumeData = useResumeStore((state) => state.data);

  return (
    <article className="flex-1 bg-white rounded-md py-8 px-12 shadow-lg grid  grid-cols-12 gap-3">
      <section className="col-span-8">
        <h1 className="text-3xl font-semibold font-serif">
          {resumeData?.full_name}
        </h1>
        <h2 className="text-lg font-medium font-serif">
          {resumeData?.job_title}
        </h2>
      </section>
      <aside className="col-span-4">
        <p className="text-sm">
          {commaSeparatedList([
            resumeData?.city ?? null,
            resumeData?.state ?? null,
            resumeData?.country ?? null,
          ])}
        </p>
        <p className="font-medium text-sm">{resumeData?.phone}</p>
        <p className="text-sm">{resumeData?.email}</p>
      </aside>
    </article>
  );
}
