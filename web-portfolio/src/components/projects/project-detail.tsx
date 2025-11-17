import type { Project } from "@/data/projects";

export function ProjectDetail({ project }: { project: Project }) {
  return (
    <article className="glass-panel rounded-3xl px-8 py-8 text-white">
      <div className="mb-6 space-y-2">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-200/80">
          {project.timeline}
        </p>
        <h1 className="text-4xl font-semibold">{project.name}</h1>
        <p className="text-white/70">{project.summary}</p>
      </div>
      <div className="grid gap-8 md:grid-cols-2">
        <DetailSection label="문제 정의" value={project.problem} />
        <DetailSection label="대상 사용자" value={project.audience} />
        <DetailSection label="기여도" value={project.contribution} />
        <DetailSection label="임팩트" value={project.impact} />
      </div>
      <div className="mt-8">
        <h2 className="text-lg font-semibold">기술 스택</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span key={tech} className="rounded-full bg-white/10 px-3 py-1 text-sm">
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-8 space-y-3">
        <h2 className="text-lg font-semibold">하이라이트</h2>
        <ul className="list-disc space-y-2 pl-5 text-white/80">
          {project.highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="mt-8 flex flex-wrap gap-3">
        {project.links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 px-4 py-2 text-sm font-semibold"
          >
            {link.label}
          </a>
        ))}
      </div>
    </article>
  );
}

function DetailSection({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.3em] text-white/50">{label}</p>
      <p className="text-base text-white/90">{value}</p>
    </div>
  );
}
