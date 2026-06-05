function gradecalc(){
    let score = 23

  switch (true) {
    case (score>=90):
        console.log(score, "Grade A")
        break
    case (score>=70 && score<=89):
        console.log(score, "Grade B")    
        break
    case (score>=40 && score<=69):
        console.log(score, "Grade C")    
        break
    default:
        console.log(score, "Grade F")
        break
}
}
gradecalc()
