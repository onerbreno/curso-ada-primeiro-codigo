const form = document.forms['new-project-form']

const formFields = {
  projectName: form.elements["project-name"],
  projectDescription: form.elements["project-description"],
  projectReferencesURL: form.elements["project-references-url"],
  projectDueDate: form.elements["project-due-date"],
  projectColor: form.elements["project-highlight-color"],
  projectParticipationType: form.elements["project-participation-type"],
  projectType: form.elements["project-type"],
}


const fields = Object.values(formFields);

fields.forEach((field) => {
  field.onblur = () => verificaCampo(field);
});

function verificaCampo(field) {
  try {
    switch (field.type) {
      case "text":
        if (field.value === "" || field.value.length > 56) {
          throw new Error("Nome inválido.")
        }
        break;

      case "color":
        const regexHexColorVerify = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
      
        if (regexHexColorVerify.test(field.value)) {
          throw new Error("Cor inválida.")
        }

        console.log('color')
        break;

      case "date":
        console.log('date')
        break;

      case "url":
        console.log('url')
        break;
    
      default:
        return false
        break;
    }

    return true
  } catch (e) {

  }

  
}