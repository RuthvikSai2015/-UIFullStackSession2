// function totalMarks(s1,s2,s3,s4,s5,s6){
//     var result;
//     result = s1+s2+s3+s4+s5+s6;
//     return result;
// }
// function averageMarks(s1,s2,s3,s4,s5,s6){
//     var result;
//     // result = (s1+s2+s3+s4+s5+s6)/6;
//     result = totalMarks(s1,s2,s3,s4,s5,s6)/6;
//     return result;
// }
// function gradeMarks(s1,s2,s3,s4,s5,s6){
//     var result,grade;
//     result = averageMarks(s1,s2,s3,s4,s5,s6);
//     if(result > 70)
//         grade = 'A Grade/Distinction'
//     else if(result<70 && result>60)
//         grade = 'B Grade'
//     else if(result<60 && result>50)
//        grade= 'C Grade'
//     else  
//       grade = 'D Grade/Fail';
//       console.log(grade);
// }
// gradeMarks(57,45,67,89,66,88);
// gradeMarks(37,45,57,69,56,48);
// gradeMarks(87,85,87,89,86,88);

function totalMarks(s1,s2,s3,s4,s5,s6){
    var result;
    result = s1+s2+s3+s4+s5+s6;
    console.log(result);
}
console.log(totalMarks(45,65,67,78,78,78));