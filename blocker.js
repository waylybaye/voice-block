var elements = [];
var embed = document.getElementsByTagName("embed");
var objects = document.getElementsByTagName("objects");
elements.push.apply(elements, embed)
elements.push.apply(elements, objects)

if( window.innerHeight === 0 && window.innerWidth === 0 ){
  elements.every(function(object){
    object.style.display = "none";
  });
}
