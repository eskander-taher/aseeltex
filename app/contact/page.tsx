import React from "react"
import Image from "next/image";
import type { Metadata } from "next";
import { Star, Phone, Mail, MapPin, Clock } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import WhatsAppButton from "@/components/whatsapp-button";

export const metadata: Metadata = {
  title: "تواصل معنا | اسيلتكس للسفر والسياحة",
  description:
    "تواصل مع شركة اسيلتكس للسفر والسياحة - نحن هنا لمساعدتك في تخطيط رحلتك إلى روسيا",
};

const contactInfo = [
  {
    icon: Phone,
    title: "الهاتف",
    details: ["+74957851037", "+79374011670"],
    links: ["tel:+74957851037", "tel:+79374011670"],
  },
  {
    icon: Mail,
    title: "البريد الإلكتروني",
    details: ["aseeltex@yandex.ru"],
    links: ["mailto:aseeltex@yandex.ru"],
  },
  {
    icon: MapPin,
    title: "الموقع",
    details: ["موسكو، روسيا"],
    links: [],
  },
  {
    icon: Clock,
    title: "ساعات العمل",
    details: ["متاحون على مدار الساعة", "24 ساعة / 7 أيام"],
    links: [],
  },
];

export default function ContactPage() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 right-20 text-primary-foreground">
            <Star className="w-4 h-4" />
          </div>
          <div className="absolute top-20 left-32 text-primary-foreground">
            <Star className="w-3 h-3" />
          </div>
          <div className="absolute bottom-16 right-40 text-primary-foreground">
            <Star className="w-5 h-5" />
          </div>
        </div>
        <div className="relative z-10 text-center px-4">
          <div className="flex items-center justify-center gap-4 mb-4">
            <Star className="w-5 h-5 text-primary-foreground/60" />
            <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground">
              {"تواصل معنا"}
            </h1>
            <Star className="w-5 h-5 text-primary-foreground/60" />
          </div>
          <p className="text-primary-foreground/70 text-lg">
            {"نحن هنا لمساعدتك في تخطيط رحلتك المثالية"}
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((item) => (
              <div
                key={item.title}
                className="bg-card rounded-xl border border-border p-6 text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                </div>
                <h3 className="text-base font-bold text-card-foreground mb-3">
                  {item.title}
                </h3>
                <div className="flex flex-col gap-1">
                  {item.details.map((detail, i) =>
                    item.links[i] ? (
                      <a
                        key={detail}
                        href={item.links[i]}
                        className="text-muted-foreground text-sm hover:text-primary transition-colors"
                        dir="ltr"
                      >
                        {detail}
                      </a>
                    ) : (
                      <p key={detail} className="text-muted-foreground text-sm">
                        {detail}
                      </p>
                    )
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Main Contact Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Image */}
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/contact-hero.jpg"
                alt="تواصل معنا"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-primary/40" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
                  {"نحن في خدمتكم"}
                </h2>
                <p className="text-primary-foreground/90 text-base mb-6">
                  {"تواصلوا معنا عبر أي من قنوات الاتصال المتاحة"}
                </p>
              </div>
            </div>

            {/* Contact Methods */}
            <div className="flex flex-col gap-6">
              <h2 className="text-2xl font-bold text-foreground mb-2">
                {"طرق التواصل"}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {"يسعدنا تواصلكم معنا عبر أي من قنوات الاتصال المتاحة. فريقنا المتخصص جاهز لمساعدتكم في تخطيط رحلتكم إلى روسيا وتقديم أفضل العروض والباقات السياحية."}
              </p>

              {/* WhatsApp */}
              <a
                href="https://wa.me/placeholder-whatsapp"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-[#25D366]/10 rounded-xl p-5 hover:bg-[#25D366]/20 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center shrink-0">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current text-background">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-foreground group-hover:text-[#25D366] transition-colors">
                    {"واتساب"}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {"تواصل مباشر وسريع مع فريقنا"}
                  </p>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+1234567890"
                className="flex items-center gap-4 bg-secondary rounded-xl p-5 hover:bg-secondary/80 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">
                    {"اتصل بنا"}
                  </h3>
                  <p className="text-muted-foreground text-sm" dir="ltr">
                    {"placeholder-phone-1"}
                  </p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:placeholder-email@example.com"
                className="flex items-center gap-4 bg-secondary rounded-xl p-5 hover:bg-secondary/80 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">
                    {"البريد الإلكتروني"}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {"placeholder-email@example.com"}
                  </p>
                </div>
              </a>

              {/* Social Media */}
              <div className="bg-card rounded-xl border border-border p-5">
                <h3 className="font-bold text-card-foreground mb-4">
                  {"تابعنا على وسائل التواصل"}
                </h3>
                <div className="flex items-center gap-3">
                  <SocialLink href="https://instagram.com" label="Instagram">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </SocialLink>
                  <SocialLink href="https://tiktok.com" label="TikTok">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.87a8.28 8.28 0 004.77 1.52V7a4.84 4.84 0 01-1-.31z" />
                    </svg>
                  </SocialLink>
                  <SocialLink href="https://youtube.com" label="YouTube">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </SocialLink>
                  <SocialLink href="https://snapchat.com" label="Snapchat">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12.017 24c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641 0 12.017 0z" />
                    </svg>
                  </SocialLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
    >
      {children}
    </a>
  );
}
