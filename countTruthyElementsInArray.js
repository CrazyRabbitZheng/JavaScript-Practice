//create a function called countTruthy
//The function takes an array as a parameter,
//and return the number of truthy elements in the array
function countTruthy(array){
    let counter = 0;
    for (let iterator of array) 
        if(iterator) counter++;
    return counter;
}

console.log(countTruthy([1,0,'',3,4,null,undefined]));
