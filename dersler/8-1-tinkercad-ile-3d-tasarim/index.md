---
title: Tinkercad ile 3D Tasarım
module_id: 48
updated: '2026-08-21'
summary: Tinkercad 3D Design web ortamını Türkçe anlatımla kullanmayı; temel şekiller, ölçü, hizalama, çalışma düzlemi, delik, gruplama, çoğaltma ve 3D baskıya uygun temel model hazırlama adımlarını öğreniyoruz.
quiz: /uygulamalar/8-1-tinkercad-ile-3d-tasarim/
permalink: /dersler/8-1-tinkercad-ile-3d-tasarim/
---
<div class="lesson-goals" markdown="1">

**Bu derste ne öğreneceğiz? — Türkçe kullanım**

Bu derste Autodesk'in ücretsiz web uygulaması **Tinkercad 3D Design** ortamını [https://www.tinkercad.com/3d-design](https://www.tinkercad.com/3d-design) adresinden kullanacağız. Ders anlatımı Türkçedir. Tinkercad arayüz çevirileri hesap, bölge ve güncellemelere göre değişebildiği için önemli araçlarda Türkçe karşılığın yanında resmî İngilizce adını da göreceğiz: **Çalışma Düzlemi (Workplane), Cetvel (Ruler), Hizala (Align), Grupla (Group), Delik (Hole), Çoğalt (Duplicate)**.

</div>

<div class="archive-flow" aria-label="Tinkercad 3D tasarım akışı"><span>Çalışma düzlemini tanı</span><i>→</i><span>Şekil ekle</span><i>→</i><span>Ölçülendir ve konumlandır</span><i>→</i><span>Birleştir / oy</span><i>→</i><span>Kontrol et ve dışa aktar</span></div>

## 1. Tinkercad 3D Design nedir?

Tinkercad, tarayıcı üzerinden çalışan ücretsiz bir 3D tasarım, elektronik ve kodlama ortamıdır. 3D Design bölümünde modeller çoğunlukla **temel şekillerin yerleştirilmesi, ölçülendirilmesi, döndürülmesi ve birleştirilmesi** ile oluşturulur.

### Tasarım alanı

- **Workplane / Çalışma Düzlemi:** Şekilleri yerleştirdiğimiz referans düzlemdir.
- **Shapes / Şekiller paneli:** Kutu, silindir, küre ve benzeri hazır geometrileri içerir.
- **ViewCube / Görünüm Küpü:** Modeli ön, üst, sağ, izometrik gibi açılardan görmeye yardım eder.
- **Grid / Izgara:** Konumlandırma ve ölçü algısını kolaylaştırır.

3D modellemede yalnız “güzel görünmek” yeterli değildir. Nesnenin **ölçüsü, konumu ve geometrik ilişkileri** de önemlidir.

## 2. Kamerayı ve 3D uzayı doğru kullanma

Bir 3D modeli anlamak için farklı açılardan bakmak gerekir. Tinkercad'de temel görüntü hareketleri şunlardır:

- **Orbit / Döndürerek bakma:** Modelin etrafında görüş açısını değiştirir.
- **Pan / Kaydırma:** Kamerayı sağa-sola veya yukarı-aşağı taşır.
- **Zoom / Yakınlaştırma:** Modelle arandaki görsel mesafeyi değiştirir.
- **Fit selection / Seçileni görünüme sığdır:** Seçili modeli ekranda uygun boyuta getirir.

**Kamera hareketi modeli değiştirmez.** Modeli döndürmek ile kamerayı modelin etrafında döndürmek farklı işlemlerdir.

## 3. Temel şekiller, boyutlandırma ve Ruler/Cetvel

### Şekil ekleme

Shapes panelinden bir **Box / Kutu** nesnesini çalışma düzlemine sürükle. Seçili şeklin tutamaçlarıyla genişlik, uzunluk ve yükseklik değiştirilebilir. Hassas tasarımda yalnız göz kararıyla sürüklemek yerine sayısal değer girmek daha güvenlidir.

### Ruler / Cetvel

Autodesk, Ruler aracının nesneler arasında mesafe ölçmek ve hassas 3D baskı için **tam boyut değerleri girmek** amacıyla kullanılabildiğini belirtir.

Örnek: 40 mm × 30 mm × 10 mm ölçüsünde bir kutu oluşturmak istiyorsan üç boyutu sayısal olarak gir.

### Grid Snap / Izgara yakalama

Izgara adımı nesnelerin küçük miktarlarda taşınmasını kontrol eder. Çok kaba bir snap değeri hassas yerleştirmeyi zorlaştırabilir; çok küçük değer ise başlangıç öğrencisi için gereksiz ayrıntı oluşturabilir.

## 4. Align, Duplicate ve Mirror ile düzenli model kurma

### Align / Hizala

İki veya daha fazla nesneyi seçip **Align** aracını kullandığında nesneleri X, Y ve Z eksenlerinde kenar veya merkez çizgilerine göre hizalayabilirsin. Bir deliği bir kutunun tam merkezine getirmek için çok kullanışlıdır.

### Duplicate / Çoğalt

**Ctrl+D** ile bir nesnenin kopyası oluşturulabilir. Tinkercad'in Duplicate and Repeat davranışı, bir kopyaya yaptığın taşıma/döndürme gibi dönüşümü sonraki kopyalarda tekrar ederek düzenli desenler üretmeyi kolaylaştırabilir.

### Mirror / Aynala

Simetrik parçalar oluştururken nesnenin yönünü ters çevirmeye yarar. Mirror, nesneyi “kopyalamak” ile aynı şey değildir; yönünü/eksene göre yansımasını değiştirir.

## 5. Solid, Hole ve Group mantığı

Tinkercad'de bir şekil **Solid / Katı** veya **Hole / Delik** davranışında kullanılabilir.

### Delik açma mantığı

1. Bir kutu oluştur.
2. İçine daha küçük ikinci bir kutu yerleştir.
3. Küçük kutuyu **Hole / Delik** yap.
4. İki nesneyi seç.
5. **Align / Hizala** ile delik nesnesini merkezle.
6. **Group / Grupla** komutunu kullan.

Gruplama sonrasında Hole nesnesinin kapladığı hacim katıdan çıkarılır. Bu yöntem kutu içinde boşluk, kanal veya geçme yuvası oluşturmak için kullanılabilir.

### Group / Ungroup

**Group** nesneleri tek bir bileşik sonuçta birleştirir. **Ungroup / Grubu çöz** mümkün olan durumlarda bileşenleri yeniden düzenlemek için kullanılır. Tasarımın hangi aşamasında grupladığını bilmek düzenlemeyi kolaylaştırır.

## 6. Workplane ve hassas yerleştirme

### Workplane / Çalışma Düzlemi

Varsayılan çalışma düzlemi tabandır. Ancak bir nesnenin yüzeyine yeni Workplane yerleştirerek başka bir yüzeyi geçici yerleştirme referansı yapabilirsin. Örneğin bir kutunun yan yüzüne kabartma veya bağlantı parçası eklerken bu çok kullanışlıdır.

### Drop / çalışma düzlemine bırakma

Bir nesne havada kaldıysa onu çalışma düzlemine indirmek gerekebilir. Tinkercad kısayol rehberinde **D** tuşu “Drop shape to workplane” için kullanılır.

### Faydalı kısayollar

- **Ctrl+Z:** Geri al
- **Ctrl+D:** Çoğalt / tekrar çoğalt
- **L:** Align
- **R:** Ruler ekle
- **W:** Workplane ekle
- **D:** Nesneyi çalışma düzlemine bırak
- **M:** Mirror

Kısayollar güncellemelerle değişebileceği için ekrandaki araç ipuçlarını da kontrol et.

## 7. Birlikte uygulayalım: anahtarlık tasarla

<div class="practice-panel" markdown="1">

1. [Tinkercad 3D Design](https://www.tinkercad.com/3d-design) sayfasına gir ve yeni bir 3D tasarım aç.
2. Çalışma düzlemine 60 × 25 × 4 mm ölçüsünde bir **Box** yerleştir.
3. Köşelerden birine 6 mm çapında bir **Cylinder** ekle ve **Hole** yap.
4. Delik silindirini üst görünüşte uygun noktaya taşı; kenarlardan yeterli pay bıraktığını kontrol et.
5. Katı ve deliği seçip **Group** yaparak anahtarlık deliğini oluştur.
6. Bir **Text / Metin** şekli ekleyip kısa bir ad veya “BİLSEM” yaz.
7. Metni yüzeye yerleştirmek için gerekirse **Workplane** kullan ve metni 1–2 mm yükselt.
8. **Align** ile metnin konumunu düzenle ve katıyla grupla.
9. Modeli üst, ön ve izometrik görünüşten kontrol et; havada kalan parça olmadığından emin ol.
10. 3D baskı için dışa aktarmadan önce ölçüleri tekrar gözden geçir. Dışa aktarma formatı, kullanılacak slicer ve üretim sürecine göre seçilmelidir; yaygın 3D baskı iş akışında STL sık kullanılır.

</div>

## 8. Sık yapılan hatalar ve ders özeti

<div class="mistake-panel" markdown="1">

- Kamerayı döndürmek ile nesneyi döndürmeyi karıştırmak.
- Ölçüleri yalnız göz kararıyla vermek.
- Hole nesnesini Group yapmadan gerçek bir boşluk oluştuğunu sanmak.
- Align kullanmadan merkezi gözle tahmin etmek.
- Workplane'in geçici yerleştirme referansı olduğunu anlamadan yanlış yüzeye şekil eklemek.
- Çok ince duvarlar veya birbirinden kopuk parçalar oluşturup 3D baskıda sorun yaşayabileceğini gözden kaçırmak.
- Tasarımı farklı açılardan kontrol etmeden dışa aktarmak.

</div>

**Ders sonunda:** Tinkercad 3D Design'da temel şekil ekleyebilmeli; sayısal ölçü verebilmeli; Ruler, Align, Duplicate, Mirror, Workplane, Solid/Hole ve Group mantığını açıklayabilmeli; basit bir anahtarlık benzeri modeli kontrollü ölçülerle oluşturabilmelisin.

<details class="source-note"><summary>Kaynak kontrolü</summary><p>Ders; Autodesk Tinkercad 3D Design sayfası, güncel Tinkercad öğrenme merkezi ve Autodesk/Tinkercad kısayol rehberleriyle 21 Ağustos 2026 tarihinde karşılaştırılmıştır. Arayüz yerelleştirmesi değişebileceği için kritik araç adları Türkçe açıklamanın yanında resmî İngilizce adlarıyla verilmiştir.</p><ul><li><a href="https://www.tinkercad.com/3d-design">Tinkercad 3D Design</a></li><li><a href="https://www.tinkercad.com/learn/designs">Tinkercad Learn 3D Design</a></li></ul></details>
