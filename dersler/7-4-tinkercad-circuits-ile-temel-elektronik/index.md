---
title: Tinkercad Circuits ile Temel Elektronik
module_id: 45
updated: '2026-08-21'
summary: Tinkercad Circuits'in Türkçe kullanımında gerilim, akım, direnç, LED kutupluluğu, seri devre, breadboard bağlantıları ve güvenli simülasyon-test yaklaşımını öğreniyoruz.
quiz: /uygulamalar/7-4-tinkercad-circuits-ile-temel-elektronik/
permalink: /dersler/7-4-tinkercad-circuits-ile-temel-elektronik/
---
<div class="lesson-goals" markdown="1">

**Bu derste ne öğreneceğiz? — Kullanım dili: Türkçe (tinkercad.com/circuits)**

Bu derste [Tinkercad Circuits](https://www.tinkercad.com/circuits) ortamında temel elektronik devreleri **Türkçe kullanım akışıyla** kuracağız. Gerilim, akım ve direnç arasındaki farkı; LED'in neden kutuplu olduğunu; direncin neden gerekli olduğunu; breadboard üzerinde bağlantının nasıl izleneceğini ve **Simülasyonu Başlat** ile fiziksel devre kurmadan önce hataları nasıl arayacağımızı öğreneceğiz. Tinkercad güncellemelerinde bazı etiketlerin çevirisi/konumu değişebileceği için gerekli yerlerde İngilizce karşılık da parantez içinde verilecektir.

</div>

<div class="archive-flow" aria-label="Tinkercad elektronik çalışma akışı"><span>Devre amacını belirle</span><i>→</i><span>Bileşenleri yerleştir</span><i>→</i><span>Bağlantıları kontrol et</span><i>→</i><span>Simülasyonu Başlat</span><i>→</i><span>Ölç / gözle</span><i>→</i><span>Hata varsa düzelt</span></div>

## 1. Tinkercad Circuits nedir ve neden simülasyon kullanırız?

Autodesk'in resmî Tinkercad Circuits rehberi; sanal elektronik bileşenleri yerleştirip kablolamayı, devreyi simüle etmeyi ve Arduino/micro:bit gibi sistemlerle davranış oluşturmayı desteklediğini belirtir.

### Simülasyonun avantajı

- Devre fikrini fiziksel bileşen tüketmeden deneyebiliriz.
- Bağlantıyı kolayca değiştirip karşılaştırabiliriz.
- Bazı ölçüm ve hata durumlarını güvenli sınıf ortamında inceleyebiliriz.
- Arduino devrelerinde blok veya metin koduyla davranış denenebilir.

### Simülasyonun sınırı

Sanal devre **gerçek donanımın bütün fiziksel özelliklerini kusursuz taklit etmez**. Gerçek bileşen toleransı, temas sorunu, ısınma, üretici sınırları ve güç kaynağı davranışı farklı olabilir. Simülatörde çalışan devreyi gerçek hayatta kurmadan önce bileşenlerin veri sayfaları ve öğretmen yönergesi kontrol edilmelidir.

## 2. Circuits çalışma alanını Türkçe açıklamalarla tanıyalım

Bu dersin **anlatım dili Türkçedir**. Tinkercad'in hesap, tarayıcı ve güncel yerelleştirme durumuna göre bazı arayüz etiketleri Türkçe ya da İngilizce görünebilir. Öğrencinin yanlış düğmeye yönlendirilmemesi için temel komutlarda Türkçe açıklamanın yanında resmî İngilizce ad da parantez içinde verilir. Bu derste temel akış şu şekilde ele alınacaktır:

<div class="app-demo" aria-label="Tinkercad Circuits Türkçe açıklamalı arayüz şeması"><div class="app-demo-titlebar"><b>Tinkercad — Devreler (Circuits)</b><span>Devre adı</span></div><div class="app-demo-toolbar"><span>Bileşenler</span><span>Kod</span><span>Simülasyonu Başlat (Start Simulation)</span><span>Şematik görünüm</span></div><div class="app-demo-body"><div class="app-demo-sidebar"><span>Direnç</span><span>LED</span><span>Pil</span><span>Breadboard</span><span>Arduino</span><span>Ölçüm araçları</span></div><div class="app-demo-stage"><div class="archive-files"><div><b>Çalışma alanı</b><span>Bileşenleri yerleştir</span></div><div><b>Kablolar</b><span>Elektriksel bağlantıyı kur</span></div><div><b>Özellikler</b><span>Değerleri ayarla</span></div></div></div></div></div>

### Görsel yakınlık elektriksel bağlantı değildir

İki bileşenin ekranda yan yana durması, elektriksel olarak bağlı oldukları anlamına gelmez. Kablo ucu doğru terminale/pine bağlanmalı veya breadboard üzerindeki aynı iletken gruba yerleştirilmelidir.

## 3. Gerilim, akım ve direnç: üç temel kavram

### Gerilim (V)

İki nokta arasındaki elektriksel potansiyel farkıdır ve **volt (V)** ile ifade edilir. Başlangıç seviyesinde gerilimi, akımı hareket ettiren “itici fark” gibi düşünebiliriz; fakat gerilim ile akım aynı şey değildir.

### Akım (I)

Bir iletkenden geçen elektrik yükünün akış oranıdır ve **amper (A)** ile ifade edilir. Çok yüksek akım bileşenlere zarar verebilir.

### Direnç (R)

Akıma karşı gösterilen elektriksel etkidir ve **ohm (Ω)** ile ifade edilir. Direnç, örneğin LED üzerinden geçen akımı sınırlamak için kullanılabilir.

### Ohm Kanunu

Basit dirençli devrelerde ilişki:

`V = I × R`

Buradan `I = V / R` ve `R = V / I` biçimleri elde edilir. LED gibi doğrusal olmayan bileşenlerde gerilim düşümü bulunduğundan gerçek hesapta LED'in ileri yön gerilimi de dikkate alınır.

## 4. LED kutupluluğu ve akım sınırlama direnci

### LED yönlü bir bileşendir

LED'in **anot** ve **katot** uçları vardır. Yaygın bacaklı LED'lerde uzun bacak çoğunlukla anot (+ yönü), kısa bacak ise katottur; gövdedeki düz kenar da katot tarafını işaretleyebilir. Ancak fiziksel parçada kesilmiş/bükülmüş bacak varsa yalnız uzunluğa güvenmek yerine veri sayfası/işaret kontrolü yapılmalıdır.

### Neden seri direnç gerekir?

Bir LED'i uygun akım sınırlaması olmadan doğrudan güçlü bir kaynağa bağlamak aşırı akıma yol açabilir. Başlangıç devresinde LED ile **seri direnç** kullanılır.

Autodesk'in başlangıç materyallerinde örnek olarak 9 V pil, LED ve **1 kΩ** dirençle seri devre kurulması gösterilir. Bu değer eğitim simülasyonunda güvenli bir başlangıç örneğidir; gerçek devrede kullanılacak değer kaynağa ve LED özelliklerine göre hesaplanmalıdır.

## 5. Seri devre ve kapalı devre mantığı

Akımın dolaşabilmesi için iletken bir yolun **kapalı** olması gerekir. Basit bir seri LED devresi şu sırada düşünülebilir:

<div class="archive-flow" aria-label="Basit seri LED devresi"><span>Pil +</span><i>→</i><span>Direnç</span><i>→</i><span>LED anot</span><i>→</i><span>LED katot</span><i>→</i><span>Pil −</span></div>

### Açık devre

Yolun herhangi bir yerinde bağlantı kesikse akım yolu tamamlanmaz; LED yanmayabilir.

### Ters LED

LED ters bağlandığında başlangıç simülasyonunda ışık vermeyebilir. Gerçek devrede ters gerilim sınırları bileşene göre değişir; “ters bağla, zarar gelmez” varsayımı yapılmamalıdır.

### Kısa devre

Kaynağın uçlarını çok düşük dirençli bir yolla doğrudan birbirine bağlamak **yüksek akım** oluşturabilir ve tehlikelidir. Simülasyon uyarısı görürsen yalnız uyarıyı kapatmak yerine bağlantı nedenini bul.

## 6. Breadboard bağlantı mantığı ve ölçüm

Breadboard lehim yapmadan geçici devre kurmaya yarar. Deliklerin hepsi birbirine bağlı değildir; belirli delik grupları içten iletkendir. Güç raylarının bağlantı düzeni breadboard modeline göre değişebilir ve bazı fiziksel breadboardlarda raylar ortadan bölünmüş olabilir.

### Doğru yöntem

- Bileşeni yerleştirmeden önce hangi deliklerin aynı elektriksel düğüm olduğunu belirle.
- Renkli kablo kullanıyorsan sınıf standardı belirle: örneğin kırmızı besleme, siyah GND. **Renk yalnız düzen kolaylığı sağlar; elektriksel gerçeği kablonun bağlandığı nokta belirler.**
- Multimetre/ölçüm aracı varsa voltaj ve akımı doğru bağlantı biçimiyle ölç. Voltmetre genel olarak iki nokta arasına paralel, ampermetre akım yoluna seri bağlanır.

### Ölçü birimine dikkat

`mA` ile `A`, `kΩ` ile `Ω` aynı büyüklük değildir. Örneğin `1 kΩ = 1000 Ω`.

## 7. Birlikte uygulayalım: 9 V pil + 1 kΩ + LED

<div class="practice-panel" markdown="1">

1. `tinkercad.com/circuits` adresini aç ve **Devreler** çalışma alanına gir.
2. Yeni devre oluştur; adını `LED_SERI_DEVRE` yap.
3. Çalışma alanına **9 V pil**, **LED** ve **1 kΩ direnç** yerleştir.
4. Pilin pozitif ucunu direncin bir ucuna bağla.
5. Direncin diğer ucunu LED'in **anot** tarafına bağla.
6. LED'in **katot** tarafını pilin negatif ucuna bağla.
7. Kablo uçlarının gerçekten terminallere oturduğunu yakınlaştırarak kontrol et.
8. **Simülasyonu Başlat** düğmesine bas ve sonucu gözle.
9. Simülasyonu durdur. LED'i ters çevir, yeniden çalıştır ve farkı gözle; ardından doğru konuma geri getir.
10. Simülasyonu durdur. Bir kabloyu çıkararak açık devre oluştur ve neden LED'in çalışmadığını açıklamaya çalış.
11. Devreyi tekrar doğru hâle getir.
12. Yaklaşık akımı düşün: LED üzerindeki ileri yön geriliminin modele bağlı olduğunu bilerek, direnç akımı sınırladığı için neden 1 kΩ kullanıldığını tartış.
13. Öğretmenle birlikte devrenin **şematik görünümünü** aç ve yerleşim görünümüyle karşılaştır.
14. Fiziksel devre kurulacaksa simülasyondaki sonucu tek başına güvenlik garantisi sayma; bileşen ve güç sınırlarını öğretmenle kontrol et.

</div>

## 8. Sık yapılan hatalar ve ders özeti

<div class="mistake-panel" markdown="1">

- Ekranda temas eden parçaları elektriksel olarak bağlı sanmak.
- LED'in kutupluluğunu kontrol etmemek.
- Akım sınırlama direncini atlamak.
- `1 kΩ` ile `1 Ω` değerlerini karıştırmak.
- Breadboard üzerindeki bütün delikleri birbirine bağlı sanmak.
- Simülasyon açıkken devreyi değiştirip uyarıları göz ardı etmek.
- Kısa devre uyarısını yalnız “program hatası” olarak görmek.
- Simülatörde çalışan her devrenin gerçek hayatta aynı şekilde ve güvenle çalışacağını varsaymak.
- Arduino/micro:bit pinlerine bağlanacak gerçek bileşenlerde kartın gerilim/akım sınırlarını kontrol etmemek.

</div>

**Ders sonunda:** Tinkercad Circuits'te Türkçe kullanım akışıyla devre oluşturabilmeli; gerilim, akım ve direnci ayırabilmeli; LED kutupluluğunu ve seri direnç gereğini açıklayabilmeli; açık/kapalı/kısa devre kavramlarını tanıyabilmeli; simülasyonu güvenli bir ön test olarak kullanabilmelisin.

<details class="source-note"><summary>Kaynak kontrolü</summary><p>İçerik Autodesk'in güncel Tinkercad Circuits sayfası ve Getting Started rehberiyle karşılaştırılmıştır. Resmî kaynak; sanal bileşen yerleştirme-kablolama, Arduino/micro:bit ile kodlama, şematik görünüm ve gerçek bağlantıdan önce simülasyon kullanımını açıklar. Ders anlatımı Türkçedir; arayüzde sürüme/yerelleştirmeye göre değişebilecek komutlarda İngilizce özgün ad da verilmiştir. LED örneğinde 9 V pil + LED + 1 kΩ dirençli seri devre Autodesk eğitim materyaliyle uyumludur. Simülasyon gerçek donanımın güvenlik sınırlarının yerine geçirilmemiştir.</p></details>
