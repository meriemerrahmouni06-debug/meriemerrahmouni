import { GraduationCap, HeartHandshake, Radar, Users } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Section } from "./Section";

export function About() {
  const { t } = useI18n();

  const languages = [
    { label: t("about.arabic"), level: t("about.native"), pct: 100 },
    { label: t("about.english"), level: t("about.fluent"), pct: 75 },
    { label: t("about.french"), level: t("about.fluent"), pct: 75 },
  ];

  const interests = [
    { icon: HeartHandshake, text: t("about.volunteer") },
    { icon: Radar, text: t("about.watch") },
    { icon: Users, text: t("about.team") },
  ];

  return (
    <Section id="about" title={t("about.title")} subtitle={t("about.kicker")}>
      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="surface-card p-6 sm:p-8">
          <GraduationCap className="mb-4 text-accent" size={22} />
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
            {t("about.p1")}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            {t("about.p2")}
          </p>
        </div>

        <div className="grid gap-6">
          <div className="surface-card p-6">
            <h3 className="text-sm font-semibold tracking-wide uppercase">
              {t("about.languages")}
            </h3>
            <div className="mt-4 space-y-4">
              {languages.map((l) => (
                <div key={l.label}>
                  <div className="flex items-baseline justify-between gap-3">
                    <span className="text-sm font-medium">{l.label}</span>
                    <span className="text-xs text-muted-foreground">{l.level}</span>
                  </div>
                  <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-secondary">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-primary to-teal transition-[width] duration-1000"
                      style={{ width: `${l.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="surface-card p-6">
            <h3 className="text-sm font-semibold tracking-wide uppercase">
              {t("about.interests")}
            </h3>
            <ul className="mt-4 space-y-3">
              {interests.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Icon size={16} className="mt-0.5 shrink-0 text-accent" />
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
