let student= {
   firstName:"",
   lastName:"",
   grades:[],
   inputNewGrade : function(newGrade) {
     this.grades.push(newGrade);
    
   },

   computeAverageGrade : function(){
       //console.log(this);
       if(this.grades.length > 0){
       return this.grades.reduce((a,b) => a+b) / this.grades.length;
       }
   }

};

let student1 = Object.create(student);
student1.firstName = "James";
student1.lastName = "Parton";
student1.grades = [];
student1.inputNewGrade(98);
student1.inputNewGrade(96);
student1.inputNewGrade(97);


let student2 = Object.create(student);
student2.firstName = "James";
student2.lastName = "Parton";
student2.grades = [92,95];
student2.inputNewGrade(94);


let student3 = Object.create(student);
student3.firstName = "Martin";
student3.lastName = "Sharp";
student3.grades = [91,90];
student2.inputNewGrade(93);


//console.log(student3.computeAverageGrade())

let theStudents = [student, student2, student3];

for (let stu in theStudents){
    console.log(theStudents[stu].computeAverageGrade());
}

