var cars = ["Saab","Volvo","BMW"];
var changedb = false;
var rarray = [];

function myFunction() {
   document.getElementById("demo").innerHTML = 5 + 6;
   this.class = "active";
} 

function redoFunc() {
    document.write('<input type="button" value="Back" onclick="goBack()">');
}

function goBack() {
   window.location.reload();
}

function alertJ() {
    window.alert("Hello i am an alert!");
}

function varTest() {
    var x, y, z, result;
    x = "here is a statement:  "
    y = 8;
    z = 9;
    result = y + z;
    
    document.getElementById("demo").innerHTML = x + result;
}


function arrTest() {
    
    
    document.getElementById("demo").innerHTML = cars;
}

function objectTest() {
    var listo = {firstname:"Thys", Lastname:"Wentzel", Age:22};
    
    document.getElementById("demo").innerHTML = listo.firstname + "<br>" + listo.Lastname + "<br>" + listo.Age;
}

function cal( value1, value2) {
    return value1 * value2;
}

function functionTest () {
    document.getElementById("demo").innerHTML = cal( 4, 5) + " has been calculated with a function";
}

function globalTest() {
    if(changedb == false)
    {
        changedb = true;
        document.getElementById("testb1").innerHTML = "Look at me!!! Click again!!!";
    }
    else 
    {
        changedb = false;
        document.getElementById("testb1").innerHTML = "Sad and dull. click again";
    }
}

function randomT() {
    document.getElementById("demo").innerHTML = "Here is a random number between 1 and 100: " + (Math.floor(Math.random() * 100) + 1);
}

function dateT() {
    document.getElementById("demo").innerHTML = new Date();
}

function loopT() {
    var text = "<ul>"
    var objects = ["person","car","house"]
    for(var i = 0; i < objects.length; i++)
    {
        text += "<li>" + objects[i] + "</li>";  
    }
    
    document.getElementById("demo").innerHTML = text;
}

function arrTest() {
    var cars = ["volvo","opel","BMW"];
    document.getElementById("demo").innerHTML = cars.join("<br>");
}

function sinput() {
    document.getElementById("demo").innerHTML = "<input type='number' id='age' value='18'><button type='button' onclick='process()'>Test</button><br><p id='result'>Result goes here</p><br>";
}

function process() {
    var age = Number(document.getElementById("age").value);
    var text;
    if(age < 18)
        text = "Too young";
    else if(age >= 18)
        text = "Old enough";
    
    document.getElementById("result").innerHTML = text + " to vote";
}

function switchTest() {
    var day;
    switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
} 
    document.getElementById("demo").innerHTML = day;
}

function inList() {
    rarray = [];
    document.getElementById("demo").innerHTML = "<input id='searchtxt' type='text' value='Hello'><button type='button' onclick='process2()'>Add Value</button><br><p id='result'>Result goes here</p><br>";
}

function process2() {
    var word = document.getElementById("searchtxt").value;
      
    rarray.push(word);
    display();
}

function remove(i){
    rarray.splice(i,1)
    
    display();
}

function display() {
    var par = "";
    for(var k = 0; k < rarray.length; k++)
    {
        par += "<div>" + rarray[k] + "<button type=button onclick='remove(" + k + ")' style='margin-left:10px'>Remove</button></div>"
    }
    
    document.getElementById("result").innerHTML = par;
}

function randomcol() {
    document.getElementById("demo").innerHTML = "<button class='circ' onclick='changecol()' id='circbut'>Change the color</button>";
}

function changecol() {
    var num = Math.floor(Math.random() * 5);
    
    switch (num) {
        case 0:
            document.getElementById("circbut").style.backgroundColor = "blue";
            break;
        case 1:
            document.getElementById("circbut").style.backgroundColor = "red";
            break;
        case 2:
            document.getElementById("circbut").style.backgroundColor = "green";
            break;
        case 3:
            document.getElementById("circbut").style.backgroundColor = "yellow";
            break;
        case 4:
            document.getElementById("circbut").style.backgroundColor = "white";         
    }
    
}

function drop() {
    document.getElementById("demo").innerHTML = "<div><select id='selecti' value='hello'><option value='hello'>hello</option><option value='hi'>hi</option><option value='nice'>nice</option><option value='bye'>bye</option></select><button type='button' onclick='getIndex()'>Check value</button></div><br><div id='index'>Results here</div>";
}

function getIndex() {
    var e = document.getElementById("selecti");
    var strUser = e.options[e.selectedIndex].value;
    document.getElementById("index").innerHTML = "The value is: " + strUser;
}

function animatel() {
    document.getElementById("demo").innerHTML = "<div style='text-align:center'><button type='button' onclick='myMove()'>Animate!</button></div><br><div id ='container'><div id ='animate'></div></div>";
}

function myMove() {  
  var elem = document.getElementById("animate");   
  var pos1 = 0;
  var pos2 = 0;
  var pos3 = 350;
  var pos4 = 350;
  var move = false;
  var id = setInterval(frame, 10);
  var stop = false;
    
  function frame() {  
    /*if(stop == true){
        clearInterval(id)
    }else */if(pos1 <= 350){
        pos1++;
        elem.style.top = pos1 + 'px';
    }else if(pos2 <= 350){
        pos2++;
        elem.style.left = pos2 + 'px';
    }else if(pos3 >= 0){
        pos3--;
        elem.style.top = pos3 + 'px';
    }else if(pos4 >= 0){
        pos4--;
        elem.style.left = pos4 + 'px';
        if(pos4 == 0){
            pos1 = 0;
            pos2 = 0;
            pos3 = 350;
            pos4 = 350;
        }
    }
     
  }
}

function confirms() {
    var txt;
    txt = prompt("Enter something");
    document.getElementById("dmsg").innerHTML = txt;
}

function message1() {
    
}

function otherone() {
    var txt;
    if (confirm("Press a button!")) {
        txt = "You pressed OK!";
    } else {
        txt = "You pressed Cancel!";
    }
    document.getElementById("dms").innerHTML = txt;
}

function showmsg() {
    document.getElementById("demo").innerHTML = '<button onclick="confirms()">Try it</button><br><p id="dmsg">Your message goes here</p><br><button onclick="otherone()">Try it</button><br><p id="dms">Yes or no</p>';
}