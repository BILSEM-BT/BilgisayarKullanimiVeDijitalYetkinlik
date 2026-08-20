---
title: Visual Studio Code Kullanımı
module_id: 37
updated: '2026-08-21'
summary: Visual Studio Code'u Türkçe arayüzle kullanmayı; klasör açma, Gezgin, Komut Paleti, Uzantılar, Terminal, Kaynak Denetimi ve temel çalıştırma-hata ayıklama alanlarını tanımayı öğreniyoruz.
quiz: /uygulamalar/6-2-visual-studio-code-kullanimi/
permalink: /dersler/6-2-visual-studio-code-kullanimi/
---
<div class="lesson-goals" markdown="1">

**Bu derste ne öğreneceğiz? — Program dili: Türkçe**

Bu derste **Visual Studio Code (VS Code)** kod düzenleyicisini Türkçe arayüzle tanıyacağız. Türkçe dil paketini etkinleştirme, proje klasörü açma, **Gezgin**, **Ara**, **Kaynak Denetimi**, **Çalıştır ve Hata Ayıkla**, **Uzantılar**, **Komut Paleti** ve tümleşik **Terminal** alanlarını kullanma üzerinde duracağız. VS Code'un yeteneklerinin önemli bir bölümünün kurulu eklentilere ve kullandığın programlama diline bağlı olduğunu da öğreneceğiz.

</div>

<div class="archive-flow" aria-label="VS Code çalışma akışı"><span>Klasörü aç</span><i>→</i><span>Dosyayı düzenle</span><i>→</i><span>Gerekli eklentiyi seç</span><i>→</i><span>Terminal / Çalıştır</span><i>→</i><span>Değişikliği kontrol et</span></div>

## 1. VS Code nedir, Visual Studio'dan farkı nedir?

### Hafif ve genişletilebilir bir kod düzenleyicisidir

VS Code; Windows, macOS ve Linux'ta çalışan, eklentilerle farklı diller ve araçlar için genişletilebilen bir kod düzenleyicisidir. Dosya düzenleme, arama, Git tabanlı kaynak denetimi, terminal ve hata ayıklama gibi geliştirme işlevlerini tek pencerede birleştirir.

### Visual Studio ile aynı ürün değildir

Visual Studio kapsamlı bir IDE'dir; VS Code ise daha küçük çekirdeğe sahip, yetenekleri **uzantılar (extensions)** ile genişleyen bir düzenleyicidir. Bir derste “VS Code kullanın” deniyorsa Visual Studio açmak aynı şey değildir.

### Klasör odaklı çalışma

VS Code'da çoğu başlangıç projesi bir **klasör** açılarak yönetilir. Bu klasörde kaynak dosyaları, alt klasörler ve proje ayarları bulunur. Sadece tek dosyayı açmak mümkün olsa da proje bağlamını görmek için klasörü açmak daha kullanışlıdır.

## 2. Türkçe arayüzü etkinleştirme

### VS Code varsayılan olarak İngilizce gelir

Resmî VS Code belgelerine göre programın varsayılan görüntüleme dili İngilizcedir. Diğer diller **Language Pack** uzantılarıyla sağlanır ve Türkçe (`tr`) desteklenen görüntüleme dilleri arasındadır.

### Komut Paleti ile görüntüleme dilini değiştir

Windows/Linux'ta **Ctrl+Shift+P** ile Komut Paleti açılabilir. Buradan görüntüleme dilini yapılandırma komutu seçilir ve Türkçe dil paketi yüklenip etkinleştirildikten sonra yeniden başlatma istenebilir.

### Her şeyin Türkçeleşmesi garanti değildir

VS Code'un kendi arayüzü Türkçeleşebilir; ancak üçüncü taraf bir eklenti kendi çevirisini sunmuyorsa o eklentinin bazı komutları İngilizce kalabilir. Bu normaldir ve programın bozuk olduğu anlamına gelmez.

## 3. Ana arayüz: Gezgin, Ara ve diğer görünümler

### Etkinlik Çubuğu

Sol taraftaki Etkinlik Çubuğu farklı görünümlere geçiş sağlar. Güncel VS Code belgelerinde temel görünümler arasında **Explorer (Gezgin), Search (Ara), Source Control (Kaynak Denetimi), Run and Debug (Çalıştır ve Hata Ayıkla) ve Extensions (Uzantılar)** bulunur.

<div class="app-demo" aria-label="VS Code Türkçe arayüz şeması"><div class="app-demo-titlebar"><b>Visual Studio Code</b><span>Türkçe arayüz</span></div><div class="app-demo-toolbar"><span>Dosya</span><span>Düzen</span><span>Seçim</span><span>Görünüm</span><span>Git</span><span>Terminal</span></div><div class="app-demo-body"><div class="app-demo-sidebar"><span>Gezgin</span><span>Ara</span><span>Kaynak Denetimi</span><span>Çalıştır ve Hata Ayıkla</span><span>Uzantılar</span></div><div class="app-demo-stage"><div class="archive-files"><div><b>proje/</b><span>Klasör</span></div><div><b>README.md</b><span>Dosya</span></div><div><b>program.py</b><span>Dosya</span></div></div></div></div></div>

### Gezgin

Gezgin, açık klasördeki dosya ve alt klasörleri gösterir. Yeni dosya oluşturma, yeniden adlandırma ve klasör düzenleme işlemleri burada yapılabilir. Bir dosyayı taşırken proje içindeki bağlantıları etkileyebileceğini unutma.

### Ara

Ara görünümü yalnızca açık dosyada değil, açık proje klasöründeki çok sayıda dosyada metin aramaya yardımcı olur. Büyük projelerde belirli bir değişken, metin veya hata mesajını bulmak için çok kullanışlıdır.

## 4. Dosya, klasör ve çalışma alanı düzeni

### Önce doğru klasörü aç

Bir proje üzerinde çalışırken **Dosya → Klasör Aç** mantığıyla projenin kök klasörünü aç. Böylece Gezgin, arama ve terminal aynı proje bağlamında çalışır.

### Dosya uzantıları önemlidir

`README.md`, `index.html`, `program.py` veya `main.cs` gibi uzantılar dosyanın hangi araçlarla yorumlanacağı konusunda ipucu verir. Sadece dosyanın adını değiştirmek içeriği başka bir programlama diline dönüştürmez.

### Otomatik kayda güvenmeden kontrol et

VS Code otomatik kaydetme seçeneği sunabilir, ancak ayarı bilgisayardan bilgisayara değişebilir. Çalıştırmadan önce dosyanın kaydedildiğini kontrol etmek güvenli bir alışkanlıktır.

## 5. Uzantılar: gerekli olanı, güvenilir kaynaktan kur

### Uzantı ne sağlar?

VS Code birçok programlama dili için temel metin düzenlemeyi yapabilir; ancak gelişmiş dil desteği, hata ayıklama, biçimlendirme veya önizleme için uzantı gerekebilir. Örneğin bir C# veya Python çalışma ortamının gereksinimleri farklıdır.

### Uzantı seçerken dikkat

Uzantılar kod çalıştırma veya proje dosyalarına erişme gibi güçlü yeteneklere sahip olabilir. Bu nedenle yalnızca gerçekten ihtiyacın olan, yayıncısı ve açıklaması güvenilir görünen uzantıları kur; öğretmenin belirlediği okul bilgisayarında izin politikasına uy.

### Fazla uzantı daha iyi değildir

Aynı işi yapan çok sayıda uzantı çakışma veya performans sorunu oluşturabilir. Önce temel gereksinimi belirle, sonra en uygun uzantıyı seç.

## 6. Terminal, çalıştırma, hata ayıklama ve Kaynak Denetimi

### Tümleşik Terminal

VS Code'un terminali, proje klasöründen komut çalıştırmanı sağlar. Terminal bir “sihirli çalıştır” düğmesi değildir; yazdığın komut işletim sistemindeki ilgili komut satırı programı tarafından yürütülür. Örneğin Python kullanacaksan bilgisayarda uygun Python ortamının bulunması gerekir.

### Çalıştır ve Hata Ayıkla

Hata ayıklama desteği, kullanılan dile ve kurulu uzantıya bağlıdır. Kesme noktaları, değişkenleri ve çağrı yığınını incelemek için **Çalıştır ve Hata Ayıkla** görünümü kullanılabilir.

### Kaynak Denetimi

VS Code, Git kaynak denetimi için yerleşik destek içerir. Ancak Git'in kendisinin sistemde kurulu olması gereken senaryolar olabilir. **Kaynak Denetimi** görünümü değişiklikleri görselleştirebilir; Git ve GitHub kavramlarını 6-4 dersinde ayrıntılı öğreneceğiz.

## 7. Birlikte uygulayalım: küçük bir VS Code çalışma klasörü

<div class="practice-panel" markdown="1">

1. VS Code'u aç ve görüntüleme dilinin Türkçe olduğunu kontrol et.
2. `BOLUM6-VSCODE` adlı yeni bir klasör oluştur ve VS Code'da **klasör olarak** aç.
3. Gezgin'de `README.md` ve `notlar.txt` dosyalarını oluştur.
4. `README.md` içine proje adını ve kısa amacını yazıp kaydet.
5. **Ara** görünümüyle yazdığın bir kelimeyi proje içinde bul.
6. **Ctrl+Shift+P** ile Komut Paleti'ni aç ve komut arama mantığını incele; rastgele komut çalıştırma.
7. Terminali aç; terminalin hangi klasörde olduğunu kontrol et ve yalnızca öğretmenin verdiği güvenli komutu çalıştır.
8. Uzantılar görünümünü aç; bir uzantıyı kurmadan önce yayıncı, açıklama ve gereklilik açısından değerlendir.
9. Gezgin, Ara, Kaynak Denetimi, Çalıştır ve Hata Ayıkla ve Uzantılar görünümlerinin görevlerini sözlü olarak ayır.

</div>

## 8. Sık yapılan hatalar ve ders özeti

<div class="mistake-panel" markdown="1">

- VS Code ile Visual Studio'yu aynı ürün sanmak.
- Proje klasörü yerine yalnız tek dosya açıp dosya ilişkilerini kaybetmek.
- Dosya uzantısını değiştirmenin dosya içeriğini dönüştürdüğünü düşünmek.
- Ne yaptığını bilmeden terminalden internetten kopyalanan komutları çalıştırmak.
- Çok sayıda ve kaynağı belirsiz uzantı kurmak.
- Kaydetmeden çalıştırıp eski çıktıyı yeni kodun sonucu sanmak.
- Bir eklentinin İngilizce görünmesini Türkçe dil paketinin çalışmadığı şeklinde yorumlamak.

</div>

**Ders sonunda:** VS Code'un rolünü Visual Studio'dan ayırabilmeli; Türkçe görüntüleme dilinin Language Pack ile etkinleştirildiğini bilmeli; Gezgin/Ara/Kaynak Denetimi/Çalıştır ve Hata Ayıkla/Uzantılar görünümlerini tanımalı; proje klasörü açıp dosya düzenleyebilmeli ve terminal ile uzantıları güvenli biçimde kullanmaya hazır olmalısın.

<details class="source-note"><summary>Kaynak kontrolü</summary><p>Bu ders VS Code'un resmî User Interface, Display Language, Command Palette, Terminal, Source Control ve Extensions belgeleriyle karşılaştırılmıştır. VS Code varsayılan olarak İngilizce gelir; Türkçe, Language Pack üzerinden desteklenen görüntüleme dillerindendir. Ctrl+Shift+P Komut Paleti'ni açar; Gezgin, Ara, Kaynak Denetimi, Çalıştır ve Hata Ayıkla ile Uzantılar resmî temel görünümler arasındadır.</p></details>
