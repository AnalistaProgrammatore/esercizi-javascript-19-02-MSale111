/**
* Scrivere qui il codice della funzione fibonacci(n)
**/
/*num2=n-2 e num1=n-1*/
let a='';
const fibonacci = (n, num2, num1) => {
    let copia = num2;
    a=a+num2+',';
    num2 += num1;
    num1 = copia;
    if (num1 >= n) return num1
    num1 = fibonacci(n, num2, num1);
}
let num1 = fibonacci(30, 0, 1);
console.log(a);
