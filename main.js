/ Create the <h4> element
var heading = document.createElement("h4"); 

// add the text    
heading.textContent = "TEST";

// Create the text node <p>       
var p = document.createTextNode("blablabla");  

//get the element to which you want to append the h4 and p
var container = document.getElementById("myID");

// Append h4 and p 
container.appendChild(heading);
container.appendChild(p);   