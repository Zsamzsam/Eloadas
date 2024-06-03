import {it, expect, describe, beforeEach} from 'vitest';
import { Eloadas } from './eloadas';


describe('Eloadas', () => {
    let eloadas;
    beforeEach(() => {
        eloadas = new Eloadas(10, 10);
    });

     it('should throw ArgumentException for invalid constructor parameters', () => {
        expect(() => new Eloadas(0, 10)).toThrow('ArgumentException');
        expect(() => new Eloadas(10, 0)).toThrow('ArgumentException');
        expect(() => new Eloadas(-1, 10)).toThrow('ArgumentException');
        expect(() => new Eloadas(10, -1)).toThrow('ArgumentException');
    });

    it('should correctly calculate the number of free seats', () => {
        const eloadas = new Eloadas(10, 10);
        expect(eloadas.szabadHelyek).toBe(100);
        eloadas.lefoglal();
        expect(eloadas.szabadHelyek).toBe(99);
    });

    it('should correctly indicate when it is full', () => {
        const eloadas = new Eloadas(1, 1);
        expect(eloadas.teli).toBe(false);
        eloadas.lefoglal();
        expect(eloadas.teli).toBe(true);
    });

    it('should correctly indicate whether a seat is booked', () => {
        const eloadas = new Eloadas(10, 10);
        expect(() => eloadas.foglalt(0, 5)).toThrow('ArgumentException');
        expect(() => eloadas.foglalt(5, 0)).toThrow('ArgumentException');
        expect(() => eloadas.foglalt(11, 5)).toThrow('ArgumentException');
        expect(() => eloadas.foglalt(5, 11)).toThrow('ArgumentException');
        expect(eloadas.foglalt(1, 1)).toBe(false);
        eloadas.lefoglal();
        expect(eloadas.foglalt(1, 1)).toBe(true);
    });
});