---
title: Google Drive ve Bulutta Dosya Yönetimi
module_id: 13
updated: '2026-08-20'
summary: Google Drive’da dosya ve klasör düzenleme, paylaşım rolleri, kısıtlı bağlantılar, sürüm geçmişi, senkronizasyon ve güvenli bulut çalışma alışkanlıklarını uyguluyoruz.
quiz: /uygulamalar/2-6-google-drive-ve-bulutta-dosya-yonetimi/
permalink: /dersler/2-6-google-drive-ve-bulutta-dosya-yonetimi/
---
<div class="lesson-goals" markdown="1">

**Bu derste ne öğreneceğiz?**

Google Drive'ı yalnızca “dosya yüklenen bir yer” olarak değil; dosyaları düzenleme, doğru kişilerle doğru yetki düzeyinde paylaşma, farklı cihazlarda erişme ve ekip çalışmalarını yönetme aracı olarak kullanacağız. Ders boyunca **dosya nerede, kimin, kim ne yapabilir ve değişiklik gerçekten senkronize oldu mu?** sorularına cevap vereceğiz.

</div>

<div class="drive-demo" aria-label="Google Drive klasör ve paylaşım şeması"><aside>Drive'ım<br>Benimle paylaşılanlar<br>Son kullanılanlar<br>Yıldızlı</aside><main><b>BILSEM-Proje</b><div>01-Rapor</div><div>02-Veriler</div><div>03-Gorseller</div><div>04-Sunum</div></main></div>

## Google Drive çalışma alanını tanıyalım

### Drive nedir?

Google Drive bulut tabanlı dosya depolama ve paylaşım hizmetidir. PDF, görsel, video, Office dosyaları ile Google Dokümanlar, E-Tablolar ve Slaytlar gibi dosyalar aynı çalışma alanında tutulabilir.

**Bulutta olması**, dosyanın herkese açık olduğu anlamına gelmez. Dosyanın erişimini paylaşım ayarları belirler.

### Drive'ım ve Benimle paylaşılanlar

**Drive'ım**, sizin oluşturduğunuz veya kendi alanınıza eklediğiniz dosya ve klasörlerle çalıştığınız ana bölümdür. **Benimle paylaşılanlar** ise başka kişilerin size erişim verdiği öğeleri gösterir.

Benimle paylaşılan bir dosyanın sahibi siz olmayabilirsiniz. Sahip erişiminizi kaldırırsa dosyaya tekrar ulaşamayabilirsiniz.

### Son kullanılanlar, Yıldızlı ve Çöp Kutusu

- **Son kullanılanlar:** Yakın zamanda açılan veya değiştirilen öğelere hızlı ulaşmayı sağlar; yeni bir klasör değildir.
- **Yıldızlı:** Önemli dosyalara hızlı erişim için işaretleme alanıdır. Yıldızı kaldırmak dosyayı silmez.
- **Çöp Kutusu:** Silinen öğelerin bulunduğu alandır. Çöp Kutusu, yedekleme sistemi olarak düşünülmemelidir.

### Dosya ve klasör yükleme

**Yeni > Dosya yükleme** ile tek dosya, uygun tarayıcıda **Klasör yükleme** ile klasör yapısı yüklenebilir. Yüklemeden önce yanlış dosya, kişisel veri veya gereksiz büyük klasör bulunup bulunmadığını kontrol edin.

<div class="practice-panel" markdown="1">

**Birlikte uygulayalım:** `BILSEM-Proje` adlı bir klasör oluşturun. İçinde `01-Rapor`, `02-Veriler`, `03-Gorseller` ve `04-Sunum` klasörlerini hazırlayın. Dosya adlarında “son”, “son2”, “gercekson” yerine anlamlı ad ve tarih kullanmayı deneyin.

</div>

## Dosya ve klasör paylaşım izinleri

### Görüntüleyen, Yorumcu ve Düzenleyen

Google Drive'ın Türkçe arayüzünde temel roller şunlardır:

| Rol | Ne yapabilir? |
|---|---|
| **Görüntüleyen** | Dosyayı görüntüler. |
| **Yorumcu** | Görüntüler ve desteklenen dosyalarda yorum/öneri bırakabilir. |
| **Düzenleyen** | İçeriği değiştirebilir; Drive'daki dosyalarda yetkisi daha geniştir. |

Bir kişinin yalnızca okuması gerekiyorsa **Düzenleyen** vermek yerine **Görüntüleyen** vermek, “gereken en az yetki” ilkesine uygundur. Google Drive'ın güncel Türkçe yardım sayfaları bu rolleri Görüntüleyen, Yorumcu ve Düzenleyen olarak adlandırır.

### Kısıtlanmış ve bağlantıyla paylaşım

**Genel erişim: Kısıtlanmış** olduğunda yalnızca açıkça erişim verilen hesaplar dosyayı açabilir. **Bağlantıya sahip olan herkes** seçeneği ise bağlantıyı alan kişilerin erişim kapsamını genişletebilir.

Öğrenci bilgisi, proje değerlendirmesi veya kurum içi belge gibi hassas içeriklerde gereksiz yere herkese açık bağlantı oluşturmayın.

### Klasör paylaşımı neden daha dikkat gerektirir?

Bir klasörü paylaşmak, içindeki dosya ve alt klasörlerin erişimini de etkileyebilir. Google'ın güncel paylaşım modelinde üst klasörden gelen yetkiler alt öğelere devredilebilir. Bu nedenle klasörü paylaşmadan önce içeriğinin tamamına göz atın.

### Bağlantıyı kopyalamak, dosyayı herkese açmak değildir

**Bağlantıyı kopyala** yalnızca URL'yi panoya alır. Asıl erişim, **Genel erişim** ve kişi bazlı yetki ayarlarıyla belirlenir.

<div class="board-note" markdown="1">

**Tahtada karşılaştır:** Aynı deneme dosyasını önce “Kısıtlanmış + Görüntüleyen”, sonra “Bağlantıya sahip olan herkes + Görüntüleyen” olarak ayarlayın. Link aynı türde görünse de kimlerin açabileceğinin nasıl değiştiğini tartışın.

</div>

## Dosyayı bulma, sürüm ve senkronizasyon

### Drive araması

Dosyayı yalnız klasörlerden aramak zorunda değilsiniz. Drive araması dosya adı, tür, sahip, konum ve tarih gibi ölçütlerle daraltılabilir. Anlamlı dosya adları aramayı ciddi biçimde kolaylaştırır.

### Sürüm geçmişi ve normal dosyalar

Google Dokümanlar, E-Tablolar ve Slaytlar ayrıntılı **sürüm geçmişi** sunar. Yüklenmiş PDF veya Office dosyalarında da sürüm yönetimi bulunabilir; ancak çalışma biçimi Google'a özgü belge türleriyle aynı değildir.

### Masaüstü için Drive: dosya akışı ve yansıtma

Masaüstü için Drive, kurulum ve hesap ayarına bağlı olarak dosyaları bulut merkezli **akış** yaklaşımıyla veya yerelde tam kopya tutan **yansıtma** yaklaşımıyla çalıştırabilir.

- Akış: Yerel disk kullanımını azaltabilir; bazı dosyaları ayrıca çevrim dışı kullanılabilir yapabilirsiniz.
- Yansıtma: Dosyaların yerel kopyalarını da tutar; daha fazla disk alanı kullanır.

### Senkronizasyon ile yedek aynı şey değildir

Senkronizasyon iki konumdaki güncel durumu eşitlemeye çalışır. Yerel dosyayı silmeniz, silme işleminin buluta da yansımasına yol açabilir. Bu nedenle **Drive senkronizasyonu tek başına bağımsız yedekleme stratejisi değildir**.

<div class="mistake-panel" markdown="1">

**Sık hata:** “Buluta attım, artık ne olursa olsun geri gelir.” Hayır. Senkronizasyon, paylaşım ve yedekleme farklı kavramlardır. Kritik verinin bağımsız yedeğini ayrıca planlayın.

</div>

## Depolama, dışa aktarma ve güvenlik

### Google dosyasını indirmek

Google Dokümanlar, E-Tablolar veya Slaytlar dosyasını indirirken PDF, DOCX, XLSX veya PPTX gibi başka bir biçime dönüştürmek mümkündür. Dönüşüm sonrasında özellikle karmaşık sayfa düzeni, formül veya font kullanılan belgeleri hedef uygulamada tekrar kontrol edin.

### Office dosyalarını Drive'da kullanmak

DOCX, XLSX ve PPTX dosyaları Drive içinde açılıp düzenlenebilir. Ancak gelişmiş makrolar, özel fontlar veya karmaşık düzenler her ortamda bire bir aynı görünmeyebilir.

### Depolama alanı

Kullanılabilir depolama kotası hesap ve plan türüne bağlıdır. Kota dolduğunda yeni yükleme ve başka Google hizmetleri etkilenebilir. Büyük ve yinelenen dosyaları düzenli gözden geçirmek iyi alışkanlıktır.

### Hesap güvenliği

Drive güvenliği yalnız paylaşım düğmesinden ibaret değildir. Google hesabında güçlü kimlik doğrulama kullanmak, gereksiz paylaşım yetkilerini kaldırmak ve beklenmeyen Drive/Doküman bağlantılarına karşı dikkatli olmak gerekir.

> Bir bağlantının `drive.google.com` veya `docs.google.com` üzerinde olması, içeriğin mutlaka güvenilir olduğunu garanti etmez. Saldırganlar da bulut dosyası oluşturabilir.

## Birlikte uygulayalım

1. Bir test klasörü ve üç test dosyası oluşturun.
2. Bir arkadaşınıza sırayla Görüntüleyen, Yorumcu ve Düzenleyen rolü verin; yapabildiği işlemleri not edin.
3. Genel erişimi **Kısıtlanmış** yapın ve başka bir hesaptan bağlantıyı açmayı deneyin.
4. Bir Google Dokümanında değişiklik yapıp sürüm geçmişini inceleyin.
5. “Drive senkronizasyonu neden tek başına yedek değildir?” sorusuna iki cümlelik açıklama yazın.

## Sık yapılan hatalar ve ders özeti

### Sık yapılan hatalar

- “Benimle paylaşılanlar” bölümündeki her dosyanın sahibi olduğunuzu düşünmek.
- Yalnız okumaya ihtiyacı olan kişiye Düzenleyen vermek.
- Bağlantıyı kopyalamanın dosyayı otomatik herkese açtığını sanmak.
- Klasör paylaşırken içindeki bütün dosyaları kontrol etmemek.
- Senkronizasyonu yedekleme ile aynı kabul etmek.
- Bulut bağlantısını güvenilirlik kanıtı olarak görmek.

### Ders özeti

Bu dersten sonra **Drive'ım, Benimle paylaşılanlar, dosya/klasör yükleme, Görüntüleyen-Yorumcu-Düzenleyen rolleri, Kısıtlanmış erişim, bağlantıyla paylaşım, sürüm geçmişi, senkronizasyon ve güvenli paylaşım** kavramlarını günlük okul ve proje çalışmalarında kullanabilmelisiniz.

### Güncel kaynak kontrolü

Bu ders hazırlanırken Google Drive Yardım ve Google Workspace Öğrenim Merkezi'nin Türkçe paylaşım/erişim belgeleri; Google Dokümanlar Düzenleyicileri Yardım'ın sürüm geçmişi belgeleri ve Masaüstü için Drive yardım sayfaları esas alınmıştır.
