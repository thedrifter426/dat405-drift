var number = window.prompt("Please enter a number between 0-24.");
if (number < 0 || number > 24 || isNaN(number)) {
  document.write("the number is not in the range 0-24.");
}

else if ( number <= 12) {
  document.write ("Good Morning!");
}

else if ( number > 12, number < 18) {
  document.write("Good Afternoon!");
}

else if ( number >= 18) {
  document.write("Good Evening!");
}
