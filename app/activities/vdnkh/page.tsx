import React from "react";
import { Building, Trees, MapPin, Clock, Star, Palette } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "حديقة فدنخا موسكو | اسيلتكس للسفر والسياحة",
  description: "اكتشف حديقة VDNKh، أكبر معرض ومتحف ومجمع ترفيهي في العالم. جولات سياحية مميزة مع اسيلتكس.",
};

export default function VDNKhPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-luxury-1 overlay-luxury">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container mx-auto px-4 h-full flex items-center justify-center text-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">حديقة فدنخا</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              مركز المعارض الروسي - أكبر مجمع ثقافي وترفيهي في العالم
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
                    حديقة VDNKh، مركز المعارض الروسي، هي أكبر معرض ومتحف ومجمع ترفيهي في العالم. صُممت لعرض نجاح وإمكانيات الصناعة الزراعية السوفييتية، ولا تزال حتى اليوم معلمًا من معالم العمارة والثقافة والتاريخ السوفييتي.
                  </p>
                  <p>
                    اليوم، تعد VDNKh موقعًا للمعارض الروسية والدولية والأحداث الثقافية والتجارية، التي تُقام في أجنحتها التاريخية وقصورها وحدائقها. يزور حديقة VDNKh ثلاثة وثلاثون مليون شخص كل عام، مما يجعلها واحدة من أكثر المعالم شهرة في موسكو.
                  </p>
                </div>
              </div>

              {/* Main Attractions */}
              <div className="bg-white rounded-2xl shadow-luxury p-8 border-luxury">
                <h2 className="text-3xl font-bold text-red-800 mb-6">أهم المعالم والأنشطة</h2>
                <div className="space-y-6">
                  <div className="border-r-4 border-red-600 pl-6">
                    <h3 className="text-xl font-semibold text-red-700 mb-2">الزقاق المركزي ومتحف المدينة</h3>
                    <p className="text-gray-600">
                      استمتع بمشاهدة القصور التي بنيت للجمهوريات السوفيتية وقم بزيارة المتاحف والمعارض العديدة التي تقام في الأجنحة الرئيسية.
                    </p>
                  </div>
                  <div className="border-r-4 border-red-600 pl-6">
                    <h3 className="text-xl font-semibold text-red-700 mb-2">حديقة الحرف اليدوية</h3>
                    <p className="text-gray-600">
                      جرّب مهاراتك في ورش العمل الفنية والحرفية واشترِ هدايا فريدة من نوعها مصنوعة يدويًا.
                    </p>
                  </div>
                  <div className="border-r-4 border-red-600 pl-6">
                    <h3 className="text-xl font-semibold text-red-700 mb-2">حديقة المعرفة</h3>
                    <p className="text-gray-600">
                      تعرف على مهنة جديدة في هذه المجموعة التعليمية التي تسمى "تكنوجراد"، والتي تُوصف بأنها "سوبر ماركت للمهن".
                    </p>
                  </div>
                  <div className="border-r-4 border-red-600 pl-6">
                    <h3 className="text-xl font-semibold text-red-700 mb-2">حديقة المناظر الطبيعية</h3>
                    <p className="text-gray-600">
                      استكشف هذا المشروع البيئي الفريد من نوعه الذي يضم حدائق وغابات وحتى شاطئًا مع غابة البلوط المحفوظة.
                    </p>
                  </div>
                </div>
              </div>

              {/* Technograd Details */}
              <div className="bg-white rounded-2xl shadow-luxury p-8 border-luxury">
                <h2 className="text-3xl font-bold text-red-800 mb-6">تكنوجراد - مدينة التقنيات</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    يتكون مجمع تكنوجراد من 5 أقسام مختلفة تتيح للزوار تعلم وتجربة مختلف المهن والتقنيات الحديثة:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 rounded-lg p-4">
                      <h3 className="font-semibold text-blue-800 mb-2">الخدمة</h3>
                      <p className="text-sm text-gray-700">إتقان مهاراتك في الطهي</p>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4">
                      <h3 className="font-semibold text-green-800 mb-2">الفن</h3>
                      <p className="text-sm text-gray-700">دراسة المهن الإبداعية</p>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-4">
                      <h3 className="font-semibold text-purple-800 mb-2">تسيفرا</h3>
                      <p className="text-sm text-gray-700">ورش عمل في الصناعة الرقمية</p>
                    </div>
                    <div className="bg-orange-50 rounded-lg p-4">
                      <h3 className="font-semibold text-orange-800 mb-2">الحضرية</h3>
                      <p className="text-sm text-gray-700">مهن البناء والتخطيط الحضري</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Natural Features */}
              <div className="bg-white rounded-2xl shadow-luxury p-8 border-luxury">
                <h2 className="text-3xl font-bold text-red-800 mb-6">المعالم الطبيعية</h2>
                <div className="space-y-6">
                  <div className="border-r-4 border-green-600 pl-6">
                    <h3 className="text-xl font-semibold text-green-700 mb-2">غابة البلوط</h3>
                    <p className="text-gray-600">
                      أفضل غابة بلوط محفوظة في منطقة موسكو، والتي تعد أيضًا موطنًا لمسار بيئي مرتفع في الأشجار.
                    </p>
                  </div>
                  <div className="border-r-4 border-green-600 pl-6">
                    <h3 className="text-xl font-semibold text-green-700 mb-2">المتاهة الخضراء</h3>
                    <p className="text-gray-600">
                      متاهة نباتية ممتعة للأطفال والعائلات للاستكشاف والمغامرة.
                    </p>
                  </div>
                  <div className="border-r-4 border-green-600 pl-6">
                    <h3 className="text-xl font-semibold text-green-700 mb-2">حقول الزهور</h3>
                    <p className="text-gray-600">
                      حقول زهور ملونة تتغير مع الفصول، وتوفر خلفية رائعة للصور الفوتوغرافية.
                    </p>
                  </div>
                  <div className="border-r-4 border-green-600 pl-6">
                    <h3 className="text-xl font-semibold text-green-700 mb-2">نافورة الأذن الذهبية</h3>
                    <p className="text-gray-600">
                      نافورة على شكل سنبلة قمح، وتُعتبر المركز التكويني لحديقة المناظر الطبيعية.
                    </p>
                  </div>
                </div>
              </div>

              {/* Activities */}
              <div className="bg-white rounded-2xl shadow-luxury p-8 border-luxury">
                <h2 className="text-3xl font-bold text-red-800 mb-6">أنشطة متنوعة</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Trees className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">المشي وركوب الدراجات</h3>
                      <p className="text-gray-600 text-sm">مسارات واسعة للتنزه والرياضة</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Palette className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">ورش فنية</h3>
                      <p className="text-gray-600 text-sm">تعلم الحرف اليدوية التقليدية</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Building className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">معارض دولية</h3>
                      <p className="text-gray-600 text-sm">معارض تجارية وثقافية متنوعة</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Star className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">عروض ترفيهية</h3>
                      <p className="text-gray-600 text-sm">مهرجانات وفعاليات على مدار العام</p>
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
                    <p className="text-sm opacity-90">Prospect Mira, موسكو</p>
                  </div>
                  <div>
                    <span className="font-semibold">⏰ ساعات العمل:</span>
                    <p className="text-sm opacity-90">مفتوحة على مدار 24 ساعة</p>
                  </div>
                  <div>
                    <span className="font-semibold">🎫 تذاكر:</span>
                    <p className="text-sm opacity-90">مجانية للدخول</p>
                  </div>
                  <div>
                    <span className="font-semibold">🚇 أقرب محطة مترو:</span>
                    <p className="text-sm opacity-90">VDNKh</p>
                  </div>
                  <div>
                    <span className="font-semibold">👥 الزوار سنويًا:</span>
                    <p className="text-sm opacity-90">33 مليون شخص</p>
                  </div>
                </div>
              </div>

              {/* Related Activities */}
              <div className="bg-white rounded-2xl shadow-luxury p-6 border-luxury">
                <h3 className="text-xl font-bold text-red-800 mb-4">معالم قريبة</h3>
                <div className="space-y-3">
                  <Link href="/activities/ostankino-tower" className="block p-3 rounded-lg hover:bg-red-50 transition-colors">
                    <h4 className="font-semibold text-red-700">برج أوستانكينو</h4>
                    <p className="text-sm text-gray-600">أطول برج في أوروبا</p>
                  </Link>
                  <Link href="/activities/gorky-park" className="block p-3 rounded-lg hover:bg-red-50 transition-colors">
                    <h4 className="font-semibold text-red-700">حديقة غوركي</h4>
                    <p className="text-sm text-gray-600">حديقة الثقافة والترفيه</p>
                  </Link>
                  <Link href="/activities/moscow-zoo" className="block p-3 rounded-lg hover:bg-red-50 transition-colors">
                    <h4 className="font-semibold text-red-700">حديقة حيوانات موسكو</h4>
                    <p className="text-sm text-gray-600">أكبر حديقة حيوان في أوروبا</p>
                  </Link>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-r from-red-600 to-red-800 text-white rounded-2xl p-6 text-center shadow-luxury-xl">
                <h3 className="text-xl font-bold mb-3">جولة شاملة في فدنخا</h3>
                <p className="mb-4 opacity-90">اكتشف أروع معالم فدنخا مع مرشد متخصص</p>
                <Link 
                  href="/contact" 
                  className="bg-white text-red-700 px-6 py-2 rounded-lg font-semibold hover:bg-red-50 transition-all duration-300 inline-block"
                >
                  احجز الجولة
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
