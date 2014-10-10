---
layout:       workshop
title:        Cursos mensuales - Mercería Alonso
description:  Elige cualquiera de nuestros cursos o alquila una máquina por tu cuenta
keywords:     >
  taller,cursos mensuales,cursos,patchwork,curso patchwork,curso punto,punto,curso ganchillo,ganchillo,corte y confección,curso corte y confección,mercería,merceria,mercería alonso,majadahonda,madrid
type:         monthly
permalink:    /taller/
---

<article>

  <section class="workshop-item workshop-item-center">
    <div class="workshop-item-inner">
      <h3>Cursos mensuales</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
  </section>

  <section class="workshop-item">
    <div class="workshop-align-left workshop-type-image">
      <img src="/img/workshop/corte-confeccion.png" alt="Corte y confección" title="Corte y confección" />
    </div>
    <div class="workshop-align-right workshop-type-content">
      <h4>Corte y confección</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      <a href="#/calendario" class="calendar btn wide green">Calendario</a>
    </div>
  </section>

  <section class="workshop-item">
    <div class="workshop-align-right workshop-type-image">
      <img src="/img/workshop/canastilla.png" alt="Canastilla" title="Canastilla" />
    </div>
    <div class="workshop-align-left workshop-type-content">
      <h4>Canastilla</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      <a href="#/calendario" class="calendar btn wide green">Clases disponibles</a>
    </div>
  </section>

  <section class="workshop-item">
    <div class="workshop-align-left workshop-type-image">
      <img src="/img/workshop/patchwork.png" alt="Patchwork" title="Patchwork" />
    </div>
    <div class="workshop-align-right workshop-type-content">
      <h4>Patchwork</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      <a href="#/calendario" class="calendar btn wide green">Horario</a>
    </div>
  </section>

  <section class="workshop-item">
    <div class="workshop-align-right workshop-type-image">
      <img src="/img/workshop/punto.png" alt="Punto" title="Punto" />
    </div>
    <div class="workshop-align-left workshop-type-content">
      <h4>Punto</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      <a href="#/calendario" class="calendar btn wide green">Calendario</a>
    </div>
  </section>

  <section class="workshop-item">
    <div class="workshop-align-left workshop-type-image">
      <img src="/img/workshop/ganchillo.png" alt="Ganchillo" title="Ganchillo" />
    </div>
    <div class="workshop-align-right workshop-type-content">
      <h4>Ganchillo</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      <a href="#/calendario" class="calendar btn wide green">Clases disponibles</a>
    </div>
  </section>
</article>

<article class="workshop-calendar">
  <section class="workshop-item workshop-item-center">
    <div class="workshop-item-inner">
      <h4>Calendario</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
    </div>
    <div id="calendar"></div>
  </section>
</article>

  <script>var classes = {{ site.data.workshop | jsonify }}</script>
  
  <!-- build:js(app) /js/workshop.js -->
  <script src="/_bower_components/jquery/jquery.js"></script>
  <script src="/js/vendor/jquery-ui-1.7.2.js"></script>
  <script src="/_bower_components/underscore/underscore.js"></script>
  <script src="/_bower_components/backbone/backbone.js"></script>
  <script src="/js/vendor/jquery.weekcalendar.js"></script>
  <script src="/js/workshop/workshop.js"></script>
  <!-- endbuild -->
  
