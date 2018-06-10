class Request{
    constructor(mth,uri,vrs,msg){
        this.method = mth;
        this.uri = uri;
        this.version = vrs;
        this.message = msg;
        this.response = undefined;
        this.fulfilled = false;
    }
}