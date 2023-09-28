let imgBox = document.getElementById("imgBox");
let qrtext = document.getElementById("qrtext");

let qrimage = document.getElementById("qrimage");


function generateQR(){
    // qrtext.value = "sanju"
    if(qrtext.value.length >0){
qrimage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrtext.value ;
imgBox.classList.add("show-img") ;
}

}