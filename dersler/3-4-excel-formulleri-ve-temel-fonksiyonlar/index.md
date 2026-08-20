---
title: Excel Formülleri ve Temel Fonksiyonlar
module_id: 19
updated: '2026-08-20'
summary: Excel’de formül mantığı, göreli-mutlak başvurular ve TOPLA, ORTALAMA, MİN, MAK, EĞER, ETOPLA gibi Türkçe işlevleri gerçek tablolarla öğreniyoruz.
quiz: /uygulamalar/3-4-excel-formulleri-ve-temel-fonksiyonlar/
permalink: /dersler/3-4-excel-formulleri-ve-temel-fonksiyonlar/
---
<div class="lesson-goals" markdown="1">

**Bu derste ne öğreneceğiz?**

Excel’de hesaplamayı ezberlemek yerine formülün nasıl okunduğunu öğreneceğiz. Türkçe Excel’de kullanılan işlev adlarını gerçek bir öğrenci puan tablosunda kullanacağız.

<div class="board-note" markdown="1">**Ayırıcı notu:** Excel’de işlev bağımsız değişkenlerini ayıran karakter bölgesel ayarlara göre `;` veya `,` olabilir. Türkçe Windows kurulumlarında sıklıkla `;` görülür. Formül hata verirse Excel’in kendi önerdiği ayırıcıyı kontrol et.</div>

</div>

## 1. Formülü soldan sağa okuyalım

Formül:

```excel
=(B2+C2)/2
```

şöyle okunur:

1. B2 ve C2’yi topla.
2. Sonucu 2’ye böl.

İşlem önceliği matematikteki gibidir; parantez ile istediğin sırayı açıkça belirtebilirsin.

### Hücre başvurusu neden güçlüdür?

```excel
=B2*C2
```

formülünde B2 veya C2 değiştiğinde sonuç otomatik yeniden hesaplanır. Excel’i hesap makinesinden ayıran önemli özelliklerden biri budur.

## 2. Göreli, mutlak ve karma başvurular

### Göreli: `A1`

Formül başka hücreye kopyalanınca satır/sütun göreli olarak değişir.

```text
D2: =B2*C2
D3'e kopyala → =B3*C3
```

### Mutlak: `$A$1`

Kopyalansa da hem sütun hem satır sabit kalır.

Örnek: KDV oranı `F1` hücresinde ise:

```excel
=D2*$F$1
```

### Karma: `$A1` veya `A$1`

Yalnız sütunu veya yalnız satırı sabitler. Başlangıç düzeyinde önce göreli ve mutlak başvuruyu iyi öğrenmek yeterlidir.

## 3. Temel Türkçe işlevler

### TOPLA

```excel
=TOPLA(D2:D6)
```

D2–D6 aralığındaki değerleri toplar.

### ORTALAMA

```excel
=ORTALAMA(B2:D2)
```

Belirtilen sayıların aritmetik ortalamasını verir.

### MİN ve MAK

```excel
=MİN(B2:B20)
=MAK(B2:B20)
```

Aralıktaki en küçük ve en büyük sayıyı bulur.

<div class="function-cards"><div><b>TOPLA</b><span>Toplam</span></div><div><b>ORTALAMA</b><span>Aritmetik ortalama</span></div><div><b>MİN</b><span>En küçük</span></div><div><b>MAK</b><span>En büyük</span></div></div>

## 4. EĞER ile karar verme

`EĞER`, bir koşul doğruysa bir sonuç, yanlışsa başka sonuç üretir.

Örnek: E2 puanı 50 veya üzeriyse “Geçti” yaz:

```excel
=EĞER(E2>=50;"Geçti";"Kaldı")
```

Mantık:

```text
E2 >= 50 ?
   EVET → Geçti
   HAYIR → Kaldı
```

<div class="decision-demo"><span>E2 ≥ 50?</span><i>EVET → “Geçti”</i><i>HAYIR → “Kaldı”</i></div>

### Metin çift tırnak içinde

Formüldeki `"Geçti"` ve `"Kaldı"` metindir. Çift tırnak unutulursa Excel bunu ad/başvuru gibi yorumlayabilir.

## 5. Koşula bağlı toplama ve arama

### ETOPLA

Belirli ölçütü karşılayan satırların toplamını alır.

Örneğin A sütununda kategori, C sütununda tutar olsun:

```excel
=ETOPLA(A2:A20;"Robotik";C2:C20)
```

Robotik kategorisindeki tutarları toplar.

### ÇAPRAZARA’ya giriş

Yeni Excel sürümlerinde `ÇAPRAZARA`, bir değeri bir sütunda bulup aynı satırdaki başka sütundan sonuç döndürebilir.

```excel
=ÇAPRAZARA(F2;A2:A20;C2:C20;"Bulunamadı")
```

Microsoft, ÇAPRAZARA’nın dönüş sütununun sağda veya solda olmasına bağlı kalmadan çalışabildiğini belirtir. Eski Excel sürümlerinde bu işlev bulunmayabilir.

## 6. Hataları okumayı öğren

Formül hatası gördüğünde hücreyi silip baştan yazmak yerine **hata türünü anlamaya çalış**.

Yaygın durumlar:

- `#BÖL/0!` → sıfıra bölme.
- `#YOK` → arama işlevi eşleşme bulamadı.
- `#DEĞER!` → veri türü/bağımsız değişken sorunu olabilir.
- `#BAŞV!` → geçersiz hücre başvurusu oluşmuş olabilir.

### Formülü adım adım kontrol et

1. Hangi hücreleri kullanıyor?
2. Hücrelerde gerçekten sayı mı var?
3. Parantez doğru mu?
4. Aralık doğru mu?
5. Ayırıcı `;` / `,` doğru mu?
6. İşlev adı Türkçe Excel’e uygun mu?

## 7. Birlikte uygulayalım: Puan tablosu

<div class="practice-panel" markdown="1">

| Öğrenci | Sınav 1 | Sınav 2 | Proje | Ortalama | Durum |
|---|---:|---:|---:|---:|---|
| Ada | 80 | 90 | 100 | formül | formül |
| Efe | 45 | 55 | 60 | formül | formül |
| Lina | 70 | 75 | 80 | formül | formül |

1. Ortalama sütununda `ORTALAMA` kullan.
2. Durum sütununda `EĞER` ile 50 ve üzerini “Geçti” yap.
3. Tablonun altında en yüksek ortalamayı `MAK` ile bul.
4. En düşük ortalamayı `MİN` ile bul.
5. Ayrı hücrede bir “başarı eşiği” değeri oluştur; formülde mutlak başvuru kullanarak dene.

</div>

<div class="mistake-panel" markdown="1">**Sık hata:** Formülü bir hücrede doğru çalıştırıp aşağı kopyaladığında sonuç bozuluyorsa önce göreli/mutlak başvuruları kontrol et.</div>

<details class="source-note"><summary>Kaynak kontrolü</summary><p>Microsoft Support Türkçe TOPLA, ORTALAMA, EĞER, ETOPLA ve ÇAPRAZARA belgeleriyle işlev adları ve temel davranışlar doğrulanmıştır.</p></details>
