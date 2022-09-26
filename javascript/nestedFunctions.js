//PS:1 find the total marks of 3 subjects

function averageMarks(html, css, js) {
    let a=20;
    function totalMarks() {
        return (html + css + js + a);
    }
    return totalMarks();
}
let avgMarks = averageMarks(20, 25, 23);
console.log(avgMarks);
