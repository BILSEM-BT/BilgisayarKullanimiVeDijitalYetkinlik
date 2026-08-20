---
title: WinRAR, 7-Zip ve Sıkıştırılmış Dosyalar
module_id: 30
updated: '2026-08-21'
summary: ZIP, RAR ve 7z gibi arşiv dosyalarını güvenli biçimde açmayı, çıkarmayı, yeni arşiv oluşturmayı ve sıkıştırma ile şifreleme arasındaki farkı öğreniyoruz.
quiz: /uygulamalar/5-1-winrar-7zip-ve-sikistirilmis-dosyalar/
permalink: /dersler/5-1-winrar-7zip-ve-sikistirilmis-dosyalar/
---
<div class="lesson-goals" markdown="1">

**Bu derste ne öğreneceğiz?**

Birden fazla dosyayı tek paket hâline getiren **arşiv** kavramını; ZIP, RAR ve 7z biçimlerini; **WinRAR** ve **7-Zip** ile dosya çıkarma ve arşiv oluşturma işlemlerini öğreneceğiz. Ayrıca parola ile şifrelenmiş arşivlerin neyi koruduğunu ve internetten indirilen arşivleri açarken hangi güvenlik kontrollerinin yapılması gerektiğini uygulayacağız.

</div>

<div class="archive-flow" aria-label="Arşivleme akışı"><span>Dosya ve klasörler</span><i>→</i><span>Arşivle / sıkıştır</span><i>→</i><span>.zip / .7z / .rar</span><i>→</i><span>Çıkar ve kullan</span></div>

## 1. Arşiv ve sıkıştırma ne işe yarar?

### Arşiv, dosyaları tek pakette toplar

Bir proje klasöründe metin, görsel, ses ve alt klasörler olabilir. Bunları tek tek göndermek yerine **tek bir arşiv dosyası** içinde toplamak düzeni korur. Arşiv dosyası, içindeki klasör yapısını da saklayabilir.

### Sıkıştırma her dosyada aynı sonucu vermez

Metin ve bazı ham veri dosyaları önemli ölçüde küçülebilir. JPEG, MP3 veya MP4 gibi zaten sıkıştırılmış biçimlerde ise ek sıkıştırmanın kazancı az olabilir. Bu nedenle “arşivlemek” ile “dosyanın kesin olarak çok küçülmesi” aynı şey değildir.

### Arşiv ile yedek aynı şey değildir

Arşiv, dosyaları paketler; **yedekleme** ise verinin ayrı bir kopyasını güvenli başka bir konumda tutma stratejisidir. Tek bir `.zip` dosyasını aynı diskte bırakmak gerçek bir yedek planı sayılmaz.

<div class="format-card-grid"><div><b>ZIP</b><span>Yaygın uyumluluk; Windows tarafından da temel düzeyde açılabilir.</span></div><div><b>7z</b><span>7-Zip'in güçlü sıkıştırma ve AES-256 şifreleme destekli biçimi.</span></div><div><b>RAR</b><span>WinRAR'ın yerel arşiv biçimi; çok parçalı arşiv gibi özellikler sunar.</span></div><div><b>Klasör</b><span>Arşiv değildir; dosyaları düzenler ama tek paket oluşturmaz.</span></div></div>

## 2. ZIP, 7z ve RAR biçimlerini tanıyalım

### Dosya uzantısı bize ipucu verir

`proje.zip`, `fotograflar.7z` veya `arsiv.rar` adlarının sonundaki bölüm dosya türünü gösterir. Windows dosya uzantılarını gizliyorsa Dosya Gezgini'nde **dosya adı uzantılarını gösterme** seçeneği açılabilir.

### Hangi program hangi biçimi kullanır?

7-Zip, ZIP ve 7z arşivlerini oluşturabilir; birçok arşiv türünü açabilir ve RAR arşivlerini çıkarabilir. WinRAR, RAR ve ZIP arşivlerini oluşturup açabilir ve 7z dahil birçok biçimi çıkarabilir. Program sürümüne göre menü adları değişse de temel işlem aynıdır: **arşivi aç → hedef klasörü seç → çıkar**.

### Çok parçalı arşiv nedir?

Büyük bir arşiv `part1.rar`, `part2.rar` gibi bölümlere ayrılabilir. Parçaların tamamı aynı klasörde bulunmalı ve çıkarma genellikle **ilk parçadan** başlatılmalıdır. Bir parça eksikse arşiv tamamlanamayabilir.

## 3. Arşiv dosyası nasıl güvenli biçimde çıkarılır?

### Önce içeriği incele

İnternetten gelen bir arşivi doğrudan çalıştırmak yerine önce kaynağını ve dosya adlarını kontrol et. Beklediğin bir belge yerine `.exe`, `.msi`, `.bat`, `.cmd`, `.js` gibi çalıştırılabilir dosyalar görüyorsan özellikle dikkatli ol.

<div class="app-demo" aria-label="Arşiv yöneticisi şeması"><div class="app-demo-titlebar"><b>proje.zip</b><span>Arşiv yöneticisi</span></div><div class="app-demo-toolbar"><span>Ekle</span><span>Çıkar</span><span>Test et</span><span>Sil</span><span>Bilgi</span></div><div class="app-demo-body"><div class="app-demo-sidebar"><span>Belgeler</span><span>İndirilenler</span><span>Projeler</span></div><div class="app-demo-stage"><div class="archive-files"><div><b>rapor.pdf</b><span>1,8 MB</span></div><div><b>sunum.pptx</b><span>4,2 MB</span></div><div><b>gorseller/</b><span>Klasör</span></div><div><b>baslat.exe</b><span>Dikkat!</span></div></div></div></div></div>

### “Buraya çıkar” ve “klasöre çıkar” farkı

- **Buraya çıkar:** dosyaları bulunduğun klasörün içine dağıtır.
- **`ArşivAdı\` klasörüne çıkar:** ayrı bir klasör oluşturduğu için genellikle daha düzenlidir.
- **Çıkar... / Extract to...:** hedef klasörü sen seçersin.

Çok sayıda dosya içeren arşivlerde ayrı klasöre çıkarmak karışıklığı azaltır.

### Arşivden dosyayı çalıştırmak yerine çıkar

Bazı programlar arşivin içindeki dosyayı geçici konuma açıp çalıştırabilir. Ancak dosyanın yanında bulunması gereken başka dosyalar varsa sorun çıkabilir. Önce arşivin tamamını güvenli bir klasöre **çıkar**, sonra gerekli dosyayı kullan.

## 4. Yeni ZIP, 7z veya RAR arşivi nasıl oluşturulur?

### Dosyaları seç ve arşiv komutunu kullan

Göndermek istediğin dosya/klasörleri seçtikten sonra sağ tık menüsündeki 7-Zip veya WinRAR komutlarıyla yeni arşiv oluşturabilirsin. Windows'un yerleşik ZIP özelliği de temel ZIP oluşturma işlemleri için yeterlidir.

### Arşiv adını anlamlı yaz

`Yeni klasör (3).zip` yerine `robotik-projesi-grup2.zip` gibi açıklayıcı bir ad kullan. Dosya adında tarih gerekiyorsa `2026-08-21_proje.zip` gibi sıralanabilir bir biçim tercih edilebilir.

### Sıkıştırma düzeyi: hız ile boyut arasında seçim

Daha yüksek sıkıştırma düzeyi daha küçük dosya üretebilir ancak daha fazla işlemci zamanı kullanabilir. Günlük okul dosyalarında varsayılan/normal düzey çoğu zaman yeterlidir.

## 5. Parolalı arşiv ve şifreleme ne sağlar?

### Parola, içeriğin gizliliğini koruyabilir

7z biçimi ve WinRAR'ın desteklediği bazı arşiv biçimleri güçlü şifreleme seçenekleri sunabilir. **Parolayı unutursan arşivi açamayabilirsin.** Bu nedenle parola yönetimi ayrı bir sorumluluktur.

### Şifreleme zararlı dosyayı güvenli yapmaz

Parolalı bir arşivin içindeki dosya da zararlı olabilir. Şifreleme yalnızca yetkisiz kişilerin içeriği okumasını zorlaştırır; dosyanın güvenilir olduğunu kanıtlamaz.

### Parolayı aynı kanaldan göndermeme ilkesi

Hassas bir arşiv ile parolasını aynı e-posta veya aynı mesaj içinde paylaşmak korumayı zayıflatır. Kurum kurallarına uygun biçimde ayrı ve güvenli bir kanal kullanılmalıdır.

## 6. Bozuk, şüpheli veya açılmayan arşivlerde ne yapmalıyız?

### “Arşiv bozuk” hatası

İndirme yarım kalmış, çok parçalı arşivin bir parçası eksik veya dosya zarar görmüş olabilir. Önce dosya boyutunu ve kaynağı kontrol et; gerekiyorsa güvenilir kaynaktan yeniden indir.

### Parola isteyen beklenmedik arşiv

Tanımadığın kişiden gelen “fatura”, “ödül”, “fotoğraf” gibi parolalı arşivler güvenlik yazılımlarının içeriği incelemesini zorlaştırmak için de kullanılabilir. Göndericiyi doğrulamadan açma.

### Kaynak ve amaç kontrolü

Şu üç soruyu sor:

1. Bu dosyayı **bekliyor muydum**?
2. Gönderen kişi/kurum gerçekten **doğrulanabilir mi**?
3. Arşivin içindeki dosya türleri **beklediğim işle uyumlu mu**?

## 7. Birlikte uygulayalım: proje arşivi oluştur ve çıkar

<div class="practice-panel" markdown="1">

1. `BOLUM5-UYGULAMA` adlı bir klasör oluştur.
2. İçine bir metin belgesi, bir görsel ve `kaynaklar` adlı alt klasör ekle.
3. Klasörü önce **ZIP** olarak arşivle.
4. Aynı klasörü 7-Zip kullanıyorsan **7z** biçiminde de arşivle.
5. Arşivlerin dosya boyutlarını karşılaştır; neden aynı olmayabileceğini açıkla.
6. ZIP arşivini yeni bir `cikarilan` klasörüne çıkar.
7. Klasör yapısının ve dosyaların eksiksiz geldiğini kontrol et.
8. Öğretmenin verdiği örnek arşivde çalıştırılabilir bir dosya varsa **çalıştırmadan** yalnızca uzantısını tespit et.

</div>

## 8. Sık yapılan hatalar ve ders özeti

<div class="mistake-panel" markdown="1">

- Arşiv dosyasını yedekleme ile aynı şey sanmak.
- Çok dosyalı arşivi “Buraya çıkar” deyip klasörü karıştırmak.
- İnternetten gelen `.exe` dosyasını yalnızca ZIP içinden çıktığı için güvenli sanmak.
- Çok parçalı RAR arşivinin yalnızca bir parçasını indirmek.
- Parolalı arşivin zararlı yazılıma karşı otomatik olarak güvenli olduğunu düşünmek.
- Arşiv parolasını unutmak veya arşivle aynı yerde açıkça saklamak.

</div>

**Ders sonunda:** ZIP, 7z ve RAR arasındaki temel farkı açıklayabilmeli; arşiv oluşturup güvenli klasöre çıkarabilmeli; parolalı arşiv ile güvenilir dosya kavramlarını ayırabilmeli ve şüpheli arşivlerde kaynak/uzantı kontrolü yapabilmelisin.

<details class="source-note"><summary>Kaynak kontrolü</summary><p>İçerik hazırlanırken 7-Zip'in resmî biçim/özellik sayfaları ve RARLAB WinRAR belgeleri kontrol edilmiştir. 2026 sürümlerinde 7-Zip 7z/ZIP oluşturma ve birçok biçimi çıkarma; WinRAR ise RAR/ZIP oluşturma ve 7z dahil çeşitli biçimleri çıkarma desteği sunmaktadır. Menü adları işletim sistemi ve sürüme göre değişebilir.</p></details>
