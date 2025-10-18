import { Tajawal } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const tajawal = Tajawal({
  weight: ['200', '300', '400', '500', '700', '800', '900'],
  subsets: ['arabic', 'latin'],
  display: 'swap',
  variable: '--font-tajawal',
})

export const metadata = {
  title: "كرم الشام",
  description: "مطعم كرم الشام - أشهى المأكولات السورية",
  generator: "Next.js",
  dir: 'rtl', // Add RTL direction
}

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" sizes="any" />

      </head>
      <body className={`${tajawal.className} text-right`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
