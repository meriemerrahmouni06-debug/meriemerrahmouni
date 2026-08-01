import { ArrowRight, Download, Github, Mail, Sparkles } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { NetworkCanvas } from "./NetworkCanvas";
import profile from "@/assets/profile.jpg";

const cvUrl = "/CV_Meriem_ERRAHMOUNI.pdf";

export function Hero() {
  const { t } = useI18n();

  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      <NetworkCanvas />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-primary/20 blur-[130px]"
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="animate-fade-in">
          <span className="chip">
            <Sparkles size={13} className="text-accent" />
            {t("hero.badge")}
          </span>
          <h1 className="mt-5 text-4xl leading-[1.05] font-bold sm:text-6xl">
            Meriem
            <br />
            <span className="text-gradient">ER.RAHMOUNI</span>
          </h1>
          <p className="mt-5 max-w-xl font-display text-base text-foreground/90 sm:text-lg">
            {t("hero.tagline")}
          </p>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            {t("hero.intro")}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="cta-btn inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground">
              {t("hero.cta1")}
              <ArrowRight size={16} />
            </a>
            <a href="#contact" className="cta-btn inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-foreground">
              <Mail size={16} />
              {t("hero.cta2")}
            </a>
            <a href={cvUrl} download="CV_Meriem_ERRAHMOUNI.pdf" className="cta-btn inline-flex items-center gap-2 rounded-full border border-primary/50 bg-secondary px-5 py-2.5 text-sm font-semibold text-foreground">
              <Download size={16} />
              {t("cv.download")}
            </a>
            <a href="https://github.com/meriemerrahmouni06-debug" target="_blank" rel="noreferrer" className="cta-btn inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-foreground">
              <Github size={16} />
              {t("hero.cta3")}
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-fit float-soft">
          <div
            aria-hidden
            className="pulse-glow absolute -inset-4 rounded-full bg-gradient-to-br from-primary via-teal to-violet blur-3xl"
          />
          <div className="glow-border-always relative rounded-full p-1.5">
            <img
              src={profile.url}
              alt="Portrait of Meriem ER.RAHMOUNI"
              width={720}
              height={1280}
              className="glow-ring h-64 w-64 rounded-full object-cover object-[50%_22%] sm:h-80 sm:w-80"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
