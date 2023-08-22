import { classes } from "../script.js";
import { isValidEmail, isValidNumber, isValidString } from "./validadeTypes.js";

export function validadeStudent({name, surname, email, classId, birthDate, grades, active}) {
  const errors = []

  if (!name || !surname || !email || !classId || !birthDate || !grades) {
    errors.push('Preencha todos os campos.');
  }

  if (!isValidString(name)) {
    errors.push('O nome deve conter apenas letras.');
  }

  if (!isValidString(surname)) {
    errors.push('O sobrenome deve conter apenas letras.');
  }

  if (!isValidEmail(email)) {
    errors.push('E-mail inválido.');
  }

  const birthYear = birthDate.split('/')[2];
  const StudentAge = new Date().getFullYear() - birthYear;

  if (StudentAge < 16) {
    errors.push('O aluno deve ser maior de 16 anos.')
  }

  if (grades.some(grade => !isValidNumber(grade))) {
    errors.push('As notas do aluno devem ser valores numéricos.')
  }

  if (grades.length > 5) {
    errors.push('A quantidade máxima de notas são cinco.')
  }

  if (!isValidNumber(classId)) {
    errors.push('Turma inválida. Deve ser um valor numérico.')
  }

  const classNewStudent = classes.find(current => current.id === classId);
  if (!classNewStudent) {
    throw new Error('Turma inválida. Turma não encontrada.');
  }

  if (typeof active !== 'boolean') {
    errors.push('Insira apenas true ou false.')

  }

  return {
    errors,
    isValidStudent: errors.length === 0
  }
}