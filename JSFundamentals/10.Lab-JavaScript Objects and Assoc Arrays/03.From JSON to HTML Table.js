function solution (strArray) {
    let arr = JSON.parse(strArray);
    let html = `<table>\n`;
    let keys = Object.keys(arr[0]);
    html+=`\t<tr>`;
        for(let i = 0;i<keys.length;i++){
            html+=`<th>${keys[i]}</th>`
        }
    html+=`</tr>\n`;
    for (let obj of arr) {
        html+=`\t<tr>`
        for(let i = 0;i<keys.length;i++){
            html+=`<td>${escape(obj[keys[i]])}</td>`
        }

        html+=`</tr>\n`;
    }
    html+=`</table>\n`;
    console.log(html)
    function escape (str) {
        if(!Number(str)) {
            return str.replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
                .replace(/"/g, '&quot;')
                .replace(/'/g, '&#39;');
        }
        else{
            return str
        }
    }
}
solution('[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]')