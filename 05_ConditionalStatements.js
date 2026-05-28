
function launchBrowser()
{
    let browserName = "Chrome"

if (browserName==="Chrome") {
    console.log("Chrome Browser")
}else{
   console.log("Other Browser") 
}

}
launchBrowser()


function runTests(){
    let testType = "unit"

  switch (testType) {
    case "smoke":
        console.log("Smoke testing")
        break
    case "sanity":
        console.log("Sanity testing")    
        break
        case "regression":
        console.log("Regression testing")    
        break
    default:
        console.log("Not applicable")
        break
}
}
runTests()


