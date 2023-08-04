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

const dots = document.querySelectorAll(".dot");
const arrowRight = document.querySelector (".arrow_right");
const arrowLeft = document.querySelector (".arrow_left");

function findActiveIndex() {
	for (let i = 0; i < dots.length; i++) {
	  if (dots[i].classList.contains("dot_selected")) {
		return i;
	  }
	}
  }

	arrowRight.addEventListener("click",function () {	
		var activeIndex=findActiveIndex();
		if (activeIndex===3){
			dots[0] .classList.add ("dot_selected");
			dots[3] .classList.remove ("dot_selected");
			document.querySelector (".banner-img").src='./assets/images/slideshow/'+slides[0].image;
			document.querySelector ("#banner p").innerHTML=slides[0].tagLine; 
		}

		else { dots[activeIndex+1] .classList.add ("dot_selected");	
			dots[activeIndex] .classList.remove ("dot_selected");	
			document.querySelector (".banner-img").src='./assets/images/slideshow/'+slides[activeIndex+1].image;
			document.querySelector ("#banner p").innerHTML=slides[activeIndex+1].tagLine; 
		}
	});

	arrowLeft.addEventListener("click",function () {
		var activeIndex=findActiveIndex();
		if (activeIndex===0){
			dots[3] .classList.add ("dot_selected");
			dots[0] .classList.remove ("dot_selected");
			document.querySelector (".banner-img").src='./assets/images/slideshow/'+slides[3].image;
			document.querySelector ("#banner p").innerHTML=slides[3].tagLine; 
		}

		else { dots[activeIndex-1] .classList.add ("dot_selected");
		dots[activeIndex] .classList.remove ("dot_selected");	
		document.querySelector (".banner-img").src='./assets/images/slideshow/'+slides[activeIndex-1].image;
		document.querySelector ("#banner p").innerHTML=slides[activeIndex-1].tagLine;
	}
});

