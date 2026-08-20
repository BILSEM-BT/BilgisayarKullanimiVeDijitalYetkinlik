# Bilgisayar Kullanımı ve Dijital Yetkinlik

Niyazi Sayın Bilim ve Sanat Merkezi — Bilişim Teknolojileri Dersi

Öğretmen: Ersin ŞANLI

Bu repository, **Bilgisayar Kullanımı ve Dijital Yetkinlik** ders portalının Jekyll/GitHub Pages kaynaklarını içerir.

## Revize v2 yaklaşımı

Müfredat, önceki 73 derslik çok parçalı yapıdan **8 bölüm ve 54 derse** yeniden düzenlenmiştir. Amaç daha az ders ve daha az ana başlıkla, tahtada açılıp doğrudan anlatılabilecek daha güçlü ders içerikleri oluşturmaktır.

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
- **Programlama Yeterlik:** Bölümler 6–8

## Bölümler

1. **Bilgisayar ve Windows Kullanımı** — 7 ders
2. **İnternet, Web, E-Posta ve Bulut** — 8 ders
3. **Office ve Belge Üretimi** — 8 ders
4. **Güvenlik, Dijital Vatandaşlık ve Yapay Zekâ** — 6 ders
5. **Dijital Medya ve İçerik Üretimi** — 6 ders
6. **Yazılım Geliştirme ve Proje Araçları** — 6 ders
7. **Blok Programlama, Robotik ve Elektronik** — 6 ders
8. **3D Tasarım ve Dijital Üretim** — 7 ders

Toplam: **54 ders**

## İlk yayın paketi

Bu paket Bölüm 1'i tam olarak içerir:

- **1-1 — Bilgisayarı Tanı: Donanım, Yazılım ve Temel Kavramlar**
- **1-2 — Windows Masaüstü, Başlat Menüsü ve Görev Çubuğu**
- **1-3 — Klavye Tuşları ve Klavye Kısayolları**
- **1-4 — Fare, Touchpad, Seçim, Kopyalama, Kesme ve Yapıştırma**
- **1-5 — Windows Dosya Gezgini: Dosya ve Klasörlerle Çalışma**
- **1-6 — Windows Ayarları, Uygulamalar ve Güncellemeler**
- **1-7 — Görev Yöneticisi ve Temel Sorun Giderme**

Bölüm 2–8 dersleri `_data/modules.yml` içinde planlanmıştır; içerik paketleri bölüm bölüm eklenecektir.

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
