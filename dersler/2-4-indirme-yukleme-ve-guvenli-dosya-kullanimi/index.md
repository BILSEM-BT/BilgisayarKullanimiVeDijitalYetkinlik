---
title: İndirme, Yükleme ve Güvenli Dosya Kullanımı
module_id: 11
updated: '2026-08-20'
summary: İndirme ve yüklemede kaynak doğrulama, dosya uzantıları, tarayıcı uyarıları, güvenli paylaşım, gizlilik ve dosya kontrol alışkanlıklarını uyguluyoruz.
quiz: /uygulamalar/2-4-indirme-yukleme-ve-guvenli-dosya-kullanimi/
permalink: /dersler/2-4-indirme-yukleme-ve-guvenli-dosya-kullanimi/
---
<div class="lesson-goals" markdown="1">

**Bu derste ne öğreneceğiz?**

Dosya indirirken, yüklerken ve paylaşırken yalnızca “dosya açılıyor mu?” diye bakmayacağız. Kaynağı, uzantıyı, tarayıcı uyarısını, dosyanın gerçek türünü, kişisel veri içerip içermediğini ve paylaşım yetkisini birlikte kontrol edeceğiz.

</div>

<div class="file-safety-flow" aria-label="Güvenli dosya kontrol akışı"><span>Kaynak</span><i>→</i><span>Uzantı</span><i>→</i><span>Uyarı</span><i>→</i><span>İçerik</span><i>→</i><span>Paylaşım</span></div>
## İndirme ve yükleme mantığı

### Download ve upload

**Download** verinin uzak sistemden cihaza gelmesi; **upload** ise cihazdan uzak sisteme gönderilmesidir. Buluta dosya yüklemek upload, webden PDF indirmek download örneğidir.

### Asimetrik internet

Ev bağlantısında download ve upload hızları farklı olabilir. 500 Mbps download / 50 Mbps upload gibi bir hat, buluta büyük dosya yüklerken indirmeden daha yavaş olabilir.

### İndirme linkini kontrol et

Dosya indirmeden önce alan adı, HTTPS, resmî üretici sitesi, yönlendirme ve dosya adını kontrol et. Büyük renkli “Download” reklamı gerçek ürün indirmesi olmayabilir.

### Resmî kaynak

Program için üreticinin resmî sitesi, resmî uygulama mağazası veya projenin resmî repository'si önceliklidir. Dosya toplayıcı siteler eski veya ek yazılımlı paket sunabilir.

### Dosya uzantısını görünür tut

`ders.pdf.exe` gibi çift uzantıda son `.exe` çalıştırılabilir türdür. Windows'ta uzantıları görünür kullanmak güvenlik kontrolünü kolaylaştırır.

## Dosyayı çalıştırmadan önce güvenlik kontrolü

### Chrome indirme uyarıları

Chrome Safe Browsing tehlikeli, şüpheli, doğrulanmamış veya güvensiz indirmelerde uyarı gösterebilir. Google, bu uyarıların ciddiye alınmasını önerir.

### Koruma özelliğini kapattırmaya çalışan site

Bir site “dosyayı indirebilmek için Safe Browsing'i kapat” diyorsa bu güçlü risk sinyalidir. Koruma mekanizmasını kapatmak yerine resmî kaynağı ara.

### Riskli dosya türleri

`.exe`, `.msi`, `.bat`, `.cmd`, `.ps1`, `.js`, `.vbs`, `.lnk`, `.docm`, `.xlsm` çalıştırılabilir veya aktif içerik taşıyabilir. Kaynak doğrulanmadan açılmamalıdır.

### Arşiv içeriği

ZIP/RAR/7z yalnızca kapsayıcıdır. İçinden zararlı EXE, script veya makro belgesi çıkabilir. Arşiv uzantısı içeriği güvenli yapmaz.

### SHA-256 hash

Üretici güvenilir bir kanalda SHA-256 yayımlıyorsa `Get-FileHash` ile indirilen dosyanın hash'i karşılaştırılabilir. Eşleşme aktarım bütünlüğü için güçlü kanıttır.

### Hash’in sınırı

Saldırgan zararlı dosya ile sahte hash'i aynı ele geçirilmiş sayfada yayımlarsa hash yine eşleşebilir. Bu nedenle hash değerinin kaynağı da güvenilir olmalıdır.

### Dijital imza

Authenticode gibi kod imzaları yayıncı kimliği ve imza sonrası dosya bütünlüğü hakkında bilgi sağlayabilir. İmzalı olması programın mutlaka iyi amaçlı olduğunu garanti etmez.

### SmartScreen

Microsoft Defender SmartScreen bilinmeyen, düşük itibarlı veya zararlı olduğu bilinen uygulamalarda uyarı gösterebilir. Uyarıyı anlamadan “Run anyway” seçmek güvenli değildir.

### Antivirüs taraması

Güvenlik yazılımı şüpheli dosyayı tarayabilir. “Temiz” sonucu riski azaltır ama sıfır gün veya yeni zararlı olasılığını yüzde sıfıra indirmez.

### Çevrim içi tarama ve gizlilik

Çoklu malware tarama hizmetine dosya yüklemek dosyanın üçüncü taraf sistemlere aktarılması demektir. Gizli öğrenci, kurum veya kişisel dosyalarını izin olmadan yükleme.

### Sandbox

Şüpheli programı izole sanal ortamda çalıştırmaya sandbox yaklaşımı denir. Windows Sandbox veya sanal makine profesyonel analizde kullanılabilir; kişisel ana bilgisayarda “bir deneyelim” güvenli yöntem değildir.

## Dosya yüklerken gizlilik ve doğru dosyayı seçme

### Upload gizliliği

Dosya yüklediğin hizmetin kimlerin erişebileceğini, ne kadar süre sakladığını ve nasıl işlediğini değerlendir. Upload yalnızca “dosyayı karşıya taşımak” değildir.

### Form yüklemeleri

Form `PDF, en fazla 10 MB` gibi sınır koyabilir. Format, boyut, dosya adı ve doğru sürüm yükleme öncesi kontrol edilmelidir.

### Yanlış dosya yükleme

`rapor.docx`, `rapor_kisisel_notlar.docx`, `rapor_teslim.pdf` gibi benzer isimler hata yaratır. Teslimden önce dosyayı aç ve içeriğini kontrol et.

### Metadata

Belge ve görseller yazar, tarih, cihaz modeli veya konum gibi metadata taşıyabilir. Hassas paylaşımda metadata kontrolü yapılmalıdır.

### EXIF

Fotoğraf EXIF bilgisi kamera, çekim zamanı ve bazen konum verisi taşıyabilir. Platformun metadata'yı kaldıracağı varsayımına güvenme.

### Yükleme tamamlanmasını doğrula

Upload sırasında tarayıcıyı kapatmak işlemi kesebilir. Progress, başarı mesajı ve sunucuda görünen dosya listesiyle tamamlandığını doğrula.

### Senkronizasyon durumu

Drive gibi hizmetlerde sync ikonu “yükleniyor / senkronize / hata” durumunu gösterebilir. Yerel dosyayı silmeden bulut kopyasının hazır olduğunu doğrula.

## Büyük dosyalar, bağlantılar ve günlük riskler

### Büyük dosya paylaşımı

E-posta ek sınırı yerine Drive linki kullanmak daha uygun olabilir. Ancak linkin Kısıtlı (Restricted)/Görüntüleyen (Viewer)/Düzenleyen (Editor) gibi erişim izinleri ayrıca kontrol edilmelidir.

### Gmail ek sınırı

Google'ın güncel yardımına göre kişisel Gmail hesaplarında toplam gönderilen ek sınırı 25 MB'dır. Sınır aşılırsa Gmail dosyayı Drive bağlantısı olarak ekleyebilir. İş/okul hesabında yönetici politikaları farklı olabilir.

### Gmail engellenen dosyalar

Gmail `.exe` gibi belirli çalıştırılabilir dosyaları ve bazı riskli arşivleri güvenlik nedeniyle engeller. Arşivleyerek bu politikayı aşmaya çalışmak doğru değildir.

### Insecure download

HTTPS sayfasından HTTP kaynakla indirilen dosya aktarım sırasında değiştirilmeye daha açık olabilir. Tarayıcı bu tür mixed/insecure indirmelerde uyarı verebilir.

### Downloads klasörü düzeni

İndirilen dosyayı doğrula, kalıcı kullanılacaksa proje klasörüne taşı, gereksiz installer kopyalarını temizle. Downloads kalıcı arşiv yerine geçmemelidir.

### Kısaltılmış URL

Kısa URL gerçek alan adını gizler. Hassas indirmede hedefi önizle veya resmî siteye adresi elle yazarak git.

### QR kod

QR kod URL taşıyabilir ama güvenilirlik sertifikası değildir. Telefonun açmadan önce gösterdiği hostname'i kontrol et.

### P2P/Torrent

P2P teknik olarak dosya dağıtım yöntemidir; resmî Linux dağıtımı torrent sunabilir. Ancak korsan yazılım torrent'lerinde zararlı yazılım ve telif riski yüksektir.

### Kurulumdaki bundle

Installer ek toolbar veya reklam yazılımı önerebilir. Ekranları okumadan “Next” basma; Custom/Advanced seçeneklerinde ek bileşenleri kontrol et.

### Yönetici izni

UAC yönetici izni isteyen program sistemde geniş değişiklik yapabilir. Kaynak doğrulanmadan onay verme; her uygulamanın admin çalışması gerekmez.

## Güvenli dosya kullanım karar ağacı

### Güvenli dosya karar ağacı

`Dosyayı bekliyor muydum? → Kaynak resmî mi? → Uzantı doğru mu? → Tarayıcı/SmartScreen uyarısı var mı? → İmza/hash doğrulanıyor mu? → Çalıştırmak gerekli mi?` sırası kullanılabilir.

## Birlikte uygulayalım

### Uygulama: hash kontrolü

Resmî olarak SHA-256 yayımlayan güvenilir bir açık kaynak projesinde indirilen dosyanın hash'ini `Get-FileHash` ile hesaplayıp karşılaştır.

### Uygulama: yükleme kontrol listesi

Bir ödev PDF'si yüklemeden önce doğru dosya, son sürüm, kişisel veri, boyut ve yüklemenin tamamlandığı kontrollerini uygula.

## Sık yapılan hatalar ve ders özeti

### Kavram yanılgıları

- HTTPS ile inmiş dosya mutlaka güvenli değildir.
- Antivirüs “temiz” sonucu mutlak garanti değildir.
- ZIP içindeki EXE risksiz değildir.
- Hash eşleşmesi ancak güvenilir referans hash ile anlamlıdır.
- Upload edilen dosyanın gizlilik politikası önemlidir.

### Ders özeti

Download/upload, resmî kaynak, Safe Browsing/SmartScreen, uzantı, hash, dijital imza, antivirüs, sandbox, metadata, Gmail ek sınırı, Drive linki, UAC ve güvenli dosya karar ağacını uygulayabilmelisin.

### Güncel kaynak kontrolü

Bu ders hazırlanırken özellikle aşağıdaki resmî/birincil kaynaklar kontrol edilmiştir:

- Google Chrome Help — Chrome blocks some downloads
- Google Chrome Help — Manage warnings about unsafe sites
- Gmail Help — Send attachments with your Gmail message
- Gmail Help — Blocked file types
- Microsoft security documentation — SmartScreen and code signing concepts

Arayüzler ve hizmet özellikleri zamanla değişebildiği için yalnızca düğme konumlarını ezberlemek yerine kavramı, güvenlik mantığını ve doğru çalışma yöntemini öğrenmek hedeflenmiştir.
