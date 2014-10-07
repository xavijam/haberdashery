---
layout:       workshop
title:        Cursos mensuales - Mercería Alonso
description:  Elige cualquiera de nuestros cursos o alquila una máquina por tu cuenta
permalink:    /taller/
---

<article>

  <div class="pure-g">
    <div class="pure-u-1">
      <div class="l-box">
        <h4>Cursos mensuales</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
    </div>
  </div>

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


  <section class="workshop-calendar">

    <h3>Calendario</h3>
    <p></p>

    <div id="calendar"></div>

  </section>

  <!--script src="{{ "/js/vendor/jquery.js" | prepend: site.baseurl }}"></script>
  <script src="{{ "/js/vendor/jquery-ui.js" | prepend: site.baseurl }}"></script> -->

  <script>
    var classes = {{ site.data.workshop | jsonify }};
  </script>

  <script src="{{ "http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js" | prepend: site.baseurl }}"></script>
  <script src="{{ "http://ajax.googleapis.com/ajax/libs/jqueryui/1.7.2/jquery-ui.min.js" }}"></script>

  <script src="{{ "/js/vendor/underscore.js" | prepend: site.baseurl }}"></script>
  <script src="{{ "/js/vendor/backbone.js" | prepend: site.baseurl }}"></script>
  <script src="{{ "/js/vendor/jquery.weekcalendar.js" | prepend: site.baseurl }}"></script>
  <script src="{{ "/js/workshop/workshop.js" | prepend: site.baseurl }}"></script>

  
</article>