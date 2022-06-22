const classA = {
  name: "Turma A",
  students: [
    {
      name: "Joao",
      grade: 9.1,
    },
    {
      name: "Marcos",
      grade: 7.1,
    },
    {
      name: "Rodrigo",
      grade: 5.1,
    },
  ],
};

const classB = {
  name: "Turma A",
  students: [
    {
      name: "Mario",
      grade: 5.1,
    },
    {
      name: "Maria",
      grade: 3.1,
    },
    {
      name: "Polo",
      grade: 4.1,
    },
  ],
};

function calcAverage(students) {
  let sum = 0;

  for (let s in students) {
    sum += students[s].grade;
  }

  const average = sum / students.length;

  return average;
}

function sendMessage(className, average) {
  if (average > 5) {
    console.log(`${className} average ${average}. Congrats`);
  } else {
    console.log(`${className} average ${average}. Is not good.`);
  }
}

function markAsFlunked(student) {
  student.Flunked = false;

  if (student.grade < 5) {
    student.Flunked = true;
  }
}

function sendFlunkedMessage(student) {
  if (student.Flunked) {
    console.log(`The student ${student.name} is flunked!`);
  }
}

function studentsFlunked(students) {
  for (let student of students) {
    markAsFlunked(student);
    sendFlunkedMessage(student);
  }
}

const averageA = calcAverage(classA.students);
const averageB = calcAverage(classB.students);

sendMessage(classA.name, averageA);
sendMessage(classB.name, averageB);

studentsFlunked(classA.students);
studentsFlunked(classB.students);
