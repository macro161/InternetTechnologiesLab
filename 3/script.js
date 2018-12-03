function emptyField(){

}

function validate()
{
    if(validateEmpty() == false || validateNumber() == false){
        window.alert("Viskas blogai");
        return false;
    };
    serializer();
    return true;
}

function validateEmpty()
{
    var nameValue = document.getElementById("nameField").value;
    var surnameValue = document.getElementById("surnameField").value;
    if((nameValue.length > 0) && (surnameValue.length > 0))
    {
        return true;
    }else{
        return false;
    }
}

function validateNumber()
{
    var numb = document.getElementById("randomNum").value;
    if(isNaN(numb) || numb[0] == 0 || numb < 0)
    {
        return false
    }
    return true;
}

function hiden(obj){
   if(obj.checked == true){
    $("#hideIt").hide();
    $("#tekstoKeitimas").text("Draudimo neturi");
    $("#tekstoKeitimas").css('background-color','blue');
    }
    else{
        $("#tekstoKeitimas").text("Draudima turi");
        $("#tekstoKeitimas").css('background-color','green');
        $("#hideIt").show();
    }
}

function naikink(){
    var para = document.getElementById("paragrafas").value;
    para = "." + para
    $( para ).remove();
}

function prideti(){
    var text = document.getElementById("paragrafas").value;
    text = "<p>" + text + "</p>"
    $(".naikinti").append(text);
}

function showValues() {
    var value = $( ":input" ).serializeArray();
    var data = JSON.stringify(value);
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
                $("#jsonSkyrius").html(data[6].value);
            });

        }
    });
}







