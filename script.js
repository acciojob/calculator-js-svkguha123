//your JS code here. If required.
function backspace(){
    let myinput = document.getElementById("display").value;
    let ans = myinput.substring(0,myinput.length-1);
    console.log(ans);
    document.getElementById("display").value = ans;
}