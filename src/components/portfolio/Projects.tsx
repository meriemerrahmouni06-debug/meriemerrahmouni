import { Activity, BarChart3, Sparkles, Trophy, Users, Watch } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Section } from "./Section";
import banner from "@/assets/hackathon-banner.jpg";
import team from "@/assets/hackathon-team.jpg";
import certificate from "@/assets/hackathon-certificate.jpg";

const projects = [
  {
    key: "proj.5",
    icon: Users,
    tags: ["Java", "JavaFX", "Hibernate ORM", "MySQL", "UML", "Scene Builder"],
  },
  {
    key: "proj.1",
    icon: Activity,
    tags: ["Neo4j", "Python", "NetworkX", "Scikit-Learn", "NumPy", "Gephi", "igraph"],
  },
  { key: "proj.2", icon: BarChart3, tags: ["SQL", "Excel", "Power BI"] },
  {
    key: "proj.3",
    icon: Watch,
    tags: ["IoT", "Teamwork", "Hardware/Software Integration"],
  },
];


export function Projects() {
  const { t } = useI18n();

  return (
    <Section id="projects" title={t("proj.title")} subtitle={t("proj.subtitle")}>
      <article className="surface-card relative mb-6 overflow-hidden p-6 sm:p-8">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 -right-16 h-64 w-64 rounded-full bg-violet/25 blur-[90px]"
        />
        <div className="relative grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-violet to-primary px-3 py-1 text-xs font-bold tracking-wide text-primary-foreground uppercase">
                <Trophy size={13} />
                {t("proj.4.badge")}
              </span>
              <span className="text-xs text-muted-foreground">{t("proj.4.date")}</span>
            </div>
            <h3 className="mt-4 text-xl font-bold sm:text-2xl">{t("proj.4.title")}</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="chip">
                <Sparkles size={12} className="text-accent" />
                {t("proj.4.h1")}
              </span>
              <span className="chip">{t("proj.4.h2")}</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {t("proj.4.desc")}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {["Gemma AI", "LLM", "Healthcare AI", "Hackathon"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-md bg-secondary px-2 py-1 text-xs text-secondary-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <figure className="glow-border-always overflow-hidden rounded-xl sm:col-span-2">
              <img
                src={banner}
                alt={t("proj.4.photo2")}
                loading="lazy"
                width={1024}
                height={640}
                className="h-44 w-full rounded-xl bg-secondary object-contain transition-transform duration-500 hover:scale-[1.03] sm:h-52"
              />
            </figure>
            <figure className="overflow-hidden rounded-xl border border-border">
              <img
                src={team}
                alt={t("proj.4.photo1")}
                loading="lazy"
                width={1280}
                height={716}
                className="h-40 w-full object-cover object-center transition-transform duration-500 hover:scale-105 sm:h-44"
              />
            </figure>
            <figure className="overflow-hidden rounded-xl border border-border">
              <img
                src={certificate}
                alt={t("proj.4.h2")}
                loading="lazy"
                width={1041}
                height={1280}
                className="h-40 w-full object-cover object-top transition-transform duration-500 hover:scale-105 sm:h-44"
              />
            </figure>
          </div>
        </div>
      </article>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map(({ key, icon: Icon, tags }) => (
          <article key={key} className="surface-card glow-border shine flex flex-col p-6">

            <Icon size={20} className="text-accent" />
            <span className="mt-4 text-xs text-muted-foreground">{t(`${key}.date`)}</span>
            <h3 className="mt-1 text-lg font-semibold">{t(`${key}.title`)}</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
              {t(`${key}.desc`)}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md bg-secondary px-2 py-1 text-xs text-secondary-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
