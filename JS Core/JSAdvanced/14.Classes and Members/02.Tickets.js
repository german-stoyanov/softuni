function solution(info=[],criteria) {
    let fligths = []
    class Ticket{
        constructor(args){
            this.destination = args[0];
            this.price = Number(args[1]);
            this.status = args[2];
        }

    }
    info.forEach(fligth => {
        fligths.push(new Ticket(fligth.split('|')));
    })
    switch (criteria) {
        case 'destination':
           return fligths.sort((a, b) => a.destination.localeCompare(b.destination));
            break;
        case 'price':
            return fligths.sort((a, b) => a.price - b.price);
            break;
        case 'status':
            return fligths.sort((a, b) => a.status.localeCompare(b.status));
            break;
    }


}

console.log(solution(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|available',
        'Philadelphia|132.20|departed',
        'Chicago|140.20|available',
        'Dallas|144.60|sold',
        'New York City|206.20|sold',
        'New York City|240.20|departed',
        'New York City|305.20|departed'],
    'destination'
));