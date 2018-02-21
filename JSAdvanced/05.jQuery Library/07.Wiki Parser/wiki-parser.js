function wikiParser(selector) {
    let patternForBold = /'{3}(.+?)'{3}/g;
    let patternForItalic =  /'{2}(.+?)'{2}/g;
    let patternForh1 = /={1}(.+?)={1}/g;
    let patternForh2 = /={2}(.+?)={2}/g;
    let patternForh3 = /={3}(.+?)={3}/g;
    let patternForHiperLink  = /\[\[([^\|\[]+?)\]\]/g;
    let patternForHiperLinkWithSpecificName = /\[\[([^[\|]+?)\|([^\|]+?)\]\]/g;
    let textInsideWiki = $('#wiki').toArray()[0].textContent;


    textInsideWiki = textInsideWiki.replace(patternForBold,function (match,group1) {
        return `<b>${group1}</b>`
    })
    textInsideWiki = textInsideWiki.replace(patternForItalic,function (match,group1) {
        return `<i>${group1}</i>`
    })
    textInsideWiki = textInsideWiki.replace(patternForh3,function (match,group1) {
        return `<h3>${group1}</h3>`
    })
    textInsideWiki = textInsideWiki.replace(patternForh2,function (match,group1) {
        return `<h2>${group1}</h2>`
    })
    textInsideWiki = textInsideWiki.replace(patternForh1,function (match,group1) {
        return `<h1>${group1}</h1>`
    })
    textInsideWiki = textInsideWiki.replace(patternForHiperLink,function (match,group1) {
        let link = `/wiki/${group1}`;
        let anchor = $(`<a>${group1}</a>`).attr("href", link);
        console.log(anchor[0]);
        return anchor[0].outerHTML;
    })
    textInsideWiki = textInsideWiki.replace(patternForHiperLinkWithSpecificName,function (match,group1,group2) {
        let link = `/wiki/${group1}`;
        let anchor = $(`<a>${group2}</a>`).attr("href", link);
        console.log(anchor[0]);
        return anchor[0].outerHTML;
    })
    $(selector).html(textInsideWiki)
}
