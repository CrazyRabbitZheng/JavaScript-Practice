//speed limit is 70 km/h
//every 5 km above 75 demerit 1 point
//say 73 km/h, does not over 70 by 5;dont demerit point
//if demerit 12 points, the DL gets suspended
//create a function called checkSpeed 
function checkSpeed(speed){
    if (speed <= 74) return 'OK'
    if (speed >= 130) return 'DL suspended'
    return 'You have been demerited '+ Math.floor((speed - 70)/5) +' point(s)'
}


console.log(checkSpeed(7441));