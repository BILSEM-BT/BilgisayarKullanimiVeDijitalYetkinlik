---
title: GIMP ile Görsel Düzenleme
module_id: 33
updated: '2026-08-21'
summary: GIMP ile raster görselleri açmayı, katman mantığını kullanmayı, kırpma ve ölçekleme yapmayı, metin eklemeyi ve doğru biçimde dışa aktarmayı öğreniyoruz.
quiz: /uygulamalar/5-4-gimp-ile-gorsel-duzenleme/
permalink: /dersler/5-4-gimp-ile-gorsel-duzenleme/
---
<div class="lesson-goals" markdown="1">

**Bu derste ne öğreneceğiz?**

GIMP'i bir “resim açma programı” olarak değil, **katmanlı raster görsel düzenleme aracı** olarak tanıyacağız. Görsel açma, seçim, kırpma, ölçekleme, katman ekleme, metin yerleştirme, basit renk düzeltmeleri ve **proje dosyası ile dışa aktarılan görsel arasındaki farkı** uygulayacağız.

</div>

<div class="media-flow"><span>Kaynak görsel</span><i>→</i><span>Katmanlarla düzenle</span><i>→</i><span>XCF proje</span><i>→</i><span>PNG / JPEG dışa aktar</span></div>

## 1. Raster görsel ve piksel mantığı

### Raster görsel piksellerden oluşur

Fotoğraflar ve ekran görüntüleri çoğunlukla piksel tabanlıdır. Bir raster görseli çok fazla büyüttüğünde yeni gerçek ayrıntı oluşmaz; pikseller büyütülür veya yazılım aradaki değerleri tahmin eder.

### Çözünürlük ve boyut

1920×1080, görselin piksel boyutunu belirtir. Bir görseli web için küçültmek dosya boyutunu azaltabilir. Ancak küçük bir görseli sonradan çok büyütmek netliği geri getirmez.

<div class="media-card-grid"><div><b>JPEG</b><span>Fotoğraf için yaygın; kayıplı sıkıştırma kullanır, şeffaflık desteklemez.</span></div><div><b>PNG</b><span>Keskin grafikler ve şeffaflık için uygundur; kayıpsız sıkıştırma kullanır.</span></div><div><b>XCF</b><span>GIMP proje dosyası; katman ve düzenleme bilgisini korur.</span></div><div><b>Katman</b><span>Görselin birbirinden bağımsız düzenlenebilen parçaları.</span></div></div>

## 2. GIMP arayüzü ve temel çalışma düzeni

### Araç kutusu, tuval ve paneller

GIMP arayüzünde seçim, taşıma, kırpma, fırça ve metin gibi araçlar; ortada çalışma tuvali; sağ/yan panellerde katmanlar gibi denetimler bulunur. Yerleşim sürüm ve kişisel çalışma alanına göre değişebilir.

<div class="app-demo" aria-label="GIMP arayüz şeması"><div class="app-demo-titlebar"><b>GIMP</b><span>proje.xcf</span></div><div class="app-demo-toolbar"><span>Seçim</span><span>Taşı</span><span>Kırp</span><span>Fırça</span><span>Metin</span><span>Dönüştür</span></div><div class="app-demo-body"><div class="app-demo-sidebar"><span>Araç seçenekleri</span><span>Fırçalar</span><span>Renkler</span></div><div class="app-demo-stage"><div class="layer-stack"><div class="layer-canvas">Çalışma tuvali</div><div class="layers-panel"><span>Metin</span><span>Logo</span><span>Fotoğraf</span><span>Arka plan</span></div></div></div></div></div>

### Açmak ile projeyi kaydetmek farklıdır

Bir JPEG'i GIMP'te açıp üzerine metin eklediğinde, katmanlı çalışma yapısı için projeyi **XCF** olarak kaydetmek yararlıdır. Son kullanıcıya verilecek PNG/JPEG ise **dışa aktarılır**.

## 3. Katmanlarla çalışma

### Katmanları şeffaf asetatlar gibi düşün

Arka plan fotoğrafı bir katmanda, başlık başka katmanda, logo üçüncü katmanda olabilir. Böylece başlığı silmek istediğinde fotoğrafı bozmazsın.

### Katman sırası görünümü değiştirir

Üstteki katman alttakini örtebilir. Katman panelinde sürükleyerek sıralama yapmak, görünürlük simgesini açıp kapatmak ve katmanları anlamlı adlandırmak düzenli çalışmayı sağlar.

### Kopya katman güvenli deneme sağlar

Önemli bir düzenlemeden önce katmanı çoğaltmak, geri dönmeyi kolaylaştırır. Her işlemi tek katmanda birleştirmek hızlı görünse de sonradan değişiklik yapmayı zorlaştırabilir.

## 4. Seçim, kırpma ve ölçekleme

### Kırpma: gereksiz alanı kaldırır

GIMP 3 belgelerinde **Image → Crop to Selection** ve **Crop to Content** gibi komutlar bulunur. Kırpma, kompozisyonu düzeltmek veya boş kenarları kaldırmak için kullanılır.

### Görseli ölçekleme

Görsel boyutunu değiştirmek için Image → Scale Image benzeri işlem kullanılır. Katmanın kendisini değiştirmek için Layer → Scale Layer kullanılabilir. En-boy oranını korumak gerekiyorsa genişlik ve yüksekliği birbirine bağlı tut.

### Büyütmenin sınırı

Resmî GIMP belgeleri, raster katmanı büyütürken yazılımın yeni ayrıntı üretmediğini; pikseller arasında **interpolation** yaptığını açıklar. Kaynak düşük çözünürlüklüyse çok büyütmek bulanıklığa yol açabilir.

## 5. Metin, renk ve basit düzeltmeler

### Metni ayrı katmanda tut

Metin aracıyla başlık eklediğinde GIMP yeni bir metin katmanı oluşturur. Yazı tipi, boyut ve hizalamayı okunabilirlik için seç; metni görsele “yapıştırmadan” katman olarak korumak son düzenlemeyi kolaylaştırır.

### Parlaklık/kontrast ve renk ayarları

Renk menüsündeki araçlarla parlaklık, kontrast ve renk dengesi gibi değişiklikler yapılabilir. Amaç fotoğrafı “aşırı işlemek” değil, hedefe uygun görünürlük ve denge sağlamaktır.

### Seçim alanı ile kontrollü düzenleme

Bir işlemin yalnızca belirli bölgeyi etkilemesini istiyorsan önce seçim oluştur. Seçimin bittiğinde yanlışlıkla sonraki işlemleri sınırlamaması için seçimi kaldırmayı unutma.

## 6. Kaydetme ve dışa aktarma

### Proje: XCF

Katmanları, metinleri ve düzenleme yapısını korumak için çalışma dosyanı `.xcf` olarak kaydet. Bu dosya “düzenlenebilir ana kopya”dır.

### Son çıktı: PNG veya JPEG

GIMP'te PNG/JPEG gibi son kullanıcı biçimleri **Export / Export As** üzerinden oluşturulur. PNG şeffaflık ve kayıpsız sıkıştırma için; JPEG fotoğraf ve daha küçük dosya için sık kullanılır.

<div class="export-flow"><span>proje.xcf</span><i>→</i><span>Düzenleme devam eder</span><i>→</i><span>Dışa aktar</span><i>→</i><span>afis.png / fotograf.jpg</span></div>

### JPEG kalite ayarı

JPEG dışa aktarırken kaliteyi çok düşürmek yazı kenarlarında ve fotoğrafta bozulma oluşturabilir. Gereken kalite ile dosya boyutu arasında denge kur.

## 7. Birlikte uygulayalım: duyuru görseli oluştur

<div class="practice-panel" markdown="1">

1. Öğretmenin verdiği fotoğrafı GIMP'te aç.
2. Görseli 16:9'a yakın bir kompozisyon elde edecek biçimde kırp.
3. Gerekirse genişliği 1280 piksel olacak şekilde ölçekle; en-boy oranını koru.
4. Yeni bir katmanda kurum logosunu veya örnek simgeyi ekle.
5. Metin aracıyla kısa bir başlık ekle ve katmanı `Baslik` diye adlandır.
6. Katman sırasını değiştirerek başlığın üstte kaldığını kontrol et.
7. Projeyi `duyuru.xcf` olarak kaydet.
8. Son çıktıyı `duyuru.png` olarak dışa aktar ve iki dosyanın amacını karşılaştır.

</div>

## 8. Sık yapılan hatalar ve ders özeti

<div class="mistake-panel" markdown="1">

- Kaynak görseli sürekli büyüterek gerçek ayrıntının artacağını sanmak.
- Tüm öğeleri tek katmanda düzenlemek.
- XCF proje dosyasını PNG/JPEG ile aynı amaçta sanmak.
- En-boy oranını bozarak insan/yazı görüntüsünü esnetmek.
- JPEG'i tekrar tekrar düşük kaliteyle kaydedip kalite kaybını artırmak.
- Telifi veya kişisel veri içeren fotoğrafı izinsiz kullanmak.

</div>

**Ders sonunda:** raster/piksel mantığını açıklayabilmeli; GIMP'te katman, seçim, kırpma ve ölçekleme işlemlerini kullanabilmeli; proje dosyasını XCF olarak saklayıp son çıktıyı uygun biçimde dışa aktarabilmelisin.

<details class="source-note"><summary>Kaynak kontrolü</summary><p>İçerik GIMP 3 resmî kullanıcı belgelerindeki Image/Layer ölçekleme, Crop ve PNG Export bölümleriyle karşılaştırılmıştır. GIMP'in menü yerleşimi ve araç simgeleri sürüme göre değişebileceğinden temel iş akışı esas alınmıştır.</p></details>
