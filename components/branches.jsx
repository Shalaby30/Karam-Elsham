"use client";

import { useState } from "react";
import { MapPin } from "lucide-react";

const branches = [
    // Cairo Branches
    {
        id: 1,
        name: "الألف مسكن",
        area: "القاهرة",
        address: "ميدان الألف مسكن بجوار حلواني العبد",
        mapUrl: "https://maps.app.goo.gl/njwHe12WxnyAhbc29?g_st=ic",
    },
    {
        id: 2,
        name: "المهندسين",
        area: "القاهرة",
        address: "تقاطع البطل أحمد عبد العزيز مع جامعة الدول العربية",
        mapUrl: "https://maps.app.goo.gl/xdZ8jimvUUgZDByq9",
    },
    {
        id: 3,
        name: "زهراء المعادي",
        area: "القاهرة",
        address: "الخمسين زهراء المعادي بجوار سبينس ماركت",
        mapUrl: "https://maps.app.goo.gl/CaLRs3hM8DbMo5GN6",
    },
    {
        id: 5,
        name: "مصر الجديدة",
        area: "القاهرة",
        address: "67 ميدان روكسي مصر الجديدة",
        mapUrl: "https://maps.app.goo.gl/DF67rnfbuUV3dpQE7?g_st=iw",
    },
    {
        id: 7,
        name: "شبرا",
        area: "القاهرة",
        address: "بجوار قهوة الصحافة وأمام مترو روض الفرج",
        mapUrl: "https://maps.google.com/?q=30.080814,31.245188",
    },
    {
        id: 8,
        name: "وسط البلد",
        area: "القاهرة",
        address: "تقاطع طلعت حرب مع عبد الخالق ثروت",
        mapUrl:
            "https://www.google.com/maps?q=30.050575256347656,31.240768432617188&z=17&hl=en",
    },
    {
        id: 9,
        name: "أكتوبر",
        area: "القاهرة",
        address: "الحصرى - بجوار مسجد الحصرى",
        mapUrl:
            "https://www.google.com/maps?q=29.97377586364746,30.94473648071289&z=17&hl=en",
    },
    {
        id: 10,
        name: "الجيزة - فيصل",
        area: "القاهرة",
        address: "ش الملك فيصل",
        mapUrl: "https://goo.gl/maps/EiKDs2Ufx3ZNHhzp6",
    },
    // Mansoura Branch
    {
        id: 4,
        name: "المنصورة",
        area: "المنصورة",
        address: "32 ش الجمهورية أمام الجامعة",
        mapUrl: "https://maps.app.goo.gl/wHjysXRfMZ9J5AfT6",
    },
    // Alexandria Branches
    {
        id: 11,
        name: "سموحة",
        area: "الإسكندرية",
        address: "بدوران فيكتور عمانويل",
        mapUrl: "https://goo.gl/maps/hnGAXoQa531ZeiAQ7",
    },
    {
        id: 12,
        name: "سوتر",
        area: "الإسكندرية",
        address: "أمام مجمع الكليات",
        mapUrl: "https://goo.gl/maps/u6xJDahqSbRk1uY56",
    },
    {
        id: 13,
        name: "العجمي",
        area: "الإسكندرية",
        address: "البيطاش - أمام المدرسة الابتدائية",
        mapUrl: "https://maps.google.com/?q=31.121698,29.785093",
    },
    {
        id: 14,
        name: "المنتزه",
        area: "الإسكندرية",
        address: "أمام قصر المنتزه أول شارع الملك",
        mapUrl: "https://maps.google.com/?q=31.282486,30.022198",
    },
    {
        id: 15,
        name: "العصافرة",
        area: "الإسكندرية",
        address: "شارع جمال عبد الناصر بجوار بنك عوده",
        mapUrl: "https://goo.gl/maps/CMRhQZTqq1EeRbeq7",
    },
    // Helwan Branch
    {
        id: 6,
        name: "حلوان",
        area: "حلوان",
        address: "شارع محمد السيد احمد بجوار كنتاكي",
        mapUrl: "https://maps.app.goo.gl/1gQFQs6ibEMB1k4h7",
    },
];

const areas = ["القاهرة", "المنصورة", "الإسكندرية", "حلوان"];

export default function Branches() {
    const [activeArea, setActiveArea] = useState("القاهرة");

    const filteredBranches = branches.filter(
        (branch) => branch.area === activeArea
    );

    return (
        <section
            id="branches"
            className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-orange-50 to-white"
        >
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl sm:text-5xl font-bold text-orange-600 mb-4">
                        فروعنا في جميع أنحاء الجمهورية
                    </h2>
                    <p className="text-lg text-gray-600">
                        اختر منطقتك واستمتع بتجربة كرم الشام الأصيلة
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex justify-center gap-4 mb-10 flex-wrap">
                    {areas.map((area) => (
                        <button
                            key={area}
                            onClick={() => setActiveArea(area)}
                            className={`px-6 py-2 rounded-full font-semibold border transition-all duration-300 ${activeArea === area
                                ? "bg-orange-500 text-white border-orange-500"
                                : "bg-white text-gray-700 border-gray-300 hover:bg-orange-100"
                                }`}
                        >
                            {area}
                        </button>
                    ))}
                </div>

                {/* Layout */}
                <div className="flex flex-col-reverse  lg:flex-row gap-10 items-start">
                    {/* Image on the left (hidden on mobile) */}
                    <div className="hidden lg:block lg:w-1/3">
                        <div className="sticky top-24 rounded-lg overflow-hidden shadow-xl">
                            <img
                                src="/branshes.jpg"
                                alt="كرم الشام - الشاورما"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Branches List */}
                    <div className="flex-1 w-full">
                        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredBranches.map((branch) => (
                                <a
                                    key={branch.id}
                                    href={branch.mapUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-lg hover:border-orange-500 transition-all duration-300"
                                >
                                    <div className="flex items-center justify-between mb-2">
                                        <h4 className="text-lg font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                                            {branch.name}
                                        </h4>
                                        <MapPin size={18} className="text-orange-500" />
                                    </div>
                                    <p className="text-sm text-gray-600">{branch.address}</p>
                                    <button className="w-full mt-3 bg-orange-100 hover:bg-orange-500 text-orange-600 hover:text-white py-1.5 rounded-md text-sm font-semibold transition-all duration-300">
                                        اتجاهات
                                    </button>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
