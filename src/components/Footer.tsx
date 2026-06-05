import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold-400 to-gold-300 flex items-center justify-center text-navy-900 font-bold text-lg shadow-md">
                ÖD
              </div>
              <span className="text-xl font-bold">Ödevime Destek</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Akademik danışmanlık ve profesyonel destek hizmetleri. 5 yıllık
              deneyimimizle yanınızdayız.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-5">Hizmetler</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>SPSS Analizi</li>
              <li>Tez Danışmanlığı</li>
              <li>Makale Yazımı</li>
              <li>Editörlük</li>
              <li>Özgünlük Kontrolü</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-5">Hızlı Linkler</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#hizmetler" className="text-slate-400 hover:text-gold-400 transition-colors">Hizmetler</a></li>
              <li><a href="#surec" className="text-slate-400 hover:text-gold-400 transition-colors">Nasıl Çalışıyoruz</a></li>
              <li><a href="#hakkimizda" className="text-slate-400 hover:text-gold-400 transition-colors">Hakkımızda</a></li>
              <li><a href="#sss" className="text-slate-400 hover:text-gold-400 transition-colors">SSS</a></li>
              <li><a href="#iletisim" className="text-slate-400 hover:text-gold-400 transition-colors">İletişim</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-5">İletişim</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <a href="https://wa.me/905384164676" target="_blank" rel="noopener noreferrer" className="hover:text-gold-400 transition-colors">
                  0538 416 46 76
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/odevime_destek/" target="_blank" rel="noopener noreferrer" className="hover:text-gold-400 transition-colors">
                  @odevime_destek
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/akademik_spss_uzmani/" target="_blank" rel="noopener noreferrer" className="hover:text-gold-400 transition-colors">
                  @akademik_spss_uzmani
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Ödevime Destek. Tüm hakları saklıdır.
          </span>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link href="/gizlilik" className="text-slate-500 hover:text-gold-400 transition-colors">Gizlilik Politikası</Link>
            <Link href="/kullanim-sartlari" className="text-slate-500 hover:text-gold-400 transition-colors">Kullanım Şartları</Link>
            <Link href="/iade-politikasi" className="text-slate-500 hover:text-gold-400 transition-colors">İade Politikası</Link>
            <Link href="/guvenlik" className="text-slate-500 hover:text-gold-400 transition-colors">Güvenlik</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
