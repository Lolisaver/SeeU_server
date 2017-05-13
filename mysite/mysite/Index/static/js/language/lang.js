function updatelanguage(lang) {
    switch(lang)
    {
        case 1:
        myLangArray=L_Taiwan;
        break;
        case 2:
        myLangArray=L_English;
        break;
        default:
        myLangArray=L_Taiwan;
        break;
    }  
    document.getElementById("index_0").innerHTML = myLangArray[0];
    document.getElementById("index_1").innerHTML = myLangArray[1];
    document.getElementById("index_2").innerHTML = myLangArray[2];
    document.getElementById("index_3").innerHTML = myLangArray[3];
    document.getElementById("index_4").innerHTML = myLangArray[4];
    document.getElementById("index_5").innerHTML = myLangArray[5];
    document.getElementById("index_6").innerHTML = myLangArray[6];
    document.getElementById("index_7").innerHTML = myLangArray[7];
    document.getElementById("index_8").innerHTML = myLangArray[8];
    document.getElementById("index_9").innerHTML = myLangArray[9];
}