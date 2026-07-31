# Meriem's Data Port

<portfolio_prompt>
Create a modern, visually striking portfolio website for Meriem ER.RAHMOUNI, a 1st-year engineering student specializing in Big Data and Information Systems at ENSA Berrechid, Morocco. The site must have a bilingual toggle (English / French) and a dark/light mode toggle, both accessible from the navbar. Default mode: dark, modern, data/AI-inspired aesthetic — think deep navy/charcoal backgrounds, subtle network-graph or data-node motifs, gradient accents (electric blue, teal, or violet), clean sans-serif typography (e.g. Inter or Space Grotesk), and smooth micro-animations (fade-ins, hover glows, subtle particle/network background on the hero section). Light mode should mirror the same aesthetic with a soft off-white background and the same accent colors.

STRUCTURE — Sections:

1. HERO / HOME
- Profile picture (circular or hexagonal frame, subtle glow border)
- Name: Meriem ER.RAHMOUNI
- Tagline (EN): "Big Data & Information Systems Engineering Student | Turning Data into Insight"
- Tagline (FR): "Étudiante Ingénieure Big Data & Systèmes d'Information | Transformer la donnée en insight"
- Short intro (EN): "1st-year engineering student in Big Data & Information Systems at ENSA Berrechid, passionate about data analysis, AI, and innovative technologies. Currently seeking a 1-month minimum internship for Summer 2026."
- Short intro (FR): "Étudiante en 1ère année du cycle ingénieur Big Data et Systèmes d'Information à l'ENSA Berrechid, passionnée par l'analyse de données et les technologies innovantes. À la recherche d'un stage d'initiation d'une durée minimale d'un mois pour l'été 2026."
- CTA buttons: "View Projects" / "Contact Me" (translated accordingly)
- Animated background suggesting data flow / connected nodes

2. ABOUT
- Expanded bio combining the intro above with personality: curious, rigorous, tech-watcher
- Languages spoken: Arabic (native), English (B2 - fluent), French (B2 - fluent) — show as progress bars or badges
- Volunteer/interests: Lions Club volunteer — event organizer (2 years); passionate about tech watch and AI tools

3. EDUCATION (timeline layout, vertical, with icons)
- 2023 – Present: École Nationale des Sciences Appliquées (ENSA) Berrechid — Engineering Cycle, Big Data & Information Systems
- 2022 – 2023: Baccalauréat, Physical Sciences — Mention: Très Bien — Casablanca

4. EXPERIENCE & PROJECTS (card grid, each with title, date, tags, short description)
- Bank Transaction Community Detection (April–May 2026): Modeled a Neo4j database and applied the LPA algorithm to process large-scale financial transactions and detect banking fraud. Tags: Neo4j, Python, NetworkX, Scikit-Learn, NumPy, Gephi, igraph
- Botola Pro Comparative Analysis & Dashboarding (April–May 2026): Cleaned data with SQL/Excel and built interactive Power BI dashboards for visual comparison of club performance and KPI analysis. Tags: SQL, Excel, Power BI
- OmniWatch Patent Project (June–Sept 2025): Team project designing a smart watch for enterprises, integrating IoT sensors for real-time monitoring. Tags: IoT, Teamwork, Hardware/Software Integration
- MedExtract — Build with Gemma Hackathon (26 July 2026, Technopark Casablanca): Built with team "The 5 Gems" as part of the 1st Gemma Hackathon in North Africa, organized by GDG ENSAB (Google Developer Group), AI Crafters, and the Gemma team. MedExtract is an AI system built on the Gemma model that helps doctors quickly read patient lab analyses, generates automatic summaries for faster diagnosis, and includes a chat assistant so doctors can ask follow-up questions about specific results. Tags: Gemma AI, LLM, Healthcare AI, Hackathon
  → Add a small "Hackathon" badge/highlight style distinct from the other project cards, and include event photos (team photo, hackathon banner) in a mini gallery or carousel within this card. Mention proudly: "1st Gemma Hackathon in North Africa" and "Certificate of Participation."

5. CERTIFICATIONS (badge/logo row or cards)
- Introduction to Modern AI — Cisco Networking Academy
- Microsoft Excel — 365 Data Science
- Future with AI — One Million Prompters Initiative

6. SKILLS (organized by category, icon-based tags or animated skill bars)
- Languages: Python, Java, C, JavaScript, HTML/CSS
- Databases: MySQL, PL/SQL, PostgreSQL
- Tools: Git, VS Code, Excel, Figma, Excalidraw
- Modeling: Merise

7. CONTACT
- Email: meriemerrahmouni06@gmail.com
- Phone: +212 7 77 83 81 34
- Location: Casablanca, Morocco
- LinkedIn button/icon (link placeholder to be filled in by user)
- Optional: simple contact form (name, email, message) in addition to displayed info

DESIGN REQUIREMENTS:
- Fully responsive (mobile-first)
- Sticky navbar with smooth scroll to sections, EN/FR toggle and dark/light toggle both visible and easy to use
- Subtle scroll-reveal animations throughout
- Hero section should visually reference "data + AI" (e.g. abstract network graph, flowing particles, or subtle code/data visualization pattern) without being cluttered
- Use a professional but youthful, energetic tone reflecting an ambitious engineering student
- Ensure strong contrast and readability in both dark and light modes
- Highlight the Gemma Hackathon project as a standout achievement given its prestige (1st of its kind in North Africa)
</portfolio_prompt>

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://meriemerrahmouni.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/4f9aafb2-d771-4212-8dbe-7c0a4bee46aa).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
