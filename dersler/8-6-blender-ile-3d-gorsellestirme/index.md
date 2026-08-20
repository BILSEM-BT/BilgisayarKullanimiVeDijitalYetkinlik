---
title: Blender ile 3D Görselleştirme
module_id: 53
updated: '2026-08-21'
summary: Blender 5.2 LTS ortamını tanımayı, Object Mode ve Edit Mode farkını, temel mesh düzenleme araçlarını, malzeme ve ışık eklemeyi, kamera yerleştirmeyi ve basit bir ürün görselini render etmeyi öğreniyoruz.
quiz: /uygulamalar/8-6-blender-ile-3d-gorsellestirme/
permalink: /dersler/8-6-blender-ile-3d-gorsellestirme/
---
<div class="lesson-goals" markdown="1">

**Bu derste ne öğreneceğiz? — Ders anlatımı: Türkçe**

Bu derste **Blender 5.2 LTS** üzerinden temel 3D görselleştirme iş akışını öğreneceğiz. Blender'ın ana çalışma alanlarını tanıyacak; **Object Mode** ile nesne düzeyinde, **Edit Mode** ile mesh geometrisi düzeyinde düzenleme yapacak; taşıma, döndürme, ölçekleme, Extrude, Inset ve Bevel gibi temel araçları kullanacak; malzeme, ışık ve kamera ekleyerek basit bir ürün sahnesini render edeceğiz.

Blender arayüzü farklı dillere çevrilebilir. Ders anlatımı Türkçedir; ancak sürümler ve çeviri kapsamı arasında fark oluşmaması için temel komutların **resmî İngilizce adları parantez içinde** de verilir.

</div>

<div class="archive-flow" aria-label="Blender 3D görselleştirme iş akışı"><span>Sahneyi kur</span><i>→</i><span>Modeli düzenle</span><i>→</i><span>Malzeme ekle</span><i>→</i><span>Işıkları yerleştir</span><i>→</i><span>Kamerayı ayarla</span><i>→</i><span>Render al</span></div>

## 1. Blender 5.2 LTS'yi kurma ve arayüzü tanıma

Blender'ın güncel uzun süre destekli sürümlerinden biri **Blender 5.2 LTS**'dir. Resmî indirme adresi:

**[https://www.blender.org/download/](https://www.blender.org/download/)**

Windows için **Installer**, gerektiğinde portable paket; macOS ve Linux için de ayrı dağıtımlar bulunur. Eğitim bilgisayarında öğretmenin belirlediği kurulum yöntemi kullanılmalıdır.

### Ana arayüz bölgeleri

- **3D Viewport:** Nesneleri gördüğümüz ve düzenlediğimiz ana 3D alan.
- **Outliner:** Sahnedeki nesneleri ve koleksiyonları hiyerarşik olarak listeler.
- **Properties Editor:** Render, Output, World, Object, Modifier, Material gibi ayarları barındırır.
- **Timeline:** Animasyon karelerini ve oynatmayı yönetir; bu derste temel olarak arayüzü tanımak için göreceğiz.
- **Workspaces:** Layout, Modeling, Shading, Rendering gibi çalışma alanları arasında geçiş sağlar.
- **Topbar / Header:** Dosya, düzenleme ve sahneye ilişkin genel komutları içerir.

<div class="app-demo" aria-label="Blender temel arayüz şeması"><div class="app-demo-titlebar"><b>Blender 5.2 LTS</b><span>Layout Workspace</span></div><div class="app-demo-toolbar"><span>File</span><span>Edit</span><span>Render</span><span>Layout</span><span>Modeling</span><span>Shading</span></div><div class="app-demo-body"><div class="app-demo-sidebar"><span>Outliner</span><span>Properties</span><span>Timeline</span></div><div class="app-demo-stage"><div class="archive-files"><div><b>3D Viewport</b><span>Nesneleri seç, taşı, döndür, ölçekle</span></div><div><b>Object Mode</b><span>Nesne düzeyi işlemler</span></div><div><b>Edit Mode</b><span>Vertex / Edge / Face düzenleme</span></div></div></div></div></div>

## 2. Sahne, nesne ve mesh kavramları

Blender'da “ekranda gördüğümüz her şey mesh'tir” demek yanlıştır. Bir sahnede farklı nesne türleri bulunabilir:

- **Mesh:** Cube, Cylinder, Sphere gibi çokgen tabanlı geometri.
- **Camera:** Render görüntüsünün bakış noktasını belirler.
- **Light:** Sahneyi aydınlatır.
- **Empty, Curve, Text** gibi başka nesne türleri de vardır.

### Object Mode ve Edit Mode farkı

- **Object Mode:** Nesnenin tamamını seçer; nesneyi taşır, döndürür, ölçekler, çoğaltır veya nesne düzeyindeki özellikleri yönetir.
- **Edit Mode:** Seçili mesh'in iç geometrisini; **Vertex (köşe), Edge (kenar), Face (yüz)** düzeyinde düzenler.

**Tab** tuşu, uygun bağlamda Object Mode ile Edit Mode arasında geçiş için yaygın kısayoldur.

## 3. Taşıma, döndürme ve ölçekleme: G, R, S

Blender'ın temel dönüşüm kısayolları:

| Kısayol | İşlem | Örnek |
|---|---|---|
| **G** | Grab / Move | Nesneyi taşı |
| **R** | Rotate | Nesneyi döndür |
| **S** | Scale | Nesneyi ölçekle |
| **X / Y / Z** | Eksen kısıtı | `G` ardından `X` → yalnız X ekseninde taşı |
| **Shift+D** | Duplicate | Seçili nesneyi çoğalt |

Örnek: `G`, sonra `Z`, sonra `2` yazıp Enter'a basarsan seçili nesneyi Z ekseninde 2 Blender birimi taşırsın.

### Ölçek ve Apply Scale

Object Mode'da `S` ile yaptığın ölçek değişimi nesnenin **Scale** değerini 1,1,1 dışında bırakabilir. Bazı modifier ve bevel davranışlarında beklenen fiziksel oranları korumak için gerektiğinde **Ctrl+A → Scale** ile ölçeği uygulamak yararlıdır. Bunu her işlemden sonra otomatik yapmak değil, **neden gerektiğini bilerek** kullanmak önemlidir.

## 4. Mesh düzenleme: Extrude, Inset ve Bevel

Edit Mode'da mesh geometrisini doğrudan değiştiririz.

### Extrude — `E`

Seçili vertex, edge veya face üzerinden bağlı yeni geometri üretir. Özellikle bir yüzeyi uzatıp yeni hacim oluşturmak için temel araçtır.

### Inset Faces — `I`

Seçili yüzün içinde yeni bir sınır oluşturur. Örneğin bir kutunun üst yüzünde daha küçük bir iç bölge oluşturup bunu aşağı doğru extrude ederek oyuk hazırlayabilirsin.

### Bevel — `Ctrl+B`

Seçili kenarları pahlar/yuvarlatır. Keskin 90° kenarları daha gerçekçi göstermek için küçük bir bevel görselleştirmede çok etkilidir.

### Loop Cut — `Ctrl+R`

Mesh üzerinde yeni kenar halkaları ekler. Modelde daha fazla kontrol noktası oluşturmak için kullanılır.

<div class="callout" markdown="1">

**Modelleme ilkesi:** Daha fazla poligon her zaman daha iyi model demek değildir. İhtiyacın kadar geometri kullan; formu, ölçüyü ve yüzey akışını kontrol et.

</div>

## 5. Malzeme ve görünüm: renk tek başına yeterli değildir

Bir nesnenin görünüşünü **Material Properties** üzerinden düzenleyebilirsin. Blender'ın temel fiziksel malzeme yaklaşımında **Principled BSDF** düğümü yaygın olarak kullanılır.

Başlangıçta şu özellikleri tanı:

- **Base Color:** Ana yüzey rengi.
- **Roughness:** Yansımanın ne kadar keskin veya dağınık görüneceğini etkiler. Düşük roughness daha parlak/ayna benzeri, yüksek roughness daha mat bir görünüm üretir.
- **Metallic:** Yüzeyin metalik davranışını belirleyen temel parametrelerden biridir.
- **Alpha / Transmission** gibi başka özellikler vardır; bu derste temel malzeme anlayışına odaklanıyoruz.

### Material Preview ve Rendered görünüm

3D Viewport'taki **Material Preview**, malzemeyi hızlı değerlendirmeye yardımcı olur. **Rendered** görünüm ise seçili render motoru ve sahnedeki ışıklarla daha gerçek sonuç verir; donanıma göre daha yavaş olabilir.

## 6. Işık ve kamera: model görünür değilse render da doğru olmaz

### Işık türleri

Blender'da yaygın ışık nesneleri:

- **Point:** Bir noktadan çevreye ışık yayar.
- **Sun:** Uzak ve paralel ışık yaklaşımı sağlar; yönü önemlidir.
- **Spot:** Konik bir bölgeyi aydınlatır.
- **Area:** Belirli bir yüzey alanından ışık verir; ürün görselleştirmede yumuşak ışık için kullanışlıdır.

Aşırı güçlü tek bir ışık yerine ana ışık + dolgu ışığı gibi düşünmek sahneyi daha okunur hâle getirebilir.

### Kamera

Render çıktısı **aktif kameranın** gördüğü görüntüdür. 3D Viewport'ta modeli iyi görmen, kameranın da aynı yeri gördüğü anlamına gelmez.

- **Numpad 0:** Aktif kamera görünümüne geçmek için yaygın kısayoldur.
- Kamera nesnesini Object Mode'da `G` ve `R` ile konumlandırabilirsin.
- Kameranın çerçevesinde modelin kesilmediğini kontrol et.

## 7. Birlikte uygulayalım: basit ürün görseli oluştur

<div class="practice-panel" markdown="1">

1. Blender 5.2 LTS'yi aç ve yeni bir sahne oluştur.
2. Varsayılan **Cube** nesnesini seç.
3. `S`, ardından `X/Y/Z` eksen kısıtlarını kullanarak kutuyu küçük bir ürün gövdesi hâline getir.
4. Gerekirse **Ctrl+A → Scale** ile ölçeği uygula.
5. **Tab** ile Edit Mode'a geç.
6. Üst yüzü seç ve `I` ile **Inset** oluştur.
7. İç yüzü `E` ile az miktarda aşağı doğru **Extrude** ederek sığ bir oyuk oluştur.
8. Dış kenarların birkaçını seçip `Ctrl+B` ile küçük bir **Bevel** uygula.
9. Object Mode'a dön.
10. **Material Properties** içinde yeni material oluştur; Base Color ve Roughness değerlerini değiştirerek mat bir plastik görünümü hazırla.
11. Sahneye bir **Area Light** ekle ve ürünün ön-üst tarafına yerleştir.
12. İkinci, daha düşük güçlü bir dolgu ışığı ekleyerek karanlık bölgeleri yumuşat.
13. Kamerayı ürünün üç çeyrek açıdan görüneceği şekilde konumlandır; **Numpad 0** ile kamera görünümünü kontrol et.
14. Render ayarlarında okul bilgisayarının kaldırabileceği makul çözünürlüğü seç.
15. **F12** ile tek kare render al.
16. Sonucu incele: model kadrajda mı, ışık yeterli mi, bevel kenarları daha okunur yaptı mı?
17. Projeyi `.blend` olarak kaydet.

</div>

### EEVEE ve Cycles

Blender birden fazla render motoru sunar. **EEVEE**, gerçek zamanlı/raster tabanlı hızlı önizleme ve render için; **Cycles** ise fiziksel ışık taşınımına dayalı path-tracing yaklaşımıyla daha gerçekçi sonuçlar için kullanılabilir. Donanım, sahne karmaşıklığı ve hedef kaliteye göre seçim yapılır. Bu derste temel sahne kurma öğrenildiği için okul bilgisayarında hızlı geri bildirim veren ayar tercih edilir.

## 8. Sık yapılan hatalar ve ders özeti

<div class="mistake-panel" markdown="1">

- Object Mode'da yapılması gereken nesne işlemleriyle Edit Mode'daki mesh düzenlemeyi karıştırmak.
- `G`, `R`, `S` komutlarında yanlış eksende çalışıp sonucu fark etmemek.
- Nesneyi aşırı ölçekleyip Scale değerlerini kontrol etmeden bevel/modifier sonucunu yorumlamak.
- Extrude yaptıktan sonra hareketi iptal ederken üst üste binen geometri oluşturup bunu fark etmemek.
- Çok fazla bevel segmenti veya gereksiz geometri ekleyip modeli ağırlaştırmak.
- Malzemeyi yalnız Base Color sanmak; Roughness/Metallic etkisini göz ardı etmek.
- Sahneye ışık eklemeden veya World ışığını anlamadan “malzeme bozuk” sanmak.
- Viewport'ta güzel görünen açının aktif kamerada da aynı olduğunu varsaymak.
- Render öncesi kamera kadrajını, çözünürlüğü ve render motorunu kontrol etmemek.
- Projeyi `.blend` olarak kaydetmeden yalnız render görseline güvenmek.

</div>

**Ders sonunda:** Blender'ın 3D Viewport, Outliner, Properties ve Timeline bölgelerini; Object Mode ile Edit Mode farkını; G-R-S dönüşümlerini; Extrude, Inset, Bevel ve Loop Cut araçlarının temel görevlerini; Base Color, Roughness ve Metallic kavramlarını; ışık ve aktif kameranın render üzerindeki rolünü açıklayabilmelisin.

<details class="source-note"><summary>Kaynak kontrolü</summary><p>İçerik 21 Ağustos 2026 tarihinde Blender'ın güncel 5.2 LTS indirme sayfası ve resmî 5.2 LTS kullanıcı kılavuzu ile kontrol edilmiştir. Komut adları çeviri farklılıklarına karşı resmî İngilizce adlarıyla da verilmiştir.</p><ul><li><a href="https://www.blender.org/download/">Blender Download — 5.2 LTS</a></li><li><a href="https://docs.blender.org/manual/en/5.2/getting_started/configuration/introduction.html">Configuration and language settings</a></li><li><a href="https://docs.blender.org/manual/en/5.2/modeling/meshes/editing/index.html">Editing Mesh Objects</a></li><li><a href="https://docs.blender.org/manual/en/5.2/modeling/meshes/editing/face/inset_faces.html">Inset Faces</a></li><li><a href="https://docs.blender.org/manual/en/5.2/render/index.html">Rendering</a></li></ul></details>
