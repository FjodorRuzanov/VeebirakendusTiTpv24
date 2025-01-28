function lugemine(){
    document.getElementById("vastus").innerHTML =
        "Tere hommikust, "+
        document.getElementById("nimi").value+
    ""+document.getElementById("perekonnanimi").value;

}

function lugemine2() {
    let nimi = document.getElementById("nimi").value;
    let perekonnanimi = document.getElementById("perekonnanimi").value;
    let vastus = document.getElementById("vastus");
    let varv = document.getElementById("varv");
    let post = document.getElementById("post").value;
    let tel=document.getElementById("tel").value;


    //radio-nupud
    let mees = document.getElementById("mees");
    let naine = document.getElementById("naine");
    let paev= document.getElementById("synnipaev").value;



    if (mees.checked) {


        vastus.innerHTML =
            "Tere hommikust, mees "+nimi+" "+ perekonnanimi +"!"+
        " Sinu sünnipäev on "+paev+
        "Sinu email:"+post+
        "Sinu telefon:"+tel;
        vastus.style.color = varv.value;



    }
    else if (mees.checked) {
        vastus.innerHTML =
            "Tere hommikust, naine "+ nimi +" "+ perekonnanimi +"!"+
            " Sinu sünnipäev on "+paev+
            "Sinu email:"+post+
            "Sinu telefon:"+tel;
        vastus.style.color = varv.value;



    }

}
