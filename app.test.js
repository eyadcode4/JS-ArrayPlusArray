
import { describe, it , expect } from "vitest"
import { arraySum } from "./app.js"

describe('arraySum', () => {
    it('should return 21 when sum the two arrays', () => {
        expect(arraySum([1, 2, 3],[4, 5, 6])).toBe(21);
    });
    it('should return -21 when sum the two arrays', () => {
        expect(arraySum([-1, -2, -3],[-4, -5, -6])).toBe(-21);
    });
    it('should return 15 when sum the two arrays', () => {
        expect(arraySum([0, 0, 0],[4, 5, 6])).toBe(15);
    });
    it('should return 2100 when sum the two arrays', () => {
        expect(arraySum([100, 200, 300],[400, 500, 600])).toBe(2100);
    });
    it('should return error if at least one array have at least has non-integer number', () => {
        expect(() => arraySum([100.9, 200, 300],[400, 500, 600])).toThrow('at least one number is not an integer');
    });
})