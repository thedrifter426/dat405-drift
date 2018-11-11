function getData()
   {
   var radius = document.getElementById("radius").value;
   var output = document.getElementById("output");
   var PI = 3.14159;
   var circumference = 2 * PI * radius;
   var area = PI * (radius * radius);
   output.innerHTML = "Radius: " + radius + "\nCircumference: " + circumference + "\nArea: " + area;
} 
