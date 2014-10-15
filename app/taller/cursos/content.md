---
layout:       workshop
title:        Cursos mensuales - Mercería Alonso
description:  Elige cualquiera de nuestros cursos o alquila una máquina por tu cuenta
keywords:     >
  taller,cursos mensuales,cursos,patchwork,curso patchwork,curso punto,punto,curso ganchillo,ganchillo,corte y confección,curso corte y confección,mercería,merceria,mercería alonso,majadahonda,madrid
type:         monthly
permalink:    /taller/
---

  <section class="workshop-item workshop-item-center">
    <div class="workshop-item-inner">
      <h3>Cursos mensuales</h3>
      <p>¡Tu pones las ganas de aprender y lo demás lo dejas en nuestras manos! Descubre tu parte creativa y consigue realizar algo hecho por tí, de tu estilo. Todas nuestras clases tienen un máximo 5 o 6 alumnos/as, no necesitarás conocimiento previo. Tendrás acceso a descuentos en los productos que utilizarás en las clases.</p>
      <span class="separator"></span>
      <p class="uline">Un día a la semana de dos horas de duración a un precio de <strong>50€/mes</strong>.</p>
    </div>
  </section>

  <section class="workshop-item workshop-item-odd">
    <div class="workshop-item-inner">
      <div class="workshop-align-left workshop-type-image">
        <img src="/img/workshop/corte-confeccion.png" alt="Corte y confección" title="Corte y confección" />
      </div>
      <div class="workshop-align-right workshop-type-content">
        <h4>Corte y confección</h4>
        <p>Te enseñaremos a coger medidas, sacar un patrón, pasarlo a la tela, coserlo, hacer ojales, colocar automáticos, botones, cremalleras, corchetes… es decir, conseguirás confeccionar prendas a medida, bolsos o disfraces.</p>
        <p>Dispondrás de los mejores consejos y nos adaptaremos a tí y a tus ideas. Además podrás usar libremente las maquinas de coser, maniquíes, planchas…</p>
        <a href="#/calendario" class="calendar btn wide green">Calendario</a>
      </div>
    </div>
  </section>

  <section class="workshop-item">
    <div class="workshop-item-inner">
      <div class="workshop-align-right workshop-type-image">
        <img src="/img/workshop/canastilla.png" alt="Canastilla" title="Canastilla" />
      </div>
      <div class="workshop-align-left workshop-type-content">
        <h4>Canastilla</h4>
        <p>Si deseas tener algo hecho por tí, para recibir a tu bebe en casa o realizar un regalo personal, único y diferente a un familiar o amigo, te damos algunas ideas para hacer todo lo que un bebe necesita, desde un original cambiador, pañalera o saquito, hasta conjuntos de ropa de bebe, es decir, vestiditos y chaquetas.</p>
        <p>Se realizarán objetos textiles artesanales con materiales de buena calidad, tanto naturales como orgánicos.</p>
        <a href="#/calendario" class="calendar btn wide green">Clases disponibles</a>
      </div>
    </div>
  </section>

  <section class="workshop-item workshop-item-odd">
    <div class="workshop-item-inner">
      <div class="workshop-align-left workshop-type-image">
        <img src="/img/workshop/patchwork.png" alt="Patchwork" title="Patchwork" />
      </div>
      <div class="workshop-align-right workshop-type-content">
        <h4>Patchwork</h4>
        <p>El patchwork es sin duda la labor que levanta más pasión. Empezó como un modo de aprovechar retales, como su nombre dice “parche + trabajo”, y hoy en día se ha convertido en una habilidad con resultados sorprendentes, llegando a crear verdaderas piezas de arte.</p>
        <p>En las clases aprenderás todas las técnicas que se pueden aplicar, realizarás desde un alfiletero a trabajos navideños, una colcha, bolsos… podrás avanzar a tu ritmo e intercambiar ideas con tus compañeras y profesora.</p>
        <a href="#/calendario" class="calendar btn wide green">Horario</a>
      </div>
    </div>
  </section>

  <section class="workshop-item">
    <div class="workshop-item-inner">
      <div class="workshop-align-right workshop-type-image">
        <img src="/img/workshop/punto.png" alt="Punto" title="Punto" />
      </div>
      <div class="workshop-align-left workshop-type-content">
        <h4>Punto</h4>
        <p>El punto ya no es sólo cosa de abuelas, ¡LA LANA ESTA DE MODA!, sobre todo gracias a las nuevas lanas de fantasía, con las que se crean maravillas con puntos muy sencillos.</p>
        <p>Disfruta con esta manualidad fácil de aprender, donde crearás desde una bufanda o un cuello, hasta prendas más elaboradas como un abrigo o un guante. Las profesoras se adaptan a lo que deseas hacer y en poco tiempo verás tu avance.</p>
        <a href="#/calendario" class="calendar btn wide green">Calendario</a>
      </div>
    </div>
  </section>

  <section class="workshop-item workshop-item-odd">
    <div class="workshop-item-inner">
      <div class="workshop-align-left workshop-type-image">
        <img src="/img/workshop/ganchillo.png" alt="Ganchillo" title="Ganchillo" />
      </div>
      <div class="workshop-align-right workshop-type-content">
        <h4>Ganchillo</h4>
        <p>Relájate con nuestras clases de ganchillo. Te enseñaremos a trabajar con muchos materiales, desde algodón, lana… hasta el trapillo que está de moda.</p>
        <p>Nos adaptamos a tu nivel, si eres principiante empezarás desde los puntos básicos e iras poco a poco avanzando. Si ya tienes conocimiento te enseñaran trucos nuevos o descifrarás los patrones más complicados de las revistas.</p>
        <a href="#/calendario" class="calendar btn wide green">Clases disponibles</a>
      </div>
    </div>
  </section>

  <section class="workshop-item workshop-item-center">
    <div class="workshop-item-inner">
      <h4>Calendario</h4>
      <p>Disponemos una gran variedad de horarios tanto por la mañana como por la tarde. Consulta nuestro calendario y si no se adapta a tus necesidades <a href="/contacto">contacta</a> con nosotros e intentaremos abrir nuevos grupos.</p>
    </div>
    <div id="calendar"></div>
  </section>

<script>var classes = {{ site.data.workshop | jsonify }}</script>

<!-- build:js(app) /js/workshop.js -->
<script src="/_bower_components/jquery/jquery.js"></script>
<script src="/js/vendor/jquery-ui-1.7.2.js"></script>
<script src="/_bower_components/underscore/underscore.js"></script>
<script src="/_bower_components/backbone/backbone.js"></script>
<script src="/_bower_components/moment/moment.js"></script>
<script src="/js/vendor/jquery.weekcalendar.js"></script>
<script src="/js/workshop/workshop.js"></script>
<!-- endbuild -->

