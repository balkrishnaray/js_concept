let num = Math.floor(Math.random() * 101);
console.log(num);
let guess;
let chances = 0;
do{
 guess =Number.parseInt( prompt("Enter your guess:"));
  

if(guess == num) {
 console.log("Your guess was correct"); 
}
else if(guess > num){
console.log("Your number is lesser than answer");
}
else if(guess < num){
   console.log("Your number is greater than answer" );
}
  else{
    console.log("Wrong Format");
  }
chances ++;
}while(guess != num);

console.log((100 - chances) + " is your score out of 100");

