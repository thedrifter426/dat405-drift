function getData()
   {
   var radius = document.getElementById("radius").value;
   var output = document.getElementById("output");
   var PI = 3.14159;
   var circumference = 2 * PI * radius;
   var area = PI * (radius * radius);
   output.innerHTML = "Radius: " + radius + "\nCircumference: " + circumference + "\nArea: " + area;
}

/* here I'm using the function getData() to Calculate
the area and circumference of a circle, obtaining
the radius from a form field and using the onSubmit event
to pass the radius to the function */

/* area of a circle is calculated as follow:
area = 3.14159 * (radius * radius)

circumference of a circle is calculated as follow:
circumference = 2 * 3.14159 * radius  */
