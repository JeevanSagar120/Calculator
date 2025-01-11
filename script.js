// Password Visibility

let passField = document.getElementById("password");
document.getElementById("chkbtn").addEventListener("click",()=>{
    if(passField.type==="password"){
        passField.type="text";
    }else{
        passField.type="password";
    }
});


document.getElementById("btn").addEventListener("click", (event) => {
    event.preventDefault(); // Prevent form submission
    document.querySelector(".container1").style.display = "none";
    document.querySelector(".screen2").style.display="block";
});

var display = document.getElementById("display");
var dark=document.getElementById('dark');
var light=document.getElementById('light');
var darkspan=document.getElementById('darkmode');
var lightspan=document.getElementById('lightmode')

// Dark Mode of the calculator
function darkmode(){
    document.body.style.backgroundColor='black';
    darkspan.style.color='white';
    lightspan.style.color='white';
    display.style.color='white';
}
dark.addEventListener('input',function(){
    darkmode();
})

// Light Mode of The calculator
var display=document.getElementById('display');
function lightmode(){
    document.body.style.backgroundColor='white';
    darkspan.style.color='black';
    display.style.color='black';
    lightspan.style.color='black';
}
light.addEventListener('input',function(){
lightmode();
})