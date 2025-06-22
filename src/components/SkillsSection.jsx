const skills = ["JavaScript","TypeScript", "React", "Next.js", "Tailwind CSS", "Node.js", "Redux", "Git"];

export default function SkillsSection() {
  return (
    <section className="flex flex-col items-center justify-center pb-28">
      <h2 className="text-5xl tracking-tighter font-semibold mb-6">Skills</h2>
        <div className="flex flex-wrap gap-6 items-center justify-center max-w-3xl">
        {skills.map((skill) => (
            <span
            key={skill}
            className="bg-white/10 border border-white/20 px-6 py-3 text-lg rounded-full transition transform-gpu hover:-translate-y-2 hover:scale-110 shadow-xl"
            >
            {skill}
            </span>
        ))}
        </div>

    </section>
  );
}
