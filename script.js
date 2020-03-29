function pridejPrispevek(){
    var close_btn = document.createElement("button");
    close_btn.className = "close";
    document.getElementsByClassName("container-sm")[0].appendChild(close_btn);   
    var row = document.createElement("div");
    row.className = "row no-gutters"
    document.getElementsByClassName("container-sm")[0].appendChild(row);  
    var h2 = document.createElement("h2");
    h2.className = "col-12 col-sm-6 col-md-5";
    h2.innerHTML = "Nadpis příspěvku";
    document.getElementsByClassName("row no-gutters")[3].appendChild(h2);   
    var h3 = document.createElement("h3");
    h3.className = "col-6 col-md-4";
    h3.innerHTML = "Datum vložení DD:MM:yyyy";
    document.getElementsByClassName("row no-gutters")[3].appendChild(h3);
    var obsah_prispevku = document.createElement("div");
    obsah_prispevku.className = "obsah_prispevku";
    document.getElementsByClassName("container-sm")[0].appendChild(obsah_prispevku);
    var text = document.createElement("p");
    text.className = "text_prispevku";
    text.innerHTML = "Text příspěvku, fotka";
    document.getElementsByClassName("obsah_prispevku")[2].appendChild(text);
    
           // bude vytvořen fori abych měnil čísla jednotlivých tříd
}
function odeberPrispevek(){

}                          
