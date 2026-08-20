---
title: Yapay Zekâyı Etkili, Güvenli ve Doğru Kullanma
module_id: 29
updated: '2026-08-20'
summary: Üretken yapay zekâya açık görev ve bağlam vermeyi, çıktıyı adım adım iyileştirmeyi, kaynakları doğrulamayı, gizliliği korumayı ve akademik etik sınırları gözetmeyi uyguluyoruz.
quiz: /uygulamalar/4-6-yapay-zekayi-etkili-guvenli-ve-dogru-kullanma/
permalink: /dersler/4-6-yapay-zekayi-etkili-guvenli-ve-dogru-kullanma/
---
<div class="lesson-goals" markdown="1">

**Bu derste ne öğreneceğiz?**

Yapay zekâdan “tek seferde mükemmel cevap” beklemek yerine **amaç + bağlam + sınır + çıktı biçimi + doğrulama** yaklaşımını kullanacağız. Kişisel/gizli veriyi korumayı, uydurma kaynaklara karşı kontrol yapmayı, AI kullanımını gerektiğinde açıklamayı ve üretilen sonucu kendi düşüncemizle değerlendirmeyi öğreneceğiz.

</div>

<div class="prompt-formula" aria-label="Etkili yapay zekâ isteği formülü"><div><b>Amaç</b><span>Ne istiyorum?</span></div><div><b>Bağlam</b><span>Ne bilmesi gerekiyor?</span></div><div><b>Sınır</b><span>Neye uymalı?</span></div><div><b>Çıktı</b><span>Nasıl sunmalı?</span></div><div><b>Kontrol</b><span>Neyi doğrulamalıyım?</span></div></div>

## 1. Önce görev: AI kullanmak gerçekten gerekli mi?

### Araç seçimi problemden sonra gelir

Her işi üretken yapay zekâ ile yapmak gerekmez. Basit toplama için hesap makinesi, kesin mevzuat için resmî kaynak, dosya aramak için arama kutusu daha uygun olabilir.

Kendine sor:

1. Görev fikir üretme mi, doğrulanmış bilgi bulma mı?
2. Hata olursa etkisi nedir?
3. Kaynağı kontrol edebilir miyim?
4. Bu görevde AI kullanımı okul/yarışma kuralına uygun mu?
5. Girdi olarak hassas veri vermem gerekir mi?

### Yüksek etkili görevlerde insan kontrolü artar

Sağlık, hukuk, finans, güvenlik veya gerçek kişiler hakkında ciddi kararlar gibi alanlarda tek bir AI çıktısına dayanmak uygun değildir. Bu dersin hedefi üretken yapay zekâyı **yardımcı araç** olarak kullanmaktır.

## 2. Etkili prompt: ne istediğini açık yaz

### “İyi prompt” sihirli kelime değildir

Prompt, modele verdiğin talimat ve bağlamdır. Uzun olması şart değildir; görevin belirsizliğini azaltması gerekir.

<div class="compare-grid"><div class="compare-card"><strong>Belirsiz</strong><p>“Bana robotik anlat.”</p></div><div class="compare-card"><strong>Daha iyi</strong><p>“Ortaokul öğrencisine servo motor ile DC motor farkını 5 maddede açıkla; her biri için bir kullanım örneği ver; en sonda iki kontrol sorusu sor.”</p></div></div>

### Beş parçalı prompt formülü

**Amaç:** Yapılacak işi söyle.  
**Bağlam:** Seviye, konu, elindeki veri veya önceki çalışma.  
**Sınır:** Uzunluk, kullanılmayacak yöntem, tarih aralığı gibi kısıtlar.  
**Çıktı:** Tablo, madde, açıklama, soru seti gibi biçim.  
**Kontrol:** Belirsizliği belirtmesini, kaynak istemeyi veya varsayımları işaretlemesini iste.

### Örnek

```text
Amaç: Güneş paneli projem için riskleri bul.
Bağlam: Ortaokul düzeyinde, 6V panel + küçük DC motor kullanıyorum.
Sınır: Yalnız düşük gerilimli sınıf uygulamasını ele al; 8 maddeyi geçme.
Çıktı: Risk | Neden | Önlem tablosu.
Kontrol: Emin olmadığın teknik iddiaları “doğrula” etiketiyle işaretle.
```

## 3. Tek sefer yerine iterasyon

### İlk cevap taslaktır

OpenAI'nin güncel doğruluk rehberi de ChatGPT gibi dil modellerinin yanlış veya yanıltıcı içerik üretebileceğini ve önemli bilgilerin doğrulanması gerektiğini açıkça belirtir. Bu yaklaşım tüm üretken AI araçları için yararlı bir alışkanlıktır: **ilk çıktıyı son teslim sayma.**

### İyileştirme komutları

- “Bu açıklamadaki varsayımları listele.”
- “İki farklı yaklaşımı artı/eksi olarak karşılaştır.”
- “Bunu 12 yaş düzeyine sadeleştir ama teknik terimleri koru.”
- “Hangi kısımlar güncel kaynağa ihtiyaç duyuyor?”
- “Cevabındaki çelişkileri kontrol et.”
- “Bu planı verilen ölçütlere göre eleştir.”

### Modelin kendi kendini kontrol etmesi yeterli mi?

Hayır. Modelin “kontrol ettim, doğru” demesi bağımsız kanıt değildir. Gerçek doğrulama için **harici ve güvenilir kaynak** gerekir.

## 4. Kaynak ve gerçeklik doğrulaması

### Kaynak iste, sonra kaynağı aç

AI bir bağlantı veya makale adı verdiğinde:

1. Kaynak gerçekten var mı?
2. Yazar/kurum doğru mu?
3. Tarih güncel mi?
4. Kaynak gerçekten iddiayı destekliyor mu?
5. Birincil kaynağa ulaşılabiliyor mu?

### Birincil kaynak önceliği

Teknik özellikte üretici dokümanı, yasada resmî mevzuat, yarışma kuralında organizatör sayfası, bilimsel iddiada özgün çalışma veya güvenilir akademik kaynak tercih edilir.

### AI arama yapıyorsa bile kontrol et

Web araması veya belge aracı kullanan AI daha güncel cevap verebilir; fakat yanlış sayfayı seçebilir, tarihleri karıştırabilir veya kaynağı hatalı özetleyebilir. **Kaynaklı cevap = otomatik doğru cevap** değildir.

### Sayı ve hesap

Önemli hesaplarda hesap makinesi, elektronik tablo veya kod aracıyla sonucu tekrar kontrol et. Birim dönüşümleri ve yüzde hesapları özellikle gözden geçirilmelidir.

## 5. Gizlilik ve güvenlik: AI'a ne vermemeliyiz?

### Prompt da veri aktarımıdır

Bir AI hizmetine yazdığın metin, yüklediğin dosya veya görsel o hizmete veri gönderir. Hizmetlerin saklama, eğitim, paylaşım ve yönetici erişimi politikaları farklı olabilir.

### Gizli bilgileri girdi yapma

Genel kural olarak şunları rastgele AI araçlarına verme:

- parola, OTP, kurtarma kodu,
- kimlik/finans bilgileri,
- başkasına ait özel mesajlar,
- kurumun gizli belgeleri,
- öğrencilerin gereksiz kişisel bilgileri,
- yayımlanmamış hassas proje verileri.

Gerekirse veriyi anonimleştir, örnek veri üret veya kurumun onaylı aracını kullan.

### “AI'a yükledim, internete yayınladım” birebir aynı değildir

Her hizmetin veri işleme biçimi farklıdır. Ancak bu belirsizlik, **gizli veriyi yüklememek için ek neden** oluşturur. Kurum/okul politikasını ve hizmetin gizlilik ayarlarını kontrol et.

### AI çıktısındaki kodu körlemesine çalıştırma

Üretilen kod dosya silebilir, ağ isteği yapabilir veya güvenlik açığı içerebilir. Özellikle yönetici yetkisi isteyen komutları ne yaptığını anlamadan çalıştırma.

### Dış içerikte talimat olabilir

AI web sayfası veya belge okuyorsa içerikte modele yönelik kötü niyetli talimatlar bulunabilir. Buna **prompt injection** denebilir. Kullanıcı açısından temel savunma: kaynak içindeki talimatı “yetkili komut” sanmamak, hassas işlemlerde sonucu kontrol etmek ve gereksiz yetki vermemektir.

## 6. Akademik dürüstlük ve üretkenlik dengesi

### Öğrenme hedefini devretme

Bir ödev “Python'da döngüyü öğrenmek” için verildiyse AI'a tüm programı yazdırıp anlamadan teslim etmek hedefi kaçırır. Daha iyi kullanım:

1. önce kendin dene,
2. takıldığın noktayı sor,
3. açıklama iste,
4. çözümü kendin yeniden kur,
5. kodu test et ve anlatabilir hâle gel.

### AI kullanımını açıklama

Okul, öğretmen, yarışma veya yayın politikası AI yardımının açıklanmasını isteyebilir. Kullanılan aracın adı, hangi amaçla kullanıldığı ve hangi kısımların insan tarafından doğrulandığı belirtilmesi gerekebilir.

### Kaynak yerine AI yazma

“Kaynak: ChatGPT” yazmak, AI'ın ürettiği bilimsel iddianın asıl kaynağını göstermez. AI yardımcı araç olabilir; iddianın dayandığı gerçek kaynak ayrıca bulunmalıdır.

### İnsan üretimi ve sahiplik

Teslim edilen metni okuyup anlamak, düzenlemek, kaynaklarını kontrol etmek ve sonuçların arkasında durmak öğrencinin sorumluluğudur.

## 7. Birlikte uygulayalım: iyi prompt + doğrulama zinciri

<div class="practice-panel" markdown="1">

**Görev:** “Güneş enerjisinin okulda kullanılabileceği üç alanı araştır.”

1. Önce kendin üç olası kullanım yaz.
2. AI'a amaç, seviye ve çıktı biçimini belirten bir prompt hazırla.
3. Cevaptaki en az üç doğrulanabilir iddiayı işaretle.
4. AI'dan bu iddialar için birincil kaynak önerileri iste.
5. Kaynakları gerçekten aç ve iddiaları destekleyip desteklemediğini kontrol et.
6. Yanlış/eksik bir madde bulursan promptu düzelterek yeniden çalıştır.
7. Son metinde AI'dan ne için yararlandığını bir cümleyle belirt.
8. Kendi değerlendirmene göre “AI neyi hızlandırdı, neyi benim kontrol etmem gerekti?” sorusunu cevapla.

</div>

## 8. Son kontrol listesi ve ders özeti

<div class="ai-checklist" markdown="1">

**AI çıktısını kullanmadan önce:**

- Görevin amacını doğru verdim mi?
- Gerekli bağlamı verdim mi, gereksiz kişisel veri verdim mi?
- Çıktıdaki gerçekleri bağımsız kaynaktan kontrol ettim mi?
- Kaynaklar gerçekten var mı ve iddiayı destekliyor mu?
- Tarih/sürüm güncel mi?
- Kod veya komutun ne yaptığını anlıyor muyum?
- Okul/yarışma AI politikasına uyuyor muyum?
- Sonucun kendi çalışmamın parçası olduğunu açıklayabilecek miyim?

</div>

<div class="mistake-panel" markdown="1">

- “Daha uzun prompt her zaman daha iyi sonuç verir” sanmak.
- Model “eminim” dedi diye doğrulamayı bırakmak.
- Uydurma makale ve URL'leri kaynakçaya eklemek.
- Kişisel/gizli veriyi örnek olsun diye prompta yapıştırmak.
- AI kodunu anlamadan yönetici yetkisiyle çalıştırmak.
- Okulun/yarışmanın AI kullanım kuralını kontrol etmemek.
- Öğrenme görevini tamamen AI'a yaptırıp sonucu açıklayamamak.

</div>

**Ders sonunda:** etkili bir promptu amaç–bağlam–sınır–çıktı biçimiyle yazabilmeli, yanıtı iteratif olarak iyileştirebilmeli, önemli iddiaları gerçek kaynaklardan doğrulayabilmeli, kişisel/gizli verileri koruyabilmeli ve akademik etik kurallarına uygun AI kullanımı planlayabilmelisin.

<details class="source-note"><summary>Kaynak kontrolü</summary><p>UNESCO'nun insan merkezli ve güvenli AI eğitimi yaklaşımı, NIST Generative AI Profile'daki confabulation/gizlilik riskleri ve OpenAI'nin güncel “Does ChatGPT tell the truth?” doğruluk rehberi kontrol edilmiştir. Ders, tek bir AI ürününe bağımlı kalmayacak şekilde hazırlanmıştır.</p></details>
