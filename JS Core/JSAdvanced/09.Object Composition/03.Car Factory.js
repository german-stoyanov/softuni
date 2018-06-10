function solution (requirements) {
    let model = requirements.model
    let color = requirements.color;
    let power = requirements.power;
    let carriage = requirements.carriage;
    let wheels = requirements.wheelsize;
    let finalCar = {};
    finalCar['model'] = model;
    finalCar['engine'] = {};
    if(power<=90){
        finalCar['engine']['power']=90;
        finalCar['engine']['volume'] = 1800;
    }
    else if(power<=120){
        finalCar['engine']['power']=120;
        finalCar['engine']['volume'] = 2400;
    }
    else{
        finalCar['engine']['power']=200;
        finalCar['engine']['volume'] = 3500;
    }
    finalCar['carriage'] = {}
    finalCar['carriage']['type'] = carriage;
    finalCar['carriage']['color'] = color;
    wheels = Math.floor(wheels);
    if(wheels%2===0){
        wheels = wheels-1
    }
    finalCar['wheels'] =[wheels,wheels,wheels,wheels]
    return finalCar
}
solution({ model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17 }
)