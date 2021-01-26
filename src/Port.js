class Port {
    constructor(name) {
        this.name = name;
        this.ships = [];
    };
    addShip(ships) {
        this.ships.push(ships);
    };
    removeShip(ship) {
        this.ships.pop(ship)
    };
};

module.exports = Port;