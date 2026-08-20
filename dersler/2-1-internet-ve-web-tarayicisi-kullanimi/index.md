---
title: İnternet ve Web Tarayıcısı Kullanımı
module_id: 8
updated: '2026-08-20'
summary: İnternet, Wi-Fi ve web ayrımını; tarayıcı, URL, sekmeler, yer imleri, geçmiş, site izinleri, güvenli gezinme ve temel bağlantı sorunlarını günlük kullanım üzerinden öğreniyoruz.
quiz: /uygulamalar/2-1-internet-ve-web-tarayicisi-kullanimi/
permalink: /dersler/2-1-internet-ve-web-tarayicisi-kullanimi/
---
<div class="lesson-goals" markdown="1">

**Bu derste ne öğreneceğiz?**

İnternet, Wi-Fi ve web kavramlarını birbirinden ayıracak; web tarayıcısında adres çubuğu, sekmeler, geçmiş, yer imleri, indirmeler ve site izinlerini güvenli biçimde kullanacağız. Amaç ağ mühendisliği ayrıntılarına girmek değil, günlük internet kullanımında **nerede olduğumuzu, hangi siteye bağlandığımızı ve bir sorun olduğunda neyi kontrol edeceğimizi** anlayabilmektir.

</div>

<div class="browser-demo" aria-label="Web tarayıcısının şematik görünümü">
  <div class="browser-tabs"><span class="active">Ders Portalı</span><span>Yeni sekme</span></div>
  <div class="browser-bar"><span>Geri</span><span>İleri</span><span>Yenile</span><strong>https://example.com/dersler</strong></div>
  <div class="browser-page"><strong>Web sayfası</strong><p>Adres çubuğu, sekmeler ve sayfa içeriği birbirinden farklı alanlardır.</p></div>
</div>

## İnternet, Wi-Fi ve web aynı şey değildir

### Ağ nedir?

Bir **bilgisayar ağı**, iki veya daha fazla cihazın veri ve kaynak paylaşmak için iletişim kurduğu yapıdır. Ağa bilgisayar, telefon, yazıcı, sunucu, kamera ve IoT cihazı gibi pek çok sistem bağlanabilir.

Ağın amacı yalnızca internete çıkmak değildir. Aynı yerel ağdaki cihazlar internet bağlantısı olmasa bile birbirleriyle iletişim kurabilir.

### İnternet nedir?

**İnternet**, birbirine bağlı çok sayıda bağımsız ağın ortak protokoller üzerinden haberleştiği küresel bir “ağlar ağı”dır. Tek bir şirketin, tek bir veri merkezinin veya tek bir sunucunun sistemi değildir.

```text
Ev ağı ─┐
Okul ağı ├─ İnternet ─ Veri merkezleri
Mobil ağ ─┘
```

### Yerel ağ ve internet aynı şey değildir

Bir cihaz Wi‑Fi yönlendiriciye bağlı olduğu hâlde internet erişimi olmayabilir. Bu durumda cihaz ile yerel router arasındaki bağlantı çalışırken router ile servis sağlayıcı arasındaki bağlantı bozuk olabilir.

Sorun giderirken “Wi‑Fi bağlı mı?” ve “İnternet erişimi var mı?” sorularını ayrı değerlendirmek gerekir.

### Wi‑Fi

Wi‑Fi cihazların radyo dalgalarıyla yerel ağa bağlanmasını sağlar. Wi‑Fi internetin kendisi değildir. Güçlü Wi‑Fi sinyali, servis sağlayıcı tarafında internet kesintisi olmayacağını garanti etmez.

### Modem, ONT ve erişim cihazı

Servis sağlayıcının erişim teknolojisine göre DSL modem, kablo modem veya fiber bağlantıda ONT gibi cihazlar kullanılabilir. Bu aygıtlar servis sağlayıcının fiziksel erişim teknolojisini yerel ağ tarafına taşır.

### Router ne yapar?

**Router — yönlendirici**, farklı IP ağları arasında paketleri yönlendirir. Ev tipi router aynı kutuda Wi‑Fi erişim noktası, küçük switch, DHCP, NAT ve firewall gibi birden çok işlevi de birleştirebilir.

### DNS

**Domain Name System (DNS)**, alan adlarını IP adresleri ve başka kayıtlarla ilişkilendirir. `www.example.com` yazıldığında sistem uygun DNS kayıtlarını çözerek hedef sunucuyu bulmaya yardım eder.

### DHCP

DHCP istemcilere otomatik ağ yapılandırması dağıtabilir. Cihaz DHCP üzerinden IP adresi, ağ maskesi/prefix, default gateway ve DNS sunucusu gibi bilgileri alabilir.

### Default gateway

Yerel subnet dışındaki hedeflere giden trafik çoğunlukla default gateway olarak tanımlanan router'a gönderilir. Gateway yanlışsa aynı yerel ağdaki cihazlar görülebilirken internet erişimi başarısız olabilir.

### ISP

**Internet Service Provider — İnternet Servis Sağlayıcısı**, kullanıcının ağını internet omurgasına bağlayan erişim hizmetini sağlar. Fiber, DSL, kablo veya mobil erişim gibi teknolojiler kullanılabilir.

### Mbps ve MB/s

Ağ hızı çoğunlukla Mbps ile verilir. `8 bit = 1 byte` olduğundan 100 Mbps teorik olarak yaklaşık 12.5 MB/s ham veri oranına karşılık gelir. Protokol ek yükleri nedeniyle gerçek dosya hızı daha düşük olabilir.

### Latency

**Gecikme (latency)** verinin hedefe ulaşma/yanıtın dönme süresiyle ilgilidir ve çoğunlukla milisaniye ile ölçülür. Çevrim içi oyun ve görüntülü görüşmede düşük gecikme önemlidir.

### Jitter

Jitter gecikmenin zaman içindeki değişkenliğidir. Paketler 20 ms, 25 ms, 150 ms, 22 ms gibi düzensiz gelirse ses ve video akışında kesinti oluşabilir.

### Packet loss

Packet loss gönderilen paketlerin bir bölümünün hedefe ulaşmamasıdır. TCP yeniden iletim nedeniyle yavaşlayabilir; gerçek zamanlı ses/video uygulamalarında ise doğrudan kalite kaybı görülebilir.

<div class="board-note" markdown="1">

**Tahtada sor:** Bilgisayar Wi-Fi ağına bağlı görünüyor fakat hiçbir web sitesi açılmıyor. “Wi-Fi çalışıyor” demek “internet kesin çalışıyor” anlamına gelir mi?

Cevap: Hayır. Cihaz yerel ağa bağlı olabilir fakat router'ın internet bağlantısı, DNS veya servis sağlayıcı tarafında sorun bulunabilir.

</div>

## Web tarayıcısını ve adres çubuğunu tanıyalım

### Web tarayıcısı nedir?

Web tarayıcısı web sunucularından gelen içerikleri alıp kullanıcıya sunan istemci yazılımdır. Chrome, Edge, Firefox ve Safari örnektir. Tarayıcı internetin kendisi değildir; internet üzerindeki web hizmetlerine erişir.

### Adres çubuğu

Adres çubuğu hem URL girmek hem de çoğu tarayıcıda arama yapmak için kullanılabilir. `Ctrl + L` adres çubuğuna hızlı odaklanma kısayoludur.

### URL bileşenleri

`https://example.com/dersler?id=5#bolum` adresinde `https` scheme, `example.com` host, `/dersler` path, `id=5` query ve `bolum` fragment bölümüdür.

<div class="url-anatomy" aria-label="URL bileşenleri şeması">
  <span><b>https</b><small>protokol</small></span><i>://</i><span><b>www.example.com</b><small>alan adı</small></span><span><b>/dersler/2-1/</b><small>yol</small></span>
</div>

## Sekmeler, geçmiş, yer imleri ve sayfa içinde çalışma

### Sekmeler

Sekmeler aynı pencere içinde çok sayıda sayfayı açık tutar. `Ctrl+T` yeni sekme, `Ctrl+W` kapatma, `Ctrl+Shift+T` son kapatılan sekmeyi geri açma, `Ctrl+Tab` sonraki sekme için yaygın kısayollardır.

### Pencere ve sekme farkı

Sekme tek tarayıcı penceresindeki içerik alanıdır; `Ctrl+N` ayrı pencere açar. İki monitörde ayrı pencereler, çok kaynaklı araştırmada sekmeler avantaj sağlayabilir.

### Geri, ileri ve yenile

`Alt+Sol` önceki history girişine, `Alt+Sağ` sonraki history girişine gider. `Ctrl+R`/`F5` sayfayı yeniden yükler. Geri düğmesi her zaman sitenin ana sayfasına götürmez.

### Yer imleri

Yer imleri/Favoriler sık kullanılan URL'leri saklar. Yer imi sayfanın çevrim dışı kopyası değildir; kaynak kaldırılırsa link çalışmayabilir.

### Geçmiş

Tarayıcı geçmişi ziyaret edilen URL ve zaman gibi yerel verileri tutabilir. Geçmişi silmek, web sitesinin sunucu kayıtlarını veya hesap etkinliğini otomatik silmez.

### İndirmeler

`Ctrl+J` birçok tarayıcıda İndirilenler görünümünü açar. İndirilen dosyada kaynak, dosya adı, uzantı ve tarayıcı güvenlik uyarıları kontrol edilmelidir.

### Sayfada bul

`Ctrl+F` açık web sayfası içindeki metni arar; bütün interneti aramaz. Uzun belgelerde başlık veya teknik terim bulmak için çok etkilidir.

### Zoom

`Ctrl++`, `Ctrl+-`, `Ctrl+0` sayfanın gösterim ölçeğini değiştirir. Zoom monitör çözünürlüğünü değiştirmez.

<div class="practice-panel" markdown="1">

**Birlikte uygula:** Tarayıcıda üç sekme aç. Bir sekmeyi `Ctrl + W` ile kapat, `Ctrl + Shift + T` ile geri getir. Bir sayfada `Ctrl + F` ile belirli kelimeyi ara, ardından sayfayı yer imlerine ekle. `Ctrl + L` ile adres çubuğuna geçip yeni bir adres veya arama sorgusu yaz.

</div>

## Site izinleri, çerezler, önbellek ve gizli mod

### Site izinleri

Web siteleri kamera, mikrofon, konum, bildirim ve pano gibi izinler isteyebilir. İzin yalnızca güvenilir ve gerçekten ihtiyaç duyan siteye verilmelidir.

### Bildirim izni

Kötü niyetli siteler tarayıcı bildirim iznini sahte virüs uyarıları veya phishing bağlantıları göstermek için kullanabilir. “İzin ver” düğmesine otomatik basma.

### Cookie

Cookie sitenin tarayıcıda küçük veri parçaları saklamasına yardım eder. Oturum, tercih, sepet ve ölçüm için kullanılabilir. Cookie doğrudan çalıştırılabilir program değildir fakat gizlilik ve takip açısından önemlidir.

### First-party ve third-party

First-party cookie ziyaret ettiğin siteyle; third-party cookie sayfaya gömülü başka bir origin/domain ile ilişkilendirilebilir. Tarayıcı politikaları üçüncü taraf izlemeye ilişkin olarak zamanla değişmektedir.

### Cache

Cache CSS, JavaScript, görsel gibi kaynakları yerel saklayarak tekrar yüklemeyi hızlandırabilir. Cache ile cookie aynı şey değildir.

### Cache ve cookie farkı

Cache çoğunlukla performans için kaynak kopyası tutar; cookie site durumu/oturum gibi küçük verileri taşır. Birini temizlemek diğerini mutlaka silmez.

### Gizli/Incognito mod

Gizli mod oturum kapandığında yerel history/cookie saklamasını azaltır. Ancak ISP, okul/iş ağı, ziyaret edilen site ve giriş yaptığın hesaplar etkinliği görebilir. Anonimlik aracı değildir.

### Tarayıcı profilleri

Profiller bookmark, history, parola, uzantı ve hesap verilerini ayırabilir. Ortak bilgisayarda doğru profil ve doğru Google/Microsoft hesabı kontrol edilmelidir.

### Parola yöneticisi

Tarayıcı parola yöneticileri güçlü parola üretme, saklama ve otomatik doldurma sağlayabilir. Ana tarayıcı/hesap güçlü parola ve MFA ile korunmalıdır.

### Autofill

Otomatik doldurma ad, adres, telefon veya ödeme bilgisi gibi verileri forma yazabilir. Şüpheli sayfada hangi alanların doldurulduğunu kontrol et; ortak cihazda hassas autofill verisi bırakma.

### Uzantılar

Browser uzantı tarayıcıya işlev ekler. Bazı uzantılar “tüm sitelerdeki verileri okuyup değiştirme” gibi çok geniş izinler isteyebilir. Güvenilir kaynaktan kur ve gereksiz uzantıları kaldır.

### Tarayıcı güncellemeleri

Tarayıcı güvenilmeyen web içeriğini doğrudan işlediği için güvenlik yamaları kritiktir. Otomatik güncellemeler hem güvenlik hem web uyumluluğu için önemlidir.

## Güvenli gezinme: HTTPS, alan adı ve tarayıcı uyarıları

### Safe Browsing

Chrome Safe Browsing phishing, malware ve zararlı indirmeler hakkında uyarı gösterebilir. Google korumanın kapatılmasını önermemektedir.

### Tehlikeli indirme uyarıları

Chrome bir indirmeyi tehlikeli, şüpheli veya güvensiz olarak engellediğinde uyarıyı ciddiye al. “Koruma özelliğini kapat” diyen indirme sitesi ek risk işaretidir.

### Sertifika uyarıları

HTTPS sertifika hatası tarih/saat, sertifika süresi, domain eşleşmesi veya ağdaki araya girme sorunundan kaynaklanabilir. Özellikle hesap/banka girişlerinde uyarıyı geçme.

### Phishing domain

`google.com.example.net` adresinin kontrol alanı `example.net` olabilir. Logoya değil gerçek hostname/domain yapısına bak. Benzer karakterler ve yanıltıcı subdomain'ler phishing'de kullanılabilir.

### PDF tarayıcıda görüntülendiğinde

Tarayıcı PDF'yi yerleşik görüntüleyici'da gösterebilir. Bu, kullanıcının Downloads klasörüne kalıcı kopya kaydettiği anlamına gelmez; indirme ayrıca yapılabilir.

### Developer Tools

`F12` veya `Ctrl+Shift+I` geliştirici araçlarını açabilir. Elements, Console ve Network web sayfasının yapı, script ve ağ davranışını incelemeye yardım eder.

### Network panel

Network panel sayfanın yaptığı HTTP isteklerini, status code, type, size ve süre bilgilerini gösterir. Bir web sayfasının tek HTML dosyasından ibaret olmadığını gözlemlemek için yararlıdır.

<div class="mistake-panel" markdown="1">

**Önemli ayrım:** HTTPS, tarayıcı ile site arasındaki bağlantının korunmasına yardım eder; sitenin söylediği her şeyin doğru olduğunu veya sitenin iyi niyetli olduğunu garanti etmez. Alan adını, kaynağı ve içeriği ayrıca değerlendir.

</div>

## İnternet sorunu olduğunda nereden başlayacağız?

### Ping

`ping` ICMP echo mesajlarıyla hedefe erişim ve round-trip gecikme hakkında temel bilgi verir. Ping başarısızsa hedefin kesin kapalı olduğu söylenemez; güvenlik duvarı ICMP'yi engelliyor olabilir.

### tracert

Windows `tracert`, hedefe giden rota üzerindeki hop'lar hakkında bilgi verir. Her ara router cevap vermek zorunda değildir. Araç rota ve gecikmenin hangi bölümde arttığını anlamaya yardımcı olabilir.

### ipconfig

Windows'ta `ipconfig` IP yapılandırmasını, `ipconfig /all` ise MAC, DHCP, DNS ve gateway gibi daha ayrıntılı bilgileri gösterebilir.

### Loopback

IPv4 `127.0.0.1`, IPv6 `::1` loopback adresidir. Cihazın kendi TCP/IP yığınına erişim sağlar. Yerel web geliştirme ve servis testlerinde kullanılır.

### Firewall

Firewall ağ trafiğini kurallara göre izin verme veya engelleme amacıyla filtreler. Sorun giderirken güvenlik duvarını tamamen kapatmak yerine hangi uygulama/port/kuralın etkilendiğini incelemek daha güvenlidir.

### VPN

VPN cihaz ile VPN sunucusu arasında şifreli tünel oluşturabilir. Kurumsal ağa uzaktan erişim veya güvensiz yerel ağdaki trafiği korumak için yararlı olabilir; mutlak anonimlik ve güvenlik garantisi değildir.

### HTTPS

HTTPS HTTP iletişimini TLS ile korur; aktarım gizliliği, bütünlük ve sunucu kimliğinin sertifikayla doğrulanmasına yardım eder. HTTPS, web sitesindeki iddianın doğru olduğunu garanti etmez.

### Ağ sorununu katman katman ayırma

İnternet yoksa şu sırayla düşün:

```text
1. Fiziksel/Wi‑Fi bağlantı var mı?
2. IP yapılandırması var mı?
3. Gateway erişiliyor mu?
4. DNS çalışıyor mu?
5. Dış IP erişiliyor mu?
6. Sorun yalnızca tek uygulamada mı?
```

Basit kontrol sırası:

```text
1. Wi-Fi/Ethernet gerçekten bağlı mı?
2. Başka bir site açılıyor mu?
3. Aynı ağdaki başka cihaz internete çıkabiliyor mu?
4. Router/modem bağlantı göstergeleri normal mi?
5. Alan adı yerine farklı bir site deneyince sonuç değişiyor mu?
6. Tarayıcıyı veya cihazı yeniden başlatmak sorunu değiştiriyor mu?
```

İlk aşamada rastgele IP/DNS ayarı değiştirmek yerine problemi **yerel bağlantı mı, internet mi, yalnız tarayıcı mı** diye ayır.

## Birlikte uygulayalım, yanlışları düzeltelim

### Uygulama: URL çözümle

`https://docs.example.org/course/page.html?id=7#quiz` adresini scheme, host, path, query ve fragment bölümlerine ayır.

### Uygulama: izin denetimi

Tarayıcı ayarlarında kamera, mikrofon, konum ve bildirim izinlerini incele. Artık kullanmadığın sitelerin izinlerini kaldır ve hangi iznin neden hassas olduğunu yaz.

### Uygulama: tarayıcı profili

İki ayrı test profili oluşturup farklı bookmark ve history üret. Profil ile yalnızca yeni pencere açmanın neden farklı olduğunu gözlemle.

### Kavram yanılgıları

- Incognito internette görünmez yapmaz.
- HTTPS siteyi otomatik güvenilir yapmaz.
- Bookmark çevrim dışı kopya değildir.
- Küçük bir uzantı risksiz olmak zorunda değildir.
- Cache ile cookie aynı değildir.

### Ders özeti

URL, sekme/pencere, geçmiş/yer imi/indirme, site izinleri, çerez/önbellek, gizli mod, profil, parola yöneticisi, uzantı, Safe Browsing, sertifika ve geliştirici araçları kavramlarını bilinçli kullanabilmelisin.

### Güncel kaynak kontrolü

Bu ders hazırlanırken özellikle aşağıdaki resmî/birincil kaynaklar kontrol edilmiştir:

- Google Chrome Help — Manage warnings about unsafe sites
- Google Chrome Help — Chrome blocks some downloads
- Google Chrome Help — Privacy and security controls
- IETF — RFC 9110: HTTP Semantics

Arayüzler ve hizmet özellikleri zamanla değişebildiği için yalnızca düğme konumlarını ezberlemek yerine kavramı, güvenlik mantığını ve doğru çalışma yöntemini öğrenmek hedeflenmiştir.

### Uygulama: kendi ağ yapılandırmanı oku

`ipconfig /all` çalıştır ve IPv4, gateway, DNS, DHCP ve Physical Address alanlarını bul. Gerçek adreslerini herkese açık ortamda paylaşmadan kavramları eşleştir.

### Uygulama: hız-g gecikme ayrımı

Bir hız testi sonucunu `Download 300 Mbps / Upload 30 Mbps / Ping 18 ms` olarak varsay. Büyük dosya indirme, buluta yükleme ve video konferansta hangi değerin daha kritik olduğunu açıklayarak karşılaştır.

### Kavram yanılgıları

- “Wi‑Fi varsa internet vardır.” Yanlış.
- “Modem ve router aynı şeydir.” Tek kutuda birleşebilir ama işlevleri ayrıdır.
- “Ping geçmiyorsa cihaz kapalıdır.” ICMP engellenebilir.
- “HTTPS site içeriğinin doğru olduğunu kanıtlar.” Yanlış.

### Ders özeti

Bu ders sonunda LAN/WAN, Ethernet/Wi‑Fi, modem/router/switch/AP, IPv4/IPv6, MAC, TCP/UDP/QUIC, port, DNS/DHCP, gateway/NAT, ISP, Mbps, latency, jitter, packet loss ve temel ağ tanılama araçlarını birbirinden ayırt edebilmelisin.

### Güncel kaynak kontrolü

Bu ders hazırlanırken özellikle aşağıdaki resmî/birincil kaynaklar kontrol edilmiştir:

- RFC Editor — RFC 8200: IPv6 Specification
- ICANN — The Domain Name System
- IETF / RFC Editor — HTTP and Internet protocol standards
- Microsoft Windows — TCP/IP ve ağ tanılama araçları

Arayüzler ve hizmet özellikleri zamanla değişebildiği için yalnızca düğme konumlarını ezberlemek yerine kavramı, güvenlik mantığını ve doğru çalışma yöntemini öğrenmek hedeflenmiştir.