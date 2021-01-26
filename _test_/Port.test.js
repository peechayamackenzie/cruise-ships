//const Ship = require("../src/Ship");
const Port = require("../src/Port");

describe("constructor", () => {
    let port;
    let ship;
    beforeEach(()=> {
        port = new Port("Dover");
        ship = {}
    });

    describe("Port", () => {
        it("can be instantiated", () => {
            expect(new Port()).toBeInstanceOf(Object);
        });

        it("can add a ship", () => {
            port.addShip(ship);

            expect(port.ships).toContain(ship);
        });

        it("can remove a ship", () => {
            const titanic = {};
            const queenMary = {};
            
            port.addShip(titanic);
            port.addShip(queenMary);
            port.removeShip(queenMary);

            expect(port.ships).toEqual([titanic]);
        });
    
    });
});