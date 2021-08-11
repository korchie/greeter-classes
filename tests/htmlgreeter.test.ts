import { HtmlGreeter } from "../src/htmlgreeter";

describe("",() => {
    test("DEFAULT", () => {
        // arrange
        let anu = new HtmlGreeter("Oh Hi")

        // assert
        expect(anu.greet("Anu")).toBe(`<h1>Oh Hi, Anu</h1>`)
    })
    test("NOT DEFAULT", () => {
        // arrange
        let matthew = new HtmlGreeter("Oh Hi", "p")
        // act

        // assert
        expect(matthew.greet("Matthew")).toBe(`<p>Oh Hi, Matthew</p>`)
    })
    test("daniel test", () => {
        // arrange
        let daniel = new HtmlGreeter("Damn", "h2")

        // assert
        // expect(daniel.greeting).toBe("Damn");
        // expect(daniel.tagName).toBe("h2");
        expect(daniel).toBe({greeting:"Damn", tagName:"h2"});
    })
})