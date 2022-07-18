//on recupere h3 et on le loge dans une variable
const counterDisplay = document.querySelector("h3");
let counter = 0; // counter sert a compter

const compteur = document.querySelector("h2");
let compt = 0;

//on creer dabord une variable bulle et on le loge dans une fonction quon va nomme bubbleMarker
const bubbleMarker = () => {
  // on cree un element en javascript pour l'injecter dans html
  const bubble = document.createElement("span");
  bubble.classList.add("bubble");
  document.body.appendChild(bubble);

  // On cree une taille aleatoire en px,  lui donner a heigth et width
  const size = Math.random() * 200 + 100 + "px";
  bubble.style.height = size;
  bubble.style.width = size;

  // on veut donner aussi une position aleatoire de gauche et du haut
  bubble.style.top = Math.random() * 100 + 50 + "%";
  bubble.style.left = Math.random() * 100 + "%";

  // Pour que laposition de gauche evolue en  zig zap
  const plusMinus = Math.random() > 0.5 ? 1 : -1;
  bubble.style.setProperty("--left", Math.random() * 100 * plusMinus + "%");

  // On va ajouter la fonction de suppression du bulle et le compte
  bubble.addEventListener("click", () => {
    counter++;
      counterDisplay.textContent = 
          `
          "bulles ecrasées" ${counter}
    
          `;
    bubble.remove();
  });

  // On donne le temps de vie des bulles
  setTimeout(() => {
    bubble.remove();
  }, 8000);
};

// on donne le temps d'apparition d'une bulle
setInterval(() => {
  bubbleMarker();
  compt++;
    compteur.textContent = 
    `"noùbre de bulle" ${compt}
  `;
}, 3000);
