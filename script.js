'use strict';
const modal = document.querySelector(".modal")
const overlay = document.querySelector(".overlay")
const btnCLoseModel = document.querySelector(".close-modal")
const btnOpenModel = document.querySelectorAll(".show-modal")

const closeModal = () => {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}

const openModal = ()=> {
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
}

for (let i = 0; i < btnOpenModel.length; i++) {
    btnOpenModel[i].addEventListener('click', openModal)
}

btnCLoseModel.addEventListener('click', closeModal)
overlay.addEventListener('click', closeModal)

document.addEventListener('keydown', function(e){
    if(e.key === "Escape" && !modal.classList.contains('hidden')){
            closeModal()
    }
})