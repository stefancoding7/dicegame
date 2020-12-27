document.body.onload = addElement;

function addElement () { 
  // create a new div element 
  var newDiv = document.createElement("div"); 
  newDiv.textContent = '<p>df</p>'
  // and give it some content 
  
  // add the text node to the newly created div
  newDiv.appendChild(newDiv);  

  // add the newly created element and its content into the DOM 
  var currentDiv = document.getElementById("test"); 
  document.body.insertBefore(newDiv, currentDiv); 
}