/* MAS INFO SOBRE MI */
const antonioInfo = {
  nombre: "Antonio",
  estadoCivil:
    "Soltero ( ¡disponible para aventuras, pero primero el código! 😏 )",
  personalidad:
    "Curioso... muy curioso 🔥😈 jajaja, creativo y con sentido del humor, especialmente cuando el código compila a la primera.",
  hobbies: ["Cantar", "Escuchar música", "Jugar videojuegos"],
  videojuegosFavoritos: [
    "Assassin's Creed Origins",
    "Horizon Zero Dawn",
    "Metro Last Light",
    "Red Dead Redemption",
  ],
  deportesFavoritos: {
    futbol: {
      equipos: [
        "Barcelona ( España )",
        "Universitario de Deportes ( Perú )",
        "Boca Juniors ( Argentina )",
      ],
    },
    basket: {
      equipo: "Golden State Warriors",
      jugadorFavorito: "Stephen Curry",
    },
  },
  curiosidades: {
    esGemelo: true,
    chisteGemelo:
      "Soy el gemelo más guapo 😎 ( y el mayor por unos gloriosos 8 minutos ⏱️ ).",
    ironia:
      "Mi hermano dice que esos 8 minutos me sirvieron para aprender más de la vida... yo digo que solo para tomar un café extra ☕😂.",
  },
  humor: {
    chisteCodigo:
      "Si el código no funciona, es porque le falta un 'jajaja' al final. ¡Prueba y verás! 😂",
  },
};
/* OBJETO EN INGLES */
const antonioInfoINGLES = {
  name: "Antonio",
  maritalStatus:
    "Single ( available for adventures — but code comes first! 😏 )",
  personality:
    "Curious... very curious 🔥😈 haha. Creative and with a good sense of humor — especially when the code runs perfectly on the first try.",
  hobbies: ["Singing", "Listening to music", "Playing video games"],
  favoriteGames: [
    "Assassin's Creed Origins",
    "Horizon Zero Dawn",
    "Metro Last Light",
    "Red Dead Redemption",
  ],
  favoriteSports: {
    soccer: {
      teams: [
        "Barcelona ( Spain )",
        "Universitario de Deportes ( Peru )",
        "Boca Juniors ( Argentina )",
      ],
    },
    basketball: {
      team: "Golden State Warriors",
      favoritePlayer: "Stephen Curry",
    },
  },
  funFacts: {
    isTwin: true,
    twinJoke:
      "I’m the better-looking twin 😎 (and the older one by a glorious 8 minutes ⏱️).",
    irony:
      "My brother says those 8 minutes gave me more life experience… I say they just gave me time for an extra cup of coffee ☕😂.",
  },
  humor: {
    codeJoke:
      "If the code doesn’t work, it’s probably missing a ‘haha’ at the end. Try it and see! 😂",
  },
};

// console.log(antonioInfo);

document.addEventListener("DOMContentLoaded", () => {
  /* BOTON PARA DARK MODE */
  const toggleButton = document.querySelector(".toggle-dark-mode");
  const body = document.body;
  toggleButton.addEventListener("click", () => {
    //   console.log("click");
    body.classList.toggle("dark-mode");
    // Opcional: Cambia el texto del botón
    if (body.classList.contains("dark-mode")) {
      toggleButton.textContent = "☀️";
    } else {
      body.classList.remove("dark-mode");
      toggleButton.textContent = "🌙";
    }
  });
  /* -------------------------HAMBURGUESA---------------------- */

  // HAMBURGUER
  const hamburguesa = document.querySelector("#hamburguesa");

  hamburguesa.addEventListener("click", () => {
    console.log("diste click");

    // Busca si ya existe el contenedor
    const contenedorExistente = document.querySelector(
      ".contenedor-hamburguesa",
    );

    if (contenedorExistente) {
      // Si ya existe, lo eliminamos (cerrar menú)
      contenedorExistente.remove();
    } else {
      // Si no existe, lo creamos (abrir menú)
      const contenedorHamburguesa = document.createElement("div");
      contenedorHamburguesa.classList.add("contenedor-hamburguesa");

      // Puedes añadir contenido al menú aquí si deseas:
      contenedorHamburguesa.innerHTML = `
      <ul class="menu-hamburguesa">
        <li><button class="toggle-dark-mode">🌙</button></li>
      </ul>
    `;
      document.body.appendChild(contenedorHamburguesa);
      /* AGREGAR AQUI TAMBIEN BOTON PARA DARK MODE */
      const toggleButton =
        contenedorHamburguesa.querySelector(".toggle-dark-mode");
      const body = document.body;

      toggleButton.addEventListener("click", () => {
        body.classList.toggle("dark-mode");

        // Cambiar ícono según el modo
        toggleButton.textContent = body.classList.contains("dark-mode")
          ? "☀️"
          : "🌙";
      });
    }
  });

  /* ------------------------- SABER MAS --------------------- */
  // const boton_SaberMas = document.querySelector("#saberMas");
  // const modal = document.querySelector(".modal_SaberMas");

  // boton_SaberMas.addEventListener("click", () => {
  //   modal_SaberMas(antonioInfo);
  //   const body = document.querySelector("body");
  //   body.classList.add("overflow-hidden");
  // });
  // 👇 Escucha los clics en el fondo del modal
  // modal.addEventListener("click", (e) => {
  //   // Si el clic fue directamente sobre el fondo (no sobre el contenido)
  //   if (e.target === modal) {
  //     modal.classList.remove("activo");
  //     body.classList.remove("overflow-hidden");
  //   }
  // });

  // function modal_SaberMas(objeto) {
  //   // Referencia al modal ya creado en el HTML
  //   // Limpia el contenido anterior
  //   modal.innerHTML = "";

  //   const contenido = document.createElement("div");
  //   contenido.classList.add("modal_contenido");

  //   // Limpia el contenido anterior
  //   modal.innerHTML = "";

  //   // Botón cerrar
  //   const btnCerrar = document.createElement("button");
  //   btnCerrar.textContent = "✖";
  //   btnCerrar.classList.add("cerrar_modal");
  //   btnCerrar.addEventListener("click", () => {
  //     modal.classList.remove("activo");
  //     body.classList.remove("overflow-hidden");
  //   });

  //   // // Agregar título
  //   // const titulo = document.createElement("h2");
  //   // titulo.textContent = objeto.nombre;
  //   // contenido.appendChild(titulo);

  //   // Estado civil
  //   const estado = document.createElement("p");
  //   estado.classList.add("titulo-dorado");
  //   estado.innerHTML = `<strong>- Estado civil:</strong> <span>${objeto.estadoCivil}</span>`;
  //   contenido.appendChild(estado);

  //   // Personalidad
  //   const personalidad = document.createElement("p");
  //   personalidad.classList.add("titulo-dorado");
  //   personalidad.innerHTML = `<strong>- Personalidad:</strong> <span>${objeto.personalidad}</span>`;
  //   contenido.appendChild(personalidad);

  //   // Hobbies
  //   const hobbies = document.createElement("p");
  //   hobbies.classList.add("titulo-dorado");
  //   hobbies.innerHTML = `<strong>- Hobbies:</strong> <span>${objeto.hobbies.join(
  //     ", ",
  //   )}</span>`;
  //   contenido.appendChild(hobbies);

  //   // Videojuegos
  //   const juegos = document.createElement("p");
  //   juegos.classList.add("titulo-dorado");
  //   juegos.innerHTML = `<strong>- Videojuegos favoritos:</strong> <span>${objeto.videojuegosFavoritos.join(
  //     ", ",
  //   )}</span>`;
  //   contenido.appendChild(juegos);

  //   // // Deportes favoritos
  //   // const deportesTitulo = document.createElement("h3");
  //   // deportesTitulo.textContent = "Deportes favoritos:";
  //   // contenido.appendChild(deportesTitulo);

  //   // Fútbol
  //   const futbol = document.createElement("div");
  //   futbol.innerHTML = `
  //   <p class="titulo-dorado"><strong>⚽ Mis equipos de fútbol favoritos:</strong></p>
  //   <ul>${objeto.deportesFavoritos.futbol.equipos
  //     .map((eq) => `<li>${eq}</li>`)
  //     .join("")}</ul>
  // `;
  //   contenido.appendChild(futbol);

  //   // Basket
  //   const basket = document.createElement("div");
  //   basket.innerHTML = `
  //   <p class="titulo-dorado"><strong>🏀 Mis equipos de basket favoritos:</strong></p>
  //   <ul>
  //   <li>Equipo: ${objeto.deportesFavoritos.basket.equipo}</li>
  //   <li>Jugador favorito: ${objeto.deportesFavoritos.basket.jugadorFavorito}</li>
  //   </ul>
  // `;
  //   contenido.appendChild(basket);

  //   // Curiosidades
  //   const curiosidades = document.createElement("div");
  //   curiosidades.innerHTML = `
  //   <p class="titulo-dorado"><strong>- Curiosidades 🤓:</strong></p>
  //   <p><span>${objeto.curiosidades.chisteGemelo}</span></p>
  //   <p><span>${objeto.curiosidades.ironia}</span></p>
  // `;
  //   contenido.appendChild(curiosidades);

  //   // Humor
  //   const humor = document.createElement("p");
  //   humor.classList.add("titulo-dorado");
  //   humor.innerHTML = `<strong>💬 Humor:</strong> <span>${objeto.humor.chisteCodigo}</span>`;
  //   contenido.appendChild(humor);

  //   // Añadir botón y contenido al modal
  //   // modal.appendChild(btnCerrar);
  //   modal.appendChild(contenido);

  //   // Mostrar el modal
  //   modal.classList.add("activo");
  // }

  /*------------------------- SABER MAS PERO EN INGLES ---------------------- */

  // const boton_SaberMasINGLES = document.querySelector("#saberMasINGLES");
  // const modalINGLES = document.querySelector(".modal_SaberMasINGLES");

  // boton_SaberMasINGLES.addEventListener("click", () => {
  //   modal_SaberMasINGLES(antonioInfoINGLES);
  //   const body = document.querySelector("body");
  //   body.classList.add("overflow-hidden");
  // });
  // // 👇 Escucha los clics en el fondo del modal
  // modalINGLES.addEventListener("click", (e) => {
  //   // Si el clic fue directamente sobre el fondo (no sobre el contenido)
  //   if (e.target === modal) {
  //     modal.classList.remove("activo");
  //     body.classList.remove("overflow-hidden");
  //   }
  // });

  // function modal_SaberMasINGLES(obj) {
  //   // Clear previous modal content
  //   modal.innerHTML = "";

  //   const content = document.createElement("div");
  //   content.classList.add("modal_contenido");

  //   // Close button
  //   const btnClose = document.createElement("button");
  //   btnClose.textContent = "✖";
  //   btnClose.classList.add("cerrar_modal");
  //   btnClose.addEventListener("click", () => {
  //     modal.classList.remove("activo");
  //     body.classList.remove("overflow-hidden");
  //   });

  //   // Marital Status
  //   const marital = document.createElement("p");
  //   marital.classList.add("titulo-dorado");
  //   marital.innerHTML = `<strong>- Marital Status:</strong> <span>${obj.maritalStatus}</span>`;
  //   content.appendChild(marital);

  //   // Personality
  //   const personality = document.createElement("p");
  //   personality.classList.add("titulo-dorado");
  //   personality.innerHTML = `<strong>- Personality:</strong> <span>${obj.personality}</span>`;
  //   content.appendChild(personality);

  //   // Hobbies
  //   const hobbies = document.createElement("p");
  //   hobbies.classList.add("titulo-dorado");
  //   hobbies.innerHTML = `<strong>- Hobbies:</strong> <span>${obj.hobbies.join(
  //     ", "
  //   )}</span>`;
  //   content.appendChild(hobbies);

  //   // Favorite Games
  //   const games = document.createElement("p");
  //   games.classList.add("titulo-dorado");
  //   games.innerHTML = `<strong>- Favorite Games:</strong> <span>${obj.favoriteGames.join(
  //     ", "
  //   )}</span>`;
  //   content.appendChild(games);

  //   // ⚽ Soccer Teams
  //   const soccer = document.createElement("div");
  //   soccer.innerHTML = `
  //   <p class="titulo-dorado"><strong>⚽ My Favorite Soccer Teams:</strong></p>
  //   <ul>${obj.favoriteSports.soccer.teams
  //     .map((team) => `<li>${team}</li>`)
  //     .join("")}</ul>
  // `;
  //   content.appendChild(soccer);

  //   // 🏀 Basketball
  //   const basketball = document.createElement("div");
  //   basketball.innerHTML = `
  //   <p class="titulo-dorado"><strong>🏀 My Favorite Basketball Team:</strong></p>
  //   <ul>
  //     <li>Team: ${obj.favoriteSports.basketball.team}</li>
  //     <li>Favorite Player: ${obj.favoriteSports.basketball.favoritePlayer}</li>
  //   </ul>
  // `;
  //   content.appendChild(basketball);

  //   // 🤓 Fun Facts
  //   const funFacts = document.createElement("div");
  //   funFacts.innerHTML = `
  //   <p class="titulo-dorado"><strong>- Fun Facts 🤓:</strong></p>
  //   <p><span>${obj.funFacts.twinJoke}</span></p>
  //   <p><span>${obj.funFacts.irony}</span></p>
  // `;
  //   content.appendChild(funFacts);

  //   // 💬 Humor
  //   const humor = document.createElement("p");
  //   humor.classList.add("titulo-dorado");
  //   humor.innerHTML = `<strong>💬 Humor:</strong> <span>${obj.humor.codeJoke}</span>`;
  //   content.appendChild(humor);

  //   // Add all elements
  //   modal.appendChild(content);

  //   // Show modal
  //   modal.classList.add("activo");
  // }

  /*  HABILIDADES  */
  // const barraTodas = document.querySelector(".barra_todas");
  const barraFrontend = document.querySelector(".barra_frontend");
  const barraBackend = document.querySelector(".barra_backend");
  const barraHerramientas = document.querySelector(".barra_herramientas");
  const contenidoTecnologiasHerramientas = document.querySelector(
    ".contenido_tecnologias_herramientas",
  );
  // barraTodas.addEventListener("click", () => {
  //   contenidoTecnologiasHerramientas.innerHTML = `
  //     <ul class="listaTecnologias">
  //     <li>JavaScript</li>
  //     <li>NodeJS</li>
  //     <li>PostgreSQL</li>
  //     <li>HTML5</li>
  //     <li>CSS3 / Sass</li>
  //     <li>Flexbox y Grid</li>
  //     <li>Responsive Design / Media Queries</li>
  //     <li>DOM y eventos</li>
  //     <li>Fetch</li>
  //     <li>JSON</li>
  //     <li>Git y GitHub</li>
  //     <li>VS Code</li>
  //     <li>NPM</li>
  //     <li>Gulp</li>
  //     <li>Netlify</li>
  //     <li>Postman</li>
  //     </ul>
  //     `;
  // });
  barraFrontend.addEventListener("click", () => {
    contenidoTecnologiasHerramientas.innerHTML = `
      <ul class="listaTecnologias">
        <li>HTML5 semántico</li>
        <li>CSS3 moderno</li>
        <li>Sass <br />(estructura y variables)</li>
        <li>Layouts con Flexbox y Grid</li>
        <li>Diseño responsive <br /> (mobile-first, media queries)</li>
        <li>Manipulación del DOM y eventos</li>
        <li>Delegación de eventos</li>
        <li>Consumo de APIs con Fetch</li>
        <li>Arquitectura frontend <br />(fundamentos)</li>
      </ul>
      `;
  });
  barraBackend.addEventListener("click", () => {
    contenidoTecnologiasHerramientas.innerHTML = `
      <ul class="listaTecnologias">
        <li>JavaScript <br /> (servidor – fundamentos)</li>
        <li>NodeJS <br /> (entorno)</li>
        <li>APIs REST <br /> (conceptos y consumo)</li>
        <li>PostgreSQL <br /> (queries básicas)</li>
        <li>JSON <br /> (contratos de datos)</li>
        <li>Asincronía <br /> (promesas, async/await)</li>
        <li>Postman <br /> (pruebas de endpoints)</li>
      </ul>
      `;
  });
  barraHerramientas.addEventListener("click", () => {
    contenidoTecnologiasHerramientas.innerHTML = `
      <ul class="listaTecnologias">
        <li>Git y GitHub</li>
        <li>VS Code</li>
        <li>NPM (gestión de dependencias)</li>
        <li>Gulp</li>
        <li>Netlify</li>
      </ul>
      `;
  });

  /* ---------------------------------------- TODO EN INGLES --------------------------------------------- */
  // const barraTodasINGLES = document.querySelector(".barra_todasINGLES");
  // const barraFrontendINGLES = document.querySelector(".barra_frontendINGLES");
  // const barraBackendINGLES = document.querySelector(".barra_backendINGLES");
  // const barraHerramientasINGLES = document.querySelector(
  //   ".barra_herramientasINGLES"
  // );
  // const contenidoTecnologiasHerramientasINGLES = document.querySelector(
  //   ".contenido_tecnologias_herramientas"
  // );
  // barraTodasINGLES.addEventListener("click", () => {
  //   contenidoTecnologiasHerramientasINGLES.innerHTML = `
  //     <ul class="listaTecnologias">
  //     <li>JavaScript</li>
  //     <li>Java</li>
  //     <li>MySQL</li>
  //     <li>PostgreSQL</li>
  //     <li>SQLite</li>
  //     <li>HTML5</li>
  //     <li>CSS3 / Sass</li>
  //     <li>Flexbox y Grid</li>
  //     <li>Responsive Design / Media Queries</li>
  //     <li>DOM y eventos</li>
  //     <li>Fetch</li>
  //     <li>JSON</li>
  //     <li>Git y GitHub</li>
  //     <li>VS Code</li>
  //     <li>NPM</li>
  //     <li>Gulp</li>
  //     <li>Netlify</li>
  //     <li>Postman</li>
  //     </ul>
  //     `;
  // });
  // barraFrontendINGLES.addEventListener("click", () => {
  //   console.log("ingles todas");
  //   contenidoTecnologiasHerramientasINGLES.innerHTML = `
  //     <ul class="listaTecnologias">
  //     <li>HTML5</li>
  //     <li>CSS3 / Sass</li>
  //     <li>Flexbox y Grid</li>
  //     <li>Responsive Design / Media Queries</li>
  //     <li>DOM y eventos</li>
  //     <li>Fetch</li>
  //     <li>JSON</li>
  //     </ul>
  //     `;
  // });
  // barraBackendINGLES.addEventListener("click", () => {
  //   console.log("ingles backend");
  //   contenidoTecnologiasHerramientasINGLES.innerHTML = `
  //     <ul class="listaTecnologias">
  //     <li>JavaScript</li>
  //     <li>Java</li>
  //     <li>MySQL</li>
  //     <li>PostgreSQL</li>
  //     <li>SQLite</li>
  //     </ul>
  //     `;
  // });
  // barraHerramientasINGLES.addEventListener("click", () => {
  //   console.log("ingles herramientas");
  //   contenidoTecnologiasHerramientasINGLES.innerHTML = `
  //     <ul class="listaTecnologias">
  //     <li>Git y GitHub</li>
  //     <li>VS Code</li>
  //     <li>NPM</li>
  //     <li>Gulp</li>
  //     <li>Netlify</li>
  //     <li>Postman</li>
  //     </ul>
  //     `;
  // });

  /* ---------------------BOTON PARA CAMBIO A INGLES------------- */
  // const botonIdioma = document.querySelector("#boton-idioma");
  // const español = document.querySelector("#contenido-ESPAÑOL");
  // const ingles = document.querySelector("#contenido-INGLES");
  // botonIdioma.addEventListener("click", () => {
  //   console.log("diste click");
  //   español.classList.add("display-none");
  //   botonIdioma.textContent = "Cambiar a Español";
  //   ingles.style.display = "block";
  // });

  // Inicializa EmailJS con tu User ID

  /*  -------------------ENVIAR CORREO---------   */
  emailjs.init("ijEM87YpzFHaKCycD"); // Reemplaza con tu User ID
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Evita recargar la página
      // Envía el email
      emailjs
        .send("service_portafolio", "template_sk6qotn", {
          from_name: document.getElementById("name").value,
          from_email: document.getElementById("email").value,
          message: document.getElementById("message").value,
        })
        .then(
          function (response) {
            alert("!Gracias por contactarme!");
            document.getElementById("contact-form").reset(); // Limpia el formulario
          },
          function (error) {
            alert("Error al enviar: " + error.text);
          },
        );
    });

  // document.addEventListener("click", (e) => {
  //   if (e.target.id === "toggle-dark-mode") {
  //     document.body.classList.toggle("dark-mode");
  //     e.target.textContent = document.body.classList.contains("dark-mode")
  //       ? "☀️"
  //       : "🌙";
  //   }
  // });
});
