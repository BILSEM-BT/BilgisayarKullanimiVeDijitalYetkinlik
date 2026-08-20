# Kaynak ve Doğrulama Raporu — v8

Güncelleme tarihi: **2026-08-21**

## 1. Bölüm 7 arayüz ve içerik dili

- **7-1 Scratch ile Programlamaya Giriş:** Türkçe web Scratch + Türkçe Scratch masaüstü uygulaması. Kullanıcının verdiği `https://scratch.mit.edu/studios/1611338` adresi bir Scratch stüdyosu olduğundan, dinamik proje listesinden değişmez içerik iddia edilmemiş; stüdyo öğretmen rehberli proje incelemesi için kullanılmıştır.
- **7-2 mBlock ile Robotik Kodlama:** Kullanıcının verdiği `https://ide.makeblock.com/` adresi ile güncel Makeblock yardımında kullanılan `https://ide.mblock.cc/` web adresi birlikte dikkate alınmış; Türkçe mBlock 5 masaüstü istemcisiyle aynı temel çalışma mantığı anlatılmıştır. Türkçe çoklu dil desteği Makeblock sürüm geçmişinden doğrulanmıştır.
- **7-3 Microsoft MakeCode ve micro:bit:** `https://makecode.microbit.org/` Türkçe arayüz. Güncel `pxt-microbit` hedef yapılandırmasında `tr` desteklenen diller arasındadır.
- **7-4 Tinkercad Circuits ile Temel Elektronik:** `https://www.tinkercad.com/circuits` Türkçe kullanım akışı; sürüme göre çevrilmemiş teknik etiket ihtimalinde İngilizce özgün karşılık parantez içinde verilmiştir.
- **7-5 Arduino IDE ve Arduino Programlama:** Türkçe Arduino IDE 2. Güncel Arduino IDE kaynak deposunda `vscode-language-pack-tr` ve `i18n/tr.json` doğrulanmıştır.
- **7-6 Robotik Proje Geliştirme ve Hata Ayıklama:** Türkçe; kart/model bağımsız sistematik proje ve hata ayıklama yaklaşımı.

## 2. Bölüm 7 için kullanılan temel resmî kaynaklar

### Scratch
- Scratch About / dil desteği: https://scratch.mit.edu/help/about/
- Scratch uygulaması: https://scratch.mit.edu/download
- Kullanıcının verdiği Programlamaya Giriş stüdyosu: https://scratch.mit.edu/studios/1611338
- Scratch Foundation başlangıç materyalleri: https://resources.scratch.mit.edu/

Doğrulanan önemli noktalar:
- Scratch çok sayıda dili destekler ve Türkçe kullanılabilir.
- Scratch uygulaması çevrim dışı proje üretiminde kullanılabilir.
- Stüdyo, düzenleyicinin kendisi değil projelerin bir araya getirildiği koleksiyon alanıdır.
- Scratch 3 proje dosyası `.sb3` biçiminde kaydedilebilir.

### Makeblock / mBlock 5
- mBlock 5 Help Center: https://support.makeblock.com/hc/en-us/sections/360001829013-mBlock-5
- Masaüstü kurulum: https://support.makeblock.com/hc/en-us/articles/14779090584599-Install-mBlock-5-on-Windows-and-macOS
- mBot programlama / Live ve Upload: https://support.makeblock.com/hc/en-us/articles/1500003954802-Program-mBot-with-mBlock-5
- mBot2 Rover programlama: https://support.makeblock.com/hc/en-us/articles/24409318533527-Program-mBot2-Rover-with-mBlock-5
- Programlama yazılımları: https://support.makeblock.com/hc/en-us/articles/7048529365271-Programming-Software
- Güncelleme geçmişi / Türkçe dil desteği: https://support.makeblock.com/hc/en-us/articles/14778939402135-mBlock-5-Update-History

Doğrulanan önemli noktalar:
- mBlock 5 web ve masaüstü sürümleri bulunur.
- Live modu bağlantı sürerken gerçek zamanlı çalışma/hata ayıklama içindir.
- Upload modu programı desteklenen cihaza yükler ve cihazın uygun durumda bağımsız çalışmasını sağlar.
- Makeblock’un güncel resmî belgelerinde web düzenleyicisi için hem `ide.makeblock.com` hem `ide.mblock.cc` adresleri görülebildiğinden, öğrenciye bunlar farklı ürünlermiş gibi öğretilmemiştir.
- Web donanım bağlantısı cihaz/sürüm bazında farklılaşabildiği için mLink 2 her cihaz için evrensel zorunluluk olarak yazılmamıştır.
- Türkçe dil desteği Makeblock sürüm geçmişinde yer alır.

### Microsoft MakeCode ve micro:bit
- MakeCode: https://makecode.microbit.org/
- Güncel hedef yapılandırması / `availableLocales`: https://github.com/microsoft/pxt-microbit/blob/master/pxtarget.json
- Simülatör: https://makecode.microbit.org/device/simulator
- USB / `.hex` aktarımı: https://makecode.microbit.org/device/usb
- WebUSB: https://makecode.microbit.org/device/usb/webusb

Doğrulanan önemli noktalar:
- Türkçe (`tr`) desteklenen yerel diller arasındadır.
- Simülatör çoğu micro:bit programını tarayıcıda test etmeye ve girişleri taklit etmeye yardımcı olur.
- Klasik aktarımda `.hex` dosyası `MICROBIT` sürücüsüne kopyalanabilir.
- Uygun tarayıcı/firmware ile WebUSB tek tıklamalı aktarımı destekleyebilir.
- V2'ye özgü yerleşik mikrofon/hoparlör/dokunmatik logo özellikleri V1'e genellenmemiştir.

### Autodesk Tinkercad Circuits
- Circuits: https://www.tinkercad.com/circuits
- Circuits öğrenme: https://www.tinkercad.com/learn/circuits
- Güncel Getting Started Guide: Autodesk/Tinkercad resmî eğitim materyalleri

Doğrulanan önemli noktalar:
- Sanal elektronik bileşenler yerleştirilip kablolanabilir ve simüle edilebilir.
- Arduino/micro:bit ile blok/metin kodu senaryoları desteklenir.
- Şematik görünüm ve simülasyon gerçek devre öncesinde öğrenme/test amacıyla kullanılabilir.
- Autodesk eğitim materyalinde 9 V pil + LED + 1 kΩ dirençli başlangıç seri devresi bulunur.
- Simülasyon, gerçek donanımın veri sayfası ve güvenlik sınırlarının yerine geçirilmemiştir.

### Arduino IDE ve Arduino programlama
- Arduino IDE kaynak deposu: https://github.com/arduino/arduino-ide
- Türkçe çeviri: https://github.com/arduino/arduino-ide/blob/main/i18n/tr.json
- Türkçe dil paketi bağımlılığı: https://github.com/arduino/arduino-ide/blob/main/electron-app/package.json
- Kart ve port seçimi: https://support.arduino.cc/hc/en-us/articles/4406856349970-Select-board-and-port-in-Arduino-IDE
- Eskiz yükleme: https://support.arduino.cc/hc/en-us/articles/4733418441116-Upload-a-sketch-in-Arduino-IDE
- Arduino Language Reference: https://docs.arduino.cc/language-reference/

Doğrulanan önemli noktalar:
- Arduino IDE 2 Türkçe arayüz desteğine sahiptir.
- Kart seçimi derleme/yükleme yapılandırmasını, port ise bağlı gerçek cihazın iletişim yolunu belirtir.
- Veri aktarmayan yalnız-şarj USB kablosu yüklemeyi engelleyebilir.
- `setup()` başlangıç, `loop()` tekrarlı ana çalışma yapısıdır.
- GPIO akım/gerilim sınırları karta göre değişir; bu nedenle derste evrensel tek bir akım değeri verilmemiştir.
- Motor/servo gibi yüklerde uygun sürücü ve güç düzeni gerekliliği vurgulanmıştır.

## 3. Quiz doğrulaması

Bölüm 7 için **6 × 20 = 120 yeni soru** hazırlanmıştır. Yeni soruların her biri bağlı olduğu dersin anlatım içeriğiyle tek tek karşılaştırılmıştır. Özellikle şu yanlış genellemelerden kaçınılmıştır:

- Scratch stüdyosunu Scratch düzenleyicisi gibi tanımlamak,
- mLink 2'yi bütün mBlock web cihazları için değişmez tek yöntem ilan etmek,
- Live ve Upload modlarını birbirine karıştırmak,
- micro:bit V2 özelliklerini V1'e genellemek,
- simülasyonda çalışan devreyi fiziksel olarak otomatik güvenli saymak,
- Arduino IDE 2'de Türkçe desteği yokmuş gibi İngilizce ders hazırlamak,
- bütün Arduino/mikrodenetleyici kartlarına tek bir GPIO akım sınırı vermek,
- motoru doğrudan GPIO'ya bağlamayı normal başlangıç yöntemi olarak öğretmek.

Tüm yayımdaki quizlere ayrıca yapısal doğrulama uygulanmıştır:
- her quizde tam 20 soru,
- her soruda 4 benzersiz seçenek,
- tek doğru cevap (`answer` 0–3),
- her soruda açıklama,
- her quiz içinde benzersiz soru kimliği,
- her quizde A/B/C/D doğru cevap dağılımı 5/5/5/5,
- ders/quiz yolu ve module_id/quiz_id eşleşmesi.

## 4. Portal ve şablon kontrolü

- Ana sayfa kartı `Son Güncelleme Tarihi` alanını gösterir; `Gözden geçirme` etiketi UI'dan kaldırılmıştır.
- Ders sol kartında `overflow:hidden`; yalnız `.lesson-toc-list` alanında `overflow-y:auto` kullanımı korunmuştur.
- Bölüm 7 dersleri modules.yml sırasına göre önceki/sonraki ders gezinmesine otomatik katılır.
- Bölüm 8 planlı bırakılmıştır.

## 5. v8 beklenen yayın durumu

- Toplam plan: **54 ders**
- Yayımdaki ders: **47**
- Yayımdaki quiz: **47**
- Toplam soru: **940**
- Bölüm 7 yeni ders: **6**
- Bölüm 7 yeni soru: **120**

GitHub Pages'ın gerçek Jekyll/Actions derleme sonucu repository'ye yüklendikten sonra ilgili **Actions** çalışmasından ayrıca kontrol edilmelidir.
