import { describe, it, expect } from "vitest";
import { shuffleArray } from "./trainerHelpers";

describe("trainerHelpers - shuffleArray", () => {
    it("should return an empty array when given an empty array", () => {
        const input: number[] = [];
        const result = shuffleArray(input);
        expect(result).toEqual([]);
    });

    it("should return the same single-element array", () => {
        const input = ["greek"];
        const result = shuffleArray(input);
        expect(result).toEqual(["greek"]);
    });

    it("should maintain the same array length", () => {
        const input = [1, 2, 3, 4, 5];
        const result = shuffleArray(input);
        expect(result).toHaveLength(input.length);
    });

    it("should contain all the original elements after shuffling", () => {
        const input = ["alpha", "beta", "gamma"];
        const result = shuffleArray(input);
        expect(result).toContain("alpha");
        expect(result).toContain("beta");
        expect(result).toContain("gamma");
    });

    it("should shuffle elements and change their order for larger arrays", () => {
        const input = Array.from({ length: 30 }, (_, i) => i);
        const result = shuffleArray(input);

        expect(result).not.toEqual(input);
    });
});
