# Kaynak ve Doğrulama Raporu — v7

Güncelleme tarihi: **2026-08-21**

## 1. Bölüm 6 program/arayüz dili

- **6-1 Visual Studio Kullanımı:** Türkçe arayüz ve Türkçe program terimleri esas alındı.
- **6-2 Visual Studio Code Kullanımı:** Türkçe arayüz ve Türkçe görüntüleme dili esas alındı.
- **6-3 Algoritma ve diagrams.net ile Akış Şemaları:** diagrams.net Türkçe arayüz esas alındı.
- **6-4 Git ve GitHub Temelleri:** Git komutları ve GitHub web arayüzü **English** etiketleriyle işlendi; açıklamalar Türkçedir.
- **6-5 GitHub Desktop ve GitHub Pages:** GitHub Desktop ve GitHub web arayüzü **English** etiketleriyle işlendi; açıklamalar Türkçedir.
- **6-6 Google Colab Kullanımı:** Türkçe arayüz/terimler esas alındı; hesap veya tarayıcı diline bağlı küçük arayüz farklılıkları olabileceği açıklandı.

## 2. Repository genelinde quiz kontrolü

Yayımdaki **41 dersin 820 sorusunun tamamına** otomatik tutarlılık kontrolü uygulandı:

- Her derste 20 soru bulunduğu,
- Her soruda 4 seçenek bulunduğu,
- Doğru cevap indeksinin 0–3 aralığında olduğu,
- Her soruda açıklama bulunduğu,
- Soru kimliklerinin ders içinde benzersiz olduğu,
- Her uygulamada doğru cevap konumlarının A/B/C/D için 5'er kez kullanıldığı,
- Uygulama sayfasının doğru ders ve doğru quiz veri dosyasına bağlandığı,
- Ders/uygulama permalink ve module_id/quiz_id eşleşmeleri

doğrulandı.

### Konu–soru uyumu taraması

Sorunun metni + doğru seçenek + açıklama, bağlı olduğu ders içeriğiyle konu kelimeleri açısından karşılaştırıldı. Düşük eşleşme veren üç soru ayrıca elle incelendi:

1. **3-5 q16:** filtre sonucunu paylaşırken filtre ölçütlerini belirtme — dersin filtreleme ve sonuçları doğru yorumlama hedefiyle uyumlu.
2. **3-6 q11:** resmi orantılı büyütme — dersin görsel boyutlandırma/oran koruma içeriğiyle uyumlu.
3. **4-4 q17:** arkadaş fotoğrafında rıza ve gizlilik — telif dışındaki dijital etik/gizlilik içeriğiyle uyumlu.

Bu üç soruda yanlış konu eşleşmesi bulunmadı.

## 3. Sürüme veya hizmet politikasına bağlı bilgiler için resmî kaynak kontrolü

Aşağıdaki değişmeye daha açık bilgiler, güncel resmî belgelerden tekrar kontrol edildi:

- **Visual Studio Türkçe dil paketi / iş yükleri:** Microsoft Learn  
  https://learn.microsoft.com/tr-tr/visualstudio/install/install-visual-studio
- **Visual Studio desteklenen diller (Türkçe dahil):** Microsoft Learn  
  https://learn.microsoft.com/tr-tr/visualstudio/releases/2022/system-requirements
- **VS Code Türkçe (`tr`) Language Pack ve görüntüleme dili:** Visual Studio Code Docs  
  https://code.visualstudio.com/docs/configure/locales
- **diagrams.net arayüz dili ve Türkçe (`tr`) desteği:** draw.io Docs  
  https://www.drawio.com/docs/manual/editor/editor-language-change/  
  https://www.drawio.com/docs/reference/supported-url-parameters/
- **diagrams.net temel flowchart kullanımı:** draw.io Docs  
  https://www.drawio.com/docs/getting-started/basic-flowchart/
- **Git komut referansı:** Git  
  https://git-scm.com/docs
- **GitHub remote / HTTPS kimlik doğrulama / `origin`:** GitHub Docs  
  https://docs.github.com/en/get-started/git-basics/about-remote-repositories
- **GitHub Desktop commit ve Push origin:** GitHub Docs  
  https://docs.github.com/en/desktop/making-changes-in-a-branch/committing-and-reviewing-changes-to-your-project-in-github-desktop  
  https://docs.github.com/en/desktop/making-changes-in-a-branch/pushing-changes-to-github-from-github-desktop
- **GitHub Pages yayın kaynağı:** GitHub Docs  
  https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
- **Google Colab Türkçe FAQ, geçici runtime ve GPU/TPU kaynakları:** Google Colab  
  https://research.google.com/colaboratory/intl/tr/faq.html
- **Gmail kişisel hesaplarda 25 MB toplam ek sınırı ve Drive bağlantısı:** Google Gmail Yardım  
  https://support.google.com/mail/answer/6584?hl=tr
- **Windows Ekran Alıntısı Aracı video kaydı `Windows + Shift + R`:** Microsoft Support  
  https://support.microsoft.com/tr-tr/windows/apps/use-snipping-tool-to-capture-screenshots
- **Google Search `site:`, tırnak, `-`, `before:`, `after:` ve `filetype:` operatörleri:** Google Arama Yardım  
  https://support.google.com/websearch/answer/2466433?hl=tr

## 4. İçerik güvenilirliği yaklaşımı

- Sürümle değişebilecek menü konumları, mümkün olduğunca sabit kavramlardan ayrıldı.
- Bir arayüz etiketi sürüme göre farklılaşabiliyorsa ders metninde bu olasılık belirtildi.
- Güvenlik konularında parola/token/API anahtarı gibi gizli bilgilerin kaynak koduna, repository'ye veya paylaşılan notebook'a yazılmaması vurgulandı.
- Başarılı derlemenin mantıksal doğruluğu garanti etmediği, HTTPS'in bir sitenin içeriğinin doğru olduğunu garanti etmediği ve Colab kaynaklarının garanti edilmediği gibi öğrencide yanlış genelleme oluşturabilecek noktalar açık biçimde ayrıldı.

## 5. Teknik doğrulama sonucu

- Planlanan ders: **54**
- Yayımdaki ders: **41**
- Yayımdaki quiz: **41**
- Toplam soru: **820**
- Bölüm 6 yeni soru: **120**
- Markdown front matter parse testi: **86 dosya / 0 hata**
- ZIP bütünlük testi: **başarılı**

GitHub Pages'ın gerçek Jekyll/Actions derleme sonucu, repository'ye yüklendikten sonra ilgili **Actions** çalışmasından ayrıca kontrol edilmelidir.
