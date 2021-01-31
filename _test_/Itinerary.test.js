const Itinerary = require("../src/Itinerary");

describe("constructor", () => {
    let dover;
    let calais;

    beforeEach(() => {
        dover = jest.fn();
        calais = jest.fn();
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