import { useState, type FormEvent } from "react";
import { Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Section } from "./Section";

const EMAIL = "meriemerrahmouni06@gmail.com";
const PHONE = "+212 7 77 83 81 34";
const LINKEDIN = "https://www.linkedin.com/";

export function Contact() {
  const { t } = useI18n();
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`Portfolio contact — ${data.get("name")}`);
    const body = encodeURIComponent(`${data.get("message")}\n\n${data.get("email")}`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const info = [
    { icon: Mail, label: t("contact.email"), value: EMAIL, href: `mailto:${EMAIL}` },
    { icon: Phone, label: t("contact.phone"), value: PHONE, href: `tel:+212777838134` },
    { icon: MapPin, label: t("contact.location"), value: t("contact.locationValue") },
  ];

  return (
    <Section id="contact" title={t("contact.title")} subtitle={t("contact.subtitle")}>
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="grid gap-4">
          {info.map(({ icon: Icon, label, value, href }) => (
            <div key={label} className="surface-card glow-border flex items-center gap-4 p-5">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-secondary text-accent">
                <Icon size={18} />
              </span>
              <div className="min-w-0">
                <p className="text-xs text-muted-foreground">{label}</p>
                {href ? (
                  <a href={href} className="truncate text-sm font-medium hover:text-accent">
                    {value}
                  </a>
                ) : (
                  <p className="text-sm font-medium">{value}</p>
                )}
              </div>
            </div>
          ))}
          
            href={LINKEDIN}
            target="_blank"
            rel="noreferrer"
            className="cta-btn inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
          >
            <Linkedin size={16} />
            {t("contact.linkedin")}
          </a>
        </div>

        <form onSubmit={onSubmit} className="surface-card glow-border grid gap-4 p-6">
          <label className="grid gap-2 text-sm">
            {t("contact.form.name")}
            <input
              name="name"
              required
              className="rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary"
            />
          </label>
          <label className="grid gap-2 text-sm">
            {t("contact.form.email")}
            <input
              name="email"
              type="email"
              required
              className="rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary"
            />
          </label>
          <label className="grid gap-2 text-sm">
            {t("contact.form.message")}
            <textarea
              name="message"
              required
              rows={5}
              className="resize-none rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary"
            />
          </label>
          <button
            type="submit"
            className="cta-btn inline-flex items-center justify-center gap-2 rounded-full border border-primary/50 px-5 py-2.5 text-sm font-semibold"
          >
            <Send size={15} />
            {t("contact.form.send")}
          </button>
          {sent && <p className="text-xs text-accent">{t("contact.form.sent")}</p>}
        </form>
      </div>
    </Section>
  );
}
