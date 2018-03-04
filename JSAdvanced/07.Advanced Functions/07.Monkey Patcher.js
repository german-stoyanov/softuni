let result=(function () {

    return function (command) {
        let object = this;

        let commandFunctions = {
            'upvote':()=>{object.upvotes++},
            'downvote':()=>{object.downvotes++},
            'score':function () {
                let totalVotes = object.upvotes+object.downvotes;
                let reportedDownVote = object.downvotes;
                let reportedUpVote = object.upvotes;
                let graterValue = (object.upvotes>object.downvotes)?object.upvotes:object.downvotes;

                let status = 'new';
                if(totalVotes<10){
                    status = 'new';
                }
                else if(reportedUpVote-reportedDownVote<0){
                    status = 'unpopular'
                }
                else if(reportedUpVote/totalVotes>0.66){
                    status = 'hot'
                }
                else if(reportedUpVote-reportedDownVote>=0&&(reportedUpVote>100||reportedDownVote>100)){
                    status = 'controversial'
                }
                if(totalVotes>50){
                    reportedDownVote=reportedDownVote+Math.ceil(graterValue*0.25);
                    reportedUpVote = reportedUpVote+Math.ceil(graterValue*0.25)
                }
                let result = [reportedUpVote,reportedDownVote,reportedUpVote-reportedDownVote,status]
                return result
            }
        };


        return commandFunctions[command]()


    }
})();

