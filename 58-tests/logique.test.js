import test from 'node:test';
import assert from 'node:assert/strict';
import { calculerTotal } from './main.js';
test('calcul normal', () => assert.equal(calculerTotal(12, 2), 24));
test('prix négatif', () => assert.throws(() => calculerTotal(-1, 2), RangeError));
test('nombre non fini', () => assert.throws(() => calculerTotal(Infinity, 2), RangeError));
test('quantité zéro', () => assert.equal(calculerTotal(12, 0), 0));
