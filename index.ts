// Q1: Create a tuple 'Student' and an array of students
type Student = [string, number];
const students: Student[] = [
  ['Ahmed', 85],
  ['Mohamed', 45],
  ['Saleh', 60],
  ['Matboly', 90],
  ['Mousa', 58],
];

// Q2:function to print a student's name and grade
function printStudent(student: Student): void {
  console.log(`Student Name: ${student[0]}, Grade: ${student[1]}`);
}
students.forEach(printStudent);

// Q3:function to filter students with grade >= 60
function filterPassingStudents(students: Student[]): Student[] {
  return students.filter(([_, grade]) => grade >= 60);
}

const passingStudents = filterPassingStudents(students);
console.log('Passing Students:');
passingStudents.forEach(printStudent);
