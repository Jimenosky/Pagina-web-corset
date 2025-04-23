<!DOCTYPE html>
<html lang="Spanish">

<head>
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta charset="utf-8">
  <meta name="Proyecto Tercera" content="Proyecto Tercera">
  <link rel="stylesheet" href="./css/main.css">
</head>

<body>
  <menu>
    <div class="menu-up">
      <a href="">
        <img src="./img/dorado.png" alt="" width="48" height="49">
        <span class="texto-logo"> Glamour Ajustado </span>
      </a>
    </div>

    <div class="menu-down">
      <div class="menu-container">
        <div class="hamburger-icon">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="menu-left">
          <a href="#nuestros-ingresos">Nuevos ingresos</a>
          <a href="#nuestros-corsets">Nuestros corsets</a>
          <a href="#OfertasyDescuentos-corsets">Ofertas y Descuentos</a>
        </div>
      </div>
      <div class="menu-right">
        <div class="menu-right-item">
          <a href="">
            <img class="dorado" src="./img/carrito.png" alt="" width="34" height="35">
            <img class="blanco" src="./img/carrito_blanco.png" alt="" width="34" height="35">
          </a>
        </div>
        <div class="menu-right-item">
          <a href="">
            <img class="dorado" src="./img/avatar.png" alt="" width="34" height="35">
            <img class="blanco" src="./img/avatar_blanco.png" width="34" height="35">
          </a>
        </div>
        <div class="menu-right-item">
          <a href="">
            <img class="dorado" src="./img/signo.png" alt="" width="34" height="35">
            <img class="blanco" src="./img/signo_blanco.png" width="34" height="35">
          </a>
        </div>
      </div>
    </div>
  </menu>

  <div class="main-accordion-container">
    </div>

  <div class="historia-corset" id="historiaCarrusel">
    <div class="historia-contenido">
      <h2>Historia del Corset</h2>
      <p>El corset ha sido una prenda emblemática en la moda a lo largo de los siglos. Surgió en el siglo XVI como una estructura rígida para moldear la figura femenina, evolucionando en el siglo XIX hasta convertirse en un símbolo de elegancia y refinamiento. Sin embargo, su uso extremo causó preocupaciones sobre la salud debido a la presión que ejercía en el cuerpo.</p>
      <p>Con el tiempo, el corset dejó de ser una necesidad diaria y se transformó en un elemento estilístico utilizado en la moda contemporánea, el teatro y el diseño. Hoy, su función es más estética que restrictiva, priorizando la comodidad y el estilo sobre la rigidez tradicional.</p>
    </div>
  </div>

  <script>
    const historiaCarrusel = document.getElementById('historiaCarrusel');
    const imagenesFondo = [
      './img/historia1.webp',
      './img/historia2.jpg',
      './img/historia3.avif'
    ];
    let indiceActual = 0;
    const intervaloTiempo = 5000; // Tiempo en milisegundos entre cambios (5 segundos)

    function cambiarFondoCarrusel() {
      historiaCarrusel.style.backgroundImage = `url('${imagenesFondo[indiceActual]}')`;
      indiceActual = (indiceActual + 1) % imagenesFondo.length;
    }

    setInterval(cambiarFondoCarrusel, intervaloTiempo);
    cambiarFondoCarrusel(); // Para establecer la primera imagen inmediatamente
  </script>
</body>

<div class="nuevos-ingresos" id="nuestros-ingresos">
  <h1 class="nuevos-ingresos-titulo">Nuevos Ingresos</h1>
  <p class="nuevos-ingresos-subtitulo">Descubre lo último en nuestra colección de corsets exclusivos.</p>
</div>
<div class="existing-cards-container card-list">
  </div>

  <div class="nuestros-corsets" id="nuestros-corsets">
  <h1 class="nuestros-corsets-titulo">Nuestros Corsets</h1>
  <p class="nuestros-corsets-subtitulo">Explora nuestra amplia selección de corsets únicos.</p>
</div>
<div class="nuestros-corsets-cards-container card-list">
  </div>

<div class="OfertasyDescuentos-corsets" id="OfertasyDescuentos-corsets">
  <h1 class="OfertasyDescuentos-corsets-titulo">Nuestras Ofertas y Descuentos</h1>
  <p class="OfertasyDescuentos-corsets-subtitulo">¡Las mejores ofertas y descuentos en nuestros corsets solo para ti!.</p>
</div>
<div class="OfertasyDescuentos-corsets-cards-container card-list">
  </div>

</html>