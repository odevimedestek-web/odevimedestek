import { NextRequest, NextResponse } from "next/server";

interface Message {
  role: "user" | "assistant";
  content: string;
}

function getReply(messages: Message[]): string {
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
      return "SPSS analizi kapsamında frekans, güvenilirlik, korelasyon, regresyon, t-testi, ANOVA ve faktör analizi gibi tüm istatistiksel testleri yapıyoruz. Verilerinizi bize iletmeniz yeterli. Hangi seviyede bir çalışma bu, lisans mı yüksek lisans mı?";
    }
    return "SPSS analizi konusunda size yardımcı olabiliriz. Çalışmanız hangi seviyede — lisans, yüksek lisans yoksa doktora mı?";
  }

  if (/tez/.test(lastMsg)) {
    if (/doktora/.test(allUserText)) {
      return "Doktora tezi konusunda konu belirleme, literatür tarama, yöntem bölümü, analiz ve yazım desteği veriyoruz. Detaylı bilgi için WhatsApp üzerinden görüşelim mi?\n\nhttps://wa.me/905384164676";
    }
    if (/yüksek.*lisans|yükseklisans|yl/.test(allUserText)) {
      return "Yüksek lisans tezi için kapsamlı destek sağlıyoruz — konu belirleme, literatür, yöntem, analiz ve yazım dahil. Konunuz belli mi, hangi alanda çalışıyorsunuz?";
    }
    return "Tez danışmanlığı hizmetimiz var. Ön lisanstan doktoraya kadar her seviyede destek veriyoruz. Hangi seviyede bir tez çalışmanız var?";
  }

  if (/makale|yayın|dergi|article/.test(lastMsg)) {
    return "Ulusal ve uluslararası dergilere uygun formatta makale hazırlama desteği veriyoruz. Yayın sürecinde de yardımcı oluyoruz. Hangi alanda bir makale düşünüyorsunuz?";
  }

  if (/editör|düzelt|düzenle|yazım|dil\s*bilgisi|biçim/.test(lastMsg)) {
    return "Editörlük hizmetimizle akademik yazım kurallarına uygunluk, dil bilgisi düzeltme ve biçimlendirme yapıyoruz. Elinizde hazır bir metin var mı?";
  }

  if (/intihal|turnitin|benzerlik|özgünlük|plagiarism/.test(lastMsg)) {
    return "Turnitin ile intihal kontrolü yapıyoruz. Benzerlik oranını düşürmek için kaynak düzenleme ve akademik yazım iyileştirme desteği de veriyoruz. Çalışmanızın benzerlik oranı şu an ne durumda?";
  }

  if (/sunum|powerpoint|ppt|slayt|savunma/.test(lastMsg)) {
    return "Tez savunması, konferans ve seminer sunumlarınız için profesyonel PowerPoint tasarımı yapıyoruz. Kaç slaytlık bir sunum düşünüyorsunuz?";
  }

  if (/lisans|ön\s*lisans|önlisans/.test(lastMsg)) {
    return "Ön lisans ve lisans düzeyinde ödev, proje ve bitirme tezi desteği sağlıyoruz. Ne tür bir çalışmanız var?";
  }

  if (/doktora/.test(lastMsg)) {
    return "Doktora düzeyinde tez, makale ve analiz desteği veriyoruz. Hangi aşamadasınız — konu mu belirliyorsunuz yoksa yazım aşamasında mısınız?";
  }

  if (/yüksek.*lisans|yl|master/.test(lastMsg)) {
    return "Yüksek lisans düzeyinde tez, makale ve SPSS desteği veriyoruz. Tezli mi tezsiz mi yüksek lisans yapıyorsunuz?";
  }

  if (/süre|ne.*zaman|teslim|deadline|acil/.test(lastMsg)) {
    return "Teslim süresi çalışmanın kapsamına göre değişiyor. Acil talepler için de çözüm üretiyoruz. Detayları WhatsApp üzerinden konuşalım mı?\n\nhttps://wa.me/905384164676";
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
    return "Hizmetlerimiz:\n• SPSS ve veri analizi\n• Tez danışmanlığı (ön lisans — doktora)\n• Makale yazımı\n• Editörlük ve düzeltme\n• Turnitin özgünlük kontrolü\n• Sunum hazırlama\n\nHangi konuda destek almak istiyorsunuz?";
  }

  if (/güvenli|gizli|paylaş|kimse/.test(lastMsg)) {
    return "Tüm çalışmalar ve kişisel bilgileriniz kesinlikle gizli tutulur. Hiçbir şekilde üçüncü kişilerle paylaşılmaz, bu konuda garanti veriyoruz.";
  }

  if (/revizyon|düzeltme|değişiklik/.test(lastMsg)) {
    return "Teslim sonrası gerekli revizyonlar ek ücret olmaksızın yapılır. Memnuniyetiniz bizim için önemli.";
  }

  // Genel yanıt
  if (messages.filter((m) => m.role === "user").length <= 1) {
    return "Anlıyorum. Size en iyi şekilde yardımcı olmak istiyoruz. Tez, makale, SPSS analizi veya editörlük konularından hangisiyle ilgileniyorsunuz?";
  }

  return "Bu konuda sizi uzmanımızla görüştürmek isterim. WhatsApp üzerinden detaylı bilgi alabilirsiniz, ilk görüşme ücretsizdir.\n\nhttps://wa.me/905384164676";
}

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();
    const reply = getReply(messages);
    return NextResponse.json({ reply });
  } catch {
    return NextResponse.json({
      reply:
        "Bir sorun oluştu. WhatsApp üzerinden bize ulaşabilirsiniz: https://wa.me/905384164676",
    });
  }
}
