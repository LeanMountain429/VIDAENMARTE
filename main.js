rarararararararomaromamamagagaulalalabutthisbadromance=document.getElementById("Onii-chan=D")
var oneplusoneequaltoM=rarararararararomaromamamagagaulalalabutthisbadromance.getContext("2d")
var altorobot=100
var anchorobot=100
var fondocanvas="mars.jpg"
var robotitorobotito= "rover.png"
var posiciónrobotitoY= 10
var posiciónrobotitoX= 10
function mamamamaromaromamamagagaulalala(){
    createanimageonthebackground=new Image()
    createanimageonthebackground.onload=raeres
    createanimageonthebackground.src=fondocanvas

    createanrobot=new Image()
    createanrobot.onload=raeres1
    createanrobot.src=robotitorobotito
}
function raeres(){
    oneplusoneequaltoM.drawImage(createanimageonthebackground,0,0,rarararararararomaromamamagagaulalalabutthisbadromance.width,rarararararararomaromamamagagaulalalabutthisbadromance.height)
}
function raeres1(){
    oneplusoneequaltoM.drawImage(createanrobot,posiciónrobotitoX,posiciónrobotitoY,anchorobot,altorobot)
}
window.addEventListener("keydown",keydoown)
function keydoown(e){
    var keydooown=e.keyCode
    console.log(keydooown)
    if (keydooown==40){
        down ();
        console.log("down")
    }
    if (keydooown==38){
        up ();
        console.log("up")
    }
    if (keydooown==39){
        right ();
        console.log("right")
    }
    if (keydooown==37){
        left ();
        console.log("left")
    }
}
function up(){
    if (posiciónrobotitoY>=0){
        posiciónrobotitoY=posiciónrobotitoY-20
        raeres()
        raeres1()
    }
}
function down(){
    if (posiciónrobotitoY<=700){
        posiciónrobotitoY=posiciónrobotitoY+20
        raeres()
        raeres1()
    }
}
function right(){
    if (posiciónrobotitoX<=900){
        posiciónrobotitoX=posiciónrobotitoX+20
        raeres()
        raeres1()
    }
}
function left(){
    if (posiciónrobotitoX>=0){
        posiciónrobotitoX=posiciónrobotitoX-20
        raeres()
        raeres1()
    }
}