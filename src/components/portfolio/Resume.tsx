import { Download, Eye, FileText } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Section } from "./Section";

const cvUrl = "public/CV_Meriem_Er.rahmouni.pdf";

export function Resume() {
  const { t } = useI18n();

  return (
    <Section id="resume" title={t("cv.title")} subtitle={t("cv.subtitle")}>
      <div className="surface-card glow-border shine relative overflow-hidden p-6 sm:p-8">
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-primary/20 blur-[90px]"
        />
        <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_auto]">
          <div className="min-w-0">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-primary to-violet text-primary-foreground">
                <FileText size={20} />
              </span>
              <div className="min-w-0">
                <h3 className="truncate text-lg font-bold">{t("cv.file")}</h3>
                <p className="text-xs text-muted-foreground">PDF · 222 KB</p>
              </div>
            </div>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground">
              {t("cv.desc")}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href={cvUrl} download="CV_Meriem_ERRAHMOUNI.pdf" className="cta-btn inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground">
                <Download size={16} />
                {t("cv.download")}
              </a>
              <a href={cvUrl} target="_blank" rel="noreferrer" className="cta-btn inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-foreground">
                <Eye size={16} />
                {t("cv.view")}
              </a>
            </div>
          </div>

          <div className="glow-border-always w-full overflow-hidden rounded-xl lg:w-[22rem]">
            <object
              data={`${cvUrl}#view=FitH&toolbar=0`}
              type="application/pdf"
              aria-label={t("cv.file")}
              className="h-80 w-full rounded-xl bg-secondary sm:h-96"
            >
              <div className="grid h-80 place-items-center p-6 text-center text-sm text-muted-foreground">
                {t("cv.fallback")}
              </div>
            </object>
          </div>
        </div>
      </div>
    </Section>
  );
}
