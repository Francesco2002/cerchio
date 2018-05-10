/* Area perimetro e diagonale del quadrato */
function Areacerchio(){
	var r=document.forms.circoferenza1.raggio.valueAsNumber;
	var cerchio = Math.pow(r,2) * Math.PI;
	document.getElementById("area").innerHTML="Area = " + cerchio;	
}
function Circoferenzacerchio(){
	var r =document.forms.circoferenza1.raggio.valueAsNumber;
	var circ = r * 2 * Math.PI ;
	document.getElementById("circoferenza").innerHTML="Circoferenza = " + circ;
}
function cancella(){
document.getElementById("circoferenza").innerHTML=" ";
document.getElementById("area").innerHTML=" ";
}
