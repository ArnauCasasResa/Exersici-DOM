var gameOver = false;
function randomNum() {
    var random = Math.floor(Math.random() * 9999);
    random = random.toString().padStart(5, '0');
    console.log(random)
    return random;
    
}
var numerinRandom= randomNum()
document.addEventListener("DOMContentLoaded", function(){
    randomNumPartes = randomNum().split("");
    
});
var tries = 0;
function comprovacio() {
    if (!gameOver) {
        var myNum = document.getElementById("miNumero").value;
        if (/^\d{5}$/.test(myNum)) {
            let myNumPartes = myNum.split('');
            for (let i = 0; i < 5; i++) {
                setTimeout(function() {
                    const contenedores = document.createElement("div");
                    contenedores.className = "celdasNuevas";
                    contenedores.innerHTML = myNumPartes[i];
                    document.getElementById("creacionCeldas").appendChild(contenedores);
                    if (i === 0) {
                        document.getElementById("boton").setAttribute("disabled", "true");
                    }
                    if (i === 4) {
                        document.getElementById("boton").removeAttribute("disabled");
                    }
                    if (myNumPartes[i] === randomNumPartes[i]) {
                        contenedores.style.backgroundColor = "chartreuse";
                    } else {
                        for (let j = 0; j < 5; j++) {
                            if (myNumPartes[i] === randomNumPartes[j]) {
                                contenedores.style.backgroundColor = "gold";
                            }
                        }
                    }
                }, i);
            }
            tries++;
            if (myNumPartes.join("") === randomNumPartes.join("")) {
                gameOver = true;
                document.getElementById("mensaje").innerHTML = "YOU WIN";
                document.getElementById("miNumero").disabled = true;
                document.getElementById("asterisco1").innerHTML = randomNumPartes[0];
                document.getElementById("asterisco2").innerHTML = randomNumPartes[1];
                document.getElementById("asterisco3").innerHTML = randomNumPartes[2];
                document.getElementById("asterisco4").innerHTML = randomNumPartes[3];
                document.getElementById("asterisco5").innerHTML = randomNumPartes[4];
            } else {
                if (tries >= 5) {
                    gameOver = true;
                    document.getElementById("mensaje").innerHTML = "GAME OVER";
                    document.getElementById("miNumero").disabled = true;
                    document.getElementById("asterisco1").innerHTML = randomNumPartes[0];
                    document.getElementById("asterisco2").innerHTML = randomNumPartes[1];
                    document.getElementById("asterisco3").innerHTML = randomNumPartes[2];
                    document.getElementById("asterisco4").innerHTML = randomNumPartes[3];
                    document.getElementById("asterisco5").innerHTML = randomNumPartes[4];
                } else {
                    switch (tries) {
                        case 1:
                            document.getElementById("mensaje").innerHTML = "Te quedan 4 intentos.";
                            break;
                        case 2:
                            document.getElementById("mensaje").innerHTML = "Te quedan 3 intentos.";
                            break;
                        case 3:
                            document.getElementById("mensaje").innerHTML = "Te quedan 2 intentos.";
                            break;
                        case 4:
                            document.getElementById("mensaje").innerHTML = "Te queda 1 intento.";
                            break;
                    }
                }
            }
        } else {
            document.getElementById("mensaje").innerHTML = "Ingresa un número de 5 dígitos.";
        }
    }   
}
function reload() {
    window.location.reload();
}
