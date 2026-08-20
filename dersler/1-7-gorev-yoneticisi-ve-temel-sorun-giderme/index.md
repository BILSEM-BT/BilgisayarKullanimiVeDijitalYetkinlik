---
title: Görev Yöneticisi ve Temel Sorun Giderme
module_id: 7
updated: 2026-08-20
summary: Windows Görev Yöneticisi üzerinden uygulama ve temel kaynak kullanımını okumayı; donan uygulama, yavaşlık, ses ve bağlantı sorunlarında sistematik ve güvenli sorun giderme yaklaşımını öğreniyoruz.
quiz: /uygulamalar/1-7-gorev-yoneticisi-ve-temel-sorun-giderme/
permalink: /dersler/1-7-gorev-yoneticisi-ve-temel-sorun-giderme/
---

<div class="lesson-goals" markdown="1">

**Bu derste ne öğreneceğiz?**

Bir uygulama donduğunda, bilgisayar yavaşladığında veya “bir şey çalışmıyor” dediğimizde rastgele işlem yapmak yerine **sistematik sorun giderme** öğreneceğiz. Windows **Görev Yöneticisi** ile çalışan uygulamaları ve CPU, bellek, disk gibi temel kaynak göstergelerini okuyacağız.

Bu ders bilgisayarı “tamir etme” dersi değildir. Ama günlük kullanıcı sorunlarında **doğru soruyu sorma, güvenli ilk adımları uygulama ve ne zaman yardım istemek gerektiğini bilme** becerisi kazandırır.

</div>

## Sorunu önce doğru tarif et

“Bilgisayar bozuk” çok belirsiz bir ifadedir.

Daha iyi problem cümleleri:

```text
Word açılıyor ama dosyayı kaydederken yanıt vermiyor.
```

```text
İnternet tarayıcısında sayfalar açılmıyor ama Wi‑Fi bağlı görünüyor.
```

```text
Bilgisayar açıldıktan sonra yaklaşık 5 dakika çok yavaş çalışıyor.
```

```text
Kulaklık bağlı görünüyor ama ses hoparlörden geliyor.
```

Sorun giderme için önce şu dört soruyu sor:

1. **Ne olmasını bekliyordum?**
2. **Gerçekte ne oldu?**
3. **Sorun ne zaman başladı?**
4. **Sorun tek uygulamada mı, bütün sistemde mi?**

<div class="board-note" markdown="1">

**Tahtada örnek:** “Chrome yavaş” cümlesini ayrıntılandır.

- Yalnız bir web sitesi mi yavaş?
- Bütün siteler mi?
- Başka tarayıcıda da aynı mı?
- İnternet mi yavaş, yoksa bilgisayar mı?
- Çok sayıda sekme mi açık?

Bu sorular çözümü doğrudan söylemez; ama **sorunun hangi katmanda olduğunu daraltır.**

</div>

## Güvenli ilk adımlar

Bir sorun olduğunda ilk yapılacak işlem her zaman “Görevi Sonlandır” değildir.

Önce:

1. **Çalışmanı kaydet.**
2. Birkaç saniye bekle; uygulama yoğun işlem yapıyor olabilir.
3. Sorunun yalnız bir uygulamada mı olduğunu kontrol et.
4. Gereksiz pencere ve sekmeleri kapat.
5. Uygulamayı normal yoldan kapatıp yeniden aç.
6. Gerekirse bilgisayarı normal şekilde **Yeniden Başlat**.
7. Sorun sürüyorsa daha ayrıntılı incelemeye geç.

### Yeniden başlatmak neden işe yarayabilir?

Yeniden başlatma:

- geçici bellek durumunu temizler,
- takılı kalan bazı süreçleri kapatır,
- güncelleme sonrası gerekli işlemleri tamamlayabilir,
- sistemi temiz bir başlangıç durumuna getirir.

Ancak sürekli tekrarlanan bir sorunu yalnız yeniden başlatmayla “gizlemek” yerine nedeni araştırmak gerekir.

## Görev Yöneticisi'ni tanıyalım

Görev Yöneticisi'ni açmanın yaygın yollarından biri:

<span class="keycap">Ctrl</span> + <span class="keycap">Shift</span> + <span class="keycap">Esc</span>

Microsoft, Görev Yöneticisi'ni çalışan uygulamaları ve sistem kaynaklarını görüntüleme/yönetme aracı olarak tanımlar.

<div class="taskmanager-demo" aria-label="Görev Yöneticisi şematik görünümü">
  <div class="taskmanager-nav">
    <div class="active">İşlemler</div>
    <div>Performans</div>
    <div>Uygulama geçmişi</div>
    <div>Başlangıç uygulamaları</div>
    <div>Kullanıcılar</div>
    <div>Ayrıntılar</div>
  </div>
  <div class="taskmanager-content">
    <h3 style="margin-top:0">İşlemler</h3>
    <div class="process-row"><span>Web Tarayıcısı</span><span class="metric-chip">CPU %8</span></div>
    <div class="process-row"><span>Word</span><span class="metric-chip">Bellek 420 MB</span></div>
    <div class="process-row"><span>Dosya Gezgini</span><span class="metric-chip">CPU %1</span></div>
    <div class="process-row"><span>Arka plan işlemleri</span><span class="metric-chip">Çeşitli</span></div>
  </div>
</div>

Bu şema gerçek değerleri temsil etmez. Gerçek bilgisayarda değerler sürekli değişir.

### İşlem (process) nedir?

Çalışan uygulama veya sistem bileşeni bir ya da daha fazla işlem çalıştırabilir. Tarayıcıların birden fazla süreç göstermesi normal olabilir.

Bu nedenle:

> “Görev Yöneticisi'nde çok satır var; virüs var.”

sonucu doğru değildir.

## CPU, bellek, disk ve ağ değerlerini nasıl okuyalım?

### CPU

İşlemcinin o anda ne kadar yoğun kullanıldığını gösteren değerlerden biridir.

Yüksek CPU kullanımı:

- video işleme,
- oyun,
- güncelleme,
- derleme,
- yoğun web sayfası

gibi meşru bir işlem sırasında normal olabilir.

**Tek başına yüksek CPU = arıza** değildir.

### Bellek

Çalışan uygulamaların RAM kullanımını gösterir.

Çok sayıda tarayıcı sekmesi, büyük belge veya ağır program bellek kullanımını artırabilir.

RAM kullanımı yüksekse:

- kullanmadığın uygulamaları kapat,
- tekrar kontrol et.

### Disk

Depolama aygıtındaki okuma/yazma etkinliğini gösterir. Büyük dosya kopyalama, güncelleme veya virüs taraması sırasında disk etkinliği yükselebilir.

### Ağ

Uygulamaların ağ/internet veri kullanımını gözlemlemeye yardımcı olabilir.

<div class="compare-grid">
  <div class="compare-card" markdown="1">
  ### Anlık yüksek değer
  Kısa süreli olabilir ve normaldir.
  </div>
  <div class="compare-card" markdown="1">
  ### Sürekli yüksek değer + sorun
  Hangi uygulamanın kullandığını incelemek daha anlamlıdır.
  </div>
</div>

### Yanıt vermeyen uygulamayı kapatmak

Bir uygulama hiç yanıt vermiyorsa ve normal kapatma çalışmıyorsa Görev Yöneticisi'nde ilgili uygulamayı seçip **Görevi sonlandır** kullanılabilir.

Ancak bu işlem:

- kaydedilmemiş veriyi kaybettirebilir,
- uygulamanın işini zorla keser.

Bu nedenle önce normal kapatma denenmeli ve mümkünse çalışma kaydedilmelidir.

<div class="mistake-panel" markdown="1">

**Dikkat:** Anlamadığın Windows sistem işlemlerini rastgele sonlandırma. Bir işlem adını tanımıyorsan önce araştır veya öğretmen/uzman desteği al.

</div>

### Windows Gezgini donarsa ne olur?

Dosya Gezgini ve masaüstü bazı durumlarda aynı Windows kabuk bileşenleriyle ilişkili olduğu için Gezgini yeniden başlatmak gelişmiş bir sorun giderme seçeneği olabilir. Ancak başlangıç seviyesinde bunu öğretmen gözetiminde yapmak daha doğrudur.

### Başlangıç uygulamaları ve yavaş açılış

Bazı uygulamalar Windows'a giriş yaptığında otomatik çalışır.

Görev Yöneticisi veya:

```text
Ayarlar
→ Uygulamalar
→ Başlangıç
```

üzerinden başlangıç uygulamaları yönetilebilir.

Microsoft, başlangıçta çalışan uygulamaların açılış süresi ve genel performansı etkileyebileceğini belirtir.

### Her şeyi devre dışı bırakmak doğru mu?

Hayır.

Bazı uygulamalar:

- güvenlik,
- bulut senkronizasyonu,
- cihaz yardımcı yazılımı

gibi işlevler için gerekli olabilir.

Doğru yaklaşım:

1. Uygulamayı tanı.
2. Başlangıçta gerekli mi değerlendir.
3. Etkisini incele.
4. Emin değilsen değişiklik yapma.

## Sistematik sorun giderme akışı

<div class="flow-row">
  <div class="flow-box">1. Belirtiyi tanımla<small>Ne bekledim, ne oldu?</small></div>
  <div class="flow-box">2. Basit kontroller<small>Kaydet, bağlantı, ses, kablo, yeniden aç</small></div>
  <div class="flow-box">3. Kaynağı daralt<small>Tek uygulama mı, sistem mi?</small></div>
  <div class="flow-box">4. Güvenli çözüm<small>Güncelle, yeniden başlat, yardım iste</small></div>
</div>

### Örnek 1 — “İnternet yok”

Kontrol sırası:

1. Wi‑Fi simgesi bağlı mı?
2. Başka bir web sitesi açılıyor mu?
3. Başka uygulama internete erişiyor mu?
4. Aynı ağda başka cihaz çalışıyor mu?
5. Uçak modu açık mı?
6. Ağ bağlantısını kapatıp açmak veya yönlendirici sorununu yetkili kişiyle kontrol etmek gerekiyor mu?

### Örnek 2 — “Ses yok”

1. Ses kapalı mı?
2. Ses düzeyi çok düşük mü?
3. Doğru çıkış aygıtı seçili mi?
4. Kulaklık gerçekten bağlı mı?
5. Yalnız bir uygulamada mı ses yok?
6. Uygulama kendi içinde sessize alınmış mı?

### Örnek 3 — “Bilgisayar çok yavaş”

1. Çok fazla uygulama/sekme açık mı?
2. Görev Yöneticisi'nde CPU veya bellek yoğun kullanan uygulama var mı?
3. Disk alanı çok dolu mu?
4. Güncelleme işlemi devam ediyor mu?
5. Yeniden başlatınca düzeliyor mu?
6. Sorun sürekli ise öğretmen/teknik destek incelemeli mi?

## Birlikte uygulayalım: sorun giderme laboratuvarı

<div class="practice-panel" markdown="1">

**Uygulama A — Görev Yöneticisini oku**

1. `Ctrl + Shift + Esc` ile Görev Yöneticisi'ni aç.
2. İşlemler bölümünde açık uygulamaları bul.
3. CPU sütununa bak.
4. Bellek sütununa bak.
5. Bir tarayıcıda birkaç sekme açıp bellek değerinin nasıl değişebildiğini gözlemle.
6. Hiçbir sistem işlemini sonlandırma.

**Uygulama B — Senaryo çöz**

Aşağıdaki sorunlardan birini seç:

- “Word yanıt vermiyor.”
- “Ses kulaklıktan gelmiyor.”
- “Bilgisayar açılır açılmaz çok yavaş.”
- “Tarayıcıda internet sayfası açılmıyor.”

Şu tabloyu doldur:

| Adım | Ne kontrol ederim? | Bu kontrol neyi elemek için? |
|---|---|---|
| 1 | | |
| 2 | | |
| 3 | | |
| 4 | | |

**Uygulama C — Başlangıç uygulamaları**

Görev Yöneticisi'nde Başlangıç uygulamaları bölümünü incele. Hiçbir ayarı değiştirmeden:

1. Hangi uygulamaların etkin olduğunu gör.
2. “Başlangıçta gerçekten gerekli mi?” sorusunu iki örnek üzerinde tartış.

</div>

### Ne zaman yardım istemelisin?

Aşağıdaki durumlarda tek başına rastgele işlem yapmak yerine öğretmen, veli veya teknik destek iste:

- bilgisayar açılmıyor,
- yanık kokusu veya aşırı ısınma var,
- sıvı döküldü,
- sistem sürekli çöküyor,
- bilinmeyen güvenlik uyarıları çıkıyor,
- kişisel dosyalar kayboluyor,
- zararlı yazılım şüphesi var,
- yönetici parolası veya sistem politikası gerekiyor.

<div class="mistake-panel" markdown="1">

**Sık yapılan hatalar**

- Sorunu tanımlamadan internette ilk bulunan komutu çalıştırmak.
- Kaydetmeden uygulamayı zorla sonlandırmak.
- Görev Yöneticisi'nde tanımadığı sistem işlemlerini kapatmak.
- Yüksek CPU veya RAM değerini tek başına “virüs” sanmak.
- Her yavaşlık sorununda program silmeye başlamak.
- Aynı anda birçok ayarı değiştirip hangisinin etkili olduğunu anlayamamak.

</div>

Bu dersin ana fikri:

> İyi sorun giderme, rastgele deneme yapmak değil; **belirtiyi tanımlamak, basit kontrollerden başlamak, sorunun kaynağını daraltmak ve güvenli çözümü uygulamaktır.**

Böylece Bölüm 1'de bilgisayarı tanımaktan Windows masaüstüne, klavyeden dosya yönetimine ve temel sorun gidermeye kadar günlük bilgisayar kullanımının temelini tamamladık.

<details class="source-note" markdown="1">
<summary>Kaynaklar ve güncellik notu</summary>

Bu ders, kavramların güncel kullanımını doğrulamak için aşağıdaki kaynaklarla karşılaştırılmıştır. Windows arayüzünde güncellemelere göre küçük görsel veya adlandırma farkları olabilir; önemli olan işlemin mantığını öğrenmektir.

- [Microsoft Support — Windows'ta sistem yapılandırma araçları / Görev Yöneticisi](https://support.microsoft.com/tr-tr/windows/experience/system-configuration-tools-in-windows)
- [Microsoft Support — Windows'da bilgisayar performansını artırmaya yönelik ipuçları](https://support.microsoft.com/tr-tr/windows/experience/performance-optimization/tips-to-improve-pc-performance-in-windows)
- [Microsoft Support — Windows'ta Başlangıç uygulamalarını yapılandırma](https://support.microsoft.com/tr-tr/windows/experience/startup-boot/configure-startup-applications-in-windows)
</details>
