var c = 150;
var j = 2;
var NumberPrime = [];


for (; j < c; j++) {

  if (prime(j)) {
    NumberPrime.push(j);
    
  }
  
}

console.log(NumberPrime);

function prime(Number) {

  for (var i = 2; i < Number; i++) {
   
    if (Number % i === 0) {
      return false;
  
    }

  }

  return Number !== 1;
}
