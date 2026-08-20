---
layout: default
title: Portalı Güncelleme Rehberi
permalink: /guncelleme-rehberi/
---

<section class="hero">
  <div class="wrap">
    <p class="eyebrow">{{ site.title }}</p>
    <h1>Portalı Güncelleme Rehberi</h1>
    <p class="lead">Ders içeriği, menüler ve genel tasarım birbirinden ayrıdır. Bu nedenle bir değişikliği onlarca dosyada tekrarlamak gerekmez.</p>
  </div>
</section>

<section class="wrap section-block">
  <div class="path-card">
    <h2>Genel başlık ve kurum bilgileri</h2>
    <p>Tek yerden değiştirilir:</p>
    <pre><code>_config.yml</code></pre>
    <p><code>title</code>, <code>description</code>, <code>institution</code>, <code>course</code> ve <code>teacher</code> alanları bütün portalda ortak kullanılır.</p>
  </div>

  <div class="path-card" style="margin-top:14px">
    <h2>Üst menü</h2>
    <p>Menü bağlantıları tek dosyadan yönetilir:</p>
    <pre><code>_data/navigation.yml</code></pre>
    <p>Yeni bir menü eklediğinde veya menü adını değiştirdiğinde bütün sayfaların üst menüsü otomatik güncellenir.</p>
  </div>

  <div class="path-card" style="margin-top:14px">
    <h2>Genel sayfa görünümü</h2>
    <p>Ortak şablonlar:</p>
    <pre><code>_layouts/default.html
_layouts/lesson.html
_layouts/quiz.html</code></pre>
    <p>Örneğin bütün ders sayfalarına yeni bir bilgi kutusu eklemek istiyorsan yalnızca <code>lesson.html</code> şablonunu değiştirmen yeterlidir.</p>
  </div>

  <div class="path-card" style="margin-top:14px">
    <h2>Header ve footer</h2>
    <pre><code>_includes/header.html
_includes/footer.html</code></pre>
    <p>Bu iki dosyadaki değişiklikler bütün portalda görünür.</p>
  </div>

  <div class="path-card" style="margin-top:14px">
    <h2>Renkler, yazı boyutları ve görsel tasarım</h2>
    <pre><code>assets/css/style.css</code></pre>
    <p>Renk, kart görünümü, mobil tasarım veya yazı boyutu gibi görsel değişiklikler tek CSS dosyasından bütün siteye uygulanır.</p>
  </div>

  <div class="path-card" style="margin-top:14px">
    <h2>Ders listesi</h2>
    <pre><code>_data/modules.yml</code></pre>
    <p>Ders adı, görünür ders kodu, bölüm, sıra, durum, güncelleme tarihi ve gözden geçirme periyodu buradan yönetilir. v10 müfredatında 8 bölüm ve 53 ders bulunur; 53 dersin tamamı yayındadır.</p>
  </div>

  <div class="path-card" style="margin-top:14px">
    <h2>Ders içeriği</h2>
    <p>Her ders kendi Markdown dosyasında bulunur. v2 standardında dersler az sayıda ana H2 başlığı, görsel anlatım kutuları ve öğretmenle adım adım yapılabilecek uygulamalar içerir. Bir dersin metnini değiştirmek diğer derslerin dosyalarına dokunmayı gerektirmez.</p>
  </div>
</section>
