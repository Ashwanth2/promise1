

var req = fetch('https://api-thirukkural.vercel.app/api?num=1')
.then((res)=>res.json())
.then((data)=> data.line1,data.line2)
console.log(data.line1,data.line2)

function printMessage(a,b) {
   document.getElementById('output').innerHTML= a,b
}

function printMessage(){        
    var req = fetch("https://api-thirukkural.vercel.app/api?num=1")
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            document.getElementById("output").innerHTML =data.line1 + data.line2
        })  }