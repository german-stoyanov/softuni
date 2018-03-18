function solution (object) {
    const validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    const uriRegex = /^([A-Za-z0-9.]+)$/g;
    const messageRegex = /^[^<>\\&'"]+$/g;
    if((!object.hasOwnProperty('method'))||(!validMethods.includes(object.method))){
        throw new Error('Invalid request header: Invalid Method');
    }
    if((!object.hasOwnProperty('uri'))||(!uriRegex.test(object.uri))){
        throw new Error('Invalid request header: Invalid URI');
    }
    if((!object.hasOwnProperty('version'))||(!validVersions.includes(object.version))){
        throw new Error('Invalid request header: Invalid Version');
    }
    if(((!object.hasOwnProperty('message'))||(!messageRegex.test(object.message)))&&object.message!==''){
        throw new Error('Invalid request header: Invalid Message');
    }

    return object;
}
solution({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
});


