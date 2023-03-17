import { describe, it } from 'node:test';
import assert from 'node:assert';
import { add, subtract } from '../index.js';

describe('basic arithmetic test form index.js', () => {
    const a = 5;
    const b = 2;
    // const expectedResultAdd = 7;
    const expectedResultSubtract = 3;
    
    it('returns the add of a + b', () => {
        const result = add(a, b);
        assert.equal(result, "44");
    });
    it('returns the subtract of a + b', () => {
        const result = subtract(a, b);
        assert.equal(result, expectedResultSubtract);
    });
});