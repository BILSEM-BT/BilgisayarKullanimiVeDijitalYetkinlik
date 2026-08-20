---
title: Algoritma ve diagrams.net ile Akış Şemaları
module_id: 38
updated: '2026-08-21'
summary: Algoritmayı adım adım düşünmeyi ve diagrams.net'in Türkçe arayüzünde başlangıç-bitiş, işlem, karar, giriş-çıkış ve bağlantı oklarıyla doğru akış şeması kurmayı öğreniyoruz.
quiz: /uygulamalar/6-3-algoritma-ve-diagrams-net-ile-akis-semalari/
permalink: /dersler/6-3-algoritma-ve-diagrams-net-ile-akis-semalari/
---
<div class="lesson-goals" markdown="1">

**Bu derste ne öğreneceğiz? — Program dili: Türkçe**

Bu derste bir problemi bilgisayara aktarmadan önce **algoritma** olarak nasıl parçalara ayıracağımızı ve bu adımları **akış şeması (flowchart)** ile nasıl göstereceğimizi öğreneceğiz. Çizimleri **diagrams.net (draw.io)** aracının Türkçe arayüzünde yapacağız. Şekillerin yalnızca güzel görünmesi değil, işlemi doğru ve izlenebilir biçimde anlatması temel ölçüt olacak.

</div>

<div class="archive-flow" aria-label="Algoritma geliştirme akışı"><span>Problemi tanımla</span><i>→</i><span>Girdi / çıktı belirle</span><i>→</i><span>Adımları sırala</span><i>→</i><span>Kararları göster</span><i>→</i><span>Örnekle test et</span></div>

## 1. Algoritma nedir?

### Bir işi açık adımlara ayırma yöntemidir

Algoritma, belirli bir problemi çözmek veya bir görevi tamamlamak için uygulanacak adımların düzenli tarifidir. İyi bir başlangıç algoritmasında adımlar **açık**, **uygulanabilir**, doğru sırada ve amaçla ilişkili olmalıdır.

### Programlama dili değildir

“Sayının tek mi çift mi olduğunu belirle” algoritması C#, Python veya başka bir dille uygulanabilir. Algoritma, çözümün mantığını; programlama dili ise bu mantığın bilgisayara yazılma biçimini ifade eder.

### Girdi, işlem ve çıktı

Birçok algoritmada üç temel soru yardımcı olur:

- **Girdi:** Hangi bilgi alınacak?
- **İşlem:** Bu bilgi üzerinde ne yapılacak?
- **Çıktı:** Sonuç olarak ne gösterilecek veya üretilecek?

Örneğin iki sayının toplamı: `sayi1, sayi2` girdi; toplama işlem; toplam değeri çıktıdır.

## 2. Algoritma yazarken sıra, karar ve tekrar

### Sıralı adımlar

En basit algoritma yukarıdan aşağıya belirli sırada ilerler: **başla → veriyi al → işle → sonucu göster → bitir**.

### Karar

Bir koşula göre farklı yollar izlenecekse karar gerekir. Örneğin `sayi % 2 == 0 mı?` sorusu **evet** ve **hayır** yollarına ayrılabilir. Kararın iki kolunda da nereye gidileceği açık olmalıdır.

### Tekrar

Aynı işlem koşula bağlı olarak yeniden yapılacaksa akış bir önceki adıma dönebilir. Akış şemasında tekrar için mutlaka ayrı bir “döngü şekli” kullanmak gerekmez; bağlantı okları dönen yolu gösterebilir. Tekrarın hangi koşulda biteceği belirli olmalıdır.

## 3. Akış şemasındaki temel şekiller

### Şeklin anlamı rastgele seçilmez

diagrams.net'in resmî temel akış şeması rehberi yaygın şekilleri şöyle açıklar:

<div class="format-card-grid"><div><b>Oval / yuvarlatılmış başlangıç-bitiş</b><span>Sürecin başladığı veya sona erdiği noktayı gösterir.</span></div><div><b>Dikdörtgen</b><span>Bir işlem veya temel adımı gösterir.</span></div><div><b>Baklava (eşkenar dörtgen)</b><span>Kararı ve iki ya da daha fazla dala ayrılan koşulu gösterir.</span></div><div><b>Paralelkenar</b><span>Girdi veya çıktıyı göstermek için kullanılır.</span></div></div>

### Bağlantı okları akış yönünü gösterir

Şekiller birbirine **connector / bağlantı** çizgileriyle bağlanır. Ok ucu, kontrolün hangi yönde ilerlediğini anlatır. Çizgiler yalnız süs değildir; yanlış bağlanan ok algoritmanın anlamını değiştirir.

### Karar kollarını etiketle

Karar şeklinin çıkan yollarına **Evet/Hayır**, **Doğru/Yanlış** veya koşula uygun anlaşılır etiketler yazmak belirsizliği azaltır.

## 4. diagrams.net'i Türkçe arayüzle hazırlama

### Türkçe dil desteği vardır

diagrams.net resmî belgelerinde Türkçe (`tr`) desteklenen arayüz dilleri arasındadır. Uygulama normalde tarayıcı dilini kullanabilir; arayüz dili ayrıca **Ayarlar → Dil** benzeri dil ayarından değiştirilebilir ve sayfayı yenilemek gerekebilir.

### Arayüz dili ile diyagram metni farklı şeydir

Programın menülerini Türkçe yapmak, çizdiğin şekillerin içindeki eski metinleri otomatik Türkçeye çevirmek zorunda değildir. “Başla”, “Sayıyı al” gibi etiketleri sen yazarsın.

### Düzenlenebilir kaynak dosyayı sakla

PNG veya PDF dışa aktarımı sunum için yararlı olabilir; ancak daha sonra şekilleri düzenlemek istiyorsan diyagramın düzenlenebilir kaynak kopyasını da sakla. Görsel çıktıyı tek kaynak olarak bırakmak düzenlemeyi zorlaştırır.

## 5. diagrams.net'te şekil ve bağlantı kullanımı

### Şekil kitaplıkları

Sol panelden temel şekiller kullanılabilir; gerekirse **Akış Şeması / Flowchart** şekil kitaplığı etkinleştirilebilir. Şekli çalışma alanına sürükleyip etiketini yazdıktan sonra diğer şekle bağlantı oluşturabilirsin.

<div class="app-demo" aria-label="diagrams.net akış şeması şeması"><div class="app-demo-titlebar"><b>diagrams.net</b><span>Türkçe arayüz</span></div><div class="app-demo-toolbar"><span>Dosya</span><span>Düzenle</span><span>Görünüm</span><span>Düzenle</span><span>Ayarlar</span></div><div class="app-demo-body"><div class="app-demo-sidebar"><span>Genel</span><span>Akış Şeması</span><span>Şekiller</span></div><div class="app-demo-stage"><div class="archive-files"><div><b>Başla</b><span>Oval</span></div><div><b>Sayıyı al</b><span>Girdi</span></div><div><b>Sayı çift mi?</b><span>Karar</span></div><div><b>Sonucu göster</b><span>Çıktı</span></div></div></div></div></div>

### Bağlantı gerçekten şekle bağlı olsun

Resmî diagrams.net belgelerinde bağlantılar, şekiller arasındaki ilişki ve akışı göstermek için kullanılır. Şekli taşıdığında okun da uygun biçimde bağlı kalması için bağlantıyı şeklin bağlantı noktasına bağlamak önemlidir.

### Okları mümkün olduğunca okunaklı tut

Gereksiz çapraz çizgiler ve üst üste binen bağlantılar şemayı zorlaştırır. Şemayı daha geniş yerleştirmek veya şekilleri hizalamak, karmaşık bağlantılardan daha iyi olabilir.

## 6. Bir akış şemasını masa başında test etme

### Örnek değerle yürüt

Şemayı çizmek tamamlanmış olmak değildir. Bir örnek girdi seçip oku parmağınla takip ederek her adımı sırayla uygula. Buna **izleme / trace** yaklaşımı diyebiliriz.

### Sınır değerleri unutma

“Pozitif mi?” algoritmasını yalnız `5` ile test etmek yeterli değildir. `-3`, `0` ve `5` gibi farklı durumlar karar dallarını kontrol eder. Bir karar kolu hiçbir zaman test edilmezse hata gözden kaçabilir.

### Her yol bir sonuca ulaşabiliyor mu?

Yanlış kurulan akış, çıkışı olmayan bir kola veya bitmeyen tekrara gidebilir. Her karar yolunun anlamlı bir sonraki adıma ve gerektiğinde bir bitişe ulaştığını kontrol et.

## 7. Birlikte uygulayalım: sayıyı sınıflandır

<div class="practice-panel" markdown="1">

**Problem:** Kullanıcıdan bir tam sayı al; sayı pozitifse “Pozitif”, negatifse “Negatif”, sıfırsa “Sıfır” yazdır.

1. Önce kâğıtta girdiyi ve olası üç çıktıyı yaz.
2. diagrams.net'i Türkçe arayüzle aç ve yeni boş diyagram oluştur.
3. **Başla** için başlangıç/bitiş şekli ekle.
4. **Sayıyı al** için girdi/çıktı şekli ekle.
5. İlk karar olarak **Sayı > 0 mı?** sorusunu kullan.
6. Hayır kolunda ikinci karar olarak **Sayı < 0 mı?** sorusunu kullan.
7. Pozitif, negatif ve sıfır çıktılarını uygun girdi/çıktı şekilleriyle göster.
8. Bütün yolları **Bitir** şekline bağla.
9. Şemayı `8`, `-2` ve `0` değerleriyle izleyerek üç yolun da doğru çalıştığını kontrol et.
10. Düzenlenebilir kaynak dosyayı sakla; gerekiyorsa ayrıca PNG/PDF çıktısı al.

</div>

## 8. Sık yapılan hatalar ve ders özeti

<div class="mistake-panel" markdown="1">

- Algoritmayı doğrudan kod sanmak.
- Her kutuyu dikdörtgen çizip şekillerin anlamını yok saymak.
- Karar şeklinin çıkan yollarını Evet/Hayır gibi etiketlememek.
- Bağlantı okunu ters yönde çizmek veya bir şekle gerçekten bağlamamak.
- Akışın bir kolunu bitişe ulaştırmamak.
- Yalnız tek örnekle test edip sıfır/sınır durumlarını denememek.
- Düzenlenebilir diyagramı saklamadan yalnız ekran görüntüsü bırakmak.

</div>

**Ders sonunda:** algoritma ile programlama dilini ayırabilmeli; girdi-işlem-çıktı ve karar kavramlarını açıklayabilmeli; temel akış şeması şekillerini doğru anlamda kullanabilmeli; diagrams.net'i Türkçe arayüzle kullanarak bağlantıları kurmalı ve şemayı farklı örneklerle test edebilmelisin.

<details class="source-note"><summary>Kaynak kontrolü</summary><p>Bu ders diagrams.net/draw.io'nun güncel resmî Basic Flowchart, Connectors ve Editor Language belgeleriyle karşılaştırılmıştır. Resmî belgelerde dikdörtgen işlem, baklava karar, oval başlangıç/bitiş ve paralelkenar girdi/çıktı için kullanılan temel şekiller olarak açıklanır; bağlantılar akış ve ilişkileri gösterir. Türkçe (`tr`) desteklenen arayüz dilleri arasındadır.</p></details>
