var submit; //buttons
var shuffle;
var speak;
var list; //ordered list
var textArea; 
var wordArray;
var debug;

document.addEventListener('DOMContentLoaded', docLoad, false);

function docLoad(){
  submit=document.getElementById("submit");
  shuffle=document.getElementById("shuffle");
  speak=document.getElementById("speak");
  list=document.getElementById("list");
  textArea=document.getElementById("text");
  debug=document.getElementById("debug");
  
  submit.onclick= function() {submitted()};
}

function submitted(){
  var text = textArea.value;
  
  if (text==""||text==null){
    alert("no text");
  }
  else{
    var ol = document.createElement("ol");
    ol.setAttribute("id","list");
    
    wordArray = text.split(",");
    wordArray.forEach(function(entry) {
      var node = document.createElement("li");
      var textnode = document.createTextNode(entry);
      node.appendChild(textnode);
      ol.appendChild(node);
    });
    
    list.parentNode.replaceChild(ol,list);
    list=ol;
  }
}