import { Code2, Database, PenTool, Wrench } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Section } from "./Section";

export function Skills() {
  const { t } = useI18n();

  const groups = [
    { icon: Code2, label: t("skills.languages"), items: ["Python", "Java", "C", "JavaScript", "HTML/CSS"] },
    { icon: Database, label: t("skills.databases"), items: ["MySQL", "PL/SQL", "PostgreSQL"] },
    { icon: Wrench, label: t("skills.tools"), items: ["Git", "VS Code", "Excel", "Figma", "Excalidraw"] },
    { icon: PenTool, label: t("skills.modeling"), items: ["Merise"] },
  ];

  return (
    <Section id="skills" title={t("skills.title")}>
      <div className="grid gap-6 sm:grid-cols-2">
        {groups.map(({ icon: Icon, label, items }) => (
          <div key={label} className="surface-card p-6">
            <div className="flex items-center gap-3">
              <Icon size={18} className="text-accent" />
              <h3 className="text-sm font-semibold tracking-wide uppercase">{label}</h3>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {items.map((i) => (
                <span key={i} className="chip">
                  {i}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
