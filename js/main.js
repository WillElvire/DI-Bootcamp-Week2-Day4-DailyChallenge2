const numbers = [5,0,9,1,7,4,2,6,3,8];
numbers.toString();
numbers.join("");
for(let i = 1 ; i < numbers.length ; i++) {
 
    for(let j=0; j < i;j++){
        //checking if the number got before is greater than the own gone actually
        if(numbers[i] > numbers[j]) {
            //creation a temp variable to get the value of the biggest one 
            let tmp    = numbers[i];
            // give the oldest value to the biggest value got
            numbers[i] = numbers[j];
            // the temps should be the biggest value
            numbers[j] = tmp;
        }
    }
}

console.log(numbers);