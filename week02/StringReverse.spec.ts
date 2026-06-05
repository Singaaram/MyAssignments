//reverse the string
let str = "racecar";
let chr = str.split("");
let resultArr = [];

    for (let index = 0; index < chr.length; index++) {
        resultArr.push(chr[index]);
    }
let result = resultArr.join(""); 
console.log(result);

//check the given string is a palindrome

let stringName ="racecar"
let char = stringName.split("").reverse().join("")
console.log(char)
if (char===stringName) {
     console.log("it is a palindrome")
}else{
    console.log("not a palindrome")
}


