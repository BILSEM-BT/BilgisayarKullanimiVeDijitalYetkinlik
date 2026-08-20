---
title: Audacity ile Ses Kaydı ve Düzenleme
module_id: 35
updated: '2026-08-21'
summary: Audacity ile mikrofon kaydı almayı, dalga biçimini okumayı, seçme-kesme-bölme gibi temel düzenlemeleri yapmayı ve proje ile dışa aktarılan ses dosyasını ayırmayı öğreniyoruz.
quiz: /uygulamalar/5-6-audacity-ile-ses-kaydi-ve-duzenleme/
permalink: /dersler/5-6-audacity-ile-ses-kaydi-ve-duzenleme/
---
<div class="lesson-goals" markdown="1">

**Bu derste ne öğreneceğiz?**

Ses kaydında mikrofon ve seviye kontrolünün neden önemli olduğunu; Audacity'de **waveform/dalga biçimi**, track/iz ve clip/klip kavramlarını öğreneceğiz. Kayıt alma, seçme, silme, bölme, klip taşıma, basit fade uygulama; `.aup3` proje dosyasını kaydetme ve MP3/WAV/FLAC gibi son kullanıcı ses biçimlerine **dışa aktarma** işlemlerini uygulayacağız.

</div>

<div class="media-flow"><span>Mikrofon / ses dosyası</span><i>→</i><span>Audacity projesi</span><i>→</i><span>Kes • böl • düzenle</span><i>→</i><span>.aup3 kaydet</span><i>→</i><span>MP3 / WAV / FLAC dışa aktar</span></div>

## 1. Dijital ses ve dalga biçimi

### Dalga biçimi sesi görselleştirir

Audacity'de ses, zaman ekseni üzerinde bir **waveform** olarak görünür. Büyük genlikli bölümler genellikle daha yüksek seslidir; ani sivri uçlar alkış, tıklama veya vurma gibi kısa sesleri gösterebilir.

<div class="app-demo" aria-label="Audacity dalga biçimi şeması"><div class="app-demo-titlebar"><b>Audacity</b><span>ses-projesi.aup3</span></div><div class="app-demo-toolbar"><span>⏺ Kayıt</span><span>▶ Oynat</span><span>⏹ Durdur</span><span>Seç</span><span>Böl</span><span>Yakınlaştır</span></div><div class="app-demo-body"><div class="app-demo-sidebar"><span>Audio Setup</span><span>Mikrofon</span><span>Çıkış</span></div><div class="app-demo-stage"><div class="waveform-demo"><div class="waveform-bars"><i style="--h:28px"></i><i style="--h:45px"></i><i style="--h:72px"></i><i style="--h:110px"></i><i style="--h:64px"></i><i style="--h:38px"></i><i style="--h:96px"></i><i style="--h:132px"></i><i style="--h:88px"></i><i style="--h:48px"></i><i style="--h:30px"></i><i style="--h:82px"></i><i style="--h:120px"></i><i style="--h:76px"></i><i style="--h:42px"></i><i style="--h:62px"></i><i style="--h:105px"></i><i style="--h:138px"></i><i style="--h:92px"></i><i style="--h:50px"></i><i style="--h:33px"></i><i style="--h:70px"></i><i style="--h:118px"></i><i style="--h:82px"></i><i style="--h:44px"></i><i style="--h:58px"></i><i style="--h:100px"></i><i style="--h:126px"></i><i style="--h:80px"></i><i style="--h:35px"></i><i style="--h:54px"></i><i style="--h:89px"></i><i style="--h:112px"></i><i style="--h:67px"></i><i style="--h:31px"></i><i style="--h:76px"></i><i style="--h:130px"></i><i style="--h:95px"></i><i style="--h:52px"></i><i style="--h:26px"></i></div></div></div></div></div>

### Örnekleme ve bit derinliği

Dijital ses, analog ses dalgasından belirli aralıklarla örnekler alınarak temsil edilir. Başlangıç düzeyinde günlük kullanım için ayrıntılı matematik gerekmez; önemli olan **kaynak kalitesi, kayıt seviyesi ve doğru çıktı biçimi**dir.

### Mono ve stereo

Tek konuşmacı kaydında mono çoğu zaman yeterlidir. Müzik ve yön hissi gereken kayıtlarda stereo kullanılabilir. Gereksiz stereo, konuşma kaydında dosya boyutunu artırabilir.

## 2. Mikrofon ve kayıt seviyesini hazırlama

### Doğru giriş aygıtını seç

Audacity'nin Audio Setup bölümünde kayıt aygıtı olarak gerçek mikrofonu seç. Dizüstünde dahili mikrofon ve USB mikrofon aynı anda listelenebilir.

### Kısa test kaydı yap

Kayıttan önce 5–10 saniyelik deneme al. Normal konuşma sesinde göstergelerin sürekli kırmızıya vurması **clipping** riskini gösterir; çok düşük seviye ise sonradan sesi yükseltirken gürültüyü belirginleştirebilir.

### Ortamı hazırla

- fan/klima gürültüsünü azalt,
- mikrofonu ağza aşırı yaklaştırma,
- masaya çarpma ve klavye sesini azalt,
- bildirim ve telefon seslerini kapat.

Resmî Audacity mikrofon rehberi de kayıttan önce normal sesle seviye kontrolü ve test kayıt önerir.

## 3. Kayıt alma ve oynatma

### Record, Stop ve Play

Kırmızı kayıt düğmesi kaydı başlatır. Kaydı bitirirken **Stop** kullan; sonra baştan dinleyerek kaliteyi kontrol et. Hata varsa uzun kayda devam etmek yerine erken fark etmek daha kolaydır.

### İmleç ve seçim

Waveform üzerinde tıklamak oynatma/düzenleme imlecini yerleştirir. Sürükleyerek belirli zaman aralığı seçilir. Silme, efekt veya dışa aktarma işlemleri seçili bölgeye uygulanabilir.

### Yakınlaştırma

Kesilecek nefes veya tıklama sesinin başlangıç/bitişini hassas seçmek için waveform'u yakınlaştır. Audacity destek belgeleri hassas seçim için `Ctrl + Scroll` gibi yakınlaştırma yöntemlerini de açıklar.

## 4. Kesme, silme, bölme ve kliplerle çalışma

### İstenmeyen bölümü sil

Bölgeyi seçip Delete/Backspace ile kaldırabilirsin. Cümlenin ortasından çok fazla boşluk silmek konuşmayı yapaylaştırabilir; doğal ritmi koru.

### Split / Böl

Audacity'de sesi bağımsız kliplere ayırmak için Split Clip kullanılabilir. Resmî destek belgelerinde Audacity 3 için `Ctrl+I`, Audacity 4 arayüzünde ise ayrıca makas/split aracı gibi seçenekler açıklanır. Sürüm değişse de kavram aynıdır: **tek parçayı iki bağımsız klibe bölmek**.

### Klip taşıma

Klipler zaman çizgisi üzerinde taşınarak sıralama değiştirilebilir. Taşırken üst üste bindirme veya istenmeyen sessizlik bırakma ihtimaline karşı baştan sona dinle.

## 5. Basit ses iyileştirme ve efektler

### Fade In / Fade Out

Bir sesin başında yumuşak giriş, sonunda yumuşak çıkış için fade efektleri kullanılabilir. Ani kesilmeyi azaltır.

### Gürültü azaltma dikkat ister

Gürültü azaltma aracı yardımcı olabilir; ancak çok güçlü uygulamak sesi metalik/yapay hâle getirebilir. Öncelik **iyi kayıt ortamıdır**; efekt kötü kaydı tamamen kurtaran sihirli düğme değildir.

### Ses seviyesini aşırı yükseltme

Düşük kaydı çok fazla yükseltmek arka plan gürültüsünü de artırır. Kayıt seviyesini baştan doğru ayarlamak en iyi çözümdür.

## 6. Projeyi kaydetmek ve sesi dışa aktarmak

### AUP3 proje dosyası

Audacity'nin proje dosyası `.aup3`, düzenleme yapısını korur. Resmî destek, aktif projelerin yavaş/kararsız USB veya ağ depolamasında çalıştırılmamasını; düzenleme sırasında hızlı ve kesintisiz depolama kullanılmasını önerir.

### Export Audio

Dinleyiciye verilecek MP3/WAV/FLAC gibi dosya **File → Export Audio** üzerinden oluşturulur. Projeyi kaydetmek ile ses dosyasını dışa aktarmak farklı işlemlerdir.

<div class="format-card-grid"><div><b>MP3</b><span>Yaygın ve küçük; kayıplı sıkıştırma.</span></div><div><b>WAV</b><span>Yüksek uyumluluk; çoğu kullanımda büyük dosya.</span></div><div><b>FLAC</b><span>Kayıpsız sıkıştırma; arşiv/kalite için yararlı.</span></div><div><b>AUP3</b><span>Audacity çalışma projesi; normal müzik çalarda son çıktı değildir.</span></div></div>

### Dosya adı ve meta bilgiler

`ses1.mp3` yerine `bilsem-podcast-giris-v1.mp3` gibi anlamlı ad kullan. Başkasına ait müzik veya kayıt eklenecekse kullanım hakkını kontrol et.

## 7. Birlikte uygulayalım: 30 saniyelik ses kaydı

<div class="practice-panel" markdown="1">

1. Audacity'de doğru mikrofon girişini seç.
2. 5 saniyelik test kaydı yap ve seviyeyi kontrol et.
3. “Bugün Audacity ile ses düzenlemeyi öğreniyorum.” cümlesini ve kısa bir açıklamayı toplam 20–30 saniye kaydet.
4. Başta ve sonda gereksiz sessizliği seçip kaldır.
5. Bir cümleyi Split ile ayrı klibe böl ve küçük bir konum değişikliği yap.
6. Başlangıca kısa Fade In, sona Fade Out uygula.
7. Projeyi `ses-uygulamasi.aup3` olarak kaydet.
8. Sonucu `ses-uygulamasi.mp3` veya öğretmenin istediği biçimde dışa aktar; proje ve çıktı dosyasını karşılaştır.

</div>

## 8. Sık yapılan hatalar ve ders özeti

<div class="mistake-panel" markdown="1">

- Yanlış mikrofonla uzun kayıt almak.
- Kayıt seviyesi kırmızıya vururken devam etmek.
- Waveform'a bakmadan kesim noktalarını gelişigüzel seçmek.
- Gürültü azaltmayı aşırı uygulayıp sesi yapaylaştırmak.
- AUP3 proje dosyasını MP3/WAV gibi son kullanıcı ses dosyası sanmak.
- Projeyi yalnızca USB/ağ sürücüsünde çalıştırıp bağlantı kopması riskini artırmak.
- Telifli müzik veya başkasının ses kaydını izin durumunu değerlendirmeden kullanmak.

</div>

**Ders sonunda:** waveform'u temel düzeyde okuyabilmeli; mikrofon ve kayıt seviyesini kontrol ederek ses kaydı alabilmeli; seçme, silme, bölme ve klip taşıma işlemlerini yapabilmeli; AUP3 proje ile MP3/WAV/FLAC çıktısını ayırabilmelisin.

<details class="source-note"><summary>Kaynak kontrolü</summary><p>İçerik Audacity'nin resmî destek sayfalarındaki Recording your voice, Editing audio ve Saving and exporting projects bölümleriyle karşılaştırılmıştır. Audacity 4 arayüzü geliştikçe bazı düğme ve kısayol adları değişebileceğinden temel düzenleme kavramları esas alınmıştır.</p></details>
