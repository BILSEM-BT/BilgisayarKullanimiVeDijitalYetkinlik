---
title: Fare, Touchpad, Seçim, Kopyalama, Kesme ve Yapıştırma
module_id: 5
updated: '2026-08-20'
summary: Fare ve touchpad kullanımını çoklu seçimle birlikte öğreniyor; kopyala, kes, yapıştır ve pano mantığını dosya ve metin örnekleri üzerinde uyguluyoruz.
quiz: /uygulamalar/1-5-fare-touchpad-secim-kopyalama-kesme-ve-yapistirma/
permalink: /dersler/1-5-fare-touchpad-secim-kopyalama-kesme-ve-yapistirma/
---
<div class="lesson-goals" markdown="1">

**Bu derste ne öğreneceğiz?**

Fare ve touchpad ile yalnızca “tıklamayı” değil; **seçme, çoklu seçim, sürükleme, sağ tıklama, kopyalama, kesme, yapıştırma ve pano** mantığını öğreneceğiz. Bu beceriler Windows, Word, Excel, tarayıcı ve Dosya Gezgini gibi neredeyse bütün uygulamalarda karşına çıkar.

</div>

## Fare ve touchpad hareketlerini doğru kullanalım

Farede en sık kullandığımız işlemler:

- **Sol tıklama:** Bir öğeyi seçmek veya bir düğmeyi çalıştırmak.
- **Çift tıklama:** Dosya, klasör veya bazı masaüstü öğelerini açmak.
- **Sağ tıklama:** Seçili öğeyle ilgili bağlam menüsünü açmak.
- **Tekerlek:** Sayfayı yukarı/aşağı kaydırmak.
- **Sürükle-bırak:** Bir öğeyi basılı tutup başka konuma taşımak veya bazı uygulamalarda yeniden düzenlemek.

Touchpad'de üretici ayarlarına bağlı olarak:

- tek parmakla hareket,
- tek dokunuşla tıklama,
- iki parmakla kaydırma,
- iki parmakla sağ tıklama,
- iki parmakla yakınlaştırma/uzaklaştırma

gibi hareketler kullanılabilir.

<div class="board-note" markdown="1">

**Öğretmen notu:** Touchpad hareketleri cihazın sürücüsüne ve Windows ayarlarına göre değişebilir. Öğrenciye “her bilgisayarda aynı hareket kesin çalışır” demek yerine, **Ayarlar > Bluetooth ve cihazlar > Dokunmatik yüzey** benzeri alandan seçeneklerin kontrol edilebileceğini göster.

</div>

### Tıklama ile seçme aynı şey mi?

Bir dosyaya tek tıklamak çoğu durumda onu **seçer**. Seçili öğe üzerinde daha sonra:

- `Enter` ile açma,
- `F2` ile yeniden adlandırma,
- `Delete` ile silme,
- `Ctrl + C` ile kopyalama

gibi işlemler yapılabilir.

Bu yüzden önce “hangi öğenin seçili olduğunu” kontrol etmek önemlidir.

## Seçim yapmayı öğrenelim

### Tek öğe seçmek

Bir dosya veya klasöre bir kez tıkla.

### Birden fazla ayrı öğe seçmek

<span class="keycap">Ctrl</span> tuşuna basılı tutup istediğin öğelere tek tek tıkla.

Örnek:

```text
Fotoğraf1.jpg    ← seç
Fotoğraf2.jpg
Fotoğraf3.jpg    ← seç
Fotoğraf4.jpg
Fotoğraf5.jpg    ← seç
```

Bu durumda yalnız 1, 3 ve 5 numaralı dosyalar seçilebilir.

### Aralıktaki öğeleri seçmek

İlk öğeyi seç, sonra <span class="keycap">Shift</span> tuşuna basılı tutarak son öğeye tıkla.

Örnek:

```text
1. dosya  ← başlangıç
2. dosya
3. dosya
4. dosya
5. dosya  ← Shift ile son seçim
```

Aradaki öğeler de seçilir.

### Tümünü seçmek

<span class="keycap">Ctrl</span> + <span class="keycap">A</span>

geçerli alandaki tüm öğeleri veya metni seçmek için yaygın olarak kullanılır.

<div class="mistake-panel" markdown="1">

**Dikkat:** `Ctrl + A` her zaman “bilgisayardaki her şeyi” seçmez. O anda odakta olan liste, belge veya alan içindeki öğeleri seçer.

</div>

## Kopyala, kes ve yapıştır arasındaki fark

Bu üç işlem bilgisayar kullanımının temelidir.

<div class="clipboard-flow">
  <div class="clipboard-step">1. Öğeyi seç</div>
  <div class="clipboard-arrow">→</div>
  <div class="clipboard-step">2. Kopyala veya Kes</div>
  <div class="clipboard-arrow">→</div>
  <div class="clipboard-step">3. Hedefe git ve Yapıştır</div>
</div>

### Kopyala

`Ctrl + C`

Seçili öğenin bir kopyasını oluşturmak üzere onu panoya alır. Asıl öğe bulunduğu yerde kalır.

Örnek:

```text
Kaynak klasör: Proje.docx
Hedef klasör:  Proje.docx kopyası oluşturulur
Kaynakta:      Proje.docx hâlâ vardır
```

### Kes

`Ctrl + X`

Seçili öğeyi **taşımaya hazırlamak** için panoya alır. Dosya, yapıştırma tamamlandığında yeni konuma taşınır.

Örnek:

```text
Eski klasör → Kes
Yeni klasör → Yapıştır
Sonuç: Dosya yeni konumdadır; eskisinde artık yoktur.
```

### Yapıştır

`Ctrl + V`

Panoya alınan öğeyi o anda bulunduğun hedefe yerleştirir.

<div class="compare-grid">
  <div class="compare-card" markdown="1">
  ### Kopyala + Yapıştır
  **Amaç:** Aynı öğeden ikinci bir kopya oluşturmak.

  Kaynak korunur.
  </div>
  <div class="compare-card" markdown="1">
  ### Kes + Yapıştır
  **Amaç:** Öğeyi başka konuma taşımak.

  Kaynak konum değişir.
  </div>
</div>

### Metinde de aynı mantık

Word veya Not Defteri'nde:

1. Metni seç.
2. `Ctrl + C` ile kopyala.
3. İmleci başka yere getir.
4. `Ctrl + V` ile yapıştır.

Metni **taşımak** istiyorsan `Ctrl + X` kullanabilirsin.

## Pano nedir ve Windows + V ne yapar?

**Pano (clipboard)**, kopyaladığın veya kestiğin içeriğin yapıştırılmayı beklediği geçici alandır.

Basit düşün:

```text
Seçili içerik → Ctrl+C / Ctrl+X → Pano → Ctrl+V → Hedef
```

Windows'ta <span class="keycap">Windows</span> + <span class="keycap">V</span> kısayolu **pano geçmişini** açabilir. İlk kullanımda bu özelliği etkinleştirmen istenebilir.

Pano geçmişi:

- birden fazla kopyalanmış öğeye ulaşmayı,
- sık kullanılan uygun öğeleri sabitlemeyi

kolaylaştırabilir.

Ancak pano geçmişine **parola, kimlik numarası veya gizli bilgi** kopyalarken dikkat etmek gerekir. Ortak kullanılan bilgisayarlarda hassas içeriği panoda bırakmamak iyi bir güvenlik alışkanlığıdır.

## Sürükle-bırak mı, kopyala-yapıştır mı?

Dosyayı fareyle başka klasöre sürüklemek hızlı olabilir; ancak sürükle-bırak davranışı kaynak ve hedefin bulunduğu sürücüye göre **kopyalama veya taşıma** şeklinde değişebilir.

Başlangıçta daha kontrollü yöntem:

```text
1. Seç
2. Ctrl+C veya Ctrl+X
3. Hedef klasöre git
4. Ctrl+V
5. Sonucu kontrol et
```

Bu işlem, ne yapmak istediğini açıkça belirlediğin için öğretim açısından daha anlaşılırdır.

### Sağ tıklama menüsü

Klavye kısayollarını hatırlamıyorsan seçili öğeye sağ tıklayıp:

- Kopyala,
- Kes,
- Yeniden adlandır,
- Özellikler,
- Sil

gibi komutlara ulaşabilirsin.

Windows 11'de sağ tıklama menüsünün görünümü eski Windows sürümlerinden farklı olabilir. Bazı ek seçenekler **Daha fazla seçenek göster** altında bulunabilir.

## Birlikte uygulayalım: kontrollü kopyalama ve taşıma

<div class="practice-panel" markdown="1">

**Ön hazırlık**

Masaüstünde `KlavyeUygulama` adlı bir klasör oluştur. İçine öğretmenin verdiği üç örnek metin dosyasını koy:

```text
not1.txt
not2.txt
not3.txt
```

**Görev 1 — Kopyalama**

1. `not1.txt` dosyasını seç.
2. `Ctrl + C`.
3. Masaüstüne dön.
4. `Ctrl + V`.
5. Dosyanın hem klasörde hem masaüstünde bulunduğunu doğrula.

**Görev 2 — Taşıma**

1. Masaüstündeki kopyayı seç.
2. `Ctrl + X`.
3. `KlavyeUygulama` klasörü içinde `Arsiv` adlı klasör oluştur.
4. `Arsiv` klasörüne gir.
5. `Ctrl + V`.
6. Dosyanın eski konumdan kaybolup yeni konuma taşındığını doğrula.

**Görev 3 — Çoklu seçim**

1. Ana klasöre dön.
2. `Ctrl` tuşuyla `not1.txt` ve `not3.txt` dosyalarını birlikte seç.
3. Sağ tıklayıp **Özellikler** veya başka güvenli bir menü seçeneğini aç.
4. İşlem yapmadan çık.

**Görev 4 — Pano geçmişi**

1. Birkaç farklı kısa metni sırayla kopyala.
2. `Windows + V` aç.
3. Hangi öğelerin geçmişte göründüğünü incele.

</div>

## Sık yapılan hatalar ve ders özeti

<div class="mistake-panel" markdown="1">

**Sık yapılan hatalar**

- Kopyalamak isterken kesmek ve dosyanın eski yerden kaybolduğunu sanmak.
- Hedef klasörü açmadan `Ctrl + V` kullanıp dosyayı yanlış yere yapıştırmak.
- Çoklu seçimde `Ctrl` tuşunu bırakıp yanlışlıkla önceki seçimleri iptal etmek.
- Sürükle-bırak sonucunun her zaman aynı olacağını varsaymak.
- Dosya taşındı mı kopyalandı mı kontrol etmeden işleme devam etmek.
- Ortak bilgisayarda hassas veriyi pano geçmişinde bırakmak.

</div>

Ders sonunda şu üç cümleyi net ayırabilmelisin:

- **Kopyala:** Aslı kalsın, bir kopyası daha oluşsun.
- **Kes:** Öğeyi başka yere taşımaya hazırlan.
- **Yapıştır:** Panodaki öğeyi hedef konuma yerleştir.

Bir sonraki derste bu işlemleri gerçek bir **Dosya Gezgini** çalışma düzeninde kullanacak; **dosya ile klasörün ne olduğunu**, klasör yapısını, yeniden adlandırmayı, silmeyi, aramayı ve düzenli dosya yönetimini öğreneceğiz.

<details class="source-note" markdown="1">
<summary>Kaynaklar ve güncellik notu</summary>

Bu ders, kavramların güncel kullanımını doğrulamak için aşağıdaki kaynaklarla karşılaştırılmıştır. Windows arayüzünde güncellemelere göre küçük görsel veya adlandırma farkları olabilir; önemli olan işlemin mantığını öğrenmektir.

- [Microsoft Support — Windows'ta klavye kısayolları](https://support.microsoft.com/tr-tr/windows/windows-ta-klavye-k%C4%B1sayollar%C4%B1-dcc61a57-8ff0-cffe-9796-cb9706c75eec)
- [Microsoft Support — Panoyu kullanma](https://support.microsoft.com/tr-tr/windows/apps/using-the-clipboard)
- [Microsoft Support — Windows'ta Dosya Gezgini](https://support.microsoft.com/tr-tr/windows/experience/fileexplorer/file-explorer-in-windows)
</details>
