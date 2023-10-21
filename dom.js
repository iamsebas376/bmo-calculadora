const pantalla = document.querySelector('.pantalla');
const botones = document.querySelectorAll('.btn');
const btnswitch = document.querySelector('#switch')

botones.forEach((boton) => {
  boton.addEventListener('click', () => {
    const botonApretado = boton.textContent;

    if (boton.id === "c") {
      pantalla.textContent = ". ___ .";
      return;
    }

    if (boton.id === "borrar") {
      if (pantalla.textContent.length === 1 || pantalla.textContent === "Error") {
        pantalla.textContent = ". ___ .";
      } else if (pantalla.textContent === ". ___ .") {
        pantalla.textContent = ". ___ .";
      } else {
        pantalla.textContent = pantalla.textContent.slice(0, -1);
      }
      return;
    }

    if (boton.id === "igual") {
      try {
        pantalla.textContent = eval(pantalla.textContent);
      } catch {
        pantalla.textContent = "Error";
      }
      return;
    }

    if (pantalla.textContent === ". ___ ." || pantalla.textContent === "Error") {
      pantalla.textContent = botonApretado;
    } else {
      pantalla.textContent += botonApretado;
    }
  });
});

btnswitch.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  btnswitch.classList.toggle('active');
});
