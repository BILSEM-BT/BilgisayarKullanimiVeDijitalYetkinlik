---
title: Google Docs, Sheets ve Slides ile Ortak Çalışma
module_id: 14
updated: '2026-08-20'
summary: Google Dokümanlar, E-Tablolar ve Slaytlar ile tek ortak dosyada yorum, öneri, formül, filtre görünümü, sunum ve sürüm geçmişi kullanarak ekip çalışmasını öğreniyoruz.
quiz: /uygulamalar/2-7-google-docs-sheets-ve-slides-ile-ortak-calisma/
permalink: /dersler/2-7-google-docs-sheets-ve-slides-ile-ortak-calisma/
---
<div class="lesson-goals" markdown="1">

**Bu derste ne öğreneceğiz?**

Google Dokümanlar, E-Tablolar ve Slaytlar üzerinde bir dosyanın onlarca kopyasını dolaştırmak yerine **tek ortak dosyada birlikte çalışma** yöntemini öğreneceğiz. Yorum, öneri, sürüm geçmişi, formül, filtre görünümü, konuşmacı notları ve rol paylaşımı gibi özellikleri gerçek bir proje senaryosunda kullanacağız.

</div>

<div class="collab-demo" aria-label="Ortak çalışma şeması"><span>Öğrenci A<br><b>Düzenleyen</b></span><i>↔</i><span>Tek ortak dosya<br><b>Sürüm geçmişi</b></span><i>↔</i><span>Öğrenci B<br><b>Yorumcu</b></span></div>

## Ortak çalışma: tek dosya, birden fazla kullanıcı

### Neden tek ortak dosya?

E-posta ile `rapor-son.docx`, `rapor-son2.docx`, `rapor-gercekson.docx` gibi kopyalar göndermek hangi sürümün güncel olduğunu karıştırır. Google araçlarında ekip aynı dosyada çalışabilir; değişiklikler otomatik kaydedilir ve kimin ne yaptığı sürüm geçmişinden izlenebilir.

### Roller

Drive ve Google dosyalarında temel roller **Görüntüleyen, Yorumcu ve Düzenleyen** şeklindedir.

- Görüntüleyen: İçeriği okur.
- Yorumcu: Yorum yapabilir ve desteklenen durumlarda öneride bulunabilir.
- Düzenleyen: İçeriği doğrudan değiştirebilir.

Yalnızca yorum yapacak kişiye gereksiz yere Düzenleyen yetkisi vermeyin.

### Yorum ve @ ile kişiyi belirtme

Bir cümleyi, hücreyi veya slayt nesnesini seçip yorum bırakmak, “bu belge yanlış” demekten daha yararlıdır. İyi yorum belirli ve eyleme dönüktür:

> “Bu grafiğin altına veri kaynağını ve yılı ekleyelim mi?”

`@kisi@example.com` biçiminde kişiyi belirtmek, ilgili kişinin dikkatini yoruma çekebilir. Ancak dosyaya erişim izni yine ayrıca gerekir.

### Önerme modu

Google Dokümanlar'da **Önerme** modu, metni doğrudan değiştirmek yerine değişikliği öneri olarak gösterir. Dosya sahibi veya yetkili Düzenleyen öneriyi kabul ya da reddedebilir. Google'ın güncel Türkçe yardımında Yorumcu veya Düzenleyici erişimi olan kullanıcının öneride bulunabildiği belirtilir.

## Google Dokümanlar ile düzenli belge üretme

### Başlık stilleri ve belge yapısı

Uzun bir raporda başlığı yalnızca büyük ve kalın yapmak yerine **Başlık 1, Başlık 2** gibi stiller kullanmak belgenin yapısını belirginleştirir. Bu yaklaşım gezinmeyi ve erişilebilirliği de iyileştirir.

### Belge ana hatları

Başlık stilleri kullanıldığında dokümanın ana hatları uzun belgede bölümler arasında hızlı geçiş sağlar. Öğrenci proje raporunda örneğin:

```text
1. Problem
2. Amaç
3. Yöntem
4. Bulgular
5. Sonuç
6. Kaynakça
```

şeklinde açık bir yapı kurabilir.

### Yorum ile doğrudan düzenleme arasındaki fark

Bir ekip arkadaşının paragrafını doğrudan değiştirmek bazen uygundur; bazen önce yorum veya öneri bırakmak daha doğrudur. Özellikle anlamı değiştiren düzenlemelerde **neden** değişiklik istediğinizi açıklayın.

<div class="practice-panel" markdown="1">

**Birlikte uygula:** İki kişilik test dosyasında bir öğrenci Düzenleyen, diğeri Yorumcu olsun. Yorumcu bir cümleye öneri bıraksın; Düzenleyen öneriyi önce inceleyip sonra kabul etsin. Ardından aynı değişikliğin doğrudan düzenleme ile yapılması arasındaki farkı tartışın.

</div>

## Google E-Tablolar ile ortak veri çalışması

### Hücre, formül ve başvurular

E-Tablolar'da sonuçları elle hesaplamak yerine formül kullanmak veri değişince sonucun da güncellenmesini sağlar.

Örnek:

```text
A            B     C            D
Malzeme      Adet  Birim Fiyat  Toplam
Arduino      3     450          =B2*C2
Servo        5     120          =B3*C3
```

`=B2*C2` aşağı kopyalandığında başvurular göreli olarak değişir. `$A$1` gibi **mutlak başvuru**, kopyalama sırasında aynı hücreyi sabit tutmak gerektiğinde kullanılır.

### Sıralama, filtre ve filtre görünümü

Sıralama verinin sırasını değiştirir. Filtre, belirli koşula uyan satırları gösterir. Ortak çalışma sırasında normal filtre başka kullanıcıların görünümünü etkileyebilir; **Filtre görünümü** kişisel bir filtreleme görünümü oluşturmaya yardım eder.

### Veri doğrulama

Açılır liste, sayı aralığı veya tarih kuralı gibi veri doğrulama seçenekleri ekip halinde veri girerken yazım ve biçim tutarlılığını artırır.

### Korunan alanlar

Kritik formüllerin yanlışlıkla değiştirilmesini azaltmak için belirli hücre/aralıkların düzenleme erişimi sınırlandırılabilir. Bu özellik iyi yetki yönetiminin yerine geçmez; ek bir koruma katmanıdır.

## Google Slaytlar ile ortak sunum hazırlama

### Tema ve düzen

Her slaytta yazı tipi, başlık konumu ve renkleri tek tek değiştirmek yerine tutarlı tema ve düzen kullanmak sunumun profesyonel görünmesini sağlar.

### Konuşmacı notları

Slaytı paragrafla doldurmak yerine konuşmacının ayrıntılı açıklaması **konuşmacı notları** alanına yazılabilir. Slaytta ana fikir ve görsel; notlarda açıklama bulunması sunumu daha okunabilir yapar.

### Ekipte slayt dağılımı

“Her öğrenci iki slayt yapsın” tek başına yeterli plan değildir. Önce ortak:

- tema,
- yazı tipi,
- başlık biçimi,
- kaynak gösterme biçimi,
- son kontrol sorumlusu

belirlenmelidir.

## Sürüm geçmişi, çevrim dışı çalışma ve dosya güvenliği

### Sürüm geçmişi

Google'ın güncel Türkçe yardımında önceki sürümlere **Sürüm geçmişi** üzerinden erişilebildiği ve değişiklikleri yapan kişilerin görülebildiği belirtilir. Düzenleme izni olan kullanıcılar önceki sürümleri inceleyebilir; gerektiğinde eski bir sürüm geri yüklenebilir.

Önemli dönüm noktalarına `Taslak`, `Danışman Kontrolü`, `Teslim Sürümü` gibi adlar vermek sürüm takibini kolaylaştırır.

### Sürüm geçmişi yedekleme değildir

Sürüm geçmişi çok değerlidir fakat bağımsız yedekleme stratejisinin tamamı değildir. Ayrıca yanlışlıkla belgeye parola veya API anahtarı yazıp sonra silerseniz, hassas bilgi eski sürümlerde kalmış olabilir. Böyle bir sır ifşa olduysa yalnız silmek yerine anahtarı iptal etmek/değiştirmek gerekir.

### Çevrim dışı çalışma

Google Dokümanlar, E-Tablolar ve Slaytlar desteklenen tarayıcı ve uygun çevrim dışı ayarlar ile internet yokken de kullanılabilir. Çevrim dışı değişikliklerin bağlantı geri geldiğinde senkronize olması beklenir; önemli dosyada senkronizasyon durumunu kontrol edin.

### Office dosyalarıyla uyumluluk

DOCX, XLSX ve PPTX dosyaları Google araçlarında açılıp düzenlenebilir. Karmaşık makro, özel font, gelişmiş grafik veya sayfa düzeni içeren dosyalarda bire bir uyumluluk garanti edilmemelidir. Teslimden önce hedef biçimde açıp kontrol edin.

## Birlikte uygulayalım

1. Üç kişilik bir ekip oluşturun: içerik sorumlusu, veri sorumlusu, son kontrol sorumlusu.
2. Google Dokümanlar'da proje raporu şablonu hazırlayın ve Başlık stillerini kullanın.
3. Bir cümleye yorum, başka bir cümleye Önerme moduyla değişiklik bırakın.
4. E-Tablolar'da `Malzeme | Adet | Birim Fiyat | Toplam` tablosu kurup formülleri aşağı kopyalayın.
5. Aynı tabloda Filtre görünümü oluşturun.
6. Slaytlar'da ortak tema ve konuşmacı notları kullanarak üç slaytlık kısa sunum hazırlayın.
7. Sürüm geçmişine girip kimin hangi değişikliği yaptığını inceleyin ve bir sürüme ad verin.

## Sık yapılan hatalar ve ders özeti

### Sık yapılan hatalar

- Her revizyonda yeni dosya kopyası üretip “son sürüm” karmaşası oluşturmak.
- Yorumcu yeterliyken herkese Düzenleyen vermek.
- Başlıkları yalnız görsel olarak büyütüp gerçek Başlık stillerini kullanmamak.
- Ortak E-Tabloda filtre uygulayıp diğer kullanıcıların görünümünü fark etmeden değiştirmek.
- Slaytı konuşma metniyle doldurmak.
- Sürüm geçmişini bağımsız yedekleme ile aynı kabul etmek.

### Ders özeti

Bu dersten sonra **Görüntüleyen-Yorumcu-Düzenleyen rolleri, yorum, Önerme modu, başlık stilleri, E-Tablolar formülleri, mutlak/göreli başvuru, Filtre görünümü, konuşmacı notları ve sürüm geçmişini** ortak proje üretiminde kullanabilmelisiniz.

### Güncel kaynak kontrolü

Bu ders hazırlanırken Google Dokümanlar Düzenleyicileri Yardım'ın Türkçe **düzenleme önerme**, **dosyadaki değişiklikleri bulma/sürüm geçmişi** ve **E-Tablolar'da ortak çalışma** belgeleri ile Google Drive'ın Türkçe paylaşım belgeleri esas alınmıştır.
