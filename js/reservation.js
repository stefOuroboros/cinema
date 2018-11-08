function printPrixTicket(i) {
    var tarif = $("#selectTarif" + i + "");
    var prix = tarif.val();
    $("#prixTicket" + i + "").val(prix);
    return prix;
}

function printTotalSelect(i) {
    var prix = printPrixTicket(i);
    var qte = $("#places" + i + "").val();
    var total = parseFloat(prix) * parseFloat(qte);
    $("#total" + i + "").val(total);
    return total;
}

function htmlReservation() {

    let i = $(".ligne").length;
    i++;

    var html =
        "<div class=\"col-lg-8 mx-auto d-flex mod ligne\">" +
        "<select class=\"custom-select mb-1\" name=\"selectTarif\" id=\"selectTarif" + i + "\" onchange=\"printPrixTicket(" + i + ") + printTotalSelect(" + i + ") + totalDesToto()\">" +
        "<option selected>Sélectionner un tarif...</option>" +
        "<option value=\"12\">Plein tarif</option>" +
        "<option value=\"8\">Tarif étudiant -26 ans</option>" +
        "<option value=\"5\">Tarif -12ans</option>" +
        "</select>" +
        "<input type=\"number\" id =\"prixTicket" + i + "\" disabled=\"disabled\">" +
        "<label for=\"places\">  Quantité : </label>" +
        "<input type=\"number\" name=\"places\" class=\"mb-1\"id=\"places" + i + "\" value=\"1\" onchange=\"printTotalSelect(" + i + ") + totalDesToto()\">" +
        "<input class=\"mb-1 total\" id=\"total" + i + "\" type=\"number\" disabled=\"disabled\">" +
        "<input class=\"mb-1\"id=\"totaux\" type=\"number\"disabled=\"disabled\">" +
        "</div>";
    return html;
}

function addCategorie() {
    $(".row.cc").append(htmlReservation());
}

function totalDesToto() {
    var toto = $(".total");
    var itotal = 0;
    for (i = 0; i < toto.length; i++) {
        itotal += parseFloat($("#total" + i + "").val());
    }
    $("#totaux").val(itotal);    
    return itotal;
}