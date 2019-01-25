// CODE here for your Lambda Classes
// CODE here for your Lambda Classes
class Person {
    constructor(personAttr) {
      this.name = personAttr.name;
      this.age = personAttr.age;
      this.location = personAttr.location;
      this.gender = personAttr.gender;
    }
  
    speak() {
      console.log(`Hello, my name is ${this.name}, I am from ${this.location}`);
    }
  }

class Instructor extends Person {
    constructor(instructorAttr) {
        super(instructorAttr);
        this.specialty = instructorAttr.specialty;
        this.favLanguage = instructorAttr.favLanguage;
        his.catchPhrase = instructorAttr.catchPhrase;
    }

    demo(subject) {
        console.log(`Today we are learning about ${subject}`);
    }

    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}`);
    }

    studentGrade(student) {
        let randomNum = Math.floor(Math.random() * 10);
        if(randomNum > 5 && student.grade > 0) {
            return student.grade -= Math.floor(Math.random() * 10);
        } else {
            return student.grade += Math.floor(Math.random() * 10);
        }
    }
}

class Student extends Person {
    constructor(studentAttr) {
        super(studentAttr);
        this.previousBackground = studentAttr.previousBackground;
        this.className = studentAttr.className;
        this.favSubjects = studentAttr.favSubjects;
        this.grade = studentAttr.grade;
    }

    listSubject() {
        for(let i = 0; i < this.favSubjects.length; i++) {
            console.log(this.favSubjects[i]);
        }
    }

    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }

    sprintChallenge() {
        console.log(`${this.name} has begun sprint challenge on ${subject}`)
    }

    graduate() {
        if(this.grade >= 70) {
            return `${this.name} has graduated!`;
        }
    }
}

class ProjectManager extends Instructor {
    constructor(pmAttr) {
        super(pmAttr);
        this.gradClassName = pmAttr.gradClassName;
        this.favInstructor = pmAttr.favInstructor;
    }

    standUp(slack) {
        console.log(`${this.name} announces to ${slack}, @channel study times!`);
    }

    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    } 
}

const instructor1 = new Instructor({
    name: "Mr. A",
    location: "Texas",
    age: 33,
    gender: 'male',
    favLanguage: "HTML",
    specialty: "front-end",
    catchPhrase: `Howdy, y'all.`
});

const instructor2 = new Instructor({
    name: "Mrs. B",
    location: "Appalachia",
    age: 51,
    gender: 'female',
    favLanguage: "CSS",
    specialty: "full-stack",
    catchPhrase: `No running with scissors`
});

const instructor3 = new Instructor({
    name: "Ms. C",
    location: "New England",
    age: 29,
    gender: 'female',
    favLanguage: "Javascript",
    specialty: "back-end",
    catchPhrase: `That's an awfully hot coffee pot`
});

const student1 = new Student({
    name: "Doug",
    location: "Iowa",
    age: 26,
    gender: 'male',
    previousBackground: "Technology Sales",
    className: "webpt4",
    favSubjects: "Javascript",
    grade: 80
});

const student2 = new Student({
    name: "John",
    location: "Nebraska",
    age: 21,
    gender: 'male',
    previousBackground: "Construction",
    className: "webpt4",
    favSubjects: "CSS"
});

const student3 = new Student({
    name: "Melanie",
    location: "Tennessee",
    age: 22,
    gender: 'female',
    previousBackground: "Medical Technology",
    className: "webpt4",
    favSubjects: "HTML"
});

const pm1 = new ProjectManager({
    name: "James",
    location: "California",
    age: 27,
    gender: 'male',
    favLanguage: "LESS",
    specialty: "front-end",
    catchPhrase: `Don't be late for standup!`
});

const pm2 = new ProjectManager({
    name: "Megan",
    location: "North Dakota",
    age: 31,
    gender: 'female',
    favLanguage: "C++",
    specialty: "back-end",
    catchPhrase: `Is it lunch time yet?`
});

const pm3 = new ProjectManager({
    name: "Carmen",
    location: "San Diego",
    age: 42,
    gender: 'female',
    favLanguage: "Java",
    specialty: "Education",
    catchPhrase: `That's what they used to call me on the b-ball court`
});