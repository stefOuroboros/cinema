function printPrixTicket() {
    let tarif = $("#selectTarif");
    let prix = tarif.val();
    $("#prixTicket").val(prix);
    return prix;
}

function printTotalSelect() {
    let prix = printPrixTicket();
    let qte = $("#places").val();
    let total = parseFloat(prix) * parseFloat(qte);    
    $("#total").val(total);
    return total;
}

function addCategorie() {
    $("#total").appendTo("<input id=\"totaux\"type=\"number\"disabled=\"disabled\">")
}

