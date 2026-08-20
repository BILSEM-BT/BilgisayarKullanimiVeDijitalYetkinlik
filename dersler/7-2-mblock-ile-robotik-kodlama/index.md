---
title: mBlock ile Robotik Kodlama
module_id: 43
updated: '2026-08-21'
summary: mBlock 5'in Türkçe web ve masaüstü sürümünde cihaz ekleme, bağlantı, Canlı ve Yükleme modları, sensör-giriş ve aktüatör-çıkış mantığı ile güvenli robotik kodlama akışını öğreniyoruz.
quiz: /uygulamalar/7-2-mblock-ile-robotik-kodlama/
permalink: /dersler/7-2-mblock-ile-robotik-kodlama/
---
<div class="lesson-goals" markdown="1">

**Bu derste ne öğreneceğiz? — Program dili: Türkçe (web + masaüstü mBlock 5)**

Bu derste **mBlock 5** ortamını hem [ide.makeblock.com](https://ide.makeblock.com/) üzerinden web sürümünde hem de Türkçe masaüstü istemcisinde kullanacağız. Makeblock’un güncel yardım sayfalarında web düzenleyicisi için hem `ide.makeblock.com` hem de `ide.mblock.cc` adreslerine rastlanabildiğinden, öğretmenin açtığı güncel resmî sayfadaki arayüz esas alınacaktır; bu iki adres farklı bir programlama mantığı olarak öğretilmeyecektir. mBlock'un Scratch 3 tabanlı blok mantığını robot, micro:bit ve çeşitli donanımlarla birleştirdiğini; bir cihazı projeye ekleme, doğru bağlantıyı seçme, **Canlı (Live)** ve **Yükleme (Upload)** modlarını ayırt etme, sensörlerden veri okuyup motor/LED/ses gibi çıktıları yönetme ve hatayı güvenli biçimde ayıklama adımlarını öğreneceğiz.

</div>

<div class="archive-flow" aria-label="mBlock robotik programlama akışı"><span>Cihazı belirle</span><i>→</i><span>Cihazı ekle</span><i>→</i><span>Bağlantıyı kur</span><i>→</i><span>Modu seç</span><i>→</i><span>Kodu oluştur</span><i>→</i><span>Güvenli test et</span></div>

## 1. mBlock 5 nedir, web ve masaüstü sürümü nasıl kullanılır?

### Blok tabanlı programlama + donanım kontrolü

Makeblock'un resmî belgelerine göre mBlock 5; Scratch 3'ten esinlenen blok tabanlı düzenleyiciyle birlikte farklı donanımların programlanmasını destekleyen bir eğitim platformudur. Desteklenen cihaz ve eklentiye göre metin tabanlı kod görünümü veya Python/Arduino C gibi seçenekler de bulunabilir. **Her cihazın desteklediği dil ve blok kümesi aynı değildir.**

### Web sürümü: ide.makeblock.com

Web sürümünde tarayıcı üzerinden projeye başlanabilir. Fiziksel donanıma bağlanma yöntemi **cihaz, tarayıcı ve mBlock sürümüne göre değişebilir**. Makeblock'un güncel/ürün özel yardım sayfalarında bazı cihazların web bağlantısı için **mLink 2** kullanıldığı anlatılır; mBlock yardım merkezinde ayrıca web için doğrudan bağlantı geliştirmeleri de bulunur. Bu nedenle sınıfta ekranda açılan güncel **Bağlan** yönergesi izlenmelidir.

### Masaüstü sürümü

mBlock 5'in Windows ve macOS masaüstü istemcisi vardır. Donanım derslerinde masaüstü sürümü bağlantı ve sürücü yönetimi açısından daha öngörülebilir olabilir. Web ve masaüstü sürümünde temel kavramlar aynıdır: **Cihazlar, Kuklalar/Sahne, blok alanı, kod alanı, uzantılar ve bağlantı**.

### Türkçe dil desteği

Makeblock'un sürüm geçmişinde mBlock 5 için Türkçe çoklu dil desteği yer alır ve programın dil ayarı bulunur. Bu derste Türkçe arayüz esas alınır. Güncel sürüm veya cihaz eklentisi içinde çevrilmemiş bir etiket görülürse, Türkçe kavramın yanında özgün İngilizce karşılığı da kullanılacaktır.

## 2. Arayüzü tanıyalım: Kukla mı, Cihaz mı?

mBlock yalnız robot programlamak için değildir; sahne üzerinde kuklalarla Scratch benzeri projeler de oluşturabilir. Robotik dersinde en önemli ayrım, **sahne/kukla** ile **fiziksel cihaz** arasındadır.

<div class="app-demo" aria-label="mBlock 5 Türkçe arayüz şeması"><div class="app-demo-titlebar"><b>mBlock 5</b><span>Türkçe arayüz</span></div><div class="app-demo-toolbar"><span>Cihazlar</span><span>Kuklalar</span><span>Uzantılar</span><span>Bağlan</span><span>Canlı / Yükleme</span></div><div class="app-demo-body"><div class="app-demo-sidebar"><span>Olay</span><span>Kontrol</span><span>Algılama</span><span>Operatörler</span><span>Değişkenler</span><span>Cihaza özel bloklar</span></div><div class="app-demo-stage"><div class="archive-files"><div><b>Blok alanı</b><span>Komutları seç</span></div><div><b>Kod alanı</b><span>Blokları sırala</span></div><div><b>Cihaz</b><span>Doğru model seçilmeli</span></div><div><b>Bağlantı</b><span>USB / desteklenen yöntem</span></div></div></div></div></div>

### Önce doğru cihazı seç

**Cihazlar → + Ekle** benzeri akıştan sınıftaki gerçek donanım seçilir. mBot, mBot2/CyberPi, micro:bit veya başka bir desteklenen kart seçildiğinde bloklar değişebilir. Yanlış model seçmek; blokların görünmemesine, bağlantının kurulamamasına veya yüklemenin başarısız olmasına yol açabilir.

### Uzantılar blokları genişletir

Bazı sensörler ve modüller için **Uzantı Merkezi** üzerinden ilgili uzantının eklenmesi gerekir. “Sensör fiziksel olarak takılı, o hâlde blok otomatik görünür” varsayımı her zaman doğru değildir.

## 3. Cihazı güvenli biçimde bağlama

### Bağlantıdan önce üç kontrol

1. **Doğru cihaz:** mBlock'ta gerçek robot/kart modeli seçilmiş mi?
2. **Doğru kablo/bağlantı:** Veri aktarabilen USB kablosu veya cihazın desteklediği bağlantı yöntemi kullanılıyor mu?
3. **Güç:** Robot/kart uygun biçimde açık mı ve güç kaynağı doğru mu?

Ardından **Bağlan (Connect)** komutu kullanılır. Web sürümünde tarayıcı izin penceresi veya mLink gibi yardımcı yazılım adımları çıkabilir.

### Robot hareket edecekse çalışma alanını hazırla

Motor komutunu denemeden önce robotu masa kenarından uzak, kabloların tekerleklere dolanmayacağı açık bir alana koy. İlk testlerde düşük hız ve kısa süre kullan. Öğretmen izin vermeden yüksek akım çeken motorları veya farklı gerilimli modülleri bağlama.

### “Bağlandı” görmek yeterli değildir

Bağlantı kurulduktan sonra küçük ve güvenli bir test yap: LED yakma, kısa ses üretme veya sensör değerini ekranda gösterme gibi. Böylece hem bağlantının hem doğru cihaz profilinin çalıştığı doğrulanır.

## 4. Canlı (Live) ve Yükleme (Upload) modu arasındaki fark

Makeblock'un resmî yardımında bu iki çalışma biçimi açıkça ayrılır.

### Canlı (Live) modu

- Programın etkisini gerçek zamanlı gözlemek ve hata ayıklamak için kullanışlıdır.
- Program çalışırken cihazın mBlock ile bağlantısının sürmesi gerekir.
- Sensör değerlerini denerken ve bir davranışı küçük adımlarla kontrol ederken uygundur.

### Yükleme (Upload) modu

- Program derlenip/dönüştürülüp desteklenen cihaza yüklenir.
- Başarılı yüklemeden sonra uygun cihaz programı bilgisayardan ayrıyken de çalıştırabilir.
- Kullanılabilecek bloklar veya metin dili cihazın yeteneklerine göre Canlı moddan farklı olabilir.

**Önemli:** “Canlı daha iyi, Yükleme daha kötü” diye bir sıralama yoktur. Amaç belirler: hata ayıklama için Canlı; bağımsız çalışan robot için Yükleme modu daha uygun olabilir.

## 5. Robotik düşünme: sensör → karar → aktüatör

Robot programlarının önemli bir bölümü şu modele uyar:

<div class="archive-flow" aria-label="Robotik giriş işlem çıkış modeli"><span>Sensör / Giriş</span><i>→</i><span>Koşul ve işlem</span><i>→</i><span>Motor, LED, ses / Çıkış</span><i>→</i><span>Yeni sensör değeri</span></div>

### Sensör giriş sağlar

Mesafe, çizgi/renk, ışık, düğme, eğim gibi sensörler çevre hakkında veri üretir. Sensör değeri tek başına “karar” değildir; programın bu değeri bir eşikle veya kuralla karşılaştırması gerekir.

### Aktüatör fiziksel çıktı üretir

Motor, servo, LED ve ses birimi gibi bileşenler programın çevrede etkisini oluşturur. Motor yönü/hızı için kullanılan blokların adı seçilen robot modeline göre değişir.

### Örnek algoritma

- Sürekli mesafeyi oku.
- Eğer mesafe belirlenen güvenli sınırın altındaysa dur.
- Değilse yavaşça ileri git.

Burada eşik değeri, kullanılan sensörün birimine ve sınıf ortamına göre deneme yapılarak belirlenmelidir; bütün sensörler aynı aralık ve birimde çalışmaz.

## 6. Bloklardan metin tabanlı koda geçiş ve eklentiler

mBlock 5 bazı cihazlarda blokların karşılığı olan metin tabanlı kodu görüntüleyebilir veya farklı programlama dilleri sunabilir. Makeblock belgelerinde örneğin belirli cihaz ve modlarda **Arduino C**, **Python** veya başka hedef dillere dönüştürme seçenekleri bulunur.

### Neden yararlı?

- Blokta kurduğumuz algoritmanın metin kodunda nasıl ifade edildiğini görürüz.
- Değişken, koşul ve döngü kavramlarının diller arasında ortak olduğunu fark ederiz.
- Ancak “her mBlock projesi tek tıklamayla aynı Python koduna dönüşür” demek doğru değildir; **hedef cihaz ve mod** desteği belirler.

### Eklenti güvenliği

Sınıfta yalnız öğretmenin belirlediği resmî/uygun uzantıları kullan. Rastgele üçüncü taraf eklentiyi eklemek, uyumluluk ve güvenlik sorunu oluşturabilir.

## 7. Birlikte uygulayalım: sensöre tepki veren robot

<div class="practice-panel" markdown="1">

**Bu uygulama sınıftaki mevcut robota göre uyarlanır. Blok adları cihaz modeline göre değişebilir.**

1. mBlock 5'i Türkçe aç. Önce web sürümünde (`ide.makeblock.com`), sonra mümkünse masaüstü istemcisinde arayüzün temel bölümlerini karşılaştır.
2. **Cihazlar → Ekle** üzerinden sınıftaki gerçek robotu/kartı seç.
3. Gerekli sensör uzantısı varsa öğretmenle ekle.
4. USB veya cihazın desteklediği yöntemle bağlantıyı kur.
5. **Canlı** modda yalnız bir sensör değerini ekranda/izleme alanında gözle. Elini sensöre yaklaştırıp uzaklaştır; değerin nasıl değiştiğini not et.
6. Bir koşul oluştur: “değer güvenli eşikten küçükse uyarı ver; değilse normal durum göster.” İlk testte motor yerine LED/ses gibi güvenli çıktı kullan.
7. Koşul doğru çalışıyorsa öğretmen gözetiminde kısa süreli düşük hızlı motor davranışı ekle.
8. Robotu kaldırıp tekerlekleri havada çalıştırmak yerine öğretmenin önerdiği güvenli test yöntemini kullan; kabloları ve masa kenarını kontrol et.
9. Destekleniyorsa **Yükleme** moduna geç ve programı cihaza yükle.
10. Cihazın bilgisayardan ayrıldığında programı çalıştırıp çalıştırmadığını gözle; bunun Canlı/Yükleme farkıyla ilişkisini açıkla.
11. Aynı algoritmayı blok görünümünde ve varsa metin kodu görünümünde karşılaştır.
12. Sonuçları “girdi — koşul — çıktı” tablosuna yaz.

</div>

## 8. Sık yapılan hatalar ve ders özeti

<div class="mistake-panel" markdown="1">

- Gerçek donanımla uyuşmayan cihaz profilini seçmek.
- Web sürümünde bağlantı penceresinin/mLink yönergesinin gerektirdiği adımı atlamak.
- Canlı moddaki programın bağlantı kesildikten sonra da kendiliğinden çalışacağını sanmak.
- Yükleme modunda programın cihaza aktarılmasını beklemeden kabloyu çıkarmak.
- Sensörün ölçü birimini veya gerçek aralığını bilmeden rastgele eşik seçmek.
- Gerekli uzantıyı eklemeden sensör bloklarını aramak.
- Motoru ilk denemede yüksek hızda ve masa kenarında çalıştırmak.
- Her cihazın Python/Arduino C/metin kodu özelliklerinin aynı olduğunu varsaymak.

</div>

**Ders sonunda:** mBlock 5'in web ve masaüstü sürümlerini Türkçe kullanabilmeli; cihaz/kukla ayrımını, cihaz ekleme ve bağlantı akışını açıklayabilmeli; Canlı ve Yükleme modlarını doğru seçebilmeli; sensör → karar → aktüatör modeline göre küçük bir robotik algoritmayı güvenli biçimde test edebilmelisin.

<details class="source-note"><summary>Kaynak kontrolü</summary><p>Ders; Makeblock Help Center'daki mBlock 5, masaüstü kurulum, cihaz programlama, mBot/mBot2 bağlantısı ve Live/Upload açıklamalarıyla karşılaştırılmıştır. Güncel Makeblock yardım sayfalarında web düzenleyicisi için <code>ide.makeblock.com</code> ve <code>ide.mblock.cc</code> adreslerinin ikisi de görülebildiğinden, bunlar ayrı programlar gibi öğretilmemiştir. Makeblock sürüm geçmişinde Türkçe dil desteği bulunur. Web bağlantısı cihaz ve sürüme göre değişebildiği için ders, mLink 2'yi her cihaz için mutlak koşul gibi göstermemekte; güncel bağlantı penceresi ile cihazın resmî yönergesini esas almaktadır.</p></details>
