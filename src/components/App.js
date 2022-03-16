// eslint-disable-next-line
import volverAJugar from "../main.js";

const App = (data = []) => {
  const randomize = () => {
    const dataTarjetas = data;
    dataTarjetas.sort(() => Math.random() - 0.5);
    return dataTarjetas;
  };
  randomize();

  let toggleCards = [];

  data.forEach((elemento) => {
    const card = document.createElement("div");
    const back = document.createElement("div");
    card.className = "card";
    back.className = "back";
    back.setAttribute("name", elemento.name);
    const contenido = `<img src="${elemento.image}">`;
    card.innerHTML = contenido;

    card.addEventListener("click", (e) => {
      back.classList.toggle("cardHidden");
      checkCards(e);
    });

    card.appendChild(back);
    document.getElementById("contenedor-cards").appendChild(card);

    //Match
    const checkCards = (e) => {
      const clickedCard = e.target;

      let contador = 0;

      toggleCards.push(clickedCard);
      // const toggleCards = document.querySelectorAll('.toggle');
      clickedCard.classList.add("toggle");
      // console.log(toggleCards.length)
      // console.log(e.target)
      if (toggleCards.length === 2) {
        if (toggleCards[0].getAttribute("name") === toggleCards[1].getAttribute("name")) {
          // console.log(toggleCards[0].getAttribute('name'))
          // console.log("match");
          toggleCards = [];
          contador++;
          // console.log(contador)
        } else {
          toggleCards[0].classList.toggle("cardHidden");
          toggleCards[1].classList.toggle("cardHidden");
          toggleCards = [];

          // console.log("noMatch")
        }
      }
      if (contador == 1) {
        // eslint-disable-next-line
        volverAJugar.volverAJugar();
      }
    };
  });
};

export default App;
