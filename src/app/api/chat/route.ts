import { servicePolicy } from "@/lib/service-policy";
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

  if (/revizyon|düzeltme|değişiklik/.test(lastMsg)) return servicePolicy.revision;
  if (/gizli|güvenli|paylaş|silin|siliyo|sakla/.test(lastMsg)) return servicePolicy.privacy + " " + servicePolicy.deletion + " " + servicePolicy.report;
  if (/teslim|deadline/.test(lastMsg)) return servicePolicy.preview;

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
    return "SPSS analizi konusunda size yardımcı olabiliriz. Çalışmanız hangi seviyede: lisans, yüksek lisans, doktora?";
  }

  if (/tez/.test(lastMsg)) {
    if (/doktora/.test(allUserText)) {
      return "Doktora tezinde konu belirleme, literatür tarama, yöntem ve analiz aşamalarında destek alabilirsiniz. Ayrıntıları WhatsApp'tan konuşalım mı?\n\nhttps://wa.me/905384164676";
    }
    if (/yüksek.*lisans|yükseklisans|yl/.test(allUserText)) {
      return "Yüksek lisans tezinde konu, literatür, yöntem ve analiz aşamalarında destek veriyoruz. Konunuz belli mi, hangi alanda çalışıyorsunuz?";
    }
    return "Tez danışmanlığı hizmetimiz var. Ön lisanstan doktoraya kadar her seviyede destek veriyoruz. Hangi seviyede bir tez çalışmanız var?";
  }

  if (/makale|yayın|dergi|article/.test(lastMsg)) {
    return "Dergi seçimi, yazım kuralları ve hakem süreci için destek alabilirsiniz. Hangi alanda bir makale düşünüyorsunuz?";
  }

  if (/editör|düzelt|düzenle|yazım|dil\s*bilgisi|biçim/.test(lastMsg)) {
    return "Editörlük hizmetimizle akademik yazım kurallarına uygunluk, dil bilgisi düzeltme ve biçimlendirme yapıyoruz. Elinizde hazır bir metin var mı?";
  }

  if (/intihal|turnitin|benzerlik|özgünlük|plagiarism/.test(lastMsg)) {
    return "Atıf, alıntı kuralları ve kaynakça düzeninde yardımcı oluyoruz. Akademik dürüstlük kurallarına aykırı talepleri kabul etmiyoruz. Hangi yazım kılavuzunu kullanıyorsunuz?";
  }

  if (/sunum|powerpoint|ppt|slayt|savunma/.test(lastMsg)) {
    return "Tez savunması, konferans ve seminer sunumlarınızın düzeni ve tasarımı için destek veriyoruz. Kaç slaytlık bir sunum düşünüyorsunuz?";
  }

  if (/lisans|ön\s*lisans|önlisans/.test(lastMsg)) {
    return "Ön lisans ve lisans düzeyinde proje ve bitirme tezi için de destek veriyoruz. Ne tür bir çalışmanız var?";
  }

  if (/doktora/.test(lastMsg)) {
    return "Doktorada tez, makale ve analiz için destek alabilirsiniz. Şu an hangi aşamadasınız, konu mu belirliyorsunuz yoksa yazıyor musunuz?";
  }

  if (/yüksek.*lisans|yl|master/.test(lastMsg)) {
    return "Yüksek lisansta tez, makale ve SPSS için destek veriyoruz. Tezli mi tezsiz mi yüksek lisans yapıyorsunuz?";
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
    return "Hizmetlerimiz:\n• SPSS ve veri analizi\n• Tez danışmanlığı (ön lisanstan doktoraya)\n• Makale danışmanlığı\n• Akademik editörlük\n• Kaynak gösterme ve APA\n• Sunum desteği\n\nLinkedIn sayfamız: https://www.linkedin.com/company/akademik-danismanlik-merkezi\n\nHangi konuda destek almak istiyorsunuz?";
  }


  if (/iade|para.*geri|memnun/.test(lastMsg)) {
    return "Danışmanlık hizmetimizden memnun kalmazsanız ödediğiniz ücretin tamamını iade ediyoruz. Talebinizi WhatsApp üzerinden yazılı olarak iletmeniz yeterli.";
  }


  // Genel yanıt
  if (messages.filter((m) => m.role === "user").length <= 1) {
    return "Anlıyorum. Size en iyi şekilde yardımcı olmak istiyoruz. Tez, makale, SPSS analizi veya editörlük konularından hangisiyle ilgileniyorsunuz?";
  }

  return "Bu konuda sizi uzmanımızla görüştürmek isterim. WhatsApp üzerinden detaylı bilgi alabilirsiniz, ilk görüşme ücretsizdir.\n\nhttps://wa.me/905384164676";
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    // Aşırı uzun veya bozuk istekleri işlemeden reddet.
    const messages: Message[] = Array.isArray(body?.messages)
      ? body.messages
          .slice(-30)
          .filter((m: unknown): m is Message => typeof (m as Message)?.content === "string")
          .map((m: Message) => ({ role: m.role === "assistant" ? "assistant" : "user", content: m.content.slice(0, 2000) }))
      : [];
    if (messages.length === 0) {
      return NextResponse.json({ reply: "Mesajınızı alamadık. WhatsApp üzerinden bize ulaşabilirsiniz: https://wa.me/905384164676" }, { status: 400 });
    }
    const userName = typeof body?.userName === "string" ? body.userName.slice(0, 80) : undefined;
    const selectedService = typeof body?.selectedService === "string" ? body.selectedService.slice(0, 120) : undefined;
    const reply = getReply(messages, userName, selectedService);
    return NextResponse.json({ reply });
  } catch {
    return NextResponse.json({
      reply:
        "Bir sorun oluştu. WhatsApp üzerinden bize ulaşabilirsiniz: https://wa.me/905384164676",
    });
  }
}
