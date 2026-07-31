import { createFileRoute } from "@tanstack/react-router";
import { I18nProvider, useI18n } from "@/lib/i18n";
import { ThemeProvider } from "@/lib/theme";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Education } from "@/components/portfolio/Education";
import { Projects } from "@/components/portfolio/Projects";
import { Certifications } from "@/components/portfolio/Certifications";
import { Skills } from "@/components/portfolio/Skills";
import { Resume } from "@/components/portfolio/Resume";
import { Contact } from "@/components/portfolio/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Meriem ER.RAHMOUNI — Big Data & IS Engineering Student" },
      {
        name: "description",
        content:
          "Portfolio of Meriem ER.RAHMOUNI, Big Data & Information Systems engineering student at ENSA Berrechid — data analysis, AI projects and Summer 2026 internship.",
      },
      { property: "og:title", content: "Meriem ER.RAHMOUNI — Data & AI Portfolio" },
      {
        property: "og:description",
        content:
          "Big Data & Information Systems engineering student at ENSA Berrechid. Projects in Neo4j fraud detection, Power BI analytics and Gemma-powered healthcare AI.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Footer() {
  const { t } = useI18n();
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-1 px-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Meriem ER.RAHMOUNI. {t("footer.rights")}</p>
        <p>{t("footer.built")}</p>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <ThemeProvider>
      <I18nProvider>
        <div className="min-h-screen bg-background">
          <Navbar />
          <main>
            <Hero />
            <About />
            <Education />
            <Projects />
            <Certifications />
            <Skills />
            <Resume />
            <Contact />
          </main>
          <Footer />
        </div>
      </I18nProvider>
    </ThemeProvider>
  );
}
