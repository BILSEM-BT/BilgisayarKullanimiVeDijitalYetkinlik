---
title: Gizlilik, Site İzinleri ve Dijital Ayak İzi
module_id: 26
updated: '2026-08-20'
summary: Kişisel veri, tarayıcı ve uygulama izinleri, çerezler, gizli mod, paylaşım ayarları ve dijital ayak izini günlük senaryolar üzerinden yönetmeyi öğreniyoruz.
quiz: /uygulamalar/4-3-gizlilik-site-izinleri-ve-dijital-ayak-izi/
permalink: /dersler/4-3-gizlilik-site-izinleri-ve-dijital-ayak-izi/
---
<div class="lesson-goals" markdown="1">

**Bu derste ne öğreneceğiz?**

Bir site veya uygulamaya “İzin ver” dediğimizde bunun kamera, mikrofon, konum, bildirim veya dosya erişimi açısından ne anlama geldiğini; **kişisel veri**, **gizlilik**, **çerez**, **takip**, **gizli mod** ve **dijital ayak izi** kavramlarını öğreneceğiz. Paylaşmadan önce “Kim görebilir, ne kadar süre kalabilir, başkalarını etkiler mi?” sorularını kullanacağız.

</div>

<div class="privacy-grid" aria-label="Gizlilik karar alanları"><div><b>Kamera</b><span>Gerekince izin ver</span></div><div><b>Mikrofon</b><span>Kullanım amacını kontrol et</span></div><div><b>Konum</b><span>En az gerekli erişim</span></div><div><b>Bildirim</b><span>İstemiyorsan engelle</span></div></div>

## 1. Gizlilik ve kişisel veri nedir?

### Güvenlik ile gizlilik aynı değildir

**Güvenlik**, verinin izinsiz erişim veya zarara karşı korunmasıyla ilgilidir. **Gizlilik** ise hangi verinin, kim tarafından, hangi amaçla ve ne ölçüde kullanılacağını kontrol edebilme konusudur.

Bir site teknik olarak güvenli bağlantı kullanabilir ama gereğinden fazla veri isteyebilir. Bu nedenle “kilit simgesi var” ile “gizliliğim korunuyor” aynı cümle değildir.

### Kişisel veri yalnız ad-soyad değildir

Kişiyi doğrudan veya dolaylı olarak ilişkilendirebilecek bilgiler kişisel nitelik taşıyabilir. Örneğin:

- ad, kullanıcı adı, e-posta,
- fotoğraf, ses kaydı,
- konum bilgisi,
- cihaz ve oturum bilgileri,
- okul/proje hesabı bilgileri,
- davranış ve tercih kayıtları.

**Parola, tek kullanımlık kod ve kurtarma kodu** ise ayrıca gizli kimlik doğrulama bilgileridir; paylaşılmamalıdır.

### Veri minimizasyonu

Bir hizmetin işini yapması için gerekenden fazla veri vermemek iyi bir ilkedir. Basit bir hesap makinesi uygulaması neden kesin konum ister? İzin ile işlev arasında makul bağlantı aranmalıdır.

## 2. Site izinleri nasıl düşünülür?

### İzin penceresi bir formalite değildir

Modern tarayıcılar kamera, mikrofon ve konum gibi özelliklerde izin sorabilir. Google Chrome gibi tarayıcılarda bazı izinler için **bu kez izin ver**, **ziyaret sırasında izin ver** veya **izin verme** benzeri seçenekler bulunabilir.

<div class="permission-demo"><div class="permission-title">example.org kamera ve mikrofonunuzu kullanmak istiyor</div><div class="permission-actions"><span>Bu kez izin ver</span><span>Ziyaret sırasında izin ver</span><span>İzin verme</span></div></div>

### İzin verirken üç soru

1. Bu özellik gerçekten gerekli mi?
2. Bu siteye güveniyor muyum?
3. İzin yalnız şimdi mi gerekli, sürekli mi?

Çevrim içi toplantıda mikrofon gerekli olabilir; haber okuma sitesinin mikrofon istemesi açıklama gerektirir.

### İzin sonradan değiştirilebilir

Tarayıcıdaki site bilgisi/ayarları bölümünden kamera, mikrofon, konum, bildirim ve diğer izinler gözden geçirilebilir. Menü isimleri tarayıcı sürümüne göre değişebilir; mantık aynıdır: **verdiğin izni daha sonra kaldırabilmelisin.**

## 3. Çerezler, oturumlar ve takip

### Çerez (cookie) nedir?

Çerez, sitenin tarayıcıda küçük bilgiler saklamasına yarayan mekanizmalardan biridir. Oturumun açık kalması, dil tercihi veya alışveriş sepeti gibi yararlı amaçları olabilir.

### Her çerez aynı değildir

Çerezin kim tarafından konduğu, ne kadar süre saklandığı ve hangi amaçla kullanıldığı önemlidir. Analitik ve reklam amaçlı takip ile zorunlu oturum çerezi aynı işlevi taşımaz.

### “Tüm çerezleri silersem internette görünmez olurum” doğru mu?

Hayır. Çerezler takip yöntemlerinden yalnız biridir. Hesaba giriş, IP/ağ bilgileri, cihaz özellikleri ve başka teknik sinyaller de kullanılabilir. Çerez temizlemek belirli yerel verileri kaldırabilir; seni internette görünmez yapmaz.

### Oturum çerezi neden hassas olabilir?

Bazı oturum bilgileri ele geçirilirse saldırgan parolayı bilmeden açık oturumu kötüye kullanabilir. Bu nedenle ortak cihazlarda oturumu kapatmak ve tarayıcı profili kullanımına dikkat etmek önemlidir.

## 4. Gizli/özel tarama modu ne yapar, ne yapmaz?

### Cihazdaki bazı izleri azaltır

Gizli/özel pencere kapatıldığında tarayıcı genellikle o oturumun yerel geçmişini ve bazı site verilerini kalıcı profilde tutmaz. Bu, ortak cihazda yerel geçmişi azaltmak için yararlı olabilir.

### İnternette anonim yapmaz

Gizli mod:

- internet servis sağlayıcısından,
- okul/kurum ağından,
- ziyaret edilen siteden,
- giriş yaptığın hesaptan

mutlak gizlilik sağlamaz.

```text
Gizli mod ≠ VPN ≠ anonimlik ≠ görünmezlik
```

Her aracın amacı ve sınırı farklıdır.

### İndirilen dosyalar kaybolmaz

Gizli pencereyi kapatsan bile indirdiğin dosya cihazda kalabilir. Oluşturduğun yer imi de kullandığın tarayıcıya göre kalabilir. “Pencereyi kapattım, her şey silindi” varsayımı yapılmamalıdır.

## 5. Uygulama izinleri ve en az yetki ilkesi

### Telefon ve bilgisayar uygulamaları da izin ister

Kamera, mikrofon, fotoğraflar, konum, kişiler ve dosyalar gibi izinler işletim sistemi ayarlarından yönetilebilir. Bir uygulamanın görevi için gereksiz erişimleri kapatmak **en az yetki (least privilege)** düşüncesidir.

### “Bir kez izin verdim, sonsuza kadar vermek zorundayım” yanlış

İzinleri belirli aralıklarla gözden geçirmek yararlıdır. Artık kullanmadığın uygulamaların erişimini kaldırabilir veya uygulamayı silebilirsin.

### Uygulama hesabıyla verilen erişimler

“Google ile giriş yap”, “Microsoft ile giriş yap” gibi bağlantılarda uygulamanın hangi hesap verilerine erişim istediği okunmalıdır. Kullanmadığın bağlı uygulamalar hesap ayarlarından kaldırılabilir.

## 6. Dijital ayak izi ve paylaşım kararı

### Aktif ve pasif iz

**Aktif dijital ayak izi**, bilinçli gönderi, yorum, yükleme ve form doldurma gibi eylemlerle oluşur. **Pasif iz**, hizmet kullanımı sırasında teknik veya davranışsal kayıtların oluşması gibi durumları anlatmak için kullanılan bir kavramdır.

### Silmek her kopyayı yok etmeyebilir

Bir paylaşımı silsen bile:

- ekran görüntüsü alınmış olabilir,
- başka biri yeniden paylaşmış olabilir,
- yedek/arşiv sistemlerinde bir süre kalabilir.

Bu nedenle en güçlü gizlilik kararı bazen **başta paylaşmamaktır**.

### Başkalarının gizliliği

Arkadaşının fotoğrafını, ses kaydını, özel mesajını veya konumunu paylaşmak yalnız senin kararın değildir. Özellikle öğrenciler için **rıza ve bağlam** önemli dijital etik ilkeleridir.

### Fotoğraf ve metadata

Fotoğraflar dosya adı, tarih, cihaz bilgisi ve bazı durumlarda konum gibi metadata içerebilir. Platformlar bu verilerin bir kısmını kaldırabilir, bazıları koruyabilir. Hassas paylaşımda metadata ve görünür arka plan ayrıntıları birlikte düşünülmelidir.

### Dijital ayak izi yalnız “kötü şeyler” değildir

Proje portföyü, GitHub çalışmaları, yarışma katılımı ve üretken içerikler de olumlu dijital ayak izinin parçası olabilir. Amaç internette hiç iz bırakmamak değil, **bilinçli ve kontrollü iz** bırakmaktır.

## 7. Birlikte uygulayalım: gizlilik denetimi

<div class="practice-panel" markdown="1">

Gerçek kişisel bilgileri sınıfta paylaşmadan kendi cihazında kontrol et:

1. Tarayıcıda bir sitenin izin ayarlarını aç.
2. Kamera, mikrofon, konum ve bildirim izinlerinin ne durumda olduğunu incele.
3. “Bu izin neden gerekli?” sorusunu bir örnek site için cevapla.
4. Tarayıcının gizli/özel penceresini aç ve normal pencereyle farklarını yaz.
5. İşletim sistemi uygulama izinlerinden kamera veya mikrofon erişimi olan uygulamaları incele.
6. Kullanmadığın bir uygulama/hizmet varsa erişimini kaldırmanın yolunu bul.
7. Örnek bir sosyal medya paylaşımı için “kim görebilir, içinde hangi kişisel ipuçları var, başka biri etkileniyor mu?” kontrolü yap.

</div>

## 8. Sık yapılan hatalar ve ders özeti

<div class="mistake-panel" markdown="1">

- Her izin penceresinde düşünmeden “İzin ver” seçmek.
- HTTPS varsa sitenin gizlilik açısından da kusursuz olduğunu düşünmek.
- Gizli modun seni okul ağına veya web sitesine görünmez yaptığını sanmak.
- Bir gönderiyi silince tüm kopyalarının yok olduğunu varsaymak.
- Başkasının fotoğrafını “ben çektim” diyerek izin almadan paylaşmak.
- Kullanılmayan uygulamaların eski izinlerini açık bırakmak.

</div>

**Ders sonunda:** gizlilik ile güvenliği ayırt edebilmeli, site ve uygulama izinlerini amaçla ilişkilendirebilmeli, gizli modun sınırlarını açıklayabilmeli ve dijital ayak izi konusunda paylaşmadan önce risk değerlendirmesi yapabilmelisin.

<details class="source-note"><summary>Kaynak kontrolü</summary><p>Google Chrome Help'teki güncel site izinleri yaklaşımı ve modern tarayıcı/işletim sistemi gizlilik ilkeleri kontrol edilmiştir. İzin arayüzlerinin sürüme göre değişebileceği özellikle dikkate alınmıştır.</p></details>
