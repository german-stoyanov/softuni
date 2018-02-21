function timer() {
    let seconds=$('#seconds')[0];
    console.log(seconds)
    let minutes=$('#minutes')[0];
    let hours=$('#hours')[0];
    let myInterval;
    $('#start-timer').click(startTheTimer);
    $('#stop-timer').click(stopTheTimer);
    function startTheTimer() {
        if(!myInterval) {
            myInterval = setInterval(() => {
                if (Number(seconds.textContent) === 59) {
                    seconds.textContent = '00';
                    if (Number(minutes.textContent) === 59) {
                        minutes.textContent = '00';
                        hours.textContent = ('0' + `${(Number(hours.textContent)) + 1}`).slice(-2);
                    }
                    else {
                        minutes.textContent = ('0' + `${(Number(minutes.textContent)) + 1}`).slice(-2);
                    }
                }
                else {
                    console.log(Number(seconds.textContent))
                    console.log(seconds.textContent)
                    seconds.textContent = ('0' + `${(Number(seconds.textContent)) + 1}`).slice(-2);
                }


            }, 1000)
        }


    }
    function stopTheTimer() {
        clearInterval(myInterval)
        myInterval = null
    }
}