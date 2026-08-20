---
title: E-Posta ve Gmail Kullanımı
module_id: 12
updated: '2026-08-20'
summary: E-posta temellerini ve Gmail'de doğru mesaj yazma, alıcı yönetimi, ek gönderme, arama, etiketleme ve phishing savunmasını öğreniyoruz.
quiz: /uygulamalar/2-5-e-posta-ve-gmail-kullanimi/
permalink: /dersler/2-5-e-posta-ve-gmail-kullanimi/
---
<div class="lesson-goals" markdown="1">

**Bu derste ne öğreneceğiz?**

E-posta adresi, Alıcı/Bilgi/Gizli alıcı alanları, konu satırı, yanıtla-yönlendir, ek gönderme, Gmail araması ve phishing savunmasını gerçek okul/proje senaryolarıyla uygulayacağız.

</div>

<div class="mail-demo" aria-label="Gmail mesaj oluşturma şeması"><div class="mail-head"><b>Yeni ileti</b></div><div>Alıcı: ogrenci@example.com</div><div>Bilgi: danisman@example.com</div><div>Konu: Proje raporu — teslim sürümü</div><div class="mail-body">Merhaba, güncel proje raporunu ekte iletiyorum...</div></div>
## E-posta nasıl çalışır?

### E-posta nedir?

E-posta İnternet üzerinde mesajların posta sunucuları arasında iletilmesini sağlayan iletişim sistemidir. Bir adres `kullanici@example.com` biçiminde local-part, `@` ve domain bölümlerinden oluşur.

### E-posta ile web aynı değildir

Gmail web arayüzü tarayıcıda çalışabilir; ancak e-posta altyapısı SMTP, IMAP, DNS MX ve mail server gibi ayrı protokol/sistemler kullanır.

### SMTP

SMTP e-posta gönderme ve mail sunucuları arasında aktarma için temel protokoldür. Basit zincir: `gönderen istemci → gönderen mail server → alıcı domain MX server → mailbox`.

### IMAP

IMAP posta kutusunu sunucuda tutarak birden çok cihazla senkron çalışmaya yardım eder. Okundu, klasör/etiket ve silme durumları istemciler arasında eşitlenebilir.

### POP3

POP3 daha eski “sunucudan mesaj alma” yaklaşımıdır. Günümüzde çok cihazlı senkronizasyon için IMAP çoğu kullanıcı açısından daha esnektir.

## Gmail ile doğru mesaj yazmak ve alıcıları yönetmek

### Gmail ileti dizisi görünümü

Gmail aynı konu zincirindeki iletileri conversation olarak gruplayabilir. Yanıt geçmişi, alıcılar ve ekler tek zincirde takip edilebilir.

### To, Cc, Bcc

To ana alıcıyı, Cc görünür bilgilendirme kopyasını, Bcc ise diğer alıcılara adresi göstermeden kopyayı ifade eder. Toplu dış iletişimde Bcc kişisel adres gizliliği için yararlı olabilir.

### Bcc’nin sınırları

Bcc adresi diğer alıcılardan gizler; fakat mesaj içeriğinin yeniden paylaşılmasını veya yanlış yanıt davranışını engellemez. Büyük kurumsal dağıtım için mailing-list/duyuru sistemleri daha uygun olabilir.

### Konu satırı

İyi subject kısa ve spesifiktir: `BİLSEM Robotik Projesi — 21 Ağustos Toplantısı`. `Acil`, `Merhaba`, `Önemli` gibi genel başlıklar arama ve önceliklendirmeyi zorlaştırır.

### Profesyonel e-posta yapısı

Selamlama, kısa bağlam, istenen eylem, son tarih, kapanış ve imza düzeni mesajı anlaşılır yapar. Çok uzun giriş yerine gerekli bilgiyi başta ver.

### Reply ve Reply All

Reply uygun gönderene yanıt verir; Reply All görünür alıcı grubuna yanıtlar. Gizli veya gereksiz bilgiyi büyük gruba göndermemek için alıcı alanlarını kontrol et.

### Forward

Forward bir mesaj zincirini başka kişiye iletir. İletmeden önce zincirde kişisel bilgi, gizli not veya eski ek olup olmadığını incele.

## Dosya ekleri ve büyük dosya gönderimi

### Gmail ek sınırı

Google'ın güncel yardımına göre kişisel Gmail hesaplarında toplam gönderilen ek sınırı 25 MB'dır. İş/okul hesabında Workspace yöneticisi farklı sınır belirleyebilir.

### Büyük dosya ve Drive

Toplam ek sınırı aşılırsa Gmail dosyayı Google Drive bağlantısı olarak ekleyebilir. Drive paylaşım izinlerinin alıcıya uygun olduğunu doğrula.

### Engellenen dosya türleri

Gmail güvenlik nedeniyle `.exe` gibi belirli çalıştırılabilir dosyaları ve bazı riskli içerikleri ek olarak kabul etmez. Dosyayı arşivleyerek güvenlik politikasını aşmaya çalışmak doğru değildir.

### Ekleri güvenli açma

Ek bekleniyor mu, gönderen adresi gerçek mi, uzantı ne, mesaj dili olağan mı kontrol et. Tanıdık bir hesabın ele geçirilmiş olabileceğini unutma.

## Phishing ve zararlı e-postaları tanımak

### Phishing

Phishing kullanıcıdan parola, MFA kodu, banka bilgisi veya başka kişisel veri almaya ya da zararlı dosya çalıştırmaya çalışan sosyal mühendislik saldırısıdır.

### Görünen ad ve gerçek adres

`Google Destek` görünen adı kolayca taklit edilebilir. Gerçek e-posta adresi ve domain kontrol edilmelidir.

### Link metni ile hedef

Mesajda `accounts.google.com` yazısı gösterilip link başka adrese gidebilir. Masaüstünde hover veya güvenli link önizleme ile gerçek hedefi gör.

### Aciliyet saldırısı

`Hesabınız 10 dakikada kapanacak` gibi baskı ifadeleri düşünmeden hareket ettirmeyi amaçlar. Mesajdaki link yerine hizmetin resmî sitesine kendin git.

### MFA kodu

MFA doğrulama kodunu e-posta, telefon veya mesaj yoluyla isteyen kişiye verme. Kod hesabın ikinci doğrulama anahtarıdır.

### Spam

Spam istenmeyen toplu e-postadır. Gmail otomatik filtre uygular ancak yanlış sınıflandırma olabilir; beklenen önemli mesaj varsa Spam klasörü kontrol edilebilir.

### Spam bildirimi ve unsubscribe

Meşru bültende unsubscribe kullanılabilir. Şüpheli spam'deki unsubscribe linki zararlı siteye gidebilir; bu durumda spam/phishing bildirimi daha güvenli olabilir.

## Gmail gelen kutusunu düzenlemek ve aramak

### Gmail etiketler

Gmail klasik klasör yaklaşımından farklı olarak label sistemini yoğun kullanır. Bir mesaj aynı anda birden fazla label taşıyabilir.

### Arşivle

Arşivle mesajı silmez; Inbox görünümünden çıkarıp hesapta tutar. All Mail veya arama ile bulunabilir.

### Delete ve Çöp Kutusu (Trash)

Delete mesajı Çöp Kutusu (Trash)'e taşır. Çöp kutusu uzun vadeli arşiv veya yedek değildir; kurumsal saklama politikaları ayrıca uygulanabilir.

### Star ve importance

Star kullanıcı işaretidir; importance Gmail'in/kuralların önem sinyali olabilir. İkisi aynı olmak zorunda değildir.

### Gmail arama operatörleri

Gmail resmî yardımında `from:`, `to:`, `subject:`, `after:`, `before:`, `newer_than:`, `has:attachment`, `filename:` gibi operatörler vardır.

### Filtreler

Gmail filter belirli gönderen/konu için label ekleme, inbox'ı atlama veya forward gibi otomasyonlar yapabilir. Yanlış filtre önemli mesajı görünmez hale getirebilir.

### Confidential Mode

Gmail Confidential Mode süre sonu ve forward/copy/print/download kısıtlamaları sunabilir. Ancak ekran görüntüsü veya başka cihazla fotoğraf çekilmesini tamamen engellemez.

### Read receipt

Okundu bilgisi bazı Google Workspace hesaplarında ve yönetici ayarlarına bağlı olabilir. Kişisel Gmail hesaplarının tamamında evrensel özellik olarak düşünülmemelidir.

### Schedule send

Mesaj gelecekte belirli zamanda gönderilmek üzere planlanabilir. Saat dilimi, alıcı ve ekleri göndermeden önce kontrol et.

### Undo Send

Gmail Undo Send mesajı kısa iptal süresi boyunca bekleterek geri alma imkânı verir. Saatler önce teslim edilmiş mesajı alıcının kutusundan geri çekmek değildir.

### E-posta imzası

İmza ad, kurum, rol ve gerekli iletişim bilgisini içerebilir. Gereksiz kişisel veri veya aşırı görsel kullanmamak daha profesyoneldir.

### Thread hijacking

Ele geçirilmiş hesap gerçek eski konuşmaya yanıt vererek sahte fatura veya ödeme bilgisi gönderebilir. Beklenmeyen finansal talebi başka kanaldan doğrula.

### SPF, DKIM ve DMARC

Alıcı mail sistemi domain tabanlı kimlik doğrulamada SPF, DKIM ve DMARC sinyallerini kullanabilir. Bu kontroller phishing'i tamamen ortadan kaldırmaz; saldırgan kendi benzer domain'ini düzgün yapılandırabilir.

## Birlikte uygulayalım

### Uygulama: Gmail arama

`from:me`, `has:attachment`, `newer_than:7d`, `subject:proje` sorgularını deneyip sonuçların nasıl daraldığını gözlemle.

### Uygulama: phishing analizi

`Google Security <alert@google-security-login.example>` ve `https://accounts-google.example/login` içeren örnek mesajdaki domain, aciliyet ve kimlik risklerini listele.

### Uygulama: To/Cc/Bcc

Ana rapor öğretmene, danışman bilgilendirmeye ve 40 velinin adresleri birbirine görünmeden duyuruya göre To/Cc/Bcc seçimini gerekçelendir.

## Sık yapılan hatalar ve ders özeti

### Kavram yanılgıları

- Arşivle = Delete değildir.
- Display name kimliği kanıtlamaz.
- Confidential Mode screenshot'ı imkânsız yapmaz.
- Read receipt tüm Gmail hesaplarında zorunlu değildir.
- SPF/DKIM geçmesi içeriğin güvenli olduğunu garanti etmez.

### Ders özeti

SMTP/IMAP/POP3, To/Cc/Bcc, Reply/Reply All/Forward, attachment, phishing/spam, etiketler/archive/delete, Gmail search/filter, Confidential Mode, read receipt, schedule send/Undo Send ve SPF/DKIM/DMARC kavramlarını güvenli kullanabilmelisin.

### Güncel kaynak kontrolü

Bu ders hazırlanırken özellikle aşağıdaki resmî/birincil kaynaklar kontrol edilmiştir:

- Gmail Help — Send attachments with your Gmail message
- Gmail Help — Blocked file types
- Gmail Help — Refine searches in Gmail
- Gmail Help — Confidential mode and account security guidance

Arayüzler ve hizmet özellikleri zamanla değişebildiği için yalnızca düğme konumlarını ezberlemek yerine kavramı, güvenlik mantığını ve doğru çalışma yöntemini öğrenmek hedeflenmiştir.
