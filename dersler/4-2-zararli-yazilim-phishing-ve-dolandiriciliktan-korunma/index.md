---
title: Zararlı Yazılım, Phishing ve Dolandırıcılıktan Korunma
module_id: 25
updated: '2026-08-20'
summary: Zararlı yazılımları, phishing ve sosyal mühendislik yöntemlerini tanımayı; bağlantı, ek, indirme, güncelleme ve hesap uyarılarında güvenli karar vermeyi öğreniyoruz.
quiz: /uygulamalar/4-2-zararli-yazilim-phishing-ve-dolandiriciliktan-korunma/
permalink: /dersler/4-2-zararli-yazilim-phishing-ve-dolandiriciliktan-korunma/
---
<div class="lesson-goals" markdown="1">

**Bu derste ne öğreneceğiz?**

Bir saldırıyı yalnız “virüs” kelimesiyle açıklamak yerine **zararlı yazılım**, **phishing (oltalama)**, **sosyal mühendislik**, **sahte site**, **zararlı ek**, **dolandırıcılık** ve **ransomware** gibi farklı riskleri ayırt edeceğiz. Şüpheli bir mesaj geldiğinde tıklamadan önce nasıl doğrulama yapılacağını uygulayacağız.

</div>

<div class="threat-map" aria-label="Dijital tehdit haritası"><div><b>Mesaj</b><span>Phishing / smishing</span></div><div><b>Dosya</b><span>Zararlı yazılım</span></div><div><b>İnsan</b><span>Sosyal mühendislik</span></div><div><b>Hesap</b><span>Kimlik bilgisi hırsızlığı</span></div></div>

## 1. Zararlı yazılım nedir?

### Malware bir üst kavramdır

**Malware (zararlı yazılım)**, cihaza veya veriye zarar vermek, izinsiz erişim sağlamak, kullanıcıyı gözetlemek ya da kötüye kullanım yapmak için tasarlanmış yazılımların genel adıdır.

Yaygın örnekler:

- **Trojan:** Yararlı bir program gibi görünerek kullanıcıyı çalıştırmaya ikna edebilir.
- **Ransomware:** Dosyaları veya sistemi erişilemez hâle getirip fidye talep edebilir.
- **Spyware:** Kullanıcı etkinliği veya verileri hakkında izinsiz bilgi toplamaya çalışabilir.
- **Worm:** Ağlar veya sistemler arasında kendini yayabilen zararlı yazılım türüdür.
- **Adware / istenmeyen yazılım:** Yoğun reklam, yönlendirme veya istenmeyen değişiklikler yapabilir.

Her yavaş bilgisayar zararlı yazılım bulaştığı anlamına gelmez; teknik belirti **kanıt değildir**. Güncelleme, depolama doluluğu veya donanım sorunu da benzer belirtiler oluşturabilir.

### Zararlı yazılım nasıl gelir?

Sık yollar arasında sahte yazılım indirmeleri, korsan/crack paketleri, e-posta ekleri, kötü amaçlı bağlantılar, güncel olmayan yazılımdaki açıklar ve kullanıcıyı kandıran kurulumlar bulunur.

## 2. Phishing ve sosyal mühendislik

### Phishing nedir?

Phishing, saldırganın güvenilir bir kurum veya kişi gibi davranıp seni bağlantıya tıklamaya, ek açmaya, parola/kod vermeye ya da ödeme yapmaya ikna etmeye çalışmasıdır.

```text
Sahte güven → aciliyet → kullanıcı eylemi → bilgi/hesap/para kaybı
```

### Phishing yalnız e-posta değildir

- **Smishing:** SMS/mesaj üzerinden oltalama.
- **Vishing:** Telefon görüşmesi/sesli arama üzerinden kandırma.
- **QR phishing (quishing):** QR kod ile sahte adrese yönlendirme.
- **Sosyal medya DM'i:** “Hesabın şikâyet edildi”, “ödül kazandın” gibi mesajlar.

### Sosyal mühendislik neden çalışır?

Saldırgan teknik açık yerine insan davranışını hedefleyebilir. Özellikle şu duygular kullanılır:

- aciliyet: “10 dakika içinde hesabın kapanacak”,
- korku: “bilgisayarında virüs var”,
- merak: “bu videodaki sen misin?”,
- ödül: “bedava oyun parası kazandın”,
- otorite: “müdür/öğretmen/teknik destek adına yazıyorum”.

## 3. Şüpheli mesajı tıklamadan inceleme

### Gönderen görünen addan ibaret değildir

“Google Destek” yazması, mesajın gerçekten Google'dan geldiğini kanıtlamaz. Tam e-posta adresi ve özellikle `@` işaretinden sonraki alan adı incelenmelidir.

<div class="fake-message"><div class="fake-head"><b>HESABINIZ KAPANACAK!</b><span>destek@guvenlik-kontrol-example.com</span></div><p>5 dakika içinde hesabınızı doğrulamak için aşağıdaki bağlantıya tıklayın.</p><button type="button" disabled>Hemen Doğrula</button><small>⚠ Aciliyet + tanımadığın alan adı + giriş bilgisi isteme</small></div>

### Bağlantı metni ile gerçek adres farklı olabilir

Ekranda `okul.gov.tr` yazarken tıklanan bağlantı başka bir alan adına gidebilir. Bilgisayarda bağlantının üzerine gelerek hedefi görmek yardımcı olabilir; mobilde ise uzun basma/önizleme davranışı uygulamaya göre değişir. **En güvenlisi, hassas işlem için mesajdaki bağlantıyı kullanmak yerine bildiğin resmi uygulamayı veya adresi kendin açmaktır.**

### HTTPS kilidi tek başına güven göstergesi değildir

Sahte siteler de HTTPS sertifikası kullanabilir. Kilit simgesi bağlantının şifreli olduğunu gösterebilir; sitenin iyi niyetli olduğunu garanti etmez. Alan adı ve bağlam ayrıca kontrol edilmelidir.

### Ek dosya ve QR kod da bağlantıdır

Beklenmeyen `.exe`, `.msi`, betik veya makro içeren Office dosyaları daha yüksek dikkat gerektirir. QR kodun nereye gittiğini görmeden hassas bilgi girme.

## 4. Şüpheli durumda doğru tepki

### Dur — doğrula — bildir

<div class="file-safety-flow" aria-label="Phishing karar akışı"><span>Dur</span><i>→</i><span>Bağlantıyı açma</span><i>→</i><span>Bağımsız kanaldan doğrula</span><i>→</i><span>Bildir / sil</span></div>

Örneğin banka mesajı geldiyse mesajdaki numarayı aramak yerine kartın arkasındaki veya bankanın resmi uygulamasındaki iletişim kanalını kullan. Öğretmenden gelen beklenmedik dosyada da ayrı bir kanaldan “Bu dosyayı siz mi gönderdiniz?” diye doğrulama yapılabilir.

### Parolayı zaten yazdıysan

1. Gerçek hizmete kendi bildiğin adresten gir.
2. Parolayı hemen değiştir.
3. Aynı parola başka hesaplarda kullanıldıysa onları da değiştir.
4. MFA'yı etkinleştir veya güçlendir.
5. Açık oturumları ve güvenlik etkinliklerini incele.
6. Gerekirse kurum/öğretmen/veli/BT sorumlusuna bildir.

### Kod verdiysen

OTP/MFA kodu kısa süreli olsa bile saldırgan onu anında kullanabilir. Hesabın oturumlarını ve güvenlik ayarlarını hemen kontrol et.

## 5. Güvenli indirme, kurulum ve güncelleme

### Yazılımı kaynağından edin

Mümkün olduğunda üreticinin resmi sitesi, güvenilir uygulama mağazası veya kurumun yazılım merkezi kullanılmalıdır. “Ücretsiz tam sürüm”, “crack”, “keygen” gibi paketler hem telif hem güvenlik riski taşır.

### Dosya uzantısını gör

`odev.pdf.exe` gibi çift uzantılı dosyalar yanıltıcı olabilir. Windows'ta dosya adı uzantılarını görünür tutmak, dosyanın gerçek türünü anlamaya yardım eder.

### Güvenlik uyarısını refleksle kapatma

Tarayıcı, Windows Security, SmartScreen veya uygulama mağazası bir dosya hakkında uyarı veriyorsa önce **neden uyardığını** oku. “Daha fazla bilgi → yine de çalıştır” seçeneği bulunması, dosyanın güvenli olduğu anlamına gelmez.

### Güncellemeler güvenliğin parçasıdır

Yazılım açıkları zamanla keşfedilir ve üreticiler güncellemelerle düzeltir. İşletim sistemi, tarayıcı, Office, PDF okuyucu ve diğer sık kullanılan yazılımları güncel tutmak önemlidir.

## 6. Ransomware, yedekleme ve olay sonrası davranış

### Ransomware ne yapabilir?

Ransomware dosyaları şifreleyebilir veya sisteme erişimi engelleyebilir. Bazı saldırılarda veri kopyalanıp ayrıca yayımlama tehdidi de kullanılabilir.

### Yedekleme neden güvenlik önlemidir?

Önemli verinin tek kopyası bilgisayarda ise disk arızası, yanlış silme veya ransomware büyük kayba dönüşebilir. Okul/proje dosyaları için kurum politikalarına uygun **birden fazla kopya** ve mümkünse ana cihazdan bağımsız bir yedek bulundurmak gerekir.

### Bulaşma şüphesinde ne yapmalı?

Öğrenci düzeyinde amaç kendi başına “virüs avlamak” değil, zararı büyütmemektir:

- şüpheli programı tekrar çalıştırma,
- kurumsal cihazsa BT sorumlusuna haber ver,
- önemli hesaplarda şüpheli oturumları kontrol et,
- güvenlik yazılımını kapatma,
- rastgele “temizleme aracı” indirme.

## 7. Dolandırıcılık senaryolarını tanıma

### Para dışında hesap da hedef olabilir

Oyun hesabı, sosyal medya profili, e-posta, hediye kartı kodu ve dijital ürünler değerlidir. “Hesabını doğrula”, “skin kazan”, “arkadaşın acil para istiyor” gibi senaryolar kullanılabilir.

### Yapay zekâ ikna gücünü artırabilir

Sahte mesajlar artık daha düzgün dilde yazılabilir; ses ve görüntü de taklit edilebilir. Bu nedenle yalnız yazım hatası aramak yeterli değildir. **Kaynağı bağımsız kanaldan doğrulamak** daha sağlam yöntemdir.

### Ödeme ve kişisel bilgi

Seni acele ettiren, hediye kartı/kripto gibi geri döndürülmesi zor yöntem isteyen veya “kimseye söyleme” diyen talepler güçlü uyarı işaretidir. Şüphede işlem yapma ve güvendiğin yetişkin/kurumla kontrol et.

## 8. Birlikte uygulayalım ve ders özeti

<div class="practice-panel" markdown="1">

Öğretmen üç örnek mesaj gösterir: gerçek bildirim, şüpheli e-posta ve sahte ödül mesajı.

Her mesaj için şu tabloyu doldur:

| Kontrol | Bulgum |
|---|---|
| Gönderen alan adı |  |
| Aciliyet/korku var mı? |  |
| Bağlantı veya ek var mı? |  |
| Parola/kod/ödeme istiyor mu? |  |
| Bağımsız doğrulama yolu |  |
| Güvenli karar |  |

Sonra “tıklamadan doğrulama” adımlarını sınıfta sözlü olarak uygula.

</div>

<div class="mistake-panel" markdown="1">

- Yazım hatası yoksa mesajı gerçek sanmak.
- HTTPS kilidini “site kesin güvenli” diye yorumlamak.
- Arkadaş hesabından geldi diye bağlantıyı sorgulamamak; hesap ele geçirilmiş olabilir.
- Güvenlik uyarısını okumadan kapatmak.
- Korsan/crack yazılımı yalnız telif konusu sanıp güvenlik riskini unutmak.
- Phishing'e yakalandığını gizlemek ve hesabı geç korumaya almak.

</div>

**Ders sonunda:** malware türlerini genel düzeyde ayırt edebilmeli, phishing ve sosyal mühendislik işaretlerini tanıyabilmeli, şüpheli mesajı bağımsız kanaldan doğrulayabilmeli ve olay sonrası ilk güvenli adımları sıralayabilmelisin.

<details class="source-note"><summary>Kaynak kontrolü</summary><p>CISA Secure Our World, Recognize & Report Phishing, Turn On MFA ve güncel güvenlik rehberlerindeki temel davranışlar kontrol edilmiştir. Arayüz veya ürün adı yerine “dur, doğrula, bildir; güncelle; güçlü kimlik doğrulama kullan” ilkeleri merkeze alınmıştır.</p></details>
