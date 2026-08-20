---
title: İnternette Etkili Arama
module_id: 9
updated: '2026-08-20'
summary: Arama motorlarının çalışma mantığını, iyi sorgu kurmayı, gelişmiş operatörleri, güncellik ve kaynak seçimini gerçek araştırma örnekleriyle uyguluyoruz.
quiz: /uygulamalar/2-2-internette-etkili-arama/
permalink: /dersler/2-2-internette-etkili-arama/
---
<div class="lesson-goals" markdown="1">

**Bu derste ne öğreneceğiz?**

İnternette doğru bilgiyi bulmak için yalnızca kelime yazıp ilk sonuca tıklamak yeterli değildir. Arama niyetini belirlemeyi, sorguyu iyileştirmeyi, tırnak, `site:`, `filetype:`, `-`, tarih filtreleri gibi araçları kullanmayı ve sonuçları karşılaştırmayı öğreneceğiz.

</div>

<div class="search-demo" aria-label="Arama sorgusunun adım adım geliştirilmesini gösteren şema"><code>robotik</code><span>→</span><code>çizgi izleyen robot sensör kalibrasyonu</code><span>→</span><code>site:arduino.cc line follower sensor</code></div>
## Arama motoru ne yapar?

### Arama motoru nedir?

Arama motoru web ve başka veri kaynaklarındaki içerikleri keşfedip dizinleyen ve sorguya göre sonuç döndüren hizmettir. Google tüm web'i sorgu anında taramaz; büyük bir index üzerinde arama yapar.

### Crawling

Crawler/bot web sayfalarını keşfeder ve almaya çalışır. Google'ın crawler'ı Googlebot olarak bilinir. Linkler ve sitemap'ler yeni URL keşfine yardım edebilir.

### Indexing

Crawler'ın gördüğü her sayfa sonuçlara girmez. Indexing aşamasında metin, başlıklar, görsel/video ve canonical ilişkiler gibi bilgiler analiz edilir. Index'e alınma garanti değildir.

### Serving results

Sorgu geldiğinde arama motoru index içinden ilgili sonuçları seçer. Google, organik sıralamada daha üstte çıkmak için ödeme kabul etmediğini açıkça belirtir; reklamlarla organik sonuçlar ayrıdır.

## İyi bir arama sorgusu nasıl kurulur?

### Arama niyeti

Önce amacını belirle: bilgi edinmek, belirli siteyi bulmak, güncel haber, akademik kaynak, görsel veya ürün aramak. Niyet anahtar kelime ve filtre seçimini yönlendirir.

### Anahtar kelime

`bilgisayar` gibi çok geniş sorgu yerine `IPv6 adresleme temel kavramlar` gibi konu ve bağlamı tanımlayan sözcükler daha hedefli sonuç verir.

### Doğal dil soruları

Modern arama motorları `FAT32 neden 4 GB'tan büyük dosyayı kabul etmiyor?` gibi doğal dil sorularını anlayabilir. Sonuç zayıfsa sorguyu daha kısa ve teknik terimlerle yeniden kur.

## Arama operatörleriyle sonucu daraltma

### Tam ifade — tırnak

`"bilgi okuryazarlığı"` tam ifadeye odaklanır. Özgün cümle, hata mesajı veya alıntı ararken çok yararlıdır.

### site: operatörü

`site:meb.gov.tr BİLSEM` aramayı belirli alanla sınırlar. Teknik konularda `site:learn.microsoft.com` veya `site:support.google.com` resmî belgeleri bulmayı kolaylaştırır.

### Eksi operatörü

`python -snake` sorgusunda `-snake`, istenmeyen anlamı hariç tutmaya yardım eder. Operatör ile terim arasında boşluk olmamalıdır.

### filetype:

`yapay zeka etik filetype:pdf` belirli dosya tipindeki sonuçlara odaklanır. PDF olmak bir belgenin akademik veya doğru olduğunu garanti etmez.

### before: ve after:

`after:2026-01-01` ve `before:2026-07-01` tarih aralığını daraltmaya yardım eder. Özellikle teknoloji ve güncel konularda eski talimatları azaltır.

### Filtreler

Sonuç sayfasında Web, Görseller, Haberler, Videolar ve başka filtreler sorguya göre sunulabilir. Filtrelerin sırası dinamik olabilir.

### Gelişmiş arama

Google Advanced Search; tam ifade, hariç kelime, dil, bölge, site ve dosya türü gibi sınırları form üzerinden kurmaya yardım eder.

### İteratif arama

İlk sorgu son sorgu olmak zorunda değildir. Sonuçlardan yeni teknik terimler öğren, sonra sorguyu daralt: `dns` → `recursive resolver` → `authoritative resolver farkı` gibi.

### Terminoloji keşfi

Konuyu bilmiyorsan önce terimleri öğren. “Wi‑Fi yavaş” araştırması interference, channel, latency, RSSI gibi daha hassas kelimelere götürebilir.

## Sonuç listesini okumak ve doğru kaynağa yönelmek

### Resmî kaynak önceliği

Ürün özelliği ve teknik standartta üretici/standart kurumu belgeleri güçlü başlangıçtır. `site:rfc-editor.org`, `site:icann.org`, `site:support.google.com` gibi kapsamlar kullanılabilir.

### Birincil ve ikincil kaynak

Standart, araştırma makalesinin kendisi ve resmî veri birincil kaynak olabilir. Haber/özet/yorum ikincil kaynak olabilir. Önemli teknik iddiada mümkünse birincile dön.

### Snippet

Arama sonucu snippet'i kısa ön izlemedir. Otomatik üretilmiş veya bağlamı dar olabilir. Karar vermeden sayfayı açıp gerçek metni oku.

### Reklam ve organik sonuç

Sponsorlu sonuç ücretli görünürlüktür; organik sonuç arama sisteminin sıralamasıdır. Sponsorlu olması otomatik kötü, organik olması otomatik doğru anlamına gelmez.

### Konum, dil ve cihaz etkisi

Google sonuçların konum, dil ve cihaz gibi bağlam sinyallerinden etkilenebileceğini belirtir. İki kullanıcı aynı sorguda bire bir aynı sonucu görmek zorunda değildir.

## Görsel, teknik ve akademik arama

### Görsel arama

Görsel arama benzer görsel, daha yüksek çözünürlük veya kaynak bağlamı bulmaya yardım edebilir. Görseli bulmak kullanım/telif hakkı vermez.

### Tersine görsel arama

Bir görselin URL'si veya dosyasıyla benzer/önceki kullanımları araştırmak, eski görselin yeni olaymış gibi paylaşılmasını fark etmeye yardım edebilir.

### Hata mesajı arama

Teknik hata mesajını tırnak içinde ara ve ürün/sürüm ekle: `"Access is denied" Windows 11`. Bu, `program çalışmıyor` sorgusundan çok daha etkilidir.

### Sürüm belirtme

Teknik yardımda `Windows 11 24H2`, `Python 3.13` gibi sürüm bilgisi eklemek eski veya uyumsuz talimatları azaltır.

### Belirsiz kelime

`java` programlama dili, ada veya kahve anlamına gelebilir. `Java programming ArrayList` gibi bağlam eklemek arama niyetini netleştirir.

### Kaynağı doğrulama

Sonucu açınca yazar/kurum, tarih, kullanılan kanıt ve birincil bağlantıları incele. Aynı iddiayı bağımsız kaynaklarla karşılaştır.

### Kaynak hakkında dış arama

Google kaynak değerlendirme rehberi `KaynakAdı -site:kaynak-domaini` gibi sorguyla kaynağın kendi sitesi dışındaki değerlendirmeleri bulmayı önerir.

### About this result / kaynak bağlamı

Google bazı dil/bölgelerde kaynağın kendini nasıl tanımladığı ve başkalarının kaynak hakkında ne dediği gibi bağlam araçları sunar. Bu araç doğruluk sertifikası değildir.

### AI özetleri

Arama sonuçlarında AI tarafından üretilen özetler başlangıç noktası olabilir. Önemli iddiada verilen kaynakları aç ve gerçek kaynak metninde doğrula.

### Akademik arama

Akademik araştırmada Google Scholar, üniversite veri tabanları ve dergi platformları kullanılabilir. Yazar, yıl, dergi, yöntem, örneklem ve DOI gibi bilgileri kontrol et.

## Birlikte uygulayalım

### Uygulama: sorguyu geliştirme

`robotik` sorgusunu en az beş adımda daha teknik hale getir. Her turda hangi yeni terimi öğrendiğini ve sonuç kalitesinin nasıl değiştiğini not et.

### Uygulama: operatör karşılaştırması

`BİLSEM yapay zeka`, `"BİLSEM" "yapay zeka"`, `site:meb.gov.tr BİLSEM yapay zeka` ve `BİLSEM yapay zeka filetype:pdf` sorgularını karşılaştır.

### Uygulama: güncellik

Bir teknoloji özelliğini normal aramayla bul; sonra resmî alan + `after:` filtresi kullan. Sonuçların tarih ve güvenilirlik bakımından farkını değerlendir.

## Sık yapılan hatalar ve ders özeti

### Kavram yanılgıları

- İlk sonuç kesin doğru değildir.
- Tırnak aramayı genellikle daraltır.
- PDF akademik kalite garantisi değildir.
- `site:` içeriği doğrulamaz; yalnızca kapsamı sınırlar.
- AI özeti kaynak okumayı gereksiz yapmaz.

### Ders özeti

Crawling, indexing, serving, search intent, exact phrase, `site:`, eksi, `filetype:`, `before:/after:`, filtreler, iteratif arama, birincil kaynak ve kaynak doğrulama becerilerini uygulayabilmelisin.

### Güncel kaynak kontrolü

Bu ders hazırlanırken özellikle aşağıdaki resmî/birincil kaynaklar kontrol edilmiştir:

- Google Search Central — In-depth guide to how Google Search works
- Google Search Help — Refine Google searches
- Google Search Help — Evaluate info you find with Google

Arayüzler ve hizmet özellikleri zamanla değişebildiği için yalnızca düğme konumlarını ezberlemek yerine kavramı, güvenlik mantığını ve doğru çalışma yöntemini öğrenmek hedeflenmiştir.
