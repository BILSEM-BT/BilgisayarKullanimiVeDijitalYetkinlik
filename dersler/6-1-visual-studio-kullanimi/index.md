---
title: Visual Studio 2026 Community Insiders Kullanımı
module_id: 36
updated: '2026-08-21'
summary: Visual Studio 2026 Community Insiders sürümünü eğitim amacıyla kurmayı, Python geliştirme iş yükünü ve yorumlayıcıyı hazırlamayı, diğer temel programlama dillerinin kullanım alanlarını tanımayı ve ilk Python projesini çalıştırmayı öğreniyoruz.
quiz: /uygulamalar/6-1-visual-studio-kullanimi/
permalink: /dersler/6-1-visual-studio-kullanimi/
---
<div class="lesson-goals" markdown="1">

**Bu derste ne öğreneceğiz? — Program dili: Türkçe**

Bu derste sınıf çalışmalarında **Visual Studio 2026 Community Insiders** kullanacağız. Community sürümünün eğitim/sınıf öğrenimi için uygun ücretsiz kullanım kapsamını, Insiders kanalının yeni özellikleri daha erken sunduğunu ve günlük kullanımda kararlılık açısından Stable sürümden farklı olabileceğini öğreneceğiz. Kurulumda **Python development / Python geliştirme** iş yükünü seçecek, ayrı bir Python yorumlayıcısı kuracak, ilk Python projesini oluşturacak ve programı hem Visual Studio üzerinden hem de terminalden çalıştıracağız.

</div>

<div class="archive-flow" aria-label="Visual Studio 2026 Python çalışma akışı"><span>Community Insiders'ı indir</span><i>→</i><span>Python iş yükünü kur</span><i>→</i><span>Python yorumlayıcısını seç</span><i>→</i><span>Python projesi oluştur</span><i>→</i><span>Çalıştır ve sonucu kontrol et</span></div>

## 1. Hangi Visual Studio sürümünü kullanacağız?

### Visual Studio 2026 Community Insiders

Derslerde hedef sürüm **Visual Studio 2026 Community Insiders** olacaktır. Microsoft'un Insiders sayfasında Community seçeneği ücretsiz olarak sunulur. Community lisansı özellikle bireysel geliştiriciler, sınıf öğrenimi, akademik araştırma ve açık kaynak geliştirme gibi senaryolar için tasarlanmıştır. Kurumlarda kullanım koşulları lisans metnine göre değerlendirilmelidir.

**İndirme adresi:** [https://visualstudio.microsoft.com/insiders/](https://visualstudio.microsoft.com/insiders/)

Bu sayfada **Download Community / Community'yi indir** seçeneği kullanılır. Insiders sürümü yeni özellikleri daha erken aldığı için güncellemeler daha sık olabilir ve zaman zaman kararlı sürümde bulunmayan değişiklikler içerebilir. Derslik bilgisayarlarında öğretmenin belirlediği sürüm ve güncelleme politikasına uyulmalıdır.

### Sistem notu

Visual Studio 2026, Windows üzerinde çalışır. Microsoft'un 2026 sistem gereksinimlerine göre Python geliştirme iş yükü **ARM64 üzerinde çalışan Visual Studio ARM64'te desteklenmez**. Bu nedenle bu dersin Python kurulumu için sınıf bilgisayarlarının x64/AMD64 Windows yapısında olması en güvenli seçimdir.

## 2. Visual Studio 2026 Community Insiders nasıl kurulur?

### Adım adım yükleme

1. Insiders indirme sayfasını aç ve **Community** yükleyicisini indir.
2. İndirilen yükleyiciyi çalıştır. Kurulum/değişiklik işlemleri için Windows yönetici izni gerekebilir.
3. Visual Studio Installer açıldığında yeni kurulumda **iş yükleri (Workloads)** ekranına geç.
4. Bu ders için **Python development / Python geliştirme** iş yükünü seç.
5. **Language packs / Dil paketleri** sekmesinde **Türkçe**yi seç. Visual Studio 2026 Türkçe arayüzü resmî olarak destekler.
6. Yalnızca ihtiyacımız olan iş yüklerini seçerek gereksiz disk kullanımından kaçın.
7. **Install / Yükle** düğmesiyle kurulumu başlat.
8. Kurulum bittiğinde **Launch / Başlat** ile Visual Studio'yu aç.

<div class="app-demo" aria-label="Visual Studio Installer Python iş yükü şeması"><div class="app-demo-titlebar"><b>Visual Studio Installer</b><span>Visual Studio 2026 Community Insiders</span></div><div class="app-demo-toolbar"><span>İş Yükleri</span><span>Bağımsız bileşenler</span><span>Dil paketleri</span></div><div class="app-demo-body"><div class="app-demo-sidebar"><span>✓ Python geliştirme</span><span>○ .NET masaüstü geliştirme</span><span>○ C++ ile masaüstü geliştirme</span><span>○ ASP.NET ve web geliştirme</span></div><div class="app-demo-stage"><div class="archive-files"><div><b>Python development</b><span>Bu derste gerekli</span></div><div><b>Türkçe</b><span>Dil paketi</span></div><div><b>Install</b><span>Seçimden sonra yükle</span></div></div></div></div></div>

### Python yorumlayıcısı ayrıca gerekir

**Visual Studio'daki Python desteği ile Python yorumlayıcısı aynı şey değildir.** Microsoft, Visual Studio'da Python ile çalışmak için ayrıca bir Python yorumlayıcısının kurulmasını ister. Eğitim bilgisayarlarında öğretmenin belirlediği aktif bir **Python 3** sürümü kullanılmalıdır. Python'u [https://www.python.org/downloads/](https://www.python.org/downloads/) adresinden ya da okulun belirlediği güvenilir dağıtımdan kurabilirsin.

Kurulumdan sonra Visual Studio, standart konumlardaki Python yüklemelerini çoğunlukla otomatik algılar. Gerekirse **Python Environments / Python Ortamları** penceresinden kullanılacak yorumlayıcı seçilir.

## 3. Visual Studio'da hangi programlama dilleriyle neler yapılabilir?

Visual Studio Installer'da çoğu zaman “dil seçmekten” çok **iş yükü seçilir**. İş yükü, belirli dil ve platformlar için gerekli araçları birlikte kurar.

| Dil / teknoloji | Yaygın iş yükü veya araç | Neler yapılabilir? |
|---|---|---|
| **Python** | Python development | Betikler, otomasyon, veri işleme, bilimsel hesaplama, Flask/Django ile web uygulamaları, yapay zekâ ve veri bilimine hazırlık |
| **C#** | .NET desktop development, ASP.NET and web development, WinUI, .NET MAUI | Konsol, Windows masaüstü, web/API, bulut, mobil/çok platformlu uygulamalar, Unity oyunları |
| **Visual Basic** | .NET araçları | .NET tabanlı masaüstü ve bazı kurumsal uygulamalar; özellikle mevcut VB/.NET projeleri |
| **F#** | .NET ve veri/analitik bileşenleri | Fonksiyonel programlama, veri işleme, bilimsel/analitik uygulamalar, .NET projeleri |
| **C / C++** | Desktop development with C++, Game development with C++, Linux/Mac/embedded C++ | Yüksek performanslı masaüstü yazılımları, sistem programlama, oyun motorları, yerel kütüphaneler, gömülü/Linux geliştirme |
| **JavaScript / TypeScript** | Node.js development, ASP.NET and web development | Web ön yüzü, Node.js sunucu uygulamaları, web araçları ve tam yığın projeler |

**Bu derste Python kullanacağız.** Diğer iş yüklerini yalnızca gerçekten ihtiyaç olduğunda eklemek daha doğru bir kurulum yaklaşımıdır. Kurulumdan sonra **Araçlar → Araçları ve Özellikleri Al** yoluyla Visual Studio Installer yeniden açılıp iş yükleri eklenebilir veya kaldırılabilir.

## 4. İlk Python projesini oluşturma

### Python Application projesi

1. Visual Studio'yu aç.
2. Başlangıç ekranında **Yeni proje oluştur** seçeneğine gir.
3. Arama alanına `Python` yaz.
4. **Python Application** şablonunu seç ve **İleri**ye geç.
5. Proje adını `BilsemPythonOrtalama` yap.
6. Projenin kaydedileceği klasörü seç ve **Oluştur** düğmesine bas.
7. **Çözüm Gezgini**nde Python kaynak dosyasını aç. Sürüme/şablona göre dosya adı değişebilir; istersen `program.py` adıyla yeni bir Python dosyası da ekleyebilirsin.
8. Projedeki **Python Environments / Python Ortamları** bölümünden doğru Python 3 yorumlayıcısının etkin olduğunu kontrol et.

### Proje, dosya ve ortam farkı

- **Proje:** Visual Studio'nun ilgili dosyaları ve ayarları birlikte yönetmesini sağlar.
- **`program.py`:** Python kaynak kodunun bulunduğu dosyadır.
- **Python ortamı/yorumlayıcısı:** `.py` dosyasındaki kodu gerçekten çalıştıran Python kurulumudur.

## 5. Örnek kısa Python programı

Aşağıdaki program vize ve final notunu alır, ağırlıklı ortalamayı hesaplar ve ekrana yazar:

```python
def ortalama(vize, final):
    return vize * 0.40 + final * 0.60

vize = float(input("Vize notu: "))
final = float(input("Final notu: "))

sonuc = ortalama(vize, final)
print(f"Ortalama: {sonuc:.1f}")
```

### Kod ne yapıyor?

- `def ortalama(...)` bir **fonksiyon** tanımlar.
- `input()` klavyeden metin alır.
- `float()` girilen değeri ondalıklı sayıya dönüştürür.
- `vize * 0.40 + final * 0.60` ağırlıklı ortalamayı hesaplar.
- `f"...{sonuc:.1f}"` sonucu bir ondalık basamakla biçimlendirir.

Bu örneğin amacı Python dilinin tüm ayrıntılarını öğretmek değil; **proje oluştur → kod yaz → kaydet → çalıştır → çıktıyı kontrol et** döngüsünü öğrenmektir.

## 6. Program nasıl çalıştırılır ve terminal çıktısı nasıl görülür?

### Visual Studio üzerinden çalıştırma

Python dosyanı başlangıç dosyası yapmak gerekirse Çözüm Gezgini'nde dosyaya sağ tıklayıp **Set as Startup Item / Başlangıç Öğesi Olarak Ayarla** seçeneğini kullanabilirsin.

- **Ctrl+F5:** Hata ayıklama olmadan çalıştırır.
- **F5:** Hata ayıklayıcı ile çalıştırır.
- **Shift+F5:** Çalışan hata ayıklama oturumunu durdurur.
- **F9:** Seçili satıra kesme noktası eklemek/kaldırmak için kullanılabilir.

Visual Studio bir Python programını çalıştırdığında program çıktısı bir komut/terminal penceresinde görüntülenebilir. Ayrıca Visual Studio'nun tümleşik terminalini **Görünüm → Terminal** yoluyla açabilirsin.

### Terminalden çalıştırma

Terminalin proje klasöründe olduğunu kontrol et ve şu komutu çalıştır:

```powershell
python program.py
```

Aşağıdaki görsel, yukarıdaki örnek programın terminal çıktısını ders için şematik olarak gösterir:

<figure class="lesson-figure">
  <img src="{{ '/assets/images/dersler/visual-studio-2026-community-insiders-python-terminal.png' | relative_url }}" alt="Visual Studio 2026 Community Insiders içinde Python programı ve terminalde Vize notu, Final notu, Ortalama çıktısı örneği">
  <figcaption>Örnek terminal görünümü: <code>python program.py</code> komutu çalıştırıldıktan sonra program kullanıcıdan iki değer alır ve hesaplanan ortalamayı gösterir.</figcaption>
</figure>

### Çalışan programı durdurma

Bir program beklenmedik biçimde uzun sürüyorsa:

- Hata ayıklama oturumunda **Shift+F5** veya **Stop / Durdur** düğmesi kullanılır.
- Terminalde çalışan bir Python işlemi çoğu durumda **Ctrl+C** ile kesilebilir. Python bu durumda genellikle `KeyboardInterrupt` bildirimi üretir.

Programı durdurmak ile pencereyi kapatmak aynı kavram değildir; önce çalışan işlemi kontrollü biçimde sonlandırmak daha doğru alışkanlıktır.

## 7. Birlikte uygulayalım: sıfırdan çalışan Python projesi

<div class="practice-panel" markdown="1">

1. [Visual Studio 2026 Insiders](https://visualstudio.microsoft.com/insiders/) sayfasından Community sürümünün nereden indirildiğini göster.
2. Visual Studio Installer'da **Python geliştirme** iş yükünü ve **Türkçe** dil paketini bul.
3. Bilgisayarda Python 3 yorumlayıcısının kurulu olduğunu doğrula.
4. Visual Studio'da `BilsemPythonOrtalama` adlı bir **Python Application** projesi oluştur.
5. `program.py` dosyasına bu dersteki ortalama programını yaz ve kaydet.
6. Doğru Python ortamının seçili olduğunu kontrol et.
7. **Ctrl+F5** ile programı çalıştır; `80` ve `90` değerlerini girerek sonucun `86.0` olduğunu doğrula.
8. **Görünüm → Terminal** yoluyla terminali aç ve aynı dosyayı `python program.py` komutuyla çalıştır.
9. Kodda `0.60` değerini `0.50` yapıp sonucu gözlemle; ardından neden formülün artık ağırlık toplamının 1 olmadığını açıklayıp hatayı düzelt.
10. Bir sonraki çalıştırmada `F9` ile bir kesme noktası koy, `F5` ile hata ayıklamayı başlat ve işlemi **Shift+F5** ile durdur.

</div>

## 8. Sık yapılan hatalar ve ders özeti

<div class="mistake-panel" markdown="1">

- Visual Studio 2026 **Community Insiders** yerine farklı sürümü kurup sınıf ekranlarıyla uyuşmadığını fark etmemek.
- “Python geliştirme” iş yükünü kurmanın Python yorumlayıcısını her durumda otomatik kurduğu varsayımında bulunmak.
- Python yorumlayıcısı seçilmeden `.py` dosyasını çalıştırmaya çalışmak.
- Her iş yükünü seçip gereksiz disk alanı tüketmek.
- “Programlama dili” ile “Visual Studio iş yükü” kavramlarını aynı şey sanmak.
- `input()` ile alınan metni sayı işleminde kullanmadan önce uygun sayısal türe dönüştürmeyi unutmak.
- Terminalin yanlış klasörde olduğunu fark etmeden `python program.py` yazmak.
- Program takıldığında bilgisayarı kapatmak yerine önce **Ctrl+C** veya **Shift+F5** gibi kontrollü durdurma yöntemlerini denememek.

</div>

**Ders sonunda:** Visual Studio 2026 Community Insiders'ın nereden indirildiğini bilmeli; Python geliştirme iş yükü, Türkçe dil paketi ve Python yorumlayıcısının rollerini ayırabilmeli; temel Visual Studio dillerinin hangi alanlarda kullanıldığını açıklayabilmeli; bir Python projesi oluşturup çalıştırabilmeli ve terminal çıktısını yorumlayabilmelisin.

<details class="source-note"><summary>Kaynak kontrolü</summary><p>İçerik; Microsoft'un Visual Studio 2026 Insiders indirme sayfası, Visual Studio 2026 sistem gereksinimleri, Visual Studio yükleme/iş yükü belgeleri ve Visual Studio'da Python desteği/çalıştırma/hata ayıklama belgeleriyle 21 Ağustos 2026 tarihinde karşılaştırılmıştır.</p><ul><li><a href="https://visualstudio.microsoft.com/insiders/">Visual Studio 2026 Insiders</a></li><li><a href="https://learn.microsoft.com/en-us/visualstudio/releases/2026/vs-system-requirements">Visual Studio 2026 System Requirements</a></li><li><a href="https://learn.microsoft.com/tr-tr/visualstudio/python/installing-python-support-in-visual-studio?view=visualstudio">Visual Studio'da Python desteğini yükleme</a></li><li><a href="https://learn.microsoft.com/en-us/visualstudio/python/quickstart-05-python-visual-studio-open-folder?view=visualstudio">Open and run Python code in Visual Studio</a></li></ul></details>
