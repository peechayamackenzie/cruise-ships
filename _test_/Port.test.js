//const Ship = require("../src/Ship");
const Port = require("../src/Port");

describe("constructor", () => {
    let port;
    let ship;
    beforeEach(()=> {
        port = new Port(jest.fn());
        ship = jest.fn();
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
            const titanic = jest.fn();
            const queenMary = jest.fn();
            
            port.addShip(titanic);
            port.addShip(queenMary);
            port.removeShip(queenMary);

            expect(port.ships).toEqual([titanic]);
        });
    
    });
});