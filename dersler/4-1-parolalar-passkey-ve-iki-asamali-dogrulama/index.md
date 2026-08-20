---
title: Parolalar, Passkey ve İki Aşamalı Doğrulama
module_id: 24
updated: '2026-08-20'
summary: Hesap güvenliğini uzun ve benzersiz parolalar, parola yöneticisi, çok faktörlü doğrulama, passkey ve güvenli kurtarma yöntemleriyle güçlendirmeyi öğreniyoruz.
quiz: /uygulamalar/4-1-parolalar-passkey-ve-iki-asamali-dogrulama/
permalink: /dersler/4-1-parolalar-passkey-ve-iki-asamali-dogrulama/
---
<div class="lesson-goals" markdown="1">

**Bu derste ne öğreneceğiz?**

Bir hesabı yalnızca parola ile korumanın neden yeterli olmayabileceğini; **uzun ve benzersiz parola**, **parola yöneticisi**, **çok faktörlü doğrulama (MFA/2FA)**, **passkey** ve **hesap kurtarma** yöntemlerinin birbirini nasıl tamamladığını öğreneceğiz. Amaç, tek tek düğmeleri ezberlemek değil, hangi giriş yönteminin hangi riski azalttığını anlayabilmektir.

</div>

<div class="security-layers" aria-label="Hesap güvenliği katmanları"><div><b>1</b><span>Benzersiz parola</span></div><div><b>2</b><span>MFA / passkey</span></div><div><b>3</b><span>Kurtarma planı</span></div><div><b>4</b><span>Uyarı ve kontrol</span></div></div>

## 1. Hesap güvenliği neden katmanlı olmalıdır?

### Kullanıcı adı tek başına gizli değildir

Birçok hizmette e-posta adresimiz veya kullanıcı adımız başkaları tarafından bilinebilir. Hesabı koruyan asıl mekanizma, **kimliğimizi doğrulayan giriş yöntemi** ve hesabın kurtarma ayarlarıdır.

### Tek bir savunmaya güvenmek risklidir

Parola güçlü olsa bile sahte giriş sayfasına yazılabilir, veri ihlalinde ele geçirilebilir veya başka hesapta tekrar kullanılmış olabilir. Bu nedenle güvenlikte **katmanlı savunma** yaklaşımı kullanılır.

```text
Parola ele geçirildi
        ↓
İkinci doğrulama / passkey var mı?
        ↓
Şüpheli giriş uyarısı fark edildi mi?
        ↓
Hesap kurtarma bilgileri güvenli mi?
```

Bir katman sorun yaşadığında diğer katmanlar hesabı korumaya devam edebilir.

### Tehdit modeli düşüncesi

“En güçlü yöntem hangisi?” sorusundan önce “Neye karşı korunuyorum?” sorusu sorulmalıdır. Tahmin edilme, parola tekrar kullanımı, phishing, cihaz kaybı ve hesap kurtarma saldırıları farklı önlemler gerektirir.

## 2. Güçlü parola: uzun, benzersiz ve yönetilebilir

### Uzunluk neden önemlidir?

Parolanın tahmin edilmesini zorlaştıran önemli özelliklerden biri uzunluktur. Güncel NIST kimlik doğrulama rehberi, parola tek başına doğrulama faktörü olduğunda hizmet sağlayıcıların **en az 15 karaktere izin vermesi/istemesi** yönünde teknik gereksinimler tanımlar. Kullanıcı açısından çıkarım nettir: kısa ve kolay tahmin edilen parola yerine **uzun bir parola veya parola cümlesi** tercih etmek daha güvenlidir.

### Benzersizlik uzunluk kadar önemlidir

Aynı parolayı okul hesabında, oyun hesabında ve e-postada kullanırsan bir hizmetteki veri ihlali diğer hesapları da tehlikeye atabilir. Buna **credential stuffing** denilen otomatik giriş denemeleri de eşlik edebilir.

<div class="compare-grid"><div class="compare-card"><strong>Zayıf alışkanlık</strong><p>Aynı parolayı birçok hesapta kullanmak.</p></div><div class="compare-card"><strong>Daha güvenli alışkanlık</strong><p>Her önemli hesap için benzersiz parola veya passkey kullanmak.</p></div></div>

### “Karmaşık görünen” her parola güçlü değildir

`P@rola123!` gibi tahmin edilebilir kalıplar sembol içerdiği için otomatik olarak güçlü olmaz. Kişisel bilgi, takım adı, doğum yılı, okul adı ve art arda gelen klavye dizileri kolay tahmin edilebilir.

### Parolayı takvimle değiştirmek gerekir mi?

Güncel güvenlik yaklaşımı, sırf belirli süre geçti diye kullanıcıyı sürekli parola değiştirmeye zorlamayı temel çözüm olarak görmez. **Parolanın ele geçirildiğinden şüpheleniliyorsa, veri ihlali varsa veya hizmet bunu güvenlik nedeniyle istiyorsa** değiştirmek gerekir. Asıl hedef benzersiz ve güçlü bir giriş yöntemidir.

## 3. Parola yöneticisi ve güvenli parola alışkanlıkları

### Parola yöneticisi ne yapar?

Parola yöneticisi her hesap için uzun ve benzersiz parola üretmeye, bunları saklamaya ve doğru sitede doldurmaya yardımcı olabilir. Böylece onlarca parolayı ezberlemek yerine parola kasasına erişimi güvenli tutmaya odaklanırsın.

### Ana parola neden farklıdır?

Parola yöneticisinin ana parolası, diğer hesapların anahtarını korur. Bu nedenle:

- başka hesaplarda kullanılmamalı,
- uzun ve hatırlanabilir olmalı,
- mümkünse parola yöneticisinin sunduğu güçlü MFA/passkey ile desteklenmelidir.

### Tarayıcı ve işletim sistemi parola yöneticileri

Modern tarayıcı ve işletim sistemlerinde yerleşik parola yöneticileri bulunabilir. Üçüncü taraf parola yöneticileri de vardır. Hangi çözüm kullanılırsa kullanılsın güncelleme, cihaz kilidi, hesap kurtarma ve MFA ayarları kontrol edilmelidir.

### Parola paylaşımı

Parolayı mesajla, e-postayla veya ortak belgede saklamak güvenli değildir. Bir ekip hesabının paylaşılması gerekiyorsa kurumun sunduğu **yetki paylaşımı veya parola yöneticisi paylaşım özelliği** gibi yöntemler tercih edilmelidir.

## 4. İki aşamalı ve çok faktörlü doğrulama

### Faktör nedir?

Kimlik doğrulamada faktörler genel olarak üç grupta düşünülür:

<div class="factor-grid"><div><b>Bildiğin</b><span>Parola, PIN</span></div><div><b>Sahip olduğun</b><span>Telefon, güvenlik anahtarı</span></div><div><b>Olduğun</b><span>Parmak izi, yüz gibi biyometrik özellik</span></div></div>

**MFA (Multi-Factor Authentication)** farklı türden iki veya daha fazla doğrulama kanıtını bir araya getirir. “2FA” ise iki faktör kullanılan durumları anlatır.

### Her ikinci adım aynı güçte değildir

SMS veya e-posta kodu, yalnız paroladan daha iyi bir koruma sağlayabilir; ancak kod kullanıcı tarafından sahte siteye girilebilir. Kimlik doğrulama uygulaması kodları da phishing ile kandırılabilir. Güvenlik anahtarları ve FIDO tabanlı passkey gibi yöntemler **phishing-resistant** olacak şekilde tasarlanabilir.

### MFA yorgunluğu

Saldırgan art arda giriş onayı gönderip kullanıcının yanlışlıkla “Onayla” düğmesine basmasını bekleyebilir. **Kendin başlatmadığın giriş isteğini onaylama.** Uygulama sayı eşleştirme gibi yöntem sunuyorsa ekrandaki sayıyı kontrol et.

### Yedek kodlar

Bir hizmet yedek kurtarma kodları veriyorsa bunları ekran görüntüsü olarak herkese açık bulutta tutmak yerine güvenli ve erişilebilir bir yerde sakla. Yedek kod da hesaba giriş anahtarıdır.

## 5. Passkey nedir ve neden farklıdır?

### Parola değil, kriptografik kimlik bilgisidir

**Passkey**, FIDO standartlarına dayanan bir giriş kimlik bilgisidir. Hizmet için oluşturulan bir **kriptografik anahtar çifti** kullanır. Gizli anahtar kullanıcının cihazı veya passkey sağlayıcısı tarafında korunur; hizmet tarafına parolanın kendisi gibi ortak bir sır gönderilmez.

<div class="passkey-flow" aria-label="Passkey giriş akışı"><span>Gerçek site</span><i>↔</i><span>Kriptografik doğrulama</span><i>↔</i><span>Cihaz kilidi: PIN / biyometri</span></div>

### Biyometrik veri siteye mi gider?

Passkey kullanımında yüz veya parmak izi genellikle **cihazdaki passkey'i açmak için yerel olarak** kullanılır. FIDO açıklamasına göre biyometrik bilgi uzak siteye gönderilmez; site, cihazdaki doğrulamanın başarılı olduğuna ilişkin kriptografik sonucu kullanır.

### Neden phishing'e dayanıklıdır?

Passkey belirli web sitesi/hizmet alanına kriptografik olarak bağlıdır. Sahte site aynı kimlik bilgisini gerçek hizmet adına kullanamaz. Bu nedenle kullanıcıdan bir OTP kodunu okuyup sahte sayfaya yazmasını isteyen klasik phishing yöntemlerine karşı daha güçlüdür.

### Senkronize ve cihaza bağlı passkey

Bazı passkey'ler güvenli şekilde cihazlar arasında senkronize edilebilir; bazıları belirli cihaz veya fiziksel güvenlik anahtarına bağlı olabilir. Bu ayrım **yedekleme ve kurtarma planını** etkiler.

### “Passkey varsa hiçbir şey düşünmeme gerek yok” yanılgısı

Giriş yöntemi güçlü olsa bile saldırgan hesabın kurtarma kanalını, e-postayı veya açık oturumu hedefleyebilir. Bu yüzden e-posta hesabı, cihaz kilidi ve kurtarma ayarları da korunmalıdır.

## 6. Hesap kurtarma, oturumlar ve güvenlik uyarıları

### Kurtarma kanalı güvenlik zincirinin parçasıdır

Hesabın parolasını unuttuğunda kullanılan e-posta veya telefon numarası saldırganın da hedefi olabilir. Eski telefon numarasını kaldırmak, erişebildiğin güvenilir kurtarma kanallarını kullanmak önemlidir.

### Açık oturumları incele

Birçok hizmet “cihazların”, “oturumların” veya “son etkinliklerin” listesini gösterir. Tanımadığın cihaz görürsen:

1. oturumu sonlandır,
2. hesabın giriş yöntemini değiştir/güçlendir,
3. kurtarma bilgilerini kontrol et,
4. güvenlik bildirimlerini incele.

### Şüpheli giriş bildirimi

“Kendin miydin?” uyarısını otomatik onaylama. Konum bilgisi yaklaşık olabilir ama **zaman, cihaz ve işlem** birlikte değerlendirilmelidir.

### Cihaz kaybı senaryosu

Telefon veya bilgisayar kaybolduğunda sadece cihazı değil, cihazdaki açık oturumları ve passkey/parola erişimini de düşün. Uzaktan kilitleme/silme özellikleri ve yedek kurtarma yöntemi önceden hazırlanmalıdır.

## 7. Birlikte uygulayalım: hesap güvenliği kontrolü

<div class="practice-panel" markdown="1">

Gerçek parolalarımızı sınıfta **asla paylaşmadan** bir güvenlik denetimi yapalım.

1. Kullanılan hesap türlerini listele: okul, e-posta, oyun, sosyal medya, bulut vb.
2. Her hesap için “benzersiz giriş yöntemi var mı?” sorusunu işaretle.
3. Hizmet MFA veya passkey sunuyor mu kontrol et.
4. Varsa phishing'e daha dayanıklı seçeneği belirle.
5. Kurtarma e-postası/telefonu güncel mi kontrol et; sınıfta bilgiyi gösterme.
6. Yedek kodların güvenli saklandığından emin ol.
7. “Tanımadığım cihazlar/oturumlar” bölümünü bul ve ne işe yaradığını açıkla.
8. Kendin başlatmadığın bir MFA bildirimi gelirse ne yapacağını bir cümleyle yaz.

</div>

## 8. Sık yapılan hatalar ve ders özeti

<div class="mistake-panel" markdown="1">

- Her hesapta aynı güçlü parolayı kullanmak.
- Parola güçlü olduğu için MFA'ya gerek olmadığını düşünmek.
- Kendin başlatmadığın giriş onayını kabul etmek.
- OTP veya yedek kodu başka biriyle paylaşmak.
- Passkey ile cihaz PIN'inin aynı kavram olduğunu sanmak.
- Kurtarma e-postasını korumayı unutmak.
- Bir parola ele geçirildiyse aynı parolanın kullanıldığı diğer hesapları kontrol etmemek.

</div>

**Ders sonunda:** uzun ve benzersiz parola yaklaşımını açıklayabilmeli, parola yöneticisinin amacını bilmeli, MFA faktörlerini ayırt edebilmeli, passkey'in neden phishing'e dayanıklı olduğunu temel düzeyde anlatabilmeli ve hesap kurtarma planı oluşturabilmelisin.

<details class="source-note"><summary>Kaynak kontrolü</summary><p>İçerik hazırlanırken NIST SP 800-63B-4 Digital Identity Guidelines, CISA Secure Our World / MFA rehberleri ve FIDO Alliance passkey açıklamaları kontrol edilmiştir. Hizmetlerin menü adları zamanla değişebileceği için güvenlik ilkeleri merkeze alınmıştır.</p></details>
