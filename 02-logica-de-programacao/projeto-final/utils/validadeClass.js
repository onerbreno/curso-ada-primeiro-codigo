import { isValidNumber } from "./validadeTypes.js"

export function validadeClass(id, maxStudents) {
  const errors = []

  if (!id) {
    errors.push('Preencha o código da turma.')
  }

  if (!maxStudents) {
    errors.push('Preencha o máximo de alunos da turma.')
  }

  if (!isValidNumber(id)) {
    errors.push('Código inválido. O valor deve ser numérico.')
  }

  if (!isValidNumber(maxStudents)) {
    errors.push('Máximo de alunos inválido. O valor deve ser numérico.')
  }

  if (id < 1 || id > 10) {
    errors.push('Código inválido. O valor deve estar entre 1 e 10.');
  }

  if (maxStudents < 5 || maxStudents > 10) {
    errors.push('Máximo de alunos inválido. O valor deve estar entre 5 e 10.');
  }

  return {
    errors,
    isValidClass: errors.length === 0
  }
}