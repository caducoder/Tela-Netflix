// Modal 'Assistir agora'
var modal1 = document.querySelector(".m1");
var trigger1 = document.querySelector(".trigger1");
var closeBtn1 = document.querySelector(".x1");

function toggleModal1(){
    modal1.classList.toggle("show-modal");
}

function windowOnClick1(event){
    if(event.target === modal1){
        toggleModal1();
    }
}

trigger1.addEventListener("click", toggleModal1);
closeBtn1.addEventListener("click", toggleModal1);
window.addEventListener("click", windowOnClick1);

// Modal 'Mais informações'
var modal2 = document.querySelector('.m2');
var trigger2 = document.querySelector(".trigger2");
var closeBtn2 = document.querySelector(".x2");

function toggleModal2(){
    modal2.classList.toggle("show-modal");
}

function windowOnClick(event){
    if(event.target === modal2){
        toggleModal2();
    }
}

trigger2.addEventListener("click", toggleModal2);
closeBtn2.addEventListener("click", toggleModal2);
window.addEventListener("click", windowOnClick);