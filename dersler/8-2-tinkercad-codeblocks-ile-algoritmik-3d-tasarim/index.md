---
title: Tinkercad Codeblocks ile Algoritmik 3D Tasarım
module_id: 49
updated: '2026-08-21'
summary: Tinkercad Codeblocks web ortamını Türkçe anlatımla kullanmayı; sıralı komutlar, değişkenler, döngüler, şekil üretme, taşıma, döndürme ve parametrik tekrarlarla algoritmik 3D modeller oluşturmayı öğreniyoruz.
quiz: /uygulamalar/8-2-tinkercad-codeblocks-ile-algoritmik-3d-tasarim/
permalink: /dersler/8-2-tinkercad-codeblocks-ile-algoritmik-3d-tasarim/
---
<div class="lesson-goals" markdown="1">

**Bu derste ne öğreneceğiz? — Türkçe kullanım**

Bu derste [https://www.tinkercad.com/codeblocks](https://www.tinkercad.com/codeblocks) adresindeki **Tinkercad Codeblocks** ortamını kullanacağız. Codeblocks; sürükle-bırak kod bloklarıyla 3D şekiller üretir. Autodesk, Codeblocks'u dinamik, parametrik ve uyarlanabilir tasarımlar için blok tabanlı kodlama ortamı olarak tanımlar. Ders anlatımı Türkçedir; arayüzde çeviri değişebileceği için önemli kavramların İngilizce adlarını da parantez içinde göreceğiz.

</div>

<div class="archive-flow" aria-label="Codeblocks algoritmik 3D tasarım akışı"><span>Algoritmayı planla</span><i>→</i><span>Şekil bloğu ekle</span><i>→</i><span>Taşı / döndür / ölçekle</span><i>→</i><span>Döngü ve değişken kullan</span><i>→</i><span>Run ile sonucu üret</span></div>

## 1. Codeblocks nedir, klasik Tinkercad 3D'den farkı nedir?

Klasik Tinkercad 3D'de nesneleri doğrudan çalışma alanında elle yerleştiririz. **Codeblocks**'ta ise tasarımın nasıl üretileceğini bloklardan oluşan bir **algoritma** ile tanımlarız.

Örneğin “10 sütun yerleştir” demek yerine:

1. Bir silindir oluştur.
2. Belirli mesafe taşı.
3. Bu işlemi 10 kez tekrarla.

şeklinde bir program kurabiliriz. Böylece tekrar sayısı veya mesafe değiştirildiğinde tasarım algoritmik olarak yeniden üretilebilir.

## 2. Codeblocks arayüzünü tanıyalım

Temel çalışma alanları:

- **Blocks / Blok paleti:** Şekil, değişken, kontrol ve dönüşüm bloklarının bulunduğu alan.
- **Code workspace / Kod alanı:** Blokların sıraya dizildiği program bölümü.
- **3D Viewer / 3D Görüntüleyici:** Kodun ürettiği modelin görüldüğü alan.
- **Run / Çalıştır:** Kod bloklarını yürütür ve modeli üretir/günceller.

Codeblocks'ta blokların **sırası önemlidir**. Bir nesneyi oluşturmadan önce onu taşımaya çalışan bir algoritma mantıksal olarak beklenen sonucu vermez.

## 3. Şekil oluşturma ve dönüşüm blokları

### Create Shape / Şekil oluştur

Kutu, silindir veya başka bir temel şekli kodla oluşturur. Şeklin ölçülerini parametrelerle ayarlamak mümkündür.

### Move / Taşı

Nesnenin X, Y veya Z yönünde konumunu değiştirir. “10 mm sağa taşı” gibi sayısal değerler algoritmanın tekrarlanabilir olmasını sağlar.

### Rotate / Döndür

Nesneyi bir eksen etrafında belirli derece döndürür. Örneğin her tekrarın sonunda 30° döndürmek dairesel bir desen kurabilir.

### Scale / Ölçekle

Nesnenin boyutunu büyütür veya küçültür. Ölçekleme ile doğrudan kesin ölçü vermek aynı şey değildir; tasarım niyetine göre uygun yöntem seçilmelidir.

## 4. Sequence, Loop ve Repeat mantığı

### Sıralı işlem

Algoritma yukarıdan aşağıya bir komut dizisi olarak düşünülür. Örneğin:

**Şekil oluştur → taşı → döndür → kopyala/tekrarla**

sırası ile **taşı → şekil oluştur** sırası aynı sonucu vermez.

### Repeat / Döngü

Autodesk, Codeblocks'un **variables and loops** kullanarak desen üretmeyi desteklediğini belirtir. Tekrarlanan işlemleri tek tek kopyalamak yerine döngü kullanmak daha düzenlidir.

Örnek fikir:

```text
5 kez tekrarla:
    bir kutu oluştur
    X yönünde 12 mm taşı
```

Gerçek blok yapısında komutlar sürükle-bırak olarak bağlanır; yukarıdaki metin algoritmanın mantığını gösterir.

## 5. Variables / Değişkenlerle parametrik tasarım

### Değişken nedir?

Değişken, programda adı olan ve değeri değiştirilebilen bir bilgidir. Örneğin:

- `adet = 8`
- `aralik = 15`
- `yaricap = 30`

Bu değerleri bloklarda kullanırsan tasarımın birçok yerini tek bir parametre değişikliğiyle güncelleyebilirsin.

### Parametrik düşünme

Bir çitin direklerini tek tek yerleştirmek yerine “direk sayısı” ve “direk aralığı” değişkenlerini kullanmak daha parametrik bir yaklaşımdır. Autodesk Codeblocks'u **parametric and adaptive designs** oluşturmak için uygun bir ortam olarak tanımlar.

## 6. Dairesel desen örneği

Bir merkez etrafında 12 sütun oluşturmak istediğini düşün:

1. `adet = 12` değişkeni oluştur.
2. Dönüş açısını `360 / adet` olarak düşün: 30°.
3. Bir kutu/silindir oluştur.
4. Merkezden belirli uzaklığa taşı.
5. Her tekrar sonunda 30° döndür.
6. İşlemi 12 kez tekrarla.
7. **Run / Çalıştır** ile 3D Viewer'da sonucu izle.

Buradaki temel fikir şudur: **360° tam daireyi eşit parçalara bölmek**, düzenli dairesel desenin matematiksel temelini verir.

### Kod çalıştırma ve önizleme

Codeblocks'ta Run komutu blok dizisini değerlendirir ve 3D Viewer'da modelin oluşumunu gösterir. Autodesk ayrıca Codeblocks tasarımlarının otomatik oluşumunu animasyon olarak izlemeyi desteklediğini belirtir.

## 7. Birlikte uygulayalım: parametrik kule halkası

<div class="practice-panel" markdown="1">

1. [Tinkercad Codeblocks](https://www.tinkercad.com/codeblocks) sayfasından yeni bir Codeblocks tasarımı aç.
2. `adet` adlı değişken oluştur ve değerini `8` yap.
3. Bir **Box** veya **Cylinder** şekli oluşturacak blok ekle.
4. Şeklin yüksekliğini ve taban ölçülerini sayısal olarak belirle.
5. Şekli merkezden dışarı belirli bir mesafeye taşı.
6. Döngü kullanarak aynı üretim/konumlandırma davranışını `adet` kez tekrarla.
7. Her tekrarda dönüş açısını `360 / adet = 45°` olacak şekilde düşün ve uygun Rotate bloğunu kullan.
8. **Run** ile tasarımı üret ve 3D Viewer'da halka düzenini kontrol et.
9. `adet` değerini `12` yap; bu durumda eşit açının `30°` olması gerektiğini hesapla ve modeli yeniden çalıştır.
10. Değişken kullanmanın neden 12 nesneyi tek tek düzenlemekten daha kolay olduğunu açıkla.

</div>

## 8. Sık yapılan hatalar ve ders özeti

<div class="mistake-panel" markdown="1">

- Codeblocks'u yalnızca “şekilleri sürükleme” alanı sanıp algoritma sırasını önemsememek.
- Tekrarlanan işlemleri döngü yerine çok sayıda kopya blokla yapmak.
- 360° / adet ilişkisini yanlış hesaplayıp dairesel deseni bozuk oluşturmak.
- Değişkeni güncellediğinde bağlı blokların hangi değeri kullandığını kontrol etmemek.
- Move ile Rotate komutlarının sırasının sonucu değiştirebileceğini gözden kaçırmak.
- Run komutundan sonra 3D Viewer'daki sonucu farklı açılardan kontrol etmemek.
- Parametreleri anlamsız adlandırmak; `x1` yerine `adet`, `aralik` gibi açıklayıcı adlar kullanmamak.

</div>

**Ders sonunda:** Codeblocks'ta blok tabanlı algoritma ile 3D model üretmenin klasik elle modellemeden farkını; sıra, döngü, değişken, taşıma ve döndürme kavramlarını; parametrik bir desenin neden kolay güncellenebilir olduğunu açıklayabilmelisin.

<details class="source-note"><summary>Kaynak kontrolü</summary><p>Ders, Autodesk Tinkercad Codeblocks resmî sayfası ve güncel öğrenme merkeziyle 21 Ağustos 2026 tarihinde doğrulanmıştır. Resmî sayfa Codeblocks'un sürükle-bırak bloklarla program oluşturmayı, Run ile 3D Viewer'da sonucu üretmeyi, variables ve loops ile desen/parametrik tasarım kurmayı desteklediğini açıklar.</p><ul><li><a href="https://www.tinkercad.com/codeblocks">Tinkercad Codeblocks</a></li><li><a href="https://www.tinkercad.com/learn/">Tinkercad Learning Center</a></li></ul></details>
