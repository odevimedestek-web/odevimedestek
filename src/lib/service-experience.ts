export type ServiceExperience = { title: string; description: string; related: string[]; faqs: { q: string; a: string }[] };
export const serviceExperience: Record<string, ServiceExperience> = {
  "/tez-danismanligi": {
    "title": "Tez Danışmanlığı",
    "description": "Konu, araştırma sorusu ve bölüm içeriği için rehberlik.",
    "related": [
      "/spss-analizi",
      "/tez-bicimlendirme",
      "/sunum-hazirlama"
    ],
    "faqs": [
      {
        "q": "Tez öneri formum henüz onaylanmadıysa başvurabilir miyim?",
        "a": "Mevcut formunuzu ve danışmanınızın notlarını paylaşabilirsiniz. Görüşmede hangi noktaların netleştirilmesi gerektiğini ele alırız; öneri onayı ilgili kurumun ve danışmanınızın değerlendirmesindedir."
      },
      {
        "q": "Hazırladığım bölümlerin tamamını değiştirmem gerekir mi?",
        "a": "Destek talebinizi ilgili bölüm ve danışman notları üzerinden değerlendirelim. Hangi kısımların gözden geçirileceğini baştan belirleyerek mevcut çalışmanız üzerinden ilerleriz."
      }
    ]
  },
  "/spss-analizi": {
    "title": "SPSS Analiz Danışmanlığı",
    "description": "Verileriniz hazırsa test seçimini ve sonuçların yorumunu birlikte ele alın.",
    "related": [
      "/spss-analiz-kontrolu",
      "/spss-analiz-ucretleri",
      "/tez-danismanligi"
    ],
    "faqs": [
      {
        "q": "Excel dosyam var; önce SPSS dosyasına çevirmem gerekir mi?",
        "a": "Ön görüşmede mevcut Excel dosyanızın yapısını ve değişken açıklamalarını paylaşabilirsiniz. Veri girişinin ve SPSS hazırlığının kapsamını dosyanın durumuna göre belirleriz."
      },
      {
        "q": "Araştırma sorularım değişirse aynı analiz planı kullanılabilir mi?",
        "a": "Değişen soruları ve varsa yeni verileri birlikte değerlendirmek gerekir. Önce hangi testlerin yeniden ele alınacağını ve bunun mevcut çalışma kapsamını nasıl etkileyeceğini netleştirelim."
      }
    ]
  },
  "/spss-analiz-kontrolu": {
    "title": "SPSS Analiz Kontrolü",
    "description": "Analiziniz hazırsa çıktı, tablo ve yorumların uyumunu gözden geçirin.",
    "related": [
      "/spss-analizi",
      "/tez-danismanligi",
      "/makale-danismanligi"
    ],
    "faqs": [
      {
        "q": "Yalnız bir tablonun ekran görüntüsü yeterli mi?",
        "a": "Görüşmeye başlamak için sorununuzu gösterebilir; ancak değerlendirme için araştırma sorusu, değişken açıklamaları ve ilgili çıktılar da gerekebilir. Kontrol edilecek konuyu gördükten sonra gerekli dosyaları netleştirelim."
      },
      {
        "q": "Hakemin istatistikle ilgili notlarını da değerlendirebilir miyiz?",
        "a": "Hakem notunu, ilgili tabloyu ve mevcut analiz çıktısını birlikte paylaşın. Talebin açıklama, raporlama düzeltmesi veya yeni analiz gerektirip gerektirmediğini görüşmede ele alırız."
      }
    ]
  },
  "/tez-bicimlendirme": {
    "title": "Tez Biçimlendirme",
    "description": "Metniniz hazırsa başlık, dizin ve kaynakçayı kılavuza göre düzenleyin.",
    "related": [
      "/tez-danismanligi",
      "/sunum-hazirlama",
      "/makale-danismanligi"
    ],
    "faqs": [
      {
        "q": "Biçimlendirmeden sonra metne yeni bölüm eklersem ne yapmalıyım?",
        "a": "Yeni sürümü ve eklenen bölümleri belirtin. Başlıkların, dizinlerin ve numaralandırmanın yeniden kontrol edilmesi gereken alanlarını birlikte belirleyelim."
      },
      {
        "q": "Kaynakçadaki eksik bilgiler de tamamlanır mı?",
        "a": "Biçim düzeni ile bibliyografik bilgi doğrulama farklı ihtiyaçlardır. Eksik kayıtları ve elinizdeki kaynakları ön görüşmede belirtin; hangi kontrollerin kapsama gireceğini netleştirelim."
      }
    ]
  },
  "/makale-danismanligi": {
    "title": "Makale Danışmanlığı",
    "description": "Metninizi dergi kuralları ve hakem geri bildirimi üzerinden değerlendirin.",
    "related": [
      "/spss-analiz-kontrolu",
      "/bildiri-danismanligi",
      "/tez-bicimlendirme"
    ],
    "faqs": [
      {
        "q": "Dergi seçmeden görüşme yapabilir miyim?",
        "a": "Araştırmanızın konusunu, türünü ve mevcut metnini paylaşabilirsiniz. Dergi seçimiyle ilgili beklentileri konuşuruz; biçimlendirme kapsamı hedef derginin güncel kurallarına göre netleşir."
      },
      {
        "q": "Hakem notlarına göre yalnız belirli bölümler için destek alabilir miyim?",
        "a": "Evet. Hakem notlarını ilgili metin ve varsa analiz çıktılarıyla birlikte paylaşın. Her talebin hangi bölümü etkilediğini ve gereken desteği birlikte belirleyelim."
      }
    ]
  },
  "/bildiri-danismanligi": {
    "title": "Bildiri Danışmanlığı",
    "description": "Kongre özeti, tam metin ve sunum beklentilerine göre hazırlanın.",
    "related": [
      "/sunum-hazirlama",
      "/makale-danismanligi",
      "/spss-analiz-kontrolu"
    ],
    "faqs": [
      {
        "q": "Bildiri özeti ile tam metin desteği aynı kapsamda mı?",
        "a": "Özet ve tam metnin kapsamını ayrı ayrı konuşuruz. Kongrenin istediği belge türünü, kelime sınırını, şablonunu ve son başvuru tarihini paylaşın."
      },
      {
        "q": "Kongre sunumum için de destek alabilir miyim?",
        "a": "Sunum hazırlığı ayrı bir ihtiyaç olarak değerlendirilebilir. Kabul edilen bildirinizi, sunum süresini ve etkinlik şablonunu paylaşarak içeriğin slaytlara nasıl aktarılacağını planlayabilirsiniz."
      }
    ]
  },
  "/seminer-danismanligi": {
    "title": "Seminer Danışmanlığı",
    "description": "Seminer konusunu, kaynak düzenini ve anlatım akışını planlayın.",
    "related": [
      "/sunum-hazirlama",
      "/tez-danismanligi",
      "/makale-danismanligi"
    ],
    "faqs": [
      {
        "q": "Seminer konum kesinleşmediyse nereden başlayabiliriz?",
        "a": "Dersin kapsamını, ilgi alanınızı ve öğretim üyesinin beklentilerini anlatın. Konu sınırını ve erişebildiğiniz kaynakları birlikte değerlendirerek görüşmeye başlayabiliriz."
      },
      {
        "q": "Seminer metni ve sunumu için birlikte destek isteyebilir miyim?",
        "a": "İki ihtiyacı birlikte belirtebilirsiniz. Metinle ilgili geri bildirim ve sunum hazırlığının kapsamı, mevcut belgeleriniz ve dersin kurallarına göre ayrı ayrı netleştirilir."
      }
    ]
  },
  "/sunum-hazirlama": {
    "title": "Sunum Hazırlama Desteği",
    "description": "Tez, seminer veya bildirinizin ana bulgularını anlaşılır slaytlarla aktarın.",
    "related": [
      "/tez-bicimlendirme",
      "/bildiri-danismanligi",
      "/seminer-danismanligi"
    ],
    "faqs": [
      {
        "q": "Hazır slaytlarım var; yalnız düzenleme için başvurabilir miyim?",
        "a": "Mevcut sunumunuzu, dayandığı çalışma dosyasını ve istediğiniz değişiklikleri paylaşabilirsiniz. İçerik akışı, okunabilirlik ve görsel düzen için gerekli kapsamı belirleyelim."
      },
      {
        "q": "Kaç slayt hazırlanacağını nasıl belirliyoruz?",
        "a": "Sunum süresi, kurumun beklentileri ve aktarılacak içerik üzerinden plan yaparız. İlk görüşmede süreyi ve varsa zorunlu şablonu belirtin."
      }
    ]
  },
  "/tubitak-proje-danismanligi": {
    "title": "TÜBİTAK Proje Danışmanlığı",
    "description": "Proje fikrini başvuru formunun istediği kapsamla birlikte değerlendirin.",
    "related": [
      "/spss-analizi",
      "/sunum-hazirlama",
      "/makale-danismanligi"
    ],
    "faqs": [
      {
        "q": "Görüşmede hangi başvuru belgeleri gerekli?",
        "a": "Başvuracağınız programı, güncel çağrı metnini, başvuru formunu ve varsa taslağınızı hazırlayın. Hangi bölümlerde danışmanlık gerektiğini bu belgeler üzerinden belirleyelim."
      },
      {
        "q": "Daha önce değerlendirme almış proje için başvurabilir miyim?",
        "a": "Mevcut proje metniyle birlikte değerlendirme notlarını paylaşabilirsiniz. Notların hangi bölümlere karşılık geldiğini ve yeni başvuruda ele alınacak kapsamı görüşebiliriz."
      }
    ]
  },
  "/spss-analiz-ucretleri": {
    "title": "SPSS Ücret ve Kapsam",
    "description": "Teklif istemeden önce analiz, kontrol ve veri hazırlığı ihtiyaçlarını ayırın.",
    "related": [
      "/spss-analizi",
      "/spss-analiz-kontrolu",
      "/tez-bicimlendirme"
    ],
    "faqs": [
      {
        "q": "Analiz sayısını bilmiyorsam teklif isteyebilir miyim?",
        "a": "Araştırma sorularınızı, anket veya ölçeğinizi ve veri dosyanızın durumunu belirtin. Analiz ihtiyacı görüşmede belirlenebilir; bilmediğiniz test adlarını seçmeniz gerekmez."
      },
      {
        "q": "Tez düzenleme ile analiz için aynı teklif mi hazırlanır?",
        "a": "İki hizmeti birlikte talep edebilirsiniz; ancak analiz ve belge düzenleme farklı kapsamlarla değerlendirilir. Hangi işlerin teklife dahil olduğunu ön görüşmede ayrı ayrı netleştirelim."
      }
    ]
  }
};
