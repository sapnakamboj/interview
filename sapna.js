// var a=0;
 //for(i=1; i<=10; i++)
 //{
	// console.log(" *" .repeat(i));
// }
 
 
/* let n = 5
let string = "";
for ( i = 1; i <= n; i++) {

  for ( j = 0; j < n - i; j++) {
    string += " ";
  }
 
  for ( k = 0; k < i; k++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);
*/


let n = 5;
let string = "";
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < n - i; j++) {
    string += " ";
  }
  for (let k = 0; k < i; k++) {
    string += "*";
  }
  string += "\n";
}
for (let i = 1; i <= n - 1; i++) {
  for (let j = 0; j < i; j++) {
    string += " ";
  }
  for (let k = 0; k < n - i; k++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);