import { LoudGreeter } from "../src/loudgreeter";

describe("", () => {
    let jim = new LoudGreeter ("Hi there")
    test("loudGreeter1", () => {
        // Arrange
        // Assert
        expect(jim.greet("Jim")).toBe("Hi there, Jim!!");
    })

    test("loudGreeter2", () => {
        // Act
        jim.addVolume();

        // Assert
        expect(jim.greet("Jim")).toBe("Hi there, Jim!!!");
    })
})