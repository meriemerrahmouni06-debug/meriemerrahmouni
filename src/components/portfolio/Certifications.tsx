import { BadgeCheck } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Section } from "./Section";

export function Certifications() {
  const { t } = useI18n();
  const certs = ["cert.1", "cert.2", "cert.3"];

  return (
    <Section id="certifications" title={t("cert.title")}>
      <div className="grid gap-6 sm:grid-cols-3">
        {certs.map((c) => (
          <div key={c} className="surface-card flex items-start gap-4 p-6">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-primary/25 to-teal/25 text-accent">
              <BadgeCheck size={18} />
            </span>
            <div className="min-w-0">
              <h3 className="text-sm font-semibold">{t(c)}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{t(`${c}.org`)}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
