"use client";

export default function DiscoverSection() {
  return (
    <section id="discover" className="py-20 relative overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* النصوص */}
          <div className="space-y-6 order-2 md:order-1 text-right">
            <h2 className="text-4xl md:text-5xl font-bold  leading-tight">
              كرم الشام
            </h2>
            <p className="text-lg  leading-relaxed">
              في كرم الشام، بنقدملك تجربة طعام سورية أصيلة تجمع بين النكهة، الجودة، والسعر المناسب.
              منيو المطعم بيضم تشكيلة واسعة من السندوتشات، الوجبات، والمقبلات اللي ترضي كل الأذواق —
              من الشاورما المشهورة، لحد الوجبات الفريدة والبوكسات المميزة اللي تجمع أحلى المكونات في وجبة واحدة.
              كل ده بأسعار مميزة وجودة عالية تخليك دايمًا ترجع لنا
            </p>
            <p className="text-lg leading-relaxed">
              من المذاق الشامي الأصيل إلى الخدمة المميزة، كرم الشام هو المكان
              الذي يجمع بين الأصالة والحداثة في كل لقمة.
            </p>
          </div>

          {/* الصورة */}
          <div className="relative h-96 order-1 md:order-2">
            <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400/20 to-yellow-600/20 rounded-2xl blur-2xl"></div>
            <div className="relative h-full rounded-2xl overflow-hidden shadow-2xl border border-yellow-500/30">
              <img
                src="/about.jpg"
                alt="كرم الشام"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
