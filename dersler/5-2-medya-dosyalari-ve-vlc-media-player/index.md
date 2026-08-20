---
title: Medya Dosyaları ve VLC Media Player
module_id: 31
updated: '2026-08-21'
summary: Ses ve video dosyalarında biçim, kapsayıcı ve codec kavramlarını ayırt etmeyi; VLC ile oynatma, altyazı ve temel medya kontrollerini kullanmayı öğreniyoruz.
quiz: /uygulamalar/5-2-medya-dosyalari-ve-vlc-media-player/
permalink: /dersler/5-2-medya-dosyalari-ve-vlc-media-player/
---
<div class="lesson-goals" markdown="1">

**Bu derste ne öğreneceğiz?**

Video ve ses dosyalarında yalnızca uzantıya bakmanın neden her zaman yeterli olmadığını; **kapsayıcı (container)**, **codec**, çözünürlük, kare hızı ve bit hızı gibi temel kavramları öğreneceğiz. Ardından **VLC media player** ile dosya açma, oynatma, ses/altyazı parçası seçme, harici altyazı ekleme ve temel sorun giderme işlemlerini uygulayacağız.

</div>

<div class="media-flow" aria-label="Medya oynatma mantığı"><span>Medya dosyası</span><i>→</i><span>Kapsayıcı</span><i>→</i><span>Video + ses + altyazı akışları</span><i>→</i><span>Codec ile çöz</span><i>→</i><span>Oynat</span></div>

## 1. Medya dosyası nedir?

### Ses ve video sayısal veridir

Bir ses kaydı veya video, bilgisayarda sayısal veri olarak saklanır. Dosya boyutunu ve kaliteyi; süre, çözünürlük, kare hızı, ses kanalları ve kullanılan sıkıştırma yöntemi etkiler.

### Uzantı bize dosyanın kapsayıcısını gösterebilir

`video.mp4`, `film.mkv`, `ses.mp3`, `kayit.wav` gibi uzantılar medya biçimi hakkında bilgi verir. Ancak özellikle video dosyalarında uzantı, içeride kullanılan **video ve ses codec'ini** tek başına söylemeyebilir.

<div class="media-card-grid"><div><b>MP4 / MKV</b><span>Video, ses ve bazen altyazı akışlarını aynı dosyada taşıyabilen kapsayıcılar.</span></div><div><b>MP3 / AAC</b><span>Kayıplı ses sıkıştırması için yaygın codec/biçim aileleri.</span></div><div><b>WAV / FLAC</b><span>WAV çoğu zaman sıkıştırılmamış PCM; FLAC kayıpsız sıkıştırma için kullanılır.</span></div><div><b>SRT</b><span>Zaman kodlu metin tabanlı harici altyazı dosyası.</span></div></div>

## 2. Kapsayıcı ve codec farkı

### Kapsayıcı bir kutu gibidir

MP4 veya MKV'yi, içinde farklı akışların bulunduğu bir kutu gibi düşünebilirsin. Bir dosyada:

- video görüntüsü,
- bir veya birden fazla ses dili,
- bir veya birden fazla altyazı,
- bölüm ve meta veriler

bulunabilir.

### Codec veriyi kodlar ve çözer

Codec, görüntü veya sesi daha verimli saklamak ve oynatmak için kullanılan kodlama/çözme yöntemidir. Aynı `.mp4` kapsayıcısında farklı video codec'leri bulunabilir. Bir oynatıcı dosyayı açamıyorsa sorun her zaman “dosya bozuk” değildir; codec veya donanım desteği de etkili olabilir.

### Kaliteyi tek bir sayı belirlemez

Yüksek çözünürlük otomatik olarak yüksek kalite demek değildir. Bit hızı çok düşükse 4K video bile bloklu görünebilir. Benzer şekilde yüksek bit hızlı 1080p video bazı durumlarda daha iyi görünebilir.

## 3. VLC ile medya dosyası açma ve oynatma

### Dosyayı açmanın yolları

VLC'de dosya menüsünden medya açabilir, dosyayı VLC penceresine sürükleyebilir veya Dosya Gezgini'nden “Birlikte aç” seçeneğini kullanabilirsin. VLC, Windows, macOS ve Linux'ta kullanılan açık kaynaklı bir medya oynatıcıdır.

<div class="app-demo" aria-label="VLC oynatıcı şeması"><div class="app-demo-titlebar"><b>VLC media player</b><span>video.mp4</span></div><div class="app-demo-toolbar"><span>Medya</span><span>Oynatım</span><span>Ses</span><span>Video</span><span>Altyazı</span><span>Araçlar</span></div><div class="app-demo-body"><div class="app-demo-sidebar"><span>Oynatma listesi</span><span>Medya kitaplığı</span><span>Bilgisayarım</span></div><div class="app-demo-stage"><div class="player-screen"><strong>Görüntü alanı</strong><span>Oynat / duraklat • zaman çizgisi • ses</span></div></div></div></div>

### Temel kontroller

Oynat/duraklat, zaman çizgisi, ses seviyesi ve tam ekran kontrolleri günlük kullanımın temelidir. Klavye kısayolları sürüme ve ayarlara göre değişebileceği için önce arayüzdeki işlevi tanımak önemlidir.

### Oynatma listesi

Birden çok dosyayı sırayla izlemek/dinlemek için oynatma listesi kullanılabilir. Dosya adlarını anlamlı tutmak sıralamayı kolaylaştırır.

## 4. Ses parçaları ve altyazılar

### Bir videoda birden çok ses dili olabilir

VLC'nin **Ses / Audio Track** benzeri menüsünden mevcut ses parçası seçilebilir. Film dosyasında Türkçe ve İngilizce ses aynı kapsayıcı içinde bulunabilir.

### Gömülü ve harici altyazı

Altyazı video dosyasının içinde gömülü olabilir veya ayrı `.srt` dosyası olarak gelebilir. Harici altyazı eklemek için VLC'nin altyazı menüsündeki dosya ekleme seçeneği kullanılabilir.

### Altyazı senkronu

Altyazı konuşmadan önce veya sonra geliyorsa VLC gecikme ayarıyla senkron düzeltilebilir. Resmî VLC belgelerinde Windows/Linux'ta `g` ve `h` tuşlarıyla altyazı gecikmesini adım adım değiştirme desteği açıklanır; kısayollar kişisel ayarlara göre değiştirilebilir.

## 5. Çözünürlük, oran ve görüntü kalitesi

### Çözünürlük piksel boyutudur

1920×1080 gibi değerler video karesinin piksel boyutunu gösterir. Çözünürlük yükseldikçe ayrıntı potansiyeli artar ancak dosya boyutu ve donanım gereksinimi de artabilir.

### En-boy oranını gereksiz değiştirme

16:9 videoyu 4:3'e zorlamak görüntüyü yatay/dikey esnetebilir. Siyah bant görmek her zaman hata değildir; videonun özgün oranını korumak çoğu zaman daha doğrudur.

### Takılma olduğunda olası nedenler

- cihazın çözme gücü yetersiz olabilir,
- dosya bozuk/eksik olabilir,
- ağ üzerinden izleniyorsa bağlantı yavaş olabilir,
- depolama aygıtı çok yavaş olabilir,
- donanım hızlandırma/codec uyumluluğu sorun çıkarabilir.

Sorunu çözmek için önce başka bir dosyayla ve başka bir oynatıcıyla karşılaştırma yapmak yararlıdır.

## 6. Güvenli ve düzenli medya kullanımı

### Dosya uzantısını görünür tut

`video.mp4.exe` gibi çift uzantılı dosyalar yanıltıcı olabilir. Medya beklerken çalıştırılabilir dosya görürsen açma.

### Telif ve kişisel veri

Bir videoyu oynatabilmek, onu istediğin yerde paylaşabileceğin anlamına gelmez. Telif hakkı, kişisel görüntüler ve okul/kurum kuralları paylaşım kararından önce değerlendirilmelidir.

### Ses seviyesini koru

Kulaklıkta sürekli yüksek ses dinlemek işitme sağlığı açısından risklidir. Oynatıcı sesini ve sistem sesini gereksiz yere en yükseğe çıkarmamak iyi bir alışkanlıktır.

## 7. Birlikte uygulayalım: VLC medya incelemesi

<div class="practice-panel" markdown="1">

Öğretmenin verdiği örnek medya dosyalarıyla çalışalım.

1. Bir MP4 veya MKV dosyasını VLC'de aç.
2. Oynat/duraklat, zaman çizgisinde ileri-geri git ve tam ekranı dene.
3. Varsa farklı **ses parçasını** seç.
4. Varsa gömülü altyazı parçasını aç/kapat.
5. Öğretmenin verdiği `.srt` dosyasını harici altyazı olarak ekle.
6. Altyazının erken/geç olması durumunda senkron ayarının nerede olduğunu bul.
7. Dosyanın uzantısını, çözünürlüğünü ve süresini not et.
8. “Kapsayıcı” ile “codec” arasındaki farkı bir cümleyle yaz.

</div>

## 8. Sık yapılan hatalar ve ders özeti

<div class="mistake-panel" markdown="1">

- MP4 ile codec'i aynı şey sanmak.
- Yüksek çözünürlüğün tek başına kalite garantisi olduğunu düşünmek.
- Altyazı açılmadığında dosyanın adını/konumunu ve altyazı parçasını kontrol etmemek.
- Görüntüyü en-boy oranını bozacak biçimde esnetmek.
- Medya dosyası beklerken `.exe` gibi çalıştırılabilir dosyaları açmak.
- Bir videoyu oynatabildiği için telif ve paylaşım hakkının otomatik olarak kendisine ait olduğunu sanmak.

</div>

**Ders sonunda:** kapsayıcı ile codec'i ayırabilmeli; çözünürlük, bit hızı ve altyazı kavramlarını temel düzeyde açıklayabilmeli; VLC ile medya açıp ses/altyazı parçalarını yönetebilmeli ve açılmayan dosyada temel sorun giderme adımlarını uygulayabilmelisin.

<details class="source-note"><summary>Kaynak kontrolü</summary><p>İçerik VideoLAN'ın resmî VLC kullanıcı belgeleri, oynatma ve altyazı rehberleriyle karşılaştırılmıştır. Menü adları ve bazı kısayollar VLC sürümüne göre değişebileceğinden temel medya kavramları ve işlevler merkeze alınmıştır.</p></details>
