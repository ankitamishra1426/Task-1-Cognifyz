const images = document.getElementsByClassName("images");
// create element for lightbox
const lightBoxs= document.createElement("div");
// for area
const lightBoxElements= document.createElement("div");
// for image
const lightBoxImg= document.createElement("img");
// for back button to change the photos
const lightBoxBack= document.createElement("div");
// for next photos 
const lightBoxNext= document.createElement("div");
//creating class list
lightBoxs.classList.add('lightbox');
lightBoxElements.classList.add('lightbox-element');
lightBoxBack.classList.add("fa-solid" , "fa-arrow-left" , "lightbox-back");
lightBoxNext.classList.add("fa-solid" , "fa-arrow-right" , "lightbox-next");

lightBoxs.appendChild(lightBoxElements);
lightBoxElements.appendChild(lightBoxImg);
lightBoxElements.appendChild(lightBoxBack);
lightBoxElements.appendChild(lightBoxNext);
document.body.appendChild(lightBoxs);

let index=1;
//function
function showLightBox(n){
    if(n>images.length){
        index = 1;
    }else if(n < 1){
        index = images.length;
    }
    let imageLocation = images[index-1].children[0].getAttribute("src");
    lightBoxImg.setAttribute("src",imageLocation);
};
function currentImage(){
    lightBoxs.style.display="block";
    let imageIndex = parseInt(this.getAttribute("data-index"));
    showLightBox(index = imageIndex); 
};
for(let i= 0; i<images.length ; i++){
    images[i].addEventListener("click",currentImage);
}
function sliderImages(n){
    showLightBox(index += n);
};
function backImage(){
    sliderImages(-1);
};
function nextImage(){
    sliderImages(1)
};
lightBoxBack.addEventListener("click",backImage);
lightBoxNext.addEventListener("click",nextImage);
//close lightbox
function closingLightBox(){
  if(this === event.target){
    lightBoxs.style.display="none";
  }
};
lightBoxs.addEventListener("click",closingLightBox);