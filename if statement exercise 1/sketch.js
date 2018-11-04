var number = window.prompt("Please enter a number between 1 and 10:");

if ( number < 1 || number > 10 || isNaN(number)) {
  document.write ("the number was not in the range of 1-10.");
}

else if (number == 5) {
  document.write("the number entered was 5.");
}

else if ( number < 5){
 document.write(" the number entered was less than 5.");
}

else if ( number > 5){
  document.write(" the number entered was greater than 5.");
}
