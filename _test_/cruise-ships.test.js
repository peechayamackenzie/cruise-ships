const Ship = require("../src/cruise-ships");
const Port = require("../src/Port");
const Itinerary = require("../src/Itinerary");

describe("constructor", () => {
    let dover;
    let calais;
    let itinerary;
    let ship;
    beforeEach(()=> {
        dover = new Port('Dover');
        calais = new Port('Calais');
        itinerary = new Itinerary([dover, calais]);
        ship = new Ship(itinerary);
    });

    describe("Ship", () => {
        it("can be instantiated", () => {
            expect(ship).toBeInstanceOf(Object);
        });

        it("has a starting port", () => {
            const port = new Port('Dover');
            const itinerary = new Itinerary([port]);
            const ship = new Ship(itinerary);

            expect(ship.currentPort).toBe(port);
        });

        it("can set sail", () => {
            ship.setSail();

            expect(ship.currentPort).toBeFalsy();
        });

        it("can dock at different port", () => {
            ship.setSail();
            ship.dock();

           expect(ship.currentPort).toBe(calais)
        });

        it("can't sail further than its itinerary", () => {
            ship.setSail();
            ship.dock();
          
            expect(() => ship.setSail()).toThrowError("End of itinerary reached");
          });
    });
});