const menus = document.querySelectorAll(".menu-btn");
menus.forEach((menu) => {
  menu.addEventListener("click", (e) => {
     e.stopPropagation();

     document.querySelectorAll(".container-menu").forEach((el) => el.remove());

    const containerOpciones = document.querySelector(".container-opciones");
    const containerMenu = document.createElement("div");
    containerMenu.classList.add("container-menu");

    

     document.querySelectorAll(".container-menu").forEach((menuExistente) => menuExistente.remove());

    const eliminar = document.createElement("span");
    const editar = document.createElement("span");

    eliminar.textContent = "Eliminar";
    editar.textContent = "Editar";

    menu.parentElement.appendChild(containerMenu);

    const cardElement = menu.closest(".card");
    const index = cardElement.querySelector(".card-section").dataset.index;

    eliminar.addEventListener("click", () => {
      const datosGuardados = JSON.parse(localStorage.getItem("notas"));
      datosGuardados.splice(index, 1);
      localStorage.setItem("notas", JSON.stringify(datosGuardados));
      location.reload();
    });

    editar.addEventListener("click", () => {
      const datosGuardados = JSON.parse(localStorage.getItem("notas"));
      const card = datosGuardados[index];

      const containerList = document.querySelector(".contenedor-lista");
      containerList.style.display = "none";

      const containerEdit = document.createElement("div");
      containerEdit.classList.add("container-edit");

      const input = document.createElement("input");
      input.value = card.titulo;

      const textArea = document.createElement("textarea");
      textArea.value = card.contenido;

      const guardar = document.createElement("button");
      guardar.classList.add("btn-guardar");
      guardar.textContent = "Guardar cambios";

      guardar.addEventListener("click", () => {
        card.titulo = input.value;
        card.contenido = textArea.value;
        datosGuardados[index] = card;
        localStorage.setItem("notas", JSON.stringify(datosGuardados));
        location.reload();
      });

      containerEdit.appendChild(input);
      containerEdit.appendChild(textArea);
      containerEdit.appendChild(guardar);
      document.body.appendChild(containerEdit);
    });

    containerMenu.appendChild(eliminar);
    containerMenu.appendChild(editar);
  });
});

  document.addEventListener("click", () => {
  document.querySelectorAll(".container-menu").forEach((menu) => menu.remove());
  })
