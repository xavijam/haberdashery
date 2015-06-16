---
layout:       app
title:        Tienda
type:         default
description:  >
  Desde 1978 ayudándote a
  crear tu propio estilo
permalink:    /tienda/
---

<div class="ContentHeader parallax-window" data-position="center center" data-bleed="10" data-natural-width="1024" data-natural-height="768" data-image-src="/img/shop/shop.jpg">
  <h2 class="ContentHeader-title PageTitle">Tienda</h2>
</div>

<div class="u-inner">
  <div class="pure-g Block">
    <div class="Block-item pure-u-1 pure-u-md-1-2 pure-u-lg-1-2">
      <div class="l-box">
        <p class="DefaultParagraph">Mercería Alonso fue fundada en 1978 en Majadahonda, situada en el centro de la ciudad.
        Desde los inicios nos hemos dedicado a la venta de productos de mercería al por menor.<br/><br/>
        Intentamos cubrir las necesidades de nuestros clientes, ofreciendo una atención personaliza. Si hay algo que nos
        diferencia, es nuestro amplia variedad de productos, contando con referencias de primeras marcas.<br/><br/>
        Además nuestros productos se adaptan al paso del tiempo y hacemos un amplio seguimiento de las modas
        y tendencias más actuales. Con una gran superficie, una experiencia de mas de 35 años y la confianza
        de nuestro publico, apostamos por el comercio tradicional.
        </p>
      </div>
    </div>
    <div class="Block-item pure-u-1 pure-u-md-1-2 pure-u-lg-1-2">
      <div class="l-box">
        <img class="pure-img" src="/img/shop/shop2.jpg" title="Tienda" alt="Tienda" />
      </div>
    </div>
  </div>
</div>

<div class="LocationMap js-map"></div>

<div class="u-inner">
  <ul class="Block List pure-g" id="contacto">
    <li class="List-item pure-u-1 pure-u-md-1-3 pure-u-lg-1-3">
      <div class="l-box">
        <h3 class="List-itemTitle">CONTACTO</h3>
        <p class="List-itemText">
          C/ Iglesia 6-8<br/>
          28220 Majadahonda<br/>
          Madrid
        </p>
        <p class="List-itemText List-itemText--margin">
          <strong>Tel:</strong> <a href="tel:{{ site.phone }}">{{ site.phone }}</a>
        </p>
        <p class="List-itemText">
          <strong>Mail:</strong> <a href="mailto:{{ site.email }}">{{ site.email }}</a>
        </p>
      </div>
    </li>
    <li class="List-item pure-u-1 pure-u-md-1-3 pure-u-lg-1-3">
      <div class="l-box">
        <h3 class="List-itemTitle">HORARIO</h3>
        <dl class="List-itemTable">
          <dt class="List-itemTableTitle">Lunes</dt>
          <dd class="List-itemTableInfo">10-14 · 17-20</dd>
          <dt class="List-itemTableTitle">Martes</dt>
          <dd class="List-itemTableInfo">10-14 · 17-20</dd>
          <dt class="List-itemTableTitle">Miércoles</dt>
          <dd class="List-itemTableInfo">10-14 · 17-20</dd>
          <dt class="List-itemTableTitle">Jueves</dt>
          <dd class="List-itemTableInfo">10-14 · 17-20</dd>
          <dt class="List-itemTableTitle">Viernes</dt>
          <dd class="List-itemTableInfo">10-14 · 17-20</dd>
          <dt class="List-itemTableTitle">Sábado</dt>
          <dd class="List-itemTableInfo">10-14</dd>
          <dt class="List-itemTableTitle">Domingo</dt>
          <dd class="List-itemTableInfo"><em>cerrado</em></dd>
        </dl>
      </div>
    </li>
    <li class="List-item pure-u-1 pure-u-md-1-3 pure-u-lg-1-3">
      <div class="l-box">
        <h3 class="List-itemTitle">INFO</h3>
        <p class="List-itemText">
          Laura y Enrique, desde 1978, han acercado la mercería tradicional
          a esta población del suroeste de Madrid.<br/><br/>
          Gracias a su afición por las manualidades ofrecen a sus clientes una
          alternativa de ocio creativa.
        </p>
      </div>
    </li>
  </ul>
</div>


<script src="https://maps.googleapis.com/maps/api/js?v=3.exp"></script>

<!-- build:js(app) /js/shop.js -->
  <script src="/_bower_components/jquery/jquery.js"></script>
  <script src="/_bower_components/underscore/underscore.js"></script>
  <script src="/_bower_components/backbone/backbone.js"></script>
  <script src="/_bower_components/jquery-cookie/jquery.cookie.js"></script>
  <script src="/js/vendor/parallax.min.js"></script>
  <script src="/js/models/cookie_model.js"></script>
  <script src="/js/last_posts.js"></script>
  <script src="/js/cookie_banner.js"></script>
  <script src="/js/shop/map.js"></script>
  <script src="/js/shop/shop.js"></script>
<!-- endbuild -->