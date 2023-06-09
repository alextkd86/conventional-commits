import { describe, it } from 'node:test';
import assert from 'node:assert';
import { add, subtract } from '../src/index.js';

describe('basic arithmetic test form index.js', () => {
    const a = 5;
    const b = 2;
    const expectedResultAdd = 7;
    const expectedResultSubtract = 3;
    
    it('returns the add of a + b', () => {
        const result = add(a, b);
        assert.equal(result, expectedResultAdd, `The add is not working properly: ${a}+${b} is not equal to ${expectedResultAdd}`);
    });
    it('returns the subtract of a + b', () => {
        const result = subtract(a, b);
        assert.equal(result, expectedResultSubtract, `The subtract is not working properly: ${a}-${b} is not equal to ${expectedResultSubtract}`);
    });
});