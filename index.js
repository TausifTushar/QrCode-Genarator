async function qrCode(){
   
    // console.log("Hello World")

   const innerValue= document.getElementById('widthInput').value
   console.log(innerValue)

   const innerHeight = document.getElementById('heightInput').value
   console.log(innerHeight)
   const innerQrcODE = document.getElementById('innerText').value


  //  fetch(`https://api.qrserver.com/v1/create-qr-code/?size=${innerValue}x${innerHeight}&data=${text}`)
  //    .then(res =>res.json())
  //    .then(data =>console.log(data))

  const qqqq = document.getElementById('qr-code-image')
  qqqq.innerHTML = `<img src="https://api.qrserver.com/v1/create-qr-code/?size=${innerValue}x${innerHeight}&data=${innerQrcODE}" alt="" srcset="">`
  
    
    
} 