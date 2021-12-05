function Student(fName, lName, grades){
   this.fName = fName;
   this.lName = lName;
   this.grades = grades;
   this.inputNewGrade = function(newGrade) {
    this.grades.push(newGrade);
    console.log(this.grades);
  };
 this.computeAverageGrade = function(){
    return this.grades.reduce((a,b) => a+b) / this.grades.length;
}
}

let student1 = new Student ('John', 'Smith', [96,100,97]);
let student2 = new Student ('James', 'Parton', [92,95,94]);
let theStudents = [student1, student2];

for (let stu in theStudents){
    console.log(theStudents[stu].computeAverageGrade());

}

