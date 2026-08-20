---
layout: default
title: Tüm Dersler
permalink: /tum-dersler/
---

<section class="hero">
  <div class="wrap">
    <p class="eyebrow">{{ site.title }}</p>
    <h1>Tüm Dersler</h1>
    <p class="lead">Dersleri başlığa veya bölüme göre filtreleyebilirsin. Yayındaki dersler doğrudan açılır; diğerleri üretim planını gösterir.</p>
  </div>
</section>

<div class="wrap">
  <div class="filter-panel">
    <input id="moduleSearch" type="search" placeholder="Ders ara...">
    <select id="sectionFilter">
      <option value="all">Tüm bölümler</option>
      {% for section in site.data.sections %}
        <option value="{{ section.id }}">{{ section.id }} — {{ section.title }}</option>
      {% endfor %}
    </select>
  </div>

  {% for section in site.data.sections %}
  <section class="section-block">
    <div class="section-heading">
      <div>
        <p class="eyebrow">Bölüm {{ section.id }}</p>
        <h2>{{ section.title }}</h2>
      </div>
      <p>{{ section.description }}</p>
    </div>
    <div class="module-grid">
      {% assign section_modules = site.data.modules | where: "section", section.id %}
      {% for module in section_modules %}
        {% include module-card.html module=module %}
      {% endfor %}
    </div>
  </section>
  {% endfor %}
</div>
