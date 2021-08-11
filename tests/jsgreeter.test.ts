import { JavaScriptGreeter } from "../src/jsgreeter";

describe("", () => {
    test("", () => {
        // Arrange
        let rachel = new JavaScriptGreeter("Hey");

        // Assert
        expect(rachel.greet("Rachel")).toBe("console.log('Hey, Rachel!')");
    })
    test("", () => {
        let jessica = new JavaScriptGreeter("omigod hiii");
        expect(jessica.greet("Jessica")).toBe("console.log('omigod hiii, Jessica!')");
    })
})