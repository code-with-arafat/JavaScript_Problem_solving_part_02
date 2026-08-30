const students = [
    { name: "Arafat", marks: 85 },
    { name: "Rahim", marks: 72 },
    { name: "Karim", marks: 91 },
    { name: "Hasan", marks: 65 }
];

const selectedStudents = [];

for (const student of students) {
    if (student.marks >= 80) {
        selectedStudents.push(student);
    }
}

console.log(selectedStudents);