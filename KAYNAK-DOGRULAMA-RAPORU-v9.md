# Kaynak Doğrulama Raporu — v9

Tarih: 2026-08-21

Bu rapor, v9 ile yeni oluşturulan veya önemli ölçüde değiştirilen dersleri belgelemek için hazırlanmıştır. Sürüme bağlı davranışlarda resmî üretici belgeleri temel alınmıştır.

## 6-1 — Visual Studio 2026 Community Insiders
- Insiders indirme: https://visualstudio.microsoft.com/insiders/
- Visual Studio Community: öğrenciler, bireysel geliştiriciler ve uygun eğitim/açık kaynak senaryoları için ücretsiz kullanım kapsamı. Kurumsal kullanım lisans koşullarına tabidir.
- Python desteği: Visual Studio Installer içinde **Python development** iş yükü; ayrıca çalışır bir Python yorumlayıcısı gerekir.
- Visual Studio 2026 dil paketlerinde Türkçe desteklenir.
- Visual Studio 2026 ARM64 üzerinde Python development iş yükü desteklenmez; bu nedenle dersteki kurulum x64 Windows sınıf bilgisayarları hedeflenerek anlatılmıştır.
- Çalıştırma/hata ayıklama: F5, Ctrl+F5, Shift+F5, F9 ve tümleşik Terminal davranışları Microsoft belgeleriyle karşılaştırılmıştır.

## 6-2 — Visual Studio Code Insiders
- Insiders indirme: https://code.visualstudio.com/insiders/
- Insiders, Stable ile yan yana kurulabilen ve yeni değişiklikleri daha erken alan önizleme kanalıdır.
- Python geliştirme için Python yorumlayıcısı ve Microsoft Python extension gerekir.
- Activity Bar, Primary Side Bar, Editor, Panel, Status Bar; Command Palette (Ctrl+Shift+P), Quick Open (Ctrl+P), terminal (Ctrl+`), F5 ve debug adımları VS Code belgeleriyle karşılaştırılmıştır.
- Terminaldeki ön plan Python işlemini kesme için Ctrl+C; debug oturumunu durdurma için Shift+F5 ayrımı ders ve sorularda korunmuştur.

## 8-1 — Tinkercad 3D Design
- Kaynak: https://www.tinkercad.com/3d-design
- Shapes, Workplane, ViewCube, Ruler, Align, Duplicate, Mirror, Solid/Hole/Group ve güncel kısayol çizelgesi Autodesk/Tinkercad kaynaklarıyla kontrol edilmiştir.
- Türkçe anlatım kullanılmış; hesap/sürüm yerelleştirmesinde değişebilecek etiketlerde İngilizce özgün araç adı da korunmuştur.

## 8-2 — Tinkercad Codeblocks
- Kaynak: https://www.tinkercad.com/codeblocks
- Blok tabanlı 3D tasarım, Run, 3D Viewer, sıra, değişken, döngü, Move/Rotate/Scale ve parametrik tekrar desenleri resmî Tinkercad açıklamalarıyla karşılaştırılmıştır.

## 8-3 — Onshape ile Parametrik CAD
- İngilizce içerik hazırlanmıştır.
- Resmî Onshape Help: Sketch Basics, Dimension, Extrude, Fillet, Chamfer, Mate Connectors, Mates, Versions and History.
- Parametric design, Part Studio, sketch constraints/dimensions, Add/Remove Extrude, Through all, feature dependencies, Mates ve named Versions doğru ayrımlarla işlenmiştir.

## 8-4 — SOLIDWORKS ile 3D Modelleme
- İngilizce içerik hazırlanmıştır.
- SOLIDWORKS Design Help 2026: User Interface Overview, Manager Pane, Sketch/Smart Dimension, Extruded Boss/Base, Extruded Cut, Fillet/Chamfer.
- FeatureManager Design Tree, PropertyManager, Part/Sketch, design intent, closed profile, Through All ve feature dependency kavramları kontrol edilmiştir.

## Quiz doğrulama ilkesi
- Değişen 6-1 ve 6-2 ile yeni 8-1–8-4 quizleri ders metinlerindeki bilgi maddelerinden türetilmiştir.
- Her quiz: 20 soru, 4 benzersiz seçenek, tek doğru cevap, açıklama.
- Doğru cevap konumları her quizde A/B/C/D = 5/5/5/5 dağılımındadır.
- Sürüme bağlı komut/kısayol sorularında yukarıdaki resmî kaynaklar esas alınmıştır.
