import { mathOperations } from "../src/calculator"

describe("Calculator Tests", () => {
    test("Addition of two numbers", () => {
        const result = mathOperations.sum(1, 2)

        expect(result).toBe(3)
    })

    test("Subtraction of 2 numbers", () => {
        const result = mathOperations.diff(10,2)

        expect(result).toBe(8);
    });

    test("Multiplication of 2 numbers", () => {
        const result = mathOperations.product(2,8)

        expect(result).toBe(16);
    });

    test("Division of 2 numbers", () => {
        const result = mathOperations.divide(24,8)

        expect(result).toBe(3);
    });
})
