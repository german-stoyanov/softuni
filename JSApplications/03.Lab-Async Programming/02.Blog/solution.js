function attachEvents() {
    const usernameAndPassword = btoa('user:pass');
    const select = $('#posts');
    const postTitle = $('#post-title');
    const postBody = $('#post-body');
    const postComments = $('#post-comments');

    $('#btnLoadPosts').click(requestPosts);
    $('#btnViewPost').click(requestPostAndComments);

    function requestPosts() {
        $.ajax({
            method: "GET",
            url: 'https://baas.kinvey.com/appdata/kid_rJHU2z99f/posts',
            headers: {"Authorization": "Basic "+usernameAndPassword},
            success: displayOptions,
            error: handleError
        })
    }

    function requestPostAndComments() {
        let postId = $('option:selected').val();

        let postP = $.ajax({
            method: "GET",
            url: `https://baas.kinvey.com/appdata/kid_rJHU2z99f/posts/${postId}`,
            headers: {"Authorization": "Basic "+usernameAndPassword},
        });
        let commentsP = $.ajax({
            method: "GET",
            url: `https://baas.kinvey.com/appdata/kid_rJHU2z99f/comments/?query={"postId":"${postId}"}`,
            headers: {"Authorization": "Basic "+usernameAndPassword},
        });
        Promise.all([postP,commentsP])
            .then(handleTheData)
            .catch(handleError)

    }

    function handleTheData([post,comments]) {

        postTitle.text(post.title);
        postBody.text(post.body);
        for(let comment of comments){
            postComments.append($(`<li>${comment.text}</li>`))
        }


    }

    function displayOptions(data) {
        for(let post of data){
            select.append(`<option value="${post._id}">${post.title}</option>`)
        }
    }

    function handleError(reason) {
        console.log(reason)
    }
}