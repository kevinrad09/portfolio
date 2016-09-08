/*
To use this function, pass in the entire text string from your calculator
    ex: var result = calculate(textStringHere);
It will return the math result for you to display
*/
function calculate(input){
    var result = "";
    try{
        input = input.replace(" ", "").replace("--", "+");
        result = eval(input).toString();
        var decimalPos = result.indexOf(".");
        if (decimalPos > 0 && result.length > 11){
            result = result.substring(0, decimalPos);
        }else if (decimalPos > 0 ){
            result = result.substring(0, decimalPos) + result.substring(decimalPos, 11-decimalPos);
        }
    }catch(e){
        console.log(e);
        result = "ERROR";
    }
    return result;
}

/*
1. On click of any of the .calculatorNumber or .calculatorOperator buttons you need to check if the current #calcText span's text is equal to 0.
    If the text is equal to 0, set the text equal to JUST the clicked button's text.
    If the text is NOT equal to 0, add the clicked button's text to the display after the current text.
2. on click of the .calculatorClear button you should set the #calcText span's text to 0.
3. On click of the .calculatorEquals button should call the calculate function as described above the function and display the returned result
*/


$(".calculatorNumber, .calculatorOperator").click(function(){
    var clicked = $(this).text();
    if ( $("#calcText").text() == "0"){
        $("#calcText").text(clicked);
    } else {
        var currentText = $("#calcText").text();
        var newText = currentText + clicked
        $("#calcText").text(newText);
    }
});

$(".calculatorClear").click(function(){
    $("#calcText").text(0);
    
});

$(".calculatorEquals").click(function(){
    var result = calculate( $("calcText").text() );
    $("#calcText").text(result);
});



