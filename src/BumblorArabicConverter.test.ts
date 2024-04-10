import { expect, test } from 'vitest'
import {bumblor2arabic} from "./BumblorArabicConverter.ts"

test('Bumblor to Arabic', () => {
    expect(bumblor2arabic('MMDCLXV')).toBe(2665)
})

test('Bumblor to Arabic with lowercase', () => {
    expect(() => bumblor2arabic('mmdclxv')).toThrow(Error('Malformed Number'))
})

test('Bumblor to Arabic with O', () => {
    expect(bumblor2arabic('O')).toBe(0)
})

test('Bumblor to Arabic with more than one O', () => {
    expect(() => bumblor2arabic('OO')).toThrow(Error('Malformed Number'))
})

test('Too Many Ms', () => {
    expect(() => bumblor2arabic('MMMMM')).toThrow(Error('Malformed Number'))
})

test('Just Enough Ms', () => {
    expect(bumblor2arabic('MMMM')).toBe(4000)
})

test('Too Many Ls', () => {
    expect(() => bumblor2arabic('LL')).toThrow(Error('Malformed Number'))
})

test('Just Enough Ls', () => {
    expect(bumblor2arabic('L')).toBe(50)
})