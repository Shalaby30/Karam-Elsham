"use client"

import { Smartphone, Menu, Apple, Download, MessageCircle } from "lucide-react"
import Link from "next/link"

const apps = [
    {
        name: "تطبيق كرم الشام",
        description: "اطلب من تطبيقنا الرسمي",
        image: "/app.png",
        color: "from-blue-500 to-blue-600",
        links: [
            {
                platform: "تحميل iOS",
                url: "https://apps.apple.com/eg/app/karam-el-sham/id1524199626?l=ar",
                icon: Apple,
            },
            {
                platform: "تحميل Android",
                url: "https://play.google.com/store/apps/details?id=com.simpletouch.karamelsham&hl=ar",
                icon: Download,
            },
        ],
    },
    {
        name: "تطبيق طلبات",
        description: "اطلب من خلال تطبيق طلبات",
        image: "/talabat.png",
        color: "from-orange-500 to-orange-600",
        links: [
            {
                platform: "تحميل iOS",
                url: "https://apps.apple.com/ae/app/%D8%B7%D9%84%D8%A8%D8%A7%D8%AA-%D8%A7%D9%84%D8%B7%D8%B9%D8%A7%D9%85-%D9%88%D8%A7%D9%84%D8%A8%D9%82%D8%A7%D9%84%D8%A9-%D9%88%D8%BA%D9%8A%D8%B1%D9%87/id451001072?l=ar",
                icon: Apple,
            },
            {
                platform: "تحميل Android",
                url: "https://play.google.com/store/apps/details?id=com.talabat&hl=ar",
                icon: Download,
            },
        ],
    },
    {
        name: "تطبيق المنيوز",
        description: "استعرض المنيو الكامل",
        image: "/menus.png",
        color: "from-purple-500 to-purple-600",
        links: [
            {
                platform: "تحميل iOS",
                url: "https://apps.apple.com/us/app/elmenus/id843479108?l=ar",
                icon: Apple,
            },
            {
                platform: "تحميل Android",
                url: "https://play.google.com/store/apps/details?id=com.elmenus.app&hl=ar",
                icon: Download,
            },
        ],
    }, {
        name: "واتس اب",
        description: "تواصل معنا",
        image: "/whatsapp.png",
        color: "from-green-500 to-green-600",
        links: [
            {
                platform: "01000000000",
                url: "https://wa.me/201000000000",
                icon: MessageCircle,
            },
        ],
    }
]

export default function Contact() {
    return (
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/5">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
                        تواصل <span className="text-primary">معنا</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">اختر الطريقة التي تناسبك للتواصل والطلب</p>
                </div>

                {/* Hotline Section */}
                <div className="mb-16 bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 sm:p-12 text-center text-white shadow-lg">
                    <p className="text-lg mb-4">الخط الساخن</p>
                    <h3 className="text-5xl sm:text-6xl font-bold mb-4">19509</h3>
                    <p className="text-lg opacity-90">اتصل بنا مباشرة للطلب والاستفسارات</p>
                </div>

                {/* Apps Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {apps.map((app, index) => {
                        const Icon = app.icon
                        return (
                            <div
                                key={index}
                                className="group bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
                            >
                                {/* App Image */}
                                <div className="w-full h-40 mb-6 overflow-hidden rounded-xl bg-white p-4 flex items-center justify-center">
                                    <img
                                        src={app.image}
                                        alt={app.name}
                                        className="h-full w-auto object-contain rounded-xl"
                                    />
                                </div>

                                {/* Content */}
                                <h3 className="text-2xl font-bold text-foreground mb-2 text-center">{app.name}</h3>
                                <p className="text-muted-foreground mb-8 text-center">{app.description}</p>

                                {/* Platform Links */}
                                <div className="space-y-3">
                                    {app.links.map((link, linkIndex) => {
                                        const PlatformIcon = link.icon
                                        return (
                                            <Link
                                                key={linkIndex}
                                                href={link.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-primary/10 to-accent/10 hover:from-primary/20 hover:to-accent/20 border border-primary/20 hover:border-primary/50 text-foreground font-semibold py-3 px-4 rounded-lg transition-all duration-300 group-hover:shadow-md"
                                            >
                                                <PlatformIcon size={20} />
                                                <span> {link.platform}</span>
                                            </Link>
                                        )
                                    })}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
