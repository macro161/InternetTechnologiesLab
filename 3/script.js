function emptyField(){

}

function validate()
{
    if(validateEmpty() == false || validateNumber() == false){
        window.alert("Viskasi bliogai");
        return false;
    };
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
    $("#hideIt").hide();}
    else{
        $("#hideIt").show();
    }
}