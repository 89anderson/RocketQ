import Modal from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

//pegar todos os botoes que existem com a classe check
const checkButtons = document.querySelectorAll(".actions a.check")

checkButtons.forEach(button => {

    //adicionar a escuta
    button.addEventListener("click", handleClick)
})

/** Quando o botão delete for clicado ele abre a modal **/

const deleteButton = document.querySelectorAll(".actions .delete")

deleteButton.forEach(button => {

    button.addEventListener("click", (event) => handleClick(event, false))

})


function handleClick (event, check = true) {

    event.preventDefault()

    const text = check ? "Marcar como lida" : "Excluir"

    modalTitle.innerHTML = `${text} esta pergunta`
    modalDescription.innerHTML = `Tem certeza que deseja ${text.toLocaleLowerCase()} essa pergunta?`
    modalButton.innerHTML = `Sim, ${text.toLocaleLowerCase()}`
    check? modalButton.classList.remove("red") : modalButton.classList.add("red")

    //abrir modal
    modal.open()
}