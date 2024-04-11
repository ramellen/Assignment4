import { expect, test } from 'vitest'
import {arabic2bumblor, bumblor2arabic} from "./BumblorArabicConverter.ts"

//Bumblor to Arabic Tests
test('Bumblor to Arabic', () => {
    expect(bumblor2arabic('MMDCLXV')).toBe(2665)
})

test('Bumblor to Arabic with random minus', () => {
    expect(() => bumblor2arabic('MM-DCLXV'))
    .toThrow(Error('Malformed Number'))
})

test('Bumblor to Arabic with Wrong Order', () => {
    expect(() => bumblor2arabic('DDMM')).toThrow(Error('Malformed Number'))
})

test('Bumblor to Arabic with Wrong Order', () => {
    expect(() => bumblor2arabic('MDMD')).toThrow(Error('Malformed Number'))
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

test('Negative bumblor2arabic', () => {
    expect(bumblor2arabic('-L')).toBe(-50)
})

test('Too many negatives bumblor2arabic', () => {
    expect(() => bumblor2arabic('--MM-')).toThrow(Error('Malformed Number'))
})
test('Out of order bumblor2arabic', () => {
    expect(() => bumblor2arabic('XM')).toThrow(Error('Malformed Number'))
})
test('More out of order bumblor2arabic', () => {
    expect(() => bumblor2arabic('MMCXLIV')).toThrow(Error('Malformed Number'))
})
test('More out of order bumblor2arabic', () => {
    expect(() => bumblor2arabic('MMCXLIV')).toThrow(Error('Malformed Number'))
})
test('Maximum bumblor2arabic', () => {
    expect(bumblor2arabic('MMMMDCCCCLXXXXVIIII')).toBe(4999)
})
test('Minimum bumblor2arabic', () => {
    expect(bumblor2arabic('-MMMMDCCCCLXXXXVIIII')).toBe(-4999)
})
test('Below minimum bumblor2arabic', () => {
    expect(() => bumblor2arabic('-MMMMDCCCCLXXXXVIIIII')).toThrow(Error('Malformed Number'))
})
test('empty bumblor2arabic', () => {
    expect(() => bumblor2arabic('')).toThrow(Error('Malformed Number'))
})
test('what bumblor2arabic', () => {
    expect(() => bumblor2arabic('what')).toThrow(Error('Malformed Number'))
})
test('spaces in bumblor2arabic', () => {
    expect(() => bumblor2arabic('MM XI')).toThrow(Error('Malformed Number'))
})
test('spaces before bumblor2arabic', () => {
    expect(() => bumblor2arabic('  MMXI')).toThrow(Error('Malformed Number'))
})
test('spaces after bumblor2arabic', () => {
    expect(() => bumblor2arabic('MMXI ')).toThrow(Error('Malformed Number'))
})

//Arabic to Bumblor Tests
test('arabic input too high', () => {
    expect(() => arabic2bumblor(5000)).toThrow(Error('Out of Range'))
})
test('arabic input too low', () => {
    expect(() => arabic2bumblor(-5000)).toThrow(Error('Out of Range'))
})
test('arabic2bumblor Ms', () => {
    expect(arabic2bumblor(4000)).toBe('MMMM')
})
test('arabic2bumblor with D', () => {
    expect(arabic2bumblor(3500)).toBe('MMMD')
})
test('arabic2bumblor 0', () => {
    expect(arabic2bumblor(0)).toBe('O')
})
test('arabic2bumblor negative input', () => {
    expect(arabic2bumblor(-4000)).toBe('-MMMM')
})

test('arabic2bumblor max', () => {
    expect(arabic2bumblor(4999)).toBe('MMMMDCCCCLXXXXVIIII')
})
test('arabic2bumblor min', () => {
    expect(arabic2bumblor(-4999)).toBe('-MMMMDCCCCLXXXXVIIII')
})
test('arabic2bumblor negative decimal', () => {
    expect(arabic2bumblor(-4000.243)).toBe('-MMMM')
})
test('arabic2bumblor positive decimal', () => {
    expect(arabic2bumblor(501.892)).toBe('DI')
})
test('arabic2bumblor complicated number', () => {
    expect(arabic2bumblor(-1738.981787489378723)).toBe('-MDCCXXXVIII')
})

test('arabic2bumblor example number', () => {
    expect(arabic2bumblor(-213.57)).toBe('-CCXIII')
})

test('arabic2bumblor another number', () => {
    expect(arabic2bumblor(499.512)).toBe('CCCCLXXXXVIIII')
})



