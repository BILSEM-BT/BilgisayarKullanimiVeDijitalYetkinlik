---
title: Word ile Düzenli Belge ve PDF Oluşturma
module_id: 17
updated: '2026-08-20'
summary: Word’de stiller, sayfa yapısı, başlıklar, içindekiler, resim/tablo düzeni, erişilebilirlik ve PDF dışa aktarma adımlarını gerçek bir proje raporu üzerinden öğreniyoruz.
quiz: /uygulamalar/3-2-word-ile-duzenli-belge-ve-pdf-olusturma/
permalink: /dersler/3-2-word-ile-duzenli-belge-ve-pdf-olusturma/
---
<div class="lesson-goals" markdown="1">

**Bu derste ne öğreneceğiz?**

Bu kez hedefimiz tek sayfalık metin değil, **teslim edilebilir düzenli bir rapor** üretmek. Başlık stilleri, sayfa numarası, görseller, içindekiler ve PDF çıktısını birlikte kullanacağız.

</div>

## 1. Önce belgenin iskeletini kur

Uzun belgeyi biçimlendirmeden önce yapısını planla:

```text
Kapak
1. Amaç
2. Problem
3. Yöntem
4. Bulgular
5. Sonuç
Kaynaklar
```

### Başlıkları elle büyütmek yerine Stiller kullan

Word’de **Giriş > Stiller** alanındaki:

- **Başlık 1**,
- **Başlık 2**,
- **Başlık 3**

stilleri belge yapısını belirtir.

Bu yalnızca görünüm değildir. Microsoft’un erişilebilirlik rehberinde de yerleşik başlık stillerinin belge yapısını ekran okuyucular için anlamlı hâle getirdiği belirtilir.

<div class="style-flow"><span>Başlık 1<br><small>Ana bölüm</small></span><i>→</i><span>Başlık 2<br><small>Alt bölüm</small></span><i>→</i><span>Başlık 3<br><small>Alt-alt bölüm</small></span></div>

## 2. Sayfa yapısını düzenle

### Kapak sayfası

Kapakta genellikle:

- proje adı,
- öğrenci/ekip,
- kurum,
- tarih

bulunur. Kapak “çok süslü” olmak zorunda değildir; okunaklı ve dengeli olması daha değerlidir.

### Sayfa numarası

**Ekle > Sayfa Numarası** ile belgeye otomatik sayfa numarası ekle. Sayfa numarasını her sayfaya elle yazma.

### Üst bilgi ve alt bilgi

Kurum adı veya kısa belge adı gibi tekrar eden bilgiler için kullanılabilir. Çok önemli ana içeriği yalnız üst/alt bilgiye koymamak erişilebilirlik açısından daha güvenlidir.

### Bölüm sonu ve sayfa sonu

Yeni bölümü bir sonraki sayfadan başlatmak için onlarca `Enter` yerine **Sayfa Sonu** kullan. Böylece önceki metne satır eklendiğinde sayfa düzeni bozulmaz.

## 3. Tablo ve görselleri rapora doğru yerleştir

### Tablo veri için kullanılmalı

| Ölçüm | 1. Deneme | 2. Deneme | 3. Deneme |
|---|---:|---:|---:|
| Süre (sn) | 18,2 | 17,6 | 17,9 |

Tablonun ilk satırında açıklayıcı sütun başlıkları kullan.

### Görselin bir görevi olmalı

Bir robot fotoğrafı ekliyorsan metinde neden gösterildiği anlaşılmalı.

Örnek resim yazısı:

```text
Şekil 1. Ultrasonik sensörün robot üzerindeki konumu.
```

Word’de **Başvurular > Resim Yazısı Ekle** ile numaralandırılmış resim yazıları yönetilebilir.

### Alternatif metin

Görsel bilgi taşıyorsa erişilebilirlik için kısa **alternatif metin** eklemek iyi uygulamadır.

## 4. Otomatik içindekiler tablosu oluştur

Word, otomatik içindekileri **başlık stillerinden** üretir.

Adımlar:

1. Bölüm başlıklarına `Başlık 1`, alt başlıklara `Başlık 2` uygula.
2. İmleci içindekilerin geleceği yere getir.
3. **Başvurular > İçindekiler** seç.
4. Otomatik bir içindekiler biçimi seç.

Belge değiştiğinde içindekiler kendiliğinden her saniye güncellenmez. İçindekilere sağ tıklayıp **Alanı Güncelleştir** komutunu kullanabilirsin.

<div class="office-demo toc-demo"><div class="word-page"><h3>İçindekiler</h3><p>1. Amaç <span>........................ 2</span></p><p>2. Yöntem <span>.................... 3</span></p><p>3. Bulgular <span>................... 4</span></p><p>4. Sonuç <span>...................... 5</span></p></div></div>

## 5. Gözden geçir ve erişilebilirliği kontrol et

Teslimden önce şu üç kontrolü yap:

### Yazım ve dil

Kırmızı/mavi işaretleri körü körüne kabul etme. Özel isim ve teknik terimler sözlükte bulunmayabilir. Öneriyi anlamına göre değerlendir.

### Belge tutarlılığı

- Başlık seviyeleri sıralı mı?
- Aynı tür başlıklar aynı görünüyor mu?
- Tablo ve şekiller metinde açıklanmış mı?
- Sayfa sonunda yalnız kalan başlık var mı?

### Erişilebilirlik

**Gözden Geçir > Erişilebilirliği Denetle** aracını kullan. Özellikle:

- başlık yapısı,
- resim alternatif metni,
- tablo üst bilgileri,
- renk kontrastı

konularına dikkat et.

## 6. Word belgesini PDF olarak oluştur

PDF, belgenin farklı bilgisayarlarda düzenini büyük ölçüde koruyarak paylaşılmasını sağlar.

Güncel Word sürümlerinde **Dosya > Farklı Kaydet** veya **Dosya > Dışa Aktar** üzerinden PDF oluşturma seçenekleri bulunabilir.

### PDF oluşturduktan sonra mutlaka aç

Kontrol et:

- sayfalar doğru mu,
- resimler taşmış mı,
- tablolar kesilmiş mi,
- Türkçe karakterler doğru mu,
- bağlantılar çalışıyor mu,
- sayfa numaraları doğru mu?

<div class="flow-row"><div class="flow-box"><b>DOCX</b><span>Düzenlenebilir kaynak</span></div><div class="flow-box"><b>Son kontrol</b><span>Stil, sayfa, görsel</span></div><div class="flow-box"><b>PDF</b><span>Paylaşım / teslim</span></div></div>

## 7. Birlikte uygulayalım: 3 sayfalık proje raporu

<div class="practice-panel" markdown="1">

**Proje:** “Okulda Enerji Tasarrufu”

1. Kapak sayfası oluştur.
2. `Amaç`, `Yöntem`, `Bulgular`, `Sonuç` başlıklarına **Başlık 1** uygula.
3. Yöntem altına `Veri Toplama` ve `Ölçüm` başlıklarını **Başlık 2** yap.
4. Bir tablo ekle.
5. Bir görsel ve açıklayıcı resim yazısı ekle.
6. Otomatik içindekiler oluştur.
7. Sayfa numarası ekle.
8. Erişilebilirlik Denetimi çalıştır.
9. DOCX’i kaydet.
10. PDF oluştur ve PDF’i açarak son kontrol yap.

</div>

<div class="mistake-panel" markdown="1">

**Sık hata:** Başlığı yalnız büyük ve kalın yapmak, onu `Başlık 1` stili yapmaz. Otomatik içindekiler ve erişilebilir belge yapısı için gerçek başlık stillerini kullan.

</div>

<details class="source-note"><summary>Kaynak kontrolü</summary><p>Microsoft Support Türkçe Word içindekiler, yerleşik başlık stilleri, erişilebilirlik, resim yazıları ve tablo/resim ekleme belgeleriyle kontrol edilmiştir.</p></details>
