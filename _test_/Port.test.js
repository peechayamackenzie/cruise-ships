//const Ship = require("../src/cruise-ships");
const Port = require("../src/cruise-ships");

describe("constructor", () => {
    let port;
    let ship;
    beforeEach(()=> {
        port = new Port("Dover");
    });

    describe("Port", () => {
        it("can be instantiated", () => {
            expect(new Port()).toBeInstanceOf(Object);
        });
    });
});