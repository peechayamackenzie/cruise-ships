class Ship {
    constructor(port) {
        this.noOfPassengers = 0;
        this.currentPort = port;
    };
    setSail(location) {
        this.currentPort !== location;
    };
    dock(port) {
        this.currentPort = port
    };

};


module.exports = Ship;