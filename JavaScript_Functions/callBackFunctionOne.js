// Callback Functions

function doWork(myFunctionRef){
    // Function body here ...
    myFunctionRef();  // call the callBack function
}

function callBackFunction(){
    // Function body here ...
}

doWork(callBackFunction);  // pass reference of callBackFunction to doWork
