# Bilgisayar Kullanımı ve Dijital Yetkinlik

Niyazi Sayın Bilim ve Sanat Merkezi — Bilişim Teknolojileri Dersi

Öğretmen: Ersin ŞANLI

Bu repository, **Bilgisayar Kullanımı ve Dijital Yetkinlik** ders portalının Jekyll/GitHub Pages kaynaklarını içerir.

## Revize v2 yaklaşımı

Müfredat, önceki 73 derslik çok parçalı yapıdan **8 bölüm ve 53 derse** yeniden düzenlenmiştir. Amaç daha az ders ve daha az ana başlıkla, tahtada açılıp doğrudan anlatılabilecek daha güçlü ders içerikleri oluşturmaktır.

Derslerin yeni içerik standardı:

- Konu, günlük kullanım problemi üzerinden başlatılır.
- Gereksiz teknik ayrıntı azaltılır; öğrencinin kullanacağı kavramlar derinleştirilir.
- Her derste az sayıda ana `##` başlık bulunur.
- Ekran ve işlem mantığını anlatan şematik görseller/arayüz örnekleri kullanılabilir.
- “Birlikte Uygulayalım” etkinlikleri öğretmenle adım adım yapılabilecek biçimde hazırlanır.
- Sık yapılan hatalar ve kavram yanılgıları özellikle gösterilir.
- Uygulama sayfasında 20 çoktan seçmeli soru, tek doğru cevap ve açıklama bulunur.

## İki öğrenme yolu

- **Genel Yeterlik:** Bölümler 1–5
- **Programlama Yeterlik:** Bölümler 6–8 (Bölüm 6–7 tam yayımdadır; Bölüm 8 kısmen yayımdadır)

## Bölümler

1. **Bilgisayar ve Windows Kullanımı** — 7 ders
2. **İnternet, Web, E-Posta ve Bulut** — 8 ders
3. **Office ve Belge Üretimi** — 8 ders
4. **Güvenlik, Dijital Vatandaşlık ve Yapay Zekâ** — 6 ders
5. **Dijital Medya ve İçerik Üretimi** — 6 ders
6. **Yazılım Geliştirme ve Proje Araçları** — 6 ders
7. **Blok Programlama, Robotik ve Elektronik** — 6 ders
8. **3D Tasarım ve Dijital Üretim** — 6 ders

Toplam: **53 ders**

## İlk yayın paketi

Bu paket Bölüm 1'i tam olarak içerir:

- **1-1 — Bilgisayarı Tanı: Donanım, Yazılım ve Temel Kavramlar**
- **1-2 — Windows Masaüstü, Başlat Menüsü ve Görev Çubuğu**
- **1-3 — Klavye Tuşları ve Klavye Kısayolları**
- **1-4 — Fare, Touchpad, Seçim, Kopyalama, Kesme ve Yapıştırma**
- **1-5 — Windows Dosya Gezgini: Dosya ve Klasörlerle Çalışma**
- **1-6 — Windows Ayarları, Uygulamalar ve Güncellemeler**
- **1-7 — Görev Yöneticisi ve Temel Sorun Giderme**

Bölüm 1–8 içindeki 53 dersin tamamı yayımdadır. Bölüm 8; 8-1–8-6 olmak üzere 6 canlı dersten oluşur. 8-7 müfredattan çıkarılmıştır.

## Dosya yapısı

```text
_config.yml
_data/
  navigation.yml
  sections.yml
  modules.yml
  quizzes/
_includes/
_layouts/
assets/
  css/style.css
  js/site.js
  js/quiz.js
  images/
dersler/
uygulamalar/
index.md
tum-dersler.md
hakkinda.md
guncelleme-rehberi.md
```

## Görsel tasarım

Portalın mevcut mavi arka planı, beyaz kartları, bölüm akordeonları, tamamlanan derslerin yeşil görünümü, sol “Ders İçeriği” menüsü ve uygulama geri bildirim sistemi korunmuştur.

v2 ile yalnızca ders anlatımını güçlendirmek için yeni görsel sınıflar eklenmiştir:

- Windows masaüstü şeması
- pencere şeması
- klavye tuş/kısayol görselleri
- kopyala-kes-yapıştır akış şeması
- Dosya Gezgini şeması
- Ayarlar şeması
- Görev Yöneticisi şeması
- uygulama, uyarı ve öğretmen notu kutuları

## İlerleme sistemi

Ders yapısı değiştiği için eski 73 derslik ilerleme kimliklerinin yeni derslerle karışmaması amacıyla localStorage anahtarı v2 olarak değiştirilmiştir:

```text
bilsem-dijital-yetkinlik-progress-v2
```

Tamamlanan dersler kart ve “Derse Gir” düğmesinde yeşil görünür.

## GitHub Pages

Repository:

```text
BILSEM-BT/BilgisayarKullanimiVeDijitalYetkinlik
```

Yayın adresi:

```text
https://bilsem-bt.github.io/BilgisayarKullanimiVeDijitalYetkinlik/
```

GitHub Actions workflow dosyası `.github/workflows/pages.yml` altında bulunur.


## Revize v3

Bölüm 1 ve Bölüm 2, daha az ana başlık ve daha ayrıntılı sınıf anlatımı standardına göre yayımlandı. Ders sayfalarında önceki/sonraki ders gezinmesi ve kod tabanlı tamamlanma takibi bulunur.

## Revize v5 — Bölüm 4

Bu paketle **Bölüm 4 — Güvenlik, Dijital Vatandaşlık ve Yapay Zekâ** tamamlanmıştır.

- 4-1 — Parolalar, Passkey ve İki Aşamalı Doğrulama
- 4-2 — Zararlı Yazılım, Phishing ve Dolandırıcılıktan Korunma
- 4-3 — Gizlilik, Site İzinleri ve Dijital Ayak İzi
- 4-4 — Telif Hakkı, Kaynak Gösterme ve Dijital Etik
- 4-5 — Yapay Zekâ ve Üretken Yapay Zekâ Temelleri
- 4-6 — Yapay Zekâyı Etkili, Güvenli ve Doğru Kullanma

Her derste 20 soruluk etkileşimli uygulama bulunur. Bölüm 4 güvenlik ve AI içerikleri NIST, CISA, FIDO Alliance, Creative Commons, T.C. Kültür ve Turizm Bakanlığı, UNESCO ve ilgili güncel üretici rehberleriyle karşılaştırılmıştır.


## Revize v6 — Bölüm 5 ve sol ders menüsü düzeltmesi

- Bölüm 4 dahil tüm ders sayfalarında sol kartın kendi kaydırma çubuğu kaldırıldı.
- Masaüstünde sol kart görünür alana sığmadığında kaydırma yalnızca **Ders İçeriği** listesinin içinde yapılır.
- Mobil görünümde sol kart normal sayfa akışında kalır; uzun Ders İçeriği listesi kendi alanında kaydırılabilir.
- **Bölüm 5 — Dijital Medya ve İçerik Üretimi** içindeki 6 ders ve 120 soruluk uygulama seti yayıma alındı.
- Toplam 54 dersin **35'i yayında** durumundadır.


## Revize v7 — Bölüm 6

- **Bölüm 6 — Yazılım Geliştirme ve Proje Araçları** içindeki 6 ders ve 120 soruluk uygulama seti yayıma alındı.
- 6-1, 6-2, 6-3 ve 6-6 Türkçe program/arayüz; 6-4 ve 6-5 İngilizce program/arayüz etiketleriyle hazırlandı.
- Ana sayfa ders kartlarındaki **Gözden geçirme** alanı kaldırıldı; yerine **Son Güncelleme Tarihi** gösterimi kullanıldı.
- v7 sonunda 54 dersin 41'i yayımdadır.


## Revize v8 — Bölüm 7

Bu paketle **Bölüm 7 — Blok Programlama, Robotik ve Elektronik** tamamlanmıştır.

- 7-1 — Scratch ile Programlamaya Giriş — Türkçe web + Türkçe masaüstü uygulaması; Programlamaya Giriş Scratch stüdyosu inceleme kaynağı
- 7-2 — mBlock ile Robotik Kodlama — Türkçe web + Türkçe masaüstü mBlock 5
- 7-3 — Microsoft MakeCode ve micro:bit — Türkçe web arayüzü
- 7-4 — Tinkercad Circuits ile Temel Elektronik — Türkçe kullanım akışı
- 7-5 — Arduino IDE ve Arduino Programlama — Arduino IDE 2 Türkçe dil desteği doğrulanarak Türkçe arayüz
- 7-6 — Robotik Proje Geliştirme ve Hata Ayıklama — Türkçe

Her derste 20 soruluk etkileşimli uygulama bulunur. Bölüm 7 ile 6 yeni ders ve 120 yeni soru yayıma alınmıştır. Toplam 54 dersin **47'si yayında**, yayımdaki toplam uygulama sorusu **940** durumundadır.

Bölüm 7 içerikleri Scratch, Makeblock, Microsoft MakeCode/micro:bit, Autodesk Tinkercad ve Arduino'nun resmî/güncel kaynaklarıyla karşılaştırılmış; fiziksel elektronik ve robotik konularında simülasyonun gerçek donanım güvenlik sınırlarının yerine geçmediği özellikle vurgulanmıştır.


## Revize v9 — Visual Studio/VS Code Insiders ve Bölüm 8

- 6-1 dersi **Visual Studio 2026 Community Insiders** için yeniden yazıldı; resmî indirme/kurulum, Python development iş yükü, ayrı Python yorumlayıcısı, diğer temel diller/iş yükleri, örnek Python projesi, çalıştırma ve terminal çıktısı işlendi.
- 6-2 dersi **Visual Studio Code Insiders** için yeniden yazıldı; kurulum, arayüz panelleri, çok dilli geliştirme, Python eklentisi/yorumlayıcısı, terminal, çalıştırma-durdurma, debug ve temel kısayollar işlendi.
- 8-1 **Tinkercad ile 3D Tasarım** ve 8-2 **Tinkercad Codeblocks ile Algoritmik 3D Tasarım** Türkçe kullanım akışıyla yayımlandı.
- 8-3 **Onshape ile Parametrik CAD** ve 8-4 **SOLIDWORKS ile 3D Modelleme** İngilizce ders/quiz içeriğiyle yayımlandı.
- 8-7 kaldırıldı. v9 sonunda müfredat **53 ders**, bunun **51'i yayında** ve **2'si planlı** durumdadır.
- v9 sonunda yayımdaki uygulama soru sayısı **1020**'dir.
- Ana sayfa açıklaması **“Bilgisayar Temellerinden Dijital Okuryazarlık”** olarak güncellendi.


## Revize v10 — Bölüm 8 tamamlandı ve terminal görselleri düzenlendi

- 6-1 ve 6-2 derslerindeki terminal çalışma ekranı görselleri, içerik sütununu gereksiz büyütmeyecek şekilde **maksimum 760 px** genişlikte ve mobilde %100 duyarlı gösterilecek biçimde düzenlendi. Kaynak PNG dosyaları da 1000 px genişliğe optimize edildi.
- 8-5 **3D Yazıcı, Slicer ve Baskıya Hazırlık** Türkçe ders içeriği ve 20 soruluk uygulamasıyla yayımlandı. Model dosyası/G-code farkı, PrusaSlicer, yazıcı-filament-baskı profilleri, yönlendirme, katman yüksekliği, perimeter, infill, support, brim, Preview ve güvenlik işlendi.
- 8-6 **Blender ile 3D Görselleştirme** Türkçe ders içeriği ve 20 soruluk uygulamasıyla yayımlandı. Blender 5.2 LTS, 3D Viewport, Outliner, Object/Edit Mode, G-R-S, Extrude, Inset, Bevel, material, ışık, kamera, EEVEE/Cycles ve render akışı işlendi.
- Bölüm 8 artık 8-1–8-6 olmak üzere **6/6 yayında**; portalın tamamı **53/53 ders yayında** durumundadır.
- Toplam uygulama soru sayısı **1060**'tır. Tüm quizlerde 20 soru, dört benzersiz seçenek, tek doğru cevap, açıklama ve A/B/C/D doğru cevap konumu dengesi korunur.
