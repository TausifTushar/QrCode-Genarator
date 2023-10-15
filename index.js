async function qrCode(){
   
    // console.log("Hello World")

   const innerValue= document.getElementById('widthInput').value
   console.log(innerValue)

   const innerHeight = document.getElementById('heightInput').value
   console.log(innerHeight)
   const text = document.getElementById('innerText').value
   console.log(text)

   const response = await fetch(`https://api.qrserver.com/v1/create-qr-code/?size=${innerValue}x${innerHeight}&data=${text}`);
  
  const movies = await response.json();
  console.log(movies)
    
}