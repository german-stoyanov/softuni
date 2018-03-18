class sortedList{
    constructor(){
        this.size = 0;
        this.list = []
    }


    add(element) {
        this.list.push(element)
        this.size++;
        this.list = this.list.sort((a,b)=>a-b)

    }
    remove(index) {
        if(index>=0&&index<=this.list.length-1){
            this.list.splice(index,1)

            this.size--;
        }

    }
    get(index) {
        if(index>=0&&index<=this.list.length-1){
            return Number(this.list.filter((e,i)=>i===index))
        }
    }

}

