
function MyAlert(){
	var x=document.getElementById("sun").value;
	var y=document.getElementById("spw").value;
	if(x==""||y==""){
		alert("Please enter valid username or password");
		return false;
	}
	else{
		alert("Your response is submitted");
		return true;
	}		
}
//The "confirm" is referred to w3schools:https://www.w3schools.com/jsref/met_win_confirm.asp and edit to work in this project//
//The "window.open" is referred to w3schools:https://www.w3schools.com/jsref/met_win_open.asp and edit to work in this project//
function membership(){
	if(confirm("This will take you yo sign up membership")==true){
		window.open("membership.html");
	}		
}
//The "disabled" is referred to w3chools:https://stackoverflow.com/questions/21523730/html-checkbox-submit-button-by-agreeing-on-terms-and-condition and edit to work in this project//
function disableSubmit(){
	document.getElementById("validation").disabled = true;
}
//The "!(/[0-9]/.test(ch)" is referred to JavaScript in Plain Englishhttps://javascript.plainenglish.io/how-to-restrict-html-text-input-to-only-allow-numbers-6b96ca3869f6 and edit to work in this project//
//The "String.fromCharCode" is referred to w3schools:https://www.w3schools.com/jsref/jsref_fromcharcode.asp and edit to work in this project//
//The "evt.which" is referred to w3schools:https://www.w3schools.com/jsref/event_key_which.asp and edit to work in this project//
//The "evt.preventDefault" is referred to w3schools:https://www.w3schools.com/jsref/event_preventdefault.asp#gsc.tab=0 and edit to work in this project//
function onlydigit(evt){
	var ch=String.fromCharCode(evt.which);
	if(!(/[0-9]/.test(ch))){
		evt.preventDefault();
	}
}
//The "element.checked" is referred to w3chools:https://www.w3schools.com/jsref/prop_checkbox_checked.asp and stackoverflow:https://stackoverflow.com/questions/21523730/html-checkbox-submit-button-by-agreeing-on-terms-and-condition and edit to work in this project//
function aB(element){
	if(element.checked) {
        document.getElementById("validation").disabled = false;
    }
    else  {
        document.getElementById("validation").disabled = true;
	}
}

 function wrong_alert() {
	var mn = document.getElementById("Mn").value;
	var len = mn.length;	
	let em = document.getElementById("Em").value;

	if(document.getElementById("Un").value==""){
        alert("Please enter yout name");
		return false;
    }
	else if(document.getElementById("pw").value==""){
        alert("Please set your password");
		return false;
    }
	else if(document.getElementById("pw").value != document.getElementById("conpw").value){
        alert("Please enter same password in confirm password");
		return false;
    }
	else if(mn[0]!=0){
        alert("Please enter 10-digits phone number like 0-XXXXXXXXX");
		return false;
    }
	//The "test(em)" is referred to youtube:https://www.youtube.com/watch?v=nRHCoOVSu5k and edit to work in this project//
	else if (/^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/.test(em)==false){
		alert("Please enter email like abc@xxx.com");
		return false;
	}	
	else{
        alert("Your response is submitted");
    }		
}

//Drop down menu action by Ashley Staggs, found in https://stackoverflow.com/questions/6192446/javascript-dropdown-action and eddited to work in this proyect
function display_div(show){
      document.getElementById('Our Little Sister').style.display = "none";
      document.getElementById('The handmaiden').style.display = "none";
      document.getElementById('Parasite').style.display = "none";
      document.getElementById(show).style.display = "block";
    }

function wrong_alert2() {
if(document.getElementById("optionList").value == "empty" ){
		alert ("please select a movie");	
}
else if(document.getElementById("cday").value == "empty" && document.getElementById("cday2").value == "empty" && document.getElementById("cday3").value == "empty" ){
		alert ("please select a day");	
}
else if(document.getElementById("chour").value == "empty" && document.getElementById("chour2").value == "empty" && document.getElementById("chour3").value == "empty" ){
		alert ("please select an hour");	
}
else if(document.getElementById("cseat").value == "empty" && document.getElementById("cseat2").value == "empty" && document.getElementById("cseat3").value == "empty" ){
		alert ("please select the number of seats");	
}
else{
alert ("Thank you, your reservation code has been sent to your email, show that number in the entrance, enjoy");
}	
} 
