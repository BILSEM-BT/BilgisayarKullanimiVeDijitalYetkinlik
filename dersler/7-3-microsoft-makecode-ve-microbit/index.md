---
title: Microsoft MakeCode ve micro:bit
module_id: 44
updated: '2026-08-21'
summary: Microsoft MakeCode for micro:bit'in Türkçe web arayüzünde bloklar, simülatör, giriş-çıkışlar, değişkenler ve fiziksel karta .hex veya WebUSB ile program aktarma akışını öğreniyoruz.
quiz: /uygulamalar/7-3-microsoft-makecode-ve-microbit/
permalink: /dersler/7-3-microsoft-makecode-ve-microbit/
---
<div class="lesson-goals" markdown="1">

**Bu derste ne öğreneceğiz? — Program dili: Türkçe (makecode.microbit.org)**

Bu derste [Microsoft MakeCode for micro:bit](https://makecode.microbit.org/) web ortamını **Türkçe** kullanacağız. micro:bit'in temel giriş ve çıkışlarını tanıyacak; bloklarla olay, döngü, koşul ve değişken kullanacak; önce **simülatörde** sınayacak, ardından uygun olduğunda programı gerçek micro:bit'e aktaracağız. MakeCode'un güncel micro:bit hedefinde Türkçe (`tr`) desteklenen diller arasındadır.

</div>

<div class="archive-flow" aria-label="MakeCode microbit çalışma akışı"><span>Yeni proje</span><i>→</i><span>Bloklarla kodla</span><i>→</i><span>Simülatörde dene</span><i>→</i><span>Hata varsa düzelt</span><i>→</i><span>İndir / Eşleştir</span><i>→</i><span>Gerçek kartta test et</span></div>

## 1. micro:bit ve MakeCode ne işe yarar?

### micro:bit programlanabilir bir geliştirme kartıdır

micro:bit üzerinde programla kullanabileceğimiz **5×5 LED matrisi**, A ve B düğmeleri, giriş/çıkış pinleri ve çeşitli algılayıcılar bulunur. Donanım özellikleri kart sürümüne göre değişebilir. Özellikle **dahili mikrofon, hoparlör ve dokunmatik logo micro:bit V2 ile ilişkilidir**; V1 kartta bu özelliklerin tümünün bulunduğu varsayılmamalıdır.

### MakeCode tarayıcıdaki programlama ortamıdır

MakeCode, micro:bit programlarını bloklarla oluşturmayı ve aynı projeyi JavaScript/TypeScript veya desteklenen düzenleyici seçeneklerinde metin kodu olarak görmeyi sağlar. Başlangıçta blok görünümü kullanılacaktır.

### Türkçe arayüz

MakeCode'da **Ayarlar → Dil** bölümünden Türkçe seçilebilir. Türkçe çeviriler güncellemelerle küçük farklılıklar gösterebilir. Bu derste `Temel`, `Giriş`, `Müzik`, `LED`, `Radyo`, `Döngüler`, `Mantık`, `Değişkenler` ve `Matematik` gibi Türkçe kavramlar esas alınır.

## 2. MakeCode arayüzü ve simülatör

<div class="app-demo" aria-label="MakeCode microbit Türkçe arayüz şeması"><div class="app-demo-titlebar"><b>Microsoft MakeCode for micro:bit</b><span>Türkçe</span></div><div class="app-demo-toolbar"><span>Proje adı</span><span>Bloklar</span><span>JavaScript/Python seçenekleri sürüme göre</span><span>İndir</span></div><div class="app-demo-body"><div class="app-demo-sidebar"><span>Temel</span><span>Giriş</span><span>Müzik</span><span>LED</span><span>Radyo</span><span>Döngüler</span><span>Mantık</span><span>Değişkenler</span></div><div class="app-demo-stage"><div class="archive-files"><div><b>micro:bit simülatörü</b><span>A/B düğmelerini ve birçok girişi deneyebilir</span></div><div><b>Kod alanı</b><span>Blokları birleştir</span></div></div></div></div></div>

### Simülatör neden önemlidir?

MakeCode'un resmî belgesine göre tarayıcı simülatörü **çoğu micro:bit programını** çalıştırıp düğme ve çeşitli sensör etkileşimlerini taklit edebilir. Böylece fiziksel karta aktarmadan önce algoritmanın temel davranışını kontrol ederiz.

Ancak simülatör gerçek dünyanın tamamı değildir. Fiziksel sensör gürültüsü, kablo teması, güç kaynağı ve harici devre sorunları yalnız gerçek donanımda ortaya çıkabilir. Bu yüzden doğru akış **önce simülatör, sonra kontrollü gerçek kart testi** şeklindedir.

## 3. “Başlangıçta” ve “Sürekli” blokları

### Başlangıçta

`başlangıçta` bloğu program başladığında bir kez yapılacak hazırlıklar içindir. Örneğin:

- `puan` değişkenini `0` yapmak,
- başlangıç simgesini göstermek,
- radyo grubunu ayarlamak.

### Sürekli

`sürekli` bloğu kart açık olduğu sürece tekrar tekrar yapılması gereken davranışlar içindir. Örneğin sensör değerini izleyip LED'lerde göstermeyi sürekli yapmak.

Bir işlemi yalnız bir kez yapmak istiyorsak onu gereksiz yere `sürekli` içine koymak, programın beklenmedik tekrarlarına yol açar.

## 4. Olaylar, girişler ve çıktılar

### Giriş: kartın öğrendiği bilgi

- A veya B düğmesine basılması,
- pin girişleri,
- ivme/hareket bilgisi,
- ışık veya sıcaklıkla ilgili ölçümler,
- kart sürümüne bağlı başka yerleşik girişler.

### Çıkış: kartın gösterdiği/ürettiği sonuç

- 5×5 LED matrisinde simge, sayı veya metin,
- pinlerden uygun elektriksel çıkış,
- V2'de dahili ses çıkışı gibi donanıma bağlı özellikler.

### Olay tabanlı kod

`A düğmesine basıldığında` gibi bir olay, yalnız o olay gerçekleştiğinde içindeki blokları çalıştırır. Her düğmeyi `sürekli` döngü içinde elle kontrol etmek yerine olay bloğunu kullanmak çoğu başlangıç projesinde daha okunaklıdır.

## 5. Değişken, koşul ve küçük bir sayaç

`puan` adlı değişken oluşturalım:

1. `başlangıçta` → `puan değerini 0 yap`
2. `A düğmesine basıldığında` → `puan değerini 1 değiştir`
3. ardından `sayı göster puan`
4. `B düğmesine basıldığında` → `puan değerini 0 yap`

Bu örnekte değişken **durum bilgisini** saklar. Bir sonraki adımda koşul ekleyebiliriz:

- Eğer `puan >= 5` ise gülen yüz göster.
- Değilse puanı göster.

Karşılaştırma bloğunun sonucu `doğru/yanlış` olduğundan **Mantık** içindeki `eğer` bloğuyla kullanılır.

## 6. Programı gerçek micro:bit'e aktarma

### Klasik `.hex` dosyası yöntemi

MakeCode resmî aktarım belgesine göre:

1. micro:bit'i veri aktarabilen USB kablosuyla bilgisayara bağla.
2. **İndir** düğmesine bas ve `.hex` dosyasını al.
3. Bilgisayarda görünen **MICROBIT** sürücüsüne `.hex` dosyasını kopyala.
4. Aktarım tamamlandığında program kartta çalışır.

### WebUSB ile tek tıklamalı aktarım

Desteklenen güncel tarayıcı ve uygun micro:bit firmware'i kullanılıyorsa MakeCode **WebUSB** ile kartı eşleştirip programı daha doğrudan gönderebilir. İlk bağlantıda tarayıcı cihaz seçme izni ister. WebUSB çalışmazsa `.hex` dosyasını `MICROBIT` sürücüsüne kopyalama yöntemi geçerli bir alternatiftir.

### USB kablosu veri taşımalı

Yalnız şarj için üretilmiş bir kablo kartı besleyebilir fakat veri aktarımı yapmayabilir. Kart bilgisayarda görünmüyorsa önce kablo, USB portu ve bağlantıyı kontrol et.

## 7. Birlikte uygulayalım: düğmeli puan sayacı

<div class="practice-panel" markdown="1">

1. `makecode.microbit.org` adresini aç ve **Ayarlar → Dil → Türkçe** seçimini kontrol et.
2. `BILSEM_PUAN` adlı yeni proje oluştur.
3. `puan` adlı değişken oluştur.
4. `başlangıçta` bloğunda `puan`ı `0` yap ve kısa bir başlangıç simgesi göster.
5. `A düğmesine basıldığında` olayında puanı `1` artır ve sayıyı göster.
6. `B düğmesine basıldığında` olayında puanı `0` yap ve sıfırlamayı anlatan bir simge göster.
7. Puan `5` veya daha büyük olduğunda kısa bir başarı simgesi gösterecek koşul ekle.
8. Sol taraftaki simülatörde A ve B düğmelerini kullanarak en az 8 farklı işlem dene.
9. “A'yı üç kez, B'yi bir kez, A'yı iki kez” senaryosunun son değerini çalıştırmadan önce tahmin et; sonra simülatörde doğrula.
10. Öğretmen izin verirse gerçek micro:bit'i USB ile bağla.
11. WebUSB eşleştirme uygunsa **İndir/Eşleştir** akışını kullan; değilse `.hex` dosyasını `MICROBIT` sürücüsüne aktar.
12. Gerçek karttaki davranışı simülatörle karşılaştır. Fark varsa “kod mu, bağlantı mı, kart sürümü mü?” sorularıyla incele.

</div>

## 8. Sık yapılan hatalar ve ders özeti

<div class="mistake-panel" markdown="1">

- `başlangıçta` ile `sürekli` bloklarının görevini karıştırmak.
- Değişkeni başlangıçta belirli bir değere getirmemek.
- Simülatörde çalışan her donanım davranışının fiziksel ortamda birebir aynı olacağını sanmak.
- V2'ye özgü mikrofon/hoparlör/dokunmatik logo gibi özellikleri bütün micro:bit sürümlerinde var kabul etmek.
- `.hex` dosyasını yalnız İndirilenler klasöründe bırakıp karta aktardığını sanmak.
- WebUSB'nin bütün tarayıcı ve sistemlerde aynı şekilde çalışacağını varsaymak.
- Veri taşımayan USB kablosuyla kartın neden görünmediğini yalnız koda bağlamak.
- Fiziksel pinlere gerilim/harici devre bağlarken kartın teknik sınırlarını dikkate almamak.

</div>

**Ders sonunda:** MakeCode'u Türkçe arayüzde açabilmeli; micro:bit'in temel giriş/çıkışlarını ve kart sürümü farklarını bilerek kullanabilmeli; başlangıçta, sürekli, olay, değişken ve koşul bloklarıyla küçük program yazabilmeli; simülatörde test edip `.hex` veya uygun olduğunda WebUSB yoluyla gerçek karta aktarabilmelisin.

<details class="source-note"><summary>Kaynak kontrolü</summary><p>Ders, Microsoft MakeCode for micro:bit'in güncel hedef yapılandırması ve resmî simülatör/USB/WebUSB belgeleriyle kontrol edilmiştir. MakeCode micro:bit hedefinde Türkçe <code>tr</code> desteklenen diller arasındadır. Resmî aktarım belgesinde <code>.hex</code> dosyasının <code>MICROBIT</code> sürücüsüne kopyalanması ve desteklenen tarayıcılarda WebUSB kullanımı açıklanır. V2'ye özgü donanım özellikleri bütün kartlara genellenmemiştir.</p></details>
