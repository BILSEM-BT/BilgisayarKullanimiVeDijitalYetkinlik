---
title: Robotik Proje Geliştirme ve Hata Ayıklama
module_id: 47
updated: '2026-08-21'
summary: Robotik bir problemi gereksinimlere ayırma, giriş-işlem-çıkış modeli kurma, devre ve kodu modüllere bölme, güvenli test planı hazırlama ve yazılım-donanım hatalarını sistematik biçimde ayıklamayı öğreniyoruz.
quiz: /uygulamalar/7-6-robotik-proje-gelistirme-ve-hata-ayiklama/
permalink: /dersler/7-6-robotik-proje-gelistirme-ve-hata-ayiklama/
---
<div class="lesson-goals" markdown="1">

**Bu derste ne öğreneceğiz? — Ders dili: Türkçe**

Bu ders Bölüm 7'de öğrendiğimiz Scratch, mBlock, MakeCode, Tinkercad Circuits ve Arduino yaklaşımını bir **robotik proje geliştirme yöntemi** içinde birleştirir. Amaç belirli bir robot kitinin ezber bloklarını öğrenmek değil; problemi tanımlamak, başarı ölçütü yazmak, giriş-işlem-çıkış modelini kurmak, devre/kod parçalarını ayrı ayrı denemek ve hata çıktığında **rastgele değişiklik yapmak yerine kanıt toplayarak** ilerlemektir.

</div>

<div class="archive-flow" aria-label="Robotik proje geliştirme döngüsü"><span>Problemi tanımla</span><i>→</i><span>Gereksinim yaz</span><i>→</i><span>Tasarla</span><i>→</i><span>Küçük parça üret</span><i>→</i><span>Test et</span><i>→</i><span>Hata ayıkla</span><i>→</i><span>İyileştir</span></div>

## 1. Robotik projeye “hangi parçayı alalım?” diye başlanmaz

### Önce problem ve kullanıcı

İyi bir proje şu sorularla başlar:

- Hangi problemi çözmeye çalışıyoruz?
- Kim kullanacak?
- Sistem hangi durumda devreye girecek?
- Ne yaparsa “başarılı” sayacağız?
- Hangi güvenlik ve ortam sınırlarımız var?

Örneğin “engelden kaçan robot yapacağız” yerine daha ölçülebilir tanım:

> Robot, önündeki engeli sensörle algıladığında güvenli mesafede duracak; ardından öğretmenin belirlediği dönüş davranışını uygulayacak ve masa kenarından düşmeyecek biçimde kontrollü test edilecektir.

### Başarı ölçütü ölçülebilir olmalı

“İyi çalışsın” belirsizdir. “10 denemenin en az 9'unda belirlenen mesafeden önce durabilsin” gibi ölçütler test edilebilir. Ölçütün sensör hassasiyeti ve ortam koşullarına uygun olup olmadığı öğretmenle belirlenmelidir.

## 2. Sistemi giriş → işlem → çıkış olarak çiz

Her robotik projeyi önce sadeleştir:

<div class="archive-flow" aria-label="Robotik sistem modeli"><span>Giriş: sensör / düğme</span><i>→</i><span>İşlem: koşul / algoritma</span><i>→</i><span>Çıkış: LED / ses / motor</span><i>→</i><span>Geri bildirim: yeni ölçüm</span></div>

### Giriş

Sistem çevreden hangi bilgiyi alacak? Mesafe, düğme, çizgi, ışık, eğim gibi.

### İşlem

Sensör değerine göre hangi karar verilecek? Eşik, koşul, sayaç, zamanlama veya durum değişimi kullanılabilir.

### Çıkış

Program çevreyi nasıl etkileyecek? LED, ekran, ses, servo, motor vb.

### Geri bildirim

Robot çıktı verdikten sonra yeni sensör değerini tekrar okur. Robotik sistemlerin çoğu bu çevrimi sürekli tekrarlar.

## 3. Projeyi modüllere böl: hepsini aynı anda yapma

Bir proje çalışmıyorsa bütün kabloları ve bütün kodu aynı anda değiştirmek sorunun kaynağını gizler. Bunun yerine **birim/alt sistem testi** yap:

1. Kart açılıyor mu?
2. Basit LED/ekran çıktısı çalışıyor mu?
3. Sensör tek başına anlamlı değer üretiyor mu?
4. Motor/servo sürücüsü öğretmen gözetiminde ayrı testte çalışıyor mu?
5. Koşul mantığı sensör yerine sahte/test değeriyle doğru karar veriyor mu?
6. Parçalar tek tek doğrulanınca birlikte çalıştır.

### Pin ve bağlantı tablosu tut

| Bileşen | Görev | Kart pini/bağlantı | Güç bilgisi | Test sonucu |
|---|---|---|---|---|
| Mesafe sensörü | Giriş | Projeye göre | Veri sayfasına göre | Bekliyor |
| LED | Durum göstergesi | Projeye göre | Dirençli bağlantı | Bekliyor |
| Motor sürücü | Hareket | Projeye göre | Ayrı güç gerekebilir | Bekliyor |

Bu tablo, “hangi kablo nereye gidiyordu?” hatasını azaltır. Gerilim ve pin değerleri **kullanılan gerçek kart/modülün veri sayfasından** alınmalıdır; tek bir Arduino/micro:bit değerini bütün donanıma genelleme.

## 4. Hata türünü doğru sınıflandır

### 1. Derleme / sözdizimi hatası

Kod daha karta gitmeden derlenemez. Eksik parantez, yanlış fonksiyon adı, tanımsız değişken gibi sorunlar olabilir. Hata mesajında genellikle **ilk anlamlı hata** ile başlamak gerekir; sonraki hatalar ilk hatanın sonucu olabilir.

### 2. Yükleme / bağlantı hatası

Kod derlenir ama karta aktarılmaz. Olası nedenler:

- yanlış kart,
- yanlış port,
- veri taşımayan/bozuk USB kablosu,
- eksik sürücü/kart paketi,
- web bağlantı izninin verilmemesi,
- cihazın açık olmaması.

### 3. Mantık hatası

Program çalışır ama yanlış davranır. Örneğin `mesafe < 20` yerine `mesafe > 20` yazılmış olabilir veya değişken hiç sıfırlanmamıştır.

### 4. Donanım / güç hatası

Kod doğru olsa bile yanlış kablo, ortak referans/GND eksikliği, ters kutuplu LED, uygunsuz gerilim, yetersiz güç veya motor sürücüsü sorunu davranışı bozabilir.

## 5. Hata ayıklama yöntemi: tahmin değil kanıt

### Tek değişken ilkesi

Bir testte mümkün olduğunca **tek şeyi değiştir**. Hem kabloyu hem eşik değerini hem de kod bloğunu aynı anda değiştirirsen hangisinin sonucu etkilediğini bilemezsin.

### Gözlenebilir değer üret

- Arduino'da Seri Port Ekranı'na sensör değerini yazdır.
- MakeCode'da LED/simülatör veya seri/console imkânını kullan.
- mBlock'ta Canlı modda sensör değerini izle.
- Tinkercad'de simülasyon ve ölçüm araçlarından yararlan.

Örneğin robot “engel yokken duruyorsa” önce motor kodunu değiştirmek yerine gerçek sensör değerini gözle. Eşik mi yanlış, sensör mü ters yorumlanıyor, yoksa motor komutu mu sorunlu; kanıtla ayır.

### Beklenen / gerçekleşen tablosu

| Test | Beklenen | Gerçekleşen | Sonraki adım |
|---|---|---|---|
| Sensör boş alana bakıyor | Değer artmalı/normal aralık | ... | Sensörü/bağlantıyı kontrol et |
| Engel yaklaştırıldı | Değer değişmeli | ... | Eşik belirle |
| Koşul tetiklendi | LED uyarı vermeli | ... | Mantık bloğunu kontrol et |

## 6. Elektrik ve mekanik güvenliği kod kadar önemse

### Gücü kesmeden bağlantı değiştirme alışkanlığı oluşturma

Özellikle motor, harici güç kaynağı veya daha karmaşık devrelerde bağlantıyı değiştirirken öğretmenin güvenli prosedürünü izle; gerekiyorsa sistemi enerjisiz bırak.

### Motoru doğrudan GPIO'ya bağlamak genellikle doğru değildir

Motorlar bir mikrodenetleyici GPIO pininin güvenle sağlayabileceğinden çok daha yüksek akım isteyebilir ve indüktif yük davranışı gösterir. Uygun **motor sürücü/H-köprü**, güç kaynağı ve koruma düzeni kullanılır. Kesin gerilim/akım sınırları kart ve sürücü modelinin veri sayfasından alınır.

### Ortak GND konusu

Birbirinden ayrı güç kaynaklarıyla çalışan kontrol kartı ve sürücü arasında sinyal taşınıyorsa birçok devrede ortak bir referans/GND gerekir; ancak bağlantı şeması kullanılan modüle göre doğrulanmalıdır. “Her iki eksi ucu her zaman körlemesine bağla” gibi evrensel kural kullanılmamalıdır.

### Mekanik risk

Tekerlekli robotu masa kenarında, pervaneli sistemi korunaksız, servo kolunu parmaklara yakın şekilde test etme. Yazılım hatası beklenmeyen hareket oluşturabilir.

## 7. Birlikte uygulayalım: mini robotik proje test planı

<div class="practice-panel" markdown="1">

**Örnek görev:** Sensör belirlenen durumu algıladığında önce LED/ses ile uyarı veren, ardından öğretmenin uygun gördüğü hareketi yapan sistem.

1. Proje problemini tek cümleyle yaz.
2. En az üç **başarı ölçütü** belirle: doğru algılama, doğru çıktı, güvenli davranış gibi.
3. Giriş → işlem → çıkış şemasını çiz.
4. Kullanılacak bileşenler için pin/bağlantı tablosu oluştur.
5. Tinkercad veya uygun simülatörde mümkün olan kısmı önce dene.
6. Gerçek kartta ilk test olarak yalnız durum LED'ini/ekranı çalıştır.
7. Sensörü bağla; motor olmadan en az 10 sensör ölçümü kaydet.
8. Ölçümlere bakarak öğretmenle anlamlı bir eşik belirle.
9. Koşulu kur ve motor yerine LED/ses çıktısıyla en az 5 kez test et.
10. Hata varsa “beklenen — gerçekleşen — kanıt — sonraki adım” kaydı tut.
11. Güvenli alan hazırlandıktan sonra gerekiyorsa motor sürücüsü ve uygun güç düzeniyle hareket testine geç.
12. Her değişiklikten sonra yalnız bir özelliği yeniden test et.
13. Son testte başarı ölçütlerini tek tek işaretle; çalışmayan ölçütü “başarısız” yazmaktan çekinme.
14. Projenin sonuna **ne öğrendik / bir sonraki sürümde neyi değiştireceğiz?** notu ekle.

</div>

## 8. Sık yapılan hatalar ve ders özeti

<div class="mistake-panel" markdown="1">

- Projeye problem tanımı yapmadan doğrudan parça/kod seçerek başlamak.
- “Çalışıyor” ifadesini ölçülebilir başarı ölçütü sanmak.
- Her şeyi aynı anda bağlayıp hata çıktığında hangi parçanın sorunlu olduğunu bilememek.
- Derleme, yükleme, mantık ve donanım hatalarını birbirine karıştırmak.
- Hata ayıklarken aynı anda beş farklı şeyi değiştirmek.
- Sensör değerini hiç gözlemeden eşik belirlemek.
- Simülasyon sonucunu fiziksel güvenlik garantisi saymak.
- Motor/servo gibi yükleri uygun sürücü ve güç planı olmadan GPIO'ya bağlamak.
- Kart/model veri sayfasını kontrol etmeden başka projedeki gerilim/akım değerlerini kopyalamak.
- Test sonucu başarısızsa veriyi saklamak yerine “çalışmış gibi” raporlamak.

</div>

**Ders sonunda:** Robotik bir problemi ölçülebilir gereksinimlere dönüştürebilmeli; giriş-işlem-çıkış modelini kurabilmeli; projeyi alt sistemlere ayırıp test edebilmeli; hatayı derleme/yükleme/mantık/donanım sınıflarına ayırabilmeli; gözlenebilir verilerle hata ayıklayabilmeli ve elektrik-mekanik güvenliğini projenin ayrılmaz parçası olarak uygulayabilmelisin.

<details class="source-note"><summary>Kaynak kontrolü</summary><p>Ders, önceki Bölüm 7 araçlarının resmî kaynaklarında ortaklaşan test/hata ayıklama ilkeleri ve Arduino'nun kart/port/yükleme sorun giderme belgeleri esas alınarak hazırlanmıştır. Donanım güvenliğinde evrensel tek bir GPIO akım değeri verilmemiştir; gerçek sınırların kart ve modül veri sayfasından kontrol edilmesi gerekir. Motorların uygun sürücü/güç düzeniyle kullanılması gerektiği vurgulanmış, simülasyon fiziksel güvenliğin yerine geçirilmemiştir.</p></details>
