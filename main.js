var heading = document.createElement("h4"); 
 
heading.textContent = "TEST";
    
var p = document.createTextNode("blablabla");  

var container = document.getElementById("myID");

container.appendChild(heading);
container.appendChild(p);   
