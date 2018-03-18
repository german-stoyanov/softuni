function createMixins() {
    function computerQualityMixin(classToExtend) {
        classToExtend.prototype.getQuality = function () {
            return (Number(this.processorSpeed)+Number(this.ram)+Number(this.hardDiskSpace))/3;
        }
        classToExtend.prototype.isFast = function () {
            return Number(this.processorSpeed) > (Number(this.ram) / 4);
        };
        classToExtend.prototype.isRoomy = function () {
            return Number(this.hardDiskSpace) > Math.floor(this.ram * this.processorSpeed);
        };

    }
    function styleMixin(classToExtend) {
        classToExtend.prototype.isFullSet = function () {
            if (this.manufacturer === this.keyboard.manufacturer) {
                if (this.manufacturer === this.monitor.manufacturer) {
                    return true;
                }
            }

            return false;
        };

        classToExtend.prototype.isClassy = function () {
            const colors = ['Black', 'Silver'];
            if (this.expectedLife < 3) return false;
            if (this.weight > 3) return false;
            return colors.includes(this.color);
        };
    }
    return {
        computerQualityMixin,
        styleMixin
    }
}
