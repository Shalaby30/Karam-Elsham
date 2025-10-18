"use client"

import Image from "next/image"

const dishes = [
  {
    id: 1,
    name: "شاورما الفراخ",
    description: "شاورما فراخ  بالتتبيلة السورية الأصيلة",
    image: "/منيو-عروض-كرم-الشام4.jpg"
  },
  {
    id: 2,
    name: "كريب الكريسبي",
    description: "كريب مقرمش محشو باللحم والخضار الطازة",
    image: "/كريب الكريسبى.jpg"
  },
  {
    id: 3,
    name: "ماريا فراخ موتزيلا",
    description: "ساندويتش فراخ  مع جبنة موتزيلا ذائبة",
    image: "/ماريا فراخ موتزيلا.jpg"
  },
  {
    id: 4,
    name: "فتة شاورما",
    description: "فتة شاورما فراخ مع التوميه",
    image: "/فتة شاورما فراخ  سمول.jpg"
  },
  {
    id: 5,
    name: "بوكس الكرم ميكس",
    description: "مجموعة متنوعة من الشاورما واللحم والفراخ",
    image: "/بوكس الكرم ميكس شاورما فراخ ولحمة.jfif"
  },
]

export default function Dishes() {
  return (
    <section id="dishes" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
            الأطباق <span className="text-primary">المميزة</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            اختر من أشهى الأطباق السورية التقليدية المعدة بحب وعناية
          </p>
        </div>

        {/* Dishes Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {dishes.map((dish) => (
            <div
              key={dish.id}
              className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-48 w-full">
                <Image
                  src={dish.image}
                  alt={dish.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 "></div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800 group-hover:text-primary transition-colors">
                  {dish.name}
                </h3>
                <p className="text-sm text-gray-600 mt-1 line-clamp-2">{dish.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
