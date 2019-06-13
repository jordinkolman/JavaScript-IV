// CODE here for your Lambda Classes
class Person{
    constructor(attrs) {
        this.name = attrs.name
        this.age = attrs.age
        this.location = attrs.location
    }
    speak() {
        return (`Hello my name is ${this.name}, I am from ${this.location}.`)
    }
}

class Instructor extends Person {
    constructor(attrs){
        super(attrs)
        this.specialty = attrs.specialty
        this.favLanguage = attrs.favLanguage
        this.catchPhrase = attrs.catchPhrase
    }
    demo(subject) {
        return (`Today we are learning about ${subject}`)
    }
    grade(Student, subject) {
        return (`${Student.name} receives a perfect score on ${subject}.`)
    }
}

class Student extends Person {
    constructor(attrs){
        super(attrs)
        this.previousBackground = attrs.previousBackground
        this.className = attrs.className
        this.favSubjects = attrs.favSubjects
        this.listsSubjects = attrs.listsSubjects
    }
    listsSubjects() {
        console.log(`${this.name}'s favorite subjects are: `)
        for (i=0; i<this.favSubjects.length; i++) {
            return this.favSubjects[i]
        }
    }
    PRAssignment(subject) {
        return (`${this.name} has submitted a PR for ${subject}.`)
    }
    sprintChallenge(subject) {
        return (`${this.name} has begun sprint challenge on ${subject}.`)
    }
}

class ProjectManager extends Instructor {
    constructor(attrs){
        super(attrs)
        this.gradClassName = attrs.gradClassName
        this.favInstructor = attrs.favInstructor
    }
    standUp(channel){
        return (`${this.name} announces to ${channel}, @channel standup time!`)
    }
    debugsCode(Student, subject){
        return (`${this.name} debugs ${Student.name}'s code on ${subject}.`)
    }
}

const dan = new Instructor({
    name: 'Dan',
    location: 'Levy',
    age: 32,
    favLanguage: 'JavaScript',
    specialty: 'Node.js',
    catchPhrase: `Kitler spilled my coffee!`
  });

  const harold = new Instructor({
    name: 'Harold',
    location: 'Tenniman',
    age: 45,
    favLanguage: 'F# (yes, seriously)',
    specialty: 'User Experience',
    catchPhrase: `I can't find my brain today.`
  });

  const frank = new ProjectManager({
    name: 'Frank',
    location: 'Delvato',
    age: 26,
    favLanguage: 'C++',
    specialty: 'Back-End',
    catchPhrase: `Do we have to do the stand up?`,
    gradClassName: `Web12`,
    favInstructor: `Dan Levy`
  });

  const alisha = new ProjectManager({
    name: 'Alisha',
    location: 'Wordell',
    age: 23,
    favLanguage: 'Python',
    specialty: 'Redux',
    catchPhrase: `Nothing is a hack if it works.`,
    gradClassName: `CS3`,
    favInstructor:`Harold Tenniman`
  });

  const jordin = new Student({
    name: 'Jordin',
    location: 'Kolman',
    age: 24,
    previousBackground: 'Armed Security and Military',
    className: 'WEB21',
    favSubjects: ['LESS', 'JavaScript', 'C#']
  });

  const stacy = new Student({
    name: 'Stacy',
    location: 'Ely',
    age: 52,
    previousBackground: 'Data Entry',
    className: 'UX5',
    favSubjects: ['HTML', 'Python', 'Ruby on Rails']
  });

  const jared = new Student({
    name: 'Jared',
    location: 'Kowolski',
    age: 29,
    previousBackground: 'Sales',
    className: 'JBD15',
    favSubjects: ['Java', 'JavaScript', 'CoffeeScript']
  });