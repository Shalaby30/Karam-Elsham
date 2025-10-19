"use client"

import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-background pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <img src="/logo.png" className="w-5 h-8" alt="" />
              </div>
              <h3 className="text-xl font-bold">كرم الشام</h3>
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              مطعم سوري فاخر يقدم أشهى الأطباق التقليدية بأعلى معايير الجودة والنظافة.
            </p>
            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a
                href="https://www.facebook.com/karamelshaam"
                className="w-10 h-10 bg-primary hover:bg-accent rounded-lg flex items-center justify-center transition-colors"
              >
                <Facebook size={18} className="text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary hover:bg-accent rounded-lg flex items-center justify-center transition-colors"
              >
                <Instagram size={18} className="text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary hover:bg-accent rounded-lg flex items-center justify-center transition-colors"
              >
                <Twitter size={18} className="text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg">روابط سريعة</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="text-background/70 hover:text-white transition-colors">
                  الرئيسية
                </a>
              </li>
              <li>
                <a href="#branches" className="text-background/70 hover:text-white transition-colors">
                  الفروع
                </a>
              </li>
              <li>
                <a href="#contact" className="text-background/70 hover:text-white transition-colors">
                  تواصل معنا
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-white transition-colors">
                  سياسة الخصوصية
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg">معلومات التواصل</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-background/70">
                <Phone size={16} className="text-accent" />
                <span>19509</span>
              </li>
              <li className="flex items-center gap-2 text-background/70">
                <Mail size={16} className="text-accent" />
                <span>info@karamalsham.com</span>
              </li>
              <li className="flex items-start gap-2 text-background/70">
                <MapPin size={16} className="text-accent mt-1 flex-shrink-0" />
                <span>جميع الفروع في أنحاء المدينة</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}

        {/* Divider */}
        <div className="border-t border-background/20 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-background/60">
          <p>&copy; {currentYear} كرم الشام. جميع الحقوق محفوظة.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">
              شروط الاستخدام
            </a>
            <a href="#" className="hover:text-white transition-colors">
              سياسة الخصوصية
            </a>
            <a href="#" className="hover:text-white transition-colors">
              اتصل بنا
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
