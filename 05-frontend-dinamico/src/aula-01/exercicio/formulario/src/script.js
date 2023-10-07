const form = document.forms['new-project-form']

const formField = form.querySelectorAll("input, textarea, select")

formField.forEach(field => field.addEventListener("blur", (event) => {
  fieldVerify(field)
}))

function insertFieldError(field, error) {
  const display = field.nextElementSibling
  display.innerHTML = error
}

function fieldVerify(field) {
  if (field.value === "") {
    insertFieldError(field, 'Campo vazio')
  }

  // try {
  //   switch (field.type) {
  //     case "text":
  //       if (field.value === "") {

  //       }

  //       if (field.value.length > 56) {

  //       };
  //     case "textarea":
  //       if (field.value === "") {

  //       }

  //       if (field.value.length > 56) {

  //       };


  //     case "color":
  //       const regexHexColorVerify = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;

  //       if (regexHexColorVerify.test(field.value)) {
  //         throw new Error("Cor inválida.")
  //       }
  //       break;
  //     case "date":
  //       console.log('date')
  //       break;

  //     case "url":
  //       console.log('url')
  //       break;

  //     default:
  //       return false
  //       break;
  //   }

  //   return true
  // } catch (e) {

  // }
}