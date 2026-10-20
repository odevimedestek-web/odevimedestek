import { NextRequest, NextResponse } from "next/server";

interface Message {
  role: "user" | "assistant";
  content: string;
}

function getReply(messages: Message[], userName?: string, selectedService?: string): string {
  const lastMsg = messages[messages.length - 1]?.content?.toLowerCase() || "";
  const allUserText = messages
    .filter((m) => m.role === "user")
    .map((m) => m.content.toLowerCase())
    .join(" ");

  if (/merhaba|selam|hey|naber|iyi günler|iyi akşamlar/.test(lastMsg)) {
    return "Merhaba! Hoş geldiniz. Tez, makale, SPSS analizi veya editörlük hizmetlerimiz hakkında bilgi almak ister misiniz?";
  }

  if (/fiyat|ücret|kaç.*tl|kaç.*lira|ne kadar|maliyet|bütçe/.test(lastMsg)) {
    return "Fiyat çalışmanın kapsamına göre değişiyor. Size en doğru bilgiyi verebilmemiz için WhatsApp üzerinden detayları konuşalım.\n\nhttps://wa.me/905384164676";
  }

  if (/spss|analiz|istatistik|veri|regresyon|korelasyon|anova|t-test|güvenilirlik|frekans|faktör/.test(lastMsg)) {
    if (/ne.*yapıyor|nasıl|nedir/.test(lastMsg)) {
      return "SPSS danışmanlığında frekans, güvenilirlik, korelasyon, regresyon, t-testi, ANOVA ve faktör analizi gibi testlerin seçimini ve yorumlanmasını adım adım anlatıyoruz. Hangi seviyede bir çalışma bu, lisans mı yüksek lisans mı?";
    }
    return "SPSS analizi konusunda size yardımcı olabiliriz. Çalışmanız hangi seviyede — lisans, yüksek lisans yoksa doktora mı?";
  }

  if (/tez/.test(lastMsg)) {
    if (/doktora/.test(allUserText)) {
      return "Doktora tezi konusunda konu belirleme, literatür tarama, yöntem planlama ve analiz konusunda rehberlik ediyoruz. Detaylı bilgi için WhatsApp üzerinden görüşelim mi?\n\nhttps://wa.me/905384164676";
    }
    if (/yüksek.*lisans|yükseklisans|yl/.test(allUserText)) {
      return "Yüksek lisans tezi için konu belirleme, literatür, yöntem ve analiz konularında rehberlik ediyoruz. Konunuz belli mi, hangi alanda çalışıyorsunuz?";
    }
    return "Tez danışmanlığı hizmetimiz var. Ön lisanstan doktoraya kadar her seviyede destek veriyoruz. Hangi seviyede bir tez çalışmanız var?";
  }

  if (/makale|yayın|dergi|article/.test(lastMsg)) {
    return "Dergi seçimi, yazım kuralları ve yayın süreci konusunda rehberlik ediyoruz. Hangi alanda bir makale düşünüyorsunuz?";
  }

  if (/editör|düzelt|düzenle|yazım|dil\s*bilgisi|biçim/.test(lastMsg)) {
    return "Editörlük hizmetimizle akademik yazım kurallarına uygunluk, dil bilgisi düzeltme ve biçimlendirme yapıyoruz. Elinizde hazır bir metin var mı?";
  }

  if (/intihal|turnitin|benzerlik|özgünlük|plagiarism/.test(lastMsg)) {
    return "Doğru atıf yapma, alıntı kuralları ve kaynakça düzenleme konusunda rehberlik ediyoruz. Akademik dürüstlük kurallarına aykırı talepleri kabul etmiyoruz. Hangi yazım kılavuzunu kullanıyorsunuz?";
  }

  if (/sunum|powerpoint|ppt|slayt|savunma/.test(lastMsg)) {
    return "Tez savunması, konferans ve seminer sunumlarınızın düzeni ve tasarımı için destek veriyoruz. Kaç slaytlık bir sunum düşünüyorsunuz?";
  }

  if (/lisans|ön\s*lisans|önlisans/.test(lastMsg)) {
    return "Ön lisans ve lisans düzeyinde proje ve bitirme tezi süreçlerinde rehberlik ediyoruz. Ne tür bir çalışmanız var?";
  }

  if (/doktora/.test(lastMsg)) {
    return "Doktora düzeyinde tez, makale ve analiz süreçlerinde rehberlik ediyoruz. Hangi aşamadasınız — konu mu belirliyorsunuz yoksa yazım aşamasında mısınız?";
  }

  if (/yüksek.*lisans|yl|master/.test(lastMsg)) {
    return "Yüksek lisans düzeyinde tez, makale ve SPSS konularında rehberlik ediyoruz. Tezli mi tezsiz mi yüksek lisans yapıyorsunuz?";
  }

  if (/süre|ne.*zaman|teslim|deadline|acil/.test(lastMsg)) {
    return "Süreç çalışmanın kapsamına göre değişiyor; görüşme takvimini birlikte belirliyoruz. Detayları WhatsApp üzerinden konuşalım mı?\n\nhttps://wa.me/905384164676";
  }

  if (/whatsapp|telefon|ara|iletişim|numara|ulaş/.test(lastMsg)) {
    return "Bize WhatsApp üzerinden hemen ulaşabilirsiniz. İlk görüşme tamamen ücretsizdir.\n\nhttps://wa.me/905384164676";
  }

  if (/teşekkür|sağol|eyvallah/.test(lastMsg)) {
    return "Rica ederim! Başka bir konuda yardımcı olabilir miyim? İstediğiniz zaman WhatsApp üzerinden de ulaşabilirsiniz.";
  }

  if (/güle|görüşürüz|hoşça|bay bay|bye/.test(lastMsg)) {
    return "İyi günler dilerim! İhtiyacınız olduğunda bize her zaman ulaşabilirsiniz.";
  }

  if (/hizmet|ne.*yapıyor|neler/.test(lastMsg)) {
    return "Hizmetlerimiz:\n• SPSS ve veri analizi\n• Tez danışmanlığı (ön lisans — doktora)\n• Makale danışmanlığı\n• Akademik editörlük\n• Kaynak gösterme ve APA\n• Sunum desteği\n\nWhatsApp kanalımız: https://whatsapp.com/channel/0029Vb9KOnH0Qeahcy0Ois2f\n\nHangi konuda destek almak istiyorsunuz?";
  }

  if (/güvenli|gizli|paylaş|kimse/.test(lastMsg)) {
    return "Tüm çalışmalar ve kişisel bilgileriniz kesinlikle gizli tutulur. Hiçbir şekilde üçüncü kişilerle paylaşılmaz, bu konuda garanti veriyoruz.";
  }

  if (/iade|para.*geri|memnun/.test(lastMsg)) {
    return "Danışmanlık hizmetimizden memnun kalmazsanız ödediğiniz ücretin tamamını iade ediyoruz. Talebinizi WhatsApp üzerinden yazılı olarak iletmeniz yeterli.";
  }

  if (/revizyon|düzeltme|değişiklik/.test(lastMsg)) {
    return "Hazırladığınız bölümler için geri bildirim görüşmeleri süreç boyunca devam eder.";
  }

  // Genel yanıt
  if (messages.filter((m) => m.role === "user").length <= 1) {
    return "Anlıyorum. Size en iyi şekilde yardımcı olmak istiyoruz. Tez, makale, SPSS analizi veya editörlük konularından hangisiyle ilgileniyorsunuz?";
  }

  return "Bu konuda sizi uzmanımızla görüştürmek isterim. WhatsApp üzerinden detaylı bilgi alabilirsiniz, ilk görüşme ücretsizdir.\n\nhttps://wa.me/905384164676";
}

export async function POST(req: NextRequest) {
  try {
    const { messages, userName, selectedService } = await req.json();
    const reply = getReply(messages, userName, selectedService);
    return NextResponse.json({ reply });
  } catch {
    return NextResponse.json({
      reply:
        "Bir sorun oluştu. WhatsApp üzerinden bize ulaşabilirsiniz: https://wa.me/905384164676",
    });
  }
}
