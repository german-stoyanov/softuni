function solution (input = []) {
   input = input.filter(x=>x!=='')
    input = input.filter(x=>x!==' ')
    let courseName = input[input.length-1];
    let courseGrades = [];
    input.pop();
    input.forEach(line=>{
        let tokens = line.split(' ').filter(x=>x!=='');
        let course = tokens[1];
        let name = tokens[0];
        let points = Number(tokens[2]);
        let bonus = Number(tokens[3]);
        if(points>=100){
            let grade = (((0.2*points+bonus)/80)*4+2);
            if(grade>6){
                grade = 6.00
            }
            console.log(`${name}: Exam - "${course}"; Points - ${Math.round((0.2*points+bonus)*100)/100}; Grade - ${grade.toFixed(2)}`)
        }
        else{
            console.log(`${name} failed at "${course}"`)
        }
        if(course===courseName){
            courseGrades.push(points)
        }
    })
    let average = courseGrades.reduce((a,b)=>a+b)/courseGrades.length
    console.log(`"${courseName}" average points -> ${Math.round(average*100)/100}`)

}
solution([
    'murdjo nekuv-typ-kurs 100 0',
    'pisna-mi-da-pravq-testove za-taq-zada4a 400 15',
    'nekuv-typ-kurs',
    ''
])