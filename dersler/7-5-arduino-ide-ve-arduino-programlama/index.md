---
title: Arduino IDE ve Arduino Programlama
module_id: 46
updated: '2026-08-21'
summary: Güncel Arduino IDE 2'nin doğrulanmış Türkçe arayüzünde eskiz yapısı, kart/port seçimi, Doğrula ve Yükle, dijital giriş-çıkış, Seri Port Ekranı (Serial Monitor) ve güvenli donanım programlama akışını öğreniyoruz.
quiz: /uygulamalar/7-5-arduino-ide-ve-arduino-programlama/
permalink: /dersler/7-5-arduino-ide-ve-arduino-programlama/
---
<div class="lesson-goals" markdown="1">

**Bu derste ne öğreneceğiz? — Program dili: Türkçe Arduino IDE 2**

Arduino IDE'nin güncel kaynak deposunda **Türkçe dil paketi ve Türkçe arayüz çeviri dosyası** bulunduğu doğrulandığı için bu ders Türkçe arayüz üzerinden hazırlanmıştır. Arduino'da program dosyasına **eskiz (sketch)** denir. `setup()` ve `loop()` yapısını, kart ve port farkını, **Doğrula**, **Yükle**, **Kart Yöneticisi** ve seri haberleşme araçlarını öğrenecek; önce kart üzerindeki güvenli bir LED örneğiyle temel dijital çıkışı test edeceğiz.

</div>

<div class="archive-flow" aria-label="Arduino IDE programlama akışı"><span>Eskizi yaz</span><i>→</i><span>Kartı seç</span><i>→</i><span>Doğrula/Derle</span><i>→</i><span>Portu seç</span><i>→</i><span>Yükle</span><i>→</i><span>Seri çıktı / donanımla test et</span></div>

## 1. Arduino IDE nedir ve Türkçe desteği var mı?

### Arduino IDE 2

Arduino IDE, Arduino kartları için program yazma, derleme ve karta yükleme ortamıdır. Arduino'nun destek sayfasında **IDE 2 aktif geliştirilen/önerilen masaüstü sürüm ailesi** olarak ele alınır; eski 1.8.x sürümü “legacy” çizgisindedir.

### Türkçe dil desteği doğrulandı

Arduino IDE'nin güncel açık kaynak deposunda `vscode-language-pack-tr` dil paketi ve `i18n/tr.json` Türkçe çeviri dosyası bulunur. Güncel çeviri dosyasında örneğin:

- **Kart Yöneticisi**
- **Başka Kart ve Port Seç**
- **Yükle**
- **Doğrula** / **Doğrula/Derle**
- **Eskiz Defteri**
- **Yeni Eskiz**

ifadeleri yer alır. Bu nedenle ders Türkçe hazırlanmıştır. Arduino kodunun C/C++ tabanlı anahtar sözcükleri (`void`, `if`, `for` gibi) ise programlama dilinin parçasıdır; arayüz Türkçe olsa da kod sözcükleri Türkçeleşmez.

## 2. Arduino IDE 2 arayüzünü tanıyalım

<div class="app-demo" aria-label="Arduino IDE 2 Türkçe arayüz şeması"><div class="app-demo-titlebar"><b>Arduino IDE 2</b><span>Eskiz adı</span></div><div class="app-demo-toolbar"><span>Doğrula</span><span>Yükle</span><span>Kart / Port seçici</span><span>Seri Port Ekranı</span></div><div class="app-demo-body"><div class="app-demo-sidebar"><span>Eskiz Defteri</span><span>Kart Yöneticisi</span><span>Kütüphane Yöneticisi</span><span>Hata Ayıklama (desteklenen kartlarda)</span></div><div class="app-demo-stage"><div class="archive-files"><div><b>Kod düzenleyici</b><span>setup() ve loop()</span></div><div><b>Çıktı alanı</b><span>Derleme/yükleme mesajları</span></div><div><b>Seri Port Ekranı</b><span>Programdan gelen metin/veri</span></div></div></div></div></div>

### Doğrula ile Yükle aynı değildir

- **Doğrula (Verify):** Kodu seçilen kart için derlemeye çalışır; sözdizimi/derleme sorunlarını bulabilir. Fiziksel karta program göndermek zorunda değildir.
- **Yükle (Upload):** Kodu derler ve uygun bağlantıyla seçilen karta aktarır.

Kodun başarıyla derlenmesi, devrenin fiziksel olarak doğru kurulduğunu kanıtlamaz.

## 3. Kart ve Port seçimi neden iki ayrı bilgidir?

Arduino'nun resmî yardımına göre:

### Kart seçimi

IDE'ye **hangi kart için derleme yapılacağını ve yükleme sırasında hangi protokol/yapılandırmanın kullanılacağını** söyler. Örneğin Arduino Uno ile başka bir kart aynı ayarlara sahip olmak zorunda değildir.

### Port seçimi

Bilgisayara bağlı gerçek cihazın iletişim yoludur. Windows'ta örneğin `COM3`, Linux/macOS'ta farklı seri aygıt adları görülebilir. Kart türünü doğru seçip yanlış portu seçersen başka aygıta yönelmiş olabilirsin veya yükleme başarısız olur.

### Kart görünmüyorsa

- Veri aktarabilen USB kablosunu kontrol et.
- Başka USB portu dene.
- Kartın güç aldığını gözle.
- **Kart Yöneticisi** içinde gerekli kart paketinin kurulu olup olmadığını kontrol et.
- İşletim sistemi sürücüsü gerekiyorsa kartın üretici yönergesine göre hareket et.

Arduino'nun yükleme rehberi, **yalnız şarj kablosunun veri aktarımı için yeterli olmadığını** özellikle belirtir.

## 4. Arduino eskizinin iki temel fonksiyonu: setup() ve loop()

Yeni bir eskizde sık görülen yapı:

```cpp
void setup() {
  // Bir kez yapılacak başlangıç ayarları
}

void loop() {
  // Tekrar tekrar çalışacak ana program
}
```

### `setup()`

Kart açıldığında veya sıfırlandığında başlangıç ayarları için çalışır. Pin yönü tanımlamak veya seri haberleşmeyi başlatmak gibi işlemler burada yapılır.

### `loop()`

`setup()` tamamlandıktan sonra tekrar tekrar çalışır. Sensör oku → karar ver → çıkış üret gibi robotik döngüler burada kurulabilir.

Fonksiyon adları ve süslü parantezler programlama sözdiziminin parçasıdır; `Setup` veya `LOOP` yazmak aynı şey değildir.

## 5. Dijital çıkış: güvenli Blink mantığı

Bir pini çıkış yapmak ve seviyesini değiştirmek için temel işlevler:

- `pinMode(pin, OUTPUT)` — pinin çıkış olarak kullanılacağını belirtir.
- `digitalWrite(pin, HIGH)` — dijital çıkışı yüksek seviyeye getirir.
- `digitalWrite(pin, LOW)` — dijital çıkışı düşük seviyeye getirir.
- `delay(ms)` — belirtilen milisaniye kadar program akışını bekletir.

Birçok Arduino kartı için **yerleşik LED** örneğinde `LED_BUILTIN` sabiti kullanmak, kart modeline göre sabit pin numarası varsaymaktan daha taşınabilir bir yaklaşımdır:

```cpp
void setup() {
  pinMode(LED_BUILTIN, OUTPUT);
}

void loop() {
  digitalWrite(LED_BUILTIN, HIGH);
  delay(500);
  digitalWrite(LED_BUILTIN, LOW);
  delay(500);
}
```

`500 ms = 0,5 saniye` olduğundan bu örnekte LED yaklaşık yarım saniye açık, yarım saniye kapalı kalır.

## 6. Seri Port Ekranı ile programı gözlemek

Seri haberleşme, kartın bilgisayara metin/sayı göndermesini sağlayarak hata ayıklamada çok yararlıdır.

```cpp
void setup() {
  Serial.begin(9600);
}

void loop() {
  Serial.println("Merhaba BILSEM");
  delay(1000);
}
```

### Baud hızı eşleşmeli

`Serial.begin(9600)` ile program 9600 baud kullanıyorsa Seri Port Ekranı içindeki hız ayarı da aynı olmalıdır. Hızlar uyuşmadığında okunamayan/anlamsız karakterler görülebilir.

### Seri çıktı “program doğru” demek değildir

Seri Port Ekranı, programın hangi değeri gördüğünü anlamaya yardım eder. Örneğin sensör değerini yazdırıp eşik kararının doğru yerde olup olmadığını inceleyebiliriz. Bu bir **gözlem aracı**dır; tek başına bütün donanımın güvenli olduğunu kanıtlamaz.

## 7. Birlikte uygulayalım: yerleşik LED'i yakıp söndür

<div class="practice-panel" markdown="1">

1. Arduino IDE 2'yi aç ve arayüz dilinin **Türkçe** olduğunu kontrol et.
2. Kartı veri aktarabilen USB kablosuyla bilgisayara bağla.
3. Kart seçicisinden gerçek kart modelini seç. Otomatik tanınmıyorsa **Başka Kart ve Port Seç** akışını kullan.
4. Doğru portu seç.
5. Yeni eskize yukarıdaki `LED_BUILTIN` Blink kodunu yaz.
6. **Doğrula** komutunu çalıştır. Hata varsa ilk hata mesajından başlayarak satırı kontrol et.
7. Derleme başarılıysa **Yükle** komutunu çalıştır ve yüklemenin tamamlanmasını bekle.
8. Yerleşik LED'in yaklaşık 0,5 saniyelik aralıklarla değiştiğini gözle.
9. İki `delay(500)` değerini `delay(1000)` yap, tekrar Doğrula ve Yükle. Davranış farkını tahmin edip doğrula.
10. Yeni bir eskizde `Serial.begin(9600)` ve `Serial.println(...)` ile saniyede bir mesaj gönder.
11. **Seri Port Ekranı**nı aç; baud hızını programla eşleştir ve mesajları gözle.
12. Çalışmıyorsa sırayla **kod → kart → port → kablo → yükleme mesajı → donanım** kontrol listesi uygula.

**Güvenlik:** Harici motor, servo, röle veya yüksek akım isteyen yükleri rastgele GPIO pinine doğrudan bağlama. İzin verilen pin akımı ve gerilim kart modeline göre değişir; kartın veri sayfasına bak. Motor gibi yüklerde uygun sürücü ve güç düzeni gerekir.

</div>

## 8. Sık yapılan hatalar ve ders özeti

<div class="mistake-panel" markdown="1">

- Arduino IDE arayüzü Türkçe olduğu için C/C++ kod sözcüklerinin de Türkçe yazılacağını sanmak.
- Kart türü ile portu aynı kavram sanmak.
- Kart seçmeden derleme yapmaya çalışıp “Missing FQBN” benzeri kart seçimi hatası almak.
- Yalnız şarj kablosuyla yükleme yapmaya çalışmak.
- `setup()` ve `loop()` görevlerini karıştırmak.
- `OUTPUT`, `HIGH`, `LOW` gibi sabitlerin büyük/küçük harfini değiştirmek.
- `delay(1000)` değerini 1000 saniye sanmak; birim milisaniyedir.
- Seri Port Ekranı baud hızı ile `Serial.begin(...)` değerini farklı ayarlamak.
- Motor/servo gibi yüksek akım isteyen yükleri kartın GPIO pinine doğrudan bağlamak.
- Kodun derlenmesini devrenin elektriksel olarak güvenli olduğunun kanıtı sanmak.

</div>

**Ders sonunda:** Arduino IDE 2'nin Türkçe dil desteğini kullanabilmeli; eskiz, kart ve port kavramlarını ayırabilmeli; `setup()`/`loop()` yapısını açıklayabilmeli; `pinMode`, `digitalWrite`, `delay` ile yerleşik LED örneğini çalıştırabilmeli; Seri Port Ekranı ile temel çıktı gözleyebilmeli ve yükleme sorununu sistematik olarak arayabilmelisin.

<details class="source-note"><summary>Kaynak kontrolü</summary><p>Arduino IDE'nin güncel resmî GitHub deposunda Türkçe dil paketi (<code>vscode-language-pack-tr</code>) ve <code>i18n/tr.json</code> çeviri dosyası doğrulanmıştır; bu nedenle ders Türkçe IDE 2'ye göre hazırlanmıştır. Kart/port ayrımı ve yükleme adımları Arduino Help Center'ın güncel belgeleriyle; temel fonksiyon kavramları Arduino Language Reference ile karşılaştırılmıştır. GPIO akım sınırları karttan karta değişebildiği için tek bir evrensel sayı verilmemiş, motor gibi yüklerde üretici veri sayfası ve uygun sürücü kullanımı vurgulanmıştır.</p></details>
