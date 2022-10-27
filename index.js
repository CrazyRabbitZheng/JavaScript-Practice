//create a function called showProperty
//show all the property in an object if the property's type is 'string'
function showProperty(object){
    for (let key in object)
        if(typeof object[key] === 'string') console.log(key,object[key]);
}
const person = {
    name:'Alice',
    age:30,
    email:'alicejrha@gmail.com'
}

showProperty(person);