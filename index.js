
document.getElementById("coin-value2").disabled = true;

function choiceUpdate(){
    var e = document.getElementById("coin-value1").value;
    e = e.toLowerCase();
    document.querySelector(".img1").setAttribute("src", "./images/"+e+".jpg");
    if(e==="tail"){
        document.getElementById("coin-value2").value="Head";
    }
    else if(e==="head"){
        document.getElementById("coin-value2").value="Tail";
    }
    var evt = document.getElementById("coin-value2").value;
    evt = evt.toLowerCase();
    document.querySelector(".img2").setAttribute("src", "./images/"+evt+".jpg");
}

function coinToss(){
    var results = ["Head", "Tail"];
    var index = Math.floor(Math.random()*2);
    var output = results[index]; 
    var choice = document.getElementById("coin-value1").value;
    document.getElementById("result").textContent = "Toss Resulted in "+output+"s.";
    if(output===choice){
        document.querySelector("h2").textContent="🥳Player 1 Won";
    }
    else{
        document.querySelector("h2").textContent="Player 2 Won🥳";

    }
}
