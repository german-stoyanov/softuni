function solution () {
    class Computer{
    constructor(manufacturer,processorSpeed,ram,hardDiskSpace){
        if (new.target === Computer) {
            throw new Error("Cannot be instantiated!");
        }

        this.manufacturer = manufacturer;
        this.processorSpeed = processorSpeed;
        this.ram = ram;
        this.hardDiskSpace = hardDiskSpace;
    }
}
class Laptop extends Computer{
    get battery() {
        return this._battery;
    }

    set battery(value) {
        if (value instanceof Battery === false) {
            throw new TypeError('error');
        }

        this._battery = value;
    }
    constructor(manufacturer, processorSpeed, ram, hardDiskSpace, weight, color, battery) {
        super(manufacturer, processorSpeed, ram, hardDiskSpace);
        this.weight = weight;
        this.color = color;
        this.battery = battery;
    }
}
class Desktop extends Computer{
    get keyboard() {
        return this._keyboard;
    }

    set keyboard(value) {
        if (value instanceof Keyboard === false) {
            throw new TypeError('error');
        }

        this._keyboard = value;
    }

    get monitor() {
        return this._monitor;
    }

    set monitor(value) {
        if (value instanceof Monitor === false) {
            throw new TypeError('error');
        }

        this._monitor = value;
    }
    constructor(manufacturer, processorSpeed, ram, hardDiskSpace, keyboard, monitor) {
        super(manufacturer, processorSpeed, ram, hardDiskSpace);
        this.keyboard = keyboard;
        this.monitor = monitor;
    }
}
class Battery{
    constructor(manufacturer, expectedLife){
        this.manufacturer = manufacturer;
        this.expectedLife = expectedLife
    }
}
class Monitor{
    constructor(manufacturer, width, height){
        this.manufacturer = manufacturer;
        this.width = width;
        this.height =height;
    }
}
class Keyboard{
    constructor(manufacturer, responseTime) {
        this.manufacturer = manufacturer;
        this.responseTime = Number(responseTime);
    }
}
return {
    Keyboard,
    Monitor,
    Battery,
    Computer,
    Laptop,
    Desktop
}
}
