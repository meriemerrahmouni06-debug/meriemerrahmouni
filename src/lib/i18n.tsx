import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "fr";

type Dict = Record<string, string>;

export const dict: Record<Lang, Dict> = {
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.education": "Education",
    "nav.projects": "Projects",
    "nav.certifications": "Certifications",
    "nav.skills": "Skills",
    "nav.resume": "CV",
    "nav.contact": "Contact",
    "hero.badge": "Open to Summer 2026 internship",
    "hero.tagline":
      "Big Data & Information Systems Engineering Student | Turning Data into Insight",
    "hero.intro":
      "1st-year engineering student in Big Data & Information Systems at ENSA Berrechid, passionate about data analysis, AI, and innovative technologies. Currently seeking a 1-month minimum internship for Summer 2026.",
    "hero.cta1": "View Projects",
    "hero.cta2": "Contact Me",
    "about.title": "About",
    "about.kicker": "Curious, rigorous, always watching what's next",
    "about.p1":
      "I'm a 1st-year engineering student in Big Data & Information Systems at ENSA Berrechid, driven by the idea that good data work turns noise into decisions. I like problems that mix rigor and creativity: modeling a graph database, cleaning a messy dataset, or shaping a dashboard that finally makes a story obvious.",
    "about.p2":
      "Outside of coursework I'm an active tech watcher — I follow AI tooling closely and test new models and workflows as they appear. I've also volunteered with the Lions Club for 2 years as an event organizer, which taught me as much about teamwork and logistics as any lab session.",
    "about.languages": "Languages",
    "about.native": "Native",
    "about.fluent": "B2 — Fluent",
    "about.arabic": "Arabic",
    "about.english": "English",
    "about.french": "French",
    "about.interests": "Involvement & Interests",
    "about.volunteer": "Lions Club volunteer — event organizer (2 years)",
    "about.watch": "Tech watch & hands-on exploration of AI tools",
    "about.team": "Teamwork, hackathons and student initiatives",
    "edu.title": "Education",
    "edu.1.date": "2023 – Present",
    "edu.1.school": "École Nationale des Sciences Appliquées (ENSA) Berrechid",
    "edu.1.desc": "Engineering Cycle — Big Data & Information Systems",
    "edu.2.date": "2022 – 2023",
    "edu.2.school": "Baccalauréat — Physical Sciences",
    "edu.2.desc": "Mention: Très Bien — Casablanca",
    "proj.title": "Experience & Projects",
    "proj.subtitle": "Data engineering, analytics and applied AI",
    "proj.1.title": "Bank Transaction Community Detection",
    "proj.1.date": "April – May 2026",
    "proj.1.desc":
      "Modeled a Neo4j database and applied the LPA algorithm to process large-scale financial transactions and detect banking fraud.",
    "proj.2.title": "Botola Pro Comparative Analysis & Dashboarding",
    "proj.2.date": "April – May 2026",
    "proj.2.desc":
      "Cleaned data with SQL/Excel and built interactive Power BI dashboards for visual comparison of club performance and KPI analysis.",
    "proj.3.title": "OmniWatch Patent Project",
    "proj.3.date": "June – Sept 2025",
    "proj.3.desc":
      "Team project designing a smart watch for enterprises, integrating IoT sensors for real-time monitoring.",
    "proj.4.title": "MedExtract — Build with Gemma Hackathon",
    "proj.4.date": "26 July 2026 — Technopark Casablanca",
    "proj.4.desc":
      "Built with team \"The 5 Gems\" as part of the 1st Gemma Hackathon in North Africa, organized by GDG ENSAB (Google Developer Group), AI Crafters and the Gemma team. MedExtract is an AI system built on the Gemma model that helps doctors quickly read patient lab analyses, generates automatic summaries for faster diagnosis, and includes a chat assistant so doctors can ask follow-up questions about specific results.",
    "proj.4.badge": "Hackathon",
    "proj.4.h1": "1st Gemma Hackathon in North Africa",
    "proj.4.h2": "Certificate of Participation",
    "proj.4.photo1": "The 5 Gems team at Technopark Casablanca",
    "proj.4.photo2": "Build with Gemma hackathon stage",
    "proj.5.title": "HR Management Application (GRH)",
    "proj.5.date": "2026",
    "proj.5.desc":
      "Desktop HR management application built with JavaFX, Hibernate ORM and MySQL. The project puts UML modeling, object-relational mapping and Scene Builder interface design into practice — employee records, departments, contracts and payroll data handled through a clean layered architecture.",
    "cert.4": "Claude 101",
    "cert.4.org": "Anthropic",
    "cv.title": "My Resume",
    "cv.subtitle": "Full background in one page",
    "cv.file": "CV — Meriem ER.RAHMOUNI",
    "cv.desc": "Education, projects, technical skills and languages — everything in a single PDF. Preview it here or download a copy for your recruitment process.",
    "cv.download": "Download my CV",
    "cv.view": "View my CV",
    "cv.fallback": "Preview unavailable in this browser — use the download button.",
    "cert.title": "Certifications",
    "cert.1": "Introduction to Modern AI",
    "cert.1.org": "Cisco Networking Academy",
    "cert.2": "Microsoft Excel",
    "cert.2.org": "365 Data Science",
    "cert.3": "Future with AI",
    "cert.3.org": "One Million Prompters Initiative",
    "skills.title": "Skills",
    "skills.languages": "Languages",
    "skills.databases": "Databases",
    "skills.tools": "Tools",
    "skills.modeling": "Modeling",
    "contact.title": "Contact",
    "contact.subtitle":
      "Looking for a motivated intern for Summer 2026? Let's talk.",
    "contact.email": "Email",
    "contact.phone": "Phone",
    "contact.location": "Location",
    "contact.locationValue": "Casablanca, Morocco",
    "contact.linkedin": "LinkedIn",
    "contact.form.name": "Name",
    "contact.form.email": "Email",
    "contact.form.message": "Message",
    "contact.form.send": "Send message",
    "contact.form.sent": "Thanks! Your message is ready to send — I'll reply soon.",
    "footer.rights": "All rights reserved.",
    "footer.built": "Designed & built with care.",
  },
  fr: {
    "nav.home": "Accueil",
    "nav.about": "À propos",
    "nav.education": "Formation",
    "nav.projects": "Projets",
    "nav.certifications": "Certifications",
    "nav.skills": "Compétences",
    "nav.resume": "CV",
    "nav.contact": "Contact",
    "hero.badge": "Disponible pour un stage — été 2026",
    "hero.tagline":
      "Étudiante Ingénieure Big Data & Systèmes d'Information | Transformer la donnée en insight",
    "hero.intro":
      "Étudiante en 1ère année du cycle ingénieur Big Data et Systèmes d'Information à l'ENSA Berrechid, passionnée par l'analyse de données et les technologies innovantes. À la recherche d'un stage d'initiation d'une durée minimale d'un mois pour l'été 2026.",
    "hero.cta1": "Voir les projets",
    "hero.cta2": "Me contacter",
    "about.title": "À propos",
    "about.kicker": "Curieuse, rigoureuse, toujours en veille",
    "about.p1":
      "Étudiante en 1ère année du cycle ingénieur Big Data et Systèmes d'Information à l'ENSA Berrechid, je suis convaincue qu'un bon travail sur la donnée transforme le bruit en décisions. J'aime les problèmes qui mêlent rigueur et créativité : modéliser une base de données graphe, nettoyer un jeu de données complexe, ou concevoir un dashboard qui rend enfin l'histoire évidente.",
    "about.p2":
      "En dehors des cours, je pratique une veille technologique active : je suis de près les outils d'IA et je teste les nouveaux modèles et workflows dès leur sortie. Je suis également bénévole au Lions Club depuis 2 ans en tant qu'organisatrice d'événements, une expérience aussi formatrice que le travail en laboratoire.",
    "about.languages": "Langues",
    "about.native": "Langue maternelle",
    "about.fluent": "B2 — Courant",
    "about.arabic": "Arabe",
    "about.english": "Anglais",
    "about.french": "Français",
    "about.interests": "Engagement & centres d'intérêt",
    "about.volunteer": "Bénévole Lions Club — organisatrice d'événements (2 ans)",
    "about.watch": "Veille technologique & exploration des outils d'IA",
    "about.team": "Travail d'équipe, hackathons et initiatives étudiantes",
    "edu.title": "Formation",
    "edu.1.date": "2023 – Aujourd'hui",
    "edu.1.school": "École Nationale des Sciences Appliquées (ENSA) Berrechid",
    "edu.1.desc": "Cycle ingénieur — Big Data & Systèmes d'Information",
    "edu.2.date": "2022 – 2023",
    "edu.2.school": "Baccalauréat — Sciences Physiques",
    "edu.2.desc": "Mention : Très Bien — Casablanca",
    "proj.title": "Expériences & Projets",
    "proj.subtitle": "Ingénierie de la donnée, analytique et IA appliquée",
    "proj.1.title": "Détection de communautés de transactions bancaires",
    "proj.1.date": "Avril – Mai 2026",
    "proj.1.desc":
      "Modélisation d'une base de données Neo4j et application de l'algorithme LPA pour traiter des transactions financières à grande échelle et détecter la fraude bancaire.",
    "proj.2.title": "Analyse comparative & dashboarding Botola Pro",
    "proj.2.date": "Avril – Mai 2026",
    "proj.2.desc":
      "Nettoyage des données avec SQL/Excel et création de dashboards Power BI interactifs pour comparer visuellement les performances des clubs et analyser les KPI.",
    "proj.3.title": "Projet de brevet OmniWatch",
    "proj.3.date": "Juin – Sept. 2025",
    "proj.3.desc":
      "Projet d'équipe : conception d'une montre connectée pour les entreprises intégrant des capteurs IoT pour un suivi en temps réel.",
    "proj.4.title": "MedExtract — Hackathon Build with Gemma",
    "proj.4.date": "26 juillet 2026 — Technopark Casablanca",
    "proj.4.desc":
      "Réalisé avec l'équipe « The 5 Gems » lors du 1er Hackathon Gemma d'Afrique du Nord, organisé par GDG ENSAB (Google Developer Group), AI Crafters et l'équipe Gemma. MedExtract est un système d'IA basé sur le modèle Gemma qui aide les médecins à lire rapidement les analyses de laboratoire, génère des résumés automatiques pour accélérer le diagnostic et intègre un assistant conversationnel pour poser des questions sur des résultats précis.",
    "proj.4.badge": "Hackathon",
    "proj.4.h1": "1er Hackathon Gemma d'Afrique du Nord",
    "proj.4.h2": "Certificat de participation",
    "proj.4.photo1": "L'équipe The 5 Gems au Technopark Casablanca",
    "proj.4.photo2": "Scène du hackathon Build with Gemma",
    "proj.5.title": "Application de gestion des ressources humaines (GRH)",
    "proj.5.date": "2026",
    "proj.5.desc":
      "Application desktop de gestion des ressources humaines développée en JavaFX avec Hibernate ORM et MySQL. Le projet met en pratique la modélisation UML, le mapping objet-relationnel et la conception d'interfaces avec Scene Builder — gestion des employés, départements, contrats et données de paie via une architecture en couches.",
    "cert.4": "Claude 101",
    "cert.4.org": "Anthropic",
    "cv.title": "Mon CV",
    "cv.subtitle": "Tout mon parcours en une page",
    "cv.file": "CV — Meriem ER.RAHMOUNI",
    "cv.desc": "Formation, projets, compétences techniques et langues — le tout dans un seul PDF. Consultez-le ici ou téléchargez-le pour votre processus de recrutement.",
    "cv.download": "Télécharger mon CV",
    "cv.view": "Voir mon CV",
    "cv.fallback": "Aperçu indisponible sur ce navigateur — utilisez le bouton de téléchargement.",
    "cert.title": "Certifications",
    "cert.1": "Introduction to Modern AI",
    "cert.1.org": "Cisco Networking Academy",
    "cert.2": "Microsoft Excel",
    "cert.2.org": "365 Data Science",
    "cert.3": "Future with AI",
    "cert.3.org": "One Million Prompters Initiative",
    "skills.title": "Compétences",
    "skills.languages": "Langages",
    "skills.databases": "Bases de données",
    "skills.tools": "Outils",
    "skills.modeling": "Modélisation",
    "contact.title": "Contact",
    "contact.subtitle":
      "Vous cherchez une stagiaire motivée pour l'été 2026 ? Écrivons-nous.",
    "contact.email": "E-mail",
    "contact.phone": "Téléphone",
    "contact.location": "Localisation",
    "contact.locationValue": "Casablanca, Maroc",
    "contact.linkedin": "LinkedIn",
    "contact.form.name": "Nom",
    "contact.form.email": "E-mail",
    "contact.form.message": "Message",
    "contact.form.send": "Envoyer le message",
    "contact.form.sent": "Merci ! Votre message est prêt — je répondrai vite.",
    "footer.rights": "Tous droits réservés.",
    "footer.built": "Conçu et développé avec soin.",
  },
};

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (k: string) => string };

const I18nContext = createContext<Ctx>({ lang: "en", setLang: () => {}, t: (k) => k });

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    const stored = localStorage.getItem("lang") as Lang | null;
    if (stored === "en" || stored === "fr") setLang(stored);
  }, []);

  useEffect(() => {
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const t = (k: string) => dict[lang][k] ?? dict.en[k] ?? k;

  return <I18nContext.Provider value={{ lang, setLang, t }}>{children}</I18nContext.Provider>;
}

export const useI18n = () => useContext(I18nContext);
