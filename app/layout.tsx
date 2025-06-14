import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "GeoGame - Coğrafya Bilginizi Geliştirin",
  description: "GeoGame, ülkeler hakkında bilginizi geliştirmek için oynayabileceğiniz eğitici bir coğrafya oyunudur.",
  generator: "v0.dev",
}

export default function RootLayout({ children }) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          type="image/x-icon"
          href="https://raw.github.com/KeremKuyucu/GeoGame/main/assets/logo.png"
        />
        <meta name="theme-color" content="#4338ca" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
