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
};

export const analizler: AnalysisPage[] = [
  {
    slug: "faktor-analizi",
    title: "Faktör Analizi Danışmanlığı (AFA ve DFA)",
    seoTitle: "Faktör Analizi Danışmanlığı: AFA ve DFA",
    description: "Açımlayıcı ve doğrulayıcı faktör analizinde KMO, Bartlett, faktör sayısı, yük değerleri ve uyum indekslerini birlikte yorumluyoruz.",
    intro: "Ölçek geliştiriyor, uyarlıyor ya da hazır bir ölçeğin yapısını kendi örnekleminizde sınıyorsanız faktör analizi çalışmanızın en çok soru getiren bölümü olabilir. Hangi analizin gerektiğini, çıktıda hangi değerlere bakılacağını ve sonuçların tabloya nasıl aktarılacağını birlikte ele alıyoruz.",
    waText: "Merhaba, faktör analizi (AFA/DFA) hakkında ön görüşme istiyorum.",
    sections: [
      {
        title: "AFA mı, DFA mı?",
        text: "Açımlayıcı faktör analizi (AFA), maddelerin kaç boyut altında toplandığını bilmediğiniz ya da yapıyı ilk kez incelediğiniz durumlarda kullanılır. Doğrulayıcı faktör analizi (DFA) ise önceden tanımlanmış bir yapının verinize uyup uymadığını sınar. Uyarlama çalışmalarında çoğu zaman DFA beklenir; yeni geliştirilen ölçeklerde AFA ile başlanıp farklı bir örneklemde DFA yapılması yaygındır. Hangisinin sizin çalışmanıza uyduğunu araştırma deseniniz ve danışmanınızın beklentisi belirler.",
      },
      {
        title: "AFA çıktısında birlikte baktığımız değerler",
        text: "SPSS çıktısı uzun olduğu için hangi tablonun neyi söylediğini sırayla ele alıyoruz.",
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
        text: "DFA'da yalnız uyum indekslerini listelemek yetmez; standartlaştırılmış yüklerin, hata varyanslarının ve varsa modifikasyon önerilerinin kuramsal olarak savunulabilir olması gerekir. χ²/sd, CFI, TLI, RMSEA ve SRMR değerlerini hangi ölçütlere göre yorumladığınızı kaynağıyla birlikte yazmanız, jüri sorularına da hazırlık sağlar.",
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
      { q: "Madde çıkarmak zorunda kalırsam ne yapmalıyım?", a: "Madde çıkarma kararı istatistiksel değerlerle birlikte kuramsal yapıyı da gözetmelidir. Hangi maddelerin neden sorun çıkardığını çıktınız üzerinden birlikte inceleyip kararın raporda nasıl açıklanacağını ele alırız." },
    ],
    guides: ["afa-kmo-bartlett", "dfa-uyum-indeksleri"],
  },
  {
    slug: "amos-yapisal-esitlik-modeli",
    title: "AMOS ve Yapısal Eşitlik Modeli (YEM) Danışmanlığı",
    seoTitle: "AMOS ve Yapısal Eşitlik Modeli Danışmanlığı",
    description: "AMOS ile ölçüm modeli, yapısal model, uyum indeksleri ve dolaylı etkilerin yorumlanması için danışmanlık. İlk görüşme ücretsiz.",
    intro: "Yapısal eşitlik modeli, birden fazla gizil değişken arasındaki ilişkileri aynı model içinde sınamanızı sağlar. Model çiziminden uyum değerlerinin yorumuna kadar her adımın bir gerekçesi olması gerekir. Modelinizi kuramsal çerçevenizle birlikte ele alıyoruz.",
    waText: "Merhaba, AMOS ve yapısal eşitlik modeli hakkında ön görüşme istiyorum.",
    sections: [
      {
        title: "Önce ölçüm modeli, sonra yapısal model",
        text: "YEM çalışmalarında yaygın yaklaşım, önce her ölçeğin ölçüm modelini (DFA) sınamak, ardından değişkenler arası yolları içeren yapısal modele geçmektir. Ölçüm modeli kabul edilebilir değilse yapısal modelden elde edilen katsayılar da güvenilir yorumlanamaz. Bu sırayı raporunuzda açıkça göstermeniz önemlidir.",
      },
      {
        title: "Model üzerinde birlikte çalıştığımız konular",
        text: "Danışmanlık kapsamını çalışmanızın aşamasına göre belirliyoruz.",
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
        title: "Çıktıda birlikte incelediğimiz noktalar",
        text: "Raporunuza geçmeden önce aşağıdaki başlıkları tek tek kontrol ediyoruz.",
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
      { q: "Kategorik değişkenleri regresyona nasıl eklerim?", a: "İkiden fazla kategorili değişkenler genellikle kukla (dummy) değişkenlere dönüştürülür. Hangi kategorinin referans alınacağı yorumu değiştirir; bunu hipotezinize göre birlikte belirleriz." },
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
      { q: "Birden fazla aracı değişkenim var, aynı modelde sınanabilir mi?", a: "Paralel ya da sıralı aracılık modelleriyle sınanabilir. Hangi modelin hipotezlerinize uyduğunu araştırma modelinizin şekli üzerinden birlikte belirleriz." },
      { q: "Dolaylı etki anlamlı, doğrudan etki anlamsız çıktı. Bu ne demek?", a: "Bu tablo genellikle tam aracılık olarak yorumlanır. Ancak yorumun örneklem büyüklüğü ve kuramsal beklentiyle birlikte yapılması gerekir; raporda nasıl ifade edileceğini konuşuruz." },
    ],
    guides: ["araci-etki-process"],
  },
  {
    slug: "t-testi-ve-anova",
    title: "t-Testi, ANOVA ve Fark Testleri Danışmanlığı",
    seoTitle: "t-Testi ve ANOVA Danışmanlığı (SPSS)",
    description: "Bağımsız ve eşleştirilmiş t-testi, ANOVA, Mann-Whitney U ve Kruskal-Wallis testlerinde seçim, varsayım ve post hoc yorumu.",
    intro: "Gruplar arasında fark olup olmadığını sınamak tez ve makalelerde en sık yapılan analizlerdendir. Ancak doğru testi seçmek; grup sayısına, ölçümün türüne ve verinin dağılımına bağlıdır. Hangi testi neden seçtiğinizi gerekçesiyle yazabilmeniz için birlikte çalışıyoruz.",
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
        text: "Tabloda grup ortalamaları ve standart sapmalarla birlikte test istatistiği, serbestlik derecesi ve p değeri yer almalıdır. Metinde ise yalnız anlamlılığı değil, farkın yönünü de belirtin: hangi grubun ortalaması daha yüksek?",
      },
    ],
    faqs: [
      { q: "Örneklemim küçük, parametrik test kullanabilir miyim?", a: "Küçük örneklemlerde normallik varsayımını dikkatle incelemek gerekir. Varsayım karşılanmıyorsa parametrik olmayan karşılığını kullanmak daha savunulabilir olur; kararı verinize bakarak birlikte veririz." },
      { q: "ANOVA anlamlı, post hoc testte fark çıkmadı. Ne yazmalıyım?", a: "Bu durum özellikle sınırda p değerlerinde görülebilir. Bulguyu olduğu gibi raporlayıp yorumunu temkinli yapmak gerekir; ifadeyi çıktınıza göre birlikte netleştiririz." },
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
      { q: "Alfa değerim .60 çıktı, ölçeği kullanabilir miyim?", a: "Kabul sınırları alana ve ölçeğin amacına göre tartışılır; madde sayısı da alfayı etkiler. Değeri nasıl yorumlayacağınızı ve sınırlılıklarda nasıl ele alacağınızı birlikte değerlendiririz." },
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
          "Tabloda sayılarla birlikte satır veya sütun yüzdeleri verilir.",
        ],
      },
      {
        title: "İlişki neden-sonuç değildir",
        text: "Anlamlı bir korelasyon ya da ki-kare sonucu, bir değişkenin diğerine yol açtığını göstermez. Bulguları yazarken ilişkiyi tanımlayan ifadeler kullanmak ve yorumu desene uygun tutmak gerekir.",
      },
    ],
    faqs: [
      { q: "Çok sayıda korelasyonu tek tabloda verebilir miyim?", a: "Evet, korelasyon matrisi yaygın bir raporlama biçimidir. Tabloda ortalama ve standart sapmaları da vermek okuru rahatlatır; düzeni APA'ya göre birlikte kurarız." },
      { q: "Beklenen değer koşulu sağlanmıyorsa ne yapılır?", a: "Kategorileri anlamlı biçimde birleştirmek ya da kesin test kullanmak seçenekler arasındadır. Hangisinin araştırma sorunuzu bozmadan uygulanabileceğini birlikte değerlendiririz." },
    ],
    guides: ["normallik-testi-parametrik-secim", "spss-tablolari-apa-raporlama"],
  },
  {
    slug: "nitel-veri-analizi",
    title: "Nitel Veri Analizi Danışmanlığı",
    seoTitle: "Nitel Veri Analizi: Tematik ve İçerik Analizi",
    description: "Görüşme ve doküman verilerinde kodlama, tema oluşturma, tematik ve içerik analizi ile bulguların raporlanması için danışmanlık.",
    intro: "Görüşme, odak grup ya da doküman verisiyle çalışıyorsanız analiz sürecinin şeffaf ve izlenebilir olması gerekir. Kodların nasıl oluştuğunu, temalara nasıl ulaşıldığını ve alıntıların nasıl seçildiğini gerekçesiyle anlatabilmeniz için birlikte çalışıyoruz.",
    waText: "Merhaba, nitel veri analizi hakkında ön görüşme istiyorum.",
    sections: [
      {
        title: "Tematik analiz ve içerik analizi",
        text: "Tematik analiz, verideki anlam örüntülerini temalar hâlinde ortaya koyar. İçerik analizi ise belirli kategorilerin veride ne sıklıkla ve nasıl yer aldığına odaklanabilir. Hangi yaklaşımın seçildiği araştırma sorusuna ve nitel desene (olgubilim, durum çalışması vb.) bağlıdır.",
      },
      {
        title: "Birlikte ele aldığımız adımlar",
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
      { q: "Kaç görüşme yeterli?", a: "Nitel çalışmalarda yeterlilik, veri doygunluğu ve desenin gereklerine göre tartışılır. Kendi çalışmanız için bunun yöntem bölümünde nasıl gerekçelendirileceğini birlikte ele alırız." },
    ],
    guides: ["tematik-analiz-adimlari"],
  },
];
