---
title: Excel'de Tablo, Sıralama, Filtreleme ve Grafik
module_id: 20
updated: '2026-08-20'
summary: Excel’de düzenli veri tablosu oluşturma, sıralama, filtreleme ve uygun grafik seçimini gerçek bir proje verisi üzerinden uyguluyoruz.
quiz: /uygulamalar/3-5-excel-tablo-siralama-filtreleme-ve-grafik/
permalink: /dersler/3-5-excel-tablo-siralama-filtreleme-ve-grafik/
---
<div class="lesson-goals" markdown="1">

**Bu derste ne öğreneceğiz?**

Hesaplamadan sonra veriyi **düzenleme ve anlamlandırma** aşamasına geçiyoruz. Dağınık bir listeyi Excel Tablosu’na dönüştürecek, sıralayacak, filtreleyecek ve doğru grafikle sunacağız.

</div>

## 1. İyi veri tablosu nasıl kurulur?

Temel kural:

```text
Her satır = bir kayıt
Her sütun = bir özellik
İlk satır = başlıklar
```

Örnek:

| Takım | Kategori | Puan | Süre (sn) |
|---|---|---:|---:|
| Alfa | Robotik | 88 | 74 |
| Beta | Yapay Zekâ | 92 | 81 |
| Gamma | Robotik | 76 | 69 |

### Kaçın

- tablonun ortasında boş satır,
- aynı sütunda karışık veri türü,
- `Puan: 88` gibi sayı ile metni aynı hücreye birleştirme,
- veri alanı içinde gereksiz birleştirilmiş hücreler.

## 2. Aralığı Excel Tablosu’na dönüştür

Veri alanında bir hücre seçip **Ekle > Tablo** komutuyla tablo oluşturabilirsin. Excel, başlık satırını tanıyıp filtre düğmeleri ekler.

Tablonun yararları:

- yeni satırlara biçim/formül yayılması,
- hazır filtreler,
- tablo stilleri,
- daha düzenli veri yönetimi.

<div class="mini-sheet table-highlight"><b></b><b>A</b><b>B</b><b>C</b><strong>1</strong><span>Takım ▼</span><span>Kategori ▼</span><span>Puan ▼</span><strong>2</strong><span>Alfa</span><span>Robotik</span><span>88</span><strong>3</strong><span>Beta</span><span>Yapay Zekâ</span><span>92</span><strong>4</strong><span>Gamma</span><span>Robotik</span><span>76</span></div>

## 3. Sıralama: kayıtları yeniden diz

Sıralama veri satırlarının yerini değiştirir.

Örnekler:

- Puana göre **Büyükten Küçüğe**.
- Takım adına göre **A’dan Z’ye**.
- Tarihe göre eskiden yeniye.

### Tek sütunu yalnız başına sıralama riski

Bir tablo içindeki yalnız puan hücrelerini seçip diğer sütunlardan bağımsız sıralarsan takım–puan eşleşmesi bozulabilir. Excel’in “seçimi genişlet” uyarısını anlamadan geçme.

## 4. Filtreleme: veriyi silmeden görünümü daralt

**Veri > Filtre** veya Excel Tablosu başlık okları ile yalnız istenen kayıtları gösterebilirsin.

Örnek:

```text
Kategori = Robotik
Puan >= 80
```

Filtre uygulandığında uymayan satırlar **silinmez**, geçici olarak gizlenir.

<div class="filter-demo"><span>Tüm kayıtlar: 12</span><i>Filtre: Robotik</i><strong>Görünen: 5</strong></div>

### Filtreyi temizle

Sonuçları yeniden görmek için sütundaki filtreyi temizle veya **Veri > Temizle** kullan.

## 5. Grafik: soruya uygun görsel seç

Grafik “sayfayı süslemek” için değil, bir soruya hızlı cevap vermek için kullanılır.

### Sütun/çubuk grafik

Kategorileri karşılaştırmak için uygundur.

<div class="bar-chart-demo"><div><span>Alfa</span><i style="--v:88%"></i><b>88</b></div><div><span>Beta</span><i style="--v:92%"></i><b>92</b></div><div><span>Gamma</span><i style="--v:76%"></i><b>76</b></div></div>

### Çizgi grafik

Zamana göre değişimi göstermek için genellikle uygundur.

### Pasta grafik

Bir bütünün az sayıda parçaya dağılımını göstermek için kullanılabilir; çok kategori olduğunda okunabilirliği düşer.

### Grafik başlığı ve birim

`Grafik 1` yerine:

```text
Robotik Takımlarının Final Puanları
```

gibi anlamlı başlık kullan. Eksen birimini de belirt.

## 6. Birlikte uygulayalım: Proje yarışması verisi

<div class="practice-panel" markdown="1">

8 takımlık bir tablo oluştur:

```text
Takım | Kategori | Puan | Sunum Süresi | Danışman
```

1. Veriyi Excel Tablosu’na dönüştür.
2. Puanı büyükten küçüğe sırala.
3. Yalnız `Robotik` kategorisini filtrele.
4. Filtreyi temizle.
5. Takım–Puan sütunlarından sütun grafik oluştur.
6. Grafiğe anlamlı başlık ekle.
7. En yüksek puanı görselden ve tablodan ayrı ayrı bul; ikisinin aynı sonucu verdiğini doğrula.

</div>

## 7. Sık yapılan hatalar ve ders özeti

<div class="mistake-panel" markdown="1">

- Filtrelenen satırları “silindi” sanmak.
- Başlık satırı olmadan tablo oluşturmak.
- Yalnız tek sütunu sıralayıp kayıt bütünlüğünü bozmak.
- Her veri için pasta grafik kullanmak.
- Grafikte eksen/birim göstermemek.
- Çok sayıda renk ve 3B efekt kullanıp veriyi zor okunur hâle getirmek.

</div>

**Ders sonunda:** Düzenli bir veri kümesini tabloya çevirebilmeli, kayıtları güvenli sıralayabilmeli, filtreleyebilmeli ve soruya uygun temel grafik oluşturabilmelisin.

<details class="source-note"><summary>Kaynak kontrolü</summary><p>Microsoft Support Türkçe Excel temel görevler, Otomatik Filtre ve grafik için veri seçme belgeleriyle karşılaştırılmıştır.</p></details>
