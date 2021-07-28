---
layout: page
title: Competitions
permalink: /competitions/
#description: Here lists my competitions with cash prize.
nav: true
---

<div class="publications">

{% for y in site.data.prize %}
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
        {% if entry.conference %}
        <div class="title"><b><a href="{{entry.website}}">{{entry.conference}}{%raw%} |{%endraw%} {{entry.name}}</a></b></div>
        {% else %}
        <div class="title"><b><a href="{{entry.website}}">{{entry.name}}</a></b></div>
        {% endif %}
      {% else %}
        <div class="title"><b>{{entry.name}}</b></div>
      {% endif %}
        <div class="author"><b><em>{{entry.position}}, {{entry.prize}}</em></b>
        {% if entry.solution %}
        <b><em><a style="border-left: 2px solid grey;" > </a></em></b>
        <b><a  style= "margin-left: 6px" target="_blank" rel="noopener noreferrer" href="{{entry.solution}}">solution 
</a></b>
        {% endif %}
        </div>
    </div>
  </div>
  {% endfor %}
{% endfor %}