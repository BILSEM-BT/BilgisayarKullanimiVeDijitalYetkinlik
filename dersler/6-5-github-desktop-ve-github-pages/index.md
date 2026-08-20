---
title: GitHub Desktop ve GitHub Pages
module_id: 40
updated: '2026-08-21'
summary: GitHub Desktop'ın İngilizce arayüzünde Changes, History, Current branch, Commit, Fetch/Pull ve Push akışını; GitHub web arayüzünde GitHub Pages yayımlama seçeneklerini güvenli bir başlangıç düzeyinde öğreniyoruz.
quiz: /uygulamalar/6-5-github-desktop-ve-github-pages/
permalink: /dersler/6-5-github-desktop-ve-github-pages/
---
<div class="lesson-goals" markdown="1">

**Bu derste ne öğreneceğiz? — Program/arayüz dili: English**

Ders anlatımı Türkçedir; **GitHub Desktop** ve **GitHub web arayüzündeki program etiketleri İngilizce** kullanılacaktır. GitHub Desktop ile repository oluşturma/clone etme, **Changes**, **History**, **Current repository**, **Current branch**, **Commit**, **Fetch origin / Pull origin / Push origin** akışını öğreneceğiz. Ardından basit statik içerikleri **GitHub Pages** ile yayımlamanın iki temel yolunu — branch kaynağı veya GitHub Actions — tanıyacağız.

</div>

<div class="archive-flow" aria-label="GitHub Desktop ve Pages akışı"><span>Clone / Create</span><i>→</i><span>Edit files</span><i>→</i><span>Commit</span><i>→</i><span>Push origin</span><i>→</i><span>Settings → Pages</span></div>

## 1. GitHub Desktop ne sağlar?

### Git işlemlerini grafik arayüzle yapar

GitHub'ın resmî belgelerine göre GitHub Desktop; clone, commit, push, pull, branch ve pull request gibi birçok Git/GitHub iş akışını komut satırı yerine grafik arayüzle yapmayı kolaylaştırır. Git'in mantığını ortadan kaldırmaz; aynı temel repository ve commit kavramlarını görsel biçimde kullanır.

### Windows ve macOS'ta kullanılabilir

GitHub Desktop Windows ve macOS için sunulur. Uygulamaya GitHub hesabıyla giriş yapılabilir. Okul bilgisayarında hesap açma veya oturum açma konusunda kurum kurallarına uy.

### Arayüzü English takip edeceğiz

Bu derste `File`, `Repository`, `Branch`, `View`, `Help`, `Changes`, `History`, `Current repository`, `Current branch`, `Publish repository`, `Fetch origin`, `Pull origin` ve `Push origin` gibi İngilizce etiketler kullanılacaktır.

## 2. Repository ekleme, oluşturma ve clone etme

### Üç farklı başlangıç durumu

GitHub Desktop'ta genel olarak şu senaryolar vardır:

- **Create a New Repository on your Hard Drive...**: bilgisayarda yeni Git repository oluşturur.
- **Clone a Repository from the Internet...**: GitHub'daki repository'yi bilgisayara indirir.
- **Add an Existing Repository from your Hard Drive...**: bilgisayarda zaten Git repository olan klasörü Desktop'a ekler.

Bu üç işlem aynı şey değildir. Özellikle **clone**, uzak repository'nin geçmişiyle birlikte yerel kopyasını oluşturur.

### Local path'i bilinçli seç

Repository'nin bilgisayardaki konumu **Local path** ile belirlenir. Senkronizasyon yazılımı kullanılan klasörlerde veya ortak bilgisayarlarda öğretmenin belirlediği konumu kullanmak daha güvenli olabilir.

## 3. Changes, History ve commit oluşturma

<div class="app-demo" aria-label="GitHub Desktop İngilizce arayüz şeması"><div class="app-demo-titlebar"><b>GitHub Desktop</b><span>English interface</span></div><div class="app-demo-toolbar"><span>Current repository</span><span>Current branch</span><span>Fetch origin</span></div><div class="app-demo-body"><div class="app-demo-sidebar"><span>Changes</span><span>History</span><span>Summary</span><span>Description</span></div><div class="app-demo-stage"><div class="archive-files"><div><b>README.md</b><span>Modified</span></div><div><b>index.html</b><span>Added</span></div><div><b>Commit to main</b><span>Local commit</span></div></div></div></div></div>

### Changes

**Changes** görünümü, current branch üzerinde yaptığın fakat henüz commit etmediğin değişiklikleri gösterir. Dosyanın yanındaki seçim kutusu, o dosyanın oluşturacağın commit'e dahil edilip edilmeyeceğini belirlemeye yardımcı olur.

### Summary ve Description

Commit oluştururken **Summary** kısa ve anlamlı olmalıdır. **Description** daha ayrıntılı açıklama için isteğe bağlıdır. `update` gibi belirsiz mesaj yerine `Add lesson navigation` gibi ne yapıldığını anlatan mesaj tercih edilir.

### History

**History**, current branch'in önceki commit'lerini gösterir. Bir commit'i seçerek hangi dosyaların nasıl değiştiğini inceleyebilirsin. Commit geçmişi “yedek kutusu” değil; projenin değişim öyküsüdür.

## 4. Fetch, Pull ve Push yönünü doğru anlamak

### Push origin

Yerelde oluşturduğun commit'leri GitHub'daki remote repository'ye göndermek için **Push origin** kullanılır. Kaydedilmiş fakat commit edilmemiş dosya push ile gönderilmiş sayılmaz.

### Fetch origin

**Fetch origin**, remote'da yeni commit olup olmadığını kontrol edip bilgileri getirir; bağlama göre buton daha sonra **Pull origin**a dönüşebilir.

### Pull origin

Remote branch'teki yeni commit'leri yerel current branch'e almak ve bütünleştirmek için pull kullanılır. Ekip çalışmasında push etmeden önce remote'daki değişiklikleri almak çakışma riskini azaltabilir.

### Conflict olursa içeriği incele

İki kişi aynı satırları farklı biçimde değiştirmişse merge conflict oluşabilir. Çözüm, bir tarafın dosyasını körlemesine silmek değildir; hangi içeriğin korunacağı anlaşılmalı, dosya düzeltilmeli ve sonuç test edilmelidir.

## 5. Branch ile güvenli değişiklik geliştirme

### Current branch

Üst çubuktaki **Current branch**, hangi branch üzerinde çalıştığını gösterir. Yeni bir özellik için ayrı branch açmak `main` dalını daha kararlı tutabilir.

### Branch değiştirirken kaydedilmemiş çalışmayı düşün

Branch değişimi sırasında commit edilmemiş değişiklikler sorun oluşturabilir. Önce **Changes** görünümünü kontrol et; gerekiyorsa anlamlı bir commit oluştur veya öğretmenin yönlendirdiği güvenli yöntemi kullan.

### Pull request neden vardır?

Pull request, bir branch'teki değişikliklerin hedef branch'e eklenmesini önermek, incelemek ve tartışmak için kullanılır. GitHub Desktop'ta branch'i push ettikten sonra **Preview Pull Request / Create Pull Request** akışı kullanılabilir.

## 6. GitHub Pages ile statik site yayımlama

### GitHub Pages ne yapar?

GitHub Pages, repository içeriğinden statik bir web sitesi yayımlamaya yarar. GitHub'ın güncel belgelerine göre yayın kaynağı iki temel şekilde yapılandırılabilir:

1. **Deploy from a branch** — belirli branch ve `/ (root)` veya `/docs` klasörü kaynak olur.
2. **GitHub Actions** — siteyi oluşturup Pages'a dağıtan bir workflow kullanılır.

### English web arayüzü yolu

Repository sayfasında **Settings → Pages** bölümüne girilir. `Build and deployment` altında uygun **Source** seçilir. Branch ile yayın yapılacaksa branch ve klasör seçilip **Save** edilir. Actions kullanılacaksa **GitHub Actions** source'u seçilir ve uygun workflow çalıştırılır.

### Entry file

GitHub Pages, kaynakta `index.html`, `index.md` veya `README.md` gibi giriş dosyalarını kullanabilir; kullanılan site üreticisine göre yapı değişebilir. Bu portal örneğinde Jekyll/GitHub Actions yapısı vardır, dolayısıyla sırf `index.html` ezberlemek yerine repository'nin mevcut workflow ve `_config.yml` düzenini korumak gerekir.

## 7. Birlikte uygulayalım: Desktop'tan küçük Pages sitesi

<div class="practice-panel" markdown="1">

1. GitHub Desktop'ta **File → New repository...** veya başlangıç ekranındaki yeni repository seçeneğiyle `bilsem-pages-deneme` adlı repo oluştur.
2. README oluşturma seçeneğini kullanabilir veya daha sonra `README.md` ekleyebilirsin.
3. Repository'yi **Publish repository** ile GitHub'a yayımla; öğretmenin istediği görünürlük ayarını seç.
4. Harici düzenleyicide `index.html` oluştur ve basit bir başlık/metin ekle.
5. Desktop'ta **Changes** alanından yalnız beklediğin dosyanın değiştiğini kontrol et.
6. `Add simple home page` gibi anlamlı **Summary** yaz ve **Commit to main** yap.
7. **Push origin** ile commit'i GitHub'a gönder.
8. GitHub web arayüzünde repository'yi aç; **Settings → Pages** bölümüne git.
9. Öğretmen branch yöntemi kullanıyorsa **Deploy from a branch → main → /(root) → Save** akışını uygula. Mevcut projede Actions kullanılıyorsa source'u **GitHub Actions** olarak bırak ve workflow durumunu **Actions** sekmesinden kontrol et.
10. Site açıldığında hassas bilgi, öğrenci kişisel verisi, token veya gizli dosya yayımlanmadığını kontrol et.

</div>

## 8. Sık yapılan hatalar ve ders özeti

<div class="mistake-panel" markdown="1">

- `Changes` ile `History`yi karıştırmak.
- Commit oluşturmadan yalnız **Push origin** ile kaydedilmemiş dosyanın gönderileceğini düşünmek.
- Uzak değişiklikleri görmeden sürekli push etmeye çalışmak.
- Yanlış **Current branch** üzerinde commit oluşturmak.
- Pages için repository'nin mevcut Jekyll/Actions yapısını silip rastgele ayar değiştirmek.
- GitHub Pages'ın yayımladığı dosyalara parola, token, API anahtarı veya kişisel veri koymak.
- Site güncellenmediğinde **Actions**/deployment durumunu ve Pages source ayarını kontrol etmemek.

</div>

**Ders sonunda:** GitHub Desktop'ta Create/Clone/Add farkını; Changes, History, Current branch, Commit, Fetch/Pull ve Push yönlerini açıklayabilmeli; İngilizce arayüz etiketlerini tanıyabilmeli; GitHub Pages'ta branch ve GitHub Actions yayın kaynaklarını ayırabilmeli ve küçük bir statik siteyi güvenli biçimde yayımlamaya hazır olmalısın.

<details class="source-note"><summary>Kaynak kontrolü</summary><p>Bu ders GitHub'ın güncel Creating your first repository using GitHub Desktop, Pushing changes, Pull requests ve GitHub Pages publishing source belgeleriyle doğrulanmıştır. GitHub Desktop'ta Changes/History, Current repository/current branch, Commit ve Push origin akışı; Pages'ta Settings → Pages altında Deploy from a branch veya GitHub Actions kaynakları resmî belgelerde açıklanır. Arayüz etiketleri kullanıcı isteğine uygun olarak İngilizce verilmiştir.</p></details>
