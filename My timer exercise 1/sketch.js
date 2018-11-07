function detonate() {
  setTimeout(explode, 3000);
}
function explode() {
  alert("BOOM!!!");
}

/* here when the DETONATE button is pressed the onClick handler call
the detonate() function which uses the setTimeout() method to execute
the explode() function after a period of three seconds (3000 milliseconds)
*/
