function emptyField() {

}

function validate() {
    if (validateEmpty() == false || validateNumber() == false || validateDate() == false) {
        window.alert("Viskas blogai");
        return false;
    };
    return true;
}

function validateDate(){
    var dateValue = document.getElementById("stayUntil").value;
    
    var datePat = /^(\d{2,2})(\/)(\d{2,2})\2(\d{4}|\d{4})$/;
    var matchPattern = dateValue.match(datePat);
    if(matchPattern == null){
        console.log("Bad date");
        return false;
    }
    console.log("Good format");

    month = matchPattern[1]; 
    day = matchPattern[3];
    year = matchPattern[4];

    if (month < 1 || month > 12) { // check month range
        console.log("Bad month");
        return false;
    }

    if (day < 1 || day > 31) {
        alert("Bad day");
        return false;
    }

    if ((month==4 || month==6 || month==9 || month==11) && day==31) {
        alert("Bad day in month")
        return false;
    }

    

    return true;
}

function validateEmpty() {
    var nameValue = document.getElementById("nameField").value;
    var surnameValue = document.getElementById("surnameField").value;
    if ((nameValue.length > 0) && (surnameValue.length > 0)) {
        return true;
    } else {
        return false;
    }
}

function validateNumber() {
    var numb = document.getElementById("randomNum").value;
    if (isNaN(numb) || numb[0] == 0 || numb < 0) {
        return false
    }
    return true;
}

function hiden(obj) {
    if (obj.checked == true) {
        $("#hideIt").hide();
        $("#tekstoKeitimas").text("Draudimo neturi");
        $("#tekstoKeitimas").css('background-color', 'blue');
    }
    else {
        $("#tekstoKeitimas").text("Draudima turi");
        $("#tekstoKeitimas").css('background-color', 'green');
        $("#hideIt").show();
    }
}

function naikink() {
    var para = document.getElementById("paragrafas").value;
    para = "." + para
    $(para).remove();
}

function prideti() {
    var text = document.getElementById("paragrafas").value;
    text = "<p>" + text + "</p>"
    $(".naikinti").append(text);
}

function showValues() {
    if (validate() == true) {
        var value = $(":input").serializeArray();
        var data = JSON.stringify(value);

        console.log(data);
        $.ajax({
            url: "https://api.myjson.com/bins",
            type: "POST",
            data: data,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data, textStatus, jqXHR) {
                $.get(data.uri, function (data, textStatus, jqXHR) {
                    var json = JSON.stringify(data);
                    $("#data").val(json);
                    $("#jsonVardas").html(data[0].value);
                    $("#jsonPavarde").html(data[1].value);
                    $("#jsonDate").html(data[2].value);
                    $("#jsonTlf").html(data[3].value);
                    $("#jsonEmail").html(data[4].value);
                    $("#jsonCode").html(data[5].value);
                    $("#jsonSkyrius").html(data[7].value);
                    $("#jsonStay").html(data[6].value);

                });

            }
        });
    }
}







