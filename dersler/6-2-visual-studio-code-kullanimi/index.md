---
title: Visual Studio Code Insiders Kullanımı
module_id: 37
updated: '2026-08-21'
summary: Visual Studio Code Insiders sürümünü kurmayı, temel pencere ve görünümleri kullanmayı, farklı programlama dilleri için uzantı mantığını kavramayı ve Python programını yazıp terminalde çalıştırmayı, hata ayıklamayı ve durdurmayı öğreniyoruz.
quiz: /uygulamalar/6-2-visual-studio-code-kullanimi/
permalink: /dersler/6-2-visual-studio-code-kullanimi/
---
<div class="lesson-goals" markdown="1">

**Bu derste ne öğreneceğiz? — Visual Studio Code Insiders**

Bu derste **Visual Studio Code Insiders** kullanacağız. Insiders sürümü VS Code'un en yeni değişikliklerini günlük yapılarla daha erken sunar; Stable sürümle yan yana kurulabilir ancak yeni özelliklerin zaman zaman değişebileceği unutulmamalıdır. Kurulumu yapacak, VS Code'un temel pencerelerini tanıyacak, Python yorumlayıcısı ile Microsoft Python uzantısını hazırlayacak, kısa bir Python programı yazacak, terminalden çalıştıracak, hata ayıklayacak ve gerektiğinde programı kontrollü biçimde durduracağız.

</div>

<div class="archive-flow" aria-label="VS Code Insiders Python akışı"><span>Insiders'ı kur</span><i>→</i><span>Klasörü aç</span><i>→</i><span>Python + uzantıyı hazırla</span><i>→</i><span>Kodu yaz</span><i>→</i><span>Run / Debug / Stop</span></div>

## 1. Visual Studio Code Insiders nedir ve nasıl kurulur?

### İndirme adresi

**[https://code.visualstudio.com/insiders/](https://code.visualstudio.com/insiders/)** adresi VS Code Insiders'ın resmî indirme sayfasıdır. Microsoft bu kanalı **günlük yapılar**, en yeni özellik ve düzeltmelere erken erişim ve Stable sürümle **yan yana kurulum** için sunar.

Windows'ta sayfa **User Installer** ve **System Installer** seçenekleri sunabilir:

- **User Installer:** Tek kullanıcı profiline kurulum için uygundur ve çoğu bireysel kullanımda daha pratiktir.
- **System Installer:** Bilgisayardaki kullanıcılar için sistem düzeyinde kurulum senaryolarında kullanılabilir; yönetici izni gerekebilir.

Derslik bilgisayarında hangi paketin kullanılacağına öğretmen veya sistem yöneticisi karar vermelidir.

### Kurulum

1. Insiders sayfasından Windows için uygun yükleyiciyi indir.
2. Kurulum sihirbazını çalıştır.
3. Lisans koşullarını inceleyip ilerle.
4. Başlat menüsü/kısayol seçeneklerini okul politikasına göre seç.
5. Kurulumu tamamla ve **Visual Studio Code - Insiders** uygulamasını aç.

Insiders simgesi ve uygulama adı Stable VS Code'dan farklı görünebilir; bu sayede iki sürüm yan yana kurulabilir.

## 2. VS Code'da hangi dillerde program yazılabilir?

VS Code çok sayıda dili metin olarak düzenleyebilir; gelişmiş dil desteği çoğunlukla **uzantılar** ve harici çalışma zamanları/derleyiciler ile sağlanır. Dosyanın uzantısı tek başına dili çalıştırmaya yetmez.

| Dil | Tipik ek gereksinim | Örnek kullanım alanları |
|---|---|---|
| **Python** | Python yorumlayıcısı + Microsoft Python extension | Otomasyon, veri, bilimsel hesaplama, web, yapay zekâ |
| **JavaScript / TypeScript** | Node.js gerekebilir; yerleşik/uzantı desteği | Web ön yüzü, Node.js arka uç, araç geliştirme |
| **C#** | .NET SDK + C# Dev Kit/C# desteği | Konsol, web/API, .NET uygulamaları |
| **C / C++** | C/C++ extension + derleyici/toolchain | Sistem programlama, gömülü, yüksek performanslı uygulamalar |
| **Java** | JDK + Java uzantı paketi | Masaüstü, sunucu, eğitim ve kurumsal uygulamalar |
| **Go, Rust vb.** | İlgili SDK/toolchain + uzantı | Ağ servisleri, sistem araçları, performans odaklı yazılımlar |

Bu derste **Python** kullanacağız. Üç ayrı parçayı karıştırma: **VS Code editördür**, **Python extension dil desteği ekler**, **Python interpreter kodu çalıştırır**.

## 3. Pencereler ve görünümler ne işe yarar?

<div class="app-demo" aria-label="VS Code Insiders arayüz şeması"><div class="app-demo-titlebar"><b>Visual Studio Code - Insiders</b><span>Workspace: BILSEM-PYTHON</span></div><div class="app-demo-toolbar"><span>File</span><span>Edit</span><span>View</span><span>Run</span><span>Terminal</span></div><div class="app-demo-body"><div class="app-demo-sidebar"><span>Explorer</span><span>Search</span><span>Source Control</span><span>Run and Debug</span><span>Extensions</span></div><div class="app-demo-stage"><div class="archive-files"><div><b>Editor</b><span>Kodun yazıldığı ana alan</span></div><div><b>Panel</b><span>Terminal / Output / Problems / Debug Console</span></div><div><b>Status Bar</b><span>Dil, yorumlayıcı ve proje durumu</span></div></div></div></div></div>

- **Activity Bar:** Explorer, Search, Source Control, Run and Debug ve Extensions gibi görünümler arasında geçiş sağlar.
- **Primary Side Bar:** Seçilen görünümün ayrıntılarını gösterir; örneğin Explorer'da dosyalar görünür.
- **Editor:** Kod dosyalarının sekmeler halinde açıldığı ana çalışma alanıdır.
- **Panel:** Varsayılan yerleşimde Terminal, Output, Problems ve Debug Console gibi alanları barındırır.
- **Status Bar:** Açık dosya, Git dalı, Python yorumlayıcısı gibi bağlama özgü bilgileri gösterir.
- **Command Palette:** VS Code komutlarını arayıp çalıştırmanın merkezi yoludur.

### Bilinmesi faydalı kısayollar

| Kısayol | Görev |
|---|---|
| **Ctrl+Shift+P** | Command Palette'i açar |
| **Ctrl+P** | Dosyaya hızlı git / Quick Open |
| **Ctrl+`** | Tümleşik terminali gösterir/gizler |
| **Ctrl+Shift+X** | Extensions görünümünü açar |
| **Ctrl+B** | Primary Side Bar'ı gösterir/gizler |
| **Ctrl+S** | Dosyayı kaydeder |
| **F5** | Hata ayıklamayı başlatır / devam ettirir |
| **F10** | Step Over |
| **F11** | Step Into |
| **Shift+F5** | Hata ayıklama oturumunu durdurur |

Kısayollar kişiselleştirilebilir; bu tabloda Windows için varsayılan yaygın kısayollar verilmiştir.

## 4. Python çalışma ortamını hazırlama

### 1. Python yorumlayıcısını kur

Bilgisayarda aktif desteklenen bir **Python 3** sürümü olmalıdır. Python'u [python.org](https://www.python.org/downloads/) üzerinden veya okulun belirlediği güvenilir yöntemle kur. Kurulumdan sonra terminalde:

```powershell
python --version
```

komutuyla Python'un erişilebilir olduğunu doğrula.

### 2. Microsoft Python uzantısını yükle

1. **Ctrl+Shift+X** ile Extensions görünümünü aç.
2. `Python` ara.
3. Yayıncısı **Microsoft** olan **Python** uzantısını seçip yükle.
4. Python uzantısıyla birlikte hata ayıklama desteği için gerekli Python Debugger bileşeni de kurulabilir.

### 3. Yorumlayıcıyı seç

**Ctrl+Shift+P** → `Python: Select Interpreter` komutunu aç ve kullanacağın Python 3 ortamını seç. Status Bar'da seçilen yorumlayıcının görünmesi beklenir.

## 5. İlk Python programını yazma

1. `BILSEM-VSCODE-PYTHON` adlı bir klasör oluştur.
2. VS Code Insiders'ta **File → Open Folder** ile bu klasörü aç.
3. Explorer'da `program.py` dosyası oluştur.
4. Aşağıdaki kodu yaz ve **Ctrl+S** ile kaydet:

```python
def selamla(ad):
    return f"Merhaba {ad}!"

ad = input("Adın: ")
print(selamla(ad))
print("Program tamamlandı.")
```

### Kodun mantığı

`selamla` adlı fonksiyon verilen adı metne yerleştirir. `input()` kullanıcıdan veri alır. `print()` sonucu terminale yazar. Program `Program tamamlandı.` mesajını verdiğinde normal biçimde sona ermiştir.

## 6. Çalıştırma, terminal çıktısı, hata ayıklama ve programı kırma

### Run Python File in Terminal

Python uzantısı kurulu ve yorumlayıcı seçili olduğunda editörün sağ üstündeki **Run Python File in Terminal** düğmesi aktif Python dosyasını terminalde çalıştırabilir. Windows'ta terminalde aşağıdakine benzer bir komut görülür:

```powershell
python program.py
```

<figure class="lesson-figure">
  <img src="{{ '/assets/images/dersler/vscode-insiders-python-terminal.png' | relative_url }}" alt="Visual Studio Code Insiders içinde Python programı ve terminalde Merhaba çıktısı örneği">
  <figcaption>Örnek çalışma görünümü: VS Code Insiders editöründe <code>program.py</code> açıkken terminal programın giriş ve çıktılarını gösterir.</figcaption>
</figure>

### Terminalden çalışan programı durdurmak

Program terminalde çalışıyorsa ve bitmiyorsa **Ctrl+C** çoğu komut satırı programında çalışan işlemi kesmek için kullanılır. Python'da bu çoğunlukla `KeyboardInterrupt` olarak görünür.

Örneğin aşağıdaki sonsuz döngüyü yalnızca öğretmen gözetiminde kısa süreli deneyebilirsin:

```python
while True:
    print("Çalışıyorum...")
```

Terminalde **Ctrl+C** ile işlemi kes. Bu, “programı kırmak/durdurmak” için kontrollü bir yöntemdir.

### Hata ayıklama oturumunu durdurmak

1. Bir satırın sol kenarına tıklayarak **breakpoint** koy.
2. **F5** ile hata ayıklamayı başlat.
3. Program kesme noktasında durunca Variables/Debug Console gibi alanları incele.
4. **F10** ile bir sonraki satıra geç, **F11** ile fonksiyona gir.
5. Hata ayıklamayı sonlandırmak için **Shift+F5** ya da kırmızı **Stop** düğmesini kullan.

**Ctrl+C terminal sürecini**, **Shift+F5 hata ayıklama oturumunu** durdurur; aynı şey değildir.

## 7. Birlikte uygulayalım: Insiders'ta Python iş akışı

<div class="practice-panel" markdown="1">

1. [VS Code Insiders](https://code.visualstudio.com/insiders/) indirme sayfasını aç ve Stable sürümle yan yana kurulabildiğini açıkla.
2. `BILSEM-VSCODE-PYTHON` klasörünü oluşturup **Open Folder** ile aç.
3. **Extensions** görünümünden Microsoft Python uzantısını bul.
4. **Python: Select Interpreter** ile Python 3 yorumlayıcısını seç.
5. `program.py` dosyasına bu dersteki `selamla()` programını yaz.
6. Sağ üstteki **Run Python File in Terminal** düğmesiyle çalıştır ve kendi adını gir.
7. Terminali **Ctrl+`** ile gizleyip tekrar göster.
8. Programı terminalde `python program.py` komutuyla tekrar çalıştır.
9. `while True:` örneğini kısa süre çalıştır ve **Ctrl+C** ile kes.
10. Normal programa bir breakpoint ekle; **F5**, **F10**, **F11** ve **Shift+F5** kısayollarını sırayla dene.
11. **Ctrl+Shift+P**, **Ctrl+P**, **Ctrl+B** ve **Ctrl+Shift+X** kısayollarının ne yaptığını arkadaşına göster.

</div>

## 8. Sık yapılan hatalar ve ders özeti

<div class="mistake-panel" markdown="1">

- VS Code Insiders ile Stable VS Code'u aynı kanal sanmak.
- Python uzantısı kurulunca Python yorumlayıcısının da mutlaka kurulduğunu düşünmek.
- Yanlış Python interpreter seçildiğinde paketlerin veya çalıştırma sonucunun neden farklı olduğunu anlayamamak.
- Proje klasörü yerine sadece tek `.py` dosyasını açıp terminalin çalışma klasörünü karıştırmak.
- Kaydetmeden çalıştırıp eski kodun çıktısını yeni sonuç sanmak.
- Terminalde çalışan program için **Shift+F5**, hata ayıklayıcı için **Ctrl+C** kullanarak iki durdurma yöntemini karıştırmak.
- Kaynağı belirsiz uzantıları yüklemek.
- Hata mesajını okumadan kodu rastgele değiştirmek.

</div>

**Ders sonunda:** VS Code Insiders'ın nereden ve nasıl kurulduğunu; Explorer, Search, Source Control, Run and Debug, Extensions, Editor, Panel ve Status Bar'ın görevlerini; Python uzantısı ile interpreter arasındaki farkı; bir Python dosyasını terminalde çalıştırmayı; Ctrl+C ve Shift+F5 ile iki farklı çalışma durumunu durdurmayı açıklayabilmelisin.

<details class="source-note"><summary>Kaynak kontrolü</summary><p>İçerik VS Code Insiders indirme sayfası ile resmî User Interface, Python Quick Start/Tutorial ve Terminal belgeleri üzerinden 21 Ağustos 2026 tarihinde doğrulanmıştır.</p><ul><li><a href="https://code.visualstudio.com/insiders/">Visual Studio Code Insiders</a></li><li><a href="https://code.visualstudio.com/docs/editing/userinterface">VS Code User Interface</a></li><li><a href="https://code.visualstudio.com/docs/python/python-quick-start">Quick Start Guide for Python in VS Code</a></li><li><a href="https://code.visualstudio.com/docs/python/python-tutorial">Getting Started with Python in VS Code</a></li><li><a href="https://code.visualstudio.com/docs/terminal/getting-started">Getting started with the terminal</a></li></ul></details>
