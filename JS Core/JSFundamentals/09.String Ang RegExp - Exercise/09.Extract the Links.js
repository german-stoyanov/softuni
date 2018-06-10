function solution (input=[]) {
    let pattern = /www\.[A-Za-z0-9-]+\.([a-zA-Z]+\.)*([a-zA-Z]+)/g;
    input.forEach(x=>{
        let matches = x.match(pattern);
        if(matches) {
            for (let i = 0; i < matches.length; i++) {
                console.log(matches[i])
            }
        }

    })
}
solution(['Need information about cheap hotels in London?',
  '  You can check us at www.london-hotels.co.uk!',
   ' We provide the best services in London.',
   ' Here are some reviews in some blogs:',
   ' "London Hotels are awesome!" - www.indigo.bloggers.com',
'"I am very satisfied with their services" - ww.ivan.bg',
'"Best Hotel Services!" - www.rebel21.sedecrem.moc'
])