let testScore = 59;
let letterGrade;

switch(true){
    case testScore >= 95:
        letterGrade = 'A+'
        break
    case testScore >= 90:
        letterGrade = 'A-'
        break
    case testScore >= 85:
        letterGrade = 'B+'
        break
    case testScore >= 80:
        letterGrade = 'B-'
        break
    case testScore >= 75:
        letterGrade = 'C+'
            break
    case testScore >= 70:
        letterGrade = 'C-'
        break
    case testScore >= 65:
        letterGrade = 'D+'
        break
    case testScore >= 60:
        letterGrade = 'D-'
        break
    default:
        letterGrade = 'F'
}

console.log(letterGrade)