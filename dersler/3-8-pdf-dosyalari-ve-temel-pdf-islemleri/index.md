---
title: PDF Dosyaları ve Temel PDF İşlemleri
module_id: 23
updated: '2026-08-20'
summary: PDF’nin ne olduğunu; görüntüleme, arama, açıklama, form, yazdırma, Office’ten PDF oluşturma, taranmış PDF/OCR ve temel güvenlik kavramlarıyla öğreniyoruz.
quiz: /uygulamalar/3-8-pdf-dosyalari-ve-temel-pdf-islemleri/
permalink: /dersler/3-8-pdf-dosyalari-ve-temel-pdf-islemleri/
---
<div class="lesson-goals" markdown="1">

**Bu derste ne öğreneceğiz?**

PDF’yi yalnız “açılan belge” olarak değil, paylaşım ve teslim sürecinin önemli bir biçimi olarak ele alacağız. Metin PDF ile taranmış PDF farkını, arama-kopyalama, açıklama, form, imza, güvenlik ve doğru PDF oluşturma adımlarını öğreneceğiz.

</div>

## 1. PDF nedir ve neden kullanılır?

**PDF — Portable Document Format**, belgenin sayfa düzenini farklı cihazlarda büyük ölçüde korumak için yaygın kullanılan biçimdir.

```text
Word/Excel/PowerPoint → PDF → görüntüleme / yazdırma / teslim
```

PDF’nin avantajı, kaynak programdaki düzenin paylaşım sırasında daha öngörülebilir görünmesidir.

### PDF kaynak dosyanın yerini her zaman tutmaz

Bir raporu ileride düzenleyeceksen:

```text
rapor.docx  → düzenlenebilir kaynak
rapor.pdf   → teslim/paylaşım kopyası
```

ikisini de saklamak iyi uygulamadır.

## 2. PDF görüntüleyicide temel kullanım

<div class="office-demo pdf-demo"><div class="pdf-toolbar"><span>Dosya</span><span>Sayfa 3 / 12</span><span>− 100% +</span><span>Bul</span><span>Yazdır</span></div><div class="pdf-work"><aside><b>1</b><b>2</b><b class="active">3</b><b>4</b></aside><main><div class="pdf-page"><h3>Proje Raporu</h3><p>Bu bölümde deney sonuçları açıklanmaktadır.</p><div class="pdf-chart"></div></div></main></div></div>

Temel işlemler:

- sayfa numarasıyla gezinme,
- yakınlaştırma/uzaklaştırma,
- `Ctrl + F` ile metin arama,
- sayfa küçük resimleri,
- yazdırma.

### Ctrl + F her PDF’de çalışır mı?

PDF yalnız görüntü taramasından oluşuyorsa içinde aranabilir metin katmanı olmayabilir. Bu durumda OCR gerekebilir.

## 3. Açıklama, vurgulama, form ve imza

PDF görüntüleyiciye göre şu araçlar bulunabilir:

- metin vurgulama,
- not/açıklama,
- çizim,
- form alanı doldurma,
- imza ekleme.

### “İmza resmi” ile dijital imza aynı şey değildir

Fareyle çizilmiş veya resim olarak eklenmiş imza görsel işarettir.

**Dijital imza** ise sertifika/kriptografi ile belge bütünlüğü ve imzalayan kimliği hakkında teknik doğrulama sağlayabilen farklı bir mekanizmadır.

Bu iki kavramı karıştırma.

## 4. Office programlarından doğru PDF oluşturma

Word, Excel ve PowerPoint’te PDF oluştururken:

1. Kaynak dosyayı kaydet.
2. Sayfa/çıktı önizlemesini kontrol et.
3. PDF olarak kaydet/dışa aktar.
4. Oluşan PDF’yi **yeniden aç**.
5. Sayfa, görsel, yazı tipi, tablo ve bağlantıları kontrol et.

### Excel’de özellikle yazdırma alanını kontrol et

Geniş bir Excel tablosu PDF’e çevrilirken sütunlar farklı sayfalara taşabilir. PDF oluşturmadan önce:

- yönlendirme,
- kenar boşluğu,
- ölçeklendirme,
- yazdırma alanı

kontrol edilmelidir.

## 5. Metin PDF, taranmış PDF ve OCR

### Metin tabanlı PDF

Word gibi uygulamadan üretilmişse metin genellikle:

- seçilebilir,
- aranabilir,
- kopyalanabilir.

### Taranmış PDF

Tarayıcıdan gelen her sayfa yalnız bir görüntü olabilir.

```text
Kağıt → tarama → sayfa görüntüsü
```

Bu dosyada `Ctrl + F` sonuç vermeyebilir.

### OCR

**OCR — Optik Karakter Tanıma**, görüntüdeki harfleri metin olarak tanımaya çalışır.

OCR kusursuz değildir. Özellikle:

- düşük çözünürlük,
- eğik sayfa,
- el yazısı,
- `I/İ/ı/i`, `ş`, `ğ` gibi karakterler

hata oluşturabilir. Kritik metinleri gözle doğrula.

## 6. Güvenlik, redaksiyon ve erişilebilirlik

### Parola ve izin

Bazı PDF araçları:

- açma parolası,
- yazdırma/düzenleme kısıtları

sunabilir. Bu özelliklerin güvenlik düzeyi kullanılan PDF aracı ve şifreleme yöntemine bağlıdır.

### Redaksiyon “üstünü siyaha boyamak” değildir

Gizli metnin üzerine siyah dikdörtgen çizmek, alttaki gerçek metni dosyadan kaldırmayabilir.

Gerçek **redaksiyon** aracı hassas içeriği kalıcı olarak kaldıracak şekilde kullanılmalıdır ve çıktı tekrar kontrol edilmelidir.

### Erişilebilir PDF

Kaynak Word belgesinde:

- gerçek başlık stilleri,
- alternatif metin,
- doğru tablo başlıkları,
- anlamlı bağlantılar

kullanmak erişilebilir PDF üretimine katkı sağlar.

## 7. Birlikte uygulayalım: teslim dosyası hazırlama

<div class="practice-panel" markdown="1">

1. 3-2 dersindeki proje raporu DOCX dosyanı aç.
2. İçindekiler ve sayfa numaralarını güncelle.
3. PDF olarak dışa aktar.
4. PDF’i kapatıp yeniden aç.
5. `Ctrl + F` ile rapordaki bir anahtar kelimeyi ara.
6. Bir cümleyi vurgula ve açıklama ekle.
7. Sayfa 2’yi yazdırma önizlemesinde kontrol et.
8. Dosya adını `ProjeAdi_Soyad_Teslim.pdf` gibi anlaşılır yap.
9. Kaynak `.docx` dosyasını silme.

</div>

<div class="mistake-panel" markdown="1">

- PDF oluşturduktan sonra açmadan göndermek.
- Taranmış PDF’de arama çalışmayınca dosyanın bozuk olduğunu sanmak.
- Siyah şekil çizmenin redaksiyon olduğunu düşünmek.
- İmza resmi ile sertifika tabanlı dijital imzayı aynı sanmak.
- Kaynak DOCX/XLSX/PPTX dosyasını silip yalnız PDF bırakmak.

</div>

**Ders sonunda:** PDF’i görüntüleyebilmeli, arayabilmeli, temel açıklama araçlarını kullanabilmeli, Office’ten doğru PDF çıkarabilmeli ve taranmış PDF/OCR/güvenlik farklarını açıklayabilmelisin.

<details class="source-note"><summary>Kaynak kontrolü</summary><p>Microsoft Office PDF dışa aktarma davranışları ve yaygın PDF/OCR/güvenlik kavramları güncel üretici belgeleriyle karşılaştırılmıştır.</p></details>
