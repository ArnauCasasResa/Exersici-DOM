function estiljs(){
    document.getElementById("text").style.color = "yellow";
}
function prenValorForm(){
    let inputs = document.getElementsByName("input")
    let nom = inputs[0].value;
    let cognom = inputs[1].value;
    console.log(nom+ " "+cognom);
}