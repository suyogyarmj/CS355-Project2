var x= 100,y=150; // declares variables that store current square position
function pos(dx,dy){ // pos dunction is called by all the event handlers for movement buttons. The parameters dx and dy tell script how the layer should move. dx works as x coordinate and likewise for y.

if(!document.getElementById) return; // This line makes sure that getElementId function is supported and won't attempt to run on browsers that don't support it.

x += 10*dx; // multiply by 10 to make the movement more obvious
y += 10*dy;
obj = document.getElementById("square");

obj.style.top = y + "px"; // Adding px indicates the unit
obj.style.left = x + "px";
}

function hideSquare() {
if (!document.getElementById) return;
obj = document.getElementById ("square");
obj.style.display = "none"; // none hides the square
}

function showSquare(){
if (!document.getElementById) return;
obj = document.getElementById ("square");
obj.style.display = "block"; // block makes the square visible
}

function AddText(){
if (!document.getElementById) return;
var sentence = document.form3.sentence.value;
var node = document.createTextNode ("" + sentence);
document.getElementById("p1").appendChild(node);
document.form3.sentence.value = "";
}