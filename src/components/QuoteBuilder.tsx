"use client";

import { useId, useState } from "react";

const needs = ["SPSS analiz danışmanlığı", "Mevcut analizlerin kontrolü", "Tez biçimlendirme", "Kapsamı birlikte belirleyelim"];
const fieldClass = "mt-2 block w-full min-w-0 rounded-lg border border-slate-500 bg-navy-900 px-3 py-3 text-white focus:outline-none focus:ring-2 focus:ring-gold-400";

export default function QuoteBuilder({ initialNeed = needs[0] }: { initialNeed?: string }) {
  const id = useId();
  const [need, setNeed] = useState(initialNeed);
  const [level, setLevel] = useState("Henüz belirtmedim");
  const [stage, setStage] = useState("Kapsamı birlikte belirleyelim");
  const [timing, setTiming] = useState("Takvimim esnek");
  const [note, setNote] = useState("");
  const message = [
    "Merhaba, ücretsiz ön görüşme ve kapsam bilgisi almak istiyorum.",
    `İhtiyacım: ${need}`, `Çalışma türü: ${level}`, `Mevcut durum: ${stage}`,
    `Zamanlama: ${timing}`, ...(note.trim() ? [`Kısa not: ${note.trim()}`] : []),
  ].join("\n");

  return (
    <section id="teklif-hazirla" aria-labelledby={`${id}-title`} className="scroll-mt-24 rounded-2xl border border-gold-400/40 bg-slate-800/60 p-5 sm:p-8 space-y-5">
      <div>
        <p className="text-gold-400 text-sm font-semibold">Ücretsiz ön görüşme</p>
        <h2 id={`${id}-title`} className="!mt-2">İhtiyacınızı seçin, mesajınız hazır olsun</h2>
        <p>Bildiklerinizi seçmeniz yeterli. Seçimlerinizden oluşan mesajı WhatsApp’ta inceleyip kendiniz gönderebilirsiniz.</p>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <label htmlFor={`${id}-need`} className="block min-w-0 font-medium text-white">Hangi konuda destek istiyorsunuz?
          <select id={`${id}-need`} className={fieldClass} value={need} onChange={e=>setNeed(e.target.value)}>{needs.map(x=><option key={x}>{x}</option>)}</select>
        </label>
        <label htmlFor={`${id}-level`} className="block min-w-0 font-medium text-white">Çalışma türünüz
          <select id={`${id}-level`} className={fieldClass} value={level} onChange={e=>setLevel(e.target.value)}>{["Henüz belirtmedim", "Lisans", "Yüksek lisans", "Doktora", "Uzmanlık tezi", "Makale", "Proje"].map(x=><option key={x}>{x}</option>)}</select>
        </label>
        <label htmlFor={`${id}-stage`} className="block min-w-0 font-medium text-white">Şu an hangi aşamadasınız?
          <select id={`${id}-stage`} className={fieldClass} value={stage} onChange={e=>setStage(e.target.value)}>{["Kapsamı birlikte belirleyelim", "Araştırmamı planlıyorum", "Veri topluyorum", "Verim hazır, analiz gerekiyor", "Analizlerim var, kontrol gerekiyor", "Metnim hazır, biçimlendirme gerekiyor"].map(x=><option key={x}>{x}</option>)}</select>
        </label>
        <label htmlFor={`${id}-timing`} className="block min-w-0 font-medium text-white">Zamanlama ihtiyacınız
          <select id={`${id}-timing`} className={fieldClass} value={timing} onChange={e=>setTiming(e.target.value)}>{["Takvimim esnek", "Bir hafta içinde desteğe ihtiyacım var", "Bir ay içinde desteğe ihtiyacım var", "Tarihi görüşmede paylaşacağım"].map(x=><option key={x}>{x}</option>)}</select>
        </label>
      </div>
      <label htmlFor={`${id}-note`} className="block font-medium text-white">Eklemek istediğiniz kısa not (isteğe bağlı)
        <textarea id={`${id}-note`} value={note} onChange={e=>setNote(e.target.value)} maxLength={600} rows={3} className={fieldClass} placeholder="Örneğin: İki ölçeğim var, danışmanım analizlerin kontrolünü istedi." aria-describedby={`${id}-privacy`} />
      </label>
      <p id={`${id}-privacy`} className="text-sm text-slate-300">Buraya katılımcı bilgisi veya araştırma verisi yazmayın. Bu alanlar siteye kaydedilmez; düğmeye bastığınızda mesaj taslağı WhatsApp’a aktarılır. Seçtiğiniz zamanlama bir teslim taahhüdü değildir.</p>
      <details className="rounded-lg border border-slate-600 p-4">
        <summary className="cursor-pointer text-gold-400 font-medium">Hazırlanan mesajı göster</summary>
        <p className="mt-3 whitespace-pre-wrap break-words text-sm">{message}</p>
      </details>
      <a href={`https://wa.me/905384164676?text=${encodeURIComponent(message)}`} target="_blank" rel="noopener noreferrer" className="inline-flex w-full sm:w-auto justify-center rounded-xl bg-gold-400 px-6 py-4 text-center font-bold text-navy-900 hover:bg-gold-300 focus:outline-none focus:ring-2 focus:ring-white">Talebimi WhatsApp’ta aç</a>
      <p className="text-sm">Kesin kapsam, ücret ve takvim ön görüşmede belirlenir. <a href="/gizlilik" className="text-gold-400 underline">Gizlilik Politikası</a></p>
    </section>
  );
}
