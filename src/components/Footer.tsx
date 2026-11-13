import Image from "next/image";
import Link from "next/link";
import { hizmetSayfalari } from "@/lib/hizmetler";

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <Image src="/logo-odevime-destek.png" alt="Ödevime Destek" width={40} height={40} className="w-10 h-10 object-contain rounded-xl" />
              <span className="text-xl font-bold">Ödevime Destek</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Araştırma planlama, SPSS analizi, akademik editörlük ve tez biçimlendirme süreçlerinde danışmanlık.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-5">Hizmetler</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              {hizmetSayfalari.map((h) => (
                <li key={h.href}><Link href={h.href} className="hover:text-gold-400 transition-colors">{h.ad}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-5">Hızlı Linkler</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/ornek-calismalar" className="text-slate-400 hover:text-gold-400 transition-colors">Temsili Çalışma Örnekleri</Link></li>
              <li><Link href="/spss-analiz-ucretleri" className="text-slate-400 hover:text-gold-400 transition-colors">SPSS Ücret ve Kapsam</Link></li>
              <li><Link href="/tez-danismanligi-ucretleri" className="text-slate-400 hover:text-gold-400 transition-colors">Tez Danışmanlığı Ücretleri</Link></li>
              <li><Link href="/analiz" className="text-slate-400 hover:text-gold-400 transition-colors">Analiz Türleri</Link></li>
              <li><Link href="/rehber" className="text-slate-400 hover:text-gold-400 transition-colors">Akademik Rehberler</Link></li>
              <li><Link href="/hakkimizda" className="text-slate-400 hover:text-gold-400 transition-colors">Hakkımızda</Link></li>
              <li><Link href="/etik-ilkeler" className="text-slate-400 hover:text-gold-400 transition-colors">Etik İlkeler</Link></li>
              <li><Link href="/#sss" className="text-slate-400 hover:text-gold-400 transition-colors">Sık Sorulan Sorular</Link></li>
              <li><Link href="/iletisim" className="text-slate-400 hover:text-gold-400 transition-colors">İletişim</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-5">İletişim</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <a href="https://wa.me/905384164676" target="_blank" rel="noopener noreferrer" className="hover:text-gold-400 transition-colors">
                  WhatsApp: 0538 416 46 76
                </a>
              </li>
              <li>
                <a href="mailto:odevimedestek@gmail.com" className="hover:text-gold-400 transition-colors">
                  odevimedestek@gmail.com
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/akademik-danismanlik-merkezi" target="_blank" rel="noopener noreferrer" className="hover:text-gold-400 transition-colors">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 pb-20 sm:pb-0 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-sm text-slate-400">
            &copy; {new Date().getFullYear()} Ödevime Destek. Tüm hakları saklıdır.
          </span>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link href="/gizlilik" className="text-slate-400 hover:text-gold-400 transition-colors">Gizlilik Politikası</Link>
            <Link href="/kullanim-sartlari" className="text-slate-400 hover:text-gold-400 transition-colors">Kullanım Şartları</Link>
            <Link href="/iade-politikasi" className="text-slate-400 hover:text-gold-400 transition-colors">İade Politikası</Link>
            <Link href="/guvenlik" className="text-slate-400 hover:text-gold-400 transition-colors">Güvenlik</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
