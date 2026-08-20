# Bilgisayar Kullanımı ve Dijital Yetkinlik

**Niyazi Sayın Bilim ve Sanat Merkezi — Bilişim Teknolojileri Dersi**  
**Öğretmen:** Ersin ŞANLI

Bilgisayar kullanımından dijital okuryazarlığa; yazılım geliştirme, robotik, elektronik, 3D tasarım ve dijital üretime kadar uzanan konularda öğrencilerin derslere başlamadan önce gerekli temel bilgi ve kullanım hazırbulunuşluğunu desteklemek amacıyla hazırlanmış web tabanlı eğitim portalıdır.

## 🌐 Yayınlanan Ders Portalı

**Canlı yayın adresi:**  
[https://bilsem-bt.github.io/BilgisayarKullanimiVeDijitalYetkinlik/](https://bilsem-bt.github.io/BilgisayarKullanimiVeDijitalYetkinlik/)

Bu bağlantı, repository içindeki Jekyll dosyalarının **GitHub Pages** üzerinden yayımlanan güncel öğrenci/öğretmen arayüzüdür. Dersler, uygulamalar, ilerleme takibi ve bölüm gezinmesi doğrudan bu adres üzerinden kullanılabilir.

**GitHub repository:**  
`BILSEM-BT/BilgisayarKullanimiVeDijitalYetkinlik`

---

## Projenin Güncel Durumu

| Alan | Durum |
|---|---:|
| Bölüm sayısı | **8** |
| Toplam ders | **53** |
| Yayımdaki ders | **53 / 53** |
| Uygulama sayfası | **53** |
| Ders başına uygulama sorusu | **20** |
| Toplam uygulama sorusu | **1060** |
| Yayın altyapısı | **Jekyll + GitHub Pages** |
| Dil | **Türkçe (`tr-TR`)** |
| Son kapsamlı içerik güncellemesi | **21 Ağustos 2026** |

Portalın mevcut müfredatı tamamen yayımdadır. Her dersin kendi anlatım sayfası ve 20 soruluk etkileşimli uygulaması bulunur.

## Eğitim Yaklaşımı

Portal doğrudan bir uzmanlık eğitimi yerine, öğrencinin derse veya uygulamaya başlamadan önce ihtiyaç duyacağı temel kavramları, arayüzleri ve işlem basamaklarını tanımasını hedefler.

Derslerin genel akışı şu anlayışla hazırlanır:

**Tanı → Ekranda Gör → Birlikte Uygula → Gerçek Örnek Yap → Hataları Fark Et → Pekiştir**

İçeriklerde:

- kavramlar günlük kullanım örnekleriyle açıklanır,
- program ve araçların gerçek kullanım akışları gösterilir,
- gerekli yerlerde Türkçe veya İngilizce arayüz terimleri gerçek programdaki biçimiyle verilir,
- “Birlikte Uygulayalım” etkinlikleriyle işlem basamakları pekiştirilir,
- sık yapılan hatalar ve kavram yanılgıları ayrıca ele alınır,
- her dersin sonunda 20 soruluk uygulama yer alır,
- sürüme bağlı veya değişebilen teknik bilgiler mümkün olduğunca resmî ve güncel kaynaklarla doğrulanır.

## İki Öğrenme Yolu

### 1. Genel Yeterlik — Bölümler 1–5

Bilgisayar ve Windows kullanımı, internet, web, e-posta, bulut, Office, belge üretimi, güvenlik, dijital vatandaşlık, yapay zekâ ve dijital medya araçlarına yönelik temel hazırbulunuşluğu kapsar.

### 2. Programlama Yeterlik — Bölümler 6–8

Yazılım geliştirme ortamları, Git/GitHub, algoritma, blok programlama, robotik, elektronik, Arduino, CAD, 3D baskı ve 3D görselleştirme araçlarına yönelik temel hazırbulunuşluğu kapsar.

## Müfredat

### Bölüm 1 — Bilgisayar ve Windows Kullanımı
**7 ders**

Bilgisayarın gelişimi, donanım ve yazılım, Windows masaüstü, klavye ve fare kullanımı, dosya-klasör yönetimi, temel ayarlar ve sorun giderme.

### Bölüm 2 — İnternet, Web, E-Posta ve Bulut
**8 ders**

İnternet bağlantısı, tarayıcı kullanımı, etkili arama, bilgi doğrulama, güvenli dosya kullanımı, Gmail, Google Drive ve çevrim içi çalışma.

### Bölüm 3 — Office ve Belge Üretimi
**8 ders**

Microsoft Word, Excel, PowerPoint ve PDF araçlarıyla okul ve proje çalışmalarının düzenli ve etkili biçimde hazırlanması.

### Bölüm 4 — Güvenlik, Dijital Vatandaşlık ve Yapay Zekâ
**6 ders**

Parolalar ve passkey, iki aşamalı doğrulama, zararlı yazılım ve phishing, gizlilik, dijital ayak izi, telif, dijital etik ve üretken yapay zekâyı doğru kullanma.

### Bölüm 5 — Dijital Medya ve İçerik Üretimi
**6 ders**

WinRAR/7-Zip, VLC Media Player, ekran görüntüsü ve ekran kaydı, GIMP, Inkscape ve Audacity.

### Bölüm 6 — Yazılım Geliştirme ve Proje Araçları
**6 ders**

Visual Studio 2026 Community Insiders, Visual Studio Code Insiders, algoritma ve diagrams.net, Git/GitHub, GitHub Desktop/GitHub Pages ve Google Colab.

### Bölüm 7 — Blok Programlama, Robotik ve Elektronik
**6 ders**

Scratch, mBlock, Microsoft MakeCode ve micro:bit, Tinkercad Circuits, Arduino IDE ve robotik proje geliştirme/hata ayıklama.

### Bölüm 8 — 3D Tasarım ve Dijital Üretim
**6 ders**

Tinkercad 3D Design, Tinkercad Codeblocks, Onshape, SOLIDWORKS, 3D yazıcı ve slicer kullanımı, Blender ile 3D görselleştirme.

## Ders ve Uygulama Yapısı

Her yayımdaki ders iki temel sayfadan oluşur:

```text
/dersler/...       → konu anlatımı
/uygulamalar/...   → 20 soruluk etkileşimli uygulama
```

Ders sayfalarında:

- önceki ve sonraki ders bağlantıları,
- “Dersi tamamlandı olarak işaretle” işlemi,
- uygulamaya geçiş bağlantısı,
- yalnızca gerektiğinde kendi içinde kaydırılan **Ders İçeriği** menüsü,
- ana anlatım bölümleri,
- uygulama örnekleri,
- sık yapılan hatalar,
- kaynak ve doğrulama notları

bulunur.

## Uygulama ve Soru Sistemi

Portalda **53 uygulama sayfası ve toplam 1060 soru** bulunur.

Her uygulamada:

- 20 çoktan seçmeli soru,
- her soruda 4 benzersiz seçenek,
- tek doğru cevap,
- cevap sonrası açıklama,
- ders içeriğiyle doğrudan ilişki,
- dengeli doğru cevap konumu

kullanılır.

Her 20 soruluk uygulamada doğru cevapların A/B/C/D konumlarına dağılımı **5 / 5 / 5 / 5** olacak şekilde düzenlenmiştir.

## Arayüz ve İlerleme Takibi

Portalın arayüzünde:

- mavi arka plan ve beyaz içerik kartları,
- bölüm akordeonları,
- ders kartları,
- derslerin **Son Güncelleme Tarihi**,
- tamamlanan derslerin görsel olarak işaretlenmesi,
- masaüstü ve mobil uyumlu tasarım,
- ders sayfasında sabit bilgi alanı ve gerektiğinde yalnızca “Ders İçeriği” bölümünde kaydırma

kullanılır.

Öğrencinin tamamladığı dersler tarayıcının `localStorage` alanında saklanır:

```text
bilsem-dijital-yetkinlik-progress-v2
```

Bu kayıt yalnızca kullanılan tarayıcı ve cihaz için geçerlidir.

## Repository Dosya Yapısı

```text
.github/
  workflows/
    pages.yml

_config.yml
_data/
  navigation.yml
  sections.yml
  modules.yml
  quizzes/

_includes/
_layouts/

assets/
  css/
    style.css
  js/
    site.js
    quiz.js
  images/

dersler/
uygulamalar/

index.md
tum-dersler.md
hakkinda.md
guncelleme-rehberi.md
README.md
```

### Önemli dosyalar

- **`_config.yml`** — Jekyll site ayarları, başlık, yayın adresi ve temel yapılandırma.
- **`_data/sections.yml`** — 8 bölümün adları ve açıklamaları.
- **`_data/modules.yml`** — 53 dersin kodu, başlığı, durumu, son güncelleme tarihi ve bağlantıları.
- **`_data/quizzes/`** — derslere ait uygulama soru verileri.
- **`dersler/`** — ders anlatım sayfaları.
- **`uygulamalar/`** — uygulama/quiz sayfaları.
- **`assets/css/style.css`** — portalın görsel tasarımı ve responsive davranışları.
- **`assets/js/site.js`** — ders ilerleme ve genel sayfa davranışları.
- **`assets/js/quiz.js`** — uygulama soru sistemi.
- **`.github/workflows/pages.yml`** — GitHub Pages yayın iş akışı.

## GitHub Pages ile Yayın

Site Jekyll ile hazırlanmıştır ve GitHub Pages üzerinden yayımlanır.

Yayın yapılandırmasının temel değerleri:

```yaml
url: https://bilsem-bt.github.io
baseurl: /BilgisayarKullanimiVeDijitalYetkinlik
lang: tr-TR
timezone: Europe/Istanbul
```

Repository'ye yapılan güncellemeler `.github/workflows/pages.yml` içindeki GitHub Actions iş akışı üzerinden siteye aktarılır.

Canlı portal:

[https://bilsem-bt.github.io/BilgisayarKullanimiVeDijitalYetkinlik/](https://bilsem-bt.github.io/BilgisayarKullanimiVeDijitalYetkinlik/)

## İçerik Güncelliği

Yazılım arayüzleri, çevrim içi hizmetler, güvenlik yöntemleri ve yapay zekâ araçları zaman içinde değişebilir. Bu nedenle:

- derslerde kullanılan sürüme bağlı bilgiler düzenli olarak gözden geçirilmelidir,
- program adları ve arayüz etiketleri güncel sürümle karşılaştırılmalıdır,
- güvenlik, hesap yönetimi ve çevrim içi hizmetlerle ilgili bilgiler mümkün olduğunca resmî kaynaklardan doğrulanmalıdır,
- değişiklik yapılan dersin `updated` değeri `_data/modules.yml` içinde güncellenmelidir.

Ayrıntılı bakım adımları için [`guncelleme-rehberi.md`](guncelleme-rehberi.md) dosyasına bakılabilir.

## Güncel Sürüm Özeti

Bu repository'nin mevcut sürümünde:

- **8 bölümün tamamı yayımdadır.**
- **53 dersin tamamı aktiftir.**
- **53 uygulama ve 1060 soru** bulunmaktadır.
- Bölüm 8, **8-1–8-6** olmak üzere 6 ders olarak tamamlanmıştır; eski 8-7 planı müfredattan çıkarılmıştır.
- 6-1 dersi **Visual Studio 2026 Community Insiders**, 6-2 dersi **Visual Studio Code Insiders** temel alınarak hazırlanmıştır.
- Ana sayfa açıklaması **“Bilgisayar Temellerinden Dijital Okuryazarlık”** olarak kullanılmaktadır.
- Ders kartlarında **Son Güncelleme Tarihi** gösterilir.
- Ders sayfasındaki sol panelin tamamında kaydırma çubuğu kullanılmaz; gerektiğinde yalnızca **Ders İçeriği** listesi kaydırılır.

---

**Niyazi Sayın Bilim ve Sanat Merkezi**  
**Bilişim Teknolojileri Dersi**  
**Bilgisayar Kullanımı ve Dijital Yetkinlik Portalı**
