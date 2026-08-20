---
title: 'Windows Dosya Gezgini: Dosya ve Klasörlerle Çalışma'
module_id: 6
updated: '2026-08-20'
summary: Dosya ile klasörün farkını netleştiriyor; Windows Dosya Gezgini'nde klasör oluşturma, yeniden adlandırma, kopyalama, taşıma, silme, geri yükleme, arama ve düzenli proje klasörü
  kurmayı uyguluyoruz.
quiz: /uygulamalar/1-6-windows-dosya-gezgini-dosya-ve-klasorlerle-calisma/
permalink: /dersler/1-6-windows-dosya-gezgini-dosya-ve-klasorlerle-calisma/
---
<div class="lesson-goals" markdown="1">

**Bu derste ne öğreneceğiz?**

Windows **Dosya Gezgini** üzerinden bilgisayarındaki dosya ve klasörleri bulmayı, açmayı, oluşturmayı, yeniden adlandırmayı, kopyalamayı, taşımayı, silmeyi ve aramayı öğreneceğiz. Özellikle **dosya nedir, klasör nedir, aralarındaki fark nedir?** sorusunu günlük örneklerle netleştireceğiz.

Bu ders günlük bilgisayar kullanımının en önemli derslerinden biridir. Çünkü belge, fotoğraf, video, proje veya kod dosyasını nerede sakladığını bilmiyorsan, o dosyayı üretmiş olman tek başına yeterli değildir.

</div>

## Dosya ve klasör nedir?

### Dosya

**Dosya**, bilgisayarda saklanan belirli bir içeriğin dijital kaydıdır.

Örnekler:

```text
proje.docx
butce.xlsx
sunum.pptx
rapor.pdf
fotograf.jpg
video.mp4
notlar.txt
```

Her dosyanın genellikle:

- bir adı,
- bir türü/uzantısı,
- bir konumu,
- bir boyutu,
- oluşturulma/değiştirilme bilgisi

vardır.

### Klasör

**Klasör**, dosyaları ve başka klasörleri düzenlemek için kullanılan kapsayıcıdır.

Gerçek hayatta:

```text
Dolap
└── Fen Projesi klasörü
    ├── Rapor
    ├── Fotoğraflar
    └── Sunum
```

Bilgisayarda da aynı mantığı kullanabiliriz:

```text
Fen-Projesi/
├── rapor.docx
├── sunum.pptx
└── fotograflar/
    ├── deney1.jpg
    └── deney2.jpg
```

<div class="compare-grid">
  <div class="compare-card" markdown="1">
  ### Dosya
  İçeriğin kendisidir.

  Örnek: `rapor.docx`
  </div>
  <div class="compare-card" markdown="1">
  ### Klasör
  Dosyaları ve alt klasörleri düzenler.

  Örnek: `BilimFuari/`
  </div>
</div>

<div class="board-note" markdown="1">

**Tahtada sor:** “Bir okul çantasında defterler dosya ise çanta neye benzer?”

Beklenen cevap: Klasöre. Bu benzetme tam teknik karşılık değildir ama başlangıç için dosya–klasör farkını anlamayı kolaylaştırır.

</div>

### Dosya uzantısı ne demektir?

Dosya adının sonundaki `.docx`, `.pdf`, `.jpg` gibi bölüm **uzantı** olarak adlandırılır. Uzantı dosyanın türü hakkında ipucu verir.

Örnek:

| Dosya | Tür |
|---|---|
| `odev.docx` | Word belgesi |
| `tablo.xlsx` | Excel çalışma kitabı |
| `sunum.pptx` | PowerPoint sunumu |
| `rapor.pdf` | PDF |
| `foto.jpg` | Görsel |

Windows bazı ayarlarda bilinen dosya uzantılarını gizleyebilir. Dosya adının sonunu değiştirmek, dosyanın gerçek içeriğini başka türe dönüştürmez. Örneğin `foto.jpg` dosyasının adını `foto.pdf` yapmak onu gerçek bir PDF'ye dönüştürmez.



### Dosya uzantılarını gösterme ve gizleme

Windows 11'de dosyanın gerçek uzantısını görmek için **Dosya Gezgini > Görünüm > Göster > Dosya adı uzantıları** seçeneğini açabilirsin. Bu ayar açık olduğunda `rapor.docx`, `foto.jpg`, `program.exe` gibi gerçek son ekler görünür. Özellikle güvenli dosya kullanımı için uzantıları görünür tutmak yararlıdır.

<div class="visual-panel" markdown="1">

<p class="visual-title">Görünüm > Göster menüsü — şematik anlatım</p>

```text
Görünüm
└── Göster
    ├── Gezinti bölmesi
    ├── Öğe onay kutuları
    ├── Dosya adı uzantıları   [✓]
    └── Gizli öğeler           [ ]
```

Bu gösterim gerçek ekran görüntüsünün yerine geçen öğretim şemasıdır; Windows güncellemelerine göre menü görünümü küçük farklılık gösterebilir.

</div>

Uzantı görünürken **F2** veya **Yeniden adlandır** ile dosya adını ve teknik olarak uzantısını değiştirebilirsin. Fakat uzantıyı elle değiştirmek dosya biçimini dönüştürmez. `foto.jpg` adını `foto.pdf` yapmak, görseli gerçek bir PDF dosyasına çevirmiş olmaz ve dosyanın açılmasını bozabilir. Windows uzantıyı değiştirirken uyarı gösterebilir; anlamadan onaylama.

### Gizli dosya ve klasörleri gösterme

Windows 11'de **Dosya Gezgini > Görünüm > Göster > Gizli öğeler** seçeneği açıldığında gizli olarak işaretlenmiş dosya ve klasörler görünür. Aynı seçeneği kapattığında tekrar gizlenirler.

<div class="board-note" markdown="1">

**Önemli:** “Gizli” özelliği bir güvenlik veya şifreleme yöntemi değildir. Bir öğeyi yalnızca normal görünümden saklar. Gizli öğeleri rastgele silmek de doğru değildir; uygulamalar veya Windows bazı dosyaları çalışma amacıyla gizli tutabilir.

</div>

**Tahtada uygulama:** Öğretmen test klasöründe bir `.txt` dosyası oluştursun; uzantıları açıp kapatarak farkı göstersin. Ardından yalnızca eğitim için oluşturulmuş bir test dosyasını **Özellikler > Gizli** ile işaretleyip “Gizli öğeler” seçeneğinin etkisini göstersin. Sistem klasörleri üzerinde değişiklik yapılmasın.


## Dosya Gezgini'ni tanıyalım

Dosya Gezgini'ni açmanın yollarından biri:

<span class="keycap">Windows</span> + <span class="keycap">E</span>

Microsoft, Dosya Gezgini'ni bilgisayarda ve uygun bulut konumlarında dosya/klasörleri bulma, açma, düzenleme ve yönetme aracı olarak tanımlar.

<div class="explorer-demo" aria-label="Dosya Gezgini şematik görünümü">
  <div class="explorer-side">
    <div class="active">Giriş</div>
    <div>Masaüstü</div>
    <div>Belgeler</div>
    <div>İndirilenler</div>
    <div>Resimler</div>
    <div>Bu Bilgisayar</div>
  </div>
  <div class="explorer-main">
    <div class="explorer-address">Bu Bilgisayar &gt; Belgeler &gt; BilimFuari</div>
    <div class="file-list">
      <div class="file-row"><span class="file-badge">KLS</span><strong>Fotograflar</strong><span>Dosya klasörü</span></div>
      <div class="file-row"><span class="file-badge">DOC</span><strong>rapor.docx</strong><span>Word belgesi</span></div>
      <div class="file-row"><span class="file-badge">PPT</span><strong>sunum.pptx</strong><span>PowerPoint</span></div>
      <div class="file-row"><span class="file-badge">PDF</span><strong>kaynak.pdf</strong><span>PDF belgesi</span></div>
    </div>
  </div>
</div>

Bu görsel şemadır; Windows güncellemelerine göre düğmelerin ve menülerin görünümü değişebilir.

### Sol gezinme bölmesi

Sık kullanılan konumlara hızlı ulaşmayı sağlar. Örneğin:

- Giriş,
- Masaüstü,
- Belgeler,
- İndirilenler,
- Resimler,
- Bu Bilgisayar,
- bağlı bulut alanları veya harici sürücüler.

### Adres çubuğu

Şu anda hangi klasörde olduğunu gösterir.

Örnek:

```text
Bu Bilgisayar > Belgeler > BilimFuari > Fotograflar
```

Bu yapı sana **konumu** anlatır.

### Arama kutusu

Bulunduğun konum içinde dosya/klasör aramaya yardımcı olur.

Örneğin `rapor` yazarsan adı veya uygun indeks bilgileriyle eşleşen öğeleri bulabilirsin.

## Klasör oluşturma ve düzenli dosya yapısı kurma

Klasör yapısı rastgele değil, amaca göre düzenlenmelidir.

Kötü örnek:

```text
Masaüstü/
├── yeni belge.docx
├── son.docx
├── son2.docx
├── resim1.jpg
├── aa.pdf
├── deneme.pptx
└── son-gercek-final.docx
```

Daha iyi örnek:

```text
BILSEM-Proje/
├── 01-Rapor/
│   └── proje-raporu.docx
├── 02-Veriler/
│   └── olcumler.xlsx
├── 03-Gorseller/
│   ├── deney-01.jpg
│   └── deney-02.jpg
└── 04-Sunum/
    └── proje-sunumu.pptx
```

### İyi dosya adı nasıl olur?

İyi dosya adı:

- ne olduğunu anlatır,
- çok uzun değildir,
- sürüm gerekiyorsa anlaşılır biçimde belirtir,
- `son-son2-final-gercek` gibi belirsiz adlardan kaçınır.

Örnek:

```text
robotik-proje-raporu-v01.docx
robotik-proje-raporu-v02.docx
```

### Klasör oluşturma

Dosya Gezgini'nde uygun konuma git. Yeni klasör oluştur. Adını açıklayıcı yaz.

Klavye ile yeniden adlandırmak için seçili öğede:

<span class="keycap">F2</span>

yaygın olarak kullanılabilir.

## Dosya ve klasör işlemleri

### Açmak

Dosya veya klasöre çift tıklayabilir ya da seçip `Enter` kullanabilirsin.

### Yeniden adlandırmak

Bir dosyanın adını değiştirirken **uzantıyı yanlışlıkla değiştirmemeye** dikkat et.

Örneğin:

```text
rapor.docx → proje-raporu.docx
```

uygundur.

### Kopyalamak

```text
Ctrl + C
→ hedef klasörü aç
→ Ctrl + V
```

Kaynak dosya yerinde kalır.

### Taşımak

```text
Ctrl + X
→ hedef klasörü aç
→ Ctrl + V
```

Dosyanın konumu değişir.

Microsoft'un güncel Dosya Gezgini belgeleri de taşıma için seçili öğede **Kes** ardından yeni konumda **Yapıştır** akışını açıklar.

### Silmek

Seçili öğeyi `Delete` ile silme işlemini başlatabilirsin. Normal silme işleminde dosya çoğu yerel durumda **Geri Dönüşüm Kutusu**'na taşınabilir.

Ancak her silme işlemi mutlaka geri alınabilir değildir. Örneğin:

- bazı harici sürücüler,
- ağ konumları,
- çok büyük öğeler,
- `Shift + Delete`

gibi durumlarda farklı davranış olabilir.

Bu nedenle silme onaylarını okumak önemlidir.

### Geri Dönüşüm Kutusu

Yanlışlıkla silinen uygun yerel dosyalar burada bulunabilir ve **Geri Yükle** ile eski konumuna döndürülebilir.

<div class="mistake-panel" markdown="1">

**Dikkat:** Geri Dönüşüm Kutusu bir yedekleme sistemi değildir. Kutuyu boşalttığında veya uygun olmayan bir konumdan dosya sildiğinde geri getirme zorlaşabilir.

</div>

## Dosya yolu ve “nerede kaydettim?” problemi

Bir dosyanın yalnız adını değil, **konumunu** da bilmek gerekir.

Örnek tam yol:

```text
C:\Users\Ogrenci\Documents\BILSEM\Rapor\proje.docx
```

Başlangıç seviyesinde yolun her teknik ayrıntısını ezberlemene gerek yok. Ama şu fikri anlamalısın:

```text
Sürücü → Klasör → Alt klasör → Dosya
```

Aynı ada sahip iki dosya farklı klasörlerde bulunabilir:

```text
Belgeler\Rapor\sonuc.xlsx
Masaüstü\Deneme\sonuc.xlsx
```

Bunlar iki farklı dosyadır.

### Kaydederken konumu kontrol et

Bir programda **Kaydet** veya **Farklı Kaydet** penceresi açıldığında:

1. Dosya adını yaz.
2. Dosya türünü kontrol et.
3. **Nereye kaydettiğini** kontrol et.
4. Kaydet.
5. Gerekirse Dosya Gezgini'nden dosyanın gerçekten orada olduğunu doğrula.

### Arama, görünüm ve özellikler

### Arama

Dosya adını tam hatırlamıyorsan bir bölümünü yaz.

Örnek:

```text
proje
```

arama sonucu:

```text
proje-raporu.docx
proje-sunumu.pptx
proje-fotograf.jpg
```

olabilir.

### Görünüm

Dosya Gezgini'nde öğelerin:

- simge,
- liste,
- ayrıntılar

gibi farklı görünümlerle gösterilmesi mümkündür.

**Ayrıntılar** görünümü, dosya adı yanında değişiklik tarihi veya tür gibi bilgileri görmeyi kolaylaştırabilir.

### Özellikler

Sağ tıklayıp **Özellikler** üzerinden dosyanın:

- türü,
- konumu,
- boyutu,
- tarih bilgileri

gibi verileri incelenebilir.

## Birlikte uygulayalım: düzenli proje klasörü

<div class="practice-panel" markdown="1">

**Amaç:** Bir BİLSEM proje klasörü oluşturup gerçek dosya yönetimi yapmak.

1. Belgeler altında `BILSEM-Projem` klasörü oluştur.
2. İçine şu alt klasörleri oluştur:

```text
01-Rapor
02-Veri
03-Gorseller
04-Sunum
```

3. Öğretmenin verdiği örnek `.txt`, `.jpg` ve `.pdf` dosyalarını uygun klasörlere kopyala.
4. Bir dosyanın adını `F2` ile açıklayıcı biçimde değiştir.
5. Bir dosyayı `Ctrl + X` ve `Ctrl + V` ile başka alt klasöre taşı.
6. Bir dosyayı `Ctrl + C` ve `Ctrl + V` ile yedek kopya olarak çoğalt.
7. Bir dosyayı sil ve Geri Dönüşüm Kutusu'ndan geri yükle.
8. Dosya Gezgini aramasında `proje` kelimesini ara.
9. Ayrıntılar görünümüne geçip dosya türü ve değişiklik tarihlerini incele.
10. Son olarak öğretmene şu soruyu cevapla: “Dosya ile klasör arasındaki fark nedir?”

</div>

## Sık yapılan hatalar ve ders özeti

<div class="mistake-panel" markdown="1">

**Sık yapılan hatalar**

- Belgeyi kaydedip hangi klasöre kaydettiğini bilmemek.
- Masaüstünü her şeyin depolandığı tek yer gibi kullanmak.
- Dosya ile kısayolu karıştırmak.
- Dosya uzantısını elle değiştirince dosya türünün gerçekten dönüşeceğini sanmak.
- Kopyalama ile taşıma arasındaki farkı kontrol etmemek.
- “Son”, “son2”, “final”, “gercek-final” gibi anlaşılması zor dosya adları kullanmak.
- Geri Dönüşüm Kutusu'nu yedekleme sistemi sanmak.

</div>

Bu dersin ana fikri:

> **Dosya içeriği saklar; klasör dosyaları düzenler; Dosya Gezgini ise bu yapıyı yönetmemizi sağlar.**

Bir sonraki derste Windows **Ayarlar**, uygulamalar, varsayılan uygulamalar ve güncellemeler üzerinde çalışacağız.

<details class="source-note" markdown="1">
<summary>Kaynaklar ve güncellik notu</summary>

Bu ders, kavramların güncel kullanımını doğrulamak için aşağıdaki kaynaklarla karşılaştırılmıştır. Windows arayüzünde güncellemelere göre küçük görsel veya adlandırma farkları olabilir; önemli olan işlemin mantığını öğrenmektir.

- [Microsoft Support — Windows'ta Dosya Gezgini](https://support.microsoft.com/tr-tr/windows/experience/fileexplorer/file-explorer-in-windows)
- [Microsoft Support — Windows'ta klavye kısayolları](https://support.microsoft.com/tr-tr/windows/windows-ta-klavye-k%C4%B1sayollar%C4%B1-dcc61a57-8ff0-cffe-9796-cb9706c75eec)
</details>
