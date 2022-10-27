//create a function called showNumbers
//The function takes one parameter-limit
//should display all numbers from 0 to limit,
//and show "ODD"/"EVEN" next to the number
function showNumbers(limit){
    for(let i = 0; i <= limit;i++){
        (i%2 === 1) ? console.log(i+' ODD'):console.log(i+' EVEN');
    }
}

showNumbers(13);
