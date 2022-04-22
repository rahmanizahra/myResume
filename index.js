//function body
function showMessage(param1){//parameters
    console.log('Message from normal function:>'+param1)
}
showMessage("class began");//arguments

//ES6 options: arrow functions, higher order functions(map,filter,reduce), let and const,
const result=  (n)=>{
    
    return 10+n;
}

console.log(result(10));


