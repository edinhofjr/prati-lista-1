let a = 0;
let b = 1;

console.log("Sequência de Fibonacci (10 primeiros números):");

for (let i = 0; i < 10; i++) {
    console.log(a);
    let temp = a + b;
    a = b;
    b = temp;
}