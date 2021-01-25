const Ship = require("../src/cruise-ships");
const Port = require("../src/cruise-ships");

describe("constructor", () => {
    let port;
    let ship;
    beforeEach(()=> {
        port = new Port("Dover");
        ship = new Ship(port);
    });

    describe("Ship", () => {
        it("can be instantiated", () => {
            expect(new Ship()).toBeInstanceOf(Object);
        });

        it("has a starting port", () => {
            expect(ship.currentPort).toBe(port);
        });

        it("can set sail", () => {
            expect(ship.setSail("Dunkirk")).toBeFalsy();
        });

        it("can dock at different port", () => {
           const calais = new Port("Calais");
           ship.dock(calais);

           expect(ship.currentPort).toBe(calais)
        });
    });
});