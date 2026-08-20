---
title: Git ve GitHub Temelleri
module_id: 39
updated: '2026-08-21'
summary: Git ile yerel sürüm kontrolünü ve GitHub ile uzak depo paylaşımını, İngilizce GitHub arayüzü ve standart Git komutları üzerinden; repository, status, add, commit, push, pull, clone ve branch kavramlarıyla öğreniyoruz.
quiz: /uygulamalar/6-4-git-ve-github-temelleri/
permalink: /dersler/6-4-git-ve-github-temelleri/
---
<div class="lesson-goals" markdown="1">

**Bu derste ne öğreneceğiz? — Program/arayüz dili: English**

Ders anlatımı Türkçedir; **GitHub web arayüzü İngilizce**, Git komutları ise standart İngilizce komut adlarıyla kullanılacaktır. Git ile yerel sürüm kontrolünü, GitHub ile uzak depoda paylaşımı; **repository, working tree, staging area, commit, remote, clone, pull, push, branch** kavramlarını öğreneceğiz. Amaç komut ezberlemek değil, bir değişikliğin bilgisayardan proje geçmişine ve uzak depoya nasıl ilerlediğini anlamaktır.

</div>

<div class="archive-flow" aria-label="Git temel akışı"><span>Edit files</span><i>→</i><span>git status</span><i>→</i><span>git add</span><i>→</i><span>git commit</span><i>→</i><span>git push</span></div>

## 1. Git ile GitHub aynı şey değildir

### Git: sürüm kontrol sistemi

**Git**, dosyalardaki değişikliklerin geçmişini yerel bilgisayarda takip eden dağıtık sürüm kontrol sistemidir. İnternet bağlantısı olmadan da yerel commit oluşturabilirsin.

### GitHub: Git depolarını barındıran çevrim içi hizmet

**GitHub**, Git depolarını uzak sunucuda barındırır ve iş birliği, issues, pull requests, Actions ve Pages gibi ek hizmetler sunar. Git kullanmak için her zaman GitHub gerekmez; GitHub kullanırken ise Git kavramlarını anlamak büyük avantaj sağlar.

### Repository ne demektir?

**Repository (repo)**, projenin dosyalarıyla birlikte Git geçmişini tutan çalışma alanıdır. Yerel repo bilgisayarında; remote repo ise GitHub gibi bir sunucuda bulunabilir.

## 2. Git'in üç temel çalışma alanını düşün

### Working tree

Dosyaları düzenlediğin gerçek proje klasörüdür. Bir dosyayı değiştirdiğinde değişiklik önce burada oluşur.

### Staging area / index

Bir sonraki commit'e hangi değişikliklerin gireceğini hazırladığın ara alandır. `git add` değişikliği otomatik olarak GitHub'a göndermez; onu **staging area**ya alır.

### Commit history

`git commit`, staging area'da seçilmiş değişikliklerden proje geçmişine yeni bir anlık görüntü kaydeder. İyi commit mesajı **ne değiştiğini** kısa ve anlaşılır biçimde anlatır.

<div class="format-card-grid"><div><b>git status</b><span>Working tree ve staging durumunu gösterir.</span></div><div><b>git add</b><span>Değişikliği bir sonraki commit için stage eder.</span></div><div><b>git commit</b><span>Stage edilmiş değişiklikleri yerel geçmişe kaydeder.</span></div><div><b>git log</b><span>Commit geçmişini incelemeye yardımcı olur.</span></div></div>

## 3. Yeni bir yerel repository başlatma

### Git kurulumunu kontrol et

Terminalde:

```bash
git --version
```

komutu Git'in erişilebilir olup olmadığını gösterir. Bir okul bilgisayarında kurulum gerekiyorsa öğretmen veya sistem sorumlusunun politikasına uy.

### Kimlik bilgileri commit yazarını belirtir

İlk kullanımda Git kullanıcı adı ve e-posta bilgisi isteyebilir. Bunlar commit meta verisinde yazar bilgisini belirtir. Örnek:

```bash
git config --global user.name "Ad Soyad"
git config --global user.email "kullanici@example.com"
```

Kişisel bilgilerin görünürlüğünü düşün; GitHub'ın gizlilik seçenekleri ve `noreply` e-posta adresi gibi yöntemler kullanılabilir.

### Repo oluştur

Başlangıç dalını açıkça `main` yapmak için:

```bash
mkdir bilsem-git-deneme
cd bilsem-git-deneme
git init -b main
```

`git init`, klasörü bir Git repository'si hâline getirir. `.git` klasörü geçmiş ve Git meta verilerini içerir; yeni başlayan biri bu klasördeki dosyaları elle silmemelidir.

## 4. Değişiklikten commit'e doğru akış

### Önce durumunu gör

`README.md` oluşturup bir şey yazdıktan sonra:

```bash
git status
```

ile dosyanın **untracked**, **modified** veya **staged** gibi durumlarını kontrol et.

### Stage et

```bash
git add README.md
```

sadece bu dosyayı bir sonraki commit için stage eder. `git add .` çok sayıda değişikliği birden stage edebilir; kullanmadan önce `git status` ile neleri ekleyeceğini kontrol etmek iyi alışkanlıktır.

### Commit oluştur

```bash
git commit -m "Add project description"
```

Commit yerel repository'de oluşur. Bu aşamada değişiklik henüz GitHub'a gitmiş olmak zorunda değildir.

## 5. GitHub'da remote repository ve push

### GitHub web arayüzü: English

Bu derste GitHub arayüzündeki **New repository, Code, Settings, Commits, Branches** gibi etiketleri İngilizce göreceğiz. Yeni repo oluştururken repository name ve görünürlük ayarını dikkatli seç.

### Remote bağlantısı

Yerel repo ile GitHub reposu arasında uzak adres tanımlanabilir. Yaygın remote adı `origin`dir:

```bash
git remote add origin https://github.com/USERNAME/REPOSITORY.git
git push -u origin main
```

`git push`, yerel branch'teki commit'leri uzak repository'ye gönderir. Dosyayı yalnız kaydetmek veya `git add` yapmak push değildir.

### Kimlik doğrulamada hesap parolasını kullanma

GitHub, komut satırı Git işlemleri için normal hesap parolasını parola gibi kabul etmez. HTTPS bağlantısında güncel kimlik doğrulama yöntemi (ör. tarayıcı/Git Credential Manager veya personal access token) ya da SSH kullanılabilir. **Token, parola veya özel anahtarları repository'ye commit etme.**

## 6. Clone, pull, fetch ve branch mantığı

### Clone

`git clone URL`, uzak repository'nin tam bir yerel kopyasını oluşturur, `origin` remote'unu ayarlar ve varsayılan branch'i kullanıma hazır hâle getirir.

### Fetch ve pull

`git fetch`, remote'daki yeni commit ve branch bilgilerini indirir ancak mevcut yerel branch'inle otomatik birleştirme yapmaz. `git pull` ise temel olarak uzak değişiklikleri getirip mevcut çalışma dalınla bütünleştirmeyi amaçlar; GitHub belgeleri bunu fetch + integrate akışı olarak açıklar.

### Branch

**Branch**, ana çalışma çizgisinden bağımsız değişiklik geliştirmek için ayrı bir çizgidir. Örneğin:

```bash
git switch -c yeni-ozellik
```

ile yeni branch oluşturup geçebilirsin. Branch kullanmak, ekip çalışmasında tamamlanmamış değişiklikleri doğrudan `main` üzerinde karıştırmamaya yardımcı olur.

## 7. Birlikte uygulayalım: ilk Git ve GitHub akışı

<div class="practice-panel" markdown="1">

1. Terminalde `git --version` ile Git'i kontrol et.
2. `BOLUM6-GIT` adlı boş klasör oluştur ve içine geç.
3. `git init -b main` ile repository'yi başlat.
4. `README.md` oluştur; proje adını ve kısa açıklamayı yaz.
5. `git status` çalıştır ve dosyanın durumunu oku.
6. `git add README.md` ardından tekrar `git status` çalıştır; farkı gözlemle.
7. `git commit -m "Add README"` ile ilk commit'i oluştur.
8. Öğretmenin gösterdiği GitHub hesabında **New repository** ile boş bir repository oluştur.
9. GitHub'ın verdiği remote URL'yi kullanarak `origin` bağlantısını ekle ve `main` branch'ini push et.
10. GitHub web arayüzünde README dosyasını ve commit geçmişini kontrol et.
11. Repository'ye **parola, token, API anahtarı veya özel öğrenci verisi** koymadığını yeniden kontrol et.

</div>

## 8. Sık yapılan hatalar ve ders özeti

<div class="mistake-panel" markdown="1">

- Git ile GitHub'ı aynı ürün sanmak.
- `git add` komutunun dosyayı GitHub'a yüklediğini düşünmek.
- Commit oluşturup push etmeden GitHub'da değişikliği beklemek.
- `git pull` ve `git push` yönlerini karıştırmak.
- Ne olduğunu kontrol etmeden `git add .` ile gereksiz/gizli dosyaları stage etmek.
- Token, parola, `.env` içeriği veya gizli anahtarları commit etmek.
- Başkasının değişikliklerini almadan körlemesine push etmeye çalışmak.
- Hata mesajını okumadan force push gibi ileri seviye ve riskli komutları kullanmak.

</div>

**Ders sonunda:** Git ile GitHub'ı ayırabilmeli; working tree → staging area → commit geçmişi akışını açıklayabilmeli; `status`, `add`, `commit`, `clone`, `fetch`, `pull`, `push` ve branch kavramlarının görevini ayırabilmeli; İngilizce GitHub arayüzünde repository ve commit geçmişini bulabilmeli ve gizli bilgileri sürüm kontrolüne eklememen gerektiğini bilmelisin.

<details class="source-note"><summary>Kaynak kontrolü</summary><p>Bu ders git-scm.com'un güncel Git komut referansı ile GitHub Docs'un About Git, remote repository, clone/fetch/pull/push ve kimlik doğrulama rehberleri kullanılarak doğrulanmıştır. `git add` staging alanını, `git commit` yerel geçmişi, `git push` uzak repository'yi günceller; `git clone` yerel kopya ve `origin` remote'u oluşturur. GitHub web arayüzündeki etiketler bu derste İngilizce program diline göre verilmiştir.</p></details>
