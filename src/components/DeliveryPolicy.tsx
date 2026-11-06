import Link from "next/link";
import { servicePolicy } from "@/lib/service-policy";
export default function DeliveryPolicy() {
  return <section id="teslim-revizyon" className="rounded-xl border border-slate-600 p-5 sm:p-6">
    <h2 className="!mt-0">Son kontrol ve ücretsiz revizyon</h2>
    <p>{servicePolicy.preview}</p>
    <p className="mt-4">{servicePolicy.revision}</p>
    <p className="mt-4 text-sm"><Link href="/kullanim-sartlari" className="text-gold-300 underline">Teslim ve çalışma koşulları</Link> · <Link href="/ornek-calismalar" className="text-gold-300 underline">Temsili değerlendirme örneklerini görün</Link></p>
  </section>;
}
