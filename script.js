  


let btn = document.querySelector(".buttonn");  
btn.addEventListener("click", () => {  
 let userinput = document.querySelector("#inputtext");  
 if (userinput.value != "") {  
  if (document.querySelector(".qr-code").childElementCount == 0) {  
   generate(userinput);  
  } else {  
   document.querySelector(".qr-code").innerHTML = "";  
   generate(userinput);  
  }  
 } else {  
  document.querySelector(".qr-code").style = "display: none";  
  console.log("not valid input");  
 }  
});  
function generate(userinput) {  
 document.querySelector(".qr-code").style = "";  
 var qrcode = new QRCode(document.querySelector(".qr-code"), {  
  text: `${userinput.value}`,  
  width: 180, //128  
  height: 180,  
  colorDark: "#000000",  
  colorLight: "#ffffff",  
  correctLevel: QRCode.CorrectLevel.H  
 });  
 console.log(qrcode);  
 let download = document.createElement("button");  
 document.querySelector(".qr-code").appendChild(download);  
 let download_link = document.createElement("a");  
 download_link.setAttribute("download", "qr_code.png");  
 download_link.innerText = "Download";  
 download.appendChild(download_link);  
 if (document.querySelector(".qr-code img").getAttribute("src") == null) {  
  setTimeout(() => {  
   download_link.setAttribute(  
    "href",  
    `${document.querySelector("canvas").toDataURL()}`  
   );  
  }, 300);  
 } else {  
  setTimeout(() => {  
   download_link.setAttribute(  
    "href",  
    `${document.querySelector(".qrcode img").getAttribute("src")}`  
   );  
  }, 300);  
 }  
}  