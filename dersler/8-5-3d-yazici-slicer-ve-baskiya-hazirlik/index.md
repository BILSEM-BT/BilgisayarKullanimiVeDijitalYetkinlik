---
title: 3D Yazıcı, Slicer ve Baskıya Hazırlık
module_id: 52
updated: '2026-08-21'
summary: FFF/FDM 3D yazıcının temel parçalarını, 3D model ile G-code arasındaki farkı, PrusaSlicer üzerinden doğru yazıcı ve filament profili seçmeyi, katman yüksekliği, duvar, dolgu, destek, yönlendirme ve brim ayarlarını anlamayı; baskı öncesi önizleme ve güvenlik kontrolü yapmayı öğreniyoruz.
quiz: /uygulamalar/8-5-3d-yazici-slicer-ve-baskiya-hazirlik/
permalink: /dersler/8-5-3d-yazici-slicer-ve-baskiya-hazirlik/
---
<div class="lesson-goals" markdown="1">

**Bu derste ne öğreneceğiz? — Ders dili: Türkçe**

Bu derste bir 3D modeli doğrudan yazıcıya göndermenin neden yeterli olmadığını öğreneceğiz. **FFF/FDM 3D yazıcı → slicer → G-code → baskı** zincirini kuracak; PrusaSlicer'ı örnek slicer olarak kullanarak doğru yazıcı/filament profilini seçmeyi, modeli tabla üzerinde konumlandırmayı, katman yüksekliği, çevre duvarları, dolgu, destek ve brim gibi temel ayarları yorumlamayı, dilimleme sonrası katman önizlemesini kontrol etmeyi ve ancak bundan sonra baskı dosyasını yazıcıya aktarmayı öğreneceğiz.

</div>

<div class="archive-flow" aria-label="3D baskı hazırlık akışı"><span>3D modeli hazırla</span><i>→</i><span>Doğru yazıcı ve filament profilini seç</span><i>→</i><span>Yönlendir ve ayarları belirle</span><i>→</i><span>Slice / Dilimle</span><i>→</i><span>Preview / Önizle</span><i>→</i><span>G-code'u yazıcıya aktar</span></div>

## 1. 3D yazıcı ne yapar, slicer neden gerekir?

Bu derste temel olarak **FFF/FDM** türü filamentli 3D yazıcıları ele alıyoruz. Bu makinelerde filament ısıtılmış bir nozuldan çıkar, tabla üzerinde katman katman birikir ve üç boyutlu parça oluşur.

Temel parçalar:

- **Filament:** Yazdırılacak termoplastik malzeme.
- **Extruder / besleme mekanizması:** Filamenti hotend'e doğru ilerletir.
- **Hotend ve nozzle / nozul:** Filamenti eritip ince bir yol halinde dışarı verir.
- **Build plate / baskı tablası:** İlk katmanın tutunduğu yüzeydir.
- **X-Y-Z hareket sistemi:** Nozulun veya tablanın üç eksende hareket etmesini sağlar.
- **Kontrol kartı ve firmware:** G-code komutlarını yorumlayıp motorları, ısıtıcıları ve diğer bileşenleri yönetir.

Bir `.stl` veya `.3mf` model dosyası tek başına yazıcıya “hangi sırayla nereye git” talimatı vermez. **Slicer**, üç boyutlu modeli yatay katmanlara ayırır ve yazıcının izleyeceği takım yolunu hesaplar. Çıktı çoğu FFF/FDM yazıcıda **G-code** veya yazıcıya özel eşdeğer baskı dosyasıdır.

<div class="app-demo" aria-label="3D modelden baskıya veri akışı"><div class="app-demo-titlebar"><b>3D Baskı İş Akışı</b><span>Model dosyası ≠ baskı komutları</span></div><div class="app-demo-toolbar"><span>CAD / 3D Tasarım</span><span>Slicer</span><span>3D Yazıcı</span></div><div class="app-demo-body"><div class="app-demo-sidebar"><span>STL</span><span>3MF</span><span>STEP</span><span>OBJ</span></div><div class="app-demo-stage"><div class="archive-files"><div><b>1. Model</b><span>Geometriyi temsil eder</span></div><div><b>2. Slice</b><span>Katman ve takım yolu hesaplanır</span></div><div><b>3. G-code</b><span>Yazıcıya hareket/ısıtma komutları gönderilir</span></div></div></div></div></div>

## 2. Model dosyaları: STL, 3MF ve G-code aynı şey değildir

PrusaSlicer; **STL, 3MF, STEP, OBJ ve AMF** gibi çeşitli 3D dosya biçimlerini içe aktarabilir. Başlangıç düzeyinde özellikle şu farkı bilmek önemlidir:

| Dosya | Ne taşır? | Bu dersteki rolü |
|---|---|---|
| **STL** | Temel olarak yüzey geometrisini üçgenlerle temsil eder | Yaygın model değişim biçimidir; slicer ayarlarını taşımaz |
| **3MF** | Model(ler)e ek olarak proje içinde ayarlar, değiştiriciler ve başka bilgiler de saklanabilir | PrusaSlicer proje kaydı için tercih edilen biçimdir |
| **G-code / BG-code** | Dilimleme sonucunda oluşan yazıcı komutları | Tasarım dosyası değildir; belirli yazıcı/profil için baskı çıktısıdır |

Özellikle **başkasından alınmış G-code'u körü körüne yazıcıda çalıştırma**. G-code; yazıcı modeli, nozul, filament ve sıcaklık gibi ayarlara bağlı olabilir. En güvenli eğitim yaklaşımı, kaynak modeli kendi yazıcı profilinle yeniden dilimleyip önizlemektir.

### PrusaSlicer'ı nereden indiririz?

Resmî kaynak: [https://www.prusa3d.com/page/prusaslicer_424/](https://www.prusa3d.com/page/prusaslicer_424/)

PrusaSlicer Windows, macOS ve Linux için sunulur. Kurulumdan sonra ilk açılışta **Configuration Wizard / Yapılandırma Sihirbazı** üzerinden kullanılacak yazıcı ve filament profilleri seçilir.

## 3. Doğru yazıcı, nozul ve filament profilini seçme

Slicer ayarları “her yazıcı için aynı” değildir. Baskıya başlamadan önce şu üç profilin doğru olduğundan emin ol:

1. **Printer / Yazıcı profili:** Baskı hacmi, kinematik yapı, nozul çapı ve makineye özgü sınırlar.
2. **Filament / Malzeme profili:** Filament türüne ve üretici profiline göre sıcaklık, soğutma ve benzeri ayarlar.
3. **Print / Baskı profili:** Katman yüksekliği, kalite-hız dengesi ve diğer baskı ayarları.

Bu derste sıcaklık değerlerini ezberlemiyoruz. **PLA, PETG, ABS/ASA gibi malzemelerin uygun sıcaklıkları; yazıcı, nozul, filament markası ve üretici tavsiyesine göre değişebilir.** Sınıfta öğretmenin ve üreticinin onayladığı profil kullanılmalıdır.

### Nozul çapı ve katman yüksekliği ilişkisi

Katman yüksekliği baskının **Z eksenindeki çözünürlüğünü** ve süresini doğrudan etkiler:

- Daha küçük katman yüksekliği → daha ince katman görünümü, genellikle daha uzun baskı.
- Daha büyük katman yüksekliği → daha hızlı baskı, ancak katman çizgileri daha belirgin olabilir.

PrusaSlicer belgeleri, katman yüksekliğinin nozul çapıyla uyumlu olması gerektiğini belirtir; örneğin 0,4 mm nozul için varsayılan profiller genellikle yaklaşık 0,15–0,20 mm gibi başlangıç değerleri kullanır. **Rastgele aşırı yüksek bir değer girmek yerine yazıcı profilindeki güvenli hazır profiller kullanılmalıdır.**

## 4. Modeli tabla üzerinde yönlendirme: yön, ölçek ve temas alanı

Modelin 3D görünümde “güzel durması” baskıya uygun olduğu anlamına gelmez. Yönlendirme şu özellikleri etkileyebilir:

- destek ihtiyacı,
- baskı süresi,
- yüzey kalitesi,
- katman yönüne bağlı mekanik dayanım,
- ilk katmanın tabla ile temas alanı.

PrusaSlicer'da temel araçlar arasında **Move, Scale, Rotate ve Place on Face** bulunur.

### İyi yönlendirme için düşünme sırası

- Geniş ve düz bir yüzeyi mümkünse tabla üzerine yerleştir.
- Havada başlayacak bölgeleri ve büyük **overhang / çıkıntıları** kontrol et.
- Gereksiz destek kullanmak yerine modeli çevirmek veya parçaya bölmek bazen daha iyi sonuç verir.
- Ölçeği değiştirirken modelin gerçek boyutunu ve işlevini unutma.
- Bir parçanın dayanım yönü önemliyse, katmanların hangi yönde oluşacağını düşün.

<div class="callout" markdown="1">

**Önemli:** Slicer “otomatik destek üretebiliyor” diye her modeli aynı yönde bırakmak doğru değildir. Önce **yönlendirme ile desteği azaltmayı**, sonra gerektiği kadar destek üretmeyi düşün.

</div>

## 5. Katman, duvar/perimeter, infill, support ve brim ne işe yarar?

### Layer height / Katman yüksekliği

Dikey ayrıntı ve baskı süresi arasındaki temel dengedir. Sınıf çalışmalarında öğretmenin belirlediği hazır profil üzerinden ilerlemek en güvenli başlangıçtır.

### Perimeters / Çevre duvarları

Modelin dış kabuğunu oluşturan çizgilerdir. Prusa belgeleri, mekanik dayanımda çevre duvarı sayısının önemli rol oynadığını özellikle belirtir. **Daha fazla infill her zaman en doğru güçlendirme yöntemi değildir.**

### Infill / Dolgu

Modelin içindeki seyrek yapıdır. Üst katmanlara iç destek sağlar ve parçanın mekanik davranışını etkiler. Basit görsel modellerin tamamen %100 dolu basılması çoğu zaman gerekmez; gereksiz malzeme ve süre tüketebilir.

### Supports / Destekler

Bir katman alttaki geometri tarafından yeterince desteklenmiyorsa, slicer geçici destek yapıları üretebilir. Baskı bittikten sonra destekler ayrılır. Destek yüzeyde iz bırakabileceği ve süre/malzeme tüketebileceği için **gerektiği kadar** kullanılmalıdır.

### Brim

İlk katmanın çevresine ek çizgiler basarak tabla temas alanını artırır. Küçük tabanlı veya köşeleri kalkmaya eğilimli parçaların tutunmasına yardımcı olabilir. Brim, modelin içini dolduran **infill** ile aynı şey değildir.

## 6. Slice ve Preview: baskıya göndermeden önce en önemli kontrol

Ayarları seçtikten sonra **Slice now / Dilimle** komutu takım yolunu hesaplar. Bundan sonra mutlaka **Preview / Önizleme** görünümünü incele.

Kontrol listesi:

- Model tamamen baskı hacminin içinde mi?
- İlk katman gerçekten tablaya temas ediyor mu?
- Havada başlayan ada veya beklenmeyen parça var mı?
- Destekler gereken bölgelerde oluşmuş mu?
- Brim gerekiyorsa var mı?
- Duvar ve dolgu beklediğin gibi mi?
- Katman görünümünde boşluk, kopuk yol veya anlamsız hareket var mı?
- Tahmini süre ve filament tüketimi sınıf çalışması için makul mü?

**Preview yalnızca güzel bir animasyon değildir; hatalı baskıyı başlamadan yakalamak için kalite kontrol adımıdır.**

## 7. Birlikte uygulayalım: anahtarlığı baskıya hazırlama

<div class="practice-panel" markdown="1">

1. Ders 8-1'de oluşturduğun anahtarlık modelini mümkünse **3MF** veya **STL** olarak dışa aktar.
2. PrusaSlicer'ı aç ve sınıfta kullanılacak **doğru yazıcı/nozul profilini** seç.
3. Öğretmenin belirlediği **filament profilini** seç.
4. Modeli içe aktar ve gerçek boyutlarını kontrol et.
5. Modelin en geniş düz yüzeyini baskı tablasına yerleştir.
6. Başlangıç için öğretmenin önerdiği hazır **0,20 mm civarındaki kalite profillerinden** birini seç; profilin yazıcı/nozula uygun olduğundan emin ol.
7. Destekleri kapalıyken modeli incele. Havada kalacak bölge varsa önce yönlendirmeyi iyileştir; gerekiyorsa destek kullan.
8. Modelin taban alanı küçükse **brim** seçeneğinin ne işe yarayacağını açıkla.
9. **Slice now** ile dilimle.
10. **Preview** görünümünde ilk katmanı, duvarları, dolguyu ve varsa destekleri katman katman incele.
11. Tahmini süre ve malzeme miktarını kaydet.
12. Projeyi **3MF** olarak kaydet; böylece model ve slicer ayarlarını daha sonra yeniden açabilirsin.
13. Yalnız öğretmen onayı sonrası uygun baskı dosyasını sınıf yazıcısına aktar.

</div>

### Baskı öncesi fiziksel güvenlik

3D yazıcıda **hotend/nozul ve ısıtmalı tabla sıcak olabilir**. Hareketli eksenlere ve sıcak parçalara çalışma sırasında dokunma. Baskı tablasının temiz, doğru yerleşmiş ve yazıcının kalibrasyonunun uygun olduğundan emin ol. İlk katmanı gözlemle; çizgiler arasında büyük boşluklar veya aşırı ezilme varsa baskıya devam etmek yerine öğretmene haber ver.

## 8. Sık yapılan hatalar ve ders özeti

<div class="mistake-panel" markdown="1">

- STL/3MF modeli doğrudan G-code sanmak.
- Yanlış yazıcı veya yanlış nozul profilinde G-code üretmek.
- Filament türüne uygun üretici profilini kontrol etmeden sıcaklıkları rastgele değiştirmek.
- Modeli otomatik geldiği yönde bırakıp destek miktarını gereksiz artırmak.
- Katman yüksekliği küçüldükçe baskının da hızlanacağını sanmak.
- Parçayı güçlendirmek için yalnızca infill oranını düşünmek; çevre duvarlarını göz ardı etmek.
- Brim ile infill'i karıştırmak.
- Dilimledikten sonra **Preview** kontrolünü atlamak.
- Başka bir yazıcı için hazırlanmış G-code'u kontrol etmeden çalıştırmak.
- Sıcak nozul, sıcak tabla ve hareketli mekanizmalara dokunmak.
- İlk katman kötü görünürken baskının kendiliğinden düzeleceğini varsaymak.

</div>

**Ders sonunda:** model dosyası ile baskı komutu arasındaki farkı; slicer'ın görevini; yazıcı, filament ve baskı profilinin neden doğru seçilmesi gerektiğini; katman yüksekliği, perimeter, infill, support ve brim kavramlarını; yönlendirmenin önemini; Preview kontrolünün neden zorunlu olduğunu açıklayabilmelisin.

<details class="source-note"><summary>Kaynak kontrolü</summary><p>İçerik 21 Ağustos 2026 tarihinde PrusaSlicer'ın resmî kullanıcı belgeleri ile UltiMaker'ın slicer açıklamaları karşılaştırılarak doğrulanmıştır. Ders belirli sıcaklık değerlerini ezberletmek yerine yazıcı ve filament üreticisinin doğrulanmış profilini kullanmayı öğretir.</p><ul><li><a href="https://help.prusa3d.com/article/first-print-with-prusaslicer_1753">PrusaSlicer — First print</a></li><li><a href="https://help.prusa3d.com/article/ui-overview_1766">PrusaSlicer — UI overview</a></li><li><a href="https://help.prusa3d.com/article/layers-and-perimeters_1748">Layers and perimeters</a></li><li><a href="https://help.prusa3d.com/article/support-material_1698">Support material</a></li><li><a href="https://help.prusa3d.com/article/supported-file-formats_1772">Supported file formats</a></li><li><a href="https://help.prusa3d.com/article/saving-projects-as-3mf_1773">Saving projects as 3MF</a></li><li><a href="https://ultimaker.com/software/ultimaker-cura/">UltiMaker Cura — slicing overview</a></li></ul></details>
