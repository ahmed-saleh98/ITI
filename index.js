var students = [
    ['Ahmed', 85],
    ['Mohamed', 45],
    ['Saleh', 60],
    ['Matboly', 90],
    ['Mousa', 58],
];
// Q2:function to print a student's name and grade
function printStudent(student) {
    console.log("Student Name: ".concat(student[0], ", Grade: ").concat(student[1]));
}
students.forEach(printStudent);
// Q3:function to filter students with grade >= 60
function filterPassingStudents(students) {
    return students.filter(function (_a) {
        var _ = _a[0], grade = _a[1];
        return grade >= 60;
    });
}
var passingStudents = filterPassingStudents(students);
console.log('Passing Students:');
passingStudents.forEach(printStudent);
