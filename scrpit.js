function swap(){
    let btn = document.getElementById("sp");
    document.getElementById("output").innerHTML ="Hello"
    let sty= document.getElementById("output").innerHTML
    sty.style = "styled";
 
}

window.onload = ()=> {
    document.getElementById("sp").onclick = swap;
};