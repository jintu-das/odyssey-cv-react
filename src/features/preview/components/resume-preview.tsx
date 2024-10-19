import { useResumeStore } from "@/store/resume-store";

export default function ResumePreview() {
  const resumeData = useResumeStore((state) => state);

  return (
    <div className="flex-1 bg-white rounded-md p-3 shadow-lg flex flex-col gap-2 justify-center items-center">
      <h3>Resume Preview</h3>

      <p>{JSON.stringify(resumeData, null, 4)}</p>
    </div>
  );
}
