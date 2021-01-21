const { Ship } = require("../src/cruise-ships");

describe("constructor", () => {
    let ship;
    beforeEach(()=> {
        ship = new Ship("Dover")
    });

    describe("Ship", () => {
        it("can be instantiated", () => {
            expect(new Ship()).toBeInstanceOf(Object);
        });

        it("has a starting port", () => {
            expect(ship.startingPort).toBe("Dover");
        });

        it("can set sail", () => {
            expect(ship.setSail("Dunkirk")).toBeFalsy();
        });
    });



});