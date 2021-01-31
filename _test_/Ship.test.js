const Ship = require("../src/Ship");

describe("Ship", () => {
    let dover;
    let calais;

    beforeEach(() => {
        dover = {
            addShip: jest.fn(),
            removeShip: jest.fn(),
            name: 'Dover',
            ships: []
        };
        calais = {
            addShip: jest.fn(),
            removeShip: jest.fn(),
            name: 'Calais',
            ships: []
        };

    itinerary = {
        ports: [dover, calais]
    };

    ship = new Ship(itinerary);
    });

    describe("Constructor", () => {
        it("can be instantiated", () => {
            expect(ship).toBeInstanceOf(Object);
        });

        it("has a starting port", () => {
            expect(ship.currentPort).toBe(dover);
        });
    });

    describe("Ship", () => {
        it("can set sail", () => {
            ship.setSail();

            expect(ship.currentPort).toBeFalsy();
            expect(dover.removeShip).toHaveBeenCalledWith(ship);
        });

        it("can dock at different port", () => {
            ship.setSail();
            ship.dock();

           expect(ship.currentPort).toBe(calais);
           expect(calais.addShip).toHaveBeenCalled();
        });

        it("can't sail further than its itinerary", () => {
            ship.setSail();
            ship.dock();
          
            expect(() => ship.setSail()).toThrowError("End of itinerary reached");
        });

        it('gets added to port on instantiation', () => {
            expect(dover.addShip).toHaveBeenCalledWith(ship);
        });
    });
});