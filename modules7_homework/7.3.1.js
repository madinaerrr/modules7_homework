//Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения 
//только собственных свойств. Данная функция не должна возвращать значение.




function foo(obj){

    for (let key in obj) {

        console.log(obj[key]);
    }

}

foo({a:3, b:4, c:5})

