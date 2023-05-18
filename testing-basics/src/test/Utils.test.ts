import { StringUtils, getStringInfo, toUpperCase } from "../app/Utils";


describe('Utils test suite', () => {

    describe('StringUtils tests', () => {

        let sut: StringUtils;

        beforeEach(() => {
            sut = new StringUtils();
        });

        afterEach(() => {
            // clearing mocks
        });

        it('Should return correct upperCase', () => {
            const actual = sut.toUpperCase('abc');

            expect(actual).toBe('ABC');
        });
        it('Should throw error on invalid argument - function', () => {
            function expectError() {
                const actual = sut.toUpperCase('');
            }

            expect(expectError).toThrow();
            expect(expectError).toThrowError('Invalid argument!');
        });
        it('Should throw error on invalid argument - arrow function', () => {
            
            expect(() => {
                sut.toUpperCase('');
            }).toThrow();
        });
        it('Should throw error on invalid argument - try catch block', (done) => {
            try {
                sut.toUpperCase('');
                done('GetStringInfo should throw error for invalid arg!')
            } catch (error) {
                expect(error).toBeInstanceOf(Error);
                expect(error).toHaveProperty('message', 'Invalid argument!');
                done();
            }
        });
    });

    //test() or:
    it('should return uppercase of valid string', () => {
        //arrange:
        const sut = toUpperCase; // System Under Test
        const expected = 'ABC'

        //act:
        const actual = sut('abc');

        //assert:
        expect(actual).toBe(expected);
    });

    describe('ToUpperCase examples', () => {
        it.each([
            {input: 'abc', expected: 'ABC'},
            {input: 'My-String', expected: 'MY-STRING'},
            {input: 'def', expected: 'DEF'}
        ])('$input toUpperCase should be $expected', ({input, expected}) => {
            const actual = toUpperCase(input);
            expect(actual).toBe(expected);
        });
    });

    describe('getStringInfo for arg My-String should', () => {
        it('return the right length', () => {
            const actual = getStringInfo('My-String');
            expect(actual.characters).toHaveLength(9);
        });
        it('return right lower case', () => {
            const actual = getStringInfo('My-String');
            expect(actual.lowerCase).toBe('my-string');
        });
        it('return right upper case', () => {
            const actual = getStringInfo('My-String');
            expect(actual.upperCase).toBe('MY-STRING');
        });
        it('return right characters', () => {
            const actual = getStringInfo('My-String');
            expect(actual.characters).toEqual(['M', 'y', '-', 'S', 't', 'r', 'i', 'n', 'g']);
            expect(actual.characters).toContain<string>('M');
            expect(actual.characters).toEqual(
                expect.arrayContaining(['S', 't', 'r', 'i', 'n', 'g', 'M', 'y', '-']) 
                // not worried about order
            );
        });
        it('return defined extra info', () => {
            const actual = getStringInfo('My-String');
            // expect(actual.extraInfo).not.toBe(undefined);
            // expect(actual.extraInfo).not.toBeUndefined();
            expect(actual.extraInfo).toBeDefined();
            //expect(actual.extraInfo).toBeTruthy();
            //when you're not sure about the format
        });
        it('return right extra info', () => {
            const actual = getStringInfo('My-String');
            expect(actual.extraInfo).toEqual({});
        });
    });


});