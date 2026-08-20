---
title: Visual Studio Kullanımı
module_id: 36
updated: '2026-08-21'
summary: Visual Studio'yu Türkçe arayüzle tanıyıp çalışma yükü, çözüm, proje, kod düzenleyici, derleme, çalıştırma ve temel hata ayıklama adımlarını güvenli bir başlangıç düzeyinde öğreniyoruz.
quiz: /uygulamalar/6-1-visual-studio-kullanimi/
permalink: /dersler/6-1-visual-studio-kullanimi/
---
<div class="lesson-goals" markdown="1">

**Bu derste ne öğreneceğiz? — Program dili: Türkçe**

Bu derste **Visual Studio** tümleşik geliştirme ortamını (IDE) Türkçe arayüz üzerinden tanıyacağız. Visual Studio Yükleyicisi'nde gerekli **iş yükünü** ve **Türkçe dil paketini** seçmeyi; çözüm, proje ve dosya kavramlarını ayırmayı; basit bir C# konsol projesi oluşturmayı; **Çözüm Gezgini**, kod düzenleyici, derleme, çalıştırma ve hata ayıklama araçlarını kullanmayı öğreneceğiz. Menü adları sürüme göre küçük farklılıklar gösterebilir; dersin odak noktası değişmeyen temel iş akışıdır.

</div>

<div class="archive-flow" aria-label="Visual Studio çalışma akışı"><span>İş yükünü kur</span><i>→</i><span>Proje oluştur</span><i>→</i><span>Kodu düzenle</span><i>→</i><span>Derle / çalıştır</span><i>→</i><span>Hata ayıkla</span></div>

## 1. Visual Studio nedir ve ne zaman kullanılır?

### Bir IDE, yalnızca metin düzenleyiciden daha fazlasıdır

Visual Studio; kod yazma, proje dosyalarını düzenleme, derleme, çalıştırma, hata ayıklama ve çeşitli geliştirme araçlarını aynı ortamda birleştiren bir **IDE (Integrated Development Environment / Tümleşik Geliştirme Ortamı)**dır. C#, C++, .NET ve farklı iş yükleriyle birçok proje türünde kullanılabilir.

### Visual Studio ile Visual Studio Code aynı program değildir

İsimleri benzese de iki ürün farklıdır. **Visual Studio**, özellikle Windows üzerinde kapsamlı proje ve hata ayıklama araçları sunan bir IDE'dir. **Visual Studio Code** ise eklentilerle genişletilen daha hafif bir kod düzenleyicisidir. Bu derste Visual Studio'yu kullanıyoruz; sonraki derste VS Code'u ayrıca ele alacağız.

### Sürümden çok iş akışını öğren

Ekrandaki simgeler ve bazı menü konumları güncellemelerle değişebilir. Buna karşılık şu akış korunur: **proje aç/oluştur → dosyayı düzenle → derle → çalıştır → hata varsa incele**.

## 2. Türkçe arayüz ve doğru iş yükü nasıl hazırlanır?

### Türkçe dil paketi

Microsoft'un güncel Visual Studio belgelerine göre Visual Studio Türkçeyi destekler. Mevcut kuruluma dil eklemek için **Visual Studio Yükleyicisi → Dil paketleri → Türkçe** seçilebilir. Yükleyici, işletim sistemi diline göre bir varsayılan dil de önerebilir.

### İş yükü nedir?

İş yükü, belirli geliştirme türü için gerekli araç ve bileşenlerin paketlenmiş grubudur. Örneğin C# ile temel .NET masaüstü/konsol çalışmaları için **.NET masaüstü geliştirme** iş yükü kullanılabilir. Bir proje şablonu görünmüyorsa önce gerekli iş yükünün kurulu olup olmadığı kontrol edilmelidir.

### Gereksiz bileşenleri rastgele kurma

Her öğrencinin bütün iş yüklerine ihtiyacı yoktur. Gereken bileşenleri seçmek disk alanını ve güncelleme süresini daha kontrollü tutar. Kurulum değişikliği için bazı bilgisayarlarda yönetici izni gerekebilir.

<div class="app-demo" aria-label="Visual Studio Yükleyicisi şeması"><div class="app-demo-titlebar"><b>Visual Studio Yükleyicisi</b><span>Türkçe</span></div><div class="app-demo-toolbar"><span>İş Yükleri</span><span>Bağımsız bileşenler</span><span>Dil paketleri</span></div><div class="app-demo-body"><div class="app-demo-sidebar"><span>Visual Studio</span><span>Değiştir</span></div><div class="app-demo-stage"><div class="archive-files"><div><b>.NET masaüstü geliştirme</b><span>İş yükü</span></div><div><b>Türkçe</b><span>Dil paketi</span></div></div></div></div></div>

## 3. Çözüm, proje ve Çözüm Gezgini

### Çözüm bir kapsayıcıdır

Visual Studio'da **çözüm (solution)**, bir veya daha fazla ilgili projeyi birlikte düzenlemek için kullanılan kapsayıcıdır. **Proje** ise kaynak kodu, ayarları ve derleme bilgilerini içeren çalışma birimidir. Tek projeli başlangıç çalışmalarında Visual Studio çözümü çoğu zaman otomatik oluşturur.

### Çözüm Gezgini ne işe yarar?

**Çözüm Gezgini**, çözümdeki projeleri ve dosyaları görmenin temel yerlerinden biridir. C# konsol projesinde `Program.cs` gibi kaynak dosyaları burada görürsün. Dosyayı seçtiğinde içerik merkezdeki kod düzenleyicide açılır.

### Üretilen klasörleri kaynak kodla karıştırma

Derleme sırasında `bin` ve `obj` gibi klasörler oluşabilir. Başlangıç düzeyinde asıl düzenlemen gereken yer kaynak dosyaları ve proje yapılandırmasıdır; derleme çıktıları elle kaynak kod gibi düzenlenmemelidir.

## 4. Türkçe arayüzle ilk C# konsol projesini oluşturma

### Yeni proje oluştur

Visual Studio başlangıç ekranında **Yeni proje oluştur** seçeneğini kullan. Arama alanına `konsol` yazıp dil filtresinden **C#** seçebilirsin. Ardından **Konsol Uygulaması** şablonunu seçerek proje adı ve konumunu belirle.

### Anlamlı proje adı kullan

`YeniProje1` yerine `IlkKonsolUygulamam` gibi ne yaptığını anlatan bir ad seç. Proje klasörünü daha sonra kolay bulabileceğin bir yerde tut. Okul bilgisayarında öğretmenin belirlediği klasör yapısına uy.

### İlk kodu oku

Yeni .NET konsol şablonunda sürüme göre kod yapısı değişebilir. Temel amaç konsola bir çıktı vermektir. Örneğin:

```csharp
Console.WriteLine("Merhaba BİLSEM!");
```

Bu satır, konsol penceresine metin yazar. Burada amaç C# dilini ayrıntılı öğrenmek değil; Visual Studio'da dosya düzenleme ve çalıştırma akışını tanımaktır.

## 5. Kod düzenleyici, IntelliSense ve kaydetme

### IntelliSense yardımcı olur ama karar vermez

Visual Studio yazarken tür, üye veya yöntem önerileri gösterebilir. **IntelliSense**, yazımı hızlandıran ve olası üyeleri gösteren bir yardımcıdır; önerinin programın amacı için doğru olduğuna yine geliştirici karar verir.

### Hata alt çizgelerini oku

Sözdizimi veya başka bir sorun olduğunda düzenleyicide işaretler görülebilir. Hata mesajını kapatmak yerine ne söylediğini oku. Satır numarası, dosya adı ve hata açıklaması sorunu bulmayı kolaylaştırır.

### Kaydetme alışkanlığı

Dosyayı düzenledikten sonra kaydet. Visual Studio bazı işlemlerde kaydetmeyi önerebilir ancak öğrenci olarak **değiştir → kaydet → çalıştır → sonucu kontrol et** düzeni edinmek önemlidir.

## 6. Derleme, çalıştırma ve temel hata ayıklama

### Derleme ile çalıştırma aynı şey değildir

**Derleme (build)**, kaynak kodu hedef uygulamaya dönüştürür ve derleme hatalarını ortaya çıkarır. **Çalıştırma**, başarıyla derlenebilen uygulamanın yürütülmesidir. Bir programın derlenmesi, yaptığı işin mantıksal olarak doğru olduğu anlamına gelmez.

### F5 ve Ctrl+F5 farkı

Microsoft belgelerinde **F5**, uygulamayı hata ayıklayıcı altında başlatmak; **Ctrl+F5** ise hata ayıklama olmadan başlatmak için kullanılan temel yollardır. Hata ayıklayıcı, programın çalışmasını adım adım incelemek gerektiğinde kullanılır.

### Kesme noktası nedir?

**Kesme noktası (breakpoint)** program belirli bir satıra geldiğinde yürütmeyi duraklatmaya yarar. Durduğunda değişken değerlerini inceleyebilir ve programın beklediğin yolu izleyip izlemediğini görebilirsin. Hata ayıklama, rastgele kod değiştirmekten daha sistematik bir yöntemdir.

## 7. Birlikte uygulayalım: ilk Visual Studio projesi

<div class="practice-panel" markdown="1">

1. Visual Studio'nun Türkçe arayüzle açıldığını kontrol et.
2. **Yeni proje oluştur** ekranında C# için **Konsol Uygulaması** şablonunu seç.
3. Projeye `BilsemIlkProje` adını ver ve öğretmenin belirlediği klasöre kaydet.
4. **Çözüm Gezgini**nden `Program.cs` dosyasını bul.
5. Konsola kendi adını veya `Merhaba BİLSEM!` metnini yazdıran satırı oluştur.
6. Dosyayı kaydet ve **Ctrl+F5** ile hata ayıklama olmadan çalıştır.
7. Sonucu gözlemle; ardından **F5** ile hata ayıklayıcı altında çalıştırmayı dene.
8. Bilerek bir tırnak işaretini sil, oluşan hatayı oku; sonra hatayı düzelt ve yeniden çalıştır.
9. Çözüm Gezgini'nde çözüm, proje ve kaynak dosya arasındaki farkı arkadaşına açıklayabil.

</div>

## 8. Sık yapılan hatalar ve ders özeti

<div class="mistake-panel" markdown="1">

- Visual Studio ile Visual Studio Code'u aynı program sanmak.
- Proje şablonu görünmediğinde gerekli iş yükünü kontrol etmemek.
- Çözüm ile projeyi aynı kavram sanmak.
- Hata mesajını okumadan kodu rastgele değiştirmek.
- Derleme başarılıysa programın mantığının da kesin doğru olduğunu düşünmek.
- `bin`/`obj` gibi oluşturulan çıktıları kaynak dosya sanıp düzenlemek.
- İnternetten alınan kodu ne yaptığını anlamadan çalıştırmak.

</div>

**Ders sonunda:** Visual Studio'nun bir IDE olduğunu açıklayabilmeli; Türkçe dil paketinin ve iş yükünün nereden yönetildiğini bilmeli; çözüm/proje/dosya ayrımını yapabilmeli; C# konsol projesi oluşturup kaydedebilmeli; F5 ile Ctrl+F5'in temel farkını ve hata ayıklamanın amacını açıklayabilmelisin.

<details class="source-note"><summary>Kaynak kontrolü</summary><p>Bu ders Microsoft Learn'ün güncel Visual Studio kurulum, dil paketi, proje/çözüm, C# konsol uygulaması ve çalıştırma-hata ayıklama belgeleriyle karşılaştırılmıştır. Visual Studio Türkçeyi destekler; iş yükleri Visual Studio Yükleyicisi'nden değiştirilebilir; .NET konsol projesi akışı ve F5/Ctrl+F5 davranışları resmî belgelerle doğrulanmıştır. Menü adlarında sürüme bağlı küçük farklılıklar olabilir.</p></details>
