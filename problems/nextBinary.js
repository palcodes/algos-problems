// Problem Statement

// 1. Given a non-zero numerical input, consider the binary of that input and find the next number whose binary has the same number of Ones ('1s') in it.
// 2. You can find this question on binarysearch.io.


function decBnry(numberToDecode) {
  let bnr1 = (numberToDecode >>> 0).toString(2);
  // console.log(bnr1);
  return bnr1;
}

function getNumOfOnes(bnrForRead1) {
  let noOfOnes = 0;
  for (let i = 0; i < bnrForRead1.length; i++) {
    if (bnrForRead1.charAt(i) == 1) {
      noOfOnes++;
    }
  }
  return noOfOnes;
}

function getResult(binary,numOfOnes) {
  let _n = n;
  //_ n= 10
  //_n = 11
  while (true) {
    _n++;
    let bnr2 = decBnry(_n);
    let numOfOnes2 = getNumOfOnes(bnr2)
    // console.log(_n,bnr2,numOfOnes2)
    if(numOfOnes == numOfOnes2) {
      return {result: _n ,binary2 : bnr2};
      break;
    }
  }
  
}

let n = 180;
let binary = decBnry(n)
let ones = getNumOfOnes(binary)
// console.log(ones)
let {result,binary2} = getResult(binary,ones)
console.log(result)
console.log(`The input was ${n} with binary ${binary}`)
console.log(`The result is ${result} with binary ${binary2}`)