//CREATION D'UN TABLEAU POUR STOCKER LES IMAGES
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

// SELECTION DES ELEMENTS DU DOM
const dots = document.querySelectorAll(".dot");
const arrowRight = document.querySelector (".arrow_right");
const arrowLeft = document.querySelector (".arrow_left");

// CREATION DE LA FONCTION POUR RETROUVER LE BULLETPOINT SELECTIONNE
function findActiveIndex() {
	for (let i = 0; i < dots.length; i++) {
	  if (dots[i].classList.contains("dot_selected")) {
		return i;
	  }
	}
  }


// FLECHE DROITE
	arrowRight.addEventListener("click",function () {	
		let activeIndex=findActiveIndex();
// Boucle pour slider à l'infini		
		if (activeIndex===3){
			dots[0] .classList.add ("dot_selected");
			dots[3] .classList.remove ("dot_selected");
			document.querySelector (".banner-img").src='./assets/images/slideshow/'+slides[0].image;
			document.querySelector ("#banner p").innerHTML=slides[0].tagLine; 
		}
// Comportement normal du slider
		else { dots[activeIndex+1] .classList.add ("dot_selected");	
			dots[activeIndex] .classList.remove ("dot_selected");	
			document.querySelector (".banner-img").src='./assets/images/slideshow/'+slides[activeIndex+1].image;
			document.querySelector ("#banner p").innerHTML=slides[activeIndex+1].tagLine; 
		}
	});

// FLECHE GAUCHE
	arrowLeft.addEventListener("click",function () {
		let activeIndex=findActiveIndex();
// Boucle pour slider à l'infini
		if (activeIndex===0){
			dots[3] .classList.add ("dot_selected");
			dots[0] .classList.remove ("dot_selected");
			document.querySelector (".banner-img").src='./assets/images/slideshow/'+slides[3].image;
			document.querySelector ("#banner p").innerHTML=slides[3].tagLine; 
		}
// Comportement normal du slider
		else { dots[activeIndex-1] .classList.add ("dot_selected");
		dots[activeIndex] .classList.remove ("dot_selected");	
		document.querySelector (".banner-img").src='./assets/images/slideshow/'+slides[activeIndex-1].image;
		document.querySelector ("#banner p").innerHTML=slides[activeIndex-1].tagLine;
	}
});

// BULLETS POINTS
for (let i = 0; i < dots.length; i++) {
	dots[i].addEventListener("click",function (informationClick) {	
	dots[findActiveIndex()] .classList.remove ("dot_selected");
	document.getElementById(informationClick.target.id) .classList.add ("dot_selected");
	document.querySelector (".banner-img").src='./assets/images/slideshow/'+slides[findActiveIndex()].image;
	document.querySelector ("#banner p").innerHTML=slides[findActiveIndex()].tagLine; 
	});
}