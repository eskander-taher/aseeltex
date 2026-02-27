import React from "react"
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail } from "lucide-react";
import { RiTiktokLine, RiInstagramLine, RiWhatsappLine, RiSnapchatLine, RiYoutubeLine, RiTelegramLine } from "react-icons/ri";

export default function Footer() {
  return (
    <footer className="bg-gradient-luxury-5 text-white relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-5">{"تواصل معنا"}</h3>
            <div className="flex flex-col gap-3 text-sm text-white/80">
              <a
                href="tel:+74957851037"
                className="flex items-center gap-2 hover:text-white transition-all duration-300 hover:scale-105"
              >
                <Phone className="w-4 h-4 shrink-0" />
                <span dir="ltr">{"+74957851037"}</span>
              </a>
              <a
                href="tel:+79374011670"
                className="flex items-center gap-2 hover:text-white transition-all duration-300 hover:scale-105"
              >
                <Phone className="w-4 h-4 shrink-0" />
                <span dir="ltr">{"+79374011670"}</span>
              </a>
              <a
                href="mailto:aseeltex@yandex.ru"
                className="flex items-center gap-2 hover:text-white transition-all duration-300 hover:scale-105"
              >
                <Mail className="w-4 h-4 shrink-0" />
                <span dir="ltr">{"aseeltex@yandex.ru"}</span>
              </a>
            </div>
          </div>

          {/* Center Logo & Socials */}
          <div className="flex flex-col items-center text-center">
            <Link href="/" className="flex items-center justify-center mb-5 hover:scale-105 transition-all duration-300">
              <Image 
                src="/logo_hori_trans.png" 
                alt="اسيلتكس" 
                width={200} 
                height={60}
                className="w-32 h-12 lg:w-48 lg:h-16"
              />
            </Link>
            <div className="flex items-center gap-3">
              <FooterSocial href="https://wa.me/79374011670" label="WhatsApp">
                <RiWhatsappLine className="w-4 h-4" />
              </FooterSocial>
              <FooterSocial href="https://instagram.com" label="Instagram">
                <RiInstagramLine className="w-4 h-4" />
              </FooterSocial>
              <FooterSocial href="https://tiktok.com" label="TikTok">
                <RiTiktokLine className="w-4 h-4" />
              </FooterSocial>
              <FooterSocial href="https://youtube.com" label="YouTube">
                <RiYoutubeLine className="w-4 h-4" />
              </FooterSocial>
              <FooterSocial href="https://snapchat.com" label="Snapchat">
                <RiSnapchatLine className="w-4 h-4" />
              </FooterSocial>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:text-left">
            <h3 className="text-lg font-bold mb-5">{"روابط سريعة"}</h3>
            <div className="flex flex-col gap-3 text-sm text-white/80">
              <Link href="/" className="hover:text-white transition-all duration-300 hover:scale-105">{"الرئيسية"}</Link>
              <Link href="/activities" className="hover:text-white transition-all duration-300 hover:scale-105">{"الفعاليات"}</Link>
              <Link href="/services" className="hover:text-white transition-all duration-300 hover:scale-105">{"خدماتنا"}</Link>
              <Link href="/hotels" className="hover:text-white transition-all duration-300 hover:scale-105">{"الفنادق"}</Link>
              <Link href="/tour-programs" className="hover:text-white transition-all duration-300 hover:scale-105">{"البرامج السياحية"}</Link>
              <Link href="/russian-tourism" className="hover:text-white transition-all duration-300 hover:scale-105">{"السياحة الروسية"}</Link>
              <Link href="/about" className="hover:text-white transition-all duration-300 hover:scale-105">{"معلومات عنا"}</Link>
              <Link href="/contact" className="hover:text-white transition-all duration-300 hover:scale-105">{"تواصل معنا"}</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-4 text-center text-xs text-white/60">
          {"جميع الحقوق محفوظة"} &copy; {new Date().getFullYear()} اسيلتكس Travel & Tourism
        </div>
      </div>
    </footer>
  );
}

function FooterSocial({
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
      className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white/80 hover:bg-white/30 hover:text-white transition-all duration-300 hover:scale-110 border border-white/10"
    >
      {children}
    </a>
  );
}
