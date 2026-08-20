---
layout: default
title:
---

<section class="hero">
  <div class="wrap hero-grid hero-grid-single">
    <div class="hero-content-card">
<p class="eyebrow">Niyazi Sayın Bilim ve Sanat Merkezi — Bilişim Teknolojileri Dersi</p>
      <h1>{{ site.title }}</h1>
      <p class="lead">{{ site.description }}</p>
      <p class="hero-intro">
        Bilgisayarı sıfırdan tanımaktan günlük dijital araçları bilinçli kullanmaya, yazılım, robotik, 3D tasarım ve yapay zekâ gibi alanlarda eğitime başlamadan önce gerekli hazırbulunuşluk düzeyini kazandıran dijital hazırlık portalı.
      </p>
    </div>
  </div>
</section>

<section class="wrap section-block">
  <div class="path-grid">
    <div class="path-card competency-card">
      <p class="eyebrow competency-label">Genel Yeterlik</p>
      <h2>Genel Bilgisayar Kullanımı ve Dijital Yetkinlik</h2>
      <p>Bilgisayarı ve Windows'u etkin kullanma, dosya-klasör yönetimi, internet, Gmail/Drive, Office, dijital medya, güvenlik ve yapay zekâ.</p>
      <strong>Bölümler 1–5</strong>
    </div>
    <div class="path-card competency-card">
      <p class="eyebrow competency-label">Programlama Yeterlik</p>
      <h2>Bilişim Teknolojileri Araçları ve Dijital Üretim</h2>
      <p>Visual Studio, GitHub, Colab, Scratch, robotik, elektronik, CAD, 3D baskı ve dijital üretim araçları.</p>
      <strong>Bölümler 6–8</strong>
    </div>
  </div>
</section>

<section class="wrap section-block portal-progress-section">
  {% assign live_modules = site.data.modules | where: "status", "yayında" %}
  <div class="progress-panel">
    <div class="progress-box">
      <span>Tamamlanan ders</span>
      <strong id="completedCount">0</strong>
    </div>
    <div class="progress-box">
      <span>Yayımdaki ders</span>
      <strong>{{ live_modules | size }}</strong>
    </div>
    <div class="progress-box">
      <span>Toplam plan</span>
      <strong>{{ site.data.modules | size }}</strong>
    </div>
  </div>
</section>



<section class="wrap section-block">
  <div class="section-heading">
    <div>
      <p class="eyebrow">Müfredat</p>
      <h2>Tüm Bölümleri İncele</h2>
    </div>
    <p>Bölüm başlığına tıklayarak o bölüme ait dersleri açabilir, yayımdaki derslere doğrudan girebilirsin.</p>
  </div>

  <div class="section-accordion-list">
    {% for section in site.data.sections %}
      {% assign section_modules = site.data.modules | where: "section", section.id %}
      {% assign section_live = section_modules | where: "status", "yayında" %}
      <details class="section-accordion">
        <summary>
          <span class="section-summary-number">{{ section.id }}</span>
          <span class="section-summary-main">
            <strong>{{ section.title }}</strong>
            <small>{{ section.description }}</small>
          </span>
          <span class="section-summary-count">{{ section_live | size }} / {{ section_modules | size }} yayında</span>
        </summary>
        <div class="section-accordion-content">
          <div class="module-grid">
            {% for module in section_modules %}
              {% include module-card.html module=module %}
            {% endfor %}
          </div>
        </div>
      </details>
    {% endfor %}
  </div>

  <p><a class="card-link" href="{{ '/tum-dersler/' | relative_url }}">{{ site.data.modules | size }} Dersin Tamamını Tek Sayfada Gör</a></p>
</section>
