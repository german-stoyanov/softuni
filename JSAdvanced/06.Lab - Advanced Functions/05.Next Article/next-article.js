function getArticleGenerator(articles) {
    return (function () {
        let indexOfArticle = 0;
        return function () {
            if(indexOfArticle<=articles.length-1){
                $('#content').append($(`<article>${articles[indexOfArticle]}</article>`))
                indexOfArticle++
            }
        }
    })()
}