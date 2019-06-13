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