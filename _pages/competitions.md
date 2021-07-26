---
layout: page
title: Competitions
permalink: /competitions/
#description: Here lists my competitions with cash prize.
nav: true
---

<div class="publications">

{% for y in site.data.coauthors %}
<h2 class="year">{{y[0]}}</h2>
  {% for entry in y[1] %}
  <div class="row">
    <div class="col-sm-1">
    </div>
    <div class="col-sm-1" style="text-align: center;font-size: 30px">
    {% if entry.emoji %}
      {{entry.emoji}}
    {% endif %}
    </div>
    <div class="col-sm-10">
      {% if entry.website %}
        <div class="title"><b><a href="{{entry.website}}">{{entry.name}}</a></b></div>
      {% else %}
        <div class="title"><b>{{entry.name}}</b></div>
      {% endif %}
        <div class="author"><b><em>{{entry.position}}, {{entry.prize}}
        {% if entry.solution %}
        , <a target="_blank" rel="noopener noreferrer" href="{{entry.solution}}">solution</a>
        {% endif %}
        </em></b></div>
    </div>
  </div>
  {% endfor %}
{% endfor %}