---
title: Google Colab Kullanımı
module_id: 41
updated: '2026-08-21'
summary: Google Colab'ı Türkçe arayüzle tanıyıp not defteri, metin/kod hücreleri, çalışma zamanı, geçici dosyalar, Drive erişimi, paylaşım ve temel Python çalıştırma akışını güvenli biçimde öğreniyoruz.
quiz: /uygulamalar/6-6-google-colab-kullanimi/
permalink: /dersler/6-6-google-colab-kullanimi/
---
<div class="lesson-goals" markdown="1">

**Bu derste ne öğreneceğiz? — Program dili: Türkçe**

Bu derste **Google Colab (Colaboratory)** ortamını Türkçe arayüzle kullanacağız. Colab'ın barındırılan bir Jupyter not defteri hizmeti olduğunu; **metin hücresi**, **kod hücresi**, **çalışma zamanı (runtime)**, çıktı, `.ipynb` dosyası, Google Drive ve paylaşım kavramlarını öğreneceğiz. Ayrıca çalışma zamanı dosyalarının kalıcı olmadığını ve güvenmediğimiz bir not defterindeki kodu çalıştırmamanın neden önemli olduğunu uygulamalı olarak göreceğiz.

</div>

<div class="archive-flow" aria-label="Google Colab çalışma akışı"><span>Not defteri aç</span><i>→</i><span>Metinle açıkla</span><i>→</i><span>Kod hücresini çalıştır</span><i>→</i><span>Çıktıyı kontrol et</span><i>→</i><span>Drive'a kaydet / paylaş</span></div>

## 1. Google Colab nedir?

### Tarayıcıda çalışan barındırılan Jupyter hizmetidir

Google'ın resmî açıklamasına göre Colab, kurulum gerektirmeden kullanılabilen **hosted Jupyter Notebook** hizmetidir. Özellikle eğitim, veri bilimi ve makine öğrenmesi çalışmalarında kullanılır. Ücretsiz kaynaklar sunulabilir ancak kaynak erişimi sınırsız veya garantili değildir.

### Not defteri belge + kod + çıktı yapısını birleştirir

Bir Colab not defterinde açıklama metinleri, kod hücreleri ve kodun ürettiği çıktılar aynı belgede bulunabilir. Bu yapı, bir deneyin ne yaptığını adım adım anlatmaya uygundur.

### Dosya biçimi `.ipynb`

Colab not defterleri açık Jupyter notebook biçimi olan `.ipynb` olarak saklanır. Google Drive'da saklanabilir veya GitHub'dan yüklenebilir. Dosya adını `.py` yapmak tek başına not defterini normal Python betiğine dönüştürmez.

## 2. Türkçe arayüz ve temel bölümler

### Arayüz dili

Colab Türkçe yerelleştirilmiş yardım ve kullanıcı arayüzüyle kullanılabilir. Google hesabı/tarayıcı diline bağlı olarak menü dili değişebilir. Bu derste **Dosya, Düzenle, Görünüm, Ekle, Çalışma zamanı, Araçlar, Yardım** gibi Türkçe menü adları esas alınacaktır; güncellemelerde küçük ad farklılıkları olabilir.

<div class="app-demo" aria-label="Google Colab Türkçe arayüz şeması"><div class="app-demo-titlebar"><b>Google Colab</b><span>not_defteri.ipynb</span></div><div class="app-demo-toolbar"><span>Dosya</span><span>Düzenle</span><span>Görünüm</span><span>Ekle</span><span>Çalışma zamanı</span><span>Araçlar</span></div><div class="app-demo-body"><div class="app-demo-sidebar"><span>İçindekiler</span><span>Arama</span><span>Dosyalar</span></div><div class="app-demo-stage"><div class="archive-files"><div><b>+ Metin</b><span>Açıklama hücresi</span></div><div><b>+ Kod</b><span>Çalıştırılabilir hücre</span></div><div><b>Çıktı</b><span>Hücrenin altında</span></div></div></div></div></div>

### Sol panel

İçindekiler, arama, değişkenler veya dosyalar gibi paneller sürüme göre sol tarafta bulunabilir. **Dosyalar** panelinde çalışma zamanındaki geçici dosya sistemi görülebilir.

## 3. Metin hücresi ve kod hücresi

### Metin hücresi açıklama içindir

Metin hücrelerinde Markdown kullanılarak başlık, açıklama, bağlantı ve biçimlendirilmiş notlar yazılabilir. İyi bir not defteri yalnız kod yığını değildir; hangi adımın neden yapıldığını da açıklar.

### Kod hücresi yürütülür

Kod hücresine bu derste Python kodu yazacağız. Örneğin:

```python
ad = "BİLSEM"
print("Merhaba", ad)
```

Hücreyi çalıştırdığında çıktı hücrenin altında görünür. Kod hücreleri yürütüldükleri sıraya göre çalışma zamanındaki değişken durumunu etkiler.

### Hücre sırası ile çalıştırma sırası farklı olabilir

Ekranda üstte duran hücre her zaman önce çalıştırılmış olmayabilir. `x` değişkenini tanımlayan hücreyi çalıştırmadan aşağıdaki hücrede `x` kullanırsan hata alabilirsin. Yeniden üretilebilirlik için hücreleri mantıklı sırada tut ve gerektiğinde baştan sırayla çalıştır.

## 4. Çalışma zamanı (runtime) ve geçici durum

### Kod uzak sanal makinede çalışır

Standart Colab kullanımında kod, hesabına ayrılan bir sanal makine/çalışma ortamında yürütülür. Google'ın belgeleri bu çalışma zamanlarının boşta kalınca sonlanabileceğini ve azami yaşam süresinin bulunduğunu belirtir.

### Runtime dosya sistemi kalıcı depolama değildir

`/content` gibi çalışma zamanı alanına yüklediğin dosyalar çalışma zamanı sonlandığında kaybolabilir. Kalıcı tutulması gereken dosyaları uygun biçimde Drive'a veya başka güvenilir depoya kaydetmek gerekir.

### GPU/TPU garanti değildir

Colab'daki GPU/TPU türleri ve kullanılabilirlik zamanla değişebilir. Bir not defterini “her zaman aynı GPU var” varsayımıyla tasarlamak doğru değildir. Başlangıç dersinde donanım hızlandırıcıdan çok doğru notebook düzenine odaklanacağız.

## 5. Dosya yükleme ve Google Drive bağlantısı

### Dosya yüklemek ile Drive'ı bağlamak farklıdır

Bilgisayardan çalışma zamanına dosya yüklediğinde dosya geçici ortamda bulunur. **Google Drive'ı mount/bağlama** ise not defterindeki kodun Drive dosyalarına erişebilmesine izin verir.

### Drive erişimi güçlü bir izindir

Google'ın Colab FAQ belgesine göre Drive'ı bağlamak, notebook'taki kodun Google Drive'daki dosyalara erişebilmesini sağlar. Bu nedenle **kaynağını bilmediğin notebook'ta Drive erişimi verme**. Önce kodu ve yazarı değerlendir.

### Hassas veriyi notebook'a koyma

API anahtarı, parola, kişisel öğrenci bilgisi veya gizli belgeyi düz metin olarak kod hücresine yazmak ve ardından notebook'u paylaşmak ciddi risk oluşturur. Eğitim örneklerinde sahte/test verileri kullan.

## 6. Kaydetme, paylaşma ve yeniden üretilebilirlik

### Notebook ile runtime aynı şey değildir

Notebook dosyası Drive'da saklanabilir; fakat aktif sanal makine notebook'un bir parçası değildir. Başka biri notebook'u açtığında kendi çalışma zamanına bağlanır.

### Paylaşınca neler paylaşılır?

Google'ın resmî FAQ'sına göre notebook paylaşımı; not defterindeki **text, code, output ve comments** gibi içerikleri paylaşabilir. Kullanılan sanal makine ve sonradan kurduğun özel çalışma zamanı dosyaları otomatik olarak paylaşılmaz.

### Gerekli kurulumları notebook içinde belirt

Bir kütüphane veya veri dosyası gerekiyorsa bunu açıklayan ve gerektiğinde kuran/yükleyen hücreleri düzenli biçimde eklemek, başka kişinin notebook'u yeniden çalıştırmasını kolaylaştırır. Her adımın ne yaptığı anlaşılır olmalıdır.

## 7. Birlikte uygulayalım: ilk Colab not defteri

<div class="practice-panel" markdown="1">

1. Colab'ı aç ve arayüzün Türkçe olduğunu kontrol et.
2. Yeni not defteri oluştur ve adını `BOLUM6_COLAB.ipynb` yap.
3. İlk **Metin** hücresine `# İlk Colab Çalışmam` başlığını ve iki cümle açıklama yaz.
4. Bir **Kod** hücresine `print("Merhaba BİLSEM!")` yazıp çalıştır.
5. Yeni kod hücresinde `a = 12`, `b = 8`, `toplam = a + b` işlemlerini yap ve toplamı yazdır.
6. Değişkenleri tanımlayan hücreyi çalıştırmadan yalnız son hücreyi çalıştırdığında ne olabileceğini tartış.
7. Sol taraftaki **Dosyalar** alanını aç ve bunun çalışma zamanına ait dosya alanı olduğunu belirle.
8. Öğretmen izin verirse küçük, kişisel veri içermeyen bir `.txt` dosyası yükle ve Python ile yalnız dosya adını/varlığını kontrol et.
9. Notebook'un Drive'da kaydedildiğini kontrol et.
10. Paylaşmadan önce kod hücrelerinde parola, token veya kişisel veri bulunmadığını kontrol et.

</div>

## 8. Sık yapılan hatalar ve ders özeti

<div class="mistake-panel" markdown="1">

- Notebook dosyası ile çalışan sanal makineyi aynı şey sanmak.
- `/content` altındaki geçici dosyaların sonsuza kadar kalacağını düşünmek.
- Hücreleri rastgele sırada çalıştırıp eski değişken değerleriyle yanlış sonuç üretmek.
- Kaynağı bilinmeyen notebook'ta bütün hücreleri ve Drive bağlantısını düşünmeden çalıştırmak.
- GPU/TPU erişimini kalıcı ve garantili varsaymak.
- Parola, token veya kişisel veriyi notebook içinde açıkça saklamak.
- Notebook'u paylaşınca yalnız kodun paylaşıldığını, çıktı ve metinlerin paylaşılmadığını sanmak.

</div>

**Ders sonunda:** Colab'ın barındırılan Jupyter Notebook hizmeti olduğunu açıklayabilmeli; metin ve kod hücresini ayırabilmeli; çalışma zamanı ve `.ipynb` dosyasının aynı şey olmadığını bilmeli; geçici dosya alanını doğru yorumlayabilmeli; Drive bağlantısının izin riskini anlayabilmeli ve küçük bir Python notebook'unu Türkçe arayüzde düzenli biçimde çalıştırabilmelisin.

<details class="source-note"><summary>Kaynak kontrolü</summary><p>Bu ders Google Colab'ın güncel Türkçe FAQ, runtime version ve local runtime güvenlik belgeleriyle karşılaştırılmıştır. Colab barındırılan Jupyter notebook hizmetidir; notebook'lar Drive'da saklanabilir veya GitHub'dan yüklenebilir; kod sanal makinede çalışır, çalışma zamanları geçicidir, GPU/TPU erişimi değişebilir. Drive mount işleminin notebook koduna Drive dosyalarına erişim verdiği ve paylaşılan notebook'un text/code/output/comments içerebildiği resmî belgelerle doğrulanmıştır.</p></details>
