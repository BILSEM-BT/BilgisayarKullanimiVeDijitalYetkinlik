---
title: Microsoft Excel Temel Kullanımı
module_id: 18
updated: '2026-08-20'
summary: Excel’in Türkçe arayüzünü; çalışma kitabı, çalışma sayfası, hücre, veri girişi, biçimlendirme ve ilk hesaplamalarla uygulamalı öğreniyoruz.
quiz: /uygulamalar/3-3-microsoft-excel-temel-kullanimi/
permalink: /dersler/3-3-microsoft-excel-temel-kullanimi/
---
<div class="lesson-goals" markdown="1">

**Bu derste ne öğreneceğiz?**

Excel’i “karelerden oluşan bir tablo” olarak değil, **veriyi düzenleme ve hesaplama aracı** olarak göreceğiz. Bir okul etkinliği bütçesi hazırlarken hücre, satır, sütun, aralık, veri türü, biçim ve ilk formülleri öğreneceğiz.

**Dil:** Türkçe Microsoft Excel arayüzü ve Türkçe işlev adları esas alınmıştır.

</div>

## 1. Excel ekranını ve temel kavramları tanıyalım

<div class="office-demo excel-demo">
  <div class="office-titlebar"><strong>EtkinlikButcesi.xlsx — Excel</strong><span>— □ ×</span></div>
  <div class="office-tabs"><b>Dosya</b><b class="active">Giriş</b><b>Ekle</b><b>Sayfa Düzeni</b><b>Formüller</b><b>Veri</b><b>Gözden Geçir</b><b>Görünüm</b></div>
  <div class="formula-bar"><span>fx</span><code>=B2*C2</code></div>
  <div class="mini-sheet"><b></b><b>A</b><b>B</b><b>C</b><b>D</b><strong>1</strong><span>Malzeme</span><span>Adet</span><span>Birim Fiyat</span><span>Toplam</span><strong>2</strong><span>Arduino</span><span>5</span><span>450</span><span>2250</span><strong>3</strong><span>Servo</span><span>10</span><span>120</span><span>1200</span></div>
</div>

### Çalışma kitabı ve çalışma sayfası

- `.xlsx` dosyasının tamamı: **çalışma kitabı**.
- Alttaki `Sayfa1`, `Bütçe`, `Öğrenciler` gibi sekmeler: **çalışma sayfası**.

Bir çalışma kitabında birden çok sayfa olabilir.

### Hücre adresi

Sütun harfi + satır numarası:

```text
A1
C5
D12
```

Birden fazla hücre:

```text
A1:D10 → hücre aralığı
```

## 2. Veriyi doğru hücreye doğru türde gir

Excel’de temel veri türleri:

- metin,
- sayı,
- tarih/saat,
- formül.

### Sayı ile “sayı gibi görünen metin” farklıdır

`125` sayısı ile başında `'` kullanılarak metne çevrilmiş `'125` aynı davranmaz. Hesap yapılacak değerleri gerçek sayı olarak tut.

Telefon numarası, öğrenci numarası gibi hesaplanmayacak ve başında sıfır olabilen alanlar metin olarak tutulabilir.

### Hücre düzenleme

- Hücreyi seç ve yaz → eski içeriği değiştirir.
- `F2` veya formül çubuğu → mevcut içeriği düzenlemeye yardım eder.
- `Delete` → hücre içeriğini temizler.

## 3. Satır, sütun, seçim ve otomatik doldurma

### Seçim

- Tek hücre: tıkla.
- Aralık: sürükle veya `Shift` ile seç.
- Bitişik olmayan alanlar: uygun durumda `Ctrl` ile ek seçim.

### Satır ve sütun boyutu

Başlık sığmıyorsa sütun çizgisini sürükleyebilir veya başlıklar arasındaki sınırı çift tıklayarak otomatik genişlik kullanabilirsin.

### Doldurma tutamacı

Seçili hücrenin köşesindeki küçük tutamacı sürüklemek:

- formülü kopyalayabilir,
- sayı/tarih serisini devam ettirebilir.

Örnek:

```text
Pazartesi
Salı
Çarşamba
```

veya `1, 2` seçilip sürüklenirse devam eden seri oluşturulabilir.

## 4. Hücreleri biçimlendir ama veriyi bozma

**Giriş** sekmesinde:

- yazı tipi,
- hizalama,
- kenarlık,
- dolgu rengi,
- sayı biçimi

bulunur.

### Sayı biçimi değeri değiştirmez

`0,25` değerini **Yüzde** biçiminde gösterirsen `25%` görürsün. Temel değer hâlâ 0,25’tir.

Benzer şekilde:

- Para Birimi,
- Tarih,
- Yüzde,
- Ondalık basamak

görünümü düzenler.

### Hücre birleştirme konusunda dikkat

Başlık için birleştirilmiş hücre bazen görsel olarak işe yarar; ancak veri tablosunun içinde çok sayıda birleştirilmiş hücre sıralama/filtreleme işlemlerini zorlaştırabilir.

## 5. Excel’de ilk formülümüz

Formül `=` ile başlar.

Bütçe tablosunda:

```text
B2 = Adet
C2 = Birim Fiyat
D2 = Toplam
```

D2 hücresine:

```excel
=B2*C2
```

yazarsak adet ile birim fiyat çarpılır.

<div class="formula-teach"><span>B2<br><b>5</b></span><i>×</i><span>C2<br><b>450</b></span><i>→</i><span>D2<br><b>2250</b></span></div>

Formülü D2’den aşağı sürüklediğinde Excel göreli hücre başvurularını satıra göre uyarlayabilir.

### Otomatik Toplam

Bir sayı sütununun altında **Otomatik Toplam** aracı `TOPLA` işlevini hızlıca oluşturabilir.

## 6. Birlikte uygulayalım: Etkinlik bütçesi

<div class="practice-panel" markdown="1">

Aşağıdaki tabloyu oluştur:

| Malzeme | Adet | Birim Fiyat (TL) | Toplam (TL) |
|---|---:|---:|---:|
| Arduino Uno | 5 | 450 | formül |
| Servo Motor | 10 | 120 | formül |
| Jumper Kablo | 8 | 75 | formül |
| Breadboard | 6 | 90 | formül |

1. Başlık satırını kalın yap.
2. Birim Fiyat ve Toplam sütunlarını sayı/para biçiminde düzenle.
3. D2’ye `=B2*C2` yaz.
4. Formülü aşağı kopyala.
5. En alta genel toplamı hesapla.
6. Sütun genişliklerini düzenle.
7. Dosyayı `BILSEM_Etkinlik_Butcesi.xlsx` olarak kaydet.

</div>

## 7. Sık yapılan hatalar ve ders özeti

<div class="mistake-panel" markdown="1">

- Formülden önce `=` yazmayı unutmak.
- Sonucu elle hesaplayıp yazmak; veri değişince sonuç güncellenmez.
- Para miktarının içine `TL` metni yazarak sayıyı metne çevirmek; bunun yerine **Para Birimi** biçimi kullan.
- Her veriyi tek sütuna yazmak.
- Veri tablosunun ortasında boş satırlar bırakmak.
- Çalışma kitabı ile çalışma sayfasını aynı şey sanmak.

</div>

**Ders sonunda:** Hücre adresini okuyabilmeli, düzenli tablo oluşturabilmeli, veri türünü ve sayı biçimini ayırt edebilmeli, basit hücre başvurulu formül yazabilmelisin.

<details class="source-note"><summary>Kaynak kontrolü</summary><p>Microsoft Support Türkçe Excel temel görevler ve Excel klavye/formül belgeleri esas alınmıştır.</p></details>
