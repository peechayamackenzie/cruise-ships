//const Ship = require("../src/cruise-ships");
const Port = require("../src/Port");

describe("constructor", () => {
    let port;
    beforeEach(()=> {
        port = new Port("Dover");
    });

    describe("Port", () => {
        it("can be instantiated", () => {
            expect(new Port()).toBeInstanceOf(Object);
        });
    });
});