import React from "react"
import Link from "next/link";
import { Mountain, Phone, Mail } from "lucide-react";

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
            <Link href="/" className="flex items-center gap-2 mb-5 hover:scale-105 transition-all duration-300">
              <Mountain className="w-8 h-8" />
              <span className="text-xl font-bold tracking-wide">اسيلتكس</span>
            </Link>
            <div className="flex items-center gap-3">
              <FooterSocial href="https://wa.me/placeholder-whatsapp" label="WhatsApp">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </FooterSocial>
              <FooterSocial href="https://instagram.com" label="Instagram">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </FooterSocial>
              <FooterSocial href="https://tiktok.com" label="TikTok">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.87a8.28 8.28 0 004.77 1.52V7a4.84 4.84 0 01-1-.31z" />
                </svg>
              </FooterSocial>
              <FooterSocial href="https://youtube.com" label="YouTube">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </FooterSocial>
              <FooterSocial href="https://t.me" label="Telegram">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0 12 12 0 0011.944 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
              </FooterSocial>
              <FooterSocial href="https://snapchat.com" label="Snapchat">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12.017 24c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641 0 12.017 0z" />
                </svg>
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
