const urlCharacters = [];
const allElements = document.querySelectorAll('*');

for (let i = 0; i < allElements.length; i++) {
  const element = allElements[i];
 
  if (element.tagName ==="P" && element.getAttribute('class') ==="ramp flag" && element.getAttribute('value') ==="h" ) {
    urlCharacters.push(element.getAttribute('value'));    
}
//  if(element.tagName === "SECTION" && element.getAttribute("id").startsWith(11)){
//     urlCharacters.push(element.getAttribute('id'));    
//   }
//   if(element.tagName === "MAIN" && element.getAttribute("id").endsWith(22)){
//     urlCharacters.push(element.getAttribute('id'));    
//   }

//   if(element.tagName === "ARTICLE" && element.getAttribute("id").endsWith(33)){
//     urlCharacters.push(element.getAttribute('id'));    
//   }
}


console.log( urlCharacters);