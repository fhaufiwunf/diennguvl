

// câu 1
// function calculateSum() {
//     var a = document.querySelector("#a").value;
//     var b = document.querySelector("#b").value;
//     var Numbers = [];
//     var primeSum = 0;
//     for (var i = a; i <= b; i++) {
//       if (isPrime(i)) {
//         primeNumbers.push(i);
//         primeSum += i;
//       }
//     }
//     document.querySelector("#Numbers").innerHTML = "Các số nguyên tố trong khoảng từ " + a + " đến " + b + " là: " + Numbers.join(", ");
//     document.querySelector("#result").innerHTML = "Tổng các số nguyên tố trong khoảng từ " + a + " đến " + b + " là: " + primeSum;
//   }

//   function isPrime(num) {
//     if (num <= 1) return false;
//     for (var i = 2; i < num; i++) {
//       if (num % i === 0) return false;
//     }
//     return true;
//   }


//   // câu 2

//   const c = parseInt(prompt('  nhập i = '))

// for (let i = 1; i <= c; i++) {
//     for (let j = 1; j <= i; j++) {
//         document.write("*")
//     }
//     document.write("<br />")
// }


// let a = 10
// count = 0
// for (let i = 1; i <= a; i++) {
//     count += i;
// }

// console.log("count: " + count)



let a = 10
let b = 30
let ucln = []

for (let i = 1; i <= a; i++) {
    if(a % i == 0 && b % i == 0) {
        ucln.push(i)
    }
}
let c = ucln.at(-1)

console.log(c)