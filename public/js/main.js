// ------------------------------- header ------------------------------- 

// --------- header: effet clavier  ---------

const autoSpan = document.querySelector(`.autoText`);
const text = `Developer`

let index = 0; 


const play = () => {
    autoSpan.innerHTML = text.slice(0,index)


    index++;
    if(index > text.length) {
        index = 0;
    }
}
let timer = setInterval(play,300);

// --------- header: effet navbar changement de couleur au scroll ---------

const nav = document.querySelector(`.navbar`);
const logo = document.querySelector(`.logo`);
const choix = document.querySelectorAll(`.choix`);

window.addEventListener(`scroll`, ()=>{

    if (window.scrollY > 250){

        nav.classList.remove(`bg-transparent`)
        nav.classList.add(`scroll`)

        logo.classList.add(`logoScroll`)

        choix.forEach(element => {

            element.classList.add(`choixScroll`);
            
        });


    }else{
        nav.classList.add(`bg-transparent`)
        nav.classList.remove(`scroll`)

        logo.classList.remove(`logoScroll`)
        
        choix.forEach(element => {

            element.classList.remove(`choixScroll`);
            
        });
    }

})