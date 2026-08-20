# Kaynak Doğrulama Raporu — v10

**Tarih:** 21 Ağustos 2026

Bu sürümde 8-5 ve 8-6 dersleri ile bunlara ait toplam 40 uygulama sorusu, ders metnindeki kavramlarla ve güncel resmî üretici belgeleriyle karşılaştırılmıştır. Sürüme bağlı kesin olmayan sıcaklık/ayar değerleri ezber bilgisi olarak verilmemiş; üretici/yazıcı/filament profiline göre doğrulama ilkesi kullanılmıştır.

## Ders 8-5 — 3D Yazıcı, Slicer ve Baskıya Hazırlık

Kontrol edilen ana bilgiler:

- PrusaSlicer'ın Windows, macOS ve Linux üzerinde sunulması.
- 3D model → slicer → G-code/baskı dosyası iş akışı.
- PrusaSlicer'da STL, 3MF, STEP, OBJ ve AMF içe aktarma desteği.
- 3MF'nin PrusaSlicer proje kaydı için tercih edilen format olması ve proje ayarlarını/model bilgilerini birlikte saklayabilmesi.
- Katman yüksekliğinin baskı süresi ve dikey ayrıntı üzerinde etkisi.
- Perimeter/çevre duvarlarının dayanımdaki rolü.
- Infill'in üst katmanlara iç destek ve mekanik özelliklere katkısı.
- Support yapılarının alttan yeterince desteklenmeyen bölgeler için kullanılması.
- Brim'in ilk katman temas alanını artırması.
- Model yönlendirmenin destek ihtiyacını azaltabilmesi.
- Slice sonrası Preview kontrolünün baskı öncesinde yapılması.
- İlk katman kalibrasyonu ve temiz baskı yüzeyinin önemi.

Resmî kaynaklar:

- https://www.prusa3d.com/page/prusaslicer_424/
- https://help.prusa3d.com/article/download-prusaslicer_2220
- https://help.prusa3d.com/article/first-print-with-prusaslicer_1753
- https://help.prusa3d.com/article/ui-overview_1766
- https://help.prusa3d.com/article/layers-and-perimeters_1748
- https://help.prusa3d.com/article/support-material_1698
- https://help.prusa3d.com/article/supported-file-formats_1772
- https://help.prusa3d.com/article/saving-projects-as-3mf_1773
- https://help.prusa3d.com/article/first-layer-calibration-mini-mini_229122
- https://ultimaker.com/software/ultimaker-cura/

## Ders 8-6 — Blender ile 3D Görselleştirme

Kontrol edilen ana bilgiler:

- 21 Ağustos 2026 itibarıyla Blender 5.2.0 LTS'nin güncel LTS sürümü olarak sunulması ve Temmuz 2028'e kadar LTS desteği.
- Blender'ın 3D Viewport, Outliner, Properties ve Timeline gibi temel arayüz bölümleri.
- Object Mode'un nesne konumu/dönüşü/ölçeği; Edit Mode'un mesh geometrisi üzerinde çalışması.
- Varsayılan Blender keymap'inde Tab ile Edit Mode geçişi; G/R/S ile Move/Rotate/Scale.
- Extrude, Inset Faces, Bevel ve Loop Cut araçlarının temel görevleri.
- F12'nin geçerli kareyi render etmesi ve Numpad 0'ın aktif kamera görünümü için kullanılması.
- EEVEE'nin gerçek zamanlı/raster tabanlı; Cycles'ın fiziksel path-tracing tabanlı render yaklaşımı.
- Malzeme, ışık ve aktif kameranın görselleştirme zincirindeki rolü.

Resmî kaynaklar:

- https://www.blender.org/download/
- https://www.blender.org/download/lts/
- https://docs.blender.org/manual/en/5.2/
- https://docs.blender.org/manual/en/5.2/editors/3dview/modes.html
- https://docs.blender.org/manual/en/5.2/scene_layout/object/editing/transform/introduction.html
- https://docs.blender.org/manual/en/5.2/modeling/meshes/editing/index.html
- https://docs.blender.org/manual/en/5.2/modeling/meshes/editing/face/inset_faces.html
- https://docs.blender.org/manual/en/5.2/interface/keymap/blender_default.html
- https://docs.blender.org/manual/en/5.2/render/render_engines.html
- https://docs.blender.org/manual/en/5.2/render/eevee/index.html
- https://docs.blender.org/manual/en/5.2/render/cycles/index.html

## Soru denetimi

- 8-5: 20 soru — 20/20 ders içeriğiyle eşleşiyor.
- 8-6: 20 soru — 20/20 ders içeriğiyle eşleşiyor.
- Her iki derste her soru 4 benzersiz seçeneğe, tek doğru cevap indeksine ve açıklamaya sahiptir.
- Her derste doğru cevap konumu A/B/C/D = 5/5/5/5 olarak dengelenmiştir.
- Doğrudan sürüme veya donanıma göre değişebilecek değerler, öğrenciyi yanlış yönlendirmemek için genelleştirilmiş veya üretici profiline bağlanmıştır.
