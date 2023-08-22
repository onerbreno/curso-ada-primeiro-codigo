import { formatName } from "./utils/formatName.js";
import { validadeClass } from "./utils/validadeClass.js";
import { validadeStudent } from "./utils/validadeStudent.js";
import { isValidEmail } from "./utils/validadeTypes.js";

export let classes = []
export let students = []

export const SCHOOL_AVERAGE = 6

export function addNewClass({ id, maxStudents }) {
  try {
    const { errors, isValidClass } = validadeClass(id, maxStudents)

    if (!isValidClass) {
      throw new Error(errors.join('\n'))
    }

    if (classes.some(course => course.id === id)) {
      throw new Error('Código inválido. Turma já existe.')
    }

    const newClass = {
      id,
      maxStudents
    }

    classes = [...classes, newClass];
  } catch (error) {
    console.log(error.message);
  }

  return classes;
}

export function addNewStudent({ name, surname, email, classId, birthDate, grades, active = true }) {
  try {
    let newStudent = {
      name,
      surname,
      email,
      classId,
      birthDate,
      grades,
      active
    }

    const { errors, isValidStudent } = validadeStudent(newStudent)

    const existingStudent = students.find(student => student.email === email);
    if (existingStudent) {
      throw new Error('Aluno inválido. Aluno já existe.');
    }

    if (!isValidStudent) {
      throw new Error(errors.join('\n'));
    }

    const classNewStudent = classes.find(current => current.id === classId);

    const totalStudentsClass = students.filter(student => student.classId === classId).length;
    if (totalStudentsClass === classNewStudent.maxStudents) {
      throw new Error('Turma inválida! Máximo de alunos da turma atingido.');
    }

    newStudent = {
      ...newStudent,
      name: formatName(name),
      surname: formatName(surname),
    }

    students = [...students, newStudent]

  } catch (error) {
    console.log(error.message)
  }

  return students
}

export function getCountStudents() {
  return students.length
}

export function removeStudent({ email }) {
  try {
    if (!email || !isValidEmail(email)) {
      throw new Error('Preencha com um e-mail válido do aluno.')
    }

    const indexStudent = students.findIndex(student => student.email === email)
    if (indexStudent === -1) {
      throw new Error('Aluno não encontrado.')
    }

    students = students.filter((student, index) => index !== indexStudent);

  } catch (error) {
    console.log(error.message)
  }
}

export function updateStudent(emailStudent, { name, surname, email, classId, birthDate, grades, active = true }) {
  try {
    const { errors, isValidStudent } = validadeStudent({ name, surname, email, classId, birthDate, grades, active })

    if (!isValidStudent) {
      throw new Error(errors.join('\n'));
    }

    if (!isValidEmail(emailStudent)) {
      throw new Error('E-mail inválido.');
    }

    const indexStudent = students.findIndex(student => student.email === emailStudent)
    if (indexStudent === -1) {
      throw new Error('Aluno não encontrado.')
    }

    const updatedStudent = {
      name: formatName(name),
      surname: formatName(surname),
      email,
      classId,
      birthDate,
      grades,
      active
    }

    const updatedStudents = students.map(student => {
      if (student.email === emailStudent) {
        return updatedStudent;
      }
      return student;
    });

    students = updatedStudents;

  } catch (error) {
    console.error(error.message);
  }

  return students;
}

export function searchStudent({ email }) {
  try {
    if (!email) {
      throw new Error('Preencha o e-mail.')
    }

    if (!isValidEmail(email)) {
      throw new Error('E-mail inválido.')
    }

    const studentIndex = students.findIndex(student => student.email === email)
    if (studentIndex === -1) {
      throw new Error('Aluno não encontrado.')
    }

    return students[studentIndex]

  } catch (error) {
    console.log(error.message)
  }
}

export function getStudents() {
  return students
}

export function calculateStudentGradeAverage({ email }) {
  try {
    if (!email) {
      throw new Error('Preencha o e-mail.')
    }

    if (!isValidEmail(email)) {
      throw new Error('E-mail inválido.')
    }

    const studentIndex = students.findIndex(student => student.email === email)

    if (studentIndex === -1) {
      throw new Error('Aluno não encontrado.')
    }

    const student = students[studentIndex]

    const average = student.grades.reduce((average, grade) => average + grade, 0) / student.grades.length

    return average

  } catch (error) {
    console.log(error.message)
  }
}

export function setStudentStatus({ email }) {
  try {
    if (!email) {
      throw new Error('Preencha o e-mail.')
    }

    if (!isValidEmail(email)) {
      throw new Error('E-mail inválido.')
    }

    const studentIndex = students.findIndex(student => student.email === email)

    if (studentIndex === -1) {
      throw new Error('Aluno não encontrado.')
    }

    students = students.map((student, index) => {
      if (studentIndex === index) {
        return {
          ...student,
          active: false,
        }
      }

      return student
    })

    return students[studentIndex]

  } catch (error) {
    console.log(error.message)
  }
}

export function getActiveStudent() {
  const activeStudents = students.filter(student => student.active)
  return activeStudents
}

export function getInactiveStudent() {
  const inactiveStudents = students.filter(student => !student.active)
  return inactiveStudents
}

export function getStudentsWithExpectedAverage() {
  const approvedStudents = students.filter(student => calculateStudentGradeAverage({ email: student.email }) >= SCHOOL_AVERAGE)

  return approvedStudents.map(student => {
    return {
      name: student.name,
      average: calculateStudentGradeAverage({ email: student.email }).toFixed(2)
    }
  })
}

export function getStudentsBelowExpectedAverage() {
  const disapprovedStudents = students.filter(student => calculateStudentGradeAverage({ email: student.email }) <= SCHOOL_AVERAGE)

  return disapprovedStudents.map(student => {
    return {
      ...student,
      average: calculateStudentGradeAverage({ email: student.email }).toFixed(2)
    }
  })
}

export function getCountClasses() {
  return classes.length
}

function generateReport() {
  const report = {
    countStudent: getCountStudents(),
    countClasses: getCountClasses(),
    studentsWithExpectedAverage: getStudentsWithExpectedAverage(),
    studentsBelowExpectedAverage: getStudentsBelowExpectedAverage(),
  }

  return report
}


addNewClass({ id: 1, maxStudents: 5 })

console.log("Turma adicionado: ")
console.log(classes)

addNewStudent({
  name: 'breno',
  surname: 'dias',
  email: 'breno@gmail.com',
  birthDate: '02/10/2003',
  classId: 1,
  grades: [10, 10, 10]
})

console.log("Aluno adicionado: ")
console.log(students)

updateStudent('breno@gmail.com', {
  name: 'Breno',
  surname: 'Dias',
  email: 'breno@dias.com',
  birthDate: '10/10/2003',
  classId: 1,
  grades: [10, 8, 10]
})

console.log("Aluno atualizado: ")
console.log(students)

console.log("Buscar aluno: ")
console.log(searchStudent({ email: 'breno@dias.com' }))

console.log("Lista completa de alunos: ")
console.log(getStudents())


console.log("Quantidade de turmas: ")
console.log(getCountClasses())


console.log("Calcular média de um aluno: ")
console.log(calculateStudentGradeAverage({ email: 'breno@dias.com' }))

console.log("Alterar status de um aluno: ")
console.log(setStudentStatus({ email: 'breno@dias.com' }))

console.log("Lista com alunos ativos")
console.log(getActiveStudent())

console.log("Lista com alunos inativos")
console.log(getInactiveStudent())

console.log("Alunos que estão com a média esperada")
console.log(getStudentsWithExpectedAverage())

console.log("Relatório completo")
console.log(generateReport())

removeStudent({email: 'breno@dias.com' })
console.log(students)