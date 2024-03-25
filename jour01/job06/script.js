function fizzbuzz() {
  for (let num = 1; num <= 151; num++) {
    if (num % 3 == 0 && num % 5 == 0) {
      console.log('FizzBuzz');
      continue;
    }

    if (num % 3 == 0) {
      console.log('Fizz');
      continue;
    }

    if (num % 5 == 0) {
      console.log('Buzz');
      continue;
    }

    console.log(num);
  }
}

fizzbuzz();
