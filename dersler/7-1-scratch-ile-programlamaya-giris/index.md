---
title: Scratch ile Programlamaya Giriş
module_id: 42
updated: '2026-08-21'
summary: Scratch'in Türkçe web ve masaüstü uygulamasında kukla, sahne, olay, sıra, döngü, koşul, değişken ve haber salma kavramlarını uygulamalı olarak öğreniyoruz.
quiz: /uygulamalar/7-1-scratch-ile-programlamaya-giris/
permalink: /dersler/7-1-scratch-ile-programlamaya-giris/
---
<div class="lesson-goals" markdown="1">

**Bu derste ne öğreneceğiz? — Program dili: Türkçe (web + masaüstü Scratch uygulaması)**

Bu derste Scratch'i iki ortamda kullanacağız: **scratch.mit.edu üzerindeki web düzenleyicisi** ve internet bağlantısı olmadan proje hazırlamaya imkân veren **Scratch masaüstü uygulaması**. Ayrıca öğretmenin yönlendirmesiyle [Programlamaya Giriş Scratch stüdyosunu](https://scratch.mit.edu/studios/1611338) inceleyerek paylaşılmış projelerin nasıl okunacağını göreceğiz. Amacımız bir projeyi yalnız çalıştırmak değil; **olay → komut sırası → tekrar → karar → veri** mantığını okuyup kendi küçük etkileşimli programımızı kurmaktır.

</div>

<div class="archive-flow" aria-label="Scratch program geliştirme akışı"><span>Fikri belirle</span><i>→</i><span>Kukla ve sahneyi seç</span><i>→</i><span>Olay ekle</span><i>→</i><span>Blokları sırala</span><i>→</i><span>Çalıştır ve gözle</span><i>→</i><span>Hata varsa düzelt</span></div>

## 1. Scratch nedir, web ve masaüstü sürümü ne işe yarar?

### Bloklarla programlama ortamıdır

Scratch; etkileşimli hikâye, oyun ve animasyon üretmek için renkli kod bloklarını birbirine bağladığımız bir programlama ortamıdır. Blokların biçimleri hangi blokların birbirine bağlanabileceğini görsel olarak gösterdiği için sözdizimi hatalarını azaltır; fakat **algoritma kurma, olayları sıralama ve hata ayıklama** yine öğrencinin düşünmesini gerektirir.

### Web sürümü

Web sürümünde `scratch.mit.edu` üzerinden **Oluştur** alanına girilerek düzenleyici açılır. İnternet bağlantısı ve uygun tarayıcı gerekir. Hesapla giriş yapıldığında projeleri çevrim içi kaydetme ve Scratch topluluğunda paylaşma olanakları bulunur. Paylaşım yaparken ad-soyad, okul içi özel bilgi, telefon, adres veya parola gibi kişisel bilgiler projeye eklenmemelidir.

### Masaüstü Scratch uygulaması

Scratch uygulaması desteklenen işletim sistemlerinde projeleri çevrim dışı oluşturmak için kullanılabilir. Temel Scratch 3 düzenleme mantığı web sürümüyle aynıdır: **Kod, Kostümler, Sesler, Sahne ve Kuklalar** üzerinden çalışılır. Proje bilgisayara `.sb3` dosyası olarak kaydedilebilir. Çevrim dışı çalışmak, projenin otomatik olarak çevrim içi paylaşıldığı anlamına gelmez.

### Verilen Scratch stüdyosu ne için kullanılacak?

`https://scratch.mit.edu/studios/1611338` adresindeki **Programlamaya Giriş** stüdyosu, öğretmen rehberliğinde örnek projeleri incelemek için kullanılacaktır. Bir **stüdyo**, Scratch düzenleyicisinin kendisi değil; bir araya getirilmiş Scratch projelerinin bulunduğu koleksiyon alanıdır. Projeyi açınca önce çalıştır, sonra **İçine Bak** seçeneğiyle kullanılan blokları incele. Stüdyodaki proje listesi zamanla değişebileceği için bu ders belirli bir projeye bağımlı değildir.

## 2. Türkçe Scratch düzenleyicisini tanıyalım

Scratch çok sayıda dilde kullanılabilir. Web sayfası ve düzenleyicide dil seçimi yapılabilir; masaüstü uygulamasında da dil ayarından **Türkçe** seçilebilir. Sürüme göre küçük yerleşim farkları olsa da temel bölümler aynıdır.

<div class="app-demo" aria-label="Scratch Türkçe arayüz şeması"><div class="app-demo-titlebar"><b>Scratch</b><span>Proje adı</span></div><div class="app-demo-toolbar"><span>Kod</span><span>Kostümler</span><span>Sesler</span><span>Yeşil Bayrak</span><span>Durdur</span></div><div class="app-demo-body"><div class="app-demo-sidebar"><span>Hareket</span><span>Görünüm</span><span>Ses</span><span>Olaylar</span><span>Kontrol</span><span>Algılama</span><span>İşlemler</span><span>Değişkenler</span></div><div class="app-demo-stage"><div class="archive-files"><div><b>Blok paleti</b><span>Komutları seç</span></div><div><b>Kod alanı</b><span>Blokları birleştir</span></div><div><b>Sahne</b><span>Sonucu izle</span></div><div><b>Kuklalar</b><span>Programlanacak nesneler</span></div></div></div></div></div>

### Kukla ve sahne farklıdır

- **Kukla (sprite):** Kod verebildiğimiz karakter veya nesnedir.
- **Sahne (stage):** Kuklaların hareket ettiği görüntü alanıdır. Sahnenin de arka planları ve kendine ait kodları olabilir.
- **Kostüm:** Bir kuklanın farklı görünümüdür.
- **Dekor/arka plan:** Sahnenin görünümüdür.

Bir blok yazmadan önce **hangi kuklanın seçili olduğuna** bakmak çok önemlidir. Yanlış kukla seçiliyken eklenen kod başka nesneye ait olur.

## 3. Olay, sıra ve hareket: program nereden başlar?

### Olay programı başlatır

Scratch'te birçok betik bir olay bloğuyla başlar. Örneğin **“yeşil bayrak tıklandığında”**, **“bu kukla tıklandığında”** veya **“... tuşuna basılınca”** gibi olaylar programın ne zaman çalışacağını belirler.

### Sıra sonucu değiştirir

Aşağıdaki düşünceyi bloklara dönüştürelim:

1. Yeşil bayrak tıklanınca,
2. başlangıç noktasına git,
3. “Merhaba!” de,
4. 40 adım ilerle,
5. 1 saniye bekle.

Aynı blokları farklı sırada kullanırsak ekranda gördüğümüz davranış da değişebilir. Programlama yalnız “hangi komutlar var?” sorusu değil, **“hangi sırada ve ne zaman çalışıyor?”** sorusudur.

### Koordinatlar

Scratch sahnesinin merkezi yaklaşık olarak **x = 0, y = 0** noktasıdır. Standart sahnede x ekseni soldan sağa `-240` ile `240`, y ekseni aşağıdan yukarı `-180` ile `180` aralığındadır. `x'i ... yap`, `y'yi ... yap` veya `x: ... y: ... konumuna git` bloklarıyla kuklanın konumu yönetilebilir.

## 4. Döngüler ve koşullar: aynı işi akıllıca tekrar etmek

### Döngü tekrar sağlar

Aynı bloğu on kez kopyalamak yerine **“10 defa tekrarla”** kullanılabilir. Sürekli devam etmesi gereken davranışlarda **“sürekli tekrarla”** kullanılır. Döngünün içine hangi blokların yerleştirildiği önemlidir.

### Koşul karar verir

**“eğer ... ise”** ve **“eğer ... ise / değilse”** blokları bir durumun doğru olup olmadığına göre farklı davranış üretir. Örneğin:

- Eğer kenara değiyorsa yönünü değiştir.
- Eğer puan 10'a ulaştıysa “Kazandın!” de.
- Eğer boşluk tuşuna basılıysa zıpla.

Koşulun içine yerleştirilen altıgen biçimli ifade, `doğru/yanlış` sonucu üretmelidir.

## 5. Değişken, algılama ve işlemler

### Değişken bilgi saklar

**Değişken**, program çalışırken değişebilen bir değeri isimle saklamamızı sağlar. Oyunlardaki `puan`, `can` veya `süre` buna örnektir. Proje başlarken puanı `0` yapmak ve doğru hareket gerçekleştiğinde `1 değiştir` mantığı sık kullanılır.

### Algılama çevreden bilgi alır

Scratch'teki **Algılama** blokları; fareye değme, bir renge değme, tuşa basılma, fare konumu veya kullanıcıdan yanıt alma gibi bilgileri programa taşır.

### İşlemler hesap ve karşılaştırma yapar

Toplama, çıkarma, rastgele sayı, `<`, `>`, `=` ve mantıksal `ve/veya/değil` blokları **İşlemler** kategorisindedir. Örneğin `puan > 9` ifadesi bir koşulda kullanılabilir.

## 6. Haber salma ile kuklaların birlikte çalışması

Birden fazla kuklanın olduğu projelerde tüm kodu tek kuklaya yığmak yerine **haber salma (broadcast)** kullanılabilir. Bir kukla `oyun_bitti` mesajını yayınlar; diğer kuklalar **“oyun_bitti haberini aldığımda”** olayıyla kendi görevlerini başlatabilir.

Bu yöntem:

- farklı kuklaların görevlerini ayırır,
- kodun okunmasını kolaylaştırır,
- büyük projede olayların neden başladığını daha anlaşılır hâle getirir.

Mesaj adı anlamlı olmalıdır. `mesaj1` yerine `oyun_basla`, `seviye_bitti` gibi adlar tercih edilir.

## 7. Birlikte uygulayalım: “Yakalama Oyunu”

<div class="practice-panel" markdown="1">

1. Web Scratch'te veya Türkçe masaüstü uygulamasında yeni proje aç.
2. Bir **oyuncu** ve bir **hedef** kuklası seç.
3. Oyuncu kuklasında yeşil bayrak tıklandığında `x:0 y:-120` konumuna gitmesini sağla.
4. Sağ ve sol ok tuşlarına basıldığında oyuncunun x konumunu değiştir.
5. `puan` adlı değişken oluştur; yeşil bayrakta `0` yap.
6. Hedef kuklasını sahnede rastgele bir konuma gönder.
7. Hedef kuklasında sürekli döngü içinde “oyuncuya değiyor mu?” koşulunu denetle.
8. Değiyorsa puanı `1` artır ve hedefi yeniden rastgele konuma taşı.
9. Puan `5` olduğunda `oyun_bitti` mesajını yayınla.
10. Her iki kuklada `oyun_bitti haberini aldığımda` uygun bir bitiş davranışı oluştur.
11. Projeyi en az üç kez çalıştır; yanlış davranış varsa hangi olayın, döngünün veya koşulun sorunlu olduğunu tek tek kontrol et.
12. Masaüstü uygulamasındaysan projeyi `.sb3` olarak kaydet. Web sürümündeysen öğretmenin izin verdiği biçimde hesabına kaydet; kişisel bilgi paylaşma.

**Stüdyo incelemesi:** Öğretmenle birlikte verilen Programlamaya Giriş stüdyosundan bir proje seç. Önce sonucu tahmin et, sonra projeyi çalıştır, ardından **İçine Bak** bölümünde bir olay bloğu, bir döngü ve bir değişken bulmaya çalış. Bulamadığın yapı için “bu proje bunu kullanmıyor” demek de doğru bir gözlemdir.

</div>

## 8. Sık yapılan hatalar ve ders özeti

<div class="mistake-panel" markdown="1">

- Kod eklerken yanlış kuklanın seçili olduğunu fark etmemek.
- Olay bloğu eklemeden blok yığını hazırlayıp neden başlamadığını anlayamamak.
- `sürekli tekrarla` içine gereksiz veya hiç bitmemesi gereken işlemleri koymak.
- Değişkeni oyun başında sıfırlamayı unutmak.
- Bir koordinat değişiminde x ile y eksenini karıştırmak.
- Haber mesajlarına anlamsız adlar vermek ve hangi olayın neyi başlattığını kaybetmek.
- Web projesinin otomatik olarak masaüstündeki dosyaya veya masaüstü projesinin otomatik olarak Scratch sitesine eşitlendiğini sanmak.
- Stüdyoyu düzenleyicinin kendisi sanmak; stüdyo projeleri bir araya getiren koleksiyon alanıdır.
- Paylaşılan projeye kişisel bilgi, parola veya özel okul verisi yazmak.

</div>

**Ders sonunda:** Scratch'in web ve masaüstü kullanım farkını açıklayabilmeli; kukla, sahne, olay, sıra, döngü, koşul, değişken ve haber salma kavramlarını ayırt edebilmeli; Türkçe arayüzde küçük bir etkileşimli proje hazırlayıp hatasını adım adım arayabilmelisin.

<details class="source-note"><summary>Kaynak kontrolü</summary><p>İçerik Scratch'in resmî yardım ve güncel başlangıç materyalleriyle karşılaştırılmıştır. Scratch'in 40'tan fazla dili desteklediği ve dilin değiştirilebildiği; Scratch uygulamasının çevrim dışı proje üretiminde kullanılabildiği resmî Scratch kaynaklarında belirtilir. Kullanıcının verdiği <code>scratch.mit.edu/studios/1611338</code> adresi dinamik bir Scratch stüdyosudur; bu nedenle ders, zamanla değişebilecek proje listesini sabitlemek yerine stüdyoyu proje inceleme etkinliği olarak kullanır.</p></details>
