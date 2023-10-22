const form = document.forms['new-project-form']

const formField = form.querySelectorAll("input, textarea, select")

form.addEventListener("submit", (event) => {
  event.preventDefault()
})

formField.forEach(field => {
  field.addEventListener("blur", (event) => fieldValidator(field))  
  field.addEventListener("invalid", (event) => {
    event.preventDefault()
    fieldValidator(field)
  })
})

const typeErrors = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'tooShort',
    'customError'
]


const messagesErrors = {
  "project-name": {
    valueMissing: "O campo de nome não pode estar vazio.",
    patternMismatch: "Por favor, preencha um nome válido.",
    tooShort: "Por favor, preencha um nome válido."
  },  
  "project-type": {
    valueMissing: "Escolha uma opção válida.",
  },  
  "project-description": {
    valueMissing: "A descrição não pode estar vazia.",
    tooShort: "Por favor, preencha um nome válido."
  },
  "project-references-url": {
      valueMissing: "A URL não pode estar vazia.",
      patternMismatch: "Por favor, preencha uma URL válida.",
  },
  "project-highlight-color": {
      valueMissing: 'O campo de cor de destaque não pode estar vazio.',
      patternMismatch: "Por favor, preencha uma cor de destaque hexadecimal válida.",
  },
  "project-due-date": {
      valueMissing: 'O campo de data não pode estar vazio.',
      customError: 'Você deve ser maior que 18 anos para se cadastrar.'
  },
  "project-participation-type": {
      valueMissing: 'Você deve aceitar nossos termos antes de continuar.',
  }
}

function insertError(field, error) {
  const display = field.parentNode.querySelector(".mensagem-erro")
  display.innerHTML = error
  
  if (error) {
    field.classList.add('input-error')
  } else {
    field.classList.remove('input-error')
  }

}

function fieldValidator(field) {
  let messageError = ""
  field.setCustomValidity('');

  typeErrors.forEach(erro => {
    if (field.validity[erro]) {
      messageError = messagesErrors[field.name][erro]
    }
  })
  
  messageError ? insertError(field, messageError) : insertError(field, "")
}
