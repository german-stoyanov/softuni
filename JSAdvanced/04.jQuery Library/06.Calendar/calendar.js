function calendar(input) {
    function daysInMonth (month, year) {
        return new Date(year, month, 0).getDate();
    }
    let months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

    let numberOfDays = daysInMonth(input[1],input[2]);
    console.log(numberOfDays);
    let parsedDate = new Date(input[2],input[1]-1,0);
    let dayOfWeek = parsedDate.getDay();
    console.log(dayOfWeek)
    $('<table>')
        .append(`<caption>${months[input[1]-1]} ${input[2]}</caption>`)
        .append($('<tr>')
            .append($('<th>Mon</th>'))
            .append($('<th>Tue</th>'))
            .append($('<th>Wed</th>'))
            .append($('<th>Thu</th>'))
            .append($('<th>Fri</th>'))
            .append($('<th>Sat</th>'))
            .append($('<th>Sun</th>')))
        .appendTo($('#content'));
    let week = dayOfWeek+1;
    dayOfWeek++;
    let numOfCurrentDay = 2-dayOfWeek;

    while(true){
        week=0;
        $('table')
            .append($('<tr>'));
        while(week<7){
            if(numOfCurrentDay===input[0]){
                $('tr:last-child')
                    .append($(`<td class="today">${numOfCurrentDay}</td>`));

            }
            else if(numOfCurrentDay>0&&numOfCurrentDay<=numberOfDays){
                $('tr:last-child')
                    .append($(`<td>${numOfCurrentDay}</td>`));

            }
            else{
                $('tr:last-child')
                    .append($(`<td></td>`));

            }
            numOfCurrentDay++
            week++

        }
        if(numOfCurrentDay>numberOfDays){
            return
        }
    }
}