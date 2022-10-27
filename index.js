//create a function called sum
//The function takes an integer as a parameter
//and it returns the sum of all the multiplies of 3 or 5 from 0 to the number
//say you sum(11), and you will get 3+5+6+9+10=33
function sum(number){
    let sum = 0;
    for(let i=0;i<=number;i++)
        if(i%3 === 0 || i%5 === 0)
            sum = sum + i;
    //pretty space-above, sum is hightly related to for loop.No space to separate them.
    return sum;
}

console.log(sum(13));