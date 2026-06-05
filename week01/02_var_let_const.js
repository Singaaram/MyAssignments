const browserVersion = "Chrome"

getBrowserVersionwithVar()

getBrowserVersionwithLet()

//with Var
function getBrowserVersionwithVar(){ 
if (true) { 
    var browserVersion = "Chrome 2.0"
    console.log("Inside function:", browserVersion) 
}
console.log("Outside function:", browserVersion) 
}

//with Let
function getBrowserVersionwithLet(){ 
if (true) { 
    let browserVersion = "Chrome 3.0"
    console.log("Inside function:", browserVersion) 
}
console.log("Outside function:", browserVersion) 

}



