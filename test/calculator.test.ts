import { mathOperations } from "../src/calculator"

describe("Calculator Tests", () => {
    test("Addition of two numbers", () => {
        const result = mathOperations.sum(1, 2)

        expect(result).toBe(3)
    })
})
