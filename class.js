class Student{
   constructor(sId, sName){
      this.id = sId;
      this.name = sName;
      this.school = 'Railway School';
   }
}

const student1 = new Student(1, 'Tanu');
const student2 = new Student(2, 'Tuni');
const student3 = new Student(3, 'Samu');

// console.log(student1, student2, student3);
console.log(student1.name, student2.name, student3.name);
