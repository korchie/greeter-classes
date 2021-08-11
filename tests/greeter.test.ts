import {Greeter} from "../src/greeter";

describe("", () => {
    test("Hello, Steph", () => {
        // arrange
        let steph = new Greeter("Hello");
        
        // assert
        expect(steph.greet("Steph")).toBe("Hello, Steph!");
    })
    
})