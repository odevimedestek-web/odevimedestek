export type AnalysisPage = {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  intro: string;
  waText: string;
  sections: { title: string; text: string; items?: string[] }[];
  faqs: { q: string; a: string }[];
  guides: string[];
  /** Varsayılan veri notunun yerine geçer (ör. yayımlanmış çalışmalarla yürüyen analizler). */
  note?: string;
  /** Teklif formunda seçili gelecek ihtiyaç. */
  need?: string;
};

export const analizler: AnalysisPage[] = [
  {
    slug: "faktor-analizi",
    title: "Faktör Analizi Danışmanlığı (AFA ve DFA)",
    seoTitle: "Faktör Analizi Danışmanlığı: AFA ve DFA",
    description: "Açımlayıcı ve doğrulayıcı faktör analizinde KMO, Bartlett, faktör sayısı, yük değerleri ve uyum indekslerinin yorumu.",
    intro: "Ölçek geliştiriyor, uyarlıyor ya da hazır bir ölçeğin yapısını kendi örnekleminizde sınıyorsanız faktör analizi çalışmanızın en çok soru getiren bölümü olabilir. Hangi analizin gerektiği, çıktıda nereye bakılacağı ve sonucun tabloya nasıl geçeceği görüşmemizin konusu.",
    waText: "Merhaba, faktör analizi (AFA/DFA) hakkında ön görüşme istiyorum.",
    sections: [
      {
        title: "AFA mı, DFA mı?",
        text: "Açımlayıcı faktör analizi (AFA), maddelerin kaç boyut altında toplandığını bilmediğiniz ya da yapıyı ilk kez incelediğiniz durumlarda kullanılır. Doğrulayıcı faktör analizi (DFA) ise önceden tanımlanmış bir yapının verinize uyup uymadığını sınar. Uyarlama çalışmalarında çoğu zaman DFA beklenir; yeni geliştirilen ölçeklerde AFA ile başlanıp farklı bir örneklemde DFA yapılması yaygındır. Hangisinin sizin çalışmanıza uyduğunu araştırma deseniniz ve danışmanınızın beklentisi belirler.",
      },
      {
        title: "AFA çıktısında nereye bakılır?",
        text: "SPSS çıktısı uzun; tabloları şu sırayla okumak işi kolaylaştırır.",
        items: [
          "KMO örneklem yeterliliği ve Bartlett küresellik testi.",
          "Faktör sayısına karar vermek için öz değerler, yamaç grafiği ve gerekirse paralel analiz.",
          "Döndürme yöntemi seçimi (dik ya da eğik) ve gerekçesi.",
          "Faktör yükleri, binişik maddeler ve maddeden çıkarma kararları.",
          "Açıklanan toplam varyans ve faktörlerin adlandırılması.",
        ],
      },
      {
        title: "DFA'da modeli ve uyumu yorumlama",
        text: "DFA'da yalnız uyum indekslerini listelemek yetmez; standartlaştırılmış yüklerin, hata varyanslarının ve varsa modifikasyon önerilerinin kuramsal olarak savunulabilir olması gerekir. χ²/sd, CFI, TLI, RMSEA ve SRMR değerlerini hangi ölçüte göre yorumladığınızı kaynağıyla yazarsanız jüride gelecek sorunun cevabı da hazır olur.",
      },
      {
        title: "Ön görüşmeye hazırlamanız gerekenler",
        text: "Analize başlamadan önce aşağıdakileri bir arada tutmanızı öneriyoruz.",
        items: [
          "Ölçek formu, madde numaraları ve ters puanlanan maddelerin listesi.",
          "Özgün ölçeğin boyut yapısı ve geliştirme çalışmasının künyesi.",
          "Veri dosyası ve örneklem büyüklüğü.",
          "Varsa mevcut çıktılar ve danışmanınızın notları.",
        ],
      },
    ],
    faqs: [
      { q: "Örneklemim faktör analizi için yeterli mi?", a: "Kaynaklarda madde başına katılımcı oranı ve mutlak örneklem büyüklüğü için farklı ölçütler önerilir. Ölçeğinizdeki madde sayısını ve veri dosyanızı görerek bu ölçütlerin sizin çalışmanızda nasıl gerekçelendirileceğini konuşuruz." },
      { q: "DFA için hangi program kullanılıyor?", a: "DFA genellikle AMOS gibi yapısal eşitlik modeli programlarında yapılır. Kurumunuzun veya danışmanınızın tercih ettiği programı ön görüşmede belirleriz." },
      { q: "Madde çıkarmak zorunda kalırsam ne yapmalıyım?", a: "Bu karar yalnız istatistiğe bakılarak verilmez, kuramsal yapı da hesaba katılır. Çıktınızda hangi maddenin neden sorun çıkardığına bakıp kararın raporda nasıl anlatılacağını konuşuruz." },
    ],
    guides: ["afa-kmo-bartlett", "dfa-uyum-indeksleri"],
  },
  {
    slug: "amos-yapisal-esitlik-modeli",
    title: "AMOS ve Yapısal Eşitlik Modeli (YEM) Danışmanlığı",
    seoTitle: "AMOS ve Yapısal Eşitlik Modeli Danışmanlığı",
    description: "AMOS ile ölçüm modeli, yapısal model, uyum indeksleri ve dolaylı etkilerin yorumlanması için danışmanlık. İlk görüşme ücretsiz.",
    intro: "Yapısal eşitlik modeli, birden fazla gizil değişken arasındaki ilişkileri aynı model içinde sınamanızı sağlar. Model çiziminden uyum değerlerine kadar her adımı gerekçesiyle yazmanız beklenir. Modeli kuramsal çerçevenizden kopmadan kuruyoruz.",
    waText: "Merhaba, AMOS ve yapısal eşitlik modeli hakkında ön görüşme istiyorum.",
    sections: [
      {
        title: "Önce ölçüm modeli, sonra yapısal model",
        text: "YEM çalışmalarında yaygın yaklaşım, önce her ölçeğin ölçüm modelini (DFA) sınamak, ardından değişkenler arası yolları içeren yapısal modele geçmektir. Ölçüm modeli kabul edilebilir değilse yapısal modelden elde edilen katsayılar da güvenilir yorumlanamaz. Bu sırayı raporunuzda açıkça göstermeniz önemlidir.",
      },
      {
        title: "Hangi konularda destek alabilirsiniz?",
        text: "Kapsam, çalışmanızın hangi aşamada olduğuna göre değişir.",
        items: [
          "Hipotezlerin yol diyagramına dönüştürülmesi.",
          "Uyum indekslerinin (χ²/sd, CFI, TLI, RMSEA, SRMR) yorumu.",
          "Modifikasyon önerilerinin kuramsal açıdan değerlendirilmesi.",
          "Birleşim ve ayırt edici geçerlik için AVE ve CR hesapları.",
          "Bootstrap ile dolaylı etkilerin sınanması.",
          "Model şeklinin ve tabloların raporlanması.",
        ],
      },
      {
        title: "Modifikasyon önerilerine dikkat",
        text: "AMOS'un önerdiği her hata kovaryansını eklemek uyumu yükseltir ama modeli kuramsal olarak savunulmaz hâle getirebilir. Yalnız aynı boyuttaki, içerik olarak benzer maddeler arasında ve gerekçesi yazılabilen değişiklikler yapılmalıdır. Jüri ve hakemler bu kararları sık sorgular.",
      },
    ],
    faqs: [
      { q: "AMOS yerine başka program kullanabilir miyim?", a: "Yapısal eşitlik modeli farklı programlarla da kurulabilir. Danışmanınızın veya derginizin beklediği programı ön görüşmede netleştiririz." },
      { q: "Modelim uyum vermiyor, ne yapmalıyım?", a: "Önce ölçüm modellerini ayrı ayrı inceleyip sorunun hangi ölçekten ya da yoldan kaynaklandığını buluruz. Kuramsal gerekçesi olmayan değişikliklerle uyumu zorla yükseltmeyi önermeyiz." },
    ],
    guides: ["dfa-uyum-indeksleri", "araci-etki-process"],
  },
  {
    slug: "regresyon-analizi",
    title: "Regresyon Analizi Danışmanlığı",
    seoTitle: "Regresyon Analizi Danışmanlığı (SPSS)",
    description: "Basit, çoklu ve lojistik regresyonda varsayımlar, model özeti, katsayılar ve tablo raporlaması için SPSS danışmanlığı.",
    intro: "Regresyon analizi, bir ya da birden fazla değişkenin bir sonuç değişkenini ne ölçüde yordadığını gösterir. Çıktıda R², F testi ve katsayılar bir arada yer aldığı için hangi değerin hangi hipoteze cevap verdiğini karıştırmak kolaydır. Modelinizi araştırma sorularınızla eşleştirerek ilerliyoruz.",
    waText: "Merhaba, regresyon analizi hakkında ön görüşme istiyorum.",
    sections: [
      {
        title: "Hangi regresyon modeli?",
        text: "Bağımlı değişken sürekli ise doğrusal (basit veya çoklu) regresyon, iki kategorili ise lojistik regresyon düşünülür. Değişkenleri aşamalı olarak eklemek istiyorsanız hiyerarşik regresyon uygun olabilir. Model seçimi; değişkenlerin ölçek türüne, hipotezlerinize ve örneklem büyüklüğünüze göre yapılır.",
      },
      {
        title: "Çıktıda kontrol edilenler",
        text: "Bulguları yazmaya geçmeden önce şunlara bakılır:",
        items: [
          "Doğrusallık, artıkların normalliği ve eşit varyans varsayımları.",
          "Çoklu bağlantı (VIF ve tolerans değerleri).",
          "Uç değerler ve etkili gözlemler.",
          "Model özeti: R, R², düzeltilmiş R² ve F testi.",
          "Standartlaştırılmış ve standartlaştırılmamış katsayıların yorumu.",
          "Lojistik regresyonda odds oranları ve sınıflandırma tablosu.",
        ],
      },
      {
        title: "Korelasyon ile regresyonu karıştırmayın",
        text: "Korelasyon iki değişken arasındaki ilişkinin yönünü ve gücünü gösterir; regresyon ise bir değişkenin diğerini yordama düzeyini modeller. İkisi de neden-sonuç ilişkisini tek başına kanıtlamaz. Bulguları yazarken \"etkiler\" yerine \"yordar\" ya da \"ilişkilidir\" gibi ifadeleri desene uygun seçmek gerekir.",
      },
    ],
    faqs: [
      { q: "Kategorik değişkenleri regresyona nasıl eklerim?", a: "İkiden fazla kategorili değişkenler genellikle kukla (dummy) değişkenlere dönüştürülür. Hangi kategorinin referans alınacağı yorumu değiştirir; seçimi hipotezinize göre yaparız." },
      { q: "R² değerim düşük çıktı, analiz geçersiz mi?", a: "Düşük R² tek başına analizin geçersiz olduğu anlamına gelmez; alanın doğasına ve araştırma sorusuna göre yorumlanır. Bulguyu nasıl raporlayacağınızı ve sınırlılıklarda nasıl ele alacağınızı konuşuruz." },
    ],
    guides: ["normallik-testi-parametrik-secim", "spss-tablolari-apa-raporlama"],
  },
  {
    slug: "araci-ve-duzenleyici-etki-analizi",
    title: "Aracı ve Düzenleyici Etki Analizi Danışmanlığı",
    seoTitle: "Aracı ve Düzenleyici Etki Analizi (PROCESS)",
    description: "PROCESS makrosu ile aracı (mediation) ve düzenleyici (moderation) etki modellerinde bootstrap, dolaylı etki ve etkileşim yorumu.",
    intro: "Hipotezleriniz \"X, Y'yi M aracılığıyla etkiler\" ya da \"X ile Y arasındaki ilişki W'ye göre değişir\" biçimindeyse aracı veya düzenleyici etki analizi gerekir. Bu analizlerde hangi modelin seçildiği ve dolaylı etkinin nasıl sınandığı, sonuçların kabul edilmesinde belirleyicidir.",
    waText: "Merhaba, aracı/düzenleyici etki analizi hakkında ön görüşme istiyorum.",
    sections: [
      {
        title: "Aracı ve düzenleyici etki arasındaki fark",
        text: "Aracı değişken, bağımsız değişkenin sonuca hangi yolla ulaştığını açıklar. Düzenleyici değişken ise iki değişken arasındaki ilişkinin gücünü ya da yönünü değiştirir. Bir değişkenin hangi rolü üstlendiği istatistikle değil, kuramsal çerçeveyle belirlenir.",
      },
      {
        title: "Analiz sürecinde ele aldığımız adımlar",
        text: "Çalışmalarda en çok PROCESS makrosu kullanılır; yine de program seçimi danışmanınızın beklentisine göre yapılır.",
        items: [
          "Hipotezlere uygun PROCESS model numarasının seçilmesi (ör. basit aracılık için Model 4, düzenleyicilik için Model 1).",
          "Bootstrap güven aralığıyla dolaylı etkinin sınanması.",
          "Doğrudan, dolaylı ve toplam etkilerin ayrı ayrı yorumlanması.",
          "Düzenleyici etkide etkileşim terimi ve basit eğim analizi.",
          "Sonuçların tablo ve model şekliyle raporlanması.",
        ],
      },
      {
        title: "Klasik adımlar ile bootstrap yaklaşımı",
        text: "Baron ve Kenny'nin (1986) adım adım yaklaşımı hâlâ çok atıf alıyor. Güncel çalışmalarda ise dolaylı etkinin bootstrap güven aralığıyla doğrudan sınanması öne çıkıyor. Hangi yaklaşımı kullandığınızı ve gerekçesini yöntem bölümünde açıkça belirtmeniz gerekir.",
      },
    ],
    faqs: [
      { q: "Birden fazla aracı değişkenim var, aynı modelde sınanabilir mi?", a: "Paralel ya da sıralı aracılık modelleriyle sınanabilir. Hangisinin uygun olduğu araştırma modelinizin şeklinden anlaşılır." },
      { q: "Dolaylı etki anlamlı, doğrudan etki anlamsız çıktı. Bu ne demek?", a: "Bu tablo genellikle tam aracılık olarak yorumlanır. Yine de örneklem büyüklüğünü ve kuramsal beklentiyi hesaba katmadan bu sonuca varılmaz. Raporda nasıl ifade edeceğinizi görüşmede konuşuruz." },
    ],
    guides: ["araci-etki-process"],
  },
  {
    slug: "t-testi-ve-anova",
    title: "t-Testi, ANOVA ve Fark Testleri Danışmanlığı",
    seoTitle: "t-Testi ve ANOVA Danışmanlığı (SPSS)",
    description: "Bağımsız ve eşleştirilmiş t-testi, ANOVA, Mann-Whitney U ve Kruskal-Wallis testlerinde seçim, varsayım ve post hoc yorumu.",
    intro: "Gruplar arasında fark olup olmadığını sınamak tez ve makalelerde en sık yapılan analizlerdendir. Doğru test ise grup sayısına, ölçümün türüne ve verinin dağılımına göre değişir. Amaç, seçtiğiniz testi gerekçesiyle anlatabilmeniz.",
    waText: "Merhaba, t-testi/ANOVA analizleri hakkında ön görüşme istiyorum.",
    sections: [
      {
        title: "Doğru fark testini seçmek",
        text: "Seçimde üç soruya cevap vermek gerekir: Kaç grup karşılaştırılıyor, gruplar bağımsız mı yoksa aynı kişilerden mi oluşuyor ve veri parametrik testlerin varsayımlarını karşılıyor mu?",
        items: [
          "İki bağımsız grup: bağımsız örneklemler t-testi ya da Mann-Whitney U.",
          "Aynı grubun iki ölçümü: eşleştirilmiş örneklemler t-testi ya da Wilcoxon.",
          "Üç ve daha fazla bağımsız grup: tek yönlü ANOVA ya da Kruskal-Wallis.",
          "Tekrarlı ölçümler: tekrarlı ölçümler ANOVA ya da Friedman.",
        ],
      },
      {
        title: "Varsayımlar ve post hoc testler",
        text: "Parametrik testlerden önce normallik ve varyansların homojenliği (Levene testi) incelenir. ANOVA anlamlı çıktığında farkın hangi gruplardan kaynaklandığını görmek için varyanslar eşitse Tukey ya da Scheffé, eşit değilse Games-Howell gibi post hoc testler kullanılır. Etki büyüklüğünü (Cohen's d, eta kare) raporlamak da beklentiler arasındadır.",
      },
      {
        title: "Bulguyu yazarken",
        text: "Tabloda grup ortalamaları ve standart sapmaların yanında test istatistiği, serbestlik derecesi ve p değeri yer almalıdır. Metinde ise yalnız anlamlılığı değil, farkın yönünü de belirtin: hangi grubun ortalaması daha yüksek?",
      },
    ],
    faqs: [
      { q: "Örneklemim küçük, parametrik test kullanabilir miyim?", a: "Küçük örneklemlerde normallik varsayımını dikkatle incelemek gerekir. Varsayım karşılanmıyorsa parametrik olmayan karşılığı daha kolay savunulur. Kararı verinize bakarak veririz." },
      { q: "ANOVA anlamlı, post hoc testte fark çıkmadı. Ne yazmalıyım?", a: "Bu durum özellikle sınırda p değerlerinde görülebilir. Bulguyu olduğu gibi raporlayıp temkinli yorumlamak gerekir. Cümlenin nasıl kurulacağı çıktınıza bağlı." },
    ],
    guides: ["normallik-testi-parametrik-secim", "spss-tablolari-apa-raporlama"],
  },
  {
    slug: "olcek-gecerlik-guvenirlik",
    title: "Ölçek Geçerlik ve Güvenirlik Analizi Danışmanlığı",
    seoTitle: "Ölçek Geçerlik ve Güvenirlik Analizi",
    description: "Cronbach alfa, madde-toplam korelasyonu, AFA/DFA, birleşim ve ayırt edici geçerlik ile ölçek uyarlama analizlerinde danışmanlık.",
    intro: "Ölçek geliştirme ya da uyarlama çalışmasında, ölçeğin ne ölçtüğünü (geçerlik) ve bunu ne kadar tutarlı ölçtüğünü (güvenirlik) göstermeniz gerekir. Hangi kanıtların toplanacağını ve nasıl raporlanacağını çalışmanızın amacına göre planlıyoruz.",
    waText: "Merhaba, ölçek geçerlik ve güvenirlik analizi hakkında ön görüşme istiyorum.",
    sections: [
      {
        title: "Güvenirlik için bakılan değerler",
        text: "En yaygın gösterge Cronbach alfa katsayısıdır. Yanında madde-toplam korelasyonları, madde silindiğinde alfa değeri ve gerekiyorsa test-tekrar test ya da McDonald omega gibi ek kanıtlar raporlanır. Alfa değerini yorumlamadan önce ters puanlanan maddelerin dönüştürüldüğünden emin olunmalıdır.",
      },
      {
        title: "Geçerlik kanıtları",
        text: "Geçerlik tek bir sayıyla gösterilmez; farklı kanıtların birleşimidir.",
        items: [
          "Kapsam geçerliği için uzman görüşleri (ör. Lawshe yöntemi).",
          "Yapı geçerliği için açımlayıcı ve doğrulayıcı faktör analizi.",
          "Birleşim ve ayırt edici geçerlik için AVE, CR ve korelasyon karşılaştırmaları.",
          "Ölçüt geçerliği için benzer ölçeklerle ilişkiler.",
        ],
      },
      {
        title: "Uyarlama çalışmalarında ek adımlar",
        text: "Başka dilden uyarlanan ölçeklerde çeviri-geri çeviri süreci, dil eşdeğerliği ve özgün yapının yeni örneklemde sınanması beklenir. Bu adımlar yöntem bölümünde sırasıyla anlatılmalıdır.",
      },
    ],
    faqs: [
      { q: "Alfa değerim .60 çıktı, ölçeği kullanabilir miyim?", a: "Kabul sınırları alana ve ölçeğin amacına göre tartışılır; madde sayısı da alfayı etkiler. Değerin nasıl yorumlanacağı ve sınırlılıklarda nasıl yazılacağı çalışmanıza göre değişir." },
      { q: "Ölçek kullanım izni gerekli mi?", a: "Birçok ölçek için geliştiren ya da uyarlayan yazardan izin istenir. İzin süreci size aittir; ön görüşmede hangi belgelerin gerektiğini hatırlatırız." },
    ],
    guides: ["cronbach-alfa-yorumlama", "afa-kmo-bartlett"],
  },
  {
    slug: "korelasyon-ve-ki-kare-analizi",
    title: "Korelasyon ve Ki-Kare Analizi Danışmanlığı",
    seoTitle: "Korelasyon ve Ki-Kare Analizi (SPSS)",
    description: "Pearson ve Spearman korelasyonu ile ki-kare bağımsızlık testinde test seçimi, varsayımlar, etki büyüklüğü ve raporlama desteği.",
    intro: "İki değişken arasında ilişki olup olmadığını sınarken değişkenlerin türü testi belirler. Sürekli değişkenlerde korelasyon, kategorik değişkenlerde ki-kare testi kullanılır. Hangi katsayının ne söylediğini ve tabloya nasıl yazılacağını çıktınız üzerinden ele alıyoruz.",
    waText: "Merhaba, korelasyon/ki-kare analizi hakkında ön görüşme istiyorum.",
    sections: [
      {
        title: "Pearson mı, Spearman mı?",
        text: "Pearson korelasyonu iki sürekli değişken arasındaki doğrusal ilişkiyi ölçer ve normallik varsayımı ister. Sıralı veride ya da normallik karşılanmadığında Spearman sıra korelasyonu tercih edilir. Katsayının yönü (+/−) ilişkinin yönünü, büyüklüğü ise gücünü gösterir.",
      },
      {
        title: "Ki-kare testinde dikkat edilecekler",
        text: "Ki-kare bağımsızlık testi iki kategorik değişken arasındaki ilişkiyi sınar.",
        items: [
          "Beklenen değeri 5'in altında kalan hücre oranı kontrol edilmelidir.",
          "2x2 tablolarda gerekirse Fisher'in kesin testi kullanılır.",
          "İlişkinin gücü için phi ya da Cramer's V raporlanır.",
          "Tabloda sayıların yanında satır veya sütun yüzdeleri verilir.",
        ],
      },
      {
        title: "İlişki neden-sonuç değildir",
        text: "Anlamlı bir korelasyon ya da ki-kare sonucu, bir değişkenin diğerine yol açtığını göstermez. Bulguları yazarken ilişkiyi tanımlayan ifadeler kullanmak ve yorumu desene uygun tutmak gerekir.",
      },
    ],
    faqs: [
      { q: "Çok sayıda korelasyonu tek tabloda verebilir miyim?", a: "Evet, korelasyon matrisi yaygın bir raporlama biçimidir. Ortalama ve standart sapmaları da aynı tabloya koymak okuru rahatlatır. Düzen APA'ya göre kurulur." },
      { q: "Beklenen değer koşulu sağlanmıyorsa ne yapılır?", a: "Kategorileri anlamlı biçimde birleştirmek ya da kesin test kullanmak seçenekler arasındadır. Hangisinin araştırma sorunuzu bozmadığına verinize bakarak karar veririz." },
    ],
    guides: ["normallik-testi-parametrik-secim", "spss-tablolari-apa-raporlama"],
  },
  {
    slug: "nitel-veri-analizi",
    title: "Nitel Veri Analizi Danışmanlığı",
    seoTitle: "Nitel Veri Analizi: Tematik ve İçerik Analizi",
    description: "Görüşme ve doküman verilerinde kodlama, tema oluşturma, tematik ve içerik analizi ile bulguların raporlanması için danışmanlık.",
    intro: "Görüşme, odak grup ya da doküman verisiyle çalışıyorsanız analiz sürecinin şeffaf ve izlenebilir olması gerekir. Kodların nereden çıktığını, temalara nasıl varıldığını ve alıntıları neden seçtiğinizi anlatabilmeniz gerekir.",
    waText: "Merhaba, nitel veri analizi hakkında ön görüşme istiyorum.",
    sections: [
      {
        title: "Tematik analiz ve içerik analizi",
        text: "Tematik analiz, verideki anlam örüntülerini temalar hâlinde ortaya koyar. İçerik analizi ise belirli kategorilerin veride ne sıklıkla ve nasıl yer aldığına odaklanabilir. Hangi yaklaşımın seçildiği araştırma sorusuna ve nitel desene (olgubilim, durum çalışması vb.) bağlıdır.",
      },
      {
        title: "Analiz süreci",
        text: "Veriler toplanmış ve yazıya geçirilmiş olmalıdır; görüşme yapmak ya da veri toplamak hizmet kapsamında değildir.",
        items: [
          "Dökümlerin okunması ve ilk kodlama planı.",
          "Kod listesinin düzenlenmesi ve temalara gruplanması.",
          "Temaların gözden geçirilmesi, tanımlanması ve adlandırılması.",
          "Katılımcı alıntılarının seçimi ve kod numaralarıyla raporlanması.",
          "Kodlayıcılar arası uyum, uzman görüşü gibi inandırıcılık önlemlerinin anlatımı.",
        ],
      },
      {
        title: "Bulgular bölümünü yazarken",
        text: "Temaları bir tablo ya da şemayla sunup her temayı katılımcı alıntılarıyla desteklemek yaygın bir düzendir. Alıntılar, tema hakkında yazdıklarınızı göstermeli; temanın yerini almamalıdır.",
      },
    ],
    faqs: [
      { q: "Nitel analiz için program kullanmak zorunlu mu?", a: "Zorunlu değildir; MAXQDA veya NVivo gibi programlar kodlamayı düzenli tutmaya yardım eder. Hangi yolu izleyeceğinizi veri miktarınıza ve kurumunuzun beklentisine göre belirleriz." },
      { q: "Kaç görüşme yeterli?", a: "Nitel çalışmalarda yeterlilik, veri doygunluğu ve desenin gereklerine göre tartışılır. Kendi çalışmanızda bunu yöntem bölümünde nasıl gerekçelendireceğinizi görüşmede konuşuruz." },
    ],
    guides: ["tematik-analiz-adimlari"],
    need: "Kapsamı birlikte belirleyelim",
  },
  {
    slug: "cok-kriterli-karar-verme-ahp-topsis",
    title: "Çok Kriterli Karar Verme Danışmanlığı (AHP, TOPSIS, DEMATEL)",
    seoTitle: "AHP, TOPSIS ve DEMATEL Analizi Danışmanlığı",
    description: "AHP, TOPSIS, DEMATEL, ENTROPİ ve CRITIC yöntemlerinde kriter ağırlıkları, tutarlılık oranı, sıralama ve raporlama için danışmanlık.",
    intro: "Birden fazla kritere göre alternatifleri karşılaştırdığınız çalışmalarda (tedarikçi seçimi, yer seçimi, performans sıralaması gibi) çok kriterli karar verme yöntemleri kullanılır. Yöntem seçimi, ağırlıkların belirlenmesi ve sonuçların yorumu planlamanın ana başlıkları.",
    waText: "Merhaba, AHP/TOPSIS gibi çok kriterli karar verme analizleri hakkında ön görüşme istiyorum.",
    sections: [
      {
        title: "Hangi yöntem neye cevap verir?",
        text: "Bu yöntemlerin bir kısmı kriterlerin ağırlığını belirler, bir kısmı alternatifleri sıralar. Tezlerde çoğu zaman ikisi bir arada kullanılır: biri ağırlığı bulur, diğeri sıralar.",
        items: [
          "AHP: Uzman ikili karşılaştırmalarıyla kriter ağırlıklarını belirler; tutarlılık oranı hesaplanır.",
          "ENTROPİ ve CRITIC: Ağırlıkları uzman görüşü yerine verinin kendisinden hesaplar.",
          "TOPSIS: Alternatifleri ideal çözüme yakınlıklarına göre sıralar.",
          "DEMATEL: Kriterler arasındaki etki ilişkilerini ve neden-sonuç gruplarını ortaya koyar.",
        ],
      },
      {
        title: "Hangi adımlarda destek alabilirsiniz?",
        text: "Kapsam çalışmanın aşamasına göre belirlenir.",
        items: [
          "Kriterlerin ve alternatiflerin literatüre dayanarak tanımlanması.",
          "Uzman görüşü gerekiyorsa karşılaştırma formunun yapısı (formu uzmanlara siz uygularsınız).",
          "AHP'de tutarlılık oranının kontrolü ve tutarsız yanıtların ele alınması.",
          "Hesaplama adımlarının ve ara tabloların raporlanması.",
          "Duyarlılık analiziyle sıralamanın ne kadar sağlam olduğunun gösterilmesi.",
        ],
      },
      {
        title: "Raporda dikkat edilmesi gerekenler",
        text: "Hakemler bu çalışmalarda en çok yöntem seçiminin gerekçesini ve hesaplamaların izlenebilirliğini sorar. Karar matrisini, normalizasyon yöntemini ve ağırlıkları tablo olarak verirseniz okur sonuca nasıl varıldığını adım adım görebilir.",
      },
    ],
    faqs: [
      { q: "Kaç uzman görüşü gerekir?", a: "Kesin bir sayı yoktur; alanyazında farklı uygulamalar bulunur. Uzman sayısını ve seçim ölçütlerini yöntem bölümünde nasıl gerekçelendireceğinizi konuşuruz." },
      { q: "Farklı yöntemler farklı sıralama verirse ne olur?", a: "Bu durum sık görülür. Farkın nereden geldiğini açıklarsanız tartışma bölümüne de malzeme çıkar." },
    ],
    guides: ["ahp-topsis-nedir"],
    need: "Kapsamı birlikte belirleyelim",
  },
  {
    slug: "veri-zarflama-analizi",
    title: "Veri Zarflama Analizi (VZA) Danışmanlığı",
    seoTitle: "Veri Zarflama Analizi (VZA/DEA) Danışmanlığı",
    description: "VZA (DEA) ile etkinlik ölçümü: girdi-çıktı seçimi, CCR ve BCC modelleri, ölçek etkinliği, Malmquist endeksi ve raporlama.",
    intro: "Veri zarflama analizi, benzer işi yapan birimlerin (hastane, okul, banka şubesi, belediye gibi) birden fazla girdi ve çıktıyı aynı anda hesaba katarak ne kadar etkin çalıştığını ölçer. Sonucu en çok etkileyen şey girdi ve çıktıların seçimi, bu yüzden işe oradan başlıyoruz.",
    waText: "Merhaba, veri zarflama analizi (VZA) hakkında ön görüşme istiyorum.",
    sections: [
      {
        title: "VZA nasıl çalışır?",
        text: "Charnes, Cooper ve Rhodes'un (1978) geliştirdiği yöntem, en iyi performans gösteren birimlerden bir etkinlik sınırı oluşturur ve diğer birimleri bu sınıra olan uzaklıklarına göre değerlendirir. Etkin birimlerin skoru 1'dir; diğerleri için skor, ne kadar iyileşme gerektiğini gösterir.",
      },
      {
        title: "Model seçiminde karar verilecek konular",
        text: "Analize başlamadan önce şu sorulara cevap vermek gerekir:",
        items: [
          "Girdi yönelimli mi, çıktı yönelimli mi?",
          "Ölçeğe göre sabit getiri (CCR) mi, değişken getiri (BCC) mi?",
          "Birim sayısı, girdi ve çıktı sayısına göre yeterli mi?",
          "Birden fazla yıl varsa verimlilik değişimi için Malmquist endeksi gerekiyor mu?",
        ],
      },
      {
        title: "Sonuçların raporlanması",
        text: "Etkinlik skorlarının yanında etkin olmayan birimler için referans kümeleri ve hedef değerler raporlanır. Ölçek etkinliği, toplam etkinliğin teknik ve ölçek kaynaklı bölümlerini ayırmaya yardım eder.",
      },
    ],
    faqs: [
      { q: "Verileri ben mi toplamalıyım?", a: "Evet. Analiz, sizin derlediğiniz veya kamuya açık kaynaklardan aldığınız veri üzerinde yapılır. Hangi değişkenlerin uygun olduğuna ön görüşmede bakarız." },
      { q: "Negatif değerli değişkenler kullanılabilir mi?", a: "Klasik VZA modelleri pozitif değer ister. Negatif değerler için başka yaklaşımlar var; hangisinin uygun olduğu verinize bağlı." },
    ],
    guides: [],
    note: "Analiz, sizin derlediğiniz veri üzerinde yürütülür; veri toplama hizmeti verilmez. Çalışmanın yazarı sizsiniz.",
    need: "Kapsamı birlikte belirleyelim",
  },
  {
    slug: "panel-veri-analizi",
    title: "Panel Veri Analizi Danışmanlığı",
    seoTitle: "Panel Veri Analizi Danışmanlığı",
    description: "Panel veride sabit ve rassal etkiler, Hausman testi, yatay kesit bağımlılığı, panel birim kök ve eşbütünleşme testlerinde danışmanlık.",
    intro: "Aynı birimleri (ülke, şirket, il) birden fazla dönem boyunca izleyen çalışmalarda panel veri yöntemleri kullanılır. Doğru modeli seçmek için bir dizi ön testin sırayla yapılması ve her kararın gerekçelendirilmesi gerekir.",
    waText: "Merhaba, panel veri analizi hakkında ön görüşme istiyorum.",
    sections: [
      {
        title: "Model seçimi",
        text: "Havuzlanmış, sabit etkiler ve rassal etkiler modelleri arasındaki seçim F testi, Breusch-Pagan LM testi ve Hausman testi gibi sınamalarla yapılır. Ardından değişen varyans, otokorelasyon ve yatay kesit bağımlılığı incelenir; bu sorunlar varsa dirençli tahmin yöntemleri kullanılır.",
      },
      {
        title: "Model seçiminden sonra",
        text: "Araştırma sorunuza göre şu analizler de gerekebilir:",
        items: [
          "Yatay kesit bağımlılığı ve eğim homojenliği testleri.",
          "Birinci ve ikinci kuşak panel birim kök testleri.",
          "Panel eşbütünleşme testleri ve uzun dönem katsayıları.",
          "Panel nedensellik analizleri.",
          "Tabloların ve test sonuçlarının raporlanması.",
        ],
      },
      {
        title: "Program seçimi",
        text: "Panel veri analizleri farklı ekonometri programlarında yapılabilir. Danışmanınızın veya derginizin beklediği programı ön görüşmede netleştiririz.",
      },
    ],
    faqs: [
      { q: "Dengesiz panel verisi kullanılabilir mi?", a: "Birçok yöntem dengesiz panelle çalışabilir; bazı testler ise dengeli panel ister. Testler verinizin yapısına göre seçilir." },
      { q: "Kaç dönem ve kaç birim gerekir?", a: "Gereken büyüklük, kullanılacak yönteme bağlıdır. Zaman boyutu kısa ve birim sayısı fazla olan paneller ile tersi farklı yöntemler gerektirir." },
    ],
    guides: [],
    note: "Analiz, sizin derlediğiniz veri üzerinde yürütülür; veri toplama hizmeti verilmez. Çalışmanın yazarı sizsiniz.",
    need: "Kapsamı birlikte belirleyelim",
  },
  {
    slug: "zaman-serisi-analizi",
    title: "Zaman Serisi ve ARDL Analizi Danışmanlığı",
    seoTitle: "Zaman Serisi ve ARDL Analizi Danışmanlığı",
    description: "Birim kök testleri, ARDL sınır testi, eşbütünleşme, nedensellik, yapısal kırılma ve mevsimsellik analizlerinde danışmanlık.",
    intro: "Aynı değişkenin zaman içinde ölçüldüğü ekonomi, finans ve işletme çalışmalarında zaman serisi yöntemleri kullanılır. Serilerin durağanlık durumu hangi modelin seçileceğini belirlediği için analize bu adımdan başlıyoruz.",
    waText: "Merhaba, zaman serisi/ARDL analizi hakkında ön görüşme istiyorum.",
    sections: [
      {
        title: "Durağanlık ve model seçimi",
        text: "Birim kök testleri (ADF, PP, KPSS gibi) serilerin düzeyde mi yoksa farkı alındığında mı durağan olduğunu gösterir. Seriler farklı düzeylerde durağansa Pesaran, Shin ve Smith'in (2001) ARDL sınır testi yaklaşımı sık tercih edilir. Tüm seriler birinci farkta durağansa Johansen eşbütünleşme testi de seçenekler arasındadır.",
      },
      {
        title: "Analiz planında neler var?",
        text: "Plan hipotezlerinize göre kurulur; çoğu çalışmada şu başlıklar yer alır:",
        items: [
          "Birim kök testleri ve yapısal kırılmalı birim kök testleri.",
          "ARDL sınır testi, uzun ve kısa dönem katsayıları, hata düzeltme terimi.",
          "Granger ve Toda-Yamamoto nedensellik analizleri.",
          "Yapısal kırılma ve mevsimsellik incelemeleri.",
          "Tanı testleri: otokorelasyon, değişen varyans, CUSUM ve CUSUMSQ.",
        ],
      },
      {
        title: "Raporlama",
        text: "Test sonuçlarını tablo olarak verin ve her kararın hangi teste dayandığını yöntem bölümünde yazın. Hakem bir adımı sorarsa cevabı metinde bulur.",
      },
    ],
    faqs: [
      { q: "Kaç gözlem gerekir?", a: "Yöntem ve değişken sayısına göre değişir; kısa serilerde bazı testlerin gücü düşer. Uygun yaklaşım, elinizdeki veri aralığına göre seçilir." },
      { q: "Verileri nereden almalıyım?", a: "Veriyi siz derlersiniz; çoğu çalışmada resmî istatistik kurumlarının ve uluslararası kuruluşların açık veri tabanları kullanılır." },
    ],
    guides: [],
    note: "Analiz, sizin derlediğiniz veri üzerinde yürütülür; veri toplama hizmeti verilmez. Çalışmanın yazarı sizsiniz.",
    need: "Kapsamı birlikte belirleyelim",
  },
  {
    slug: "biyoistatistik-roc-sagkalim",
    title: "Biyoistatistik Danışmanlığı: ROC ve Sağkalım Analizi",
    seoTitle: "Biyoistatistik: ROC ve Sağkalım Analizi",
    description: "Tıpta uzmanlık ve sağlık bilimleri tezlerinde ROC analizi, kesim noktası, Kaplan-Meier, log-rank ve Cox regresyonu danışmanlığı.",
    intro: "Tıpta uzmanlık, hemşirelik ve sağlık bilimleri çalışmalarında tanı testlerinin başarısını ölçmek ya da olayın gerçekleşmesine kadar geçen süreyi incelemek için özel yöntemler kullanılır. Bu analizlerin varsayımlarını ve raporlama biçimini çalışmanız üzerinden ele alıyoruz.",
    waText: "Merhaba, biyoistatistik (ROC/sağkalım) analizi hakkında ön görüşme istiyorum.",
    sections: [
      {
        title: "ROC analizi ve kesim noktası",
        text: "ROC eğrisi, bir testin veya ölçümün hastayı hasta olmayandan ayırma başarısını gösterir. Eğri altındaki alan (AUC) bu başarının özetidir (Hanley ve McNeil, 1982). Kesim noktası belirlenirken duyarlılığa ve özgüllüğe aynı anda bakılır; Youden indeksi sık kullanılan ölçütlerdendir.",
      },
      {
        title: "Sağkalım analizi",
        text: "İzlem süresince olayın (ölüm, nüks, taburculuk gibi) ne zaman gerçekleştiğini inceleyen çalışmalarda sağkalım analizi kullanılır.",
        items: [
          "Kaplan-Meier yöntemiyle sağkalım eğrileri ve medyan sağkalım süresi (Kaplan ve Meier, 1958).",
          "Grupları karşılaştırmak için log-rank testi.",
          "Birden fazla değişkenin etkisini incelemek için Cox orantılı riskler regresyonu ve tehlike oranları (HR).",
          "Orantılı riskler varsayımının kontrolü.",
        ],
      },
      {
        title: "Tıpta uzmanlık tezlerinde sık sorulanlar",
        text: "Örneklem büyüklüğünün güç analiziyle gerekçelendirilmesi, etik kurul başvurusunda istatistik bölümünün yazılması ve bulguların tablolaştırılması bu çalışmalarda en çok destek istenen konulardır.",
      },
    ],
    faqs: [
      { q: "Retrospektif dosya verisiyle çalışıyorum, uygun mu?", a: "Evet, retrospektif verilerle de bu analizler yapılabilir. Eksik verinin ve izlem süresinin nasıl kodlandığına ön görüşmede bakarız." },
      { q: "Örneklem büyüklüğünü nasıl hesaplarım?", a: "Güç analiziyle hesaplanır. Ayrıntılar için örneklem büyüklüğü ve güç analizi sayfamıza bakabilirsiniz." },
    ],
    guides: ["orneklem-buyuklugu-hesaplama"],
  },
  {
    slug: "orneklem-buyuklugu-guc-analizi",
    title: "Örneklem Büyüklüğü ve G*Power Güç Analizi",
    seoTitle: "Örneklem Büyüklüğü ve G*Power Güç Analizi",
    description: "Tez önerisi ve etik kurul başvurusu için G*Power ile örneklem büyüklüğü hesabı: etki büyüklüğü, alfa, güç ve raporlama.",
    intro: "Tez önerisi ve etik kurul başvurusunda örneklem büyüklüğünün nasıl belirlendiği sorulur. Güç analizi bu sorunun en savunulabilir cevabıdır. Hesaplama türü planladığınız analize göre seçilir; sonucun yöntem bölümüne nasıl yazılacağı da en az hesap kadar önemli.",
    waText: "Merhaba, örneklem büyüklüğü/güç analizi hakkında ön görüşme istiyorum.",
    sections: [
      {
        title: "Güç analizi için gereken dört bilgi",
        text: "Örneklem büyüklüğü dört değer arasındaki ilişkiden hesaplanır. Bunlardan üçünü belirlediğinizde dördüncüsü bulunur.",
        items: [
          "Planlanan analiz (t-testi, ANOVA, korelasyon, regresyon, ki-kare vb.).",
          "Beklenen etki büyüklüğü: benzer çalışmalardan ya da pilot veriden alınır.",
          "Anlamlılık düzeyi (çoğunlukla α = .05).",
          "İstenen güç (çoğunlukla .80 veya .90).",
        ],
      },
      {
        title: "G*Power ile hesaplama",
        text: "G*Power, Faul ve arkadaşlarının (2007) tanıttığı ücretsiz bir programdır ve tez çalışmalarında en sık kullanılan araçtır. Yanlış test ailesi ya da analiz türü seçilirse çıkan sayı da yanlış olur. Bu yüzden hesap, analiz planınıza bakılarak yapılır.",
      },
      {
        title: "Yöntem bölümünde yazımı",
        text: "Hangi programla, hangi analiz için, hangi etki büyüklüğü, alfa ve güç değerleriyle hesaplama yaptığınızı ve etki büyüklüğünü nereden aldığınızı açıkça belirtin. Kayıp ihtimaline karşı örneklemi artırdıysanız bunu da yazın.",
      },
    ],
    faqs: [
      { q: "Etki büyüklüğünü bilmiyorsam ne yapmalıyım?", a: "Benzer çalışmalardan hesaplanabilir ya da Cohen'in küçük-orta-büyük sınıflaması gerekçesiyle kullanılabilir. Hangisinin daha kolay savunulacağı çalışmanıza göre değişir." },
      { q: "Ölçek geliştirme çalışmasında da güç analizi gerekir mi?", a: "Faktör analizi çalışmalarında örneklem genellikle farklı ölçütlerle gerekçelendirilir. Yöntem bölümünde hangi ölçütü kullanacağınızı konuşuruz." },
    ],
    guides: ["orneklem-buyuklugu-hesaplama", "etki-buyuklugu-raporlama"],
    need: "Kapsamı birlikte belirleyelim",
  },
  {
    slug: "bibliyometrik-analiz",
    title: "Bibliyometrik Analiz Danışmanlığı (VOSviewer, Biblioshiny)",
    seoTitle: "Bibliyometrik Analiz: VOSviewer, Biblioshiny",
    description: "Web of Science ve Scopus verisiyle bibliyometrik analiz: arama stratejisi, ortak yazarlık, ortak atıf, anahtar kelime ağları ve raporlama.",
    intro: "Bibliyometrik analiz, bir alandaki yayınları sayısal olarak inceleyerek en etkili yazarları, dergileri, ülkeleri ve araştırma eğilimlerini ortaya koyar. Arama sorgusundan ağ haritalarının yorumuna kadar her adımın tekrar edilebilir biçimde raporlanması gerekir.",
    waText: "Merhaba, bibliyometrik analiz hakkında ön görüşme istiyorum.",
    sections: [
      {
        title: "Analizin adımları",
        text: "Zupic ve Čater (2015) bibliyometrik çalışmaları araştırma tasarımı, veri derleme, analiz, görselleştirme ve yorum aşamalarıyla tanımlar.",
        items: [
          "Araştırma sorularının ve arama sorgusunun belirlenmesi.",
          "Veri tabanı seçimi ve kayıtların indirilmesi (Web of Science, Scopus).",
          "Yinelenen kayıtların ve yazar adı farklılıklarının temizlenmesi.",
          "Performans analizi: yıllara göre yayın, en çok atıf alan çalışmalar, dergiler.",
          "Bilim haritalama: ortak yazarlık, ortak atıf, bibliyografik eşleşme ve anahtar kelime ağları.",
        ],
      },
      {
        title: "Kullanılan araçlar",
        text: "VOSviewer ağ haritaları için, R tabanlı Bibliometrix paketi ve arayüzü Biblioshiny ise performans analizi ve tematik haritalar için yaygın olarak kullanılır. Hangisinin kullanılacağı sorularınıza bağlı.",
      },
      {
        title: "Yorumlama",
        text: "Haritayı koymak yetmez. Kümelerin hangi araştırma temalarına karşılık geldiğini, zamanla nasıl değiştiğini ve alanda nelerin az çalışıldığını anlatmak gerekir; çalışmanın katkısı bu yorumdan çıkar.",
      },
    ],
    faqs: [
      { q: "Web of Science ve Scopus verisi birleştirilebilir mi?", a: "Birleştirilebilir, ancak alan biçimleri farklı olduğu için dikkatli temizlik gerekir. Tek veri tabanıyla mı, ikisiyle mi ilerleneceği sorularınıza bağlı." },
      { q: "Veri tabanına erişimim yoksa ne yapmalıyım?", a: "Kayıtlar genellikle üniversite erişimiyle indirilir. Erişim ve indirme sizde; hangi dosya biçiminin gerektiğini ön görüşmede söyleriz." },
    ],
    guides: ["bibliyometrik-analiz-adimlari"],
    note: "Analiz, sizin indirdiğiniz yayın kayıtları üzerinde yürütülür. Çalışmanın yazarı sizsiniz.",
    need: "Kapsamı birlikte belirleyelim",
  },
  {
    slug: "meta-analiz-sistematik-derleme",
    title: "Meta-Analiz ve Sistematik Derleme Danışmanlığı",
    seoTitle: "Meta-Analiz ve Sistematik Derleme Desteği",
    description: "PRISMA 2020'ye uygun sistematik derleme, etki büyüklüğü hesabı, heterojenlik, yayın yanlılığı ve orman grafiği yorumu.",
    intro: "Meta-analiz, aynı soruyu inceleyen çalışmaların sonuçlarını istatistiksel olarak birleştirir. Sistematik derleme ise bu çalışmaların şeffaf ve tekrar edilebilir biçimde bulunup seçilmesini sağlar. Hakemler iki aşamanın da raporlama standartlarına uygun olmasını bekler.",
    waText: "Merhaba, meta-analiz/sistematik derleme hakkında ön görüşme istiyorum.",
    sections: [
      {
        title: "Sistematik derleme aşaması",
        text: "PRISMA 2020 bildirgesi (Page vd., 2021), sistematik derlemelerin nasıl raporlanacağını tanımlar. Akış şeması, taranan, elenen ve dahil edilen çalışma sayılarını gösterir.",
        items: [
          "Araştırma sorusu ve dahil etme-dışlama ölçütleri.",
          "Veri tabanları ve arama sorgusu.",
          "Başlık-özet ve tam metin taraması.",
          "Veri çıkarma formu ve çalışma kalitesinin değerlendirilmesi.",
        ],
      },
      {
        title: "Meta-analiz aşaması",
        text: "Dahil edilen çalışmalardan etki büyüklükleri hesaplanıp birleştirilir.",
        items: [
          "Etki büyüklüğü türünün seçimi (d, g, r, odds oranı vb.).",
          "Sabit ve rastgele etkiler modelleri.",
          "Heterojenlik: Q testi ve I² değeri.",
          "Moderatör ve alt grup analizleri.",
          "Yayın yanlılığı: huni grafiği ve ilgili testler.",
          "Orman grafiğinin yorumlanması.",
        ],
      },
      {
        title: "Sık yapılan hatalar",
        text: "Çok farklı çalışmaları tek bir etki büyüklüğünde birleştirmek, heterojenliği açıklamadan genel sonuca odaklanmak ve arama stratejisini tekrar edilemeyecek biçimde anlatmak hakemlerin en sık eleştirdiği konulardır.",
      },
    ],
    faqs: [
      { q: "Kaç çalışma gerekir?", a: "Meta-analiz teknik olarak az sayıda çalışmayla yapılabilir, ancak heterojenlik ve yayın yanlılığı analizleri için daha fazla çalışma gerekir. Alanınızda kaç çalışma olduğuna ön görüşmede bakarız." },
      { q: "Tarama ve veri çıkarmayı kim yapar?", a: "Tarama ve veri çıkarmayı siz yaparsınız. Ölçütler, veri çıkarma formu ve analiz planı danışmanlığın konusudur." },
    ],
    guides: ["etki-buyuklugu-raporlama"],
    note: "Analiz, sizin taradığınız ve seçtiğiniz yayımlanmış çalışmalar üzerinde yürütülür. Çalışmanın yazarı sizsiniz.",
    need: "Kapsamı birlikte belirleyelim",
  },
];
