import React from "react";
import { MapPin, Calendar, Clock, Users, Star } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "البرامج السياحية | اسيلتكس للسفر والسياحة",
  description: "اكتشف أفضل البرامج السياحية في روسيا مع اسيلتكس. رحلات منظمة إلى موسكو وسانت بطرسبرغ.",
};

const tourPrograms = [
  {
    title: "برنامج سياحي في موسكو",
    duration: "11 يوم 10 ليالي",
    description: "رحلة شاملة لاكتشاف جمال وتاريخ موسكو ومعالمها السياحية الأبرز",
    highlights: ["الساحة الحمراء", "الكرملين", "حديقة غوركي", "VDNKh", "موسكو سيتي"],
    href: "/tour-programs/moscow-11-days",
    type: "شامل"
  },
  {
    title: "برنامج سياحي في روسيا",
    duration: "9 ليالي 10 أيام",
    description: "برنامج متكامل يستكشف أبرز المدن الروسية ومعالمها التاريخية",
    highlights: ["موسكو", "سانت بطرسبرغ", "الريف الروسي", "المتاحف الشهيرة"],
    href: "/tour-programs/russia-10-days",
    type: "متكامل"
  },
  {
    title: "برنامج لثلاثة أيام في موسكو",
    duration: "3 أيام",
    description: "جولة مكثفة لأهم معالم موسكو في وقت قياسي",
    highlights: ["الساحة الحمراء", "الكرملين", "حديقة غوركي", "المتاحف"],
    href: "/tour-programs/moscow-3-days",
    type: "مكثف"
  },
  {
    title: "برنامج سانت بطرسبرغ",
    duration: "6 أيام",
    description: "استكشاف مدينة سانت بطرسبرغ الساحرة ومعالمها الإمبراطورية",
    highlights: ["قصر الشتاء", "الأرميتاج", "بيترهوف", "كنيسة الدم"],
    href: "/tour-programs/st-petersburg",
    type: "ثقافي"
  }
];

export default function TourProgramsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-luxury-1 overlay-luxury">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container mx-auto px-4 h-full flex items-center justify-center text-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">البرامج السياحية</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              رحلات منظمة مميزة لاكتشاف جمال روسيا مع اسيلتكس
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-white text-red-700 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition-all duration-300 shadow-luxury hover:scale-105"
              >
                استشر خبير السياحة
              </Link>
              <Link 
                href="/activities" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-700 transition-all duration-300"
              >
                استكشف الأنشطة
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-red-800 mb-12 text-center">اختر رحلتك المثالية</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {tourPrograms.map((program, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-luxury-lg overflow-hidden border-luxury hover:shadow-luxury-xl transition-all duration-300">
                {/* Program Header */}
                <div className="bg-gradient-luxury-2 text-white p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{program.title}</h3>
                      <div className="flex items-center gap-2 text-white/90">
                        <Clock className="w-4 h-4" />
                        <span>{program.duration}</span>
                      </div>
                    </div>
                    <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
                      {program.type}
                    </span>
                  </div>
                  <p className="text-white/90">{program.description}</p>
                </div>

                {/* Program Content */}
                <div className="p-6">
                  {/* Highlights */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-red-800 mb-3 flex items-center gap-2">
                      <Star className="w-5 h-5" />
                      أبرز المعالم:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {program.highlights.map((highlight, idx) => (
                        <span key={idx} className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="w-4 h-4 text-red-600" />
                      <span className="text-sm">دليل سياحي متخصص</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Users className="w-4 h-4 text-red-600" />
                      <span className="text-sm">مجموعات صغيرة</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar className="w-4 h-4 text-red-600" />
                      <span className="text-sm">برنامج مرن</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Star className="w-4 h-4 text-red-600" />
                      <span className="text-sm">خدمة فاخرة</span>
                    </div>
                  </div>

                  {/* CTA */}
                  <Link 
                    href={program.href}
                    className="w-full bg-gradient-luxury-2 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 text-center block"
                  >
                    عرض التفاصيل
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-r from-red-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-red-800 mb-12 text-center">لماذا تختار اسيلتكس؟</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-luxury-2 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-red-800 mb-3">خبراء محليون</h3>
              <p className="text-gray-600">فريق من المرشدين السياحيين المحترفين الذين يعرفون روسيا جيدًا</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-luxury-2 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-red-800 mb-3">برامج مخصصة</h3>
              <p className="text-gray-600">رحلات مصممة خصيصًا لتلبية احتياجاتك واهتماماتك</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-luxury-2 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-red-800 mb-3">خدمة فاخرة</h3>
              <p className="text-gray-600">أفضل الفنادق والمطاعم والخدمات على مدار الساعة</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-luxury-1">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">ابدأ رحلتك إلى روسيا اليوم</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            تواصل معنا الآن لتصميم الرحلة المثالية لك وعائلتك
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-red-700 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition-all duration-300 shadow-luxury hover:scale-105"
            >
              اطلب استشارة مجانية
            </Link>
            <Link 
              href="/hotels" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-700 transition-all duration-300"
            >
              استكشف الفنادق
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
