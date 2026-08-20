---
title: 'Bilgisayarı Tanı: Donanım, Yazılım ve Temel Kavramlar'
module_id: 2
updated: '2026-08-20'
summary: Bilgisayarı teknik ayrıntılara boğulmadan tanıyor; donanım, yazılım, işletim sistemi, uygulama, RAM, depolama ve çevre birimlerinin temel görevlerini günlük örneklerle öğreniyoruz.
quiz: /uygulamalar/1-2-bilgisayari-tani-donanim-yazilim-ve-temel-kavramlar/
permalink: /dersler/1-2-bilgisayari-tani-donanim-yazilim-ve-temel-kavramlar/
---
<div class="lesson-goals" markdown="1">

**Bu derste ne öğreneceğiz?**

Ders sonunda bir bilgisayarın temel olarak ne yaptığını açıklayabilecek; **donanım** ile **yazılımı**, **işletim sistemi** ile **uygulamayı**, **RAM** ile **depolamayı** birbirinden ayırabilecek ve günlük bilgisayar kullanımında gördüğün temel parçaların görevlerini söyleyebileceksin.

Bu dersin amacı bilgisayar mühendisliği ayrıntılarına girmek değil, bilgisayarı **bilinçli kullanacak kadar tanımaktır**.

</div>

## Bilgisayar ne yapar?

Bilgisayar; kendisine verilen **veriyi** belirli kurallara göre işler, sonucu üretir ve gerektiğinde saklar. En temel çalışma modelini dört kelimeyle düşünebiliriz:

<div class="flow-row">
  <div class="flow-box">Giriş<small>Klavye, fare, mikrofon, kamera</small></div>
  <div class="flow-box">İşlem<small>İşlemci ve çalışan yazılımlar</small></div>
  <div class="flow-box">Çıkış<small>Ekran, hoparlör, yazıcı</small></div>
  <div class="flow-box">Depolama<small>SSD, HDD, USB bellek</small></div>
</div>

Bir öğrencinin Word'de ödev yazmasını düşünelim:

1. Klavyeden harfleri girersin.
2. Word ve işletim sistemi bu tuşları işler.
3. Yazdığın metin ekranda görünür.
4. **Kaydet** dediğinde belge depolama birimine yazılır.

Bu örnekte aynı bilgisayar birkaç saniye içinde giriş, işlem, çıkış ve depolama görevlerinin tamamını kullanmıştır.

<div class="board-note" markdown="1">

**Tahtada sor:** “Bir ses kaydı yaparken giriş, işlem, çıkış ve depolama hangi araçlarla gerçekleşir?”

Örnek cevap: Mikrofon giriş yapar; program sesi işler; hoparlör çıkış verir; kayıt dosyası SSD'ye kaydedilir.

</div>

### Veri ile bilgi aynı şey değildir

**Veri**, bilgisayara verilen veya bilgisayarın ürettiği ham değerlerdir. **Bilgi** ise bu verilerin anlamlı biçimde yorumlanmış hâlidir.

Örneğin:

```text
18, 21, 20, 19
```

tek başına sayılardır. “Bunlar sınıfın dört gün boyunca ölçülen sıcaklık değerleridir ve ortalaması 19,5 °C'dir.” dediğimizde veriyi bilgiye dönüştürürüz.

Bilgisayar, anlamı kendi başına “hissetmez”; bizim belirlediğimiz kurallar ve yazılımlar doğrultusunda veriyi işler.

## Bilgisayarın temel parçalarını tanıyalım

Bir masaüstü bilgisayarın kasasını açtığımızda çok sayıda parça görürüz. Günlük kullanıcı için önce şu beş parçanın görevini doğru anlamak yeterlidir.

<div class="compare-grid">
  <div class="compare-card" markdown="1">
  ### İşlemci (CPU)
  Komutları yürütür ve hesaplama yapar. “Bilgisayarın beyni” benzetmesi başlangıç için yararlıdır; ancak bilgisayarın çalışması yalnız işlemciye bağlı değildir.
  </div>
  <div class="compare-card" markdown="1">
  ### RAM
  O anda çalışan programların ve verilerin geçici çalışma alanıdır. Bilgisayar kapandığında RAM'deki normal çalışma verileri kalıcı olarak saklanmaz.
  </div>
  <div class="compare-card" markdown="1">
  ### Depolama
  SSD veya HDD; Windows'u, programları, belgeleri, fotoğrafları ve diğer dosyaları kalıcı olarak saklar.
  </div>
  <div class="compare-card" markdown="1">
  ### Ekran kartı / GPU
  Görüntü işlemlerini hızlandırır. Bazı bilgisayarlarda işlemciye bütünleşik, bazılarında ayrı bir ekran kartı bulunur.
  </div>
</div>

### Anakart ne işe yarar?

**Anakart**, işlemci, RAM, depolama, ekran kartı ve bağlantı noktaları gibi bileşenlerin birbirleriyle iletişim kurmasını sağlayan ana devre kartıdır. Bu derste soket, yonga seti veya güç fazları gibi teknik ayrıntılara girmiyoruz. Kullanıcı açısından bilmen gereken temel fikir şudur:

> Bilgisayar parçaları birbirinden bağımsız çalışmaz; anakart ve işletim sistemi aracılığıyla birlikte çalışırlar.

### Masaüstü bilgisayar ile dizüstü bilgisayar

Masaüstü ve dizüstü bilgisayar aynı temel görevleri yapar. Fark, parçaların fiziksel düzenindedir.

| Masaüstü | Dizüstü |
|---|---|
| Kasa, monitör, klavye ve fare genellikle ayrıdır. | Ekran, klavye, touchpad, pil ve ana bileşenler tek gövdededir. |
| Parça değiştirmek çoğu modelde daha kolaydır. | Taşınabilirlik ön plandadır. |
| Elektrik prizine bağlı kullanım yaygındır. | Pil ile de çalışabilir. |

## Donanım ve yazılımı ayıralım

**Donanım**, dokunabildiğimiz fiziksel parçaların genel adıdır.

Örnekler:

- klavye,
- fare,
- ekran,
- SSD,
- RAM,
- yazıcı,
- kamera.

**Yazılım**, bilgisayara ne yapacağını söyleyen programlar ve dijital talimatlardır.

Örnekler:

- Windows,
- Microsoft Word,
- Google Chrome,
- VLC Media Player,
- Scratch,
- bir oyun.

<div class="concept-panel" markdown="1">

### Aynı görevin donanım ve yazılım tarafı

Bir fotoğraf çekelim.

**Donanım:** Kamera sensörü görüntüyü algılar.  
**Yazılım:** Kamera uygulaması görüntüyü işler ve kaydeder.  
**Depolama:** Fotoğraf dosyası SSD'ye veya telefonda depolama alanına yazılır.

Yani “kamera” dediğimiz deneyim aslında donanım + yazılım + depolamanın birlikte çalışmasıdır.

</div>

## İşletim sistemi ve uygulama nedir?

Bilgisayarı açtığında doğrudan Word başlamaz. Önce **işletim sistemi** çalışır.

Windows 11 bir işletim sistemidir. Temel görevleri arasında:

- programları çalıştırmak,
- dosya ve klasörleri yönetmek,
- klavye, fare, ekran ve yazıcı gibi cihazları kullanmak,
- kullanıcı hesabını ve izinleri yönetmek,
- ağ ve internet bağlantılarını yönetmek,
- ekranda masaüstü ve pencereleri sunmak

bulunur.

**Uygulama** ise belirli bir işi yapmak için kullandığın yazılımdır.

| İş | Uygulama örneği |
|---|---|
| Belge yazmak | Microsoft Word |
| İnternette gezinmek | Edge, Chrome, Firefox |
| Video izlemek | VLC |
| Kod yazmak | Visual Studio Code |
| Görsel düzenlemek | GIMP |

Bir uygulamayı kapattığında Windows çalışmaya devam eder. Fakat işletim sistemi düzgün çalışmıyorsa uygulamaların çoğu da çalışamaz.

### Sürücü (driver) nedir?

Sürücü, işletim sistemi ile belirli bir donanım arasında iletişim kurulmasına yardımcı olan yazılımdır. Örneğin yazıcı sürücüsü, Windows'un yazıcının özelliklerini kullanabilmesine yardımcı olur.

Bu derste sürücü kurulum ayrıntısına girmiyoruz. Şimdilik şu ayrımı bilmek yeterlidir:

```text
Yazıcı = donanım
Yazıcı sürücüsü = iletişimi sağlayan yazılım
Word = belge hazırladığın uygulama
Windows = hepsini yöneten işletim sistemi
```

## Çevre birimlerini doğru sınıflandıralım

Bilgisayara dışarıdan bağlanan veya kullanıcı ile bilgisayar arasındaki iletişimi sağlayan araçlara genel olarak **çevre birimi** denir.

### Giriş birimleri

Bilgisayara veri gönderir:

- klavye,
- fare,
- mikrofon,
- kamera,
- tarayıcı.

### Çıkış birimleri

Bilgisayardan kullanıcıya sonuç verir:

- monitör,
- hoparlör,
- yazıcı,
- projektör.

### Hem giriş hem çıkış yapabilenler

Bazı cihazlar iki yönlü çalışır:

- dokunmatik ekran,
- USB bellek,
- ağ bağlantısı,
- çok işlevli yazıcı.

<div class="board-note" markdown="1">

**Önemli:** Bir cihazı yalnız görünüşüne göre değil, veri akışına göre düşün.

Örneğin dokunmatik ekran görüntüyü bize verir (**çıkış**) ve parmak dokunuşumuzu bilgisayara gönderir (**giriş**).

</div>

## Birlikte uygulayalım: sınıftaki bilgisayarı inceleme

<div class="practice-panel" markdown="1">

**Uygulama 1 — Bilgisayarı parçalara ayırmadan tanı**

Sınıftaki bir bilgisayarı incele ve aşağıdaki tabloyu doldur:

| Gözlem | Cevabım |
|---|---|
| Masaüstü mü, dizüstü mü? | |
| Hangi giriş araçları var? | |
| Hangi çıkış araçları var? | |
| İşletim sistemi hangisi? | |
| Açık olan iki uygulama nedir? | |
| Dosyalar kalıcı olarak nerede tutuluyor? | |

**Uygulama 2 — Görevi çözümle**

“Öğrenci çevrim içi toplantıda öğretmenini dinliyor ve mikrofonla cevap veriyor.”

Bu senaryoda:

1. Giriş birimini belirle.
2. Çıkış birimini belirle.
3. Uygulamanın görevini yaz.
4. İşletim sisteminin hangi işleri yönettiğini söyle.

</div>

### Küçük düşünme sorusu

Bir bilgisayarın işlemcisi çok hızlı olsa ama hiç RAM'i veya depolama birimi olmasa günlük kullanıma uygun bir bilgisayar olur muydu?

Cevap: Hayır. Bilgisayar sistemi parçaların **birlikte** çalışmasıyla anlamlıdır. Tek bir parçayı “bilgisayarın tamamı” gibi düşünmemek gerekir.

## Sık yapılan karışıklıklar ve ders özeti

<div class="mistake-panel" markdown="1">

**Sık yapılan karışıklıklar**

- **RAM ile SSD aynı şey değildir.** RAM geçici çalışma alanı, SSD kalıcı depolamadır.
- **Windows ile Word aynı şey değildir.** Windows işletim sistemi, Word uygulamadır.
- **Kasa ile CPU aynı şey değildir.** CPU kasanın içindeki işlemcidir; kasa tüm bileşenleri barındırır.
- **İnternet bilgisayarın parçası değildir.** Bilgisayar internete ağ bağlantısı üzerinden erişir.
- **Monitör bilgisayarın kendisi değildir.** Monitör çoğunlukla çıkış birimidir.

</div>

Dersin sonunda şu cümleyi rahatlıkla açıklayabilmelisin:

> “Bilgisayar; donanım ve yazılımın birlikte çalıştığı, veriyi alan, işleyen, sonuç üreten ve gerektiğinde saklayan dijital bir sistemdir.”

Bir sonraki derste bu sistemin günlük kullanım yüzü olan **Windows masaüstünü, Başlat menüsünü, görev çubuğunu ve pencereleri** kullanacağız.

<details class="source-note" markdown="1">
<summary>Kaynaklar ve güncellik notu</summary>

Bu ders, kavramların güncel kullanımını doğrulamak için aşağıdaki kaynaklarla karşılaştırılmıştır. Windows arayüzünde güncellemelere göre küçük görsel veya adlandırma farkları olabilir; önemli olan işlemin mantığını öğrenmektir.

- [Microsoft Support — Windows'ı keşfetme ve temel kullanım kaynakları](https://support.microsoft.com/tr-tr/windows)
- [Microsoft Support — Windows Ayarları'nı anlama ve keşfetme](https://support.microsoft.com/tr-tr/accessibility/windows/understand-and-explore-windows-settings)
</details>
