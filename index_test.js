import assert from "assert";
import Rooster from ".";


describe("Rooster", () => {
    describe(".announceDawn", () => {
        it("returns a rooster call", () => {
            // setup
            const expected = "cock-a-doodle-doo!";

            // exercise
            const actual = Rooster.announceDawn();

            // verify
            assert.strictEqual(actual, expected);
        });
    });
    describe(".timeAtDawn", () => {
        it("returns its argument as a string", () => {
            const inputNumber = 12;
            const expected = "12";

            const actual = Rooster.timeAtDawn(inputNumber);

            assert.equal(actual, expected);
        });
        it("throws an error if passed a number less than 0", () => {
            const inputNumber = -1;
            const expected = RangeError;

            assert.throws(() => {
                Rooster.timeAtDawn(inputNumber);
            }, expected);
        });
        it("throws an error an error if passed a number greater than 23", () => {
            const inputNumber = 24;
            const expected = RangeError;

            assert.throws(() => {
                Rooster.timeAtDawn(inputNumber);
            }, expected);
        });
    });
});
