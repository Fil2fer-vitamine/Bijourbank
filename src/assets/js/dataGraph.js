// <block:setup:1>                --> Initialisation de la courbe
const datapoints = [1200, 750, 775, 760, 2560]; // création d'un tableau de valeurs
const DATA_COUNT = datapoints.length; // +2 ne semble pas varier grand-chose : pourquoi +2 ? Suppression + 2
const labels = []; // création d'un tableau vide
for (let i = 0; i < DATA_COUNT; ++i) {
  // Ajout d'un élément à chaque fois
  labels.push(i.toString());
}
const data = {
  // Accolade --> Objet
  labels: labels,
  datasets: [
    // Tableau
    {
      label: "Compte", // nom de chaque point de courbe
      data: datapoints, // mon tableau de points --> nombre
      borderColor: "green", // J'ai changé la couleur pour le fun ...
      fill: true, // Enlèvement // fill ... coloration grise dévoilée sous le graphique
      cubicInterpolationMode: "monotone", // cubicInterpolationMode: "monotone", ... gère les courbures du graphique.
    },
  ],
};
// </block:setup>                --> Fin Initialisation de la courbe

// <block:config:0>
const config = {
  //--> C'est un objet
  type: "line",
  data: data,
  options: {
    elements: {
      point: {
        radius: 0, // gère les cercles des points en donnant un diamètre ou rayon
      },
    },
    responsive: true, // le graphique est sur toute la largeur
    plugins: {
      legend: false, // enlèvement des commentaires en lignes 34 à 38
      //title: {
      // display: true,
      // text: "",
      //        text: "Chart.js Line Chart - Cubic interpolation mode",
      // },
    },
    interaction: {
      // Visualisation masquée des coordonnées x et y.
      intersect: false,
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
  },
};

/*Le contexte du canevas HTML */
let context = document.getElementById("myChart").getContext("2d");    // en lien avec ligne 72 et "2d" conduit à la création d'un objet CanvasRenderingContext2D représentant un contexte de représentation bi-dimensionnel.
/* Création du graphique */
let chart = new Chart(context, config);   // Appel vers une librairie  --> variable chart mise de let

// Générer des données aléatoires    --> Pourquoi générer des nombres aléatoire ?
// function generateData() {
//   let randomTemperature = (Math.random() * Math.floor(50)).toFixed(2); // Deux chiffres après la virgule
//   //mise de let en ligne 61 : nous mettons le calcul dans la variable randomTemperature.
//   addTemperature(new Date().toLocaleTimeString(), randomTemperature);
// }

function addOperator(positionx, thune) {        // Ajout de points
  /* Ajoute la valeur en X */
  config.data.labels.push(positionx);

  /* Ajoute la valeur */
  config.data.datasets[0].data.push(thune);

  /* Rafraichir le graphique */
  chart.update();
}
//------------------------------------------------------------FILTRE débit Crédit---------------------------------------------------------
// Pour l'affichage des opérations totales
let allOperation = document.getElementById("tout");
// Pour l'affichage des opérations crédits
let allCredit = document.getElementById("credit");
// Pour l'affichage des opérations débits
let allDebit = document.getElementById("debit");

// Pour changer les colorations - Solution apportée par Mouss le 23/09/2022 de par Codepen : 'https://codepen.io/pranjalkoshti/pen/GMarvj'
$(".navHeader a").click(function () {
  $(".navHeader a").css("background-color", "white");
  $(this).css("background-color", "black");
});

// création de variables pour 'débit' et 'crédit' Récupération de toutes les classes 'credit' et 'debit'
let visuCredit = document.getElementsByClassName("credit");
console.log(("consol.log de visuCredit :"),(visuCredit));
let visuDebit = document.getElementsByClassName("debit");
console.log(("consol.log de visuDebit :"), (visuDebit));
let visuTotal = visuCredit + visuDebit;
console.log(("consol.log de visuTotal :"), (visuTotal));

visuCredit.forEach(function (item, index) {
  console.log(item, index);
});
// credit.addEventListener("click", function () {
//   visuDebit.style.display = "none"; // not defined --> il faut observer s'il s'agit d'une string
// });
