---
title: Inkscape ile Vektörel Çizim
module_id: 34
updated: '2026-08-21'
summary: Vektör grafiklerin raster görsellerden farkını, SVG mantığını, Inkscape ile şekil ve yol oluşturmayı, düğüm düzenlemeyi ve çıktıyı doğru biçimde dışa aktarmayı öğreniyoruz.
quiz: /uygulamalar/5-5-inkscape-ile-vektorel-cizim/
permalink: /dersler/5-5-inkscape-ile-vektorel-cizim/
---
<div class="lesson-goals" markdown="1">

**Bu derste ne öğreneceğiz?**

Logo, simge, şema ve teknik çizim gibi çalışmalar için kullanılan **vektörel grafik** mantığını öğreneceğiz. Inkscape'te şekil çizme, seçme, taşıma, ölçekleme, döndürme, dolgu/kenarlık, hizalama, gruplama; şekli **path/yol**a dönüştürme ve **node/düğüm** düzenleme işlemlerini uygulayacağız. Çalışmanın düzenlenebilir SVG ana kopyasını saklayıp PNG/PDF çıktısı alacağız.

</div>

<div class="media-flow"><span>Şekiller</span><i>+</i><span>Yollar / düğümler</span><i>+</i><span>Metin</span><i>→</i><span>SVG vektör çizim</span><i>→</i><span>PNG / PDF çıktı</span></div>

## 1. Vektör grafik nedir?

### Vektör, şekli matematiksel olarak tanımlar

Raster görselde pikseller vardır; vektör çizimde çizgi, eğri, dolgu ve koordinatlar tanımlanır. Bu nedenle uygun bir vektör çizim çok büyütüldüğünde kenarlar piksel piksel bozulmaz.

<div class="media-card-grid"><div><b>Raster</b><span>Fotoğraf ve piksel tabanlı görseller; büyütmede pikseller görünür.</span></div><div><b>Vektör</b><span>Logo, ikon, şema; şekiller ve yollarla tanımlanır.</span></div><div><b>SVG</b><span>Web ve tasarımda yaygın açık vektör dosya biçimi.</span></div><div><b>PNG</b><span>Vektör çalışmanın piksele dönüştürülmüş dışa aktarımı olabilir.</span></div></div>

### Hangi iş için hangisi?

Fotoğraf düzenlemek için GIMP gibi raster araçlar; logo, ikon, teknik şema ve ölçeklenebilir çizimler için Inkscape gibi vektör araçlar daha uygundur.

## 2. Inkscape arayüzü ve şekiller

### Tuval ve araçlar

Inkscape'te belge tuvali, araç çubuğu, renk paleti ve araç seçenekleri bulunur. Dikdörtgen, elips, yıldız ve spiral gibi **shape/şekil araçları** ile temel nesneler oluşturulur.

<div class="app-demo" aria-label="Inkscape arayüz şeması"><div class="app-demo-titlebar"><b>Inkscape</b><span>logo.svg</span></div><div class="app-demo-toolbar"><span>Seç</span><span>Düğüm</span><span>Dikdörtgen</span><span>Elips</span><span>Kalem</span><span>Metin</span><span>Dolgu ve Kontur</span></div><div class="app-demo-body"><div class="app-demo-sidebar"><span>Nesneler</span><span>Katmanlar</span><span>Hizalama</span></div><div class="app-demo-stage"><div class="vector-stage"><span class="v-circle"></span><span class="v-rect"></span><span class="v-node"></span></div></div></div></div>

### Seçici aracı

Nesneyi seçtikten sonra taşıyabilir, boyutlandırabilir ve tekrar tıklayarak döndürme tutamaçlarına ulaşabilirsin. Oranı koruyarak ölçekleme için sürüm/kısayol davranışını öğrenmek yerine araç çubuğundaki genişlik-yükseklik kilidini ve durum bilgisini kontrol etmek daha güvenlidir.

## 3. Dolgu, kontur, hizalama ve katman sırası

### Fill ve Stroke

- **Fill / Dolgu:** şeklin iç rengi.
- **Stroke / Kontur:** şeklin dış çizgisi.

Bir logoda yalnızca renk seçmek yetmez; kontur kalınlığı ve görsel hiyerarşi de önemlidir.

### Hizalama

Birden fazla nesneyi aynı hizada veya eşit aralıklı yerleştirmek için hizalama/dağıtma araçları kullanılır. “Göz kararı” yerine hizalama araçları daha temiz sonuç verir.

### Z-order / üst-alt sırası

Nesneler birbirinin önünde veya arkasında bulunabilir. Üste getir, alta gönder gibi komutlarla görünürlük düzenlenir. Gruplama ise birden çok nesneyi tek parça gibi taşımayı kolaylaştırır.

## 4. Path (yol) ve Node (düğüm) mantığı

### Şekil ile yol aynı değildir

Inkscape başlangıç rehberine göre dikdörtgen, elips ve yıldız gibi geometrik nesneler “shape” olarak özel tutamaçlara sahiptir. **Path → Object to Path** işlemiyle şekil yola dönüştürülebilir; ancak bu dönüşümden sonra özgün şekil denetimlerine geri dönmek mümkün değildir.

### Düğümler yolu biçimlendirir

Bir path, birbirine segmentlerle bağlanan düğümlerden oluşur. Node aracıyla düğümler taşınabilir; eğri kolları değiştirilerek çizginin biçimi düzenlenebilir.

<div class="media-flow"><span>Geometrik şekil</span><i>→</i><span>Object to Path</span><i>→</i><span>Düğümler</span><i>→</i><span>Özel biçim</span></div>

### Gereksiz düğüm kullanma

Çok fazla düğüm çizimi kontrol etmeyi zorlaştırır. İstenen formu yeterli sayıda düğümle oluşturmak daha temizdir.

## 5. Metin ve basit logo/ikon oluşturma

### Metni okunabilir tut

Logo veya afişte metin kullanıyorsan yazı tipi, boşluk ve hizalama önemlidir. Metni vektör olarak düzenleyebilmek avantajdır; ancak dosyayı başka bilgisayarda açtığında aynı yazı tipi bulunmayabilir.

### Metni yola dönüştürme kararı

Son logoda yazı tipinin birebir görünmesi gerekiyorsa metni path'e dönüştürmek bir seçenek olabilir; fakat bu durumda metin artık kolayca düzenlenebilir yazı olarak kalmaz. Bu nedenle düzenlenebilir SVG ana dosyanın bir kopyasını saklamak önemlidir.

### Basitlik ölçeklenebilirliği artırır

Bir ikon 32 pikselde de 1000 pikselde de anlaşılır olmalıdır. Çok ince çizgi ve çok küçük detaylar küçük boyutta kaybolabilir.

## 6. SVG'yi kaydetmek ve PNG/PDF dışa aktarmak

### Ana dosya SVG olsun

Inkscape rehberi, başka biçimlere çıktı alırken **orijinal çalışmanın Inkscape SVG olarak saklanmasını** önerir. Böylece kılavuzlar, katmanlar, path effects gibi düzenleme bilgileri korunabilir.

### PNG dışa aktarma

Web sayfası, sunum veya raster görsel gereken durumlarda çizimi seçili alan, sayfa veya çizim sınırına göre PNG olarak dışa aktarabilirsin. Çıktı boyutunu piksel cinsinden ihtiyaca göre belirle.

### PDF çıktısı

PDF vektör içerebilir ancak SVG ile aynı özellik setine sahip değildir. Resmî Inkscape rehberi yalnızca PDF saklamak yerine SVG ana kopyayı da korumayı önerir.

<div class="export-flow"><span>logo.svg</span><i>→</i><span>Düzenlenebilir ana kopya</span><i>→</i><span>PNG: ekran/web</span><i>•</i><span>PDF: belge/baskı</span></div>

## 7. Birlikte uygulayalım: basit BİLSEM teknoloji simgesi

<div class="practice-panel" markdown="1">

1. Yeni bir Inkscape belgesi aç.
2. Bir daire ve iki dikdörtgen oluşturarak basit bir teknoloji simgesi tasarla.
3. Dolgu ve kontur renklerini düzenle.
4. Nesneleri hizalama araçlarıyla ortala.
5. İki nesneyi grupla ve birlikte taşı.
6. Bir kopyadaki şekli **Object to Path** yap ve Node aracıyla bir düğümü değiştir.
7. Çalışmayı `teknoloji-simgesi.svg` olarak kaydet.
8. Aynı çizimi 512×512 piksel PNG olarak dışa aktar ve SVG ile PNG'nin büyütme davranışını karşılaştır.

</div>

## 8. Sık yapılan hatalar ve ders özeti

<div class="mistake-panel" markdown="1">

- Vektör ile raster görseli yalnızca dosya uzantısına göre ezberlemek.
- Nesneleri göz kararı hizalayıp hizalama araçlarını kullanmamak.
- Şekli path'e dönüştürdükten sonra eski şekil özelliklerine dönebileceğini sanmak.
- Çok fazla düğüm kullanarak çizimi gereksiz karmaşıklaştırmak.
- Yalnızca PNG/PDF saklayıp düzenlenebilir SVG ana dosyayı kaybetmek.
- Başkasına ait logo, ikon veya yazı tipini kullanım hakkını kontrol etmeden kullanmak.

</div>

**Ders sonunda:** raster-vektör farkını açıklayabilmeli; Inkscape'te şekil, dolgu/kontur, hizalama ve gruplama işlemlerini yapabilmeli; path/node düzenleyebilmeli ve SVG ana dosyadan uygun PNG/PDF çıktısı oluşturabilmelisin.

<details class="source-note"><summary>Kaynak kontrolü</summary><p>İçerik Inkscape'in resmî Basic Tutorial'ı ve Inkscape Beginners' Guide içindeki Editing Paths, Objects to Paths ve export bölümleriyle karşılaştırılmıştır. Kaynaklar SVG ana kopyayı korumayı ve başka biçimlere çıktıyı ayrı üretmeyi önerir.</p></details>
