const Itinerary = require("../src/Itinerary");
const Port = require("../src/Port");

describe("constructor", () => {
    let dover;
    let calais;
    let itinerary;
    beforeEach(()=> {
        dover = new Port(jest.fn());
        calais = new Port(jest.fn());
        itinerary = new Itinerary([dover, calais]);
    });

    describe("Itinerary", () => {
        it("can be instantiated", () => {
            expect(new Itinerary()).toBeInstanceOf(Object);
        });

        it("can have ports", () => {
            expect(itinerary.ports).toEqual([dover, calais]);
        });
    });
});