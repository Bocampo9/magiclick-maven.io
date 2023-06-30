<%@page import="java.sql.ResultSet"%>
<%@page import="java.sql.Statement"%>
<%@page import="dataBase.ConexionDB"%>
<%@page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, user-scalable=no">

    <link rel="stylesheet" href="css/productos-bazar.css">

    <script src="https://kit.fontawesome.com/0916a5db50.js" crossorigin="anonymous"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
    <link
        href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;300;500;900&family=Roboto:wght@100;300&display=swap"
        rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css" />

    <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
  />

    <title>Magiclick | Bazar</title>
</head>

<body>
    <header class="menu-fijo" style="background-color: #fff;">
        <div class="menu-imagen">
          <p class="menu-icon-oculto"><i class="fa-solid fa-bars"></i></p>
          <a href="index.html"><img src="imagenes/logo-default-2.png" class="menu-magiclick animate__animated animate__fadeInLeft" alt=""></a>
          <a href="" class="buscar"><i class="fa-solid fa-magnifying-glass"></i></a>
        </div>
        <div class="contenedor">
          <nav>
            <ul id="lista-uno-principal">
              <li id="lista-uno"><a href="index.html">HOME</a></li>
              <li id="lista-uno"><a href="nosotros.html">NOSOTROS</a></li>
              <li id="lista-uno" class="lista-desplegable"><a href="productos.html">PRODUCTOS</a>
                <ul id="desplegable-menu">
                  <a href="productos-calefaccion.jsp" style="background-color: #ffa726;color: #fff;">CALEFACCIÓN</a>
                  <a href="productos-ventilacion.jsp" style="background: #42a5f5;color:#fff">VENTILACIÓN</a>
                  <a href="productos-bazar.jsp" style="background: #ff3366;color: #fff;">BAZAR</a>
                  <a href="productos-jardin.jsp" style="background: #8ec351;color: #fff;">JARDÍN</a>
                  <a href="catalogo.html" style="background-color: #fff;color: #000;">CÁTALOGO DE PRODUCTOS</a>
                </ul>
              </li>
              <li id="lista-uno"><a href="catalogo.html">CATÁLOGO</a></li>
              <li id="lista-uno"><a href="contacto.html">CONTACTO</a></li>
              <li id="lista-uno"><a href="servicio-tecnico.html">SERVICIO TÉCNICO</a></li>
            </ul>
          </nav>
          <div class="menu-redes">
            <ul class="menu-iconos">
              <li><a href="https://www.facebook.com/magiclickar" target="_blank"><i class="fa-brands fa-facebook icono"></i></a></li>
              <li><a href="https://www.instagram.com/magiclickar/" target="_blank"><i class="fa-brands fa-instagram icono"></i></a></li>
              <li><a href="https://twitter.com/Magiclickar" target="_blank"><i class="fa-brands fa-twitter icono"></i></a></li>
              <li><a href="https://www.linkedin.com/company/magiclick/" target="_blank"><i class="fa-brands fa-linkedin icono"></i></a></li>
              <li><a href="https://www.youtube.com/@MagiclickArgentina" target="_blank"><i class="fa-brands fa-youtube icono"></i></a></li>
              <li><a href=""><i class="fa-solid fa-magnifying-glass icono"></i></a></li>
            </ul>
          </div>
        </div>
      </header>
    <main>
        <section>
            <div class="quienes-somos">
                <div class="video-overlay"></div>
                <img src="imagenes/banner_cat_bazar_03.jpg" alt="">
                <div class="text-somos">
                    <h2 id="video-toggle">BAZAR</h2>
                </div>
            </div>
        </section>
        <section id="buscar">
            <div class="container">
                <p><i class="fa-solid fa-magnifying-glass"></i></p>
                <input type="search" placeholder="Buscar">
            </div>

           <div class="lista-producto">
<%
    //conectar db
    ConexionDB conexionDB = new ConexionDB();
    Statement st = conexionDB.createStatement();
    
    ResultSet rs = st.executeQuery("SELECT * FROM `productosbazar` WHERE 1	");

    while (rs.next()) {
        // Obtener los valores de las columnas
        int id = rs.getInt("id");
        String nombre = rs.getString("nombre");
        String codigo = rs.getString("codigo");
        String caracteristica1 = rs.getString("carasteristica1");
        String caracteristica2 = rs.getString("carasteristica2");
        String caracteristica3 = rs.getString("carasteristica3");
        String caracteristica4 = rs.getString("carasteristica4");
        String caracteristica5 = rs.getString("carasteristica5");
        String imagen1=rs.getString("imagen1");
        String imagen2=rs.getString("imagen2");
        String imagen3=rs.getString("imagen3");
        String imagen4=rs.getString("imagen4");
        String imagen5=rs.getString("imagen5");

        // Construir el HTML para cada fila
        %>
        <div class="objeto">
            <a href="" data-target="modal<%= id %>"><img src="<%= imagen1 %>" alt="" class="img-modal"></a>
            <h2 class="texto"><%= nombre %></h2>
        </div>
        
        <div id="modal<%= id %>" class="modal">
            <div class="modal-content">
                <span class="close"><i class="fa-solid fa-xmark"></i></span>
                <div class="contenedor">
                     <img class="img-produ" id="imagen-principal" src="<%= imagen1 %>" alt="">
                    <div class="img-todas">
        <% if (imagen2 != null && !imagen2.isEmpty()) { %>
            <img src="<%= imagen2 %>" alt="">
        <% } %>
        <% if (imagen3 != null && !imagen3.isEmpty()) { %>
            <img src="<%= imagen3 %>" alt="">
        <% } %>
        <% if (imagen4 != null && !imagen4.isEmpty()) { %>
            <img src="<%= imagen4 %>" alt="">
        <% } %>
        <% if (imagen1 != null && !imagen1.isEmpty()) { %>
            <img src="<%= imagen1 %>" alt="">
        <% } %>
    </div>
                </div>

                <div class="titulo">
                    <h2 id="producto"><%= nombre %></h2>
                    <h3><%= codigo %></h3>
                </div>
                <div class="descripcion">
                    <ul>
    <li class="hidden">Capacidad: <%= caracteristica1 %></li>
    <li class="hidden">Material: <%= caracteristica2 %></li>
    <li class="hidden">Colores: <%= caracteristica3 %></li>
    <li class="hidden">Peso: <%= caracteristica4 %></li>
    <li class="hidden"><%= caracteristica5 %></li>
                    </ul>
<div class="catalogo">
    <img class="industria" src="imagenes/industria-argentina.png" alt="">
<a href="/catalogo-bazar.pdf"><button><i class="fa-regular fa-file-pdf"> CATÁLOGO</i></button></a>
</div>

                </div>
            </div>
        </div>
        <%
    }
%>
</div>
        </section>

        <section id="disfruta-hogar">
            <div class="comprar">
              <h2>¡Disfrutá tu hogar!</h2>
              <a href="productos.html">CONOCE MÁS</a>
            </div>
      
            <div class="marquee">
              <ul class="marquee-content">
                <li><img src="imagenes/iconos_calefaccion-q0nz1k7uw5mdlotjvb8u1sgzhtyy61r5ke8eabcd1c.png" alt=""></li>
                <li><img src="imagenes/iconos_bazar-q0nn7t7jbmsuw38vya27o86t4wftphjzp4kywelvcw.png" alt=""></li>
                <li><img src="imagenes/iconos_jardin-q0nz1ic6ihjsygwa6afkwsy2b287qnjow4xfbrf5ds.png" alt=""></li>
                <li><img src="imagenes/iconos_ventilacion-q0nn7s9p4srkkha93rnl3qfcjikghsg9czxhf4n9j4.png" alt=""></li>
                <li><img src="imagenes/iconos_calefaccion-q0nz1k7uw5mdlotjvb8u1sgzhtyy61r5ke8eabcd1c.png" alt=""></li>
                <li><img src="imagenes/iconos_bazar-q0nn7t7jbmsuw38vya27o86t4wftphjzp4kywelvcw.png" alt=""></li>
                <li><img src="imagenes/iconos_jardin-q0nz1ic6ihjsygwa6afkwsy2b287qnjow4xfbrf5ds.png" alt=""></li>
                <li><img src="imagenes/iconos_ventilacion-q0nn7s9p4srkkha93rnl3qfcjikghsg9czxhf4n9j4.png" alt=""></li>
                <li><img src="imagenes/iconos_calefaccion-q0nz1k7uw5mdlotjvb8u1sgzhtyy61r5ke8eabcd1c.png" alt=""></li>
                <li><img src="imagenes/iconos_bazar-q0nn7t7jbmsuw38vya27o86t4wftphjzp4kywelvcw.png" alt=""></li>
                <li><img src="imagenes/iconos_jardin-q0nz1ic6ihjsygwa6afkwsy2b287qnjow4xfbrf5ds.png" alt=""></li>
                <li><img src="imagenes/iconos_ventilacion-q0nn7s9p4srkkha93rnl3qfcjikghsg9czxhf4n9j4.png" alt=""></li>
              </ul>
            </div>
      
          </section>
        <section id="nav-dos">
            <img src="imagenes/logo-default.png" alt="">
            <div class="contenedor-nav-dos">
                <nav>
                    <ul>
                        <li><a href="index.html" class="a-nav-dos">HOME</a></li>
                        <li><a href="nosotros.html" class="a-nav-dos">NOSOTROS</a></li>
                        <li><a href="productos-ventilacion.jsp" class="a-nav-dos">VENTILACION</a></li>
                        <li><a href="productos-calefaccion.jsp" class="a-nav-dos">CALEFACCION</a></li>
                        <li><a href="productos-bazar.jsp" class="a-nav-dos">BAZAR</a></li>
                        <li><a href="productos-jardin.jsp" class="a-nav-dos">JARDIN</a></li>
                        <li><a href="servicio-tecnico.html" class="a-nav-dos">SERVICE</a></li>
                        <li><a href="contacto.html" class="a-nav-dos">CONTACTO</a></li>
                    </ul>
                </nav>
            </div>
        </section>
    </main>
    <footer>
        <h2>¡No te pierdas nuestras novedades!</h2>
        <p>¡Suscribite al Newsletter!</p>
        <div class="btn-footer">
            <input type="email" placeholder="Tu email">
            <button class="btn-submit" type="submit">SUSCRIBITE</button>
        </div>
        <div class="whatsapp">
            <a href="https://api.whatsapp.com/send?phone=TUNUMERO" class="whatsapp-link">
                <i class="fa-brands fa-whatsapp whatsapp-logo"></i>
            </a>
        </div>
        <div class="marca">
            <h1>PRODUCIDO POR BRAIAN OCAMPO</h1>
        </div>
    </footer>

    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>


    <script src="js/productos-bazar.js"></script>
</body>

</html>