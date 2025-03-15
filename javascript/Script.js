function clr(){
    document.getElementById("result").value = ""; // Clear function
}

function display(val){
    document.getElementById("result").value+=val; // val = val + val
}

function equate(){
    let x = document.getElementById("result").value; 
    let y = eval(x); // Result will be stored
    document.getElementById("result").value = y;
}