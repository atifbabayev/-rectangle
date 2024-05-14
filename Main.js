 const a = document.getElementById('en');
 const b = document.getElementById('uzun');
 document.getElementById("Square")
 console.log(a);

 function Sahe(){
    let c=a.value*b.value;
    document.getElementById('Square').innerHTML = "<h1>" + c + "</h1>";
 }


 function Perimetr(){
    let d=2*(Number(a.value)+Number(b.value));
    document.getElementById('Square').innerHTML = "<h1>" + d + "</h1>"; }


