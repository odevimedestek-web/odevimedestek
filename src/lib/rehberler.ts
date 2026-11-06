export type Guide = {
  slug: string;
  title: string;
  description: string;
  service: { href: string; label: string };
  sections: { title: string; text: string; items?: string[]; source?: { label: string; href: string } }[];
};

export const rehberler: Guide[] = [
  {
    slug: "spss-veri-hazirlama",
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
];
