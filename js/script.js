import { Modal } from './modal.js';
import { AlertError } from "./alert-error.js"
import { IMC, notNumber} from "./utils.js"

// Variaveis
const form = document.querySelector("form")
const inputWeight = document.querySelector ("#weight")
const inputHeight = document.querySelector ("#height")

// const modalWrapper = document.querySelector(".modal-wrapper")
// const modalMessage = document.querySelector(".modal .title span")
// const modalBtnclose = document.querySelector(".modal button.close")
form.oninput = () => {
  AlertError.close()
}

form.onsubmit = event => {
  event.preventDefault()

  const weight = inputWeight.value
  const height = inputHeight.value

  const showAlertError = notNumber(weight) || notNumber(height)

  if(showAlertError) {
    AlertError.open()
    return;
  }

  AlertError.close()

  const result = IMC(weight, height)
  const message = `Seu IMC é de ${result}`

  Modal.message.innerText = message
  // modalWrapper.classList.add("open")
  Modal.open()
}



Modal.buttonClose.onclick = () => {
  // modalWrapper.classList.remove("open")
  Modal.close()
}
