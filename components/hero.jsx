"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-28 pb-16 px-3 sm:px-4 lg:px-6 min-h-screen flex items-center overflow-hidden"
    >
      {/* الخلفية */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero.jpeg"
          alt="كرم الشام"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* المحتوى */}
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

          {/* الصورة الجانبية */}
          <motion.div
            className="relative h-80 lg:h-full min-h-80 hidden lg:block order-2 lg:order-2"
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 rounded-2xl blur-3xl"></div>
            <div className="relative h-full bg-gradient-to-br from-yellow-400/10 to-yellow-600/10 rounded-2xl overflow-hidden border border-yellow-400/30 shadow-2xl">
              <img
                src="/pic.png"
                alt="كرم الشام"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <div className="space-y-8 animate-fade-in order-1 lg:order-1 flex flex-col  text-right">
            <div className="space-y-4">
              <span className="text-yellow-400 font-semibold text-sm tracking-widest">
                مرحباً بك في
              </span>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
                كرم الشام
              </h1>
              <p className="text-xl text-white/90 max-w-lg leading-relaxed">
                تجربة طعام سورية أصيلة بلمسة عصرية. نقدم لك أشهى الأطباق التقليدية بأعلى معايير الجودة والنظافة.
              </p>
            </div>

            {/* الأزرار */}
            <div className="flex flex-col sm:flex-row gap-4 ">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.querySelector('#contact');
                  if (element) {
                    element.scrollIntoView({
                      behavior: 'smooth',
                      block: 'start',
                    });
                  }
                }}
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 group cursor-pointer"
              >
                اطلب الآن
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://qrco.de/be5myU"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              >
                منيو
              </a>
            </div>

            {/* الإحصائيات */}
            <div className="grid grid-cols-3 gap-6 pt-8 text-center lg:text-right">
              <div className="space-y-2">
                <p className="text-3xl font-bold text-yellow-400">15+</p>
                <p className="text-sm text-white/80">فرع في المدينة</p>
              </div>
              <div className="space-y-2">
                <p className="text-3xl font-bold text-yellow-400">10K+</p>
                <p className="text-sm text-white/80">عميل سعيد</p>
              </div>
              <div className="space-y-2">
                <p className="text-3xl font-bold text-yellow-400">3m+</p>
                <p className="text-sm text-white/80">متابع</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}