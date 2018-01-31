function solution (strArray) {
    let arr = JSON.parse(strArray);
    let html = `<table>\n`;
    let keys = Object.keys(arr[0]);
    html+=`\t<tr><th>${keys[0]}</th><th>${keys[1]}</th></tr>\n`;
    for (let obj of arr) {
        html+=`\t<tr><td>${escape(obj[keys[0]])}</td><td>${obj[keys[1]]}</td></tr>\n`;
    }
    html+=`</table>\n`;
    console.log(html)
    function escape (str) {

        return str.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');


    }
}
solution('[{"name":"Pesho & Gosho","score":479},{"name":"Gosho","score":205}]');