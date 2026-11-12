export type Guide = {
  slug: string;
  title: string;
  seoTitle?: string;
  published: string;
  updated: string;
  analysis?: { href: string; label: string };
  description: string;
  service: { href: string; label: string };
  sections: { title: string; text: string; items?: string[]; source?: { label: string; href: string } }[];
};

export const rehberler: Guide[] = [
  {
    slug: "spss-veri-hazirlama",
    seoTitle: "SPSS İçin Veri Dosyası Nasıl Hazırlanır?",
    published: "2026-11-06",
    updated: "2026-11-12",
    title: "SPSS Analizi Öncesinde Veri Dosyası Nasıl Hazırlanır?",
    description: "SPSS öncesinde değişkenleri, değer etiketlerini ve eksik verileri kontrol etmek için kısa bir hazırlık rehberi.",
    service: { href: "/spss-analizi", label: "SPSS analiz danışmanlığı" },
    sections: [
      {
        title: "Dosyayla birlikte değişkenleri de açıklayın",
        text: "Analize hazırlıkta yalnızca sayıların bulunduğu dosyayı göndermek yerine, her değişkenin neyi temsil ettiğini açıklayan bir liste hazırlayın. IBM’in değişken özellikleri araçları; açıklayıcı etiketleri, değer etiketlerini ve eksik değer tanımlarını düzenlemeye imkân verir. Kullandığınız kodların anlamını baştan açık hale getirin.",
        items: ["Değişken adı ile anket sorusunun eşleşmesini yazın.", "Sayısal kategorilerin karşılığını belirtin; örneğin eğitim düzeyi için kullandığınız kodları açıklayın.", "Kullandığınız ölçeğin puanlama yönergesini dosyaya eşlik eden belgeler arasında tutun."],
        source: { label: "IBM — Variable properties", href: "https://www.ibm.com/docs/en/spss-statistics/32.0.0?topic=preparation-variable-properties" },
      },
      {
        title: "Eksik yanıtları gerçek değerlerden ayırın",
        text: "IBM SPSS, sistem eksik değerleri ile kullanıcı tarafından tanımlanan eksik değerleri ayırır. Sayısal bir hücrede değer bulunmaması sistem eksik değeri oluşturur. Yanıtsız sorular için özel bir kod kullandıysanız bunu ayrıca belirtin; örneğin 99 kodunun gerçek bir ölçüm mü, yanıtsızlık mı olduğunu analizden önce netleştirin.",
        source: { label: "IBM — Missing values", href: "https://www.ibm.com/docs/en/spss-statistics/30.0.0?topic=tables-missing-values" },
      },
      {
        title: "Ön görüşmeye hazırlık listeniz",
        text: "Görüşme öncesinde aşağıdaki belgeleri bir araya getirmenizi öneriyoruz. Henüz tamamlanmamış bir bölüm varsa hangi aşamada olduğunu belirtmeniz yeterli; veri dosyasını tamamlanmış göstermek için yanıt eklemeyin.",
        items: ["Araştırma soruları ve varsa hipotezler.", "Anket veya ölçek formu ile kodların açıklaması.", "Mevcut veri dosyası ve danışmanınızın analizle ilgili notları.", "Hangi çıktıları anlamakta veya raporlamakta zorlandığınızı belirten kısa bir not."],
      },
    ],
  },
  {
    slug: "tez-oneri-formu",
    seoTitle: "Tez Öneri Formunda Dikkat Edilecekler",
    published: "2026-11-06",
    updated: "2026-11-12",
    title: "Tez Öneri Formunu Hazırlarken Nelere Dikkat Etmelisiniz?",
    description: "Tez önerisinde araştırma sorusu, gerekçe, yöntem ve takvim arasındaki uyumu kontrol etmeye yardımcı bir rehber.",
    service: { href: "/tez-danismanligi", label: "Tez danışmanlığı" },
    sections: [
      {
        title: "Konu başlığını araştırma sorusuna dönüştürün",
        text: "Bir konu adı, neyi araştıracağınızı tek başına açıklamaz. Önerinizde hangi soruya cevap aradığınızı, bu sorunun neden araştırılmaya değer olduğunu ve nasıl cevaplanacağını anlatın. ANU’nun öneri rehberi de odağı bu üç soru üzerinden kurar. Konuyu daraltırken araştırmanın kapsamını ve ulaşabileceğiniz kaynakları birlikte değerlendirin.",
        source: { label: "Australian National University — Focusing", href: "https://www.anu.edu.au/students/academic-skills/research-writing/research-proposals/focusing" },
      },
      {
        title: "Kendi enstitünüzün formunu esas alın",
        text: "Öneri başlıkları disipline ve kurumun beklentilerine göre değişir. ANU’nun örnek yapısında araştırma soruları, literatür, yöntem, takvim ve kaynakça gibi bölümler bulunur. Bu başlıkları başka bir üniversitenin formuna aynen taşımak yerine, kendi formunuzun hangi bilgiyi istediğini kontrol edin.",
        items: ["Amaç bölümünde yanıtlanacak soruyu açıkça belirtin.", "Yöntemde hangi veriyi nasıl toplayacağınızı ve inceleyeceğinizi açıklayın.", "Takvimde kaynak tarama, veri toplama, analiz ve yazım aşamalarını planlayın."],
        source: { label: "Australian National University — Structuring", href: "https://www.anu.edu.au/students/academic-skills/research-writing/research-proposals/structuring" },
      },
      {
        title: "Teslim öncesinde kendinize sorun",
        text: "Öneriyi yeniden okurken şu kısa kontrol listesini kullanmanızı öneriyoruz. Cevaplayamadığınız noktaları danışman görüşmesinde gündeme alın.",
        items: ["Başlığım ve araştırma sorum aynı kapsamı mı anlatıyor?", "Seçtiğim yöntemle bu soruya cevap üretebilir miyim?", "Gerekli veriye erişimim ve gereken izinler için bir planım var mı?", "Danışmanımın son notları ile formun güncel sürümünü birlikte kontrol ettim mi?"],
      },
    ],
  },
  {
    slug: "apa-7-kaynakca",
    seoTitle: "APA 7 Kaynakça Düzenleme Rehberi",
    published: "2026-11-06",
    updated: "2026-11-12",
    title: "APA 7 Kaynakça Düzenleme: Makale ve Kitap İçin Başlangıç Rehberi",
    description: "APA 7 makale ve kitap kaynakçasında hangi bilgiler kullanılır? Kaynak türünü seçme ve künye kontrolü için kısa rehber.",
    service: { href: "/tez-danismanligi", label: "Kaynak gösterme ve tez biçimlendirme desteği" },
    sections: [
      {
        title: "Önce kaynak türünü belirleyin",
        text: "Makale, kitap ve kitap bölümü aynı kaynakça düzeniyle yazılmaz. APA’nın resmî örnekleri kaynak türlerine göre ayrılır. Elinizdeki eserin türünü belirleyip ona uygun örneği kullanın; yalnız başlığa bakarak yayın bilgilerini tamamlamayın.",
        source: { label: "APA Style — Reference examples", href: "https://apastyle.apa.org/style-grammar-guidelines/references/examples" },
      },
      {
        title: "Dergi makalesinde kontrol edilecek bilgiler",
        text: "Yazar, yıl, makale başlığı, dergi adı, cilt, sayı, sayfa aralığı veya makale numarası ve varsa DOI bilgisini yayının kendisinden kontrol edin. Dergi adı ve cilt numarası italik yazılır. DOI varsa bağlantı biçimi kullanılır. Aşağıdaki sıra bir alan şemasıdır; gerçek bir eser künyesi değildir.",
        items: ["Yazar → yıl → makale başlığı → dergi adı → cilt ve sayı → sayfalar veya makale numarası → varsa DOI."],
        source: { label: "APA Style — Journal article references", href: "https://apastyle.apa.org/style-grammar-guidelines/references/examples/journal-article-references" },
      },
      {
        title: "Kitapta yayınevi ve baskı bilgisi",
        text: "Yazarlı bir kitabın temel kaydı yazar, yıl, kitap adı ve yayınevinden oluşur. Kitap adı italik yazılır; varsa baskı bilgisi başlıktan sonra parantez içinde verilir. Yayınevinin bulunduğu şehir eklenmez. Kitabın DOI’si varsa kaydın sonunda yer alır. Editörlü kitap veya kitap bölümü için ilgili ayrı örneğe bakın.",
        source: { label: "APA Style — Book/ebook references", href: "https://apastyle.apa.org/style-grammar-guidelines/references/examples/book-references" },
      },
      {
        title: "Son kontrolü belgeniz üzerinden yapın",
        text: "Kaynakça programının ürettiği kaydı eserle karşılaştırmanızı öneriyoruz. Yazar adları, yıl, başlık ve bağlantıyı tek tek kontrol edin. Üniversitenizin veya derginizin istediği atıf biçimini de baştan belirleyin; bu kısa rehber yalnız APA 7 için başlangıç noktasıdır.",
      },
    ],
  },
  {
    slug: "tez-savunma-sunumu",
    published: "2026-11-06",
    updated: "2026-11-12",
    title: "Tez Savunma Sunumu Nasıl Planlanır?",
    description: "Araştırma sorusundan bulgulara uzanan açık bir savunma sunumu için içerik seçimi, slayt düzeni ve prova önerileri.",
    service: { href: "/sunum-hazirlama", label: "Tez savunma sunumu desteği" },
    sections: [
      {
        title: "Dinleyicinin takip edeceği bir anlatım kurun",
        text: "MIT Communication Lab, savunma sunumlarında araştırmayı farklı bilgi düzeyindeki dinleyicilere anlaşılır biçimde aktarmaya dikkat çeker. Sunumunuzu hazırlarken çalışmanın neden yapıldığını açıklayın; ardından soruyu, kullandığınız yaklaşımı ve ulaştığınız bulguları birbirine bağlayın. Slaytları bu anlatımı destekleyen araçlar olarak kullanın.",
        source: { label: "MIT Communication Lab — What makes a thesis defense great?", href: "https://mitcommlab.mit.edu/be/2026/02/25/defense-season-wrapped-what-makes-a-thesis-defense-great/" },
      },
      {
        title: "İlk taslak için önerdiğimiz akış",
        text: "Aşağıdaki akışı kendi disiplininize ve enstitünüzün beklentilerine göre uyarlayabilirsiniz. Sunum süresini ve varsa zorunlu şablonu danışmanınızdan öğrenerek başlayın; her çalışma için aynı slayt sayısını hedeflemeyin.",
        items: ["Araştırma problemi ve amacı.", "Araştırma soruları ve çalışmanın kapsamı.", "Yöntem: veri, örneklem veya incelenen malzeme ve analiz yaklaşımı.", "Sorulara cevap veren temel bulgular.", "Bulguların yorumu, sınırlılıklar ve sonuç."],
      },
      {
        title: "Provayı slayt kontrolüyle birlikte yapın",
        text: "MIT’nin savunma rehberi sunumu önceden düzenlemeyi ve prova etmeyi önerir. Provada yalnız süreyi ölçmekle kalmayın; bir başlıktan diğerine geçişinizi de sesli anlatın. Anlatmakta zorlandığınız slaytı yeniden düzenleyin.",
        items: ["Tablo ve grafiklerin yazılarını sunum yapılacak boyutta kontrol edin.", "Slayttaki sayıların tezdeki son sürümle aynı olduğunu karşılaştırın.", "Yönteminizi neden seçtiğinizi ve bulgularınızın sınırlarını açıklamaya hazırlanın."],
        source: { label: "MIT — Thesis Defense", href: "https://www.mit.edu/course/21/21.guide/th-defen.htm" },
      },
    ],
  },
  {
    slug: "normallik-testi-parametrik-secim",
    title: "Normallik Testi Nasıl Yorumlanır? Parametrik ve Parametrik Olmayan Test Seçimi",
    seoTitle: "Normallik Testi ve Parametrik Test Seçimi",
    published: "2026-11-12",
    updated: "2026-11-12",
    description: "Shapiro-Wilk, Kolmogorov-Smirnov, çarpıklık-basıklık ve Q-Q grafiği ile normalliği değerlendirme; t-testi mi Mann-Whitney mi kararı.",
    service: { href: "/spss-analizi", label: "SPSS analiz danışmanlığı" },
    analysis: { href: "/analiz/t-testi-ve-anova", label: "t-Testi ve ANOVA danışmanlığı" },
    sections: [
      {
        title: "Normallik neden önemli?",
        text: "t-testi, ANOVA ve Pearson korelasyonu gibi parametrik testler, verinin (ya da artıkların) yaklaşık normal dağıldığını varsayar. Bu varsayım ciddi biçimde bozulduğunda test sonuçları yanıltıcı olabilir. Bu yüzden analiz bölümünde test seçiminizi gerekçelendirirken normallik incelemesini de raporlamanız beklenir.",
      },
      {
        title: "SPSS'te iki test birlikte gelir",
        text: "SPSS'in Explore (Keşfet) menüsündeki Tests of Normality tablosu Kolmogorov-Smirnov ve Shapiro-Wilk sonuçlarını yan yana verir. Her iki testte de sıfır hipotezi verinin normal dağıldığıdır; p değeri .05'ten küçükse normallikten anlamlı sapma olduğu sonucuna varılır. Shapiro-Wilk testi özellikle küçük ve orta büyüklükteki örneklemlerde daha sık tercih edilir.",
        source: { label: "NIST/SEMATECH — Anderson-Darling and Shapiro-Wilk tests", href: "https://www.itl.nist.gov/div898/handbook/prc/section2/prc213.htm" },
      },
      {
        title: "Büyük örneklemde testlere tek başına güvenmeyin",
        text: "Örneklem büyüdükçe normallik testleri çok küçük sapmaları bile anlamlı bulur. Birkaç yüz katılımcılı bir çalışmada p < .05 çıkması, dağılımın analiz için uygunsuz olduğu anlamına gelmeyebilir. Bu nedenle testlerin yanında grafiklere ve betimsel değerlere de bakmak gerekir.",
        items: [
          "Q-Q grafiğinde noktaların köşegen çizgiye ne kadar yakın durduğu.",
          "Histogramın genel şekli ve uç değerler.",
          "Çarpıklık ve basıklık değerleri; kaynaklarda ±1, ±1,5 ya da ±2 gibi farklı sınırlar önerilir. Hangi sınırı kullandığınızı kaynağıyla birlikte yazın.",
        ],
        source: { label: "NIST/SEMATECH — Quantile-Quantile Plot", href: "https://www.itl.nist.gov/div898/handbook/eda/section3/eda33o.htm" },
      },
      {
        title: "Karar tablosu",
        text: "Normallik karşılanmıyorsa testin parametrik olmayan karşılığı kullanılabilir. En sık kullanılan eşleştirmeler şöyledir:",
        items: [
          "Bağımsız örneklemler t-testi → Mann-Whitney U.",
          "Eşleştirilmiş örneklemler t-testi → Wilcoxon işaretli sıralar testi.",
          "Tek yönlü ANOVA → Kruskal-Wallis H.",
          "Tekrarlı ölçümler ANOVA → Friedman testi.",
          "Pearson korelasyonu → Spearman sıra korelasyonu.",
        ],
      },
      {
        title: "Yöntem bölümünde nasıl yazılır?",
        text: "Normalliği hangi yöntemlerle incelediğinizi, hangi ölçütü kullandığınızı ve buna göre hangi testleri seçtiğinizi tek bir paragrafta açıklayın. Gruplara göre karşılaştırma yapıyorsanız normalliği her grup için ayrı incelemeniz gerektiğini de unutmayın.",
      },
    ],
  },
  {
    slug: "cronbach-alfa-yorumlama",
    title: "Cronbach Alfa Nasıl Yorumlanır? Güvenirlik Analizi Rehberi",
    seoTitle: "Cronbach Alfa Nasıl Yorumlanır?",
    published: "2026-11-12",
    updated: "2026-11-12",
    description: "Cronbach alfa katsayısının anlamı, kabul edilen değerler, ters maddeler, madde silindiğinde alfa ve raporlama örneği.",
    service: { href: "/spss-analizi", label: "SPSS analiz danışmanlığı" },
    analysis: { href: "/analiz/olcek-gecerlik-guvenirlik", label: "Ölçek geçerlik ve güvenirlik analizi" },
    sections: [
      {
        title: "Alfa neyi gösterir?",
        text: "Cronbach (1951) tarafından tanımlanan alfa katsayısı, bir ölçekteki maddelerin birbiriyle ne kadar tutarlı yanıtlandığını gösteren bir iç tutarlılık ölçüsüdür. Değer 0 ile 1 arasında yorumlanır ve 1'e yaklaştıkça tutarlılık artar. Alfa, ölçeğin tek boyutlu olduğunu ya da geçerli olduğunu tek başına kanıtlamaz.",
        source: { label: "Cronbach (1951), Psychometrika", href: "https://doi.org/10.1007/BF02310555" },
      },
      {
        title: "Hangi değer yeterli?",
        text: "Sosyal bilimlerde .70 ve üzeri çoğunlukla kabul edilebilir sayılır; .80 ve üzeri iyi olarak yorumlanır. Ancak bu sınırlar kesin kurallar değildir. Alfa madde sayısından etkilenir: Az maddeli alt boyutlarda düşük, çok maddeli ölçeklerde yüksek çıkma eğilimindedir. .95'in üzerindeki değerler ise bazı maddelerin aynı şeyi tekrar sorduğuna işaret edebilir.",
      },
      {
        title: "Analizden önce kontrol edin",
        text: "Düşük alfa değerlerinin en sık nedeni veri hazırlığındaki hatalardır.",
        items: [
          "Ters puanlanan maddeler dönüştürüldü mü?",
          "Alt boyutlar için alfa ayrı ayrı hesaplandı mı?",
          "Eksik veriler ve kodlama hataları temizlendi mi?",
        ],
      },
      {
        title: "Madde istatistiklerini okuma",
        text: "SPSS'te Reliability Analysis ekranında Statistics düğmesinden \"Scale if item deleted\" seçeneği işaretlendiğinde her madde için düzeltilmiş madde-toplam korelasyonu ve madde silindiğinde alfa değeri gelir. Madde-toplam korelasyonu çok düşük olan ya da silindiğinde alfayı belirgin biçimde yükselten maddeler incelenir. Yine de madde çıkarma kararı yalnız bu tabloya bakılarak verilmemeli; maddenin içeriği ve ölçeğin özgün yapısı da dikkate alınmalıdır.",
      },
      {
        title: "Raporlama örneği",
        text: "APA 7'de değeri 1'i aşamayan istatistikler başta sıfır olmadan yazılır. Aşağıdaki cümle temsilî bir örnektir; değerler gerçek bir çalışmaya ait değildir.",
        items: ["\"Ölçeğin bu çalışmadaki Cronbach alfa iç tutarlılık katsayısı toplam puan için .87, alt boyutlar için .74 ile .82 arasında bulunmuştur.\""],
        source: { label: "APA Style — Numbers and Statistics Guide", href: "https://apastyle.apa.org/instructional-aids/numbers-statistics-guide.pdf" },
      },
    ],
  },
  {
    slug: "afa-kmo-bartlett",
    title: "Açımlayıcı Faktör Analizinde KMO, Bartlett Testi ve Faktör Sayısı",
    seoTitle: "AFA'da KMO, Bartlett ve Faktör Sayısı",
    published: "2026-11-12",
    updated: "2026-11-12",
    description: "Açımlayıcı faktör analizinde KMO ve Bartlett testinin yorumu, faktör sayısına karar verme, döndürme ve faktör yükleri.",
    service: { href: "/spss-analizi", label: "SPSS analiz danışmanlığı" },
    analysis: { href: "/analiz/faktor-analizi", label: "Faktör analizi danışmanlığı" },
    sections: [
      {
        title: "Veri faktör analizine uygun mu?",
        text: "AFA'ya başlamadan önce iki değere bakılır. Kaiser-Meyer-Olkin (KMO) örneklem yeterliliği ölçüsü, maddeler arasındaki kısmi korelasyonların küçük olup olmadığını gösterir. Kaiser (1974) .90 ve üzerini mükemmel, .80'leri çok iyi, .70'leri orta, .60'ları vasat, .50'leri zayıf olarak sınıflandırmış; .50'nin altını kabul edilemez saymıştır. Bartlett küresellik testinin anlamlı çıkması (p < .05) ise korelasyon matrisinin birim matristen farklı olduğunu, yani maddeler arasında faktörleşmeye yetecek ilişki bulunduğunu gösterir.",
        source: { label: "Kaiser (1974), Psychometrika", href: "https://doi.org/10.1007/BF02291575" },
      },
      {
        title: "Kaç faktör?",
        text: "SPSS varsayılan olarak öz değeri 1'in üzerindeki faktörleri alır (Kaiser ölçütü). Bu ölçüt tek başına kullanıldığında çoğu zaman gereğinden fazla faktör önerir. Karar verirken birden fazla kanıtı birlikte değerlendirin:",
        items: [
          "Öz değerler ve açıklanan varyans oranları.",
          "Yamaç (scree) grafiğinde kırılmanın olduğu nokta.",
          "Paralel analiz sonuçları.",
          "Özgün ölçeğin kuramsal yapısı.",
        ],
      },
      {
        title: "Döndürme yöntemi",
        text: "Faktörlerin birbirinden bağımsız olduğu varsayılıyorsa Varimax gibi dik döndürme, ilişkili olduğu düşünülüyorsa Direct Oblimin ya da Promax gibi eğik döndürme kullanılır. Sosyal bilimlerde boyutlar çoğunlukla ilişkili olduğundan eğik döndürme sık tercih edilir. Seçiminizi yöntem bölümünde gerekçelendirin.",
      },
      {
        title: "Faktör yükleri ve binişik maddeler",
        text: "Yük değerleri için kaynaklarda genellikle .30 ile .40 arası alt sınırlar önerilir. Bir madde iki faktöre birbirine yakın yüklerle yükleniyorsa (binişik madde) yükler arasındaki fark incelenir; sık kullanılan bir ölçüt .10'dur. Madde çıkarırsanız analizi yeniden çalıştırıp her adımı raporda gösterin.",
      },
      {
        title: "Raporlama",
        text: "Raporda KMO ve Bartlett değerlerini, kullanılan çıkarım ve döndürme yöntemini, faktör sayısına nasıl karar verdiğinizi, açıklanan toplam varyansı ve madde yüklerini gösteren tabloyu verin. Yapının farklı bir örneklemde doğrulanması gerekiyorsa sonraki adım doğrulayıcı faktör analizidir.",
      },
    ],
  },
  {
    slug: "dfa-uyum-indeksleri",
    title: "Doğrulayıcı Faktör Analizinde Uyum İndeksleri Nasıl Yorumlanır?",
    seoTitle: "DFA Uyum İndeksleri Nasıl Yorumlanır?",
    published: "2026-11-12",
    updated: "2026-11-12",
    description: "DFA ve AMOS çıktısında χ²/sd, CFI, TLI, RMSEA ve SRMR değerlerinin anlamı, sık kullanılan kesim noktaları ve raporlama.",
    service: { href: "/spss-analizi", label: "SPSS analiz danışmanlığı" },
    analysis: { href: "/analiz/amos-yapisal-esitlik-modeli", label: "AMOS ve yapısal eşitlik modeli danışmanlığı" },
    sections: [
      {
        title: "Uyum indeksi neyi söyler?",
        text: "Doğrulayıcı faktör analizinde kurduğunuz model, verideki kovaryans yapısını ne ölçüde yeniden üretebiliyorsa o kadar iyi uyum gösterir. Tek bir indeks bunu tam olarak özetleyemediği için farklı mantıkla çalışan birkaç indeks birlikte raporlanır.",
      },
      {
        title: "Sık raporlanan indeksler",
        text: "Hu ve Bentler'in (1999) önerdiği kesim noktaları en çok atıf alan ölçütler arasındadır.",
        items: [
          "χ² ve χ²/sd: Ki-kare örneklem büyüklüğüne çok duyarlıdır; bu yüzden serbestlik derecesine oranı da verilir. Oran için alanyazında 3 ya da 5 gibi farklı sınırlar kullanılır.",
          "CFI ve TLI: .90 ve üzeri kabul edilebilir, .95 ve üzeri iyi uyum olarak yorumlanır.",
          "RMSEA: .06 ve altı iyi uyum, .08'e kadar kabul edilebilir uyum olarak değerlendirilir. Güven aralığını da vermek iyi bir uygulamadır.",
          "SRMR: .08 ve altı iyi uyum olarak kabul edilir.",
        ],
        source: { label: "Hu ve Bentler (1999), Structural Equation Modeling", href: "https://doi.org/10.1080/10705519909540118" },
      },
      {
        title: "Uyum iyi ama model sorunlu olabilir",
        text: "İndeksler iyi görünse de standartlaştırılmış yüklerin çok düşük olması, 1'in üzerinde yük ya da negatif hata varyansı gibi durumlar modelde sorun olduğunu gösterebilir. Uyum indekslerini yük değerleri ve kuramsal yapı ile birlikte yorumlayın.",
      },
      {
        title: "Modifikasyon önerileri",
        text: "AMOS'un önerdiği hata kovaryanslarını eklemek uyumu yükseltir. Yine de bu yalnız aynı boyuttaki, içerik olarak benzer maddeler arasında ve gerekçesi açıklanabiliyorsa yapılmalıdır. Hangi değişiklikleri neden yaptığınızı raporda belirtin.",
      },
      {
        title: "Raporlama",
        text: "Tabloda uyum indekslerini kullandığınız ölçütlerle yan yana vermek okuru rahatlatır. Model şeklinde standartlaştırılmış yükleri gösterin ve ölçütlerin hangi kaynaktan alındığını metinde belirtin.",
      },
    ],
  },
  {
    slug: "araci-etki-process",
    title: "Aracı Etki Analizi: PROCESS Makrosu ve Bootstrap Yorumu",
    seoTitle: "Aracı Etki Analizi: PROCESS ve Bootstrap",
    published: "2026-11-12",
    updated: "2026-11-12",
    description: "Aracı etki analizinde Baron ve Kenny yaklaşımı, PROCESS Model 4, dolaylı etki ve bootstrap güven aralığının yorumu.",
    service: { href: "/spss-analizi", label: "SPSS analiz danışmanlığı" },
    analysis: { href: "/analiz/araci-ve-duzenleyici-etki-analizi", label: "Aracı ve düzenleyici etki analizi" },
    sections: [
      {
        title: "Aracı etki nedir?",
        text: "Aracı (mediator) değişken, bağımsız değişkenin (X) bağımlı değişken (Y) üzerindeki etkisinin hangi yolla gerçekleştiğini açıklar. Modelde X'ten M'ye a yolu, M'den Y'ye b yolu ve X'ten Y'ye doğrudan c' yolu bulunur. Dolaylı etki a ve b yollarının çarpımıyla hesaplanır.",
      },
      {
        title: "Baron ve Kenny yaklaşımı",
        text: "Baron ve Kenny (1986), aracılığı bir dizi regresyon adımıyla sınamayı önermiştir: X'in Y'yi, X'in M'yi ve M'nin X kontrol edilirken Y'yi yordaması beklenir. Bu yaklaşım çok yaygın kullanılsa da dolaylı etkiyi doğrudan sınamadığı için güncel çalışmalarda bootstrap yöntemi daha sık tercih edilmektedir.",
        source: { label: "Baron ve Kenny (1986), Journal of Personality and Social Psychology", href: "https://doi.org/10.1037/0022-3514.51.6.1173" },
      },
      {
        title: "PROCESS ile bootstrap",
        text: "Andrew F. Hayes'in geliştirdiği PROCESS makrosu SPSS'e eklenerek kullanılır. Basit aracılık için Model 4, basit düzenleyicilik için Model 1 kullanılır. Bootstrap yöntemi örneklemden çok sayıda (ör. 5000) yeniden örneklem çekerek dolaylı etki için bir güven aralığı üretir.",
        source: { label: "Hayes — The PROCESS macro for SPSS, SAS, and R", href: "https://www.processmacro.org/index.html" },
      },
      {
        title: "Çıktı nasıl okunur?",
        text: "Dolaylı etkinin %95 bootstrap güven aralığı sıfırı içermiyorsa (alt ve üst sınır aynı işaretliyse) dolaylı etki anlamlı kabul edilir.",
        items: [
          "Dolaylı etki anlamlı, doğrudan etki anlamsız: genellikle tam aracılık olarak yorumlanır.",
          "Hem dolaylı hem doğrudan etki anlamlı: kısmi aracılık olarak yorumlanır.",
          "Dolaylı etkinin güven aralığı sıfırı içeriyor: aracılık desteklenmez.",
        ],
      },
      {
        title: "Raporlama",
        text: "Tabloda a, b, c ve c' yollarının katsayılarını, standart hatalarını ve p değerlerini; dolaylı etki için katsayıyı ve bootstrap güven aralığını verin. Kullandığınız PROCESS sürümünü, model numarasını ve bootstrap örneklem sayısını yöntem bölümünde belirtin.",
      },
    ],
  },
  {
    slug: "spss-tablolari-apa-raporlama",
    title: "SPSS Çıktıları APA 7'ye Göre Nasıl Raporlanır?",
    seoTitle: "SPSS Çıktıları APA 7'ye Göre Raporlama",
    published: "2026-11-12",
    updated: "2026-11-12",
    description: "SPSS tablolarını APA 7 biçimine dönüştürme: tablo başlığı, istatistik simgeleri, ondalık ve p değeri yazımı, metin içi raporlama.",
    service: { href: "/spss-analiz-kontrolu", label: "SPSS analiz kontrolü" },
    analysis: { href: "/analiz", label: "Analiz türleri" },
    sections: [
      {
        title: "SPSS tablosu doğrudan teze konmaz",
        text: "SPSS çıktısı, okurun ihtiyaç duymadığı pek çok satır içerir. Bulgular bölümünde yalnız araştırma sorusuna cevap veren değerleri seçip APA düzenine uygun yeni bir tablo oluşturmanız gerekir. Enstitünüzün kılavuzu farklı bir düzen istiyorsa kılavuz esas alınır.",
      },
      {
        title: "Tablo düzeni",
        text: "APA 7'de tablo numarası kalın yazılır (Tablo 1), başlık bir alt satırda italik ve başlık düzeninde verilir. Tabloda yalnız yatay çizgiler kullanılır; dikey çizgi kullanılmaz. Kısaltma ve açıklamalar tablonun altındaki Not bölümünde yer alır.",
        source: { label: "APA Style — Sample tables", href: "https://apastyle.apa.org/style-grammar-guidelines/tables-figures/sample-tables" },
      },
      {
        title: "Sayı ve simge yazımı",
        text: "İstatistik simgeleri italik yazılır.",
        items: [
          "Simgeler: M, SD, t, F, r, p, n gibi harfler italiktir; Yunan harfleri (α, β, χ²) italik yazılmaz.",
          "Ondalıklar: Değerler çoğunlukla iki ondalıkla verilir; p değerleri iki ya da üç ondalıkla yazılabilir.",
          "Baştaki sıfır: 1'i aşamayan değerlerde (p, r, α) baştaki sıfır yazılmaz: p = .032.",
          "Çok küçük p: p = .000 yazılmaz, p < .001 olarak raporlanır.",
          "Kesin değer: Mümkün olduğunda p < .05 yerine kesin p değeri verilir.",
        ],
        source: { label: "APA Style — Numbers and Statistics Guide", href: "https://apastyle.apa.org/instructional-aids/numbers-statistics-guide.pdf" },
      },
      {
        title: "Metin içinde raporlama",
        text: "Metinde testi, serbestlik derecesini, test istatistiğini, p değerini ve etki büyüklüğünü birlikte verin. Aşağıdaki cümleler temsilî örnektir; değerler gerçek bir çalışmaya ait değildir.",
        items: [
          "t-testi: \"Kadın katılımcıların puanları (M = 3.84, SD = 0.61) erkek katılımcılardan (M = 3.52, SD = 0.70) anlamlı düzeyde yüksektir, t(198) = 3.45, p = .001, d = 0.49.\"",
          "ANOVA: \"Gruplar arasında anlamlı fark bulunmuştur, F(2, 147) = 5.12, p = .007, η² = .07.\"",
        ],
      },
      {
        title: "Son kontrol",
        text: "Tablodaki değerlerin çıktıyla, metindeki değerlerin de tabloyla aynı olduğunu tek tek karşılaştırın. Tablo numaralarının metindeki atıflarla eşleştiğini ve her tablonun metinde en az bir kez anıldığını kontrol edin.",
      },
    ],
  },
  {
    slug: "tematik-analiz-adimlari",
    title: "Tematik Analiz Nasıl Yapılır? Nitel Veride Kodlamadan Temaya",
    seoTitle: "Tematik Analiz Nasıl Yapılır? Adım Adım",
    published: "2026-11-12",
    updated: "2026-11-12",
    description: "Braun ve Clarke'ın altı aşamalı tematik analiz yaklaşımı: veriyle tanışma, kodlama, tema oluşturma, gözden geçirme ve raporlama.",
    service: { href: "/tez-danismanligi", label: "Tez danışmanlığı" },
    analysis: { href: "/analiz/nitel-veri-analizi", label: "Nitel veri analizi danışmanlığı" },
    sections: [
      {
        title: "Tematik analiz nedir?",
        text: "Tematik analiz, nitel veride tekrar eden anlam örüntülerini belirleme, düzenleme ve raporlama yöntemidir. Braun ve Clarke'ın (2006) makalesi bu yaklaşımı altı aşamada tanımlamış ve psikoloji başta olmak üzere birçok alanda temel kaynak hâline gelmiştir.",
        source: { label: "Braun ve Clarke (2006), Qualitative Research in Psychology", href: "https://doi.org/10.1191/1478088706qp063oa" },
      },
      {
        title: "Altı aşama",
        text: "Aşamalar doğrusal değildir; analiz ilerledikçe önceki adımlara dönmek olağandır.",
        items: [
          "Veriyle tanışma: Dökümleri birkaç kez okumak ve ilk notları almak.",
          "İlk kodların oluşturulması: Araştırma sorusuyla ilgili anlamlı veri parçalarını kodlamak.",
          "Temaların aranması: Kodları olası temalar altında toplamak.",
          "Temaların gözden geçirilmesi: Temaların kodlarla ve tüm veri setiyle uyumunu kontrol etmek.",
          "Temaların tanımlanması ve adlandırılması: Her temanın neyi anlattığını netleştirmek.",
          "Raporun yazılması: Temaları alıntılarla destekleyerek araştırma sorusuna bağlamak.",
        ],
      },
      {
        title: "Kod ile tema arasındaki fark",
        text: "Kod, veri parçasına verilen kısa bir etikettir. Tema ise birden fazla kodu bir araya getiren ve araştırma sorusu açısından anlam taşıyan daha geniş bir örüntüdür. Temaları yalnız görüşme sorularının başlıklarından oluşturmak, analizin derinliğini azaltan sık bir hatadır.",
      },
      {
        title: "Analizin inandırıcılığı",
        text: "Nitel çalışmalarda okurun analiz sürecini izleyebilmesi önemlidir. Kod listesini ve tema şemasını ekte vermek, kodlayıcılar arası uyumu ya da uzman görüşünü anlatmak, katılımcı alıntılarını kod numarasıyla göstermek sık kullanılan yollardır.",
      },
      {
        title: "Bulguları yazarken",
        text: "Her temayı kısa bir tanımla açın, ardından alt temaları ve onları destekleyen alıntıları verin. Alıntı sizin yorumunuzu desteklemeli; yorumun yerine geçmemelidir. Katılımcıların kimliğini ortaya çıkarabilecek bilgileri alıntılardan çıkarın.",
      },
    ],
  },
];
