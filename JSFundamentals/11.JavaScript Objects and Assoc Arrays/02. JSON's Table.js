function solution (jsonObject=[]) {
    let html = '<table>\n';
    jsonObject.forEach(line=>{
        html+='<tr>\n';
        let obj = JSON.parse(line);
        let name = obj['name'];
        html+=`<td>${name}</td>\n`;
        let position = obj['position'];
        html+=`<td>${position}</td>\n`;
        let salary = obj['salary'];
        html+=`<td>${salary}</td>\n`;
        html+='<tr>\n'
    })
    html+='</table>';
    console.log(html)



}
solution([ '{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}' ])