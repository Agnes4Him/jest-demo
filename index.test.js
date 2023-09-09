const {sum, substract, divide, multiply} = require('./index')

describe("operations", () => {
    it("should be 2 plus 4 equal 6", () => {
        const result = sum(2, 4)
        expect(result).toBe(6)
    })

    it("should be 7 minus 5 equal 2", () => {
        const result = substract(7, 5)
        expect(result).toBe(2)
    })

    it("should be 20 divided by 5 equal 4", () => {
        const result = divide(20, 5)
        expect(result).toBe(4)
    })

    it("should be 5 multiplied by 3 equal 15", () => {
        const result = multiply(5, 3)
        expect(result).toBe(15)
    })
})