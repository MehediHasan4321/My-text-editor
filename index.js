// All References .....
const textArea = document.getElementById("text-area");


//All Event Lestenter......
document.getElementById("bold").addEventListener("click",()=>{
    textArea.style.color = "red"
})
document.getElementById("italic").addEventListener("click",()=>{
    textArea.style.fontStyle = "italic"
})
document.getElementById("underline").addEventListener("click",()=>{
    textArea.style.textDecoration="underline"
})
document.getElementById("left-align").addEventListener("click",()=>{
    textArea.style.textAlign = "left"
})
document.getElementById("center-align").addEventListener("click",()=>{
    textArea.style.textAlign = "center";
})
document.getElementById("justify-align").addEventListener("click",()=>{
    textArea.style.textAlign = "justify";
})
document.getElementById("right-align").addEventListener("click",()=>{
    textArea.style.textAlign="right"
})
document.getElementById("font-size-inp").addEventListener("change",()=>{
    let value = document.getElementById("font-size-inp").value;
    textArea.style.fontSize = value+"px";
})
document.getElementById("color-inp").addEventListener("change",()=>{
    let color= document.getElementById("color-inp").value
    textArea.style.color= color
})