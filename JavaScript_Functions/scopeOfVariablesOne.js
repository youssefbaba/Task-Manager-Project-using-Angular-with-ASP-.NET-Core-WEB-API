let globalVariableOne;  // global variable whish is available everywhere in the entire program
var globalVariableTwo; // global variable whish is availabale everywhere in the entire grogram

function DoWork(parameter)  // parameter is local variable whish is available within the same function only
{
    let localVariableOne;  // local variable whish is available within the same function only
    var localVariableTwo;  // local variable whish is available within the same function only

    if (blockVariabale) {   // blockVaribale is block variable whish is available within the same block only
        
        var localVariableThree;  // local variable whish is available within the same function only
        let blockVariable;  // block variable whish is available within the same block only
    }

}