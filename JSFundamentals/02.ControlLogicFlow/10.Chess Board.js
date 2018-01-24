function chessBoard (n) {
    let html = '<div class="chessboard">\n';
    let startingColor = '';
    for(let row=0; row<Number(n); row++){

        if(row % 2 === 0){
            startingColor = 'black';
        }
        else startingColor = 'white';
        html+='<div>\n';
        for(let j = 0;j<n;j++){

            html+= `<span class="${startingColor}"></span>\n`;
            if(startingColor==='black'){
                startingColor = 'white';
            }
            else startingColor = 'black';
        }
        html+='</div>\n';
    }
    html+='</div>';
    console.log(html);
}
chessBoard(3);
