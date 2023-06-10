const ImgBOx = document.getElementById("ImgBox");
const QRimage = document.getElementById("QRimage");
const QRtext = document.getElementById("QRtext");

const generateQR = () => {
  if(QRtext.value.length > 0){
    QRimage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + QRtext.value;
  ImgBox.classList.add("show-img");
  }else{
    QRtext.classList.add("error");
    setTimeout(() => {
    QRtext.classList.remove("error");
    }, 1000)
  }
}