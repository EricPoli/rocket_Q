import Modal from './modal.js'

const modal = Modal()

const deleteButtons = document.querySelectorAll(".actions a.delete")

deleteButtons.forEach(button => {
    button.addEventListener("click", event => {
        const form = document.querySelector(".modal form")
        const roomId = document.querySelector("#room-id").dataset.id
        const slug = deleteButtons ? "delete" : "check"
        const questionId = event.target.dataset.id

        form.setAttribute("action", `/question/${roomId}/${questionId}/${slug}`)

        event.preventDefault()
        modal.open()
    })
})

const checkButtons = document.querySelectorAll(".actions a.check")

checkButtons.forEach(button => {
    button.addEventListener("click", event => {
        const form = document.querySelector(".modal form")
        const roomId = document.querySelector("#room-id").dataset.id
        const slug = checkButtons ? "check" : "delete"
        const questionId = event.target.dataset.id

        form.setAttribute("action", `/question/${roomId}/${questionId}/${slug}`)
        form.submit();

        event.preventDefault()
        modal.read()
    })
})

const copyButton = document.querySelector("#room-id")
const roomId = document.querySelector("#room-id").dataset.id

copyButton.addEventListener("click", copy)

function copy() {      
    /* Copy the text inside the text field */
    navigator.clipboard.writeText(roomId);

    /* Alert the copied text */
    alert("Código da sala copiado: " + roomId); 
}

