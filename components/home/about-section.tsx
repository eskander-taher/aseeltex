import Link from "next/link";

export default function AboutSection() {
	return (
		<section className="py-16 lg:py-24 bg-white">
			<div className="mx-auto max-w-4xl px-4 text-center">
				<h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
					{"لماذا تختارنا؟"}
				</h2>
				<p className="text-gray-700 leading-relaxed text-base md:text-lg mb-10">
					{
						"شركة اسيلتيك للسفر والسياحة هي شركة رائدة في مجال السياحة والسفر في روسيا. نقدم خدمات متميزة تشمل الاستقبال والتوديع، حجوزات الفنادق، الجولات السياحية، إصدار الدعوات، وتنظيم الفعاليات. نحن نفخر بتقديم تجارب سفر لا تُنسى بأعلى معايير الجودة والاحترافية. فريقنا المتخصص يعمل على مدار الساعة لضمان راحتكم وسعادتكم خلال رحلتكم في روسيا. مع خبرة تزيد عن 35 عامًا في مجال السياحة، نضمن لكم رحلة مميزة وآمنة."
					}
				</p>
				<Link
					href="/contact"
					className="inline-block bg-primary text-white px-10 py-3 rounded-full font-bold hover:bg-primary/90 transition-colors duration-200"
				>
					{"تواصل معنا"}
				</Link>
			</div>
		</section>
	);
}
