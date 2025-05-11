"use client"

import Link from "next/link"
import Image from "next/image"
import { Globe, Flag, MapPin, Compass, Award, Download, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PhoneSlideshow } from "@/components/phone-slideshow"
import { Toaster } from "@/components/ui/toaster"
import { useToast } from "@/hooks/use-toast"

export default function Home() {
  const { toast } = useToast()

  // Update the handleButtonClick function to open GitHub
  const handleButtonClick = (message, url = "https://github.com") => {
    toast({
      title: "Bildirim",
      description: message,
    })
    window.open(url, "_blank")
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Globe className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">GeoGame</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-sm font-medium hover:text-primary">
              Özellikler
            </Link>
            <Link href="#modes" className="text-sm font-medium hover:text-primary">
              Oyun Modları
            </Link>
            <Link href="#stats" className="text-sm font-medium hover:text-primary">
              İstatistikler
            </Link>
            <Link href="#download" className="text-sm font-medium hover:text-primary">
              İndir
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="sm"
              className="hidden md:flex"
              onClick={() => handleButtonClick("Giriş sayfasına yönlendiriliyorsunuz...")}
            >
              Giriş Yap
            </Button>
            <Button size="sm" onClick={() => handleButtonClick("İndirme sayfasına yönlendiriliyorsunuz...")}>
              <Download className="mr-2 h-4 w-4" /> İndir
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-primary/10 to-background pt-16 md:pt-24">
          <div className="container flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <div className="flex flex-col space-y-4 md:w-1/2">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Dünyayı <span className="text-primary">Keşfet</span>, Coğrafyayı Öğren
              </h1>
              <p className="text-lg text-muted-foreground max-w-[600px]">
                GeoGame, ülkeler hakkında bilginizi geliştirmek için oynayabileceğiniz eğitici ve eğlenceli bir coğrafya
                oyunudur. Başkentler, bayraklar ve diğer coğrafi bilgilerle kendinizi test edin.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Button size="lg" className="gap-2" onClick={() => handleButtonClick("Oyun başlatılıyor...")}>
                  Hemen Oyna <ChevronRight className="h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="gap-2"
                  onClick={() => handleButtonClick("Daha fazla bilgi gösteriliyor...")}
                >
                  Daha Fazla Bilgi
                </Button>
              </div>
              <div className="pt-4"></div>
            </div>
            <div className="relative md:w-1/2">
              <PhoneSlideshow />
              <div className="absolute -z-10 -left-4 -top-4 h-[300px] w-[300px] rounded-full bg-primary/30 blur-3xl" />
              <div className="absolute -z-10 -right-4 -bottom-4 h-[300px] w-[300px] rounded-full bg-blue-500/20 blur-3xl" />
            </div>
          </div>
        </section>

        {/* Game Modes Section */}
        <section id="modes" className="py-16 md:py-24">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Oyun Modları</h2>
              <p className="text-lg text-muted-foreground max-w-[800px] mx-auto">
                Farklı oyun modlarıyla coğrafya bilginizi test edin ve geliştirin
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <GameModeCard
                icon={<Compass className="h-10 w-10 text-primary" />}
                title="Mesafeden Ülke Bilme"
                description="Mesafe ve yön bilgisine göre ülkeleri tahmin edin. Uzaklık ve yön ipuçlarını kullanarak doğru ülkeyi bulmaya çalışın."
              />
              <GameModeCard
                icon={<MapPin className="h-10 w-10 text-primary" />}
                title="Başkentten Ülke Bilme"
                description="Verilen bir ülkeyi başkentinden tanıyın. Başkent ipucunu kullanarak hangi ülkeye ait olduğunu bulun."
              />
              <GameModeCard
                icon={<Flag className="h-10 w-10 text-primary" />}
                title="Bayraktan Ülke Bilme"
                description="Verilen bir ülkeyi bayrağından tanıyın. Bayrak görselini inceleyerek hangi ülkeye ait olduğunu tahmin edin."
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 md:py-24 bg-muted/50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Özellikler</h2>
              <p className="text-lg text-muted-foreground max-w-[800px] mx-auto">
                GeoGame'in sunduğu benzersiz özelliklerle coğrafya öğrenmeyi eğlenceli hale getirin
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <FeatureCard
                icon={<Globe className="h-8 w-8 text-primary" />}
                title="200+ Ülke"
                description="Dünyadaki tüm ülkeler hakkında bilgi edinin"
              />
              <FeatureCard
                icon={<Award className="h-8 w-8 text-primary" />}
                title="Sıralamalar"
                description="Arkadaşlarınızla yarışın ve liderlik tablosunda yerinizi alın"
              />
              <FeatureCard
                icon={<Compass className="h-8 w-8 text-primary" />}
                title="Zorluk Seviyeleri"
                description="Başlangıç, orta ve ileri seviye zorluk dereceleri"
              />
              <FeatureCard
                icon={<MapPin className="h-8 w-8 text-primary" />}
                title="Detaylı İstatistikler"
                description="İlerlemenizi takip edin ve gelişiminizi görün"
              />
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section id="stats" className="py-16 md:py-24">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <h2 className="text-3xl md:text-4xl font-bold">İstatistiklerinizi Takip Edin</h2>
                  <Badge
                    variant="outline"
                    className="bg-yellow-100 text-yellow-800 border-yellow-300 text-xs font-medium px-2.5 py-0.5"
                  >
                    Yakında
                  </Badge>
                </div>
                <p className="text-lg text-muted-foreground mb-6">
                  GeoGame ile coğrafya bilginizi geliştirirken ilerlemenizi de takip edin. Hangi ülkeleri doğru
                  bildiğinizi, hangi bölgelerde daha fazla çalışmanız gerektiğini görün.
                </p>
                <ul className="space-y-4">
                  {[
                    "Doğru bildiğiniz ülkelerin listesi",
                    "Bölgelere göre başarı oranınız",
                    "Günlük, haftalık ve aylık ilerleme grafikleri",
                    "Arkadaşlarınızla karşılaştırmalı istatistikler",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div className="rounded-full bg-primary/20 p-1 mt-0.5">
                        <ChevronRight className="h-4 w-4 text-primary" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button className="mt-6" onClick={() => handleButtonClick("İstatistikler görüntüleniyor...")}>
                  İstatistiklerinizi Görün
                </Button>
              </div>
              <div className="relative">
                <div className="relative z-10 rounded-lg overflow-hidden border shadow-lg">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    width={800}
                    height={600}
                    alt="GeoGame Statistics Dashboard"
                    className="w-full"
                  />
                </div>
                <div className="absolute -z-10 -right-4 -bottom-4 h-[300px] w-[300px] rounded-full bg-primary/20 blur-3xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Download Section */}
        <section id="download" className="py-16 md:py-24 bg-gradient-to-b from-background to-primary/10">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Hemen İndirin</h2>
            <p className="text-lg text-muted-foreground max-w-[600px] mx-auto mb-8">
              GeoGame'i indirin, coğrafya bilginizi geliştirin ve dünya hakkında daha fazla şey öğrenin!
            </p>
            <div className="flex justify-center gap-4">
              {/* Update the button in the download section to use the updated function */}
              <Button
                size="lg"
                className="gap-2"
                onClick={() => handleButtonClick("GitHub'dan indirme başlatıldı!", "https://github.com")}
              >
                <Download className="h-5 w-5" /> GitHub'dan İndir
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2"
                onClick={() => handleButtonClick("Alternatif indirme seçenekleri gösteriliyor...")}
              >
                Alternatif İndirme
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-8 md:py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-primary" />
              <span className="text-lg font-bold">GeoGame</span>
            </div>
            <div className="flex flex-wrap justify-center gap-8">
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                Gizlilik Politikası
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                Kullanım Şartları
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                İletişim
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                Hakkımızda
              </Link>
            </div>
            <div className="text-sm text-muted-foreground">© 2025 GeoGame. Tüm hakları saklıdır.</div>
          </div>
        </div>
      </footer>
      <Toaster />
    </div>
  )
}

// Update the GameModeCard component to open GitHub
function GameModeCard({ icon, title, description }) {
  const { toast } = useToast()

  const handlePlay = () => {
    toast({
      title: "Oyun Modu",
      description: `${title} modu başlatılıyor...`,
    })
    window.open("https://github.com", "_blank")
  }

  // Rest of the component remains the same

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <CardContent className="p-6">
        <div className="mb-4 rounded-full bg-primary/10 w-16 h-16 flex items-center justify-center">{icon}</div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
        <Button variant="link" className="mt-4 p-0 h-auto font-medium" onClick={handlePlay}>
          Oyna <ChevronRight className="ml-1 h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-background rounded-lg p-6 shadow-sm border transition-all hover:shadow-md">
      <div className="mb-4 rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center">{icon}</div>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  )
}
