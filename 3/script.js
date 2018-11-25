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
    $("#tekstoKeitimas").text("Rodyti slapta teksta");
    $("#tekstoKeitimas").css('background-color','blue');
    }
    else{
        $("#tekstoKeitimas").text("Slepti slapta teksta");
        $("#tekstoKeitimas").css('background-color','green');
        $("#hideIt").show();
    }
}

function naikink(){
    var para = document.getElementById("paragrafas").value;
    para = "." + para
    console.log(para);
    $( para ).remove();
}

function prideti(){
    var text = document.getElementById("paragrafas").value;
    text = "<p>" + text + "</p>"
    $(".naikinti").append(text);
}

function serializer(){
    var formData = $("form.login").serializeObject();
    console.log(formData);
}