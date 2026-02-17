import React from "react";
import { Mountain, Clock, MapPin, Star } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "الكرملين موسكو | اسيلتكس للسفر والسياحة",
  description: "اكتشف جمال وتاريخ الكرملين في موسكو، القلعة التاريخية التي ترمز إلى القوة والسلطة الروسية. جولات سياحية مميزة مع اسيلتكس.",
};

export default function KremlinPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-luxury-1 overlay-luxury">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container mx-auto px-4 h-full flex items-center justify-center text-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">الكرملين موسكو</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              قلعة تاريخية مزخرفة تحفة معمارية فريدة في قلب موسكو
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-white text-red-700 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition-all duration-300 shadow-luxury hover:scale-105"
              >
                احجز جولتك الآن
              </Link>
              <Link 
                href="/activities" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-700 transition-all duration-300"
              >
                المزيد من الأنشطة
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Overview */}
              <div className="bg-white rounded-2xl shadow-luxury p-8 border-luxury">
                <h2 className="text-3xl font-bold text-red-800 mb-6">نظرة عامة</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    الكرملين في موسكو هو عبارة عن قصور مزخرفة وتحف معمارية ليس لها مثيل في العالم وهي محصنة وتقع في وسط العاصمة الروسية موسكو، ويضم خمسة قصور وأربع كاتدرائيات وسور الكرملين المحيط به بالإضافة إلى أبراج الكرملين.
                  </p>
                  <p>
                    يرمز الكرملين إلى القوة والسلطة الروسية والسوفييتية (لفترة من الوقت)، وهو المقر الرسمي لرئيس الاتحاد الروسي منذ عام 1991. تم بناء جدران الكرملين ذات الطوب الأحمر المسنن وأبراجه العشرين (19 برجًا بها أبراج) في نهاية القرن الخامس عشر، عندما وصل عدد كبير من البنائين الإيطاليين إلى موسكو بدعوة من إيفان الثالث (العظيم).
                  </p>
                </div>
              </div>

              {/* Towers */}
              <div className="bg-white rounded-2xl shadow-luxury p-8 border-luxury">
                <h2 className="text-3xl font-bold text-red-800 mb-6">الأبراج الشهيرة</h2>
                <div className="space-y-6">
                  <div className="border-r-4 border-red-600 pl-6">
                    <h3 className="text-xl font-semibold text-red-700 mb-2">برج المنقذ (سباسكايا)</h3>
                    <p className="text-gray-600">
                      أحد أهم الأبراج، المؤدي إلى الساحة الحمراء، تم بناؤه في عام 1491 من قبل بييترو سولاريو، الذي صمم معظم الأبراج الرئيسية. وتُذاع دقات الساعة عبر الراديو كإشارة زمنية إلى البلاد بأكملها.
                    </p>
                  </div>
                  <div className="border-r-4 border-red-600 pl-6">
                    <h3 className="text-xl font-semibold text-red-700 mb-2">برج القديس نيكولاس (نيكولسكايا)</h3>
                    <p className="text-gray-600">
                      الذي بُني في الأصل عام 1491 وأُعيد بناؤه عام 1806، يعد من أبرز المعالم المعمارية في الكرملين.
                    </p>
                  </div>
                  <div className="border-r-4 border-red-600 pl-6">
                    <h3 className="text-xl font-semibold text-red-700 mb-2">الأبراج الرئيسية الأخرى</h3>
                    <p className="text-gray-600">
                      برج الثالوث (ترويتسكايا)، برج بوروفيتسكايا، وغيرها من الأبراج التي ترتفع من الجدران المحيطة بالكرملين.
                    </p>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="bg-white rounded-2xl shadow-luxury p-8 border-luxury">
                <h2 className="text-3xl font-bold text-red-800 mb-6">ماذا تشمل الزيارة؟</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mountain className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">القصور الإمبراطورية</h3>
                      <p className="text-gray-600 text-sm">استكشف القصور الخمسة الفاخرة داخل الكرملين</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">الكاتدرائيات الأربع</h3>
                      <p className="text-gray-600 text-sm">زيارة الكاتدرائيات التاريخية الشهيرة</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">الأسوار والأبراج</h3>
                      <p className="text-gray-600 text-sm">تجول along السور التاريخي و20 برجًا</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Star className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">متاحف الكرملين</h3>
                      <p className="text-gray-600 text-sm">استكشاف الكنوز والتحف الفنية</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Quick Info */}
              <div className="bg-gradient-luxury-2 text-white rounded-2xl p-6 shadow-luxury-lg">
                <h3 className="text-xl font-bold mb-4">معلومات سريعة</h3>
                <div className="space-y-3">
                  <div>
                    <span className="font-semibold">📍 الموقع:</span>
                    <p className="text-sm opacity-90">وسط موسكو التاريخي</p>
                  </div>
                  <div>
                    <span className="font-semibold">⏰ ساعات العمل:</span>
                    <p className="text-sm opacity-90">10:00 - 17:00 (ما عدا الخميس)</p>
                  </div>
                  <div>
                    <span className="font-semibold">🎫 تذاكر:</span>
                    <p className="text-sm opacity-90">الحجز المسبق مطلوب</p>
                  </div>
                  <div>
                    <span className="font-semibold">👥 أفضل وقت للزيارة:</span>
                    <p className="text-sm opacity-90">صباحًا خلال أيام الأسبوع</p>
                  </div>
                </div>
              </div>

              {/* Related Activities */}
              <div className="bg-white rounded-2xl shadow-luxury p-6 border-luxury">
                <h3 className="text-xl font-bold text-red-800 mb-4">أنشطة مقترحة</h3>
                <div className="space-y-3">
                  <Link href="/activities/red-square" className="block p-3 rounded-lg hover:bg-red-50 transition-colors">
                    <h4 className="font-semibold text-red-700">الساحة الحمراء</h4>
                    <p className="text-sm text-gray-600">أشهر ميدان في موسكو</p>
                  </Link>
                  <Link href="/activities/gorky-park" className="block p-3 rounded-lg hover:bg-red-50 transition-colors">
                    <h4 className="font-semibold text-red-700">حديقة غوركي</h4>
                    <p className="text-sm text-gray-600">أجمل حدائق موسكو</p>
                  </Link>
                  <Link href="/activities/vdnkh" className="block p-3 rounded-lg hover:bg-red-50 transition-colors">
                    <h4 className="font-semibold text-red-700">حديقة فدنخا</h4>
                    <p className="text-sm text-gray-600">أكبر مجمع ترفيهي</p>
                  </Link>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-r from-red-600 to-red-800 text-white rounded-2xl p-6 text-center shadow-luxury-xl">
                <h3 className="text-xl font-bold mb-3">جولة خاصة للكرملين</h3>
                <p className="mb-4 opacity-90">استكشف الكرملين مع مرشد سياحي متخصص</p>
                <Link 
                  href="/contact" 
                  className="bg-white text-red-700 px-6 py-2 rounded-lg font-semibold hover:bg-red-50 transition-all duration-300 inline-block"
                >
                  اطلب التفاصيل
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
