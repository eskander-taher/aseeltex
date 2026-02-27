import React from "react"
import Image from "next/image";
import type { Metadata } from "next";
import { Star, Phone, Mail, MapPin, Clock } from "lucide-react";
import { RiTiktokLine, RiInstagramLine, RiWhatsappLine, RiSnapchatLine, RiYoutubeLine } from "react-icons/ri";
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
                src="/contact_us.webp"
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
                href="https://wa.me/79374011670"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-[#25D366]/10 rounded-xl p-5 hover:bg-[#25D366]/20 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center shrink-0">
                  <RiWhatsappLine className="w-6 h-6 text-background" />
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
                href="tel:+74957851037"
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
                    {"+74957851037"}
                  </p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:aseeltex@yandex.ru"
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
                    {"aseeltex@yandex.ru"}
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
                    <RiInstagramLine className="w-5 h-5" />
                  </SocialLink>
                  <SocialLink href="https://tiktok.com" label="TikTok">
                    <RiTiktokLine className="w-5 h-5" />
                  </SocialLink>
                  <SocialLink href="https://youtube.com" label="YouTube">
                    <RiYoutubeLine className="w-5 h-5" />
                  </SocialLink>
                  <SocialLink href="https://snapchat.com" label="Snapchat">
                    <RiSnapchatLine className="w-5 h-5" />
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
