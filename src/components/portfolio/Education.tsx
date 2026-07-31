import { Award, School } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Section } from "./Section";

export function Education() {
  const { t } = useI18n();

  const items = [
    { icon: School, key: "edu.1" },
    { icon: Award, key: "edu.2" },
  ];

  return (
    <Section id="education" title={t("edu.title")}>
      <ol className="relative ml-3 border-l border-border pl-8">
        {items.map(({ icon: Icon, key }) => (
          <li key={key} className="relative pb-10 last:pb-0">
            <span className="absolute -left-[3.05rem] grid h-9 w-9 place-items-center rounded-full border border-primary/40 bg-card text-accent">
              <Icon size={16} />
            </span>
            <span className="chip">{t(`${key}.date`)}</span>
            <h3 className="mt-3 text-lg font-semibold">{t(`${key}.school`)}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{t(`${key}.desc`)}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
