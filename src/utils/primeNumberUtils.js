export const isPrime = (number) => {
    if(!number) {
      return false;
    }
    if(number === 2){
      return true;
    }
    if(number % 2 === 0){
      return false;
    }
  
    for(let i = 3; i < Math.sqrt(number); i += 2) {
      if(number % i === 0){
        return false;
      }
    }
    return true;
  }
  
  export const getPrimeNumbers = (numberOfItems) => {
    const  arrayOfNumbers = [];
    for(let num = 2; arrayOfNumbers.length < numberOfItems; num++ ){
      isPrime(num) && arrayOfNumbers.push(num);
    }
    return arrayOfNumbers;
  }
  
  export const getMultiplicationTableArray = (primeNumbersArray) => {
    const tableArray = [
      ["", ...primeNumbersArray]
    ];
  
    for(let i = 0; i < primeNumbersArray.length; i++) {
      const newArr = primeNumbersArray.map((primeNumber) => {
        return primeNumber * primeNumbersArray[i];
      });
  
      const tableRow = [primeNumbersArray[i]].concat(newArr);
  
      tableArray.push(tableRow);
    }
    return tableArray;
  }