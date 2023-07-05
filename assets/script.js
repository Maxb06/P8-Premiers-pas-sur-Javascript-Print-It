const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

/* Étape 2 : Ajoutez des Event Listeners sur les flèches  */

const arrowLeft = document.querySelector('.arrow_left');  // Récupération des éléments flèches G/D
const arrowRight = document.querySelector('.arrow_right');

arrowLeft.addEventListener('click', function() {  // Ajout des Event Listeners G/D
  console.log("Clic flèche gauche");
});

arrowRight.addEventListener('click', function() {
  console.log("Clic flèche droite");
});

/* Étape 3 : Ajoutez des bullet points au slider */

const numberOfSlides = slides.length;
const dotsContainer = document.querySelector('.dots');

for (let i = 0; i < numberOfSlides; i++) {
  const dot = document.createElement('span');   // Création élément <span>
  dot.classList.add('dot');    // Ajout classe "dot" à chaque point
  dotsContainer.appendChild(dot);   // Ajout point à l'élément <div class="dots">
}

const firstDot = dotsContainer.querySelector('.dot'); // Ajout classe "dot_selected" au premier point
if (firstDot) {
  firstDot.classList.add('dot_selected');
}

/* Etape 4 */

let currentSlide = 0; // Variable pour suivre l'index de la diapositive actuelle

arrowLeft.addEventListener('click', function() {
  
  currentSlide--;  // Décrémenter l'index de la diapositive actuelle

  if (currentSlide < 0) {  // Vérifier si index est inférieur à zéro pour revenir à la dernière diapositive
    currentSlide = numberOfSlides - 1;
  }

  const slide = slides[currentSlide];   // Mise à jour image et texte correspondants à la diapo actuelle
  const image = document.querySelector('.banner-img');
  const tagLine = document.querySelector('#banner p');
  image.src = './assets/images/slideshow/' + slide.image;
  tagLine.innerHTML = slide.tagLine;

  const dots = dotsContainer.querySelectorAll('.dot');   // Mise à jour du bullet point actif
  dots.forEach((dot, index) => {
    dot.classList.remove('dot_selected');
    if (index === currentSlide) {
      dot.classList.add('dot_selected');
    }
  });
});

arrowRight.addEventListener('click', function() {
  
  currentSlide++;  // Incrémenter index de la diapo actuelle

  if (currentSlide >= numberOfSlides) { // check si index est sup ou = au nombre de diapos pour revenir à la première diapositive
    currentSlide = 0;
  }

  const slide = slides[currentSlide];  // Mise à jour image et  texte correspondants à la diapo en cours
  const image = document.querySelector('.banner-img');
  const tagLine = document.querySelector('#banner p');
  image.src = './assets/images/slideshow/' + slide.image;
  tagLine.innerHTML = slide.tagLine;

  const dots = dotsContainer.querySelectorAll('.dot');   // Mise à jour du bullet point actif
  dots.forEach((dot, index) => {
    dot.classList.remove('dot_selected');
    if (index === currentSlide) {
      dot.classList.add('dot_selected');
    }
  });
});

/* Etape 5 */

setInterval(function() {  // Défilement infini sur le carrousel
	
	currentSlide++;  // Incrémenter l'index de la diapositive actuelle
  
	if (currentSlide >= numberOfSlides) {  // check si index est sup ou = au nombre total de diapo pour revenir à la 1ere diapo
	  currentSlide = 0;
	}
  
	const slide = slides[currentSlide];          // Mise à jour image et texte correspondants à la diapositive actuelle
	const image = document.querySelector('.banner-img');
	const tagLine = document.querySelector('#banner p');
	image.src = './assets/images/slideshow/' + slide.image;
	tagLine.innerHTML = slide.tagLine;
  
	const dots = dotsContainer.querySelectorAll('.dot');   // Mettre à jour le bullet point actif
	dots.forEach((dot, index) => {
	  dot.classList.remove('dot_selected');
	  if (index === currentSlide) {
		dot.classList.add('dot_selected');
	  }
	});
  }, 5000); // Défilement toutes les 5 secondes   