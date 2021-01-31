const Ship = require("../src/Ship");
const Port = require("../src/Port");
const Itinerary = require("../src/Itinerary");

describe("constructor", () => {
    let port;
    let itinerary;
    let ship;
    beforeEach(()=> {
        port = new Port(jest.fn());
        itinerary = new Itinerary([port]);
        ship = new Ship(itinerary);
    });

    describe("Ship", () => {
        it("can be instantiated", () => {
            expect(ship).toBeInstanceOf(Object);
        });

        it("has a starting port", () => {
            expect(ship.currentPort).toBe(port);
        });
    });
});

describe("Ship", () => {
    let dover;
    let calais;
    let itinerary;
    let ship;
    beforeEach(()=> {
        dover = new Port(jest.fn());
        calais = new Port(jest.fn());
        itinerary = new Itinerary([dover, calais]);
        ship = new Ship(itinerary);
    });

    describe("Ship", () => {
        it("can set sail", () => {
            ship.setSail();

            expect(ship.currentPort).toBeFalsy();
            expect(dover.ships).not.toContain(ship);
        });

        it("can dock at different port", () => {
            ship.setSail();
            ship.dock();

           expect(ship.currentPort).toBe(calais);
           expect(calais.ships).toContain(ship);
        });

        it("can't sail further than its itinerary", () => {
            ship.setSail();
            ship.dock();
          
            expect(() => ship.setSail()).toThrowError("End of itinerary reached");
        });

        it('gets added to port on instantiation', () => {
            expect(dover.ships).toContain(ship);
        });
    });
});