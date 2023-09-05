const first=document.querySelector(".first"),
generateQR= document.querySelector(".form button"),
inputbox=document.querySelector(".form input"),
qrImg=first.querySelector(".img img");

generateQR.addEventListener("click",()=>{
    let val1=inputbox.value;
    if(!val1)return;
    generateQR.innerText="Generating QR Code....";

    qrImg.src=`https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${val1}`;
    qrImg.addEventListener("load",()=>{
        first.classList.add("active");
        generateQR.innerText="Generate QR Code";

    })
});
inputbox.addEventListener("keyup",()=>{
    if(!inputbox.value){
        first.classList.remove("active");

    }
     
});