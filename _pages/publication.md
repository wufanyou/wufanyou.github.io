---
layout: page
permalink: /publication/
title: Publication
years: [2021,2020,2019,2017]
nav: true
description: |
  
---

<div class="publications">

{% for y in page.years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f papers -q @*[year={{y}}]* %}
{% endfor %}

<h2 class="year"> Symbol</h2>
<div class="row">
  <div class="col-sm-1">
  </div>
  <div class="col-sm-10">
    <div class="row">
      <div class='col-sm-6'>
      🌳: Forestry
      </div>
      <div class='col-sm-6'>
      🚥: Transportation
      </div>
      <div class='col-sm-6'>
      📷: Computer Vision
      </div>
      <div class='col-sm-6'>
      🕸️: Complex Networks
      </div>
  </div>
  <div class="col-sm-1">
  </div>
</div>
</div>
