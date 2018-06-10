module.exports = {
    viewAll: (id, url) => `
        <div class="meme">
            <a href="/memes/getDetails?id=${id}">
                <img class="memePoster" src="${url}"/> 
            </a>         
        </div>`,
    genreOption: (id, title) => 
        `<option value="${id}">${title}</option>`,
    details: (url, title, description, id) => `
        <div class="content">
            <img src="${url}" alt=""/>
            <h3>Title  ${title}</h3>
            <p> ${description}</p>
            <button>
                <a href="${url}" download="${title}.jpg" >Download Meme</a>
            </button>
            <button>
                <span id="delete" data-meme-id=${id}>Delete</span>
            </button>
        </div>`,
    detailsLink: (id, url) => `
        <div class="meme">
            <a href="/memes/getDetails?id=${id}">
            <img class="memePoster" src="${url}"/>          
        </div>`
};