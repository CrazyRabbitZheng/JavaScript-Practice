//createa function called grade
//The function takes a student's marks as an array as a parameter
//it calculates the average mark
//0-59 'F'
//60-69 'D'
//70-79 'C'
//80-89 'B'
//90-100 'A'
//show the letters relatively
function grade(marks){
    let sum = 0;
    for(let mark of marks)
        sum = sum + marks[mark];
    average = sum / marks.length();
    console.log(average);
}

const marks = [45,26,89,99,20];

grade(marks);