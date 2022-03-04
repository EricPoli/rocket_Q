export default function Modal() {
    const modalWrapper = document.querySelector('.modal-wrapper')
    const cancelButtons = document.querySelector('.button.cancel')
    const questionWrapper = document.querySelector(".question-wrapper")
  

    cancelButtons.addEventListener("click", close)

    function open(){
        modalWrapper.classList.add("active")
    }
    function close(){
        modalWrapper.classList.remove("active")
    }
    function read(){
        questionWrapper.classList.add("read")
    }

    return {
        open,
        close,
        read
    }
}