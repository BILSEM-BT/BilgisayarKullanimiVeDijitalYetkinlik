---
title: Yapay Zekâ ve Üretken Yapay Zekâ Temelleri
module_id: 28
updated: '2026-08-20'
summary: Yapay zekâ, makine öğrenmesi ve üretken yapay zekâ arasındaki ilişkiyi; model, eğitim, çıkarım, token, bağlam, multimodal sistem ve halüsinasyon kavramlarını öğreniyoruz.
quiz: /uygulamalar/4-5-yapay-zeka-ve-uretken-yapay-zeka-temelleri/
permalink: /dersler/4-5-yapay-zeka-ve-uretken-yapay-zeka-temelleri/
---
<div class="lesson-goals" markdown="1">

**Bu derste ne öğreneceğiz?**

“Yapay zekâ her şeyi bilen dijital insan” gibi yanlış bir model yerine; **yapay zekâ**, **makine öğrenmesi**, **üretken yapay zekâ**, **model**, **eğitim**, **çıkarım (inference)**, **token**, **bağlam**, **multimodal sistem** ve **halüsinasyon/confabulation** kavramlarını temel düzeyde öğreneceğiz. Böylece sonraki derste üretken yapay zekâyı daha bilinçli kullanabileceğiz.

</div>

<div class="ai-family" aria-label="Yapay zekâ kavram ailesi"><div><b>Yapay Zekâ</b><span>Geniş alan</span></div><i>›</i><div><b>Makine Öğrenmesi</b><span>Veriden örüntü öğrenme</span></div><i>›</i><div><b>Üretken Yapay Zekâ</b><span>Yeni içerik üretme</span></div></div>

## 1. Yapay zekâ nedir?

### Tek bir teknoloji değildir

**Yapay zekâ (AI)**, bilgisayar sistemlerinin algılama, sınıflandırma, tahmin, planlama, dil işleme veya içerik üretme gibi normalde insan zekâsıyla ilişkilendirdiğimiz görevleri gerçekleştirmesine yönelik geniş bir alandır.

Günlük örnekler:

- fotoğrafta yüz/nesne algılama,
- spam e-posta sınıflandırma,
- öneri sistemleri,
- konuşmayı yazıya çevirme,
- rota/tahmin sistemleri,
- metin, görsel, ses veya kod üreten modeller.

### Otomasyon ile AI aynı şey değildir

`Saat 20.00 olunca lambayı kapat` gibi sabit kural otomasyondur. Sistem çevreden veri öğrenip yeni örnekleri sınıflandırıyorsa makine öğrenmesi kullanılabilir. Her otomasyon yapay zekâ değildir.

## 2. Makine öğrenmesi ve model kavramı

### Veriden örüntü öğrenmek

**Makine öğrenmesi**, sistemin her kuralı tek tek insan tarafından yazılmadan verilerdeki örüntülerden bir model geliştirmesine dayanır.

Basitleştirilmiş süreç:

<div class="ai-pipeline"><span>Örnek veri</span><i>→</i><span>Eğitim</span><i>→</i><span>Model</span><i>→</i><span>Yeni girdi</span><i>→</i><span>Tahmin/çıktı</span></div>

### Model nedir?

Model, eğitim sırasında öğrenilmiş sayısal ilişkilerin/parametrelerin oluşturduğu hesaplama yapısıdır. Model “veritabanındaki tüm cümleleri aynen arayan kitap” gibi düşünülmemelidir.

### Eğitim ve çıkarım farklıdır

- **Training (eğitim):** Modelin verilerden örüntüler öğrenmesi süreci.
- **Inference (çıkarım):** Eğitilmiş modelin yeni bir girdiye cevap/çıktı üretmesi.

Bir sohbet botuna soru sorduğunda normalde o an modelin baştan eğitimi yapılmaz; eğitilmiş model kullanılarak çıkarım gerçekleştirilir. Hizmetlerin kullanıcı verisini gelecekteki eğitim için nasıl kullanacağı ise ürünün ayarlarına ve politikasına bağlı olabilir.

## 3. Üretken yapay zekâ ne üretir?

### Yeni içerik üretme

**Generative AI (üretken yapay zekâ)**, verilen girdiye göre yeni metin, görsel, ses, video, kod veya başka içerikler oluşturabilen sistemleri kapsar.

### Büyük dil modeli (LLM)

LLM'ler büyük miktarda metinsel örüntü üzerinde eğitilen dil modelleridir. Bir sonraki token için olası dağılımları kullanarak yanıt üretirler. Bu süreç çok güçlü dil davranışları ortaya çıkarabilir; ancak “her cümleyi gerçek bir kaynaktan kopyalıyor” veya “insan gibi kesin biliyor” şeklinde yorumlanmamalıdır.

### Token nedir?

Model metni her zaman doğrudan kelime kelime değil, **token** adı verilen parçalar hâlinde işler. Token bir kelimenin tamamı, kelime parçası, noktalama işareti veya başka bir metin birimi olabilir.

```text
Kullanıcı metni → token'lara ayrılır → model işler → yeni token'lar üretir → yanıt oluşur
```

### Context / bağlam

Modelin o anda dikkate alabildiği talimatlar, sohbet içeriği ve sağlanan belgeler bağlamı oluşturur. Bağlam penceresi sınırsız değildir. Çok uzun veya çelişkili bağlam, önemli ayrıntıların gözden kaçmasına yol açabilir.

## 4. Multimodal yapay zekâ

### Sadece metin değil

Bazı modern modeller birden fazla veri türünü işleyebilir veya üretebilir:

- metin,
- görsel,
- ses,
- video,
- dosya/tablo,
- kod.

Buna **multimodal** çalışma denebilir.

### Görseli “görmek” insan görmekle aynı değildir

Bir model görsel öğeleri analiz edebilir; ama küçük yazıları, sayıları, mekânsal ilişkileri veya belirsiz nesneleri yanlış yorumlayabilir. Görsel çıktı da gerçek fotoğraf kanıtı gibi kabul edilmemelidir.

### Üretim ile analiz farklı görevlerdir

Bir yapay zekâ sistemi resim oluşturabiliyor diye her görseli doğru analiz edeceği; kod yazabiliyor diye kodun güvenli olacağı; özet yapabiliyor diye kaynağın tamamını doğru yorumlayacağı varsayılmaz.

## 5. Yapay zekâ neden yanlış cevap verebilir?

### Halüsinasyon / confabulation

NIST, üretken yapay zekâ için **confabulation** kavramını, sistemin yanlış veya hatalı içeriği güvenle sunabilmesi olarak açıklar. Günlük dilde buna sıkça **halüsinasyon** denir.

Örnekler:

- olmayan kitap/makale adı üretmek,
- yanlış tarih vermek,
- uydurma alıntı yazmak,
- gerçekte bulunmayan web kaynağı önermek,
- doğru görünen ama hatalı kod üretmek.

### Akıcı dil doğruluk kanıtı değildir

Model dilsel olarak çok ikna edici bir cevap oluşturabilir. **Kendinden emin görünmek = doğrulanmış olmak** değildir.

### Veri ve temsil yanlılığı

Eğitim verileri toplumdaki eksiklikleri veya önyargıları içerebilir. Model bazı gruplar, diller veya az temsil edilen konularda daha zayıf davranabilir. Sonuçların tarafsız olduğunu varsaymak yerine karşılaştırma ve doğrulama gerekir.

### Güncellik

Modelin bilgisi belirli bir dönemde kesilebilir veya sisteme gerçek zamanlı arama bağlı olmayabilir. Güncel fiyat, mevzuat, ürün özelliği, haber, spor sonucu gibi konularda **güncel kaynak** gerekir.

## 6. Temel model ile arama/araç kullanan sistem arasındaki fark

### Model tek başına

Model yalnız eğitim ve mevcut sohbet bağlamına dayanıyorsa güncel web sayfasını kendiliğinden görmeyebilir.

### Arama veya belge getirme

Bazı AI uygulamaları arama motoru, dosya, veri tabanı veya başka araçlardan bilgi getirip modele bağlam sağlayabilir. Buna çeşitli sistemlerde retrieval/RAG benzeri yaklaşımlar uygulanabilir.

```text
Soru → kaynak ara/getir → ilgili içerik → model → kaynaklı cevap
```

Bu yapı doğruluğu artırabilir; fakat yanlış kaynağın seçilmesi veya kaynağın yanlış yorumlanması yine mümkündür. Kaynağı kullanıcı da kontrol etmelidir.

### Araç kullanımı

Model hesap makinesi, kod çalıştırıcı, web araması veya dosya aracı kullanabiliyorsa bazı görevlerde daha güvenilir sonuç üretebilir. Yine de aracın çıktısını doğru yorumlama sorumluluğu vardır.

## 7. İnsan merkezli kullanım ve sorumluluk

### AI yardımcıdır, kararın sahibi insan olmalıdır

UNESCO'nun eğitim için AI yaklaşımı **insan merkezli** kullanım, veri gizliliği, yaşa uygunluk, etik ve insan sorumluluğunu vurgular. Öğrencinin amacı düşünmeyi devretmek değil, AI'ı öğrenmeyi destekleyen bir araç olarak kullanmaktır.

### Hangi görevlerde iyi bir yardımcı olabilir?

- bir kavramı farklı seviyede açıklatma,
- fikir üretme ve seçenek karşılaştırma,
- taslak ve kontrol listesi oluşturma,
- kodun ne yaptığını açıklatma,
- kendi metnindeki belirsiz noktaları buldurma,
- çalışma soruları üretme.

### Hangi durumlarda tek başına güvenilmemeli?

- kesin güncel gerçekler,
- kaynak ve alıntı doğruluğu,
- önemli sağlık/hukuk/finans kararları,
- akademik değerlendirmede yasaklanan görevler,
- kişisel veya gizli veriler,
- gerçek kişilere yönelik ciddi iddialar.

## 8. Birlikte uygulayalım ve ders özeti

<div class="practice-panel" markdown="1">

1. Beş örneği “otomasyon / klasik yazılım / AI / üretken AI” olarak sınıflandır.
2. Bir üretken AI aracına “Fotosentezi 11 yaşındaki bir öğrenciye açıkla” gibi güvenli bir soru sor.
3. Aynı soruyu “3 madde + benzetme + bir kontrol sorusu” biçiminde tekrar sor ve çıktıyı karşılaştır.
4. Yanıttan doğrulanabilir iki iddia seç.
5. Bu iki iddiayı ders kitabı veya güvenilir birincil kaynakla kontrol et.
6. Eğer model kaynak öneriyorsa kaynakların gerçekten var olup olmadığını doğrula.

</div>

<div class="mistake-panel" markdown="1">

- Yapay zekâyı “internetteki bütün bilgileri bilen kişi” sanmak.
- Eğitim ile çıkarımı aynı süreç düşünmek.
- Akıcı ve uzun cevabı doğru kabul etmek.
- “Kaynak:” yazdığı için uydurma referansı gerçek sanmak.
- AI tarafından üretilen görseli gerçek olay fotoğrafı gibi kullanmak.
- Bir AI aracının tüm sürümlerinin ve özelliklerinin aynı olduğunu varsaymak.

</div>

**Ders sonunda:** AI, makine öğrenmesi ve üretken AI ilişkisini açıklayabilmeli; model, training, inference, token ve context kavramlarını temel düzeyde kullanabilmeli; multimodal sistemlerin olanaklarını ve halüsinasyon/güncellik/yanlılık gibi sınırlılıklarını tanıyabilmelisin.

<details class="source-note"><summary>Kaynak kontrolü</summary><p>UNESCO'nun Guidance for Generative AI in Education and Research ve AI Competency Framework for Students belgeleri ile NIST AI 600-1 Generative AI Profile'daki confabulation ve risk açıklamaları karşılaştırılmıştır. Ürün adlarından çok aktarılabilir AI okuryazarlığı kavramları kullanılmıştır.</p></details>
