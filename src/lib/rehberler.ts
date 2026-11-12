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
        source: { label: "IBM: Variable properties", href: "https://www.ibm.com/docs/en/spss-statistics/32.0.0?topic=preparation-variable-properties" },
      },
      {
        title: "Eksik yanıtları gerçek değerlerden ayırın",
        text: "IBM SPSS, sistem eksik değerleri ile kullanıcı tarafından tanımlanan eksik değerleri ayırır. Sayısal bir hücrede değer bulunmaması sistem eksik değeri oluşturur. Yanıtsız sorular için özel bir kod kullandıysanız bunu ayrıca belirtin; örneğin 99 kodunun gerçek bir ölçüm mü, yanıtsızlık mı olduğunu analizden önce netleştirin.",
        source: { label: "IBM: Missing values", href: "https://www.ibm.com/docs/en/spss-statistics/30.0.0?topic=tables-missing-values" },
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
        source: { label: "Australian National University: Focusing", href: "https://www.anu.edu.au/students/academic-skills/research-writing/research-proposals/focusing" },
      },
      {
        title: "Kendi enstitünüzün formunu esas alın",
        text: "Öneri başlıkları disipline ve kurumun beklentilerine göre değişir. ANU’nun örnek yapısında araştırma soruları, literatür, yöntem, takvim ve kaynakça gibi bölümler bulunur. Bu başlıkları başka bir üniversitenin formuna aynen taşımak yerine, kendi formunuzun hangi bilgiyi istediğini kontrol edin.",
        items: ["Amaç bölümünde yanıtlanacak soruyu açıkça belirtin.", "Yöntemde hangi veriyi nasıl toplayacağınızı ve inceleyeceğinizi açıklayın.", "Takvimde kaynak tarama, veri toplama, analiz ve yazım aşamalarını planlayın."],
        source: { label: "Australian National University: Structuring", href: "https://www.anu.edu.au/students/academic-skills/research-writing/research-proposals/structuring" },
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
        source: { label: "APA Style: Reference examples", href: "https://apastyle.apa.org/style-grammar-guidelines/references/examples" },
      },
      {
        title: "Dergi makalesinde kontrol edilecek bilgiler",
        text: "Yazar, yıl, makale başlığı, dergi adı, cilt, sayı, sayfa aralığı veya makale numarası ve varsa DOI bilgisini yayının kendisinden kontrol edin. Dergi adı ve cilt numarası italik yazılır. DOI varsa bağlantı biçimi kullanılır. Aşağıdaki sıra bir alan şemasıdır; gerçek bir eser künyesi değildir.",
        items: ["Yazar → yıl → makale başlığı → dergi adı → cilt ve sayı → sayfalar veya makale numarası → varsa DOI."],
        source: { label: "APA Style: Journal article references", href: "https://apastyle.apa.org/style-grammar-guidelines/references/examples/journal-article-references" },
      },
      {
        title: "Kitapta yayınevi ve baskı bilgisi",
        text: "Yazarlı bir kitabın temel kaydı yazar, yıl, kitap adı ve yayınevinden oluşur. Kitap adı italik yazılır; varsa baskı bilgisi başlıktan sonra parantez içinde verilir. Yayınevinin bulunduğu şehir eklenmez. Kitabın DOI’si varsa kaydın sonunda yer alır. Editörlü kitap veya kitap bölümü için ilgili ayrı örneğe bakın.",
        source: { label: "APA Style: Book/ebook references", href: "https://apastyle.apa.org/style-grammar-guidelines/references/examples/book-references" },
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
        source: { label: "MIT Communication Lab: What makes a thesis defense great?", href: "https://mitcommlab.mit.edu/be/2026/02/25/defense-season-wrapped-what-makes-a-thesis-defense-great/" },
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
        source: { label: "MIT: Thesis Defense", href: "https://www.mit.edu/course/21/21.guide/th-defen.htm" },
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
        title: "Normallik neden sorulur?",
        text: "t-testi, ANOVA ve Pearson korelasyonu gibi parametrik testler, verinin (ya da artıkların) yaklaşık normal dağıldığını varsayar. Bu varsayım ciddi biçimde bozulduğunda test sonuçları yanıltıcı olabilir. Bu yüzden analiz bölümünde test seçiminizi gerekçelendirirken normallik incelemesini de raporlamanız beklenir.",
      },
      {
        title: "SPSS'te iki test birlikte gelir",
        text: "SPSS'in Explore (Keşfet) menüsündeki Tests of Normality tablosu Kolmogorov-Smirnov ve Shapiro-Wilk sonuçlarını yan yana verir. Her iki testte de sıfır hipotezi verinin normal dağıldığıdır; p değeri .05'ten küçükse normallikten anlamlı sapma olduğu sonucuna varılır. Shapiro-Wilk testi özellikle küçük ve orta büyüklükteki örneklemlerde daha sık tercih edilir.",
        source: { label: "NIST/SEMATECH: Anderson-Darling and Shapiro-Wilk tests", href: "https://www.itl.nist.gov/div898/handbook/prc/section2/prc213.htm" },
      },
      {
        title: "Büyük örneklemde testlere tek başına güvenmeyin",
        text: "Örneklem büyüdükçe normallik testleri çok küçük sapmaları bile anlamlı bulur. Birkaç yüz katılımcılı bir çalışmada p < .05 çıkması, dağılımın analiz için uygunsuz olduğu anlamına gelmeyebilir. Bu nedenle testlerin yanında grafiklere ve betimsel değerlere de bakmak gerekir.",
        items: [
          "Q-Q grafiğinde noktaların köşegen çizgiye ne kadar yakın durduğu.",
          "Histogramın genel şekli ve uç değerler.",
          "Çarpıklık ve basıklık değerleri; kaynaklarda ±1, ±1,5 ya da ±2 gibi farklı sınırlar önerilir. Hangi sınırı kullandığınızı kaynağıyla birlikte yazın.",
        ],
        source: { label: "NIST/SEMATECH: Quantile-Quantile Plot", href: "https://www.itl.nist.gov/div898/handbook/eda/section3/eda33o.htm" },
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
        text: "APA 7'de değeri 1'i aşamayan istatistikler başta sıfır olmadan yazılır. Örnek cümledeki değerler uydurmadır, yalnız yazım biçimini göstermek için verildi.",
        items: ["\"Ölçeğin bu çalışmadaki Cronbach alfa iç tutarlılık katsayısı toplam puan için .87, alt boyutlar için .74 ile .82 arasında bulunmuştur.\""],
        source: { label: "APA Style: Numbers and Statistics Guide", href: "https://apastyle.apa.org/instructional-aids/numbers-statistics-guide.pdf" },
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
        source: { label: "Hayes: The PROCESS macro for SPSS, SAS, and R", href: "https://www.processmacro.org/index.html" },
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
        source: { label: "APA Style: Sample tables", href: "https://apastyle.apa.org/style-grammar-guidelines/tables-figures/sample-tables" },
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
        source: { label: "APA Style: Numbers and Statistics Guide", href: "https://apastyle.apa.org/instructional-aids/numbers-statistics-guide.pdf" },
      },
      {
        title: "Metin içinde raporlama",
        text: "Metinde testi, serbestlik derecesini, test istatistiğini, p değerini ve etki büyüklüğünü birlikte verin. Örneklerdeki sayılar gerçek bir çalışmadan alınmadı, yalnız biçimi gösteriyor.",
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
        text: "Nitel çalışmada okur, analizin nasıl yürüdüğünü izleyebilmek ister. Kod listesini ve tema şemasını ekte vermek, kodlayıcılar arası uyumu ya da uzman görüşünü anlatmak, katılımcı alıntılarını kod numarasıyla göstermek sık kullanılan yollardır.",
      },
      {
        title: "Bulguları yazarken",
        text: "Her temayı kısa bir tanımla açın, ardından alt temaları ve onları destekleyen alıntıları verin. Alıntı sizin yorumunuzu desteklemeli; yorumun yerine geçmemelidir. Katılımcıların kimliğini ortaya çıkarabilecek bilgileri alıntılardan çıkarın.",
      },
    ],
  },
  {
    slug: "tez-bulgular-bolumu-nasil-yazilir",
    title: "Tezde Bulgular Bölümü Nasıl Yazılır?",
    seoTitle: "Tezde Bulgular Bölümü Nasıl Yazılır?",
    published: "2026-11-12",
    updated: "2026-11-12",
    description: "Bulgular bölümünü araştırma sorularına göre düzenleme, tablo ve metni dengeleme, yorumu tartışmaya bırakma ve sık yapılan hatalar.",
    service: { href: "/spss-analizi", label: "SPSS analiz danışmanlığı" },
    analysis: { href: "/analiz", label: "Analiz türleri" },
    sections: [
      {
        title: "Bulgular bölümü neyi anlatır?",
        text: "Bulgular bölümü, analizlerden elde ettiğiniz sonuçları yorum katmadan ve araştırma sorularınıza cevap verecek biçimde sunar. Sonuçların neden böyle çıktığını ve alanyazınla nasıl ilişkilendiğini tartışma bölümüne bırakın. Bu ayrım, jürinin en sık dikkat ettiği noktalardan biridir.",
      },
      {
        title: "Düzeni araştırma sorularına göre kurun",
        text: "Bölümü analiz türlerine göre değil, araştırma sorularınızın ya da hipotezlerinizin sırasına göre düzenleyin. Her alt başlıkta önce hangi soruya cevap aradığınızı belirtin, ardından tabloyu ve kısa açıklamasını verin.",
        items: [
          "Katılımcılara ait betimsel bilgiler (demografik tablo).",
          "Ölçeklerin betimsel istatistikleri ve güvenirlik değerleri.",
          "Her araştırma sorusu veya hipotez için ayrı alt başlık.",
          "Gerekiyorsa hipotez sonuçlarını özetleyen bir tablo.",
        ],
      },
      {
        title: "Tablo ile metni dengeleyin",
        text: "Metin, tablodaki her sayıyı tekrar etmemelidir. Okura tablonun ne gösterdiğini, en önemli farkın ya da ilişkinin ne olduğunu ve sonucun hipotezi destekleyip desteklemediğini söyleyin. Test istatistiği, serbestlik derecesi, p değeri ve etki büyüklüğünü metinde bir kez vermek yeterlidir.",
      },
      {
        title: "Sık yapılan hatalar",
        text: "Bulgular bölümünü inceleyen danışman ve jüri üyelerinin en sık işaret ettiği sorunlar şunlardır:",
        items: [
          "SPSS çıktısını düzenlemeden doğrudan teze yapıştırmak.",
          "Anlamlı çıkmayan sonuçları raporlamamak.",
          "Korelasyon ya da regresyon sonucunu neden-sonuç ilişkisi gibi yorumlamak.",
          "Tablodaki değerlerle metindeki değerlerin farklı olması.",
          "Bulgular bölümünde alanyazına atıf yaparak tartışma yürütmek.",
        ],
      },
      {
        title: "Son kontrol",
        text: "Her araştırma sorusunun bir cevabı olduğundan, tablo numaralarının sırayla ilerlediğinden ve her tablonun metinde anıldığından emin olun. Raporlama biçimi için SPSS çıktılarını APA 7'ye göre raporlama rehberimize bakabilirsiniz.",
      },
    ],
  },
  {
    slug: "yontem-bolumu-istatistiksel-analiz",
    title: "Yöntem Bölümünde Verilerin Analizi Kısmı Nasıl Yazılır?",
    seoTitle: "Yöntem Bölümünde Verilerin Analizi Yazımı",
    published: "2026-11-12",
    updated: "2026-11-12",
    description: "Yöntem bölümündeki verilerin analizi kısmında program, ön işlemler, varsayım kontrolleri, testler ve anlamlılık düzeyinin yazımı.",
    service: { href: "/tez-danismanligi", label: "Tez danışmanlığı" },
    analysis: { href: "/analiz", label: "Analiz türleri" },
    sections: [
      {
        title: "Bu kısım ne işe yarar?",
        text: "Verilerin analizi kısmını okuyan biri, sonuçlarınıza nasıl ulaştığınızı adım adım görebilmeli. İyi yazılmış bir analiz bölümü, başka bir araştırmacının aynı veriyle aynı adımları tekrar edebileceği kadar açık olmalıdır.",
      },
      {
        title: "Hangi bilgiler yer almalı?",
        text: "Aşağıdaki sıra çoğu tez için uygun bir başlangıçtır; kendi enstitünüzün beklentisine göre uyarlayın.",
        items: [
          "Kullanılan program ve sürümü (ör. IBM SPSS Statistics 27).",
          "Veri temizleme: eksik veri, aykırı değer ve ters madde işlemleri.",
          "Varsayım kontrolleri: normallik, varyans homojenliği ve nasıl incelendiği.",
          "Her araştırma sorusu için kullanılan test ve seçilme gerekçesi.",
          "Anlamlılık düzeyi (çoğunlukla .05) ve raporlanan etki büyüklükleri.",
        ],
      },
      {
        title: "Testi neden seçtiğinizi yazın",
        text: "\"Verilerin analizinde t-testi kullanılmıştır\" cümlesi yetersizdir. Testin neden seçildiğini, örneğin iki bağımsız grubun karşılaştırıldığını ve verinin normal dağıldığını belirtin. Parametrik olmayan testlere geçtiyseniz bunun hangi bulguya dayandığını açıklayın.",
      },
      {
        title: "Planlanan ile yapılanı eşleştirin",
        text: "Yöntem bölümünde anlattığınız her analizin bulgular bölümünde bir karşılığı olmalıdır. Analiz planınız değiştiyse yöntem bölümünü de güncelleyin; bu uyumsuzluk savunmalarda sık sorulan konulardandır.",
      },
    ],
  },
  {
    slug: "etki-buyuklugu-raporlama",
    title: "Etki Büyüklüğü Nedir, Tezde Nasıl Raporlanır?",
    seoTitle: "Etki Büyüklüğü Nedir, Nasıl Raporlanır?",
    published: "2026-11-12",
    updated: "2026-11-12",
    description: "Cohen's d, eta kare, r ve odds oranı gibi etki büyüklüklerinin anlamı, küçük-orta-büyük sınıflaması ve raporlama örnekleri.",
    service: { href: "/spss-analizi", label: "SPSS analiz danışmanlığı" },
    analysis: { href: "/analiz/t-testi-ve-anova", label: "t-Testi ve ANOVA danışmanlığı" },
    sections: [
      {
        title: "p değeri yetmez mi?",
        text: "p değeri, gözlenen farkın tesadüfle açıklanıp açıklanamayacağını gösterir; farkın ne kadar büyük olduğunu göstermez. Örneklem büyüdükçe çok küçük farklar bile anlamlı çıkabilir. Etki büyüklüğü, bulgunun pratik önemini anlatır ve APA 7 raporlamasında beklenir.",
      },
      {
        title: "Sık kullanılan etki büyüklükleri",
        text: "Hangi ölçünün raporlanacağı yapılan analize bağlıdır.",
        items: [
          "t-testi: Cohen's d.",
          "ANOVA: eta kare (η²) veya kısmi eta kare (ηp²).",
          "Korelasyon: r katsayısının kendisi.",
          "Regresyon: R² ve f².",
          "Ki-kare: phi veya Cramer's V.",
          "Lojistik regresyon: odds oranı.",
        ],
      },
      {
        title: "Küçük, orta, büyük",
        text: "Cohen (1992), d için yaklaşık 0,20'yi küçük, 0,50'yi orta, 0,80'i büyük; r için .10, .30 ve .50 değerlerini benzer biçimde sınıflandırmıştır. Cohen bu sınırların genel bir yol gösterici olduğunu, alanın kendi bulgularıyla birlikte yorumlanması gerektiğini de vurgular.",
        source: { label: "Cohen (1992), Psychological Bulletin", href: "https://doi.org/10.1037/0033-2909.112.1.155" },
      },
      {
        title: "Raporlama örneği",
        text: "Aşağıdaki cümle yalnız biçim örneği; sayılar gerçek değil.",
        items: ["\"Deney grubunun son test puanları kontrol grubundan anlamlı düzeyde yüksektir, t(58) = 2.84, p = .006, d = 0.73. Bu fark orta-büyük düzeyde bir etkiye karşılık gelmektedir.\""],
      },
    ],
  },
  {
    slug: "orneklem-buyuklugu-hesaplama",
    title: "Tezde Örneklem Büyüklüğü Nasıl Hesaplanır? G*Power Rehberi",
    seoTitle: "Örneklem Büyüklüğü Nasıl Hesaplanır?",
    published: "2026-11-12",
    updated: "2026-11-12",
    description: "G*Power ile güç analizi: etki büyüklüğü, alfa ve güç değerlerinin seçimi, a priori hesaplama ve yöntem bölümünde raporlama.",
    service: { href: "/tez-danismanligi", label: "Tez danışmanlığı" },
    analysis: { href: "/analiz/orneklem-buyuklugu-guc-analizi", label: "Örneklem büyüklüğü ve güç analizi" },
    sections: [
      {
        title: "Neden güç analizi?",
        text: "Küçük bir örneklem gerçek bir etkiyi yakalayamayabilir; gereğinden büyük bir örneklem ise zaman ve kaynak kaybıdır. Güç analiziyle, planladığınız analiz için kaç kişiye ulaşmanız gerektiğini baştan hesaplarsınız. Etik kurullar ve tez izleme komiteleri bu hesabı giderek daha sık soruyor.",
      },
      {
        title: "G*Power'da a priori hesaplama",
        text: "G*Power, Heinrich Heine Üniversitesi tarafından ücretsiz dağıtılan bir programdır (Faul vd., 2007). Hesaplama için şu adımlar izlenir:",
        items: [
          "Test ailesini seçin (t tests, F tests, χ² tests gibi).",
          "Planladığınız analizi seçin (ör. iki bağımsız grubun ortalamalarının farkı).",
          "Güç analizi türü olarak \"A priori\" seçin.",
          "Etki büyüklüğünü, alfa düzeyini (.05) ve gücü (.80 veya .90) girin.",
          "Program toplam örneklem büyüklüğünü verir.",
        ],
        source: { label: "Heinrich-Heine-Universität Düsseldorf: G*Power", href: "https://www.psychologie.hhu.de/arbeitsgruppen/allgemeine-psychologie-und-arbeitspsychologie/gpower" },
      },
      {
        title: "Etki büyüklüğünü nereden alacağım?",
        text: "En savunulabilir yol, benzer çalışmaların bulgularından hesaplanan etki büyüklüğüdür. Bulunamıyorsa Cohen'in küçük-orta-büyük sınıflaması gerekçesiyle kullanılabilir. Etki büyüklüğünü küçük seçmek gereken örneklemi hızla büyütür.",
        source: { label: "Faul vd. (2007), Behavior Research Methods", href: "https://doi.org/10.3758/BF03193146" },
      },
      {
        title: "Yöntem bölümüne nasıl yazılır?",
        text: "Biçim örneği (sayılar gerçek bir çalışmadan değil):",
        items: ["\"Örneklem büyüklüğü G*Power 3.1 programıyla hesaplanmıştır. Bağımsız örneklemler t-testi için orta düzey etki büyüklüğü (d = 0.50), .05 anlamlılık düzeyi ve .80 güç ile gereken toplam örneklem 128 kişi olarak bulunmuştur.\""],
      },
    ],
  },
  {
    slug: "aykiri-deger-veri-temizleme",
    title: "SPSS'te Aykırı Değer ve Veri Temizleme Adımları",
    seoTitle: "SPSS'te Aykırı Değer ve Veri Temizleme",
    published: "2026-11-12",
    updated: "2026-11-12",
    description: "Analizden önce hatalı girişler, eksik veriler, tek ve çok değişkenli aykırı değerler (z puanı, Mahalanobis) nasıl kontrol edilir?",
    service: { href: "/spss-analizi", label: "SPSS analiz danışmanlığı" },
    analysis: { href: "/analiz/regresyon-analizi", label: "Regresyon analizi danışmanlığı" },
    sections: [
      {
        title: "Önce giriş hatalarını bulun",
        text: "Frekans tabloları, değer aralığı dışında kalan girişleri hızlıca gösterir. Örneğin 1-5 arası puanlanan bir maddede 55 değeri görüyorsanız bu bir giriş hatasıdır ve aykırı değer gibi değil, kaynak forma bakılarak düzeltilmelidir.",
      },
      {
        title: "Eksik verileri inceleyin",
        text: "Eksik verinin oranına ve rastgele olup olmadığına bakın. Az sayıda ve rastgele dağılan eksiklikler farklı yollarla ele alınabilir; belirli bir soruda ya da grupta yoğunlaşan eksiklikler ise yorumlanması gereken bir bulgudur. Hangi yolu seçtiğinizi yöntem bölümünde yazın.",
      },
      {
        title: "Tek değişkenli aykırı değerler",
        text: "Bir değişkende diğer gözlemlerden belirgin biçimde uzak duran değerlerdir. Kutu grafiği ve standartlaştırılmış z puanları sık kullanılır; kaynaklarda z puanı için ±3 ya da ±3,29 gibi sınırlar önerilir.",
        source: { label: "NIST/SEMATECH: What are outliers in the data?", href: "https://www.itl.nist.gov/div898/handbook/prc/section1/prc16.htm" },
      },
      {
        title: "Çok değişkenli aykırı değerler",
        text: "Tek başına olağan görünen ama değişkenlerin birleşimi açısından olağan dışı olan gözlemlerdir. Regresyon ve faktör analizi gibi çok değişkenli analizlerden önce Mahalanobis uzaklığı ile incelenir; değer, değişken sayısı kadar serbestlik dereceli ki-kare tablosundaki kritik değerle karşılaştırılır.",
        source: { label: "NIST/SEMATECH: Critical Values of the Chi-Square", href: "https://www.itl.nist.gov/div898/handbook/eda/section3/eda3674.htm" },
      },
      {
        title: "Aykırı değeri silmek zorunda mıyım?",
        text: "Hayır. Aykırı değer gerçek bir gözlem olabilir. Silme, dönüştürme ya da olduğu gibi bırakma kararını gerekçesiyle verin ve kaç gözlemin etkilendiğini raporlayın. Sonuçlar aykırı değerlerle ve onlarsız çok farklıysa bunu da belirtmek dürüst bir raporlamadır.",
      },
    ],
  },
  {
    slug: "amos-mu-spss-mi",
    title: "Tezim İçin AMOS mu, SPSS mi, PROCESS mi Kullanmalıyım?",
    seoTitle: "AMOS mu SPSS mi PROCESS mi? Program Seçimi",
    published: "2026-11-12",
    updated: "2026-11-12",
    description: "SPSS, PROCESS makrosu ve AMOS'un hangi analizler için uygun olduğu, araştırma modeline göre program seçimi ve sık karışıklıklar.",
    service: { href: "/spss-analizi", label: "SPSS analiz danışmanlığı" },
    analysis: { href: "/analiz/amos-yapisal-esitlik-modeli", label: "AMOS ve yapısal eşitlik modeli" },
    sections: [
      {
        title: "Seçimi araştırma modeli belirler",
        text: "Hangi programın kullanılacağı, araştırma modelinizin yapısına bağlıdır. Önce hipotezlerinizi ve değişkenler arasındaki ilişkileri çizin; ardından bu modeli sınamaya uygun aracı seçin.",
      },
      {
        title: "SPSS",
        text: "Betimsel istatistikler, güvenirlik analizi, t-testi, ANOVA, korelasyon, regresyon ve açımlayıcı faktör analizi gibi analizlerin çoğu SPSS'te yapılır. Tez çalışmalarının büyük bölümü için yeterlidir.",
      },
      {
        title: "PROCESS makrosu",
        text: "SPSS'e eklenen PROCESS, aracı ve düzenleyici etki modellerini gözlenen değişkenlerle (ölçek toplam veya ortalama puanlarıyla) sınar. Dolaylı etkiler için bootstrap güven aralığı üretir. Modeliniz \"X, M aracılığıyla Y'yi etkiler\" biçimindeyse ve ölçüm modeli kurmanız beklenmiyorsa PROCESS uygun bir seçimdir.",
      },
      {
        title: "AMOS",
        text: "AMOS, gizil değişkenlerle çalışan yapısal eşitlik modelleri için kullanılır. Doğrulayıcı faktör analizi, ölçüm modeli ve birden fazla bağımlı değişkenin aynı modelde sınandığı yol analizleri AMOS'un güçlü olduğu alanlardır.",
      },
      {
        title: "Kısa karar listesi",
        text: "Aşağıdaki eşleştirmeler genel bir yol göstericidir; danışmanınızın ve kurumunuzun beklentisi her zaman önce gelir.",
        items: [
          "Grup karşılaştırması, ilişki, basit/çoklu regresyon → SPSS.",
          "Ölçek puanlarıyla aracı veya düzenleyici etki → SPSS + PROCESS.",
          "Ölçeğin yapısını doğrulamak (DFA) → AMOS.",
          "Gizil değişkenlerle birden çok yolu birlikte sınamak → AMOS.",
        ],
      },
    ],
  },
  {
    slug: "ahp-topsis-nedir",
    title: "AHP ve TOPSIS Nedir? Çok Kriterli Karar Vermeye Giriş",
    seoTitle: "AHP ve TOPSIS Nedir? Adım Adım Giriş",
    published: "2026-11-12",
    updated: "2026-11-12",
    description: "AHP ile kriter ağırlıklandırma, tutarlılık oranı ve TOPSIS ile alternatif sıralamanın mantığı; tezlerde birlikte kullanımı.",
    service: { href: "/tez-danismanligi", label: "Tez danışmanlığı" },
    analysis: { href: "/analiz/cok-kriterli-karar-verme-ahp-topsis", label: "Çok kriterli karar verme danışmanlığı" },
    sections: [
      {
        title: "Çok kriterli karar verme nedir?",
        text: "Bir kararı birden fazla ve çoğu zaman birbiriyle çelişen ölçüte göre vermeniz gerektiğinde (ör. maliyet düşük ama kalite de yüksek olsun) çok kriterli karar verme yöntemleri kullanılır. Bu yöntemler kararı şeffaf ve tekrar edilebilir hâle getirir.",
      },
      {
        title: "AHP: Kriterleri ağırlıklandırma",
        text: "Saaty'nin geliştirdiği Analitik Hiyerarşi Süreci, kriterleri ikişer ikişer karşılaştırarak her birinin göreli önemini hesaplar. Karşılaştırmalarda 1-9 ölçeği kullanılır. Yanıtların kendi içinde tutarlı olup olmadığı tutarlılık oranıyla (CR) kontrol edilir; .10'un altındaki değerler genellikle kabul edilebilir sayılır.",
        source: { label: "Saaty (2008), International Journal of Services Sciences", href: "https://doi.org/10.1504/IJSSCI.2008.017590" },
      },
      {
        title: "TOPSIS: Alternatifleri sıralama",
        text: "TOPSIS, her alternatifin en iyi (ideal) çözüme yakınlığını ve en kötü çözüme uzaklığını birlikte hesaplar. Adımlar şöyledir:",
        items: [
          "Karar matrisinin oluşturulması.",
          "Matrisin normalize edilmesi.",
          "Kriter ağırlıklarıyla çarpılması (ağırlıklar AHP, ENTROPİ veya CRITIC ile bulunabilir).",
          "İdeal ve negatif ideal çözümlerin belirlenmesi.",
          "Her alternatif için yakınlık katsayısının hesaplanması ve sıralama.",
        ],
      },
      {
        title: "Tezlerde birlikte kullanımı",
        text: "Sık kullanılan bir tasarım, ağırlıkları AHP (uzman görüşü) ya da ENTROPİ (veri) ile bulup sıralamayı TOPSIS ile yapmaktır. Yöntem bölümünde neden bu kombinasyonu seçtiğinizi ve sonuçların farklı ağırlıklarla nasıl değiştiğini (duyarlılık analizi) göstermek çalışmayı güçlendirir.",
      },
    ],
  },
  {
    slug: "bibliyometrik-analiz-adimlari",
    title: "Bibliyometrik Analiz Nasıl Yapılır? VOSviewer ve Biblioshiny",
    seoTitle: "Bibliyometrik Analiz Nasıl Yapılır?",
    published: "2026-11-12",
    updated: "2026-11-12",
    description: "Arama sorgusu, Web of Science/Scopus verisi, veri temizleme, VOSviewer ağ haritaları ve Biblioshiny analizleriyle bibliyometri adımları.",
    service: { href: "/makale-danismanligi", label: "Makale danışmanlığı" },
    analysis: { href: "/analiz/bibliyometrik-analiz", label: "Bibliyometrik analiz danışmanlığı" },
    sections: [
      {
        title: "Bibliyometrik analiz ne işe yarar?",
        text: "Bir alandaki yayınların sayısal özelliklerini inceleyerek alanın gelişimini, öne çıkan yazar ve dergileri, araştırma kümelerini ve yükselen konuları ortaya koyar. Klasik literatür taramasının yanına sayılarla desteklenen bir harita koyar.",
        source: { label: "Zupic ve Čater (2015), Organizational Research Methods", href: "https://doi.org/10.1177/1094428114562629" },
      },
      {
        title: "1. Arama stratejisi",
        text: "Anahtar kelimeleri, eşanlamlıları ve mantıksal bağlaçları (AND, OR) içeren bir sorgu yazın. Yıl aralığını, belge türlerini ve dili belirleyin. Sorguyu ve arama tarihini raporlayın; böylece analiz tekrar edilebilir olur.",
      },
      {
        title: "2. Veri derleme ve temizleme",
        text: "Web of Science veya Scopus'tan kayıtları tam kayıt ve atıflarla birlikte indirin. Aynı yazarın farklı yazımlarını ve eş anlamlı anahtar kelimeleri birleştirmezseniz aynı kişi ya da kavram haritada iki ayrı nokta olarak görünür.",
      },
      {
        title: "3. Analiz ve görselleştirme",
        text: "Performans analizi ile bilim haritalama birlikte kullanılır.",
        items: [
          "Yıllara göre yayın ve atıf sayıları.",
          "En etkili yazarlar, dergiler, kurumlar ve ülkeler.",
          "Ortak yazarlık ağları (iş birlikleri).",
          "Ortak atıf ve bibliyografik eşleşme (entelektüel yapı).",
          "Anahtar kelime birlikte görülme ağları ve tematik haritalar.",
        ],
        source: { label: "VOSviewer", href: "https://www.vosviewer.com/" },
      },
      {
        title: "4. Yorum",
        text: "Haritadaki her kümenin hangi temayı temsil ettiğini, zaman içindeki değişimi ve az çalışılmış konuları açıklayın. Bibliometrix (Biblioshiny) paketi tematik evrim ve stratejik diyagram gibi ek analizler sunar.",
        source: { label: "Bibliometrix", href: "https://www.bibliometrix.org/" },
      },
    ],
  },
  {
    slug: "benzerlik-orani-kac-olmali",
    title: "Tezde Benzerlik Oranı Kaç Olmalı?",
    seoTitle: "Tezde Benzerlik Oranı Kaç Olmalı?",
    published: "2026-11-12",
    updated: "2026-11-12",
    description: "Benzerlik oranı için tek bir ulusal sınır yoktur; enstitü yönergeleri, filtreler, tek kaynak sınırı ve yüksek oranın nedenleri.",
    service: { href: "/akademik-editorluk", label: "Akademik editörlük ve kaynak gösterme" },
    analysis: { href: "/#rapor-hizmeti", label: "Benzerlik raporu hizmeti" },
    sections: [
      {
        title: "Herkes için geçerli bir sınır yok",
        text: "Benzerlik oranı için tüm üniversitelerde geçerli tek bir sınır bulunmuyor. Sınırları her üniversite ya da enstitü kendi yönergesinde belirliyor ve bu sınırlar tez türüne göre de değişebiliyor. Bu yüzden ilk adım, kendi enstitünüzün güncel benzerlik yönergesini okumaktır.",
      },
      {
        title: "Yönergede nelere bakmalısınız?",
        text: "Yüzdeye bakmadan önce raporun hangi ayarlarla alındığını kontrol edin.",
        items: [
          "Toplam benzerlik oranı için belirlenen üst sınır.",
          "Tek bir kaynaktan gelen benzerlik için ayrı bir sınır olup olmadığı.",
          "Kaynakça ve alıntıların rapordan çıkarılıp çıkarılmadığı.",
          "Küçük eşleşmelerin (belirli kelime sayısının altındakiler) hariç tutulup tutulmadığı.",
          "Raporun hangi bölümleri kapsaması gerektiği (ör. giriş-sonuç arası).",
        ],
      },
      {
        title: "Oran neden yüksek çıkar?",
        text: "Yüksek oran her zaman intihal anlamına gelmez. Sık görülen nedenler şunlardır:",
        items: [
          "Rapor filtreleri uygulanmadan alınmış olması.",
          "Ölçek maddeleri, yasal metinler, standart tanımlar gibi değiştirilemeyecek ifadeler.",
          "Doğrudan alıntıların tırnak içine alınmamış olması.",
          "Kendi yayımlanmış çalışmanızdan veya önceki tez taslaklarınızdan gelen eşleşmeler.",
          "Kaynağa atıf yapılmadan yeniden ifade edilmiş paragraflar.",
        ],
      },
      {
        title: "Jüri rapora nasıl bakar?",
        text: "Benzerlik raporu intihal kararı vermez, yalnız eşleşmeleri gösterir. Danışmanlar ve jüri yüzdenin yanında eşleşmelerin nerede olduğuna ve atıf yapılıp yapılmadığına da bakar. Alıntıları kurallara uygun göstermek ve yararlandığınız her kaynağa atıf yapmak, oranı tartışmalı olmaktan çıkarır.",
      },
    ],
  },
  {
    slug: "benzerlik-raporu-nasil-okunur",
    title: "Benzerlik Raporu Nasıl Okunur?",
    seoTitle: "Benzerlik Raporu Nasıl Okunur?",
    published: "2026-11-12",
    updated: "2026-11-12",
    description: "Benzerlik raporunda genel oran, kaynak listesi, renkli eşleşmeler ve filtrelerin anlamı; hangi eşleşmenin sorun olduğunu ayırt etme.",
    service: { href: "/akademik-editorluk", label: "Akademik editörlük ve kaynak gösterme" },
    analysis: { href: "/#rapor-hizmeti", label: "Benzerlik raporu hizmeti" },
    sections: [
      {
        title: "Raporun üç temel parçası",
        text: "Benzerlik raporlarının çoğu benzer bir düzen kullanır.",
        items: [
          "Genel benzerlik oranı: Metnin ne kadarının başka kaynaklarla eşleştiğini gösteren yüzde.",
          "Kaynak listesi: Eşleşmelerin hangi kaynaklardan geldiği ve her kaynağın oranı.",
          "Renkli işaretlemeler: Metinde hangi cümlenin hangi kaynakla eşleştiğini gösteren vurgular.",
        ],
      },
      {
        title: "Önce kaynak listesine bakın",
        text: "Genel oran yerine kaynak listesinden başlayın. Tek bir kaynaktan yüksek oranda eşleşme varsa o bölüm öncelikli olarak incelenmelidir. Çok sayıda kaynaktan küçük eşleşmeler ise çoğu zaman ortak terimler ve kalıp ifadelerden gelir.",
      },
      {
        title: "Filtreleri kontrol edin",
        text: "Kaynakça, tırnak içindeki alıntılar ve küçük eşleşmeler rapora dahil mi değil mi, oran buna göre epey değişir. Raporu, enstitünüzün yönergesinde belirtilen ayarlarla alıp almadığınızı kontrol edin.",
      },
      {
        title: "Hangi eşleşme sorun?",
        text: "Her eşleşme aynı ağırlıkta değildir.",
        items: [
          "Genellikle sorun değil: Atıf yapılmış ve tırnak içine alınmış doğrudan alıntılar, ölçek maddeleri, yerleşik terimler, kaynakça satırları.",
          "İncelenmeli: Atıf yapılmadan bir kaynaktan aktarılmış paragraflar, tırnak işareti unutulmuş alıntılar.",
          "Kendi eşleşmeleriniz: Daha önce yayımlanmış kendi çalışmanızdan gelen eşleşmeler de atıf gerektirebilir.",
        ],
      },
      {
        title: "Ne yapmalısınız?",
        text: "İncelenmesi gereken bölümlerde kaynağı doğru gösterin, doğrudan alıntıyı kurallara uygun işaretleyin ya da konuyu kendi cümlelerinizle ve atıfla yeniden anlatın. Asıl iş, yararlandığınız kaynakları açıkça göstermek.",
      },
    ],
  },
];
