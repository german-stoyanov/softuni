function solution (input = []) {
    let html = `<ul>\n`;
    function escape (str) {

            return str.replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
                .replace(/"/g, '&quot;')
                .replace(/'/g, '&#39;');


    }

    for (let str of input) {
        html += `   <li>${escape(str)}</li>\n`
    }
    html+=`</ul>`
    console.log(html)
}