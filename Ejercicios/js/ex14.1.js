let str = "ab1c3de4fg";

for(let caracter of str){
    if("aeiou".includes(caracter)){
        console.log("Es vocal");
    }
    else if("1234567890".includes(caracter)){
        console.log("Es un número")
    }
    else{
        console.log("Es consonante")
    }
}