let num = prompt("What number do you want to find the factorial of?");
let factorial = function(n){
    if (n == 0) {
        return 1;
    } else {
        product = 1;
        for (i = 1; i < n; i++) {
            product = product * i;
        }
        return product;
    }
}
console.log(factorial(num));






clear()
rt(60)
fd(100)
rt(60)
fd(100)
rt(120)
fd(100)
rt(60)
fd(100)
fd(100)
rt(300)
fd(100)
rt(-120)
fd(100)
rt(-60)
fd(100)
rt(-30)
fd(100)
rt(-60)
fd(100)
rt(-120)
fd(100)
rt(-60)
fd(100)
fd(100)
rt(60)
fd(100)
rt(120)
fd(100)
rt(60)
fd(100)





clear()
rt(30)
fd(80)
rt(120)
fd(80)
rt(120)
fd(80)
rt(90)
fd(80)
rt(90)
fd(80)
rt(90)
fd(80)
rt(90)
fd(80)
rt(60)
fd(80)
rt(60)
fd(80)
rt(60)
fd(80)
rt(60)
fd(80)
rt(60)
fd(80)
rt(60)
fd(80)
rt(75)
fd(80)
rt(60)
fd(80)
rt(80)
fd(80)
rt(68)
fd(80)


let a = prompt("nhap can nang");
  let b = prompt("nhap chieu cao cm");
 let c = b/100;
  let x = (a/(c*c));
 if (x < 16){
     console.log("Thieu Can Nang");
 }
else if (16 < x && x < 18.5){
   console.log("Binh Thuong");
}
 else {
console.log("Beo Phi");
 }


  //1, boolean là 1 toán tử , hoặc toán tử logic , bao gồm các toán tử như AND , OR , NOT , NOR , NAND và XOR .
//example: let a = false;
//let b = true;
//console.log(a && b); // TRUE
//console.log(a || b); // TRUE
//console.log(!a); // TRUE
//console.log(!b); // FALSE

//2, A flow chart là biểu diễn đồ họa hoặc biểu tượng của một quá trình.


// 3,Nested conditions comprise condition statements contained within the definition of other condition statements. Nested conditions work as follows:

   //You can group multiple condition statements. Conditions consisting of multiple statements are connected using the logical AND and OR operators.
   // You can also nest statements, so that one statement is contained within the definition of another statement.

   example://x = 10
   2	//y = 10
   3	
   4	//if x < y:
   5	    //console.log("x is less than y")
   6	//else:
   7	    //if x > y:
   8	      // console.log("x is greater than y")
   9	    //else:
   10	        //console.log("x and y must be equal")
   